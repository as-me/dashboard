'use strict';

import React from 'react';
import Styles from '../utils/Styles';

class SideNav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        };
    }

    toggleMenu() {
        // Order important: handle wrappers before setting sidebar state.
        this.state.open = !this.state.open;


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
                Styles.rightMenuWrap(this.state.open)
            } >
            < div className = "bm-menu"
        style = {
            Styles.menu(this.state.open)
        } > {
            this.props.children
        } < /div >    < /div > < /div >;
    }

}

module.exports = SideNav;
