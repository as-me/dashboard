'use strict';
import * as React from "react";
import Asme from 'Asme';
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
var LogIn = Asme.LogIn;



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

var user;

d3.csv("data/testCereal.csv", function (d, i) {
    d.index = i;
    return d;
}, function (error, rows) {

    AdapterAPI.peer.requestDataSource("cereals", adapter.session.DataSource).data.setSessionState(rows);

    user = WeaveAPI.globalHashMap.requestObject("user", Asme.User);
    user.logged.addImmediateCallback(null, showApp, true)




});

d3.csv("data/rice-paddy-gigagrams.csv", function (d, i) {
    d.index = i;
    return d;
}, function (error, rows) {


    AdapterAPI.peer.requestDataSource("rice-paddy", adapter.session.DataSource).data.setSessionState(rows);

});


function showApp() {
    if (!user.logged.value)

        React.render( < LogIn / > , document.getElementById('App'));
    else {
        React.render( < Navigation / > , document.getElementById('Menu'));
        React.render( < Content / > , document.getElementById('App'));
    }
}
