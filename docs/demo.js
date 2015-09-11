'use strict';
import * as React from "react";
import Asme from 'src/';

window.NavigationHashMap = new weavecore.LinkableHashMap();
var activePage = window.NavigationHashMap.requestObject("activePage", weavecore.LinkableString);
var activeTool = window.NavigationHashMap.requestObject("activeTool", weavecore.LinkableString);
var slideBarStyle = window.NavigationHashMap.requestObject("slideBarStyle", weavecore.LinkableString);
var tools = window.NavigationHashMap.requestObject("tools", weavecore.LinkableHashMap);
activePage.value = 'charts';
activeTool.value = "";
slideBarStyle.value = 'scaleRotate';

var Navigation = Asme.Navigation;
var Content = Asme.Content;

window.addEventListener("hashchange", locationHashChanged, false);

function locationHashChanged() {
    try {
        activePage.value = window.location.hash.substr(1) || '/';
    } catch (err) {
        activePage.value = 'error';
    }
}

React.render( < Navigation / > , document.getElementById('Menu'));
React.render( < Content / > , document.getElementById('App'));
