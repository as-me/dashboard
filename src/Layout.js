import * as React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

var Grid = ReactBootstrap.Grid;
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

        componentDidUpdate(prevProps, prevState) {


        }

        _updateState() {
            this.setState({
                names: this.tools.getNames()
            });
        }

        componentWillUnmount() {
            this.tools.childListCallbacks.removeCallback(this, this._updateState)
        }

        render() {
            var children = [];
            //var toolName = "";
            if (this.state.names) {
                for (var i = 0; i < this.state.names.length; i++) {
                    var toolName = this.state.names[i];
                    var tool = this.tools.getObject(toolName);
                    var padding = {
                            top: 20,
                            bottom: 40,
                            left: 40,
                            right: 20
                        }
                        //d3 tool
                    tool.sessionData.xAxis.value = 'index';
                    tool.sessionData.yAxis.value = 'sodium';

                    var interaction = {};
                    if (tool.library === 'd3') {
                        interaction = {
                            onProbe: {
                                showToolTip: true,
                                callback: function (d) {
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
                    } else if (tool.library === 'c3') {
                        interaction = {
                            onProbe: {
                                showToolTip: true,
                                callback: function (data) {
                                    adapter.weaveInteractionPeer.activeHook = this;
                                    adapter.weaveInteractionPeer.doProbe(data.index);
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
                    }

                    tool.createUI(padding, {}, interaction);


                    children.push( < ToolPanel title = {
                            toolName
                        }
                        content = {
                            tool.ui
                        }
                        sessionedTool = {
                            tool
                        }
                        />
                    );
                }
            }

            return ( < Grid > {
                    children
                } < /Grid> );
            }
        }

        module.exports = Layout;
        /*< div className = {
                    'layout ' + moveClass + this.props.alignment
                } >*/
