

import React from 'react';
import mui from 'material-ui';
import { RouteHandler } from 'react-router';



// Get mui Components
let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar
  , LeftNav = mui.LeftNav
  , MenuItem = mui.MenuItem;

// Define menu items for LeftNav
let menuItems = [
  { route: '/', text: 'Home' },
  { route: 'charts', text: 'Charts' },
  { route: 'dataSources', text: 'Data-sources' },
];

export default  class App extends React.Component {

  constructor() {
    super();

    this._handleClick = this._handleClick.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
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
      if (currentItem.route && this.context.router.isActive(currentItem.route)) {
        return i;
      }
    }
  }

  _onLeftNavChange(e, key, payload) {
    // Do DOM Diff refresh
    this.context.router.transitionTo(payload.route);
    //asme.navBarData.page.value = window.location.hash.substr(1) || '/';
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
          <AppBar title='As~Me' onLeftIconButtonTouchTap={this._handleClick} />
        </header>

        <section className="content">
          <RouteHandler />
        </section>

      </div>
    );
  }

}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

App.contextTypes = {
  router: React.PropTypes.func
};

