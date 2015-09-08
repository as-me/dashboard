(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["Asme"] = factory(require("React"));
	else
		root["Asme"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.Navigation = __webpack_require__(1);
	exports.Content = __webpack_require__(3);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var React = _interopRequireWildcard(_react);

	var Navigation = (function (_React$Component) {
	    _inherits(Navigation, _React$Component);

	    function Navigation(props) {
	        _classCallCheck(this, Navigation);

	        _get(Object.getPrototypeOf(Navigation.prototype), "constructor", this).call(this, props);
	        this.activePage = window.NavigationHashMap.getObject("activePage");
	        this.state = {
	            page: this.activePage.value
	        };
	        this._updateState = this._updateState.bind(this);
	    }

	    _createClass(Navigation, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            this.activePage.addImmediateCallback(this, this._updateState, true);
	        }
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: "_updateState",
	        value: function _updateState() {
	            //this wil call render function which in turn calls componentDidUpdate
	            console.log('updateState called');
	            this.setState({
	                page: this.activePage.value
	            });
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.activePage.removeCallback(this, this._updateState);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var activeList;
	            if (this.state.page === 'charts') {
	                activeList = React.createElement(
	                    "ul",
	                    { className: "nav navbar-nav " },
	                    React.createElement(
	                        "li",
	                        { className: "active" },
	                        React.createElement(
	                            "a",
	                            { href: "#charts" },
	                            " ",
	                            React.createElement(
	                                "i",
	                                { className: "fa fa-fw fa-bar-chart-o" },
	                                " "
	                            ),
	                            " Charts"
	                        )
	                    ),
	                    React.createElement(
	                        "li",
	                        null,
	                        " ",
	                        React.createElement(
	                            "a",
	                            { href: "#dataSources" },
	                            " ",
	                            React.createElement(
	                                "i",
	                                { className: "fa fa-fw fa-database" },
	                                " "
	                            ),
	                            " Data - Sources "
	                        ),
	                        " "
	                    )
	                );
	            } else if (this.state.page === 'dataSources') {
	                activeList = React.createElement(
	                    "ul",
	                    { className: "nav navbar-nav " },
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "a",
	                            { href: "#charts" },
	                            " ",
	                            React.createElement(
	                                "i",
	                                { className: "fa fa-fw fa-bar-chart-o" },
	                                " "
	                            ),
	                            " Charts"
	                        )
	                    ),
	                    React.createElement(
	                        "li",
	                        { className: "active" },
	                        " ",
	                        React.createElement(
	                            "a",
	                            { href: "#dataSources" },
	                            " ",
	                            React.createElement(
	                                "i",
	                                { className: "fa fa-fw fa-database" },
	                                " "
	                            ),
	                            " Data - Sources "
	                        ),
	                        " "
	                    )
	                );
	            } else if (this.state.page === '/' || this.state.page === undefined) {
	                activeList = React.createElement(
	                    "ul",
	                    { className: "nav navbar-nav " },
	                    React.createElement(
	                        "li",
	                        null,
	                        React.createElement(
	                            "a",
	                            { href: "#charts" },
	                            " ",
	                            React.createElement(
	                                "i",
	                                { className: "fa fa-fw fa-bar-chart-o" },
	                                " "
	                            ),
	                            " Charts"
	                        )
	                    ),
	                    React.createElement(
	                        "li",
	                        null,
	                        " ",
	                        React.createElement(
	                            "a",
	                            { href: "#dataSources" },
	                            " ",
	                            React.createElement(
	                                "i",
	                                { className: "fa fa-fw fa-database" },
	                                " "
	                            ),
	                            " Data - Sources "
	                        ),
	                        " "
	                    )
	                );
	            }
	            return React.createElement(
	                "nav",
	                { className: "navbar navbar-inverse navbar-fixed-top", role: "navigation" },
	                React.createElement(
	                    "div",
	                    { className: "container-fluid" },
	                    React.createElement(
	                        "div",
	                        { className: "navbar-header" },
	                        React.createElement(
	                            "button",
	                            { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#asme-navbar-collapse" },
	                            React.createElement(
	                                "span",
	                                { className: "sr-only" },
	                                " Toggle navigation "
	                            ),
	                            React.createElement(
	                                "span",
	                                { className: "icon-bar" },
	                                " "
	                            ),
	                            React.createElement(
	                                "span",
	                                { className: "icon-bar" },
	                                " "
	                            ),
	                            React.createElement(
	                                "span",
	                                { className: "icon-bar" },
	                                " "
	                            )
	                        ),
	                        React.createElement(
	                            "a",
	                            { className: "navbar-brand", href: "#/" },
	                            " As~Me "
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "collapse navbar-collapse navbar-right", id: "asme-navbar-collapse" },
	                        " ",
	                        activeList,
	                        " "
	                    )
	                )
	            );
	        }
	    }]);

	    return Navigation;
	})(React.Component);

	module.exports = Navigation;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var React = _interopRequireWildcard(_react);

	var _componentsHomePageHome = __webpack_require__(4);

	var _componentsHomePageHome2 = _interopRequireDefault(_componentsHomePageHome);

	var _componentsChartsPageCharts = __webpack_require__(5);

	var _componentsChartsPageCharts2 = _interopRequireDefault(_componentsChartsPageCharts);

	var _componentsDataSourcePageDataSource = __webpack_require__(6);

	var _componentsDataSourcePageDataSource2 = _interopRequireDefault(_componentsDataSourcePageDataSource);

	var _componentsNotFoundPageNotFoundPageJsx = __webpack_require__(7);

	var _componentsNotFoundPageNotFoundPageJsx2 = _interopRequireDefault(_componentsNotFoundPageNotFoundPageJsx);

	var _componentsErrorPageErrorPageJsx = __webpack_require__(8);

	var _componentsErrorPageErrorPageJsx2 = _interopRequireDefault(_componentsErrorPageErrorPageJsx);

	var Content = (function (_React$Component) {
	    _inherits(Content, _React$Component);

	    function Content(props) {
	        _classCallCheck(this, Content);

	        _get(Object.getPrototypeOf(Content.prototype), 'constructor', this).call(this, props);
	        this.activePage = window.NavigationHashMap.getObject("activePage");
	        this.routes = {
	            undefined: React.createElement(_componentsHomePageHome2['default'], null),
	            '/': React.createElement(_componentsHomePageHome2['default'], null),
	            'charts': React.createElement(_componentsChartsPageCharts2['default'], null),
	            'dataSources': React.createElement(_componentsDataSourcePageDataSource2['default'], null),
	            'error': React.createElement(_componentsErrorPageErrorPageJsx2['default'], null)
	        };

	        this.state = {
	            page: this.activePage.value
	        };
	        this._updateState = this._updateState.bind(this);
	    }

	    _createClass(Content, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.activePage.addImmediateCallback(this, this._updateState, true);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {}
	    }, {
	        key: '_updateState',
	        value: function _updateState() {
	            //this wil call render function which in turn calls componentDidUpdate
	            console.log('updateState called');
	            this.setState({
	                page: this.activePage.value
	            });
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.activePage.removeCallback(this, this._updateState);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var pageComponent = this.routes[this.state.page];

	            return React.createElement(
	                'div',
	                null,
	                ' ',
	                pageComponent,
	                ' '
	            );
	        }
	    }]);

	    return Content;
	})(React.Component);

	module.exports = Content;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var Charts = (function (_React$Component) {
	  _inherits(Charts, _React$Component);

	  function Charts() {
	    _classCallCheck(this, Charts);

	    _get(Object.getPrototypeOf(Charts.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(Charts, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "div",
	        { className: "btn-group", role: "group", "aria-label": "..." },
	        _react2["default"].createElement(
	          "button",
	          { type: "button", className: "btn btn-default" },
	          "Save"
	        ),
	        _react2["default"].createElement(
	          "button",
	          { type: "button", className: "btn btn-default" },
	          "Open"
	        ),
	        _react2["default"].createElement(
	          "div",
	          { className: "btn-group", role: "group" },
	          _react2["default"].createElement(
	            "button",
	            { type: "button", className: "btn btn-default dropdown-toggle", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
	            "Tools",
	            _react2["default"].createElement("span", { className: "caret" })
	          ),
	          _react2["default"].createElement(
	            "ul",
	            { className: "dropdown-menu" },
	            _react2["default"].createElement(
	              "li",
	              null,
	              _react2["default"].createElement(
	                "a",
	                { href: "#" },
	                "D3 ScatterPlot"
	              )
	            ),
	            _react2["default"].createElement(
	              "li",
	              null,
	              _react2["default"].createElement(
	                "a",
	                { href: "#" },
	                "C3 ScatterPlot"
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Charts;
	})(_react2["default"].Component);

	exports["default"] = Charts;
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

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

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=asme.js.map
