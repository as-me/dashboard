'use strict';
var React = require('react');
var Adapter = require('src/');
var MenuGroup = require('../menu-group');
var MenuItem = require('../MenuItem');
require('weavecore');

var D3ScatterPlotTool = adapter.sessionTool.d3.ScatterPlotTool;
var C3ScatterPlotTool = adapter.sessionTool.c3.ScatterPlotTool;



var ScatterPlotChart = React.createClass({
    getInitialState(){
        return{
                    width: 400,
                    height: 300,
                    top: 5,
                    bottom: 100,
                    right: 20,
                    left: 70
                };
    },



	render() {
        var tool = adapter.weaveInteractionPeer.requestHook('ScatterPlotTool',D3ScatterPlotTool,false);
        tool.createUI({
                        top: this.state.top,
                        bottom: this.state.bottom,
                        right: this.state.right,
                        left: this.state.left
                    },
                    {
                        width: this.state.width,
                        height: this.state.height
                    },
                    {
                        onProbe: {
                            showToolTip: true,
                            callback: function(d) {
                                adapter.weaveInteractionPeer.activeHook = this;
                                adapter.weaveInteractionPeer.doProbe(d);
                            }
                        },
                        onSelect: {
                            callback: function (keys) {
                                adapter.weaveInteractionPeer.activeHook = this;
                                adapter.weaveInteractionPeer.doSelection(keys);
                            }
                        }
                    }
        );
        tool.sessionData.xAxis.value = 'name';
        tool.sessionData.yAxis.value = 'fat';

        var tool2 = adapter.weaveInteractionPeer.requestHook('ScatterPlotTool2',C3ScatterPlotTool,false);
        tool2.createUI({
                    top: this.state.top,
                    bottom: this.state.bottom,
                    right: this.state.right,
                    left: this.state.left
                },
                {
                    width: this.state.width,
                    height: this.state.height
                },
                {
                    onProbe: {
                        showToolTip: true,
                        callback: function(d) {
                            adapter.weaveInteractionPeer.activeHook = this;
                            adapter.weaveInteractionPeer.doProbe(d.index);
                        }
                    },
                    onSelect: {
                        callback: function (keys) {
                            keys = this.selected();
                            adapter.weaveInteractionPeer.activeHook = this;
                            if (keys.constructor === Array)
                               adapter.weaveInteractionPeer.doSelection(keys.map(function (key) {
                                    return key.index;
                                }), true);
                            else
                                adapter.weaveInteractionPeer.doSelection([keys.index], true);
                        }
                    }
                }
        );
        tool2.sessionData.xAxis.value = 'sodium';
        tool2.sessionData.yAxis.value = 'protein';


		return (
			<div className = 'App' >

            <h4>D3 Scatterplot (Interaction API - Probing  Selection, UI Action - MouseOver and Brushing )</h4>
            <div>{tool.ui}</div>
            <h4>C3 Scatterplot (Interaction API - Selection(key),Selection(keys), UI Action - MouseOver  and Drag-Selection)</h4>
            <div>{tool2.ui}</div>
            < /div >
		);
	}
});

module.exports = ScatterPlotChart;
