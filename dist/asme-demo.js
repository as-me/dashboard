!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("Asme"),require(void 0)):"function"==typeof define&&define.amd?define(["React","Asme"],t):"object"==typeof exports?exports["Asme-Demo"]=t(require("React"),require("Asme"),require(void 0)):e["Asme-Demo"]=t(e.React,e.Asme,e[void 0])}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="js/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(){try{c.value=window.location.hash.substr(1)||"/"}catch(e){console.log("LocationHashchange - error: ",e),c.value="error"}console.log("LocationHashchange: ",c.value)}var i=n(1),s=o(i),u=n(2),l=r(u);n(3),window.NavigationHashMap=new weavecore.LinkableHashMap;var c=window.NavigationHashMap.requestObject("activePage",weavecore.LinkableString),p=window.NavigationHashMap.requestObject("activeTool",weavecore.LinkableString),f=window.NavigationHashMap.requestObject("slideBarStyle",weavecore.LinkableString);window.NavigationHashMap.requestObject("tools",weavecore.LinkableHashMap);a(),p.value="",f.value="scaleRotate";var d=l["default"].Navigation,h=l["default"].Content;window.addEventListener("hashchange",a,!1),d3.csv("data/testCereal.csv",function(e,t){return e.index=t,e},function(e,t){var n=window.NavigationHashMap.requestObject("columns",weavecore.LinkableVariable);n.setSessionState(d3.keys(t[0])),console.log("rows: ",t),adapter.weaveInteractionPeer=new adapter.peer.WeaveJSInterface,WeaveAPI.globalHashMap.requestObject("dataSource",weavecore.LinkableVariable).setSessionState(t),s.render(s.createElement(d,null),document.getElementById("Menu")),s.render(s.createElement(h,null),document.getElementById("App"))})},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n}])});
