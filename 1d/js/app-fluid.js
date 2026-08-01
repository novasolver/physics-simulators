/* NovaSolver 1D — application shell for the FLUID (piping network) page.
 * Counterpart of app.js (thermal). The editor and model are domain-agnostic through
 * the NS1D.thermal alias set below; this file supplies the fluid palette, examples,
 * result rendering (pressures in kPa, flows in L/min) and the fluid verify table. */
(function (root) {
  "use strict";
  var NS1D = root.NS1D;

  /* The generic editor/model resolve the component library via NS1D.thermal.
   * On this page only the fluid library is loaded, so alias it in. */
  NS1D.thermal = NS1D.fluid;
  NS1D.unit = " kPa";                      // node-value overlay unit in the editor

  var editor, model;
  var EN = root.NS1D_LANG === "en";
  var TXT = EN ? {
    place: " — click, then click the canvas to place",
    placing: " selected. Click on the canvas to place it.",
    pickParam: '<p class="muted">Select a component to edit its parameters (double-click also works).</p>',
    rotate: "Rotate (R)", del: "Delete (Del)",
    empty: '<p class="muted">Place and connect components to see results here.</p>',
    maxP: "Max pressure [kPa]", nodes: "Nodes",
    qin: "Inflow ΣQ", qout: "Outflow", balance: "Balance error",
    flows: "Element flows", flowCol: "<th>Element</th><th>Q [L/min]</th>",
    vHead: "<th>Verification case</th><th>Analytic</th><th>Computed</th><th>Rel. error</th><th></th>",
    confirmClear: "Clear the schematic. Are you sure?",
    loadFail: "Could not load the file: ",
    noFix: "No fixed-pressure component placed (without a reference pressure the solution is undetermined)",
    noSrc: "No pump or flow source placed. Every node will settle at the fixed pressure",
    dangling: function (n) { return n + " unconnected pin" + (n > 1 ? "s" : ""); }
  } : {
    place: " — クリックしてから図面をクリックで配置",
    placing: " を配置します。図面上をクリックしてください。",
    pickParam: '<p class="muted">部品を選ぶとパラメータを編集できます（ダブルクリックでも可）。</p>',
    rotate: "回転 (R)", del: "削除 (Del)",
    empty: '<p class="muted">部品を配置して接続すると、ここに結果が出ます。</p>',
    maxP: "最高圧力 [kPa]", nodes: "節点数",
    qin: "流入流量 ΣQ", qout: "流出流量", balance: "収支誤差",
    flows: "要素ごとの流量", flowCol: "<th>要素</th><th>Q [L/min]</th>",
    vHead: "<th>検証ケース</th><th>解析解</th><th>計算値</th><th>相対誤差</th><th></th>",
    confirmClear: "図面を消去します。よろしいですか？",
    loadFail: "読み込めませんでした: ",
    noFix: "固定圧力が1つも置かれていません（基準圧力が無いと解が定まりません）",
    noSrc: "ポンプ・流量源がありません。全節点が固定圧力と同じになります",
    dangling: function (n) { return "未接続のピンが " + n + " 箇所あります"; }
  };
  function compLabel(def) { return EN && def.labelEn ? def.labelEn : def.label; }

  /* Fluid-specific pre-solve diagnostics (model.js speaks thermal). */
  NS1D.Model.prototype.diagnose = function () {
    var msgs = [], hasFixed = false, hasSource = false, pfixVals = [];
    this.components.forEach(function (c) {
      if (c.type === "PFIX") { hasFixed = true; pfixVals.push(parseFloat(c.p.p) || 0); }
      if (c.type === "QSRC" || c.type === "PUMP") hasSource = true;
    });
    // two fixed-pressure nodes at different values drive flow on their own
    if (!hasSource && pfixVals.length >= 2 &&
        Math.max.apply(null, pfixVals) - Math.min.apply(null, pfixVals) > 1e-12) {
      hasSource = true;
    }
    if (!this.components.length) return msgs;
    if (!hasFixed) msgs.push({ level: "error", text: TXT.noFix });
    if (!hasSource) msgs.push({ level: "warn", text: TXT.noSrc });
    var connected = {};
    this.wires.forEach(function (w) {
      connected[w.a.c + "#" + w.a.pin] = 1;
      connected[w.b.c + "#" + w.b.pin] = 1;
    });
    var dangling = 0;
    this.components.forEach(function (c) {
      var def = NS1D.fluid.LIB[c.type];
      if (!def) return;
      def.pins.forEach(function (_, i) {
        if (!connected[c.id + "#" + i]) dangling++;
      });
    });
    if (dangling) msgs.push({ level: "warn", text: TXT.dangling(dangling) });
    return msgs;
  };

  var EXAMPLES = {
    straight: {
      name: "直管の圧力損失", nameEn: "Straight pipe pressure drop",
      build: function () {
        var m = new NS1D.Model();
        var hi = m.addComponent("PFIX", 140, 60, { p: 300 });
        var p1 = m.addComponent("PIPE", 300, 160, { L: 10, D: 0.02 });
        var lo = m.addComponent("PFIX", 460, 60, { p: 0 });
        m.addWire({ c: hi.id, pin: 0 }, { c: p1.id, pin: 0 });
        m.addWire({ c: p1.id, pin: 1 }, { c: lo.id, pin: 0 });
        return m;
      }
    },
    branch: {
      name: "分岐の流量配分", nameEn: "Flow split between branches",
      build: function () {
        var m = new NS1D.Model();
        var src = m.addComponent("QSRC", 120, 260, { Q: 60 });
        var p1 = m.addComponent("PIPE", 320, 100, { L: 4, D: 0.02 });
        var p2 = m.addComponent("PIPE", 320, 240, { L: 4, D: 0.03 });
        var out = m.addComponent("PFIX", 520, 60, { p: 0 });
        m.addWire({ c: src.id, pin: 0 }, { c: p1.id, pin: 0 });
        m.addWire({ c: src.id, pin: 0 }, { c: p2.id, pin: 0 });
        m.addWire({ c: p1.id, pin: 1 }, { c: out.id, pin: 0 });
        m.addWire({ c: p2.id, pin: 1 }, { c: out.id, pin: 0 });
        return m;
      }
    },
    pumploop: {
      name: "ポンプ＋弁の循環系", nameEn: "Pump and valve loop",
      build: function () {
        var m = new NS1D.Model();
        var pm = m.addComponent("PUMP", 160, 160, { dp: 80 });
        var p1 = m.addComponent("PIPE", 340, 100, { L: 6, D: 0.02 });
        var kv = m.addComponent("KV", 500, 160, { zeta: 4, D: 0.02 });
        var p2 = m.addComponent("PIPE", 340, 260, { L: 6, D: 0.02 });
        var rf = m.addComponent("PFIX", 120, 40, { p: 100 });
        m.addWire({ c: pm.id, pin: 1 }, { c: p1.id, pin: 0 });
        m.addWire({ c: p1.id, pin: 1 }, { c: kv.id, pin: 0 });
        m.addWire({ c: kv.id, pin: 1 }, { c: p2.id, pin: 0 });
        m.addWire({ c: p2.id, pin: 1 }, { c: pm.id, pin: 0 });
        m.addWire({ c: rf.id, pin: 0 }, { c: pm.id, pin: 0 });
        return m;
      }
    }
  };

  function $(id) { return document.getElementById(id); }

  /* ---------- palette ---------- */
  function buildPalette() {
    var box = $("palette"), LIB = NS1D.fluid.LIB;
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
    var def = NS1D.fluid.LIB[c.type];
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
  var LMIN = 60000;   // m^3/s -> L/min

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
      return;
    }
    var P = res.T, maxP = -Infinity;
    for (var i = 0; i < P.length; i++) if (P[i] > maxP) maxP = P[i];
    h += '<div class="stat-row"><div class="stat"><div class="sv">' + maxP.toFixed(1) +
         '</div><div class="sl">' + TXT.maxP + '</div></div>' +
         '<div class="stat"><div class="sv">' + P.length + '</div><div class="sl">' + TXT.nodes + '</div></div></div>';

    // volume balance: injected flow vs. net flow into fixed-pressure nodes
    var Qin = 0;
    model.components.forEach(function (c) {
      if (c.type === "QSRC") Qin += (parseFloat(c.p.Q) || 0) / LMIN;
    });
    var Qout = 0;
    res.system.elements.forEach(function (e) {
      if (!e.flow || e.nodes.length < 2) return;
      var isFixedB = res.system.fixed.some(function (f) { return f.node === e.nodes[1]; });
      var isFixedA = res.system.fixed.some(function (f) { return f.node === e.nodes[0]; });
      var q = NS1D.solver.elementFlow(e, P);
      if (isFixedB) Qout += q;
      else if (isFixedA) Qout -= q;
    });
    var err = Qin !== 0 ? Math.abs(Qout - Qin) / Math.abs(Qin) * 100 : 0;
    h += '<table class="restab"><tr><th>' + TXT.qin + '</th><td>' + (Qin * LMIN).toFixed(2) + ' L/min</td></tr>' +
         '<tr><th>' + TXT.qout + '</th><td>' + (Qout * LMIN).toFixed(2) + ' L/min</td></tr>' +
         '<tr><th>' + TXT.balance + '</th><td class="' + (err < 0.1 ? "good" : "bad") + '">' +
         err.toFixed(3) + ' %</td></tr></table>';

    // per-element flow table (the number people actually came for)
    var rows = "";
    res.system.elements.forEach(function (e) {
      if (!e.flow || e.nodes.length < 2) return;
      var q = NS1D.solver.elementFlow(e, P);
      var def = NS1D.fluid.LIB[e.type];
      rows += '<tr><td>' + (def ? compLabel(def) : e.type) + '</td><td>' +
              (q * LMIN).toFixed(2) + '</td></tr>';
    });
    if (rows) {
      h += '<div class="pane-h" style="margin-top:10px">' + TXT.flows + '</div>' +
           '<table class="restab"><tr>' + TXT.flowCol + '</tr>' + rows + '</table>';
    }
    box.innerHTML = h;
  }

  /* ---------- verification panel ---------- */
  function renderVerify() {
    var rows = NS1D.verifyFluid.run(), pass = 0;
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
      a.download = "novasolver-1d-fluid.json";
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

    renderVerify();
    sel.value = "straight";
    loadExample("straight");

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
