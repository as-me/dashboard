'use strict';
/**/
var React = require('react');
var d3 = require('d3');
var parseDate = d3.time.format("%Y-%m-%d").parse

require('../src/styles/asme-adapter');
require('stylesheets/asme-adapter-docs');

var Nav = require('lib/navbar');
var Sidebar = require('lib/sidebar');
var MainContainer = require('lib/main-container');
var MenuGroup = require('lib/menu-group');
var MenuItem = require('lib/MenuItem');


var pages = [
	require('lib/page/GettingStartedPage'),
    require('lib/page/ScatterPlotPage'),
    require('lib/page/ComingSoonPage')
];

function compressString(string) {
    string = string.replace(/\s+/g, '');
    string = string.replace(/_+/g, '');
    string = string.toLowerCase();
    return string
}

function renderPage() {


    var selected = location.hash.replace('#/', '');
    var selectedPage = pages.filter((page) => (compressString(page.title) === compressString(selected)));

    var firstPage = (selectedPage.length === 0) ? pages[0] : selectedPage[0];

    class ExamplesPage extends React.Component {
        constructor(props) {
            super(props);
            this.handleRouteChange = this.handleRouteChange.bind(this);
            this.state = {
                selectedPage: firstPage
            }
        }
        handleRouteChange() {
            let selected = location.hash.replace('#/', '');
            let selectedPage = pages.filter((page) => (compressString(page.title) === compressString(selected)));
            if (selectedPage.length > 0) {
                this.setState({
                    selectedPage: selectedPage[0]
                });
            }
        }
        componentDidMount() {
            window.addEventListener("hashchange", this.handleRouteChange, false);
        }
        render() {
            var Page = this.state.selectedPage;
            return ( < div >
                < Nav / >
                < MainContainer >
                < Sidebar >
                < MenuGroup > {
                    pages.map((eachPage, idx) => < MenuItem key = {
                            idx
                        }
                        current = {
                            eachPage === this.state.selectedPage
                        }
                        title = {
                            eachPage.title
                        }
                        />
                    )
                } < /MenuGroup > < /Sidebar > < Page

                / > < /MainContainer > < /div >
            );
        }
    };

    React.render( < ExamplesPage / > , document.getElementById("chart-goes-here"));
}

d3.csv("data/testCereal.csv", function (d, i) {
    d.index = i;
    return d;
}, function (error, rows) {
    console.log('rows: ', rows)
    adapter.weaveInteractionPeer = new adapter.peer.WeaveJSInterface();
    WeaveAPI.globalHashMap.getObject("dataSource").setSessionState(rows);
    renderPage();
    WeaveAPI.log = new weavecore.SessionStateLog(WeaveAPI.globalHashMap);


});
