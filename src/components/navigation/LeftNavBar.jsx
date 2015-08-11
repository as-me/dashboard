

import React from 'react';
import mui from 'material-ui';
import NavBarData from './data.js';



// Get mui Components
let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar
  , LeftNav = mui.LeftNav
  , MenuItem = mui.MenuItem;

// Define menu items for LeftNav
let menuItems = [
  { route: '/', text: 'As~Me' },
  { route: 'charts', text: 'Charts' },
  { route: 'dataSources', text: 'Data-sources' },
];

export default  class LeftNavBar extends React.Component {

  constructor() {
    super();

    this._handleClick = this._handleClick.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
     this._getSelectedMenu = this._getSelectedMenu.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);

    this._udpatePage = this._udpatePage.bind(this);
       this._setReactState = this._setReactState.bind(this);

       this.state = asme.navBarData.getSessionStateValue();
       console.log(this.state);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }



  _handleClick(e) {
    e.preventDefault();

    this.refs.leftNav.toggle();
  }

  // Get the selected item in LeftMenu
  _getSelectedIndex() {
    let currentItem;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && currentItem.route ===asme.navBarData.page.value ) {
      console.log('currentItem',currentItem);
        return i;
      }
    }
  }

  // Get the selected item in LeftMenu
  _getSelectedMenu() {
    let currentItem;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && currentItem.route === asme.navBarData.page.value) {
        return currentItem.text;
      }
    }
  }

  _onLeftNavChange(e, key, menu) {
  console.log(e,key,menu);
    // Do DOM Diff refresh
    //this.context.router.transitionTo(payload.route);
    asme.navBarData.page.value = menu.route;
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

    return (
      <div id="page_container">

        <LeftNav
          ref="leftNav"
          docked={false}
          menuItems={menuItems}
          selectedIndex={this._getSelectedIndex()}
          onChange={this._onLeftNavChange} />

        <header>
          <AppBar title={this._getSelectedMenu()} onLeftIconButtonTouchTap={this._handleClick} />
        </header>



      </div>
    );
  }

}

LeftNavBar.childContextTypes = {
  muiTheme: React.PropTypes.object
};



