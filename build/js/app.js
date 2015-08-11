(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _materialUi2 = _interopRequireDefault(_materialUi);

var _reactRouter = require('react-router');

// Get mui Components
var ThemeManager = new _materialUi2['default'].Styles.ThemeManager();
var AppBar = _materialUi2['default'].AppBar,
    LeftNav = _materialUi2['default'].LeftNav,
    MenuItem = _materialUi2['default'].MenuItem;

// Define menu items for LeftNav
var menuItems = [{ route: '/', text: 'Home' }, { route: 'charts', text: 'Charts' }, { route: 'dataSources', text: 'Data-sources' }];

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this);

    this._handleClick = this._handleClick.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
  }

  _createClass(App, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        muiTheme: ThemeManager.getCurrentTheme()
      };
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(e) {
      e.preventDefault();

      this.refs.leftNav.toggle();
    }

    // Get the selected item in LeftMenu
  }, {
    key: '_getSelectedIndex',
    value: function _getSelectedIndex() {
      var currentItem = undefined;

      for (var i = menuItems.length - 1; i >= 0; i--) {
        currentItem = menuItems[i];
        if (currentItem.route && this.context.router.isActive(currentItem.route)) {
          return i;
        }
      }
    }
  }, {
    key: '_onLeftNavChange',
    value: function _onLeftNavChange(e, key, payload) {
      // Do DOM Diff refresh
      this.context.router.transitionTo(payload.route);
      //asme.navBarData.page.value = window.location.hash.substr(1) || '/';
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2['default'].createElement(
        'div',
        { id: 'page_container' },
        _react2['default'].createElement(LeftNav, {
          ref: 'leftNav',
          docked: false,
          menuItems: menuItems,
          selectedIndex: this._getSelectedIndex(),
          onChange: this._onLeftNavChange }),
        _react2['default'].createElement(
          'header',
          null,
          _react2['default'].createElement(AppBar, { title: 'As~Me', onLeftIconButtonTouchTap: this._handleClick })
        ),
        _react2['default'].createElement(
          'section',
          { className: 'content' },
          _react2['default'].createElement(_reactRouter.RouteHandler, null)
        )
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;

App.childContextTypes = {
  muiTheme: _react2['default'].PropTypes.object
};

App.contextTypes = {
  router: _react2['default'].PropTypes.func
};
module.exports = exports['default'];

},{"material-ui":"material-ui","react":"react","react-router":"react-router"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Charts = (function (_React$Component) {
  _inherits(Charts, _React$Component);

  function Charts() {
    _classCallCheck(this, Charts);

    _get(Object.getPrototypeOf(Charts.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Charts, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'h1',
        null,
        'Charts'
      );;
    }
  }]);

  return Charts;
})(_react2['default'].Component);

exports['default'] = Charts;
module.exports = exports['default'];

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var DataSource = (function (_React$Component) {
  _inherits(DataSource, _React$Component);

  function DataSource() {
    _classCallCheck(this, DataSource);

    _get(Object.getPrototypeOf(DataSource.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(DataSource, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'h1',
        null,
        'DataSource'
      );
    }
  }]);

  return DataSource;
})(_react2['default'].Component);

exports['default'] = DataSource;
module.exports = exports['default'];

},{"react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ErrorPage = (function (_React$Component) {
  _inherits(ErrorPage, _React$Component);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    _get(Object.getPrototypeOf(ErrorPage.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ErrorPage, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'h1',
        null,
        'ErrorPage'
      );
    }
  }]);

  return ErrorPage;
})(_react2['default'].Component);

exports['default'] = ErrorPage;
module.exports = exports['default'];

},{"react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Home = (function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'h1',
        null,
        'Home'
      );
    }
  }]);

  return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];

},{"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _materialUi2 = _interopRequireDefault(_materialUi);

var _dataJs = require('./data.js');

var _dataJs2 = _interopRequireDefault(_dataJs);

// Get mui Components
var ThemeManager = new _materialUi2['default'].Styles.ThemeManager();
var AppBar = _materialUi2['default'].AppBar,
    LeftNav = _materialUi2['default'].LeftNav,
    MenuItem = _materialUi2['default'].MenuItem;

// Define menu items for LeftNav
var menuItems = [{ route: '/', text: 'As~Me' }, { route: 'charts', text: 'Charts' }, { route: 'dataSources', text: 'Data-sources' }];

var LeftNavBar = (function (_React$Component) {
  _inherits(LeftNavBar, _React$Component);

  function LeftNavBar() {
    _classCallCheck(this, LeftNavBar);

    _get(Object.getPrototypeOf(LeftNavBar.prototype), 'constructor', this).call(this);

    this._handleClick = this._handleClick.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._getSelectedMenu = this._getSelectedMenu.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);

    this._udpatePage = this._udpatePage.bind(this);
    this._setReactState = this._setReactState.bind(this);

    this.state = asme.navBarData.getSessionStateValue();
    console.log(this.state);
  }

  _createClass(LeftNavBar, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        muiTheme: ThemeManager.getCurrentTheme()
      };
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(e) {
      e.preventDefault();

      this.refs.leftNav.toggle();
    }

    // Get the selected item in LeftMenu
  }, {
    key: '_getSelectedIndex',
    value: function _getSelectedIndex() {
      var currentItem = undefined;

      for (var i = menuItems.length - 1; i >= 0; i--) {
        currentItem = menuItems[i];
        if (currentItem.route && currentItem.route === asme.navBarData.page.value) {
          console.log('currentItem', currentItem);
          return i;
        }
      }
    }

    // Get the selected item in LeftMenu
  }, {
    key: '_getSelectedMenu',
    value: function _getSelectedMenu() {
      var currentItem = undefined;

      for (var i = menuItems.length - 1; i >= 0; i--) {
        currentItem = menuItems[i];
        if (currentItem.route && currentItem.route === asme.navBarData.page.value) {
          return currentItem.text;
        }
      }
    }
  }, {
    key: '_onLeftNavChange',
    value: function _onLeftNavChange(e, key, menu) {
      console.log(e, key, menu);
      // Do DOM Diff refresh
      //this.context.router.transitionTo(payload.route);
      asme.navBarData.page.value = menu.route;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      asme.navBarData.page.addImmediateCallback({}, this._setReactState);
    }

    // Unbind change listener
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      asme.navBarData.page.removeCallback({}, this._setReactState);
    }
  }, {
    key: '_udpatePage',
    value: function _udpatePage() {
      asme.navBarData.page.value = window.location.hash.substr(1) || '/';
    }
  }, {
    key: '_setReactState',
    value: function _setReactState() {
      console.log('Navabar Callback:', asme.navBarData.getSessionStateValue());
      this.setState(asme.navBarData.getSessionStateValue());
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2['default'].createElement(
        'div',
        { id: 'page_container' },
        _react2['default'].createElement(LeftNav, {
          ref: 'leftNav',
          docked: false,
          menuItems: menuItems,
          selectedIndex: this._getSelectedIndex(),
          onChange: this._onLeftNavChange }),
        _react2['default'].createElement(
          'header',
          null,
          _react2['default'].createElement(AppBar, { title: this._getSelectedMenu(), onLeftIconButtonTouchTap: this._handleClick })
        )
      );
    }
  }]);

  return LeftNavBar;
})(_react2['default'].Component);

exports['default'] = LeftNavBar;

LeftNavBar.childContextTypes = {
  muiTheme: _react2['default'].PropTypes.object
};
module.exports = exports['default'];

},{"./data.js":7,"material-ui":"material-ui","react":"react"}],7:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _weavecore = require('weavecore');

var _weavecore2 = _interopRequireDefault(_weavecore);

/**
 * @module asme
 */

//namesapce
if (typeof window === 'undefined') {
    undefined.asme = undefined.asme || {};
} else {
    window.asme = window.asme || {};
}

(function () {
    "use strict";

    // constructor:
    /**
     *
     * @class NavBarData
     * @constructor
     */

    function NavBarData() {
        /**
         * @private
         * @property _localHM
         * @type weavecore.LinkableHashMap
         **/
        this._localHM = WeaveAPI.globalHashMap.requestObject("NavBar", weavecore.LinkableHashMap);

        /**
         * @public
         * @property localHashMap
         * @readOnly
         * @type weavecore.LinkableHashMap
         */
        Object.defineProperty(this, 'localHashMap', {
            value: this._localHM
        });

        /**
         * @public
         * @property page
         * @readOnly
         * @type weavecore.LinkableString
         */
        Object.defineProperty(this, 'page', {
            value: this._localHM.requestObject("page", weavecore.LinkableString)
        });
    }

    // Prototypes
    var p = NavBarData.prototype;

    // public methods:
    /**
     * @method getSessionStateValue
     * @return {Object}
     */
    p.getSessionStateValue = function () {
        var pageValue = this.page.value;
        return {
            'page': pageValue
        };
    };

    asme.navBarData = new NavBarData();
})();

},{"weavecore":"weavecore"}],8:[function(require,module,exports){
"use strict";

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _weavecore = require('weavecore');

var _weavecore2 = _interopRequireDefault(_weavecore);

var _materialUi = require('material-ui');

var _materialUi2 = _interopRequireDefault(_materialUi);

// Get mui Components
var ThemeManager = new _materialUi2['default'].Styles.ThemeManager();
var Slider = _materialUi2['default'].Slider;

var SessionSlider = (function (_React$Component) {
    _inherits(SessionSlider, _React$Component);

    function SessionSlider() {
        _classCallCheck(this, SessionSlider);

        _get(Object.getPrototypeOf(SessionSlider.prototype), 'constructor', this).call(this);

        this.log = new weavecore.SessionStateLog(WeaveAPI.globalHashMap);
        this.state = {
            max: 1,
            value: 0
        };

        this._runLog = this._runLog.bind(this);
        this._setReactState = this._setReactState.bind(this);
    }

    _createClass(SessionSlider, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                muiTheme: ThemeManager.getCurrentTheme()
            };
        }
    }, {
        key: '_setReactState',
        value: function _setReactState() {

            console.log('UpdateSlider State called');
            this.setState({
                max: this.log._undoHistory.length + this.log._redoHistory.length,
                value: this.log._undoHistory.length
            });
        }
    }, {
        key: '_runLog',
        value: function _runLog(e, value) {
            var delta = value - this.log.undoHistory.length;
            if (delta < 0) this.log.undo(-delta);else this.log.redo(delta);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var cc = WeaveAPI.SessionManager.getCallbackCollection(this.log);
            cc.addGroupedCallback(this, this._setReactState, true);
        }

        // Unbind change listener
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var cc = WeaveAPI.SessionManager.getCallbackCollection(this.log);
            cc.removeCallback(this._setReactState);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(Slider, { name: 'sessionSlider',
                step: 1,
                min: 0,
                max: this.state.max,
                value: this.state.value,
                onChange: this._runLog
            });
        }
    }]);

    return SessionSlider;
})(_react2['default'].Component);

exports['default'] = SessionSlider;

SessionSlider.childContextTypes = {
    muiTheme: _react2['default'].PropTypes.object
};
module.exports = exports['default'];

},{"material-ui":"material-ui","react":"react","weavecore":"weavecore"}],10:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _materialUi2 = _interopRequireDefault(_materialUi);

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsHomePageHome = require('./components/homePage/Home');

var _componentsHomePageHome2 = _interopRequireDefault(_componentsHomePageHome);

var _componentsChartsPageCharts = require('./components/chartsPage/Charts');

var _componentsChartsPageCharts2 = _interopRequireDefault(_componentsChartsPageCharts);

var _componentsDataSourcePageDataSource = require('./components/dataSourcePage/DataSource');

var _componentsDataSourcePageDataSource2 = _interopRequireDefault(_componentsDataSourcePageDataSource);

var _componentsNotFoundPageNotFoundPageJsx = require('./components/notFoundPage/NotFoundPage.jsx');

var _componentsNotFoundPageNotFoundPageJsx2 = _interopRequireDefault(_componentsNotFoundPageNotFoundPageJsx);

var _componentsErrorPageErrorPageJsx = require('./components/errorPage/ErrorPage.jsx');

var _componentsErrorPageErrorPageJsx2 = _interopRequireDefault(_componentsErrorPageErrorPageJsx);

var _componentsNavigationLeftNavBarJsx = require('./components/navigation/LeftNavBar.jsx');

var _componentsNavigationLeftNavBarJsx2 = _interopRequireDefault(_componentsNavigationLeftNavBarJsx);

var _componentsSessionSliderSliderJsx = require('./components/sessionSlider/Slider.jsx');

var _componentsSessionSliderSliderJsx2 = _interopRequireDefault(_componentsSessionSliderSliderJsx);

//import SessionedHashLocation from './components/SessionedLocation.js';

var _weavecore = require('weavecore');

var _weavecore2 = _interopRequireDefault(_weavecore);

(0, _reactTapEventPlugin2['default'])();

var routes = {
    undefined: _react2['default'].createElement(_componentsHomePageHome2['default'], null),
    '/': _react2['default'].createElement(_componentsHomePageHome2['default'], null),
    'charts': _react2['default'].createElement(_componentsChartsPageCharts2['default'], null),
    'dataSources': _react2['default'].createElement(_componentsDataSourcePageDataSource2['default'], null)
};

var container = document.getElementById('view');
var menuContainer = document.getElementById('menu');
var logContainer = document.getElementById('logUI');

_react2['default'].render(_react2['default'].createElement(_componentsNavigationLeftNavBarJsx2['default'], null), menuContainer);

//namesapce
if (typeof window === 'undefined') {
    undefined.asme = undefined.asme || {};
} else {
    window.asme = window.asme || {};
}

/*Object.defineProperty(asme, 'page', {
    value: WeaveAPI.globalHashMap.requestObject("page", weavecore.LinkableString)
});*/

asme.navBarData.page.addImmediateCallback(WeaveAPI.globalHashMap, changePage);
asme.navBarData.page.value = window.location.hash.substr(1) || '/';

function changePage() {

    //console.log(Router.HashLocation);
    //React.render( < Root / > , document.body);

    //React.render( < NavBar / > , menuContainer);
    //React.render( < Root / > , document.body);
    try {
        var path = asme.navBarData.page.value;
        console.log('Content Callback:', path);
        var component = routes[path] || _react2['default'].createElement(_componentsNotFoundPageNotFoundPageJsx2['default'], null);
        _react2['default'].render(component, container);
    } catch (err) {
        console.log(err);
        _react2['default'].render(_react2['default'].createElement(_componentsErrorPageErrorPageJsx2['default'], null), container);
    }
}

_react2['default'].render(_react2['default'].createElement(_componentsSessionSliderSliderJsx2['default'], null), logContainer);

/*const AppRoutes = ( < Route path = "/"
    handler = {
        App
    } >
    < DefaultRoute handler = {
        Home
    }
    /> < Route name = "charts"
    handler = {
        Charts
    }
    /> < Route name = "dataSources"
    handler = {
        DataSource
    }
    /> < /Route >
);

Router.run(AppRoutes, Router.HashLocation, (Root, nextState) => {
    React.render( < Root / > , document.body);
    console.log( < Root / > , nextState);
});*/

},{"./components/App":1,"./components/chartsPage/Charts":2,"./components/dataSourcePage/DataSource":3,"./components/errorPage/ErrorPage.jsx":4,"./components/homePage/Home":5,"./components/navigation/LeftNavBar.jsx":6,"./components/notFoundPage/NotFoundPage.jsx":8,"./components/sessionSlider/Slider.jsx":9,"material-ui":"material-ui","react":"react","react-tap-event-plugin":"react-tap-event-plugin","weavecore":"weavecore"}]},{},[10])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2FuamF5L2dpdC9kYXNoYm9hcmQvc3JjL2NvbXBvbmVudHMvQXBwLmpzeCIsIi9Vc2Vycy9zYW5qYXkvZ2l0L2Rhc2hib2FyZC9zcmMvY29tcG9uZW50cy9jaGFydHNQYWdlL0NoYXJ0cy5qc3giLCIvVXNlcnMvc2FuamF5L2dpdC9kYXNoYm9hcmQvc3JjL2NvbXBvbmVudHMvZGF0YVNvdXJjZVBhZ2UvRGF0YVNvdXJjZS5qc3giLCIvVXNlcnMvc2FuamF5L2dpdC9kYXNoYm9hcmQvc3JjL2NvbXBvbmVudHMvZXJyb3JQYWdlL0Vycm9yUGFnZS5qc3giLCIvVXNlcnMvc2FuamF5L2dpdC9kYXNoYm9hcmQvc3JjL2NvbXBvbmVudHMvaG9tZVBhZ2UvSG9tZS5qc3giLCIvVXNlcnMvc2FuamF5L2dpdC9kYXNoYm9hcmQvc3JjL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9MZWZ0TmF2QmFyLmpzeCIsIi9Vc2Vycy9zYW5qYXkvZ2l0L2Rhc2hib2FyZC9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2RhdGEuanMiLCJzcmMvY29tcG9uZW50cy9ub3RGb3VuZFBhZ2UvTm90Rm91bmRQYWdlLmpzeCIsIi9Vc2Vycy9zYW5qYXkvZ2l0L2Rhc2hib2FyZC9zcmMvY29tcG9uZW50cy9zZXNzaW9uU2xpZGVyL1NsaWRlci5qc3giLCIvVXNlcnMvc2FuamF5L2dpdC9kYXNoYm9hcmQvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztxQkNFa0IsT0FBTzs7OzswQkFDVCxhQUFhOzs7OzJCQUNBLGNBQWM7OztBQUszQyxJQUFJLFlBQVksR0FBRyxJQUFJLHdCQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNqRCxJQUFJLE1BQU0sR0FBRyx3QkFBSSxNQUFNO0lBQ25CLE9BQU8sR0FB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QUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQzlFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDOztBQUduRSxTQUFTLFVBQVUsR0FBRzs7Ozs7OztBQVFsQixRQUFJO0FBQ0EsWUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3hDLGVBQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdkMsWUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLDBGQUFrQixDQUFFO0FBQ3RELDJCQUFNLE1BQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDdEMsQ0FBQyxPQUFPLEdBQUcsRUFBRTtBQUNWLGVBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakIsMkJBQU0sTUFBTSxDQUFFLG9GQUFlLEVBQUcsU0FBUyxDQUFDLENBQUM7S0FDOUM7Q0FDSjs7QUFFRCxtQkFBTSxNQUFNLENBQUUscUZBQW1CLEVBQUcsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4gXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG11aSBmcm9tICdtYXRlcmlhbC11aSc7XG5pbXBvcnQgeyBSb3V0ZUhhbmRsZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5cbiBcbi8vIEdldCBtdWkgQ29tcG9uZW50c1xubGV0IFRoZW1lTWFuYWdlciA9IG5ldyBtdWkuU3R5bGVzLlRoZW1lTWFuYWdlcigpO1xubGV0IEFwcEJhciA9IG11aS5BcHBCYXJcbiAgLCBMZWZ0TmF2ID0gbXVpLkxlZnROYXZcbiAgLCBNZW51SXRlbSA9IG11aS5NZW51SXRlbTtcbiBcbi8vIERlZmluZSBtZW51IGl0ZW1zIGZvciBMZWZ0TmF2XG5sZXQgbWVudUl0ZW1zID0gW1xuICB7IHJvdXRlOiAnLycsIHRleHQ6ICdIb21lJyB9LFxuICB7IHJvdXRlOiAnY2hhcnRzJywgdGV4dDogJ0NoYXJ0cycgfSxcbiAgeyByb3V0ZTogJ2RhdGFTb3VyY2VzJywgdGV4dDogJ0RhdGEtc291cmNlcycgfSxcbl07XG4gXG5leHBvcnQgZGVmYXVsdCAgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiBcbiAgICB0aGlzLl9oYW5kbGVDbGljayA9IHRoaXMuX2hhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fZ2V0U2VsZWN0ZWRJbmRleCA9IHRoaXMuX2dldFNlbGVjdGVkSW5kZXguYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkxlZnROYXZDaGFuZ2UgPSB0aGlzLl9vbkxlZnROYXZDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuIFxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG11aVRoZW1lOiBUaGVtZU1hbmFnZXIuZ2V0Q3VycmVudFRoZW1lKClcbiAgICB9O1xuICB9XG4gIFxuICBcbiBcbiAgX2hhbmRsZUNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gXG4gICAgdGhpcy5yZWZzLmxlZnROYXYudG9nZ2xlKCk7XG4gIH1cbiBcbiAgLy8gR2V0IHRoZSBzZWxlY3RlZCBpdGVtIGluIExlZnRNZW51XG4gIF9nZXRTZWxlY3RlZEluZGV4KCkge1xuICAgIGxldCBjdXJyZW50SXRlbTtcbiBcbiAgICBmb3IgKGxldCBpID0gbWVudUl0ZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjdXJyZW50SXRlbSA9IG1lbnVJdGVtc1tpXTtcbiAgICAgIGlmIChjdXJyZW50SXRlbS5yb3V0ZSAmJiB0aGlzLmNvbnRleHQucm91dGVyLmlzQWN0aXZlKGN1cnJlbnRJdGVtLnJvdXRlKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiBcbiAgX29uTGVmdE5hdkNoYW5nZShlLCBrZXksIHBheWxvYWQpIHtcbiAgICAvLyBEbyBET00gRGlmZiByZWZyZXNoXG4gICAgdGhpcy5jb250ZXh0LnJvdXRlci50cmFuc2l0aW9uVG8ocGF5bG9hZC5yb3V0ZSk7XG4gICAgLy9hc21lLm5hdkJhckRhdGEucGFnZS52YWx1ZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSB8fCAnLyc7XG4gIH1cbiBcbiAgcmVuZGVyKCkge1xuIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwicGFnZV9jb250YWluZXJcIj5cbiBcbiAgICAgICAgPExlZnROYXZcbiAgICAgICAgICByZWY9XCJsZWZ0TmF2XCJcbiAgICAgICAgICBkb2NrZWQ9e2ZhbHNlfVxuICAgICAgICAgIG1lbnVJdGVtcz17bWVudUl0ZW1zfVxuICAgICAgICAgIHNlbGVjdGVkSW5kZXg9e3RoaXMuX2dldFNlbGVjdGVkSW5kZXgoKX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25MZWZ0TmF2Q2hhbmdlfSAvPlxuIFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxBcHBCYXIgdGl0bGU9J0Fzfk1lJyBvbkxlZnRJY29uQnV0dG9uVG91Y2hUYXA9e3RoaXMuX2hhbmRsZUNsaWNrfSAvPlxuICAgICAgICA8L2hlYWRlcj5cbiBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxSb3V0ZUhhbmRsZXIgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuIFxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuIFxufVxuIFxuQXBwLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxufTtcbiBcbkFwcC5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG4gXG4iLCJcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICByZXR1cm4gICA8aDE+Q2hhcnRzPC9oMT47O1xuICB9XG59XG4iLCJcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVNvdXJjZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgcmV0dXJuIDxoMT5EYXRhU291cmNlPC9oMT47XG4gIH1cbn1cbiIsIlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvclBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gIHJldHVybiA8aDE+RXJyb3JQYWdlPC9oMT47XG4gIH1cbn1cbiIsIlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICByZXR1cm4gPGgxPkhvbWU8L2gxPjtcbiAgfVxufVxuIiwiXG4gXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG11aSBmcm9tICdtYXRlcmlhbC11aSc7XG5pbXBvcnQgTmF2QmFyRGF0YSBmcm9tICcuL2RhdGEuanMnO1xuXG5cbiBcbi8vIEdldCBtdWkgQ29tcG9uZW50c1xubGV0IFRoZW1lTWFuYWdlciA9IG5ldyBtdWkuU3R5bGVzLlRoZW1lTWFuYWdlcigpO1xubGV0IEFwcEJhciA9IG11aS5BcHBCYXJcbiAgLCBMZWZ0TmF2ID0gbXVpLkxlZnROYXZcbiAgLCBNZW51SXRlbSA9IG11aS5NZW51SXRlbTtcbiBcbi8vIERlZmluZSBtZW51IGl0ZW1zIGZvciBMZWZ0TmF2XG5sZXQgbWVudUl0ZW1zID0gW1xuICB7IHJvdXRlOiAnLycsIHRleHQ6ICdBc35NZScgfSxcbiAgeyByb3V0ZTogJ2NoYXJ0cycsIHRleHQ6ICdDaGFydHMnIH0sXG4gIHsgcm91dGU6ICdkYXRhU291cmNlcycsIHRleHQ6ICdEYXRhLXNvdXJjZXMnIH0sXG5dO1xuIFxuZXhwb3J0IGRlZmF1bHQgIGNsYXNzIExlZnROYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuIFxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuIFxuICAgIHRoaXMuX2hhbmRsZUNsaWNrID0gdGhpcy5faGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLl9nZXRTZWxlY3RlZEluZGV4ID0gdGhpcy5fZ2V0U2VsZWN0ZWRJbmRleC5iaW5kKHRoaXMpO1xuICAgICB0aGlzLl9nZXRTZWxlY3RlZE1lbnUgPSB0aGlzLl9nZXRTZWxlY3RlZE1lbnUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkxlZnROYXZDaGFuZ2UgPSB0aGlzLl9vbkxlZnROYXZDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICBcbiAgICB0aGlzLl91ZHBhdGVQYWdlID0gdGhpcy5fdWRwYXRlUGFnZS5iaW5kKHRoaXMpO1xuICAgICAgIHRoaXMuX3NldFJlYWN0U3RhdGUgPSB0aGlzLl9zZXRSZWFjdFN0YXRlLmJpbmQodGhpcyk7XG5cbiAgICAgICB0aGlzLnN0YXRlID0gYXNtZS5uYXZCYXJEYXRhLmdldFNlc3Npb25TdGF0ZVZhbHVlKCk7XG4gICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gIH1cbiBcbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBtdWlUaGVtZTogVGhlbWVNYW5hZ2VyLmdldEN1cnJlbnRUaGVtZSgpXG4gICAgfTtcbiAgfVxuICBcbiAgXG4gXG4gIF9oYW5kbGVDbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuIFxuICAgIHRoaXMucmVmcy5sZWZ0TmF2LnRvZ2dsZSgpO1xuICB9XG4gXG4gIC8vIEdldCB0aGUgc2VsZWN0ZWQgaXRlbSBpbiBMZWZ0TWVudVxuICBfZ2V0U2VsZWN0ZWRJbmRleCgpIHtcbiAgICBsZXQgY3VycmVudEl0ZW07XG4gXG4gICAgZm9yIChsZXQgaSA9IG1lbnVJdGVtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY3VycmVudEl0ZW0gPSBtZW51SXRlbXNbaV07XG4gICAgICBpZiAoY3VycmVudEl0ZW0ucm91dGUgJiYgY3VycmVudEl0ZW0ucm91dGUgPT09YXNtZS5uYXZCYXJEYXRhLnBhZ2UudmFsdWUgKSB7XG4gICAgICBjb25zb2xlLmxvZygnY3VycmVudEl0ZW0nLGN1cnJlbnRJdGVtKTtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvLyBHZXQgdGhlIHNlbGVjdGVkIGl0ZW0gaW4gTGVmdE1lbnVcbiAgX2dldFNlbGVjdGVkTWVudSgpIHtcbiAgICBsZXQgY3VycmVudEl0ZW07XG4gXG4gICAgZm9yIChsZXQgaSA9IG1lbnVJdGVtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY3VycmVudEl0ZW0gPSBtZW51SXRlbXNbaV07XG4gICAgICBpZiAoY3VycmVudEl0ZW0ucm91dGUgJiYgY3VycmVudEl0ZW0ucm91dGUgPT09IGFzbWUubmF2QmFyRGF0YS5wYWdlLnZhbHVlKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50SXRlbS50ZXh0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuIFxuICBfb25MZWZ0TmF2Q2hhbmdlKGUsIGtleSwgbWVudSkge1xuICBjb25zb2xlLmxvZyhlLGtleSxtZW51KTtcbiAgICAvLyBEbyBET00gRGlmZiByZWZyZXNoXG4gICAgLy90aGlzLmNvbnRleHQucm91dGVyLnRyYW5zaXRpb25UbyhwYXlsb2FkLnJvdXRlKTtcbiAgICBhc21lLm5hdkJhckRhdGEucGFnZS52YWx1ZSA9IG1lbnUucm91dGU7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIGFzbWUubmF2QmFyRGF0YS5wYWdlLmFkZEltbWVkaWF0ZUNhbGxiYWNrKHt9LHRoaXMuX3NldFJlYWN0U3RhdGUpO1xuICAgIH1cblxuICAgICAgLy8gVW5iaW5kIGNoYW5nZSBsaXN0ZW5lclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBhc21lLm5hdkJhckRhdGEucGFnZS5yZW1vdmVDYWxsYmFjayh7fSx0aGlzLl9zZXRSZWFjdFN0YXRlKTtcbiAgfVxuXG4gIF91ZHBhdGVQYWdlKCl7XG4gICAgYXNtZS5uYXZCYXJEYXRhLnBhZ2UudmFsdWUgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkgfHwgJy8nO1xuICB9XG4gIFxuICBfc2V0UmVhY3RTdGF0ZSgpIHtcbiAgY29uc29sZS5sb2coJ05hdmFiYXIgQ2FsbGJhY2s6JywgYXNtZS5uYXZCYXJEYXRhLmdldFNlc3Npb25TdGF0ZVZhbHVlKCkpO1xuICAgIHRoaXMuc2V0U3RhdGUoYXNtZS5uYXZCYXJEYXRhLmdldFNlc3Npb25TdGF0ZVZhbHVlKCkpO1xuICB9XG5cbiBcbiAgcmVuZGVyKCkge1xuIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwicGFnZV9jb250YWluZXJcIj5cbiBcbiAgICAgICAgPExlZnROYXZcbiAgICAgICAgICByZWY9XCJsZWZ0TmF2XCJcbiAgICAgICAgICBkb2NrZWQ9e2ZhbHNlfVxuICAgICAgICAgIG1lbnVJdGVtcz17bWVudUl0ZW1zfVxuICAgICAgICAgIHNlbGVjdGVkSW5kZXg9e3RoaXMuX2dldFNlbGVjdGVkSW5kZXgoKX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25MZWZ0TmF2Q2hhbmdlfSAvPlxuIFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxBcHBCYXIgdGl0bGU9e3RoaXMuX2dldFNlbGVjdGVkTWVudSgpfSBvbkxlZnRJY29uQnV0dG9uVG91Y2hUYXA9e3RoaXMuX2hhbmRsZUNsaWNrfSAvPlxuICAgICAgICA8L2hlYWRlcj5cbiBcbiAgICAgIFxuIFxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuIFxufVxuIFxuTGVmdE5hdkJhci5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn07XG4gXG5cbiBcbiIsImltcG9ydCBXZWF2ZUNvcmUgZnJvbSAnd2VhdmVjb3JlJztcblxuLyoqXG4gKiBAbW9kdWxlIGFzbWVcbiAqL1xuXG4vL25hbWVzYXBjZVxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5hc21lID0gdGhpcy5hc21lIHx8IHt9O1xufSBlbHNlIHtcbiAgICB3aW5kb3cuYXNtZSA9IHdpbmRvdy5hc21lIHx8IHt9O1xufVxuXG5cbihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvLyBjb25zdHJ1Y3RvcjpcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBjbGFzcyBOYXZCYXJEYXRhXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG5cbiAgICBmdW5jdGlvbiBOYXZCYXJEYXRhKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHByb3BlcnR5IF9sb2NhbEhNXG4gICAgICAgICAqIEB0eXBlIHdlYXZlY29yZS5MaW5rYWJsZUhhc2hNYXBcbiAgICAgICAgICoqL1xuICAgICAgICB0aGlzLl9sb2NhbEhNID0gV2VhdmVBUEkuZ2xvYmFsSGFzaE1hcC5yZXF1ZXN0T2JqZWN0KFwiTmF2QmFyXCIsIHdlYXZlY29yZS5MaW5rYWJsZUhhc2hNYXApO1xuXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAcHJvcGVydHkgbG9jYWxIYXNoTWFwXG4gICAgICAgICAqIEByZWFkT25seVxuICAgICAgICAgKiBAdHlwZSB3ZWF2ZWNvcmUuTGlua2FibGVIYXNoTWFwXG4gICAgICAgICAqL1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2xvY2FsSGFzaE1hcCcsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9sb2NhbEhNXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBwcm9wZXJ0eSBwYWdlXG4gICAgICAgICAqIEByZWFkT25seVxuICAgICAgICAgKiBAdHlwZSB3ZWF2ZWNvcmUuTGlua2FibGVTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAncGFnZScsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9sb2NhbEhNLnJlcXVlc3RPYmplY3QoXCJwYWdlXCIsIHdlYXZlY29yZS5MaW5rYWJsZVN0cmluZylcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvLyBQcm90b3R5cGVzXG4gICAgdmFyIHAgPSBOYXZCYXJEYXRhLnByb3RvdHlwZTtcblxuICAgIC8vIHB1YmxpYyBtZXRob2RzOlxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgZ2V0U2Vzc2lvblN0YXRlVmFsdWVcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgcC5nZXRTZXNzaW9uU3RhdGVWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhZ2VWYWx1ZSA9IHRoaXMucGFnZS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdwYWdlJzogcGFnZVZhbHVlXG4gICAgICAgIH07XG5cbiAgICB9O1xuXG4gICAgYXNtZS5uYXZCYXJEYXRhID0gbmV3IE5hdkJhckRhdGEoKTtcblxufSgpKTsiLCJcInVzZSBzdHJpY3RcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSXZWWE5sY25NdmMyRnVhbUY1TDJkcGRDOWtZWE5vWW05aGNtUXZjM0pqTDJOdmJYQnZibVZ1ZEhNdmJtOTBSbTkxYm1SUVlXZGxMMDV2ZEVadmRXNWtVR0ZuWlM1cWMzZ2lMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXMTE5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBXZWF2ZUNvcmUgZnJvbSAnd2VhdmVjb3JlJztcbmltcG9ydCBtdWkgZnJvbSAnbWF0ZXJpYWwtdWknO1xuXG5cbi8vIEdldCBtdWkgQ29tcG9uZW50c1xubGV0IFRoZW1lTWFuYWdlciA9IG5ldyBtdWkuU3R5bGVzLlRoZW1lTWFuYWdlcigpO1xubGV0IFNsaWRlciA9IG11aS5TbGlkZXI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vzc2lvblNsaWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmxvZyA9IG5ldyB3ZWF2ZWNvcmUuU2Vzc2lvblN0YXRlTG9nKFdlYXZlQVBJLmdsb2JhbEhhc2hNYXApO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbWF4OiAxLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9ydW5Mb2cgPSB0aGlzLl9ydW5Mb2cuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fc2V0UmVhY3RTdGF0ZSA9IHRoaXMuX3NldFJlYWN0U3RhdGUuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBtdWlUaGVtZTogVGhlbWVNYW5hZ2VyLmdldEN1cnJlbnRUaGVtZSgpXG4gICAgfTtcbiAgfVxuXG5cbiAgICBfc2V0UmVhY3RTdGF0ZSgpIHtcblxuICAgICAgICBjb25zb2xlLmxvZygnVXBkYXRlU2xpZGVyIFN0YXRlIGNhbGxlZCcpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1heDogdGhpcy5sb2cuX3VuZG9IaXN0b3J5Lmxlbmd0aCArIHRoaXMubG9nLl9yZWRvSGlzdG9yeS5sZW5ndGgsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5sb2cuX3VuZG9IaXN0b3J5Lmxlbmd0aFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfcnVuTG9nKGUsIHZhbHVlKSB7XG4gICAgICAgIHZhciBkZWx0YSA9IHZhbHVlIC0gdGhpcy5sb2cudW5kb0hpc3RvcnkubGVuZ3RoO1xuICAgICAgICBpZiAoZGVsdGEgPCAwKVxuICAgICAgICAgICAgdGhpcy5sb2cudW5kbygtZGVsdGEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLmxvZy5yZWRvKGRlbHRhKTtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgY2MgPSBXZWF2ZUFQSS5TZXNzaW9uTWFuYWdlci5nZXRDYWxsYmFja0NvbGxlY3Rpb24odGhpcy5sb2cpO1xuICAgICAgICBjYy5hZGRHcm91cGVkQ2FsbGJhY2sodGhpcywgdGhpcy5fc2V0UmVhY3RTdGF0ZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gVW5iaW5kIGNoYW5nZSBsaXN0ZW5lclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB2YXIgY2MgPSBXZWF2ZUFQSS5TZXNzaW9uTWFuYWdlci5nZXRDYWxsYmFja0NvbGxlY3Rpb24odGhpcy5sb2cpO1xuICAgICAgICBjYy5yZW1vdmVDYWxsYmFjayh0aGlzLl9zZXRSZWFjdFN0YXRlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8U2xpZGVyIG5hbWUgPSBcInNlc3Npb25TbGlkZXJcIlxuICAgICAgICBzdGVwID0ge1xuICAgICAgICAgICAgMVxuICAgICAgICB9XG4gICAgICAgIG1pbiA9IHtcbiAgICAgICAgICAgIDBcbiAgICAgICAgfVxuICAgICAgICBtYXggPSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1heFxuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZVxuICAgICAgICB9XG4gICAgICAgIG9uQ2hhbmdlID0ge1xuICAgICAgICAgICAgdGhpcy5fcnVuTG9nXG4gICAgICAgIH1cbiAgICAgICAgLyA+IDtcbiAgICB9XG59XG5cblNlc3Npb25TbGlkZXIuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbXVpIGZyb20gJ21hdGVyaWFsLXVpJztcbmltcG9ydCBpbmplY3RUYXBFdmVudFBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJztcblxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9ob21lUGFnZS9Ib21lJztcbmltcG9ydCBDaGFydHMgZnJvbSAnLi9jb21wb25lbnRzL2NoYXJ0c1BhZ2UvQ2hhcnRzJztcbmltcG9ydCBEYXRhU291cmNlIGZyb20gJy4vY29tcG9uZW50cy9kYXRhU291cmNlUGFnZS9EYXRhU291cmNlJztcbmltcG9ydCBOb3RGb3VuZFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL25vdEZvdW5kUGFnZS9Ob3RGb3VuZFBhZ2UuanN4JztcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL2Vycm9yUGFnZS9FcnJvclBhZ2UuanN4JztcbmltcG9ydCBMZWZ0TmF2QmFyIGZyb20gJy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL0xlZnROYXZCYXIuanN4JztcbmltcG9ydCBTZXNzaW9uU2xpZGVyIGZyb20gJy4vY29tcG9uZW50cy9zZXNzaW9uU2xpZGVyL1NsaWRlci5qc3gnO1xuXG4vL2ltcG9ydCBTZXNzaW9uZWRIYXNoTG9jYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL1Nlc3Npb25lZExvY2F0aW9uLmpzJztcblxuXG5pbXBvcnQgV2VhdmVDb3JlIGZyb20gJ3dlYXZlY29yZSc7XG5cblxuXG5pbmplY3RUYXBFdmVudFBsdWdpbigpO1xuXG5jb25zdCByb3V0ZXMgPSB7XG4gICAgdW5kZWZpbmVkOiA8IEhvbWUgLyA+ICxcbiAgICAnLyc6IDwgSG9tZSAvID4gLFxuICAgICdjaGFydHMnOiA8IENoYXJ0cyAvID4gLFxuICAgICdkYXRhU291cmNlcyc6IDwgRGF0YVNvdXJjZSAvID5cbn07XG5cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXcnKTtcbmNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuY29uc3QgbG9nQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ1VJJyk7XG5cblxuUmVhY3QucmVuZGVyKCA8IExlZnROYXZCYXIgLyA+ICwgbWVudUNvbnRhaW5lcik7XG5cblxuLy9uYW1lc2FwY2VcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuYXNtZSA9IHRoaXMuYXNtZSB8fCB7fTtcbn0gZWxzZSB7XG4gICAgd2luZG93LmFzbWUgPSB3aW5kb3cuYXNtZSB8fCB7fTtcbn1cblxuLypPYmplY3QuZGVmaW5lUHJvcGVydHkoYXNtZSwgJ3BhZ2UnLCB7XG4gICAgdmFsdWU6IFdlYXZlQVBJLmdsb2JhbEhhc2hNYXAucmVxdWVzdE9iamVjdChcInBhZ2VcIiwgd2VhdmVjb3JlLkxpbmthYmxlU3RyaW5nKVxufSk7Ki9cblxuYXNtZS5uYXZCYXJEYXRhLnBhZ2UuYWRkSW1tZWRpYXRlQ2FsbGJhY2soV2VhdmVBUEkuZ2xvYmFsSGFzaE1hcCwgY2hhbmdlUGFnZSk7XG5hc21lLm5hdkJhckRhdGEucGFnZS52YWx1ZSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSB8fCAnLyc7XG5cblxuZnVuY3Rpb24gY2hhbmdlUGFnZSgpIHtcblxuXG4gICAgLy9jb25zb2xlLmxvZyhSb3V0ZXIuSGFzaExvY2F0aW9uKTtcbiAgICAvL1JlYWN0LnJlbmRlciggPCBSb290IC8gPiAsIGRvY3VtZW50LmJvZHkpO1xuXG4gICAgLy9SZWFjdC5yZW5kZXIoIDwgTmF2QmFyIC8gPiAsIG1lbnVDb250YWluZXIpO1xuICAgIC8vUmVhY3QucmVuZGVyKCA8IFJvb3QgLyA+ICwgZG9jdW1lbnQuYm9keSk7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGFzbWUubmF2QmFyRGF0YS5wYWdlLnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZygnQ29udGVudCBDYWxsYmFjazonLCBwYXRoKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gcm91dGVzW3BhdGhdIHx8IDwgTm90Rm91bmRQYWdlIC8gPiA7XG4gICAgICAgIFJlYWN0LnJlbmRlcihjb21wb25lbnQsIGNvbnRhaW5lcik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIFJlYWN0LnJlbmRlciggPCBFcnJvclBhZ2UgLyA+ICwgY29udGFpbmVyKTtcbiAgICB9XG59XG5cblJlYWN0LnJlbmRlciggPCBTZXNzaW9uU2xpZGVyIC8gPiAsIGxvZ0NvbnRhaW5lcik7XG5cbi8qY29uc3QgQXBwUm91dGVzID0gKCA8IFJvdXRlIHBhdGggPSBcIi9cIlxuICAgIGhhbmRsZXIgPSB7XG4gICAgICAgIEFwcFxuICAgIH0gPlxuICAgIDwgRGVmYXVsdFJvdXRlIGhhbmRsZXIgPSB7XG4gICAgICAgIEhvbWVcbiAgICB9XG4gICAgLz4gPCBSb3V0ZSBuYW1lID0gXCJjaGFydHNcIlxuICAgIGhhbmRsZXIgPSB7XG4gICAgICAgIENoYXJ0c1xuICAgIH1cbiAgICAvPiA8IFJvdXRlIG5hbWUgPSBcImRhdGFTb3VyY2VzXCJcbiAgICBoYW5kbGVyID0ge1xuICAgICAgICBEYXRhU291cmNlXG4gICAgfVxuICAgIC8+IDwgL1JvdXRlID5cbik7XG5cblJvdXRlci5ydW4oQXBwUm91dGVzLCBSb3V0ZXIuSGFzaExvY2F0aW9uLCAoUm9vdCwgbmV4dFN0YXRlKSA9PiB7XG4gICAgUmVhY3QucmVuZGVyKCA8IFJvb3QgLyA+ICwgZG9jdW1lbnQuYm9keSk7XG4gICAgY29uc29sZS5sb2coIDwgUm9vdCAvID4gLCBuZXh0U3RhdGUpO1xufSk7Ki8iXX0=
