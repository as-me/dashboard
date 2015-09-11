import * as React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

var Panel = ReactBootstrap.Panel;
var Button = ReactBootstrap.Button;



class ToolPanel extends React.Component {
    constructor(props) {
        super(props)

        this._closePanel = this._closePanel.bind(this);
        this._openSettings = this._openSettings.bind(this);
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {


    }

    _closePanel() {
        var tools = window.NavigationHashMap.getObject("tools");
        var name = tools.getName(this.props.sessionedTool)
        tools.removeObject(name);
    }

    _openSettings() {
        var tools = window.NavigationHashMap.getObject("tools");
        var name = tools.getName(this.props.sessionedTool);
        var activetool = window.NavigationHashMap.getObject("activeTool");
        activetool.value = name;

    }

    componentWillUnmount() {}
    render() {
        return ( < Panel header = { < div > {
                    this.props.title
                } < span className = "pull-right" > < i className = "fa fa-wrench fa-fw fa-pointer"
                onClick = {
                    this._openSettings
                } > < /i> &nbsp;&nbsp;< i className = "fa fa-trash-o fa-fw fa-pointer"
                onClick = {
                    this._closePanel
                } > < /i>  < /span > < /div >
            } > {
                this.props.content
            } < /Panel>

        );
    }
}

module.exports = ToolPanel;
