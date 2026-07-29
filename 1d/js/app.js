/* NovaSolver 1D — application shell: palette, examples, parameter panel,
 * transient plot, energy balance, verification panel, save/load. */
(function (root) {
  "use strict";
  var NS1D = root.NS1D;
  var editor, model;
  /* Language: the EN page sets window.NS1D_LANG='en' before loading this file.
     Component labels come from lib-thermal.js (label/labelEn); everything else
     lives in this dict so the JS stays shared across languages. */
  var EN = root.NS1D_LANG === "en";
  var TXT = EN ? {
    place: " — click, then click the canvas to place",
    placing: " selected. Click on the canvas to place it.",
    pickParam: '<p class="muted">Select a component to edit its parameters (double-click also works).</p>',
    rotate: "Rotate (R)", del: "Delete (Del)",
    empty: '<p class="muted">Place and connect components to see results here.</p>',
    maxT: "Max temperature [°C]", nodes: "Nodes",
    pin: "Power in ΣP", pout: "Power out", balance: "Balance error",
    vHead: "<th>Verification case</th><th>Analytic</th><th>Computed</th><th>Rel. error</th><th></th>",
    confirmClear: "Clear the schematic. Are you sure?",
    loadFail: "Could not load the file: "
  } : {
    place: " — クリックしてから図面をクリックで配置",
    placing: " を配置します。図面上をクリックしてください。",
    pickParam: '<p class="muted">部品を選ぶとパラメータを編集できます（ダブルクリックでも可）。</p>',
    rotate: "回転 (R)", del: "削除 (Del)",
    empty: '<p class="muted">部品を配置して接続すると、ここに結果が出ます。</p>',
    maxT: "最高温度 [°C]", nodes: "節点数",
    pin: "投入熱量 ΣP", pout: "放熱量", balance: "収支誤差",
    vHead: "<th>検証ケース</th><th>解析解</th><th>計算値</th><th>相対誤差</th><th></th>",
    confirmClear: "図面を消去します。よろしいですか？",
    loadFail: "読み込めませんでした: "
  };
  function compLabel(def) { return EN && def.labelEn ? def.labelEn : def.label; }

  var EXAMPLES = {
    power: {
      name: "パワーモジュール冷却", nameEn: "Power module cooling",
      build: function () {
        var m = new NS1D.Model();
        var j = m.addComponent("P", 120, 260, { P: 120 });
        var r1 = m.addComponent("R", 240, 160, { R: 0.15 });
        var r2 = m.addComponent("R", 380, 160, { R: 0.05 });
        var r3 = m.addComponent("R", 520, 160, { R: 0.40 });
        var cj = m.addComponent("C", 120, 60, { C: 2 });
        var amb = m.addComponent("T", 660, 60, { T: 40 });
        m.addWire({ c: j.id, pin: 0 }, { c: r1.id, pin: 0 });
        m.addWire({ c: cj.id, pin: 0 }, { c: r1.id, pin: 0 });
        m.addWire({ c: r1.id, pin: 1 }, { c: r2.id, pin: 0 });
        m.addWire({ c: r2.id, pin: 1 }, { c: r3.id, pin: 0 });
        m.addWire({ c: r3.id, pin: 1 }, { c: amb.id, pin: 0 });
        return m;
      }
    },
    heatsink: {
      name: "ヒートシンク（対流＋放射）", nameEn: "Heat sink (convection + radiation)",
      build: function () {
        var m = new NS1D.Model();
        var p = m.addComponent("P", 120, 260, { P: 35 });
        var r = m.addComponent("R", 240, 160, { R: 0.25 });
        var cv = m.addComponent("CONV", 400, 100, { h: 12, A: 0.08 });
        var rd = m.addComponent("RAD", 400, 220, { eps: 0.9, A: 0.08 });
        var amb = m.addComponent("T", 560, 160, { T: 25 });
        m.addWire({ c: p.id, pin: 0 }, { c: r.id, pin: 0 });
        m.addWire({ c: r.id, pin: 1 }, { c: cv.id, pin: 0 });
        m.addWire({ c: r.id, pin: 1 }, { c: rd.id, pin: 0 });
        m.addWire({ c: cv.id, pin: 1 }, { c: amb.id, pin: 0 });
        m.addWire({ c: rd.id, pin: 1 }, { c: amb.id, pin: 0 });
        return m;
      }
    },
    battery: {
      name: "電池セル→冷却板", nameEn: "Battery cell to cold plate",
      build: function () {
        var m = new NS1D.Model();
        var p = m.addComponent("P", 120, 260, { P: 8 });
        var cc = m.addComponent("C", 120, 60, { C: 850 });
        var r1 = m.addComponent("R", 260, 160, { R: 1.2 });
        var r2 = m.addComponent("R", 400, 160, { R: 0.3 });
        var cp = m.addComponent("C", 400, 40, { C: 400 });
        var cv = m.addComponent("CONV", 540, 160, { h: 800, A: 0.02 });
        var cool = m.addComponent("T", 700, 60, { T: 20 });
        m.addWire({ c: p.id, pin: 0 }, { c: r1.id, pin: 0 });
        m.addWire({ c: cc.id, pin: 0 }, { c: r1.id, pin: 0 });
        m.addWire({ c: r1.id, pin: 1 }, { c: r2.id, pin: 0 });
        m.addWire({ c: r2.id, pin: 1 }, { c: cv.id, pin: 0 });
        m.addWire({ c: cp.id, pin: 0 }, { c: cv.id, pin: 0 });
        m.addWire({ c: cv.id, pin: 1 }, { c: cool.id, pin: 0 });
        return m;
      }
    }
  };

  function $(id) { return document.getElementById(id); }

  /* ---------- palette ---------- */
  function buildPalette() {
    var box = $("palette"), LIB = NS1D.thermal.LIB;
    Object.keys(LIB).forEach(function (type) {
      var def = LIB[type];
      var b = document.createElement("button");
      b.className = "pal-item";
      b.type = "button";
      b.innerHTML =
        '<svg viewBox="-40 -40 80 80" class="pal-sym">' + def.symbol + '</svg>' +
        '<span>' + compLabel(def) + '</span>';
      b.title = compLabel(def) + TXT.place;
      b.draggable = true;
      b.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/ns1d", type);
        e.dataTransfer.effectAllowed = "copy";
        b.classList.add("dragging");
      });
      b.addEventListener("dragend", function () { b.classList.remove("dragging"); });
      b.addEventListener("click", function () {
        editor.arm(type);
        Array.prototype.forEach.call(box.querySelectorAll(".pal-item"), function (x) {
          x.classList.remove("armed");
        });
        b.classList.add("armed");
        $("hint").textContent = compLabel(def) + TXT.placing;
      });
      box.appendChild(b);
    });
  }

  /* ---------- parameter panel ---------- */
  function renderParams(sel) {
    var box = $("params");
    var ids = sel && sel.comps ? sel.comps : [];
    if (ids.length !== 1) {
      box.innerHTML = TXT.pickParam;
      return;
    }
    var c = model.getComponent(ids[0]);
    if (!c) return;
    var def = NS1D.thermal.LIB[c.type];
    var h = '<div class="pfield-head">' + compLabel(def) + '</div>';
    (def.params || []).forEach(function (d) {
      h += '<label class="pfield"><span>' + d.label +
           (d.unit && d.unit !== "-" ? ' <em>[' + d.unit + ']</em>' : '') + '</span>' +
           '<input type="number" step="any" data-key="' + d.key + '" value="' + c.p[d.key] + '"></label>';
    });
    h += '<div class="prow"><button type="button" id="btnRot">' + TXT.rotate + '</button>' +
         '<button type="button" id="btnDel" class="danger">' + TXT.del + '</button></div>';
    box.innerHTML = h;
    Array.prototype.forEach.call(box.querySelectorAll("input"), function (inp) {
      inp.addEventListener("input", function () {
        var v = parseFloat(inp.value);
        if (!isFinite(v)) return;
        c.p[inp.getAttribute("data-key")] = v;
        editor.solveAndRender();
      });
      inp.addEventListener("focus", function () { model.commit(); });
    });
    $("btnRot").addEventListener("click", function () { editor.rotateSelection(); });
    $("btnDel").addEventListener("click", function () { editor.deleteSelection(); });
  }

  /* ---------- results ---------- */
  function renderResults(res, diag) {
    var box = $("results");
    var h = "";
    if (diag && diag.length) {
      diag.forEach(function (d) {
        h += '<div class="msg ' + d.level + '">' + d.text + '</div>';
      });
    }
    if (!res) {
      if (!h) h = TXT.empty;
      box.innerHTML = h;
      $("plotWrap").style.display = "none";
      return;
    }
    var T = res.T, maxT = -Infinity, maxNode = -1;
    for (var i = 0; i < T.length; i++) if (T[i] > maxT) { maxT = T[i]; maxNode = i; }
    h += '<div class="stat-row"><div class="stat"><div class="sv">' + maxT.toFixed(1) +
         '</div><div class="sl">' + TXT.maxT + '</div></div>' +
         '<div class="stat"><div class="sv">' + T.length + '</div><div class="sl">' + TXT.nodes + '</div></div></div>';

    // energy balance: total injected power vs. flow into fixed-temperature nodes
    var Pin = 0;
    model.components.forEach(function (c) { if (c.type === "P") Pin += parseFloat(c.p.P) || 0; });
    var Pout = 0, sm = res.solverModel;
    res.system.elements.forEach(function (e) {
      if (!e.flow || e.nodes.length < 2) return;
      var isFixedB = res.system.fixed.some(function (f) { return f.node === e.nodes[1]; });
      var isFixedA = res.system.fixed.some(function (f) { return f.node === e.nodes[0]; });
      var q = NS1D.solver.elementFlow(e, T);
      if (isFixedB) Pout += q;
      else if (isFixedA) Pout -= q;
    });
    var err = Pin !== 0 ? Math.abs(Pout - Pin) / Math.abs(Pin) * 100 : 0;
    h += '<table class="restab"><tr><th>' + TXT.pin + '</th><td>' + Pin.toFixed(2) + ' W</td></tr>' +
         '<tr><th>' + TXT.pout + '</th><td>' + Pout.toFixed(2) + ' W</td></tr>' +
         '<tr><th>' + TXT.balance + '</th><td class="' + (err < 0.1 ? "good" : "bad") + '">' +
         err.toFixed(3) + ' %</td></tr></table>';
    box.innerHTML = h;
    drawTransient(res);
  }

  /* ---------- transient plot ---------- */
  function drawTransient(res) {
    var wrap = $("plotWrap"), cv = $("plot");
    var hasC = model.components.some(function (c) { return c.type === "C"; });
    if (!hasC) { wrap.style.display = "none"; return; }
    wrap.style.display = "";

    var sys = res.system;
    var dt = parseFloat($("dt").value) || 1;
    var steps = Math.max(10, Math.min(3000, parseInt($("steps").value, 10) || 200));
    var T0 = new Float64Array(res.T.length);
    T0.fill(parseFloat($("t0").value) || 25);
    var out = NS1D.solver.solveTransient(sys, { dt: dt, steps: steps, initial: T0 });
    if (!out.ok) { wrap.style.display = "none"; return; }

    var ctx = cv.getContext("2d");
    var dpr = window.devicePixelRatio || 1;
    var w = cv.clientWidth, hgt = 220;
    if (cv.width !== w * dpr || cv.height !== hgt * dpr) {
      cv.width = w * dpr; cv.height = hgt * dpr; cv.style.height = hgt + "px";
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, hgt);

    var L = 52, R = 12, Tp = 12, B = 30;
    var n = out.history[0].length, tmax = out.times[out.times.length - 1];
    var lo = Infinity, hi = -Infinity;
    out.history.forEach(function (row) {
      for (var i = 0; i < n; i++) { if (row[i] < lo) lo = row[i]; if (row[i] > hi) hi = row[i]; }
    });
    if (hi - lo < 1) { hi = lo + 1; }
    var px = function (t) { return L + (w - L - R) * (t / tmax); };
    var py = function (v) { return Tp + (hgt - Tp - B) * (1 - (v - lo) / (hi - lo)); };

    ctx.strokeStyle = "#dee2e6"; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(L, Tp); ctx.lineTo(L, hgt - B); ctx.lineTo(w - R, hgt - B); ctx.stroke();
    ctx.fillStyle = "#6c757d"; ctx.font = "11px system-ui";
    for (var g = 0; g <= 4; g++) {
      var v = lo + (hi - lo) * g / 4, y = py(v);
      ctx.fillText(v.toFixed(1), 6, y + 4);
      ctx.strokeStyle = "#eef1f5"; ctx.beginPath();
      ctx.moveTo(L, y); ctx.lineTo(w - R, y); ctx.stroke();
    }
    ctx.fillText("t [s]", w - R - 26, hgt - 8);
    ctx.fillText("0", L - 4, hgt - 12);
    ctx.fillText(tmax.toFixed(0), w - R - 18, hgt - 12);

    for (var i2 = 0; i2 < n; i2++) {
      ctx.strokeStyle = "hsl(" + Math.round(215 - 190 * (i2 / Math.max(1, n - 1))) + ",80%,45%)";
      ctx.lineWidth = 1.8; ctx.beginPath();
      for (var k = 0; k < out.history.length; k++) {
        var x = px(out.times[k]), y2 = py(out.history[k][i2]);
        if (k === 0) ctx.moveTo(x, y2); else ctx.lineTo(x, y2);
      }
      ctx.stroke();
    }
  }

  /* ---------- verification panel ---------- */
  function renderVerify() {
    var rows = NS1D.verify.run(), pass = 0;
    var h = '<table class="vtab"><thead><tr>' + TXT.vHead + '</tr></thead><tbody>';
    rows.forEach(function (r) {
      if (r.pass) pass++;
      h += '<tr><td>' + (EN && r.nameEn ? r.nameEn : r.name) + '<br><code>' + r.ref + '</code></td>' +
           '<td>' + Number(r.exact).toPrecision(7) + '</td>' +
           '<td>' + Number(r.got).toPrecision(7) + '</td>' +
           '<td>' + r.rel.toExponential(1) + '</td>' +
           '<td class="' + (r.pass ? "good" : "bad") + '">' + (r.pass ? "PASS" : "FAIL") + '</td></tr>';
    });
    h += '</tbody></table>';
    $("verifyBody").innerHTML = h;
    $("verifySummary").textContent = pass + " / " + rows.length + " PASS";
    $("verifySummary").className = pass === rows.length ? "good" : "bad";
  }

  /* ---------- examples / io ---------- */
  function loadExample(key) {
    model = EXAMPLES[key].build();
    editor.model = model;
    editor.clearSelection();
    editor.solveAndRender();
    editor.fit();
    renderParams(null);
  }

  function init() {
    model = new NS1D.Model();
    editor = new NS1D.Editor($("sheet"), model, {
      onChange: renderParams,
      onSolved: renderResults,
      onEdit: function (c) {
        editor.selection = { comps: [c.id], wires: [] };
        editor.render();
        renderParams(editor.selection);
        var f = $("params").querySelector("input");
        if (f) f.focus();
      }
    });
    buildPalette();

    var sel = $("exampleSel");
    Object.keys(EXAMPLES).forEach(function (k) {
      var o = document.createElement("option");
      o.value = k; o.textContent = EN ? EXAMPLES[k].nameEn : EXAMPLES[k].name;
      sel.appendChild(o);
    });
    sel.addEventListener("change", function () { if (sel.value) loadExample(sel.value); });

    $("btnClear").addEventListener("click", function () {
      if (!confirm(TXT.confirmClear)) return;
      model = new NS1D.Model(); editor.model = model;
      editor.clearSelection(); editor.solveAndRender(); renderParams(null);
    });
    $("btnFit").addEventListener("click", function () { editor.fit(); });
    $("btnUndo").addEventListener("click", function () {
      model.undo(); editor.clearSelection(); editor.solveAndRender();
    });
    $("btnRedo").addEventListener("click", function () {
      model.redo(); editor.clearSelection(); editor.solveAndRender();
    });
    $("btnSave").addEventListener("click", function () {
      var blob = new Blob([JSON.stringify(model.toJSON(), null, 1)], { type: "application/json" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "novasolver-1d-thermal.json";
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    });
    $("fileLoad").addEventListener("change", function (e) {
      var f = e.target.files[0];
      if (!f) return;
      var fr = new FileReader();
      fr.onload = function () {
        try {
          model = NS1D.Model.fromJSON(JSON.parse(fr.result));
          editor.model = model; editor.clearSelection();
          editor.solveAndRender(); editor.fit(); renderParams(null);
        } catch (err) { alert(TXT.loadFail + err.message); }
      };
      fr.readAsText(f);
      e.target.value = "";
    });
    ["dt", "steps", "t0"].forEach(function (id) {
      $(id).addEventListener("input", function () {
        if (editor.results) drawTransient(editor.results);
      });
    });
    window.addEventListener("resize", function () {
      if (editor.results) drawTransient(editor.results);
    });

    renderVerify();
    sel.value = "power";
    loadExample("power");

    /* exposed for debugging, automated tests, and power users driving the model
       from the console (the solver API is stable — see /1d/js/solver.js) */
    NS1D.app = {
      editor: function () { return editor; },
      model: function () { return model; },
      loadExample: loadExample,
      examples: EXAMPLES
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }
})(typeof globalThis !== "undefined" ? globalThis : this);
