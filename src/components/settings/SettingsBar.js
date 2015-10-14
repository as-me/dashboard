import * as React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import SideBar from '../SideBar';
import ToolSettings from './ToolSettings';



var Label = ReactBootstrap.Label;
var Panel = ReactBootstrap.Panel;
var Input = ReactBootstrap.Input;



class SettingsBar extends React.Component {

    constructor(props) {
        super(props)
        this.activeTool = window.NavigationHashMap.getObject("activeTool");
        this.tools = WeaveAPI.globalHashMap.getObject("hooks");
        this._updateState = this._updateState.bind(this);
        this.state = {
            activeTool: this.activeTool.value
        }

    }

    componentDidMount() {
        this.activeTool.addImmediateCallback(this, this._updateState, true, true);

    }

    _updateState() {
        console.log(' Settings Bar');
        this.setState({
            activeTool: this.activeTool.value
        });
    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {
        this.activeTool.removeCallback(this._updateState);

    }

    render() {
        var currentTool = this.state.activeTool;

        var toolSettings = < div / > ;
        if (this.props.isOpen) {
            var toolObj = this.tools.getObject(currentTool);
            toolSettings = < ToolSettings toolName = {
                currentTool
            }
            tool = {
                toolObj
            }
            />
        }

        return ( < SideBar isOpen = {
                this.props.isOpen
            }
            style = {
                this.props.style
            } >

            {
                toolSettings
            } < /SideBar >


        );
    }
}

module.exports = SettingsBar;
