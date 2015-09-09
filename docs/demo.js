'use strict';
import * as React from "react";
import Asme from 'src/';

window.NavigationHashMap = new weavecore.LinkableHashMap();
var activePage = window.NavigationHashMap.requestObject("activePage", weavecore.LinkableString);
var tools = window.NavigationHashMap.requestObject("tools", weavecore.LinkableHashMap);
activePage.value = 'charts';

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
