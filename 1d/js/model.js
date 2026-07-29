/* NovaSolver 1D — schematic data model.
 * Holds components + wires, derives solver nodes with union-find, and owns
 * undo/redo. Kept free of DOM so the same model can be reused by a future
 * desktop shell or by a headless batch runner.
 */
(function (root) {
  "use strict";

  function uid(prefix) {
    uid._n = (uid._n || 0) + 1;
    return prefix + uid._n;
  }

  function Model() {
    this.components = [];   // {id, type, x, y, rot, p:{}}
    this.wires = [];        // {id, a:{c,pin}, b:{c,pin}}
    this._undo = [];
    this._redo = [];
  }

  Model.prototype.snapshot = function () {
    return JSON.stringify({ components: this.components, wires: this.wires });
  };
  Model.prototype.restore = function (s) {
    var o = JSON.parse(s);
    this.components = o.components;
    this.wires = o.wires;
  };
  /* call before any mutation */
  Model.prototype.commit = function () {
    this._undo.push(this.snapshot());
    if (this._undo.length > 100) this._undo.shift();
    this._redo.length = 0;
  };
  Model.prototype.undo = function () {
    if (!this._undo.length) return false;
    this._redo.push(this.snapshot());
    this.restore(this._undo.pop());
    return true;
  };
  Model.prototype.redo = function () {
    if (!this._redo.length) return false;
    this._undo.push(this.snapshot());
    this.restore(this._redo.pop());
    return true;
  };

  Model.prototype.addComponent = function (type, x, y, params) {
    var def = root.NS1D.thermal.LIB[type];
    var p = {};
    (def.params || []).forEach(function (d) { p[d.key] = d.def; });
    if (params) Object.keys(params).forEach(function (k) { p[k] = params[k]; });
    var c = { id: uid("c"), type: type, x: x, y: y, rot: 0, p: p };
    this.components.push(c);
    return c;
  };
  Model.prototype.getComponent = function (id) {
    for (var i = 0; i < this.components.length; i++)
      if (this.components[i].id === id) return this.components[i];
    return null;
  };
  Model.prototype.removeComponents = function (ids) {
    var set = {};
    ids.forEach(function (i) { set[i] = 1; });
    this.components = this.components.filter(function (c) { return !set[c.id]; });
    this.wires = this.wires.filter(function (w) { return !set[w.a.c] && !set[w.b.c]; });
  };
  Model.prototype.removeWires = function (ids) {
    var set = {};
    ids.forEach(function (i) { set[i] = 1; });
    this.wires = this.wires.filter(function (w) { return !set[w.id]; });
  };
  Model.prototype.addWire = function (a, b) {
    if (a.c === b.c && a.pin === b.pin) return null;
    var dup = this.wires.some(function (w) {
      return (w.a.c === a.c && w.a.pin === a.pin && w.b.c === b.c && w.b.pin === b.pin) ||
             (w.a.c === b.c && w.a.pin === b.pin && w.b.c === a.c && w.b.pin === a.pin);
    });
    if (dup) return null;
    var w = { id: uid("w"), a: a, b: b };
    this.wires.push(w);
    return w;
  };

  /* absolute position of a pin, honouring rotation (0/90/180/270) */
  Model.prototype.pinPos = function (comp, pinIndex) {
    var def = root.NS1D.thermal.LIB[comp.type];
    var p = def.pins[pinIndex];
    var r = ((comp.rot || 0) % 360 + 360) % 360;
    var rad = r * Math.PI / 180, cs = Math.cos(rad), sn = Math.sin(rad);
    return { x: comp.x + p.x * cs - p.y * sn, y: comp.y + p.x * sn + p.y * cs };
  };

  /* ---- union-find over (component, pin) to build solver nodes ---- */
  Model.prototype.buildNodes = function () {
    var parent = {}, self = this;
    function key(c, pin) { return c + "#" + pin; }
    function find(k) {
      if (parent[k] === undefined) parent[k] = k;
      while (parent[k] !== k) { parent[k] = parent[parent[k]]; k = parent[k]; }
      return k;
    }
    function union(a, b) {
      var ra = find(a), rb = find(b);
      if (ra !== rb) parent[ra] = rb;
    }
    this.components.forEach(function (c) {
      var def = root.NS1D.thermal.LIB[c.type];
      def.pins.forEach(function (_, i) { find(key(c.id, i)); });
    });
    this.wires.forEach(function (w) { union(key(w.a.c, w.a.pin), key(w.b.c, w.b.pin)); });

    var rootToIdx = {}, nodeCount = 0, pinNode = {};
    Object.keys(parent).forEach(function (k) {
      var r = find(k);
      if (rootToIdx[r] === undefined) rootToIdx[r] = nodeCount++;
      pinNode[k] = rootToIdx[r];
    });
    return { pinNode: pinNode, nodeCount: nodeCount, key: key };
  };

  /* Model -> flat description the thermal library can turn into a solver system */
  Model.prototype.toSolverModel = function () {
    var nodes = this.buildNodes(), elements = [];
    this.components.forEach(function (c) {
      var def = root.NS1D.thermal.LIB[c.type];
      var ns = def.pins.map(function (_, i) { return nodes.pinNode[nodes.key(c.id, i)]; });
      elements.push({ type: c.type, nodes: ns, p: c.p, ref: c.id });
    });
    return { elements: elements, nodeCount: nodes.nodeCount, pinNode: nodes.pinNode,
             key: nodes.key };
  };

  /* Problems worth telling the user about before the solver fails cryptically. */
  Model.prototype.diagnose = function () {
    var EN = root.NS1D_LANG === "en";
    var msgs = [], hasFixed = false, hasSource = false, self = this;
    this.components.forEach(function (c) {
      if (c.type === "T") hasFixed = true;
      if (c.type === "P") hasSource = true;
    });
    if (!this.components.length) return msgs;
    if (!hasFixed) msgs.push({ level: "error", text: EN
      ? "No fixed-temperature component placed (without a reference temperature the solution is undetermined)"
      : "固定温度が1つも置かれていません（基準温度が無いと解が定まりません）" });
    if (!hasSource) msgs.push({ level: "warn", text: EN
      ? "No heat source placed. Every node will settle at the fixed temperature"
      : "発熱源がありません。全節点が固定温度と同じになります" });

    // dangling pins
    var connected = {};
    this.wires.forEach(function (w) {
      connected[w.a.c + "#" + w.a.pin] = 1;
      connected[w.b.c + "#" + w.b.pin] = 1;
    });
    var dangling = 0;
    this.components.forEach(function (c) {
      var def = root.NS1D.thermal.LIB[c.type];
      def.pins.forEach(function (_, i) {
        if (!connected[c.id + "#" + i]) dangling++;
      });
    });
    if (dangling) msgs.push({ level: "warn", text: EN
      ? dangling + " unconnected pin" + (dangling > 1 ? "s" : "")
      : "未接続のピンが " + dangling + " 箇所あります" });
    return msgs;
  };

  Model.prototype.toJSON = function () {
    return { version: 1, kind: "novasolver-1d-thermal",
             components: this.components, wires: this.wires };
  };
  Model.fromJSON = function (o) {
    var m = new Model();
    m.components = (o && o.components) || [];
    m.wires = (o && o.wires) || [];
    var maxN = 0;
    m.components.concat(m.wires).forEach(function (x) {
      var n = parseInt(String(x.id).replace(/\D/g, ""), 10);
      if (n > maxN) maxN = n;
    });
    uid._n = Math.max(uid._n || 0, maxN);
    return m;
  };

  root.NS1D = root.NS1D || {};
  root.NS1D.Model = Model;
})(typeof globalThis !== "undefined" ? globalThis : this);
