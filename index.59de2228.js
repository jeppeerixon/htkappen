// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"OAMly":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2665f30e59de2228";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jvHIp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userIDlist", ()=>userIDlist);
parcelHelpers.export(exports, "showWeeklyProg", ()=>showWeeklyProg);
parcelHelpers.export(exports, "openUserInput", ()=>openUserInput);
parcelHelpers.export(exports, "displayUserInfo", ()=>displayUserInfo);
var _userfunctions = require("./userfunctions");
var _data = require("./data");
let userIDlist = JSON.parse(localStorage.getItem("userData") || "[]");
let weeklyProgList = [
    (0, _data.tisdag),
    (0, _data.torsdag),
    (0, _data.passtre)
];
let daysDoneCount = 0;
let currentDayCount = 0;
let currentLiftCount = 0;
let dayName = [
    "Tisdag",
    "Torsdag",
    "Pass Tre"
];
let dayNameShort = [
    "TIS",
    "TOR",
    "TRE",
    "FYRA"
];
document.getElementById("oneRepMax")?.addEventListener("submit", (e)=>{
    (0, _userfunctions.getUserInput)(e);
});
document.getElementById("showSettings")?.addEventListener("click", openUserInput);
function showCorrectDay(text) {
    let dayContainer = document.getElementById("currentProg");
    dayContainer.innerHTML = `${dayName[text]} >`;
    currentDayCount = text;
    console.log(currentDayCount);
}
function createProgram(workouts) {
    //localStorage.setItem("workouts", JSON.stringify(workouts));
    console.log("createProgram");
    let setContainer = document.getElementById("repsAndSets");
    if (setContainer) setContainer.innerHTML = "";
    let ovningContainerInfo = document.getElementById("selectedOvningInfo");
    if (ovningContainerInfo) ovningContainerInfo.innerHTML = "";
    if (currentLiftCount > workouts.length - 1) {
        console.log("hej");
        return;
    }
    for(let i = 0; i < workouts[currentLiftCount].percent.length; i++){
        let li = document.createElement("li");
        let whatPR = workouts[currentLiftCount].TypeOfPr == "clean" ? userIDlist[0].cleanPR : userIDlist[0].snatchPR;
        // jo den funkar!
        li.classList.add("repsAndSets__text");
        li.innerHTML = `
    ${workouts[currentLiftCount].reps[i]} 
    reps @
    ${Math.round(whatPR * (workouts[currentLiftCount].percent[i] / 100))}
    kg
    `;
        li.addEventListener("click", (e)=>{
            e.currentTarget.classList.add("repsAndSets__text--done");
            checkIfOvningDone(workouts[currentLiftCount]);
        });
        setContainer.appendChild(li);
    }
}
function showCorrectOvning(workouts) {
    console.log("showCorrectOvning");
    let ovningContainer = document.getElementById("selectedOvning");
    if (ovningContainer) ovningContainer.innerHTML = "";
    createProgram(workouts);
    for(let i = 0; i < workouts.length; i++){
        let spam = document.createElement("span");
        if (workouts[i].done == true) {
            spam.classList.add("currentSelectedOvningDone");
            spam.innerHTML = `${workouts[i].name} >`;
            spam.addEventListener("click", ()=>{
                //currentLiftCount = i;
                createProgram(workouts);
                showCorrectOvning(weeklyProgList[currentDayCount]);
            //checkIfDayIsDone(workouts)
            //lägg i "active" button grej kanske
            });
        } else {
            // funkar ej ??? why ??? spam.classList.remove("currentSelectedOvning");
            spam.innerHTML = `${workouts[i].name} >`;
            if (i == currentLiftCount) spam.classList.add("currentSelectedOvning");
            spam.addEventListener("click", ()=>{
                currentLiftCount = i;
                spam.classList.add("currentSelectedOvning");
                createProgram(workouts);
                showCorrectOvning(weeklyProgList[currentDayCount]);
            //lägg i "active" button grej kanske
            });
        }
        ovningContainer.appendChild(spam);
    }
}
function showWeeklyProg() {
    console.log("showWeeklyProg");
    let progContainer = document.getElementById("weeklyProgram");
    if (progContainer) progContainer.innerHTML = "";
    for(let i = 0; i < weeklyProgList.length; i++){
        let btn = document.createElement("button");
        // jo den funkar!
        btn.innerHTML = `${dayNameShort[i]}`;
        if (userIDlist[0].daysDone[i] == true) btn.classList.add("doneWeek");
        btn.addEventListener("click", ()=>{
            currentLiftCount = 0;
            showCorrectDay(i);
            showCorrectOvning(weeklyProgList[i]);
        //createProgram(weeklyProgList[i][0]);
        //checkIfDayIsDone(weeklyProgList[i][0].done);
        //lägg i "active" button grej kanske
        });
        progContainer.appendChild(btn);
    }
}
function openUserInput() {
    let inputContainer = document.getElementById("setUser");
    if (inputContainer.style.display == "flex") inputContainer.style.display = "none";
    else inputContainer.style.display = "flex";
}
function displayUserInfo(text, snatchNr, cleanNr) {
    let nameContainer = document.getElementById("showUserName");
    nameContainer.innerHTML = `${text}`;
    let snatchPBContainer = document.getElementById("showSnatchPB");
    snatchPBContainer.innerHTML = `${snatchNr}`;
    let cleanPBContainer = document.getElementById("showCleanPB");
    cleanPBContainer.innerHTML = `${cleanNr}`;
}
function checkIfDayIsDone(workouts) {
    // funkar typ
    let btn = document.querySelector('[data-id="0"]');
    let list = [
        "K\xf6r passet igen",
        "N\xe4sta pass"
    ];
    let spanCount = document.getElementById("passCount");
    let setContainer = document.getElementById("repsAndSets");
    if (workouts[0].done == true && workouts[1].done == true && workouts[2].done == true) {
        if (setContainer) setContainer.innerHTML = "";
        userIDlist[0].daysDone[currentDayCount] = true;
        daysDoneCount = 0;
        for(let i = 0; i < userIDlist[0].daysDone.length; i++)if (userIDlist[0].daysDone[i] == true) daysDoneCount++;
        localStorage.setItem("userData", JSON.stringify(userIDlist));
        console.log("DAY IS DONE!!");
        console.log("btn.classList.add(");
        showWeeklyProg();
        spanCount.innerHTML = daysDoneCount.toString();
        for(let i1 = 0; i1 < list.length; i1++){
            let li = document.createElement("li");
            li.classList.add("repsAndSets__text");
            li.innerHTML = `${list[i1]}`;
            li.addEventListener("click", (e)=>{
                let option = e.currentTarget.innerHTML;
                if (option == list[0]) {
                    workouts[0].done = false;
                    workouts[1].done = false;
                    workouts[2].done = false;
                    currentLiftCount = 0;
                    showCorrectDay(currentDayCount);
                    showCorrectOvning(weeklyProgList[currentDayCount]);
                    console.log(weeklyProgList[currentDayCount]);
                } else {
                    currentDayCount++;
                    currentLiftCount = 0;
                    showCorrectDay(currentDayCount);
                    showCorrectOvning(weeklyProgList[currentDayCount]);
                    console.log(weeklyProgList[currentDayCount]);
                }
            });
            setContainer.appendChild(li);
        }
    }
}
function checkIfOvningDone(workoutOvning) {
    let liList = document.querySelectorAll(".repsAndSets__text");
    let liArray = Array.from(liList);
    let doneList = document.querySelectorAll(".repsAndSets__text--done");
    let doneArray = Array.from(doneList);
    if (liArray.length == doneArray.length) {
        workoutOvning.done = true;
        console.log(workoutOvning);
        console.log(currentLiftCount);
        currentLiftCount++;
        console.log(currentLiftCount);
        showWeeklyProg();
        showCorrectOvning(weeklyProgList[currentDayCount]);
        checkIfDayIsDone(weeklyProgList[currentDayCount]);
    }
}
if (userIDlist[0] == null) openUserInput();
else {
    displayUserInfo(userIDlist[0].name, userIDlist[0].snatchPR, userIDlist[0].cleanPR);
    showWeeklyProg();
} //1. get user info on load (local storage)
 //2. load/publish weekly program
 //3. on click display selected workout
 //3.1 update correct info
 //4. workout finish = update weekly program inf

},{"./userfunctions":"a7CDc","./data":"3EcvX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a7CDc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getUserInput", ()=>getUserInput);
parcelHelpers.export(exports, "addUserID", ()=>addUserID);
parcelHelpers.export(exports, "createNewUser", ()=>createNewUser);
parcelHelpers.export(exports, "displayError", ()=>displayError) // export function changeTodo(todo: Todo) {
 //   todo.done = !todo.done;
 // }
 // export function removeAllTodos(todos: Todo[]) {
 //   todos.splice(0, todos.length);
 // }
;
var _userid = require("./models/Userid");
var _script = require("./script");
function getUserInput(e) {
    {
        e.preventDefault();
        let userInput = document.getElementById("userName").value;
        let prSnatchInput = document.getElementById("snatchRepMaxValue").value;
        let prSnatchNumber = parseInt(prSnatchInput);
        let prCleanInput = document.getElementById("cleanRepMaxValue").value;
        let prCleanNumber = parseInt(prCleanInput);
        let doneDays = [
            false,
            false,
            false,
            false
        ];
        createNewUser(userInput, prSnatchNumber, prCleanNumber, doneDays, (0, _script.userIDlist));
        (0, _script.openUserInput)();
        localStorage.setItem("userData", JSON.stringify((0, _script.userIDlist)));
    }
}
function addUserID(nameText, snatchMax, cleanMax, doneDays, newUserInfo) {
    if (nameText.length > 2 || Number.isNaN(snatchMax) == false || Number.isNaN(cleanMax) == false) {
        let newUser = new (0, _userid.userID)(nameText, snatchMax, cleanMax, doneDays);
        newUserInfo.unshift(newUser);
        console.log(newUser);
        return {
            success: true,
            error: ""
        };
    } else return {
        success: false,
        error: "Fyll i r\xe4tt info!"
    };
}
function createNewUser(nameText, snatchMax, cleanMax, doneDays, newUserInfo) {
    let result = addUserID(nameText, snatchMax, cleanMax, doneDays, newUserInfo);
    if (result.success) {
        console.log(result);
        console.log(newUserInfo[0].name);
        (0, _script.showWeeklyProg)();
        (0, _script.displayUserInfo)(nameText, snatchMax, cleanMax);
    } else displayError(result.error, true);
}
function displayError(error, show) {
    let errorContainer = document.getElementById("error");
    errorContainer.innerHTML = error;
    if (show) errorContainer.classList.add("show");
    else errorContainer.classList.remove("show");
}

},{"./models/Userid":"4uNe3","./script":"jvHIp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4uNe3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userID", ()=>userID);
class userID {
    constructor(name, snatchPR, cleanPR, daysDone){
        this.name = name;
        this.snatchPR = snatchPR;
        this.cleanPR = cleanPR;
        this.daysDone = daysDone;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3EcvX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tisdag", ()=>tisdag);
parcelHelpers.export(exports, "torsdag", ()=>torsdag);
parcelHelpers.export(exports, "passtre", ()=>passtre);
parcelHelpers.export(exports, "passfyra", ()=>passfyra);
const tisdag = [
    {
        "name": "Ryck",
        "percent": [
            65,
            70,
            75,
            80,
            85,
            87,
            90,
            93
        ],
        "reps": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "setsDone": [
            false,
            false,
            false,
            false,
            false,
            false
        ],
        "description": "Kontrollerat ner, snabbt upp",
        "done": true,
        "TypeOfPr": "snatch"
    },
    {
        "name": "St\xf6t",
        "percent": [
            65,
            70,
            75,
            80,
            85,
            87
        ],
        "reps": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "setsDone": [
            false,
            false,
            false,
            false,
            false,
            false
        ],
        "description": "Stanna i l\xe4get d\xe4r du f\xe5ngar cleanen",
        "done": true,
        "TypeOfPr": "clean"
    },
    {
        "name": "Backsquat",
        "percent": [
            75,
            80,
            85,
            90,
            95,
            97,
            100,
            103
        ],
        "reps": [
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2
        ],
        "setsDone": [
            false,
            false,
            false,
            false,
            false,
            false
        ],
        "description": "Kontrollerat ner, snabbt upp",
        "done": false,
        "TypeOfPr": "clean"
    }
];
const torsdag = [
    {
        "name": "Styrkeryck",
        "percent": [
            52,
            57,
            62,
            67,
            72,
            77,
            80,
            83
        ],
        "reps": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "description": "Kontrollerat ner, snabbt upp",
        "done": false,
        "TypeOfPr": "clean"
    },
    {
        "name": "Sv\xe4nd+\xd6st\xf6t",
        "percent": [
            52,
            57,
            62,
            67,
            72,
            77,
            80,
            83
        ],
        "reps": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "description": "Styrkev\xe4ndning + \xf6verst\xf6t",
        "done": false,
        "TypeOfPr": "snatch"
    },
    {
        "name": "Frontsquat",
        "percent": [
            68,
            73,
            78,
            83,
            88,
            92,
            95,
            98
        ],
        "reps": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "description": "Kontrollerat ner, snabbt upp",
        "done": false,
        "TypeOfPr": "clean"
    }
];
const passtre = [
    {
        "name": "Ryck",
        "percent": [
            55,
            58,
            61,
            64,
            67,
            67,
            70,
            73
        ],
        "reps": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "description": "Kontrollerat ner, snabbt upp",
        "done": false,
        "TypeOfPr": "clean"
    },
    {
        "name": "St\xf6t",
        "percent": [
            55,
            58,
            61,
            64,
            67,
            67,
            70,
            73
        ],
        "reps": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "description": "Stanna i l\xe4get d\xe4r du f\xe5ngar cleanen",
        "done": false,
        "TypeOfPr": "snatch"
    },
    {
        "name": "Tagga f\xf6r t\xe4vling",
        "percent": [
            97,
            99,
            99,
            100,
            110,
            1000,
            10000,
            12345
        ],
        "reps": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "description": "Stanna i l\xe4get d\xe4r du f\xe5ngar cleanen",
        "done": false,
        "TypeOfPr": "snatch"
    }
];
const passfyra = [
    {
        "name": "Ryck",
        "percent": [
            65,
            70,
            75,
            80,
            85,
            87
        ],
        "reps": [
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "description": "Kontrollerat ner, snabbt upp",
        "done": false,
        "TypeOfPr": "snatch"
    },
    {
        "name": "St\xf6t",
        "percent": [
            65,
            70,
            75,
            80,
            85,
            87
        ],
        "reps": [
            1,
            1,
            1,
            1,
            1,
            1
        ],
        "description": "Stanna i l\xe4get d\xe4r du f\xe5ngar cleanen",
        "done": false,
        "TypeOfPr": "clean"
    },
    {
        "name": "Backsquat",
        "percent": [
            75,
            80,
            85,
            90,
            95,
            97
        ],
        "reps": [
            2,
            2,
            2,
            2,
            2,
            2
        ],
        "description": "Kontrollerat ner, snabbt upp",
        "done": false,
        "TypeOfPr": "clean"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["OAMly","jvHIp"], "jvHIp", "parcelRequire94c2")

//# sourceMappingURL=index.59de2228.js.map
