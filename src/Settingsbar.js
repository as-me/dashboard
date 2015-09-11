import * as React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import SideBar from './components/SideBar';


var Label = ReactBootstrap.Label;
var Panel = ReactBootstrap.Panel;



class Settingsbar extends React.Component {

    constructor(props) {
        super(props)
        this.tools = window.NavigationHashMap.getObject("tools");
        this.activeTool = window.NavigationHashMap.getObject("activeTool");
        this._close = this._close.bind(this);
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    _close() {
        this.activeTool.value = "";

    }


    componentWillUnmount() {

    }

    render() {


        return ( < SideBar isOpen = {
                this.props.isOpen
            }
            style = {
                this.props.style
            } >

            < Panel header = { < div > Settings < span className = "pull-right" > < i className = "fa fa-times fa-fw fa-pointer"
                onClick = {
                    this._close
                } > < /i>  < /span > < /div >
            } >

            {
                this.activeTool.value
            }

            < /Panel > < /SideBar >


        );
    }
}

module.exports = Settingsbar;

/*< div className = "sideBar" >
            < div className = {
                (this.state.isOpen ? "visible " : "") + this.props.alignment
            } >
            < /div > < /div >*/

/*< Menu pageWrapId = {
    "page-wrap"
}
outerContainerId = {
        "outer-container"
    } >

    < Panel header = { < div > Settings < span className = "pull-right" > < i className = "fa fa-times fa-fw fa-pointer"
        onClick = {
            this._close
        } > < /i>  < /span > < /div >
    } >

    {
        toolName
    }

< /Panel > < /Menu >*/
