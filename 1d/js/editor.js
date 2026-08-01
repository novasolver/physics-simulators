/* NovaSolver 1D — SVG schematic editor.
 * Drag & drop placement, pin-to-pin wiring, rubber-band select, rotate, undo/redo,
 * pan/zoom. Results (node temperatures) are painted straight onto the schematic
 * because the solve is instant — there is no "run" button to press.
 */
(function (root) {
  "use strict";
  var NS = "http://www.w3.org/2000/svg";
  var GRID = 20;

  function el(tag, attrs) {
    var e = document.createElementNS(NS, tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    return e;
  }
  function snap(v) { return Math.round(v / GRID) * GRID; }

  function Editor(svg, model, opts) {
    this.svg = svg;
    this.model = model;
    this.opts = opts || {};
    this.view = { x: 0, y: 0, k: 1 };
    this.selection = { comps: [], wires: [] };
    this.results = null;          // {T:[], pinNode:{}, key:fn}
    this.pending = null;          // armed component type from the palette
    this._drag = null;
    this._build();
    this._bindEvents();
    this.render();
  }

  Editor.prototype._build = function () {
    var s = this.svg;
    s.innerHTML =
      '<defs>' +
      '<pattern id="ns1d-grid" width="20" height="20" patternUnits="userSpaceOnUse">' +
      '<circle cx="0.5" cy="0.5" r="0.9" fill="#c9d3e0"/></pattern>' +
      '</defs>';
    this.bg = el("rect", { x: -4000, y: -4000, width: 8000, height: 8000,
                           fill: "url(#ns1d-grid)" });
    this.root = el("g");
    this.layerWire = el("g");
    this.layerComp = el("g");
    this.layerOverlay = el("g", { "pointer-events": "none" });
    this.root.appendChild(this.bg);
    this.root.appendChild(this.layerWire);
    this.root.appendChild(this.layerComp);
    this.root.appendChild(this.layerOverlay);
    s.appendChild(this.root);
  };

  Editor.prototype.toWorld = function (evt) {
    var r = this.svg.getBoundingClientRect();
    return {
      x: (evt.clientX - r.left - this.view.x) / this.view.k,
      y: (evt.clientY - r.top - this.view.y) / this.view.k
    };
  };

  Editor.prototype._applyView = function () {
    this.root.setAttribute("transform",
      "translate(" + this.view.x + "," + this.view.y + ") scale(" + this.view.k + ")");
  };

  /* ---------------- rendering ---------------- */
  Editor.prototype.render = function () {
    var self = this, m = this.model, LIB = root.NS1D.thermal.LIB;
    this._applyView();
    this.layerWire.innerHTML = "";
    this.layerComp.innerHTML = "";
    this.layerOverlay.innerHTML = "";

    // wires
    m.wires.forEach(function (w) {
      var ca = m.getComponent(w.a.c), cb = m.getComponent(w.b.c);
      if (!ca || !cb) return;
      var pa = m.pinPos(ca, w.a.pin), pb = m.pinPos(cb, w.b.pin);
      var mid = pa.x + (pb.x - pa.x) / 2;
      var d = "M" + pa.x + " " + pa.y + " L" + mid + " " + pa.y +
              " L" + mid + " " + pb.y + " L" + pb.x + " " + pb.y;
      var sel = self.selection.wires.indexOf(w.id) >= 0;
      var g = el("g", { "data-wire": w.id, class: "ns1d-wire" + (sel ? " sel" : "") });
      g.appendChild(el("path", { d: d, class: "hit" }));
      g.appendChild(el("path", { d: d, class: "line" }));
      self.layerWire.appendChild(g);
    });

    // components
    m.components.forEach(function (c) {
      var def = LIB[c.type];
      var sel = self.selection.comps.indexOf(c.id) >= 0;
      var g = el("g", {
        "data-comp": c.id,
        class: "ns1d-comp" + (sel ? " sel" : ""),
        transform: "translate(" + c.x + "," + c.y + ") rotate(" + (c.rot || 0) + ")"
      });
      var sym = el("g", { class: "sym" });
      sym.innerHTML = def.symbol;
      g.appendChild(sym);
      def.pins.forEach(function (p, i) {
        var pin = el("circle", { cx: p.x, cy: p.y, r: 5, class: "pin", "data-pin": i });
        g.appendChild(pin);
      });
      // value label (counter-rotated so text stays upright)
      var vals = (def.params || []).map(function (d) {
        var v = c.p[d.key];
        return d.label + "=" + v + (d.unit && d.unit !== "-" ? " " + d.unit : "");
      }).join("  ");
      if (vals) {
        var t = el("text", { x: 0, y: 40, class: "val",
                             transform: "rotate(" + (-(c.rot || 0)) + ")" });
        t.textContent = vals;
        g.appendChild(t);
      }
      self.layerComp.appendChild(g);
    });

    this._renderResults();
  };

  Editor.prototype._renderResults = function () {
    var r = this.results;
    if (!r || !r.T) return;
    var m = this.model, self = this, drawn = {};
    var min = Infinity, max = -Infinity;
    for (var i = 0; i < r.T.length; i++) {
      if (r.T[i] < min) min = r.T[i];
      if (r.T[i] > max) max = r.T[i];
    }
    var span = Math.max(1e-6, max - min);
    m.components.forEach(function (c) {
      var def = root.NS1D.thermal.LIB[c.type];
      def.pins.forEach(function (_, i) {
        var node = r.pinNode[r.key(c.id, i)];
        if (node === undefined || drawn[node]) return;
        drawn[node] = 1;
        var p = m.pinPos(c, i), T = r.T[node];
        var f = (T - min) / span;
        var col = "hsl(" + Math.round(215 - 215 * f) + ",85%,45%)";
        var g = el("g", { class: "ns1d-res" });
        g.appendChild(el("circle", { cx: p.x, cy: p.y, r: 6.5, fill: col,
                                     stroke: "#fff", "stroke-width": 1.5 }));
        var t = el("text", { x: p.x + 10, y: p.y - 8, fill: col, class: "restxt" });
        t.textContent = T.toFixed(1) + (root.NS1D.unit || "°C");
        g.appendChild(t);
        self.layerOverlay.appendChild(g);
      });
    });
  };

  /* ---------------- events ---------------- */
  Editor.prototype._bindEvents = function () {
    var self = this, s = this.svg;

    /* HTML5 drag & drop from the palette (the primary way to place parts) */
    s.addEventListener("dragover", function (e) {
      if (e.dataTransfer && Array.prototype.indexOf.call(e.dataTransfer.types, "text/ns1d") >= 0) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
        s.classList.add("dropping");
      }
    });
    s.addEventListener("dragleave", function () { s.classList.remove("dropping"); });
    s.addEventListener("drop", function (e) {
      e.preventDefault();
      s.classList.remove("dropping");
      var type = e.dataTransfer.getData("text/ns1d");
      if (!type || !root.NS1D.thermal.LIB[type]) return;
      var w = self.toWorld(e);
      self.model.commit();
      var c = self.model.addComponent(type, snap(w.x), snap(w.y));
      self.pending = null;
      self.selection = { comps: [c.id], wires: [] };
      self.solveAndRender();
      self._emit();
    });

    s.addEventListener("mousedown", function (e) { self._onDown(e); });
    window.addEventListener("mousemove", function (e) { self._onMove(e); });
    window.addEventListener("mouseup", function (e) { self._onUp(e); });
    s.addEventListener("dblclick", function (e) { self._onDblClick(e); });
    s.addEventListener("wheel", function (e) { self._onWheel(e); }, { passive: false });
    s.addEventListener("contextmenu", function (e) { e.preventDefault(); });

    // touch: single finger = drag, mirrors mouse handlers
    s.addEventListener("touchstart", function (e) {
      if (e.touches.length === 1) { self._onDown(self._touch(e.touches[0]), true); }
    }, { passive: false });
    s.addEventListener("touchmove", function (e) {
      if (e.touches.length === 1 && self._drag) {
        e.preventDefault();
        self._onMove(self._touch(e.touches[0]));
      }
    }, { passive: false });
    s.addEventListener("touchend", function (e) { self._onUp(self._touch(e.changedTouches[0])); });

    document.addEventListener("keydown", function (e) {
      if (/input|textarea|select/i.test((e.target.tagName || ""))) return;
      var k = e.key.toLowerCase();
      if (k === "delete" || k === "backspace") { e.preventDefault(); self.deleteSelection(); }
      else if (k === "r") { self.rotateSelection(); }
      else if (k === "escape") { self.pending = null; self.clearSelection(); self._emit(); }
      else if ((e.ctrlKey || e.metaKey) && k === "z") {
        e.preventDefault();
        if (e.shiftKey) { self.model.redo(); } else { self.model.undo(); }
        self.clearSelection(); self.solveAndRender();
      } else if ((e.ctrlKey || e.metaKey) && k === "y") {
        e.preventDefault(); self.model.redo(); self.clearSelection(); self.solveAndRender();
      }
    });
  };

  Editor.prototype._touch = function (t) {
    return { clientX: t.clientX, clientY: t.clientY, target: document.elementFromPoint(t.clientX, t.clientY),
             button: 0, shiftKey: false, preventDefault: function () {} };
  };

  Editor.prototype._hit = function (target) {
    var node = target, out = { comp: null, pin: null, wire: null };
    while (node && node !== this.svg) {
      if (node.getAttribute) {
        if (node.classList && node.classList.contains("pin") && out.pin === null)
          out.pin = parseInt(node.getAttribute("data-pin"), 10);
        var c = node.getAttribute("data-comp");
        if (c) { out.comp = c; break; }
        var w = node.getAttribute("data-wire");
        if (w) { out.wire = w; break; }
      }
      node = node.parentNode;
    }
    return out;
  };

  Editor.prototype._onDown = function (e, isTouch) {
    var w = this.toWorld(e), hit = this._hit(e.target);

    if (this.pending) {                       // placing a new component
      this.model.commit();
      var c = this.model.addComponent(this.pending, snap(w.x), snap(w.y));
      this.pending = null;
      this.selection = { comps: [c.id], wires: [] };
      this.solveAndRender(); this._emit();
      return;
    }

    if (e.button === 1 || e.shiftKey && !hit.comp && !hit.wire) {
      this._drag = { mode: "pan", sx: e.clientX, sy: e.clientY,
                     vx: this.view.x, vy: this.view.y };
      return;
    }

    if (hit.comp && hit.pin !== null) {       // wire: drag pin->pin, or click pin then click pin
      var from = { c: hit.comp, pin: hit.pin };
      if (this._wireFrom) {                   // second click completes the wire
        if (!(this._wireFrom.c === from.c && this._wireFrom.pin === from.pin)) {
          this.model.commit();
          this.model.addWire(this._wireFrom, from);
        }
        this._wireFrom = null;
        this.solveAndRender(); this._emit();
        return;
      }
      this._drag = { mode: "wire", from: from, moved: false };
      this._tmp = el("path", { class: "ns1d-tmpwire" });
      this.layerOverlay.appendChild(this._tmp);
      return;
    }
    this._wireFrom = null;

    if (hit.comp) {                            // move component(s)
      if (this.selection.comps.indexOf(hit.comp) < 0) {
        this.selection = { comps: [hit.comp], wires: [] };
      }
      this.model.commit();
      var self = this, start = {};
      this.selection.comps.forEach(function (id) {
        var cc = self.model.getComponent(id);
        if (cc) start[id] = { x: cc.x, y: cc.y };
      });
      this._drag = { mode: "move", ox: w.x, oy: w.y, start: start, moved: false };
      this.render(); this._emit();
      return;
    }

    if (hit.wire) {
      this.selection = { comps: [], wires: [hit.wire] };
      this.render(); this._emit();
      return;
    }

    // empty space -> rubber band
    this._drag = { mode: "band", x0: w.x, y0: w.y };
    this._band = el("rect", { class: "ns1d-band" });
    this.layerOverlay.appendChild(this._band);
    if (!e.shiftKey) { this.clearSelection(); this.render(); this._emit(); }
  };

  Editor.prototype._onMove = function (e) {
    var d = this._drag;
    if (!d) return;
    var w = this.toWorld(e);

    if (d.mode === "pan") {
      this.view.x = d.vx + (e.clientX - d.sx);
      this.view.y = d.vy + (e.clientY - d.sy);
      this._applyView();
    } else if (d.mode === "move") {
      var dx = snap(w.x - d.ox), dy = snap(w.y - d.oy), self = this;
      if (dx || dy) d.moved = true;
      Object.keys(d.start).forEach(function (id) {
        var c = self.model.getComponent(id);
        if (c) { c.x = d.start[id].x + dx; c.y = d.start[id].y + dy; }
      });
      this.render();
    } else if (d.mode === "wire") {
      d.moved = true;
      var from = this.model.getComponent(d.from.c);
      if (!from) return;
      var p = this.model.pinPos(from, d.from.pin);
      var mid = p.x + (w.x - p.x) / 2;
      this._tmp.setAttribute("d", "M" + p.x + " " + p.y + " L" + mid + " " + p.y +
                                  " L" + mid + " " + w.y + " L" + w.x + " " + w.y);
    } else if (d.mode === "band") {
      var x = Math.min(d.x0, w.x), y = Math.min(d.y0, w.y);
      var bw = Math.abs(w.x - d.x0), bh = Math.abs(w.y - d.y0);
      this._band.setAttribute("x", x); this._band.setAttribute("y", y);
      this._band.setAttribute("width", bw); this._band.setAttribute("height", bh);
      d.rect = { x: x, y: y, w: bw, h: bh };
    }
  };

  Editor.prototype._onUp = function (e) {
    var d = this._drag;
    this._drag = null;
    if (!d) return;

    if (d.mode === "wire") {
      if (this._tmp && this._tmp.parentNode) this._tmp.parentNode.removeChild(this._tmp);
      var hit = this._hit(e.target);
      if (hit.comp && hit.pin !== null &&
          !(hit.comp === d.from.c && hit.pin === d.from.pin)) {
        this.model.commit();
        this.model.addWire(d.from, { c: hit.comp, pin: hit.pin });
      } else if (!d.moved) {
        // a plain click on a pin: arm click-to-click wiring (touch friendly)
        this._wireFrom = d.from;
      }
      this.solveAndRender(); this._emit();
    } else if (d.mode === "band") {
      if (this._band && this._band.parentNode) this._band.parentNode.removeChild(this._band);
      if (d.rect && (d.rect.w > 3 || d.rect.h > 3)) {
        var r = d.rect, sel = [];
        this.model.components.forEach(function (c) {
          if (c.x >= r.x && c.x <= r.x + r.w && c.y >= r.y && c.y <= r.y + r.h) sel.push(c.id);
        });
        this.selection = { comps: sel, wires: [] };
      }
      this.render(); this._emit();
    } else if (d.mode === "move") {
      if (d.moved) this.solveAndRender();
      this._emit();
    }
  };

  Editor.prototype._onDblClick = function (e) {
    var hit = this._hit(e.target);
    if (hit.comp && this.opts.onEdit) this.opts.onEdit(this.model.getComponent(hit.comp));
  };

  Editor.prototype._onWheel = function (e) {
    e.preventDefault();
    var r = this.svg.getBoundingClientRect();
    var mx = e.clientX - r.left, my = e.clientY - r.top;
    var f = e.deltaY < 0 ? 1.12 : 1 / 1.12;
    var k = Math.min(3, Math.max(0.3, this.view.k * f));
    f = k / this.view.k;
    this.view.x = mx - (mx - this.view.x) * f;
    this.view.y = my - (my - this.view.y) * f;
    this.view.k = k;
    this._applyView();
  };

  /* ---------------- commands ---------------- */
  Editor.prototype.clearSelection = function () { this.selection = { comps: [], wires: [] }; };

  Editor.prototype.deleteSelection = function () {
    if (!this.selection.comps.length && !this.selection.wires.length) return;
    this.model.commit();
    this.model.removeComponents(this.selection.comps);
    this.model.removeWires(this.selection.wires);
    this.clearSelection();
    this.solveAndRender(); this._emit();
  };

  Editor.prototype.rotateSelection = function () {
    if (!this.selection.comps.length) return;
    this.model.commit();
    var self = this;
    this.selection.comps.forEach(function (id) {
      var c = self.model.getComponent(id);
      if (c) c.rot = ((c.rot || 0) + 90) % 360;
    });
    this.solveAndRender(); this._emit();
  };

  Editor.prototype.arm = function (type) { this.pending = type; };

  Editor.prototype.fit = function () {
    var m = this.model;
    if (!m.components.length) { this.view = { x: 60, y: 60, k: 1 }; this._applyView(); return; }
    var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    m.components.forEach(function (c) {
      minX = Math.min(minX, c.x - 60); maxX = Math.max(maxX, c.x + 60);
      minY = Math.min(minY, c.y - 60); maxY = Math.max(maxY, c.y + 60);
    });
    var r = this.svg.getBoundingClientRect();
    var k = Math.min(r.width / (maxX - minX), r.height / (maxY - minY), 1.6);
    this.view.k = Math.max(0.3, k);
    this.view.x = r.width / 2 - (minX + maxX) / 2 * this.view.k;
    this.view.y = r.height / 2 - (minY + maxY) / 2 * this.view.k;
    this._applyView();
  };

  /* solve on every edit — the schematic doubles as the result display */
  Editor.prototype.solveAndRender = function () {
    var sm = this.model.toSolverModel();
    this.results = null;
    if (sm.nodeCount > 0) {
      var sys = root.NS1D.thermal.buildSystem(sm);
      var res = root.NS1D.solver.solveSteady(sys);
      if (res.ok) {
        this.results = { T: res.T, pinNode: sm.pinNode, key: sm.key,
                         system: sys, solverModel: sm };
      } else {
        this.lastError = res.reason;
      }
    }
    this.render();
    if (this.opts.onSolved) this.opts.onSolved(this.results, this.model.diagnose());
  };

  Editor.prototype._emit = function () {
    if (this.opts.onChange) this.opts.onChange(this.selection);
  };

  root.NS1D = root.NS1D || {};
  root.NS1D.Editor = Editor;
  root.NS1D.GRID = GRID;
})(typeof globalThis !== "undefined" ? globalThis : this);
