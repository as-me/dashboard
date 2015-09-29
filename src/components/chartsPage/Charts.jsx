

import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
var MenuItem = ReactBootstrap.MenuItem;
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;




var Nav = require('../../Nav.js');
var Layout = require('../../Layout.js');
var Settings = require('../../Settingsbar.js');
var Slider = require('../SessionSlider.js');
var Content = require('./ChartContent.js');
var Archive = require('../../services/Archive.js');

 class Charts extends React.Component {

  constructor(props) {
        super(props);
        this.mql = window.matchMedia(`(min-width: 800px)`);
        this.state = {isDesktop: this.mql.matches};
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);

        this.tools = WeaveAPI.globalHashMap.getObject("hooks");

        this._onToolSelection = this._onToolSelection.bind(this);
        this.counter = 0;
    }

    componentDidMount() {
        this.mql.addListener(this.mediaQueryChanged);
        this.setState({ isDesktop: this.mql.matches});
    }

    componentDidUpdate(prevProps, prevState) {
    }

    mediaQueryChanged() {
        this.setState({isDesktop: this.mql.matches});
    }

    componentWillUnmount() {
        this.mql.removeListener(this.mediaQueryChanged);
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

        var title = this.state.isDesktop?"Charts":< span > < a href = "#" > < i className = "fa fa-chevron-left" > < /i> Charts< /a > < /span>;

        return   (<div  className={this.state.isDesktop ?"desktop":""}>
        <Navbar brand={<span className="asmeMenu">{title}</span>}  staticTop  toggleNavKey={0}>
                                <Nav right={ true } eventKey={0}>
                                    <NavItem>
                                        <span className="asmeMenu">< i className = "fa fa-fw fa-folder-open-o" > < /i><i> Open</i></span>
                                    </NavItem>
                                    <NavItem>
                                        <span className="asmeMenu">< i className = "fa fa-fw fa-floppy-o" onClick = {
                                                                                                                Archive.createFileContent
                                                                                                            } > < /i ><i> Save</i></span>
                                    </NavItem>
                                    {libsMenu}
                                </Nav>
                        </Navbar>

                        <Content/>



                            <Slider/>
                </div>
            );
      }
}

module.exports = Charts;
