import * as React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

var Panel = ReactBootstrap.Panel;
var Button = ReactBootstrap.Button;



class ToolPanel extends React.Component {
    constructor(props) {
        super(props)
        this.tool = props.sessionedTool;


        this._closePanel = this._closePanel.bind(this);
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

    componentWillUnmount() {}
    render() {
        return ( < Panel header = { < div > {
                    this.props.title
                } < span className = "pull-right" > < i className = "fa fa-wrench fa-fw" > < /i> &nbsp;&nbsp;< i className = "fa fa-times fa-fw fa-pointer"
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
