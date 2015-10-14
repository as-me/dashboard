

import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
var MenuItem = ReactBootstrap.MenuItem;
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;

var Nav = require('../../Nav.js');
var Layout = require('../../Layout.js');
var Slider = require('../SessionSlider.js');
var Content = require('./ChartContent.js');
var Archive = require('../../services/Archive.js');

 class Charts extends React.Component {



  constructor(props) {
        super(props);
        const win = window;
        if (!win.File || !win.FileReader || !win.FileList || !win.Blob) {
            console.warn(' Some file APIs detected as not supported.' + ' File reader functionality may not fully work.');
        }
        this.mql = window.matchMedia(`(min-width: 800px)`);
        this.state = {isDesktop: this.mql.matches};
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);


        this._onToolSelection = this._onToolSelection.bind(this);

        this.triggerInput = this.triggerInput.bind(this);
        this.saveAsmeLocal = this.saveAsmeLocal.bind(this);
        this.openAsmeLocal = this.openAsmeLocal.bind(this);

        this.counter = 0;
    }

    saveAsmeLocal(){
        window.saveAs( Archive.createFileContent(), "asme.zip");
    }

    triggerInput(e) {
        React.findDOMNode(this.refs.fileButton).click();
    }

    openAsmeLocal(evt){
       var files = this.refs.fileButton.getDOMNode().files;
       Archive.openFile(files);
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
       AdapterAPI.peer.requestHook(toolName + this.counter++,tool);
    }

    render() {


        //to-do transform this to function so that in th future we can have menu extracted externally
        var libs = Object.getOwnPropertyNames(adapter.libs);

        var libsMenu = libs.map(function(libName,libIndex){
            var libCharts = Object.getOwnPropertyNames(adapter.libs[libName]);
            var chartMenus  = libCharts.map(function(chartName,index){
                var toolName = libName + '-' +chartName
                var tool = adapter.libs[libName][chartName];
                return <MenuItem key={index} eventKey={index} onSelect={this._onToolSelection.bind(this,tool,toolName)} >
                            <span className="asmeMenu"> {chartName}</span>
                       </MenuItem>;
            }.bind(this));

return <NavDropdown key={libIndex} title={<span className="asmeMenu"> {libName}</span>} id='nav-brand-dropdown'>
                        {chartMenus}
                   </NavDropdown>
        }.bind(this));

        var title = this.state.isDesktop?"Charts":< span > < a href = "#" > < i className = "fa fa-chevron-left" > < /i> Charts< /a > < /span>;

        return   (<div  className={this.state.isDesktop ?"desktop":""}>
        <Navbar brand={<span className="asmeMenu">{title}</span>}  staticTop  toggleNavKey={0}>
                                <Nav className="chartMenu" right={ true } eventKey={0}>

                                    {libsMenu}
                                    <div className="btn-group-sm btngrp pull-right" role="group" aria-label="...">
                                        <span className="btn btn-default btn-file" >
                                            <input onChange={this.openAsmeLocal} type='file' ref="fileButton">
                                                < i className = "fa fa-fw fa-folder-open-o"  > < /i >
                                            </input >
                                        </span>


                                        <button className="btn btn-default" onClick={this.saveAsmeLocal}>
                                            < i className = "fa fa-fw fa-floppy-o"  > < /i >
                                        </button >
                                    </div>
                                </Nav>
                        </Navbar>

                        <Content/>



                            <Slider open={false}/>
                </div>
            );
      }
}

module.exports = Charts;
