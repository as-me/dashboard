'use strict';

import React from 'react';
import Styles from '../utils/Styles';

class SideBar extends React.Component {
    constructor(props) {
        super(props)

        this.toggleMenu = this.toggleMenu.bind(this);
        this.listenForClose = this.listenForClose.bind(this);
    }

    toggleMenu() {
        // Order important: handle wrappers before setting sidebar state.
        this.activeTool = window.NavigationHashMap.getObject("activeTool");
        if (this.activeTool.value.length > 0)
            this.activeTool.value = '';


    }

    listenForClose(e) {
        e = e || window.event;

        if (this.props.isOpen && (e.key === 'Escape' || e.keyCode === 27)) {
            this.toggleMenu();
        }
    }

    componentDidMount() {
        window.onkeydown = this.listenForClose;
    }

    componentWillUnmount() {
        window.onkeydown = null;

    }

    render() {
        return <div >
            < div id = {
                this.props.id
            }
        style = {
                Styles.menuWrap(this.props.isOpen)
            } >
            < div className = "bm-menu"
        style = {
            Styles.menu(this.props.isOpen)
        } > {
            this.props.children
        } < /div >    < /div > < /div >;
    }

}

module.exports = SideBar;
