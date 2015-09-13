

import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
var MenuItem = ReactBootstrap.MenuItem;
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;



var Nav = require('../../Nav.js');
var Layout = require('../../Layout.js');
var Settings = require('../../Settingsbar.js');
var Content = require('./ChartContent.js');

 class Charts extends React.Component {
  constructor(props) {
        super(props)
        this.tools = WeaveAPI.globalHashMap.getObject("hooks");

        this._onToolSelection = this._onToolSelection.bind(this);
        this.counter = 0;
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {

    }

    _onToolSelection(tool,toolName, eventKey, href, target){

        var chart = this.tools.requestObject(toolName + this.counter++,tool);
        console.log('_onToolSelection' ,chart);
    }

    render() {
        //to-do transform this to function so that in th future we can have menu extracted externally
        var libs = Object.getOwnPropertyNames(adapter.libs);
        console.log('libs' ,libs);

        var libsMenu = libs.map(function(libName){
            var libCharts = Object.getOwnPropertyNames(adapter.libs[libName]);
            console.log("libCharts: ",libCharts);
            var chartMenus  = libCharts.map(function(chartName,index){
                var toolName = libName + '-' +chartName
                var tool = adapter.libs[libName][chartName];
                return <MenuItem eventKey={index} onSelect={this._onToolSelection.bind(this,tool,toolName)} >
                            <span className="asmeMenu"> {chartName}</span>
                       </MenuItem>;
            }.bind(this));

            return <NavDropdown  title={<span className="asmeMenu"> {libName}</span>} id='nav-brand-dropdown'>
                        {chartMenus}
                   </NavDropdown>
        }.bind(this));

        return   (<div>
                        <Navbar brand={<span className="asmeMenu"><i> Charts < /i></span>}  staticTop  toggleNavKey={0}>
                                <Nav right={ true } eventKey={0}>
                                    <NavItem>
                                        <span className="asmeMenu">< i className = "fa fa-fw fa-folder-open-o" > < /i><i> Open</i></span>
                                    </NavItem>
                                    <NavItem>
                                        <span className="asmeMenu">< i className = "fa fa-fw fa-floppy-o" > < /i ><i> Save</i></span>
                                    </NavItem>
                                    {libsMenu}
                                </Nav>
                        </Navbar>

                        <Content/>
                </div>
            );
      }
}

module.exports = Charts;
