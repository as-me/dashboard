!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React"),require("Asme"),require(void 0)):"function"==typeof define&&define.amd?define(["React","Asme"],t):"object"==typeof exports?exports["Asme-Demo"]=t(require("React"),require("Asme"),require(void 0)):e["Asme-Demo"]=t(e.React,e.Asme,e[void 0])}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="js/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(){try{p.value=window.location.hash.substr(1)||"/"}catch(e){console.log("LocationHashchange - error: ",e),p.value="error"}console.log("LocationHashchange: ",p.value)}function i(){y.logged.value?(u.render(u.createElement(h,null),document.getElementById("Menu")),u.render(u.createElement(v,null),document.getElementById("App"))):u.render(u.createElement(m,null),document.getElementById("App"))}var s=n(1),u=o(s),l=n(2),c=r(l);n(3),window.NavigationHashMap=new weavecore.LinkableHashMap;var p=window.NavigationHashMap.requestObject("activePage",weavecore.LinkableString),f=window.NavigationHashMap.requestObject("activeTool",weavecore.LinkableString),d=window.NavigationHashMap.requestObject("slideBarStyle",weavecore.LinkableString);window.NavigationHashMap.requestObject("tools",weavecore.LinkableHashMap);a(),f.value="",d.value="scaleRotate";var h=c["default"].Navigation,v=c["default"].Content,m=c["default"].LogIn;window.addEventListener("hashchange",a,!1);var y;d3.csv("data/testCereal.csv",function(e,t){return e.index=t,e},function(e,t){AdapterAPI.peer.requestDataSource("cereals",adapter.session.DataSource).data.setSessionState(t),y=WeaveAPI.globalHashMap.requestObject("user",c["default"].User),y.logged.addImmediateCallback(null,i,!0)}),d3.csv("data/rice-paddy-gigagrams.csv",function(e,t){return e.index=t,e},function(e,t){AdapterAPI.peer.requestDataSource("rice-paddy",adapter.session.DataSource).data.setSessionState(t)})},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n}])});
