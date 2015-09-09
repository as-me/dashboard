

import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
var MenuItem = ReactBootstrap.MenuItem;
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var Nav = require('../../Nav.js');

export default class Charts extends React.Component {
  render() {
  return   <Navbar brand={<span className="asmeMenu"><i> Charts < /i></span>}  staticTop  toggleNavKey={0}>
                        <Nav right={ true } eventKey={0}>
                            <NavItem>
                                <span className="asmeMenu">< i className = "fa fa-fw fa-folder-open-o" > < /i><i> Open</i></span>
                            </NavItem>
                            <NavItem>
                                <span className="asmeMenu">< i className = "fa fa-fw fa-floppy-o" > < /i ><i> Save</i></span>
                            </NavItem>
                            <NavDropdown eventKey={3} title={<span className="asmeMenu"><i> Tools < /i></span>} id='nav-brand-dropdown'>
                                <MenuItem eventKey='1'><span className="asmeMenu"><i> ScatterPlot D3 < /i></span></MenuItem>
                                <MenuItem eventKey='2'><span className="asmeMenu"><i> ScatterPlot C3 < /i></span></MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey='4'><span className="asmeMenu"><i> BarChart < /i></span></MenuItem>
                              </NavDropdown>
                        </Nav>
                </Navbar>
  }
}
