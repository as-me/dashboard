import * as React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var ToolPanel = require('./components/ToolPanel.js');



class Layout extends React.Component {

    constructor(props) {
        super(props)
        this.tools = WeaveAPI.globalHashMap.getObject("hooks");
        this.state = {
            names: this.tools.getNames()
        };
        this._updateState = this._updateState.bind(this);
    }

    componentDidMount() {
        this.tools.childListCallbacks.addImmediateCallback(this, this._updateState)
    }


    _updateState() {
        this.setState({
            names: this.tools.getNames()
        });
    }

    componentWillUnmount() {
        this.tools.childListCallbacks.removeCallback(this._updateState)
    }

    render() {
        var children = [];
        if (this.state.names) {
            for (var i = 0; i < this.state.names.length; i++) {
                var toolName = this.state.names[i];
                var tool = this.tools.getObject(toolName);
                var cols = tool.sessionData.dataSourceWatcher.target.columns;
                tool.sessionData.xAxis.value = tool.sessionData.xAxis.value ? tool.sessionData.xAxis.value : cols[0];
                tool.sessionData.yAxis.value = tool.sessionData.yAxis.value ? tool.sessionData.yAxis.value : cols[1];

                var padding = {
                    top: 20,
                    bottom: 40,
                    left: 40,
                    right: 20
                }
                var interaction = {
                    onProbe: {
                        showToolTip: true,
                        callback: function (d) {
                            AdapterAPI.peer.activeHook = this;
                            AdapterAPI.peer.doProbe(d);
                        }
                    },
                    onSelect: {
                        callback: function (keys) {
                            AdapterAPI.peer.activeHook = this;
                            AdapterAPI.peer.doSelection(keys);
                        }
                    }
                }



                tool.createUI(padding, {}, interaction);
                var columnCount = 6;
                //var columnCount = this.state.names.length === 1 ? 12 : 6
                children.push( < Col key = {
                        i
                    }
                    xs = {
                        12
                    }
                    md = {
                        columnCount
                    } > < ToolPanel title = {
                        toolName
                    }
                    content = {
                        tool.ui
                    }
                    sessionedTool = {
                        tool
                    }
                    /></Col >
                );
            }
        }


        return ( < Grid > < Row > {
            children
        } < /Row>< /Grid > );
    }
}

module.exports = Layout;
