(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\n//import WeaveCore from 'weavecore';\n//import gregSlider from 'gregSlider';\n\nvar _componentsHomePageHomeJsx = __webpack_require__(2);\n\nvar _componentsHomePageHomeJsx2 = _interopRequireDefault(_componentsHomePageHomeJsx);\n\nvar _componentsChartsPageChartsJsx = __webpack_require__(3);\n\nvar _componentsChartsPageChartsJsx2 = _interopRequireDefault(_componentsChartsPageChartsJsx);\n\nvar _componentsDataSourcePageDataSourceJsx = __webpack_require__(4);\n\nvar _componentsDataSourcePageDataSourceJsx2 = _interopRequireDefault(_componentsDataSourcePageDataSourceJsx);\n\nvar _componentsNotFoundPageNotFoundPageJsx = __webpack_require__(5);\n\nvar _componentsNotFoundPageNotFoundPageJsx2 = _interopRequireDefault(_componentsNotFoundPageNotFoundPageJsx);\n\nvar _componentsErrorPageErrorPageJsx = __webpack_require__(6);\n\nvar _componentsErrorPageErrorPageJsx2 = _interopRequireDefault(_componentsErrorPageErrorPageJsx);\n\nvar _componentsNavigationNavBarJsx = __webpack_require__(7);\n\nvar _componentsNavigationNavBarJsx2 = _interopRequireDefault(_componentsNavigationNavBarJsx);\n\nvar container = document.getElementById('content');\nvar menuContainer = document.getElementById('menu');\n\nvar routes = {\n    undefined: _react2['default'].createElement(_componentsHomePageHomeJsx2['default'], null),\n    '/': _react2['default'].createElement(_componentsHomePageHomeJsx2['default'], null),\n    'Charts': _react2['default'].createElement(_componentsChartsPageChartsJsx2['default'], null),\n    'Data-Sources': _react2['default'].createElement(_componentsDataSourcePageDataSourceJsx2['default'], null)\n};\n\n_react2['default'].render(_react2['default'].createElement(_componentsNavigationNavBarJsx2['default'], null), menuContainer);\nasme.navBarData.page.addImmediateCallback(WeaveAPI.globalHashMap, changePage);\nasme.navBarData.page.value = window.location.hash.substr(1) || '/';\n\nfunction changePage() {\n    //React.render( < NavBar / > , menuContainer);\n    try {\n        var path = asme.navBarData.page.value;\n        console.log('Content Callback:', path);\n        var component = routes[path] || _react2['default'].createElement(_componentsNotFoundPageNotFoundPageJsx2['default'], null);\n        _react2['default'].render(component, container);\n    } catch (err) {\n        console.log(err);\n        _react2['default'].render(_react2['default'].createElement(_componentsErrorPageErrorPageJsx2['default'], err), container);\n    }\n}\n\n//changePage();\n\n/*const routes = {\n    '/': < HomePage / > ,\n    'Charts': < ChartsPage / > ,\n    'Data-Sources': < DataSourcePage / >\n};\n\nconst linkableHash = WeaveAPI.globalHashMap.requestObject(\"linkableHash\", weavecore.LinkableString);\nlinkableHash.addImmediateCallback(WeaveAPI.globalHashMap, changePage);\n\n\n\n\nfunction changePage() {\n    React.render( < NavBar / > , menuContainer);\n    try {\n\n        const path = linkableHash.value;\n        console.log(path);\n        const component = routes[path] || < NotFoundPage / > ;\n        React.render(component, container);\n    } catch (err) {\n        console.log(err);\n        React.render( < ErrorPage {...err\n            }\n            />, container\n        );\n    }\n}\n\n\nfunction render() {\n    try {\n        const path = window.location.hash.substr(1) || '/';\n        linkableHash.value = path;\n    } catch (err) {\n        console.log(err);\n\n    }\n}\n\nwindow.addEventListener('hashchange', () => render());\nrender();*/\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/app.jsx\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/app.jsx?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_1__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"React\"\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22React%22?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar Home = (function (_React$Component) {\n  _inherits(Home, _React$Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(Home, [{\n    key: 'render',\n    value: function render() {\n      return _react2['default'].createElement(\n        'h1',\n        null,\n        'Home'\n      );\n    }\n  }]);\n\n  return Home;\n})(_react2['default'].Component);\n\nexports['default'] = Home;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/homePage/Home.jsx\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/components/homePage/Home.jsx?");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar Charts = (function (_React$Component) {\n    _inherits(Charts, _React$Component);\n\n    function Charts() {\n        _classCallCheck(this, Charts);\n\n        _get(Object.getPrototypeOf(Charts.prototype), \"constructor\", this).apply(this, arguments);\n    }\n\n    _createClass(Charts, [{\n        key: \"render\",\n        value: function render() {\n            return _react2[\"default\"].createElement(\n                \"div\",\n                { className: \"row\" },\n                _react2[\"default\"].createElement(\n                    \"div\",\n                    { className: \"col-lg-12\" },\n                    _react2[\"default\"].createElement(\n                        \"ol\",\n                        { className: \"breadcrumb\" },\n                        _react2[\"default\"].createElement(\n                            \"li\",\n                            { className: \"active\" },\n                            _react2[\"default\"].createElement(\"i\", { className: \"fa fa-bar-chart-o\" }),\n                            \" Charts\"\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Charts;\n})(_react2[\"default\"].Component);\n\nexports[\"default\"] = Charts;\nmodule.exports = exports[\"default\"];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/chartsPage/Charts.jsx\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/components/chartsPage/Charts.jsx?");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar DataSource = (function (_React$Component) {\n  _inherits(DataSource, _React$Component);\n\n  function DataSource() {\n    _classCallCheck(this, DataSource);\n\n    _get(Object.getPrototypeOf(DataSource.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(DataSource, [{\n    key: 'render',\n    value: function render() {\n      return _react2['default'].createElement(\n        'h1',\n        null,\n        'DataSource'\n      );\n    }\n  }]);\n\n  return DataSource;\n})(_react2['default'].Component);\n\nexports['default'] = DataSource;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/dataSourcePage/DataSource.jsx\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/components/dataSourcePage/DataSource.jsx?");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/notFoundPage/NotFoundPage.jsx\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/components/notFoundPage/NotFoundPage.jsx?");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar ErrorPage = (function (_React$Component) {\n  _inherits(ErrorPage, _React$Component);\n\n  function ErrorPage() {\n    _classCallCheck(this, ErrorPage);\n\n    _get(Object.getPrototypeOf(ErrorPage.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(ErrorPage, [{\n    key: 'render',\n    value: function render() {\n      return _react2['default'].createElement(\n        'h1',\n        null,\n        'ErrorPage'\n      );\n    }\n  }]);\n\n  return ErrorPage;\n})(_react2['default'].Component);\n\nexports['default'] = ErrorPage;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/errorPage/ErrorPage.jsx\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/components/errorPage/ErrorPage.jsx?");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n    value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _dataJs = __webpack_require__(8);\n\nvar _dataJs2 = _interopRequireDefault(_dataJs);\n\nvar NavBar = (function (_React$Component) {\n    _inherits(NavBar, _React$Component);\n\n    function NavBar() {\n        _classCallCheck(this, NavBar);\n\n        _get(Object.getPrototypeOf(NavBar.prototype), 'constructor', this).call(this);\n\n        this._udpatePage = this._udpatePage.bind(this);\n        this._setReactState = this._setReactState.bind(this);\n\n        this.state = asme.navBarData.getSessionStateValue();\n        console.log(this.state);\n    }\n\n    _createClass(NavBar, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            asme.navBarData.page.addImmediateCallback({}, this._setReactState);\n        }\n\n        // Unbind change listener\n    }, {\n        key: 'componentWillUnmount',\n        value: function componentWillUnmount() {\n            asme.navBarData.page.removeCallback({}, this._setReactState);\n        }\n    }, {\n        key: '_udpatePage',\n        value: function _udpatePage() {\n            asme.navBarData.page.value = window.location.hash.substr(1) || '/';\n        }\n    }, {\n        key: '_setReactState',\n        value: function _setReactState() {\n            console.log('Navabar Callback:', asme.navBarData.getSessionStateValue());\n            this.setState(asme.navBarData.getSessionStateValue());\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var activeList;\n            if (this.state.page === 'Charts') {\n                activeList = _react2['default'].createElement(\n                    'ul',\n                    { className: 'nav navbar-nav side-nav' },\n                    _react2['default'].createElement(\n                        'li',\n                        { className: 'active', onClick: this._udpatePage },\n                        _react2['default'].createElement(\n                            'a',\n                            { href: '#Charts' },\n                            _react2['default'].createElement('i', { className: 'fa fa-fw fa-bar-chart-o' }),\n                            ' Charts'\n                        )\n                    ),\n                    _react2['default'].createElement(\n                        'li',\n                        { onClick: this._udpatePage },\n                        _react2['default'].createElement(\n                            'a',\n                            { href: '#Data-Sources' },\n                            _react2['default'].createElement('i', { className: 'fa fa-fw fa-database' }),\n                            ' Data-Sources'\n                        )\n                    )\n                );\n            } else if (this.state.page === 'Data-Sources') {\n                activeList = _react2['default'].createElement(\n                    'ul',\n                    { className: 'nav navbar-nav side-nav' },\n                    _react2['default'].createElement(\n                        'li',\n                        { onClick: this._udpatePage },\n                        _react2['default'].createElement(\n                            'a',\n                            { href: '#Charts' },\n                            _react2['default'].createElement('i', { className: 'fa fa-fw fa-bar-chart-o' }),\n                            ' Charts'\n                        )\n                    ),\n                    _react2['default'].createElement(\n                        'li',\n                        { className: 'active', onClick: this._udpatePage },\n                        _react2['default'].createElement(\n                            'a',\n                            { href: '#Data-Sources' },\n                            _react2['default'].createElement('i', { className: 'fa fa-fw fa-database' }),\n                            ' Data-Sources'\n                        )\n                    )\n                );\n            } else if (this.state.page === '/' || this.state.page === undefined) {\n                activeList = _react2['default'].createElement(\n                    'ul',\n                    { className: 'nav navbar-nav side-nav' },\n                    _react2['default'].createElement(\n                        'li',\n                        { onClick: this._udpatePage },\n                        _react2['default'].createElement(\n                            'a',\n                            { href: '#Charts' },\n                            _react2['default'].createElement('i', { className: 'fa fa-fw fa-bar-chart-o' }),\n                            ' Charts'\n                        )\n                    ),\n                    _react2['default'].createElement(\n                        'li',\n                        { onClick: this._udpatePage },\n                        _react2['default'].createElement(\n                            'a',\n                            { href: '#Data-Sources' },\n                            _react2['default'].createElement('i', { className: 'fa fa-fw fa-database' }),\n                            ' Data-Sources'\n                        )\n                    )\n                );\n            }\n            return _react2['default'].createElement(\n                'nav',\n                { className: 'navbar navbar-inverse navbar-fixed-top', role: 'navigation' },\n                _react2['default'].createElement(\n                    'div',\n                    { className: 'navbar-header' },\n                    _react2['default'].createElement(\n                        'button',\n                        { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#asme-navbar-collapse-1' },\n                        _react2['default'].createElement(\n                            'span',\n                            { className: 'sr-only' },\n                            'Toggle navigation'\n                        ),\n                        _react2['default'].createElement('span', { className: 'icon-bar' }),\n                        _react2['default'].createElement('span', { className: 'icon-bar' }),\n                        _react2['default'].createElement('span', { className: 'icon-bar' })\n                    ),\n                    _react2['default'].createElement(\n                        'a',\n                        { onClick: this._udpatePage, className: 'navbar-brand', href: '#/' },\n                        'As~Me'\n                    )\n                ),\n                _react2['default'].createElement(\n                    'div',\n                    { className: 'collapse navbar-collapse', id: 'asme-navbar-collapse-1' },\n                    activeList\n                )\n            );\n        }\n    }]);\n\n    return NavBar;\n})(_react2['default'].Component);\n\nexports['default'] = NavBar;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/navigation/NavBar.jsx\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/components/navigation/NavBar.jsx?");

/***/ },
/* 8 */
/***/ function(module, exports) {

	eval("/**\n * @module asme\n */\n\n//namesapce\n\"use strict\";\n\nif (typeof window === 'undefined') {\n    undefined.asme = undefined.asme || {};\n} else {\n    window.asme = window.asme || {};\n}\n\n(function () {\n    \"use strict\";\n\n    // constructor:\n    /**\n     *\n     * @class NavBarData\n     * @constructor\n     */\n\n    function NavBarData() {\n        /**\n         * @private\n         * @property _localHM\n         * @type weavecore.LinkableHashMap\n         **/\n        this._localHM = WeaveAPI.globalHashMap.requestObject(\"NavBar\", weavecore.LinkableHashMap);\n\n        /**\n         * @public\n         * @property localHashMap\n         * @readOnly\n         * @type weavecore.LinkableHashMap\n         */\n        Object.defineProperty(this, 'localHashMap', {\n            value: this._localHM\n        });\n\n        /**\n         * @public\n         * @property page\n         * @readOnly\n         * @type weavecore.LinkableString\n         */\n        Object.defineProperty(this, 'page', {\n            value: this._localHM.requestObject(\"page\", weavecore.LinkableString)\n        });\n    }\n\n    // Prototypes\n    var p = NavBarData.prototype;\n\n    // public methods:\n    /**\n     * @method getSessionStateValue\n     * @return {Object}\n     */\n    p.getSessionStateValue = function () {\n        var pageValue = this.page.value;\n        return {\n            'page': pageValue\n        };\n    };\n\n    asme.navBarData = new NavBarData();\n})();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/navigation/data.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/components/navigation/data.js?");

/***/ }
/******/ ])
});
;
