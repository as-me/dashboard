import React from 'react';
import NavBarData from './data.js';

export default class NavBar extends React.Component {
    constructor() {
		super();

       this._udpatePage = this._udpatePage.bind(this);
       this._setReactState = this._setReactState.bind(this);

       this.state = asme.navBarData.getSessionStateValue();
       console.log(this.state);
	}

    componentDidMount(){
        asme.navBarData.page.addImmediateCallback({},this._setReactState);
    }

      // Unbind change listener
  componentWillUnmount() {
    asme.navBarData.page.removeCallback({},this._setReactState);
  }

  _udpatePage(){
    asme.navBarData.page.value = window.location.hash.substr(1) || '/';
  }

  _setReactState() {
  console.log('Navabar Callback:', asme.navBarData.getSessionStateValue());
    this.setState(asme.navBarData.getSessionStateValue());
  }

  render() {
  var activeList;
  if(this.state.page === 'Charts'){
  activeList = <ul className="nav navbar-nav side-nav">
                    <li className="active" onClick={this._udpatePage}>
                        <a href="#Charts"><i className="fa fa-fw fa-bar-chart-o"></i> Charts</a>
                    </li>
                    <li onClick={this._udpatePage}>
                        <a href="#Data-Sources"><i className="fa fa-fw fa-database"></i> Data-Sources</a>
                    </li>
                </ul>;
  }
  else if(this.state.page === 'Data-Sources'){
  activeList = <ul className="nav navbar-nav side-nav">
                    <li onClick={this._udpatePage}>
                        <a href="#Charts"><i className="fa fa-fw fa-bar-chart-o"></i> Charts</a>
                    </li>
                    <li className="active" onClick={this._udpatePage}>
                        <a href="#Data-Sources"><i className="fa fa-fw fa-database"></i> Data-Sources</a>
                    </li>
                </ul>;

  }
  else if(this.state.page === '/' || this.state.page === undefined){
  activeList = <ul className="nav navbar-nav side-nav">
                    <li  onClick={this._udpatePage}>
                        <a href="#Charts"><i className="fa fa-fw fa-bar-chart-o"></i> Charts</a>
                    </li>
                    <li onClick={this._udpatePage}>
                        <a href="#Data-Sources"><i className="fa fa-fw fa-database"></i> Data-Sources</a>
                    </li>
                </ul>;

  }
  return <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#asme-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a onClick={this._udpatePage} className="navbar-brand" href="#/">As~Me</a>
        </div>

        <div className="collapse navbar-collapse" id="asme-navbar-collapse-1">
            {activeList}
        </div>
    </nav>;
  }
}

