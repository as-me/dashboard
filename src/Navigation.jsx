
import * as React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

var MenuItem = ReactBootstrap.MenuItem;
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var Nav = require('./Nav.js');


class Navigation extends React.Component {
    render() {
        return (
        <Navbar brand='As ~ Me' inverse={ true } fixedTop={true}  toggleNavKey={0}>
                        <Nav right={ true } eventKey={0}>
                            <NavItem href={ '#charts' }>
                                <span>< i className = "fa fa-fw fa-bar-chart-o" > < /i>Charts</span>
                            </NavItem>
                            <NavItem href={ '#dataSources' }>
                                <span>< i className = "fa fa-fw fa-database" > < /i >DataSources</span>
                            </NavItem>
                        </Nav>
                </Navbar>

            );
        }
}

module.exports = Navigation;
