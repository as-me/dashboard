import * as React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

var Grid = ReactBootstrap.Grid;
var ToolPanel = require('./components/ToolPanel.js');



class Layout extends React.Component {

    constructor(props) {
        super(props)
        this.tools = window.NavigationHashMap.getObject("tools");

        this.state = {
            names: this.tools.getNames()
        };
        this._updateState = this._updateState.bind(this);
    }

    componentDidMount() {
        this.tools.addGroupedCallback(this, this._updateState);
    }

    componentDidUpdate(prevProps, prevState) {


    }

    _updateState() {
        //this wil call render function which in turn calls componentDidUpdate
        this.setState({
            names: this.tools.getNames()
        });
    }

    componentWillUnmount() {
        this.tools.removeCallback(this, this._updateState)
    }
    render() {
        var children = [];
        if (this.state.names) {
            for (var i = 0; i < this.state.names.length; i++) {
                var ls = this.state.names[i];
                var toolName = this.tools.getObject(ls).value;
                var toolContent = "Sessioned Chart Component will be tied up insted of " + toolName;
                children.push( < ToolPanel title = {
                        toolName
                    }
                    content = {
                        toolContent
                    }
                    />
                );
            }
        }

        return ( < Grid > {
            children
        } < /Grid>);
    }
}

module.exports = Layout;
