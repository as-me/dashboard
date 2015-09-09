

import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
var MenuItem = ReactBootstrap.MenuItem;
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var Nav = require('../../Nav.js');
var Layout = require('../../Layout.js');

 class Charts extends React.Component {
  constructor(props) {
        super(props)
        this.tools = window.NavigationHashMap.getObject("tools");

        this._onToolSelection = this._onToolSelection.bind(this);
        this.counter = 0;
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {

    }

    _onToolSelection(toolsName, eventKey, href, target){
    var ls = this.tools.requestObject(toolsName + this.counter++,weavecore.LinkableString);
     ls.value = toolsName;
    }

      render() {
              return   (<div><Navbar brand={<span className="asmeMenu"><i> Charts < /i></span>}  staticTop  toggleNavKey={0}>
                                    <Nav right={ true } eventKey={0}>
                                        <NavItem>
                                            <span className="asmeMenu">< i className = "fa fa-fw fa-folder-open-o" > < /i><i> Open</i></span>
                                        </NavItem>
                                        <NavItem>
                                            <span className="asmeMenu">< i className = "fa fa-fw fa-floppy-o" > < /i ><i> Save</i></span>
                                        </NavItem>
                                        <NavDropdown eventKey={3} title={<span className="asmeMenu"><i> Tools < /i></span>} id='nav-brand-dropdown'>
                                            <MenuItem eventKey='1' onSelect={this._onToolSelection.bind(this,"d3ScatterPlotTool")} target="d3ScatterPlotTool"><span className="asmeMenu"><i> ScatterPlot-D3 < /i></span></MenuItem>
                                            <MenuItem eventKey='2' onSelect={this._onToolSelection.bind(this,"c3ScatterPlotTool")} target="c3ScatterPlotTool"><span className="asmeMenu"><i> ScatterPlot-C3 < /i></span></MenuItem>
                                            <MenuItem divider />
                                            <MenuItem eventKey='4' onSelect={this._onToolSelection.bind(this,"BarchartTool")} target="BarchartTool"><span className="asmeMenu"><i> BarChart < /i></span></MenuItem>
                                          </NavDropdown>
                                    </Nav>
                            </Navbar>
                            <Layout></Layout></div>
                            );
      }
}

module.exports = Charts;
