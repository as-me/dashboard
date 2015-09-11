import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

var Layout = require('../../Layout.js');
var Settings = require('../../Settingsbar.js');
import appendVendorPrefix from '../../utils/appendVendorPrefix';
import Styles from '../../utils/Styles';

class ChartContent extends React.Component {
    constructor(props) {
        super(props)
        this.activeTool = window.NavigationHashMap.getObject("activeTool");
        this.slideBarStyle = window.NavigationHashMap.getObject("slideBarStyle");
        this._updateState = this._updateState.bind(this);
        this._toggleMenu = this._toggleMenu.bind(this);
        this.state = {
            isOpen: this.activeTool.value.length > 0,
            style: this.slideBarStyle.value
        };
    }

    _updateState() {
        this.setState({
            isOpen: this.activeTool.value.length > 0,
            style: this.slideBarStyle.value
        });
    }

    componentDidMount() {
        this.activeTool.addImmediateCallback(this, this._updateState);
        this.slideBarStyle.addImmediateCallback(this, this._updateState);
    }

    componentDidUpdate(prevProps, prevState) {}

    componentWillUnmount() {
        this.activeTool.removeCallback(this, this._updateState);
        this.slideBarStyle.removeCallback(this, this._updateState);
    }

    _toggleMenu() {

        if (this.activeTool.value.length > 0)
            this.activeTool.value = '';


    }



    render() {
        return ( < div id = "outer-container"
            style = {
                Styles.outerContainer(!this.state.isOpen, this.state.style)
            } >
            < Settings isOpen = {
                this.state.isOpen
            }
            style = {
                this.state.style
            }
            / >   < div

            onClick = {
                this._toggleMenu
            }
            style = {
                Styles.overlay(this.state.isOpen, this.state.style)
            } >
            < /div> < div id = "page-wrap"
            style = {
                Styles.pageWrap(!this.state.isOpen, this.state.style)
            } > < Layout alignment = "left" / > < /div> < /div >
        );
    }
}

module.exports = ChartContent;
