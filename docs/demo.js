'use strict';
import * as React from "react";
import Asme from 'src/';
import 'weavecore';

window.NavigationHashMap = new weavecore.LinkableHashMap();
var activePage = window.NavigationHashMap.requestObject("activePage", weavecore.LinkableString);
var activeTool = window.NavigationHashMap.requestObject("activeTool", weavecore.LinkableString);
var slideBarStyle = window.NavigationHashMap.requestObject("slideBarStyle", weavecore.LinkableString);
var tools = window.NavigationHashMap.requestObject("tools", weavecore.LinkableHashMap);
locationHashChanged();
activeTool.value = "";
slideBarStyle.value = 'scaleRotate';

var Navigation = Asme.Navigation;
var Content = Asme.Content;

window.addEventListener("hashchange", locationHashChanged, false);

function locationHashChanged() {
    try {
        activePage.value = window.location.hash.substr(1) || '/';
    } catch (err) {
        console.log("LocationHashchange - error: ", err);
        activePage.value = 'error';
    }
    console.log("LocationHashchange: ", activePage.value);
}

d3.csv("data/testCereal.csv", function (d, i) {
    d.index = i;
    return d;
}, function (error, rows) {
    var columns = window.NavigationHashMap.requestObject("columns", weavecore.LinkableVariable);
    columns.setSessionState(d3.keys(rows[0]));
    console.log('rows: ', rows)
    adapter.weaveInteractionPeer = new adapter.peer.WeaveJSInterface();
    WeaveAPI.globalHashMap.requestObject("dataSource", weavecore.LinkableVariable).setSessionState(rows);
    React.render( < Navigation / > , document.getElementById('Menu'));
    React.render( < Content / > , document.getElementById('App'));

});
