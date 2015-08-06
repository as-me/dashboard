webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _componentsHomePageHomeJsx = __webpack_require__(2);

	var _componentsHomePageHomeJsx2 = _interopRequireDefault(_componentsHomePageHomeJsx);

	var _componentsChartsPageChartsJsx = __webpack_require__(3);

	var _componentsChartsPageChartsJsx2 = _interopRequireDefault(_componentsChartsPageChartsJsx);

	var _componentsDataSourcePageDataSourceJsx = __webpack_require__(4);

	var _componentsDataSourcePageDataSourceJsx2 = _interopRequireDefault(_componentsDataSourcePageDataSourceJsx);

	var _componentsNotFoundPageNotFoundPageJsx = __webpack_require__(5);

	var _componentsNotFoundPageNotFoundPageJsx2 = _interopRequireDefault(_componentsNotFoundPageNotFoundPageJsx);

	var _componentsErrorPageErrorPageJsx = __webpack_require__(6);

	var _componentsErrorPageErrorPageJsx2 = _interopRequireDefault(_componentsErrorPageErrorPageJsx);

	var _componentsNavigationNavBarJsx = __webpack_require__(7);

	var _componentsNavigationNavBarJsx2 = _interopRequireDefault(_componentsNavigationNavBarJsx);

	var container = document.getElementById('content');
	var menuContainer = document.getElementById('menu');

	var routes = {
	    undefined: _react2['default'].createElement(_componentsHomePageHomeJsx2['default'], null),
	    '/': _react2['default'].createElement(_componentsHomePageHomeJsx2['default'], null),
	    'Charts': _react2['default'].createElement(_componentsChartsPageChartsJsx2['default'], null),
	    'Data-Sources': _react2['default'].createElement(_componentsDataSourcePageDataSourceJsx2['default'], null)
	};

	_react2['default'].render(_react2['default'].createElement(_componentsNavigationNavBarJsx2['default'], null), menuContainer);
	asme.navBarData.page.addImmediateCallback(WeaveAPI.globalHashMap, changePage);
	asme.navBarData.page.value = window.location.hash.substr(1) || '/';

	function changePage() {
	    //React.render( < NavBar / > , menuContainer);
	    try {
	        var path = asme.navBarData.page.value;
	        console.log('Content Callback:', path);
	        var component = routes[path] || _react2['default'].createElement(_componentsNotFoundPageNotFoundPageJsx2['default'], null);
	        _react2['default'].render(component, container);
	    } catch (err) {
	        console.log(err);
	        _react2['default'].render(_react2['default'].createElement(_componentsErrorPageErrorPageJsx2['default'], err), container);
	    }
	}

	//changePage();

	/*const routes = {
	    '/': < HomePage / > ,
	    'Charts': < ChartsPage / > ,
	    'Data-Sources': < DataSourcePage / >
	};

	const linkableHash = WeaveAPI.globalHashMap.requestObject("linkableHash", weavecore.LinkableString);
	linkableHash.addImmediateCallback(WeaveAPI.globalHashMap, changePage);




	function changePage() {
	    React.render( < NavBar / > , menuContainer);
	    try {

	        const path = linkableHash.value;
	        console.log(path);
	        const component = routes[path] || < NotFoundPage / > ;
	        React.render(component, container);
	    } catch (err) {
	        console.log(err);
	        React.render( < ErrorPage {...err
	            }
	            />, container
	        );
	    }
	}


	function render() {
	    try {
	        const path = window.location.hash.substr(1) || '/';
	        linkableHash.value = path;
	    } catch (err) {
	        console.log(err);

	    }
	}

	window.addEventListener('hashchange', () => render());
	render();*/

/***/ },
/* 1 */,
/* 2 */
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

	var _react = __webpack_require__(1);

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
/* 3 */
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

	var _react = __webpack_require__(1);

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
	                { className: "row" },
	                _react2["default"].createElement(
	                    "div",
	                    { className: "col-lg-12" },
	                    _react2["default"].createElement(
	                        "ol",
	                        { className: "breadcrumb" },
	                        _react2["default"].createElement(
	                            "li",
	                            { className: "active" },
	                            _react2["default"].createElement("i", { className: "fa fa-bar-chart-o" }),
	                            " Charts"
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

	var _react = __webpack_require__(1);

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
/* 5 */
/***/ function(module, exports) {

	"use strict";

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

	var _react = __webpack_require__(1);

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

/***/ },
/* 7 */
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

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _dataJs = __webpack_require__(8);

	var _dataJs2 = _interopRequireDefault(_dataJs);

	var NavBar = (function (_React$Component) {
	    _inherits(NavBar, _React$Component);

	    function NavBar() {
	        _classCallCheck(this, NavBar);

	        _get(Object.getPrototypeOf(NavBar.prototype), 'constructor', this).call(this);

	        this._udpatePage = this._udpatePage.bind(this);
	        this._setReactState = this._setReactState.bind(this);

	        this.state = asme.navBarData.getSessionStateValue();
	        console.log(this.state);
	    }

	    _createClass(NavBar, [{
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
	            var activeList;
	            if (this.state.page === 'Charts') {
	                activeList = _react2['default'].createElement(
	                    'ul',
	                    { className: 'nav navbar-nav side-nav' },
	                    _react2['default'].createElement(
	                        'li',
	                        { className: 'active', onClick: this._udpatePage },
	                        _react2['default'].createElement(
	                            'a',
	                            { href: '#Charts' },
	                            _react2['default'].createElement('i', { className: 'fa fa-fw fa-bar-chart-o' }),
	                            ' Charts'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        { onClick: this._udpatePage },
	                        _react2['default'].createElement(
	                            'a',
	                            { href: '#Data-Sources' },
	                            _react2['default'].createElement('i', { className: 'fa fa-fw fa-database' }),
	                            ' Data-Sources'
	                        )
	                    )
	                );
	            } else if (this.state.page === 'Data-Sources') {
	                activeList = _react2['default'].createElement(
	                    'ul',
	                    { className: 'nav navbar-nav side-nav' },
	                    _react2['default'].createElement(
	                        'li',
	                        { onClick: this._udpatePage },
	                        _react2['default'].createElement(
	                            'a',
	                            { href: '#Charts' },
	                            _react2['default'].createElement('i', { className: 'fa fa-fw fa-bar-chart-o' }),
	                            ' Charts'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        { className: 'active', onClick: this._udpatePage },
	                        _react2['default'].createElement(
	                            'a',
	                            { href: '#Data-Sources' },
	                            _react2['default'].createElement('i', { className: 'fa fa-fw fa-database' }),
	                            ' Data-Sources'
	                        )
	                    )
	                );
	            } else if (this.state.page === '/' || this.state.page === undefined) {
	                activeList = _react2['default'].createElement(
	                    'ul',
	                    { className: 'nav navbar-nav side-nav' },
	                    _react2['default'].createElement(
	                        'li',
	                        { onClick: this._udpatePage },
	                        _react2['default'].createElement(
	                            'a',
	                            { href: '#Charts' },
	                            _react2['default'].createElement('i', { className: 'fa fa-fw fa-bar-chart-o' }),
	                            ' Charts'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        { onClick: this._udpatePage },
	                        _react2['default'].createElement(
	                            'a',
	                            { href: '#Data-Sources' },
	                            _react2['default'].createElement('i', { className: 'fa fa-fw fa-database' }),
	                            ' Data-Sources'
	                        )
	                    )
	                );
	            }
	            return _react2['default'].createElement(
	                'nav',
	                { className: 'navbar navbar-inverse navbar-fixed-top', role: 'navigation' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'navbar-header' },
	                    _react2['default'].createElement(
	                        'button',
	                        { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#asme-navbar-collapse-1' },
	                        _react2['default'].createElement(
	                            'span',
	                            { className: 'sr-only' },
	                            'Toggle navigation'
	                        ),
	                        _react2['default'].createElement('span', { className: 'icon-bar' }),
	                        _react2['default'].createElement('span', { className: 'icon-bar' }),
	                        _react2['default'].createElement('span', { className: 'icon-bar' })
	                    ),
	                    _react2['default'].createElement(
	                        'a',
	                        { onClick: this._udpatePage, className: 'navbar-brand', href: '#/' },
	                        'As~Me'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'collapse navbar-collapse', id: 'asme-navbar-collapse-1' },
	                    activeList
	                )
	            );
	        }
	    }]);

	    return NavBar;
	})(_react2['default'].Component);

	exports['default'] = NavBar;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * @module asme
	 */

	//namesapce
	"use strict";

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

/***/ }
]);
