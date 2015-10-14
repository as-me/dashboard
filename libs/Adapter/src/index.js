exports.AdapterInterface = require("./lib/AdapterInterface.js");
exports.hook = {};

exports.hook.C3Hook = require("./lib/hook/C3Hook.js");
exports.hook.D3Hook = require("./lib/hook/D3Hook.js");

exports.peer = {};
exports.peer.WeaveJSPeer = require("./lib/peer/WeaveJSPeer.js");

exports.components = {};

exports.components.D3 = {}
exports.components.D3.ScatterPlotTool = require("./lib/components/D3/ScatterPlot.js");

exports.components.C3 = {}
exports.components.C3.ScatterPlotTool = require("./lib/components/C3/ScatterPlot.js");


//namesapce
if (typeof window === 'undefined') {
    this.AdapterAPI = this.AdapterAPI || {};
} else {
    window.AdapterAPI = window.AdapterAPI || {};
}

AdapterAPI.peer = new adapter.peer.WeaveJSInterface();
