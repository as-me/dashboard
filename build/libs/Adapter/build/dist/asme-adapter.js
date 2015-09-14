(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require(undefined), require("React"), require("d3chart"), require("c3"));
	else if(typeof define === 'function' && define.amd)
		define([, "React", "d3chart", "c3"], factory);
	else if(typeof exports === 'object')
		exports["AsmeAdapter"] = factory(require(undefined), require("React"), require("d3chart"), require("c3"));
	else
		root["AsmeAdapter"] = factory(root[undefined], root["React"], root["d3chart"], root["c3"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_14__) {
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

	"use strict";

	__webpack_require__(1);
	exports.AdapterInterface = __webpack_require__(3);
	exports.hook = {};

	exports.hook.C3Hook = __webpack_require__(4);
	exports.hook.D3Hook = __webpack_require__(5);

	exports.peer = {};
	exports.peer.WeaveJSPeer = __webpack_require__(6);

	exports.components = {};

	exports.components.D3 = {};
	exports.components.D3.ScatterPlotTool = __webpack_require__(7);

	exports.components.C3 = {};
	exports.components.C3.ScatterPlotTool = __webpack_require__(12);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	//namesapce
	if (typeof window === 'undefined') {
	    undefined.adapter = undefined.adapter || {};
	} else {
	    window.adapter = window.adapter || {};
	}

	if (typeof window === 'undefined') {
	    undefined.adapter.session = undefined.adapter.session || {};
	} else {
	    window.adapter.session = window.adapter.session || {};
	}

	(function () {
	    function GlobalData() {

	        /**
	         * @public
	         * @property xAxis
	         * @readOnly
	         * @type weavecore.LinkableString
	         */
	        Object.defineProperty(this, 'dataSource', {
	            value: WeaveAPI.globalHashMap.requestObject("dataSource", weavecore.LinkableVariable)
	        });
	    }

	    // Prototypes
	    var p = GlobalData.prototype;

	    p.getData = function () {
	        return this.dataSource.getSessionState();
	    };

	    // public methods:
	    /**
	     * @method getSessionStateValue
	     * @return {Object}
	     */
	    p.getSessionStateValue = function () {
	        return {
	            'dataSource': this.dataSource.getSessionState()
	        };
	    };

	    adapter.session.GlobalData = new GlobalData();
	})();

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	//namespace
	'use strict';

	if (typeof window === 'undefined') {
	    undefined.adapter = undefined.adapter || {};
	} else {
	    window.adapter = window.adapter || {};
	}

	(function () {
	    function Interface() {}
	    var p = Interface.prototype;
	    /*
	     *This function renders on the visualization library , which are hooked to it
	     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
	     */
	    p.doSelection = function (keys) {
	        console.log('this hook doesnt have Selection API');
	    };

	    p.doProbe = function (key) {
	        console.log('this hook doesnt have Probe API');
	    };

	    p.setData = function () {};
	    p.getData = function () {};

	    adapter.Interface = Interface;
	})();

/***/ },
/* 4 */
/***/ function(module, exports) {

	//namespace
	'use strict';

	if (typeof window === 'undefined') {
	    undefined.adapter.hook = undefined.adapter.hook || {};
	} else {
	    window.adapter.hook = window.adapter.hook || {};
	}

	(function () {
	    function C3Interface(chart) {
	        adapter.Interface.call(this);
	        if (chart) this.chart = chart;
	    }

	    C3Interface.prototype = new adapter.Interface();
	    C3Interface.prototype.constructor = C3Interface;

	    var p = C3Interface.prototype;

	    p.setChart = function (chart) {
	        this.chart = chart;
	    };

	    p.doProbe = function (key) {
	        if (!this.chart) {
	            console.log('Hook a C3 chart First');
	            return;
	        }
	        this.chart.select(this.chart.columns, [key], true);
	    };

	    /*
	     *This function renders on the visualization library , which are hooked to it
	     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
	     * @param columns: We need to give the the charts column ids like ['col1','col2']
	     * @param chart: we need to give chart instance generated in c3
	     */
	    p.doSelection = function (keys) {
	        if (!this.chart) {
	            console.log('Hook a c3 chart First');
	            return;
	        }

	        if (keys !== undefined) {
	            if (keys.constructor !== Array) console.log("Keys has to be an array ");
	        } else console.log("keys(Array)  is required");

	        if (keys.length > 0) {
	            var numericKeys = keys.map(function (key) {
	                if (key.constructor === String) return key = Number(key);else return key;
	            });
	            this.chart.select(this.chart.columns, numericKeys, true);
	        } else this.chart.unselect();
	    };

	    adapter.hook.C3Interface = C3Interface;
	})();

/***/ },
/* 5 */
/***/ function(module, exports) {

	//namespace
	'use strict';

	if (typeof window === 'undefined') {
	    undefined.adapter.hook = undefined.adapter.hook || {};
	} else {
	    window.adapter.hook = window.adapter.hook || {};
	}

	(function () {
	    function D3Interface(chart) {
	        adapter.Interface.call(this);
	        if (chart) this.chart = chart;
	        this.dataSource;
	    }

	    D3Interface.prototype = new adapter.Interface();
	    D3Interface.prototype.constructor = D3Interface;

	    var p = D3Interface.prototype;

	    p.setChart = function (chart) {
	        this.chart = chart;
	    };

	    /*
	     *This function renders on the visualization library , which are hooked to it
	     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
	     * @param columns: We need to give the the charts column ids like ['col1','col2']
	     * @param chart: we need to give chart instance generated in c3
	     */
	    p.doSelection = function (keys) {
	        if (!this.chart) {
	            console.log('Hook a d3 chart First');
	            return;
	        }
	        this.chart.select(keys);
	    };

	    p.doProbe = function (key) {
	        if (!this.chart) {
	            console.log('Hook a d3 chart First');
	            return;
	        }
	        this.chart.probe(key);
	    };

	    p.setData = function (sourceName, data) {
	        if (!this.chart) {
	            console.log('Hook a d3 chart First');
	            return;
	        }
	        this.dataSource = sourceName;
	        this.chart.renderChart(data);
	    };

	    adapter.hook.D3Interface = D3Interface;
	})();

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @module adapter.peer
	 */

	'use strict';

	__webpack_require__(2);

	//namespace
	if (typeof window === 'undefined') {
	    undefined.adapter.peer = undefined.adapter.peer || {};
	} else {
	    window.adapter.peer = window.adapter.peer || {};
	}

	(function () {

	    //constructor
	    /**
	     * @class WeaveJSInterface
	     * @extends Interface
	     * @constructor
	     */
	    function WeaveJSInterface() {
	        adapter.Interface.call(this);
	        this.activeHook = null;

	        Object.defineProperty(this, 'sessionable', {
	            value: true
	        });

	        // set Probe and Selection keys
	        Object.defineProperty(this, 'probeKeys', {
	            value: WeaveAPI.globalHashMap.requestObject('probeKeys', weavecore.LinkableVariable, false)
	        });

	        Object.defineProperty(this, 'selectionKeys', {
	            value: WeaveAPI.globalHashMap.requestObject('selectionKeys', weavecore.LinkableVariable, false)
	        });

	        Object.defineProperty(this, 'hooks', {
	            value: WeaveAPI.globalHashMap.requestObject('hooks', weavecore.LinkableHashMap, false)
	        });

	        this.selectionKeys.addImmediateCallback(this, renderSelection.bind(this));
	        this.probeKeys.addImmediateCallback(this, renderProbe.bind(this));
	    }

	    WeaveJSInterface.prototype = new adapter.Interface();
	    WeaveJSInterface.prototype.constructor = WeaveJSInterface;

	    function renderSelection() {
	        var keys = this.selectionKeys.getSessionState();
	        var hookedTools = this.hooks.getObjects();
	        hookedTools.forEach((function (tool, index) {
	            if (tool.sessionData.chart != this.activeHook) tool.hook.doSelection(keys);else this.activeTool = null;
	        }).bind(this));
	    }

	    function renderProbe() {
	        var key = this.probeKeys.getSessionState();
	        var hookedTools = this.hooks.getObjects();
	        hookedTools.forEach((function (tool, index) {
	            if (tool.sessionData.chart != this.activeHook) tool.hook.doProbe(key);else this.activeHook = null;
	        }).bind(this));
	    }

	    var p = WeaveJSInterface.prototype;

	    /**
	     * This function renders on the visualization library , which are hooked to it
	     * @method doSelection
	     * @param {Array} keys We need to give the index value or Keys associated with that record [0,3,5].
	     */
	    p.doSelection = function (keys) {
	        this.selectionKeys.setSessionState(keys);
	    };

	    /**
	     * This function renders on the visualization library , which are hooked to it
	     * @method doProbe
	     * @param {Object} key We need to give the index value or Key associated with that record.
	     */
	    p.doProbe = function (key) {
	        this.probeKeys.setSessionState(key);
	    };

	    /**
	     * This function request for hook which is either instance of IlinkableObject or has sessionable property value true
	     * @method requestHook
	     * @param {String} name to identify the object in session state
	     * @param {Class} classDefn sessionable Object
	     * @return {Object} Mostly DOM element which is wrapped with sessionable propert
	     */
	    p.requestHook = function (name, classDefn) {
	        return this.hooks.requestObject(name, classDefn, false);
	    };

	    /**
	     * This function request for hook which is either instance of IlinkableObject or has sessionable property value true
	     * @method requestHook
	     * @param {String} name to identify the object in session state
	     * @param {Object} classDefn sessionable Object
	     * @return {Object} Mostly DOM element which is wrapped with sessionable propert
	     */
	    p.deleteHook = function (name) {
	        return this.hooks.removeObject(name);
	    };

	    p.loadSessionState = function () {};

	    adapter.peer.WeaveJSInterface = WeaveJSInterface;
	})();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _ScatterPlotUI = __webpack_require__(9);

	var _ScatterPlotUI2 = _interopRequireDefault(_ScatterPlotUI);

	__webpack_require__(11);

	__webpack_require__(2);

	//namesapce
	if (typeof window === 'undefined') {
	    undefined.adapter = undefined.adapter || {};
	} else {
	    window.adapter = window.adapter || {};
	}

	if (typeof window === 'undefined') {
	    undefined.adapter.libs = undefined.adapter.libs || {};
	} else {
	    window.adapter.libs = window.adapter.libs || {};
	}

	if (typeof window === 'undefined') {
	    undefined.adapter.libs.d3 = undefined.adapter.libs.d3 || {};
	} else {
	    window.adapter.libs.d3 = window.adapter.libs.d3 || {};
	}

	(function () {

	    Object.defineProperty(ScatterPlot, 'NS', {
	        value: 'adapter.libs.d3'
	    });

	    Object.defineProperty(ScatterPlot, 'CLASS_NAME', {
	        value: 'ScatterPlot'
	    });

	    function ScatterPlot() {
	        /**
	         * @public
	         * @property sessionable
	         * @readOnly
	         * @type Booloean
	         */

	        Object.defineProperty(this, 'sessionable', {
	            value: true
	        });

	        /**
	         * @public
	         * @property ns
	         * @readOnly
	         * @type String
	         */
	        Object.defineProperty(this, 'ns', {
	            value: 'adapter.libs.d3'
	        });

	        /**
	         * @public
	         * @property library
	         * @readOnly
	         * @type String
	         */
	        Object.defineProperty(this, 'library', {
	            value: 'd3'
	        });

	        /**
	         * @public
	         * @property data
	         * @readOnly
	         * @type String
	         */
	        Object.defineProperty(this, 'sessionData', {
	            value: WeaveAPI.SessionManager.registerLinkableChild(this, new adapter.session.ScatterPlot())
	        });

	        /**
	         * @public
	         * @property chart
	         * @readOnly
	         * @type d3Chart.Scatterplot
	         */
	        /*Object.defineProperty(this, 'chart', {
	            value: new d3Chart.Scatterplot()
	        });*/

	        /**
	         * @public
	         * @property hook
	         * @readOnly
	         * @type d3Chart.Scatterplot
	         */
	        Object.defineProperty(this, 'hook', {
	            value: new adapter.hook.D3Interface()
	        });
	    }

	    // Prototypes.
	    var p = ScatterPlot.prototype;

	    p.createUI = function (padding, size, interactions) {
	        /**
	         * @public
	         * @property ui
	         * @readOnly
	         * @type ReactElement
	         */
	        if (!this.ui) {
	            Object.defineProperty(this, 'ui', {
	                value: _react2['default'].createElement(_ScatterPlotUI2['default'], {
	                    sessionData: this.sessionData,
	                    padding: {
	                        top: padding.top,
	                        bottom: padding.bottom,
	                        left: padding.left,
	                        right: padding.right
	                    },
	                    size: {
	                        width: size.width,
	                        height: size.height
	                    },

	                    onProbe: interactions.onProbe,
	                    onSelect: interactions.onSelect,
	                    hook: this.hook
	                })
	            });
	        }
	    };

	    //TO-DO: Find a way for class part of Modules
	    // Need to save them global data in window object , as we need to create the object at runtime, we need namesapce
	    // where as in module provide by webpack we can't get the constructor name.
	    adapter.libs.d3.ScatterPlot = ScatterPlot;
	})();

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(10);

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var D3ScatterPlot = (function (_React$Component) {
	    _inherits(D3ScatterPlot, _React$Component);

	    function D3ScatterPlot(props) {
	        _classCallCheck(this, D3ScatterPlot);

	        _get(Object.getPrototypeOf(D3ScatterPlot.prototype), "constructor", this).call(this, props);
	        this.sessionData = props.sessionData;
	        this.chart = props.chart;
	        this._setReactState = this._setReactState.bind(this);
	    }

	    //tied with d3 creation

	    _createClass(D3ScatterPlot, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var config = {
	                container: _react2["default"].findDOMNode(this),
	                margin: this.props.padding ? this.props.padding : {},
	                size: this.props.size ? this.props.size : {},
	                columns: {
	                    x: this.sessionData.xAxis.value,
	                    y: this.sessionData.yAxis.value,
	                    key: "index"
	                },
	                interactions: {
	                    onProbe: this.props.onProbe,
	                    onSelect: this.props.onSelect
	                }
	            };

	            var data = WeaveAPI.globalHashMap.getObject('dataSource').getSessionState();
	            WeaveAPI.globalHashMap.getObject('dataSource').addGroupedCallback(this, this._setReactState);
	            console.log(this, this.props);
	            this.sessionData.chart = new d3Chart.Scatterplot();
	            this.props.hook.setChart(this.sessionData.chart);

	            this.sessionData.chart.create(config);
	            this.sessionData.chart.renderChart(data);
	            this.sessionData.xAxis.addGroupedCallback(this, this._setReactState);
	            this.sessionData.yAxis.addGroupedCallback(this, this._setReactState);
	        }

	        //tied with d3 update
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate(prevProps, prevState) {
	            //var data = WeaveAPI.globalHashMap.getObject('dataSource').getSessionState();
	            //this.sessionData.chart.renderChart(data);
	            this.sessionData.chart.setXAttribute(this.sessionData.xAxis.value);
	            this.sessionData.chart.setYAttribute(this.sessionData.yAxis.value);
	        }

	        //tied with d3 destruction
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            this.sessionData.xAxis.removeCallback(this._setReactState);
	            this.sessionData.yAxis.removeCallback(this._setReactState);
	            WeaveAPI.globalHashMap.getObject('dataSource').removeCallback(this._setReactState);
	        }
	    }, {
	        key: "_setReactState",
	        value: function _setReactState() {
	            //this wil call render function which in turn calls componentDidUpdate
	            this.setState(this.sessionData.getSessionStateValue());
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                "div",
	                { className: "Chart" },
	                " "
	            );
	        }
	    }]);

	    return D3ScatterPlot;
	})(_react2["default"].Component);

	module.exports = D3ScatterPlot;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	//namesapce
	if (typeof window === 'undefined') {
	    undefined.adapter = undefined.adapter || {};
	} else {
	    window.adapter = window.adapter || {};
	}

	if (typeof window === 'undefined') {
	    undefined.adapter.session = undefined.adapter.session || {};
	} else {
	    window.adapter.session = window.adapter.session || {};
	}

	(function () {

	    Object.defineProperty(ScatterPlot, 'NS', {
	        value: 'adapter.session'
	    });

	    Object.defineProperty(ScatterPlot, 'CLASS_NAME', {
	        value: 'ScatterPlot'
	    });

	    function ScatterPlot() {

	        /**
	         * @public
	         * @property sessionable
	         * @readOnly
	         * @type Booloean
	         */
	        Object.defineProperty(this, 'sessionable', {
	            value: true
	        });

	        /**
	         * @public
	         * @property ns
	         * @readOnly
	         * @type String
	         */
	        Object.defineProperty(this, 'ns', {
	            value: 'adapter.session'
	        });

	        /**
	         * @public
	         * @property xAxis
	         * @readOnly
	         * @type weavecore.LinkableString
	         */
	        Object.defineProperty(this, 'xAxis', {
	            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableString())
	        });

	        /**
	         * @public
	         * @property yAxis
	         * @readOnly
	         * @type weavecore.LinkableString
	         */
	        Object.defineProperty(this, 'yAxis', {
	            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableString('yAxis'))
	        });

	        // since c3 creates charts with default config need to set at the time of creation.
	        this.chart;
	    }

	    // Prototypes
	    var p = ScatterPlot.prototype;

	    // public methods:
	    /**
	     * @method getSessionStateValue
	     * @return {Object}
	     */
	    p.getSessionStateValue = function () {
	        return {
	            'xAxis': this.xAxis.value,
	            'yAxis': this.yAxis.value
	        };
	    };

	    // public methods:
	    /**
	     * @method getSessionStateValue
	     * @return {Object}
	     */
	    p.getColumnProperties = function () {
	        return ['xAxis', 'yAxis'];
	    };

	    /**
	     * @method getXAxisValue
	     * @return {Object}
	     */
	    p.getXAxisValue = function () {
	        return {
	            'xAxis': this.xAxis.value
	        };
	    };

	    /**
	     * @method getYAxisValue
	     * @return {Object}
	     */
	    p.getYAxisValue = function () {
	        return {
	            'yAxis': this.yAxis.value
	        };
	    };

	    adapter.session.ScatterPlot = ScatterPlot;
	})();

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _ScatterPlotUI = __webpack_require__(13);

	var _ScatterPlotUI2 = _interopRequireDefault(_ScatterPlotUI);

	__webpack_require__(11);

	__webpack_require__(2);

	//namesapce
	if (typeof window === 'undefined') {
	    undefined.adapter = undefined.adapter || {};
	} else {
	    window.adapter = window.adapter || {};
	}

	if (typeof window === 'undefined') {
	    undefined.adapter.libs = undefined.adapter.libs || {};
	} else {
	    window.adapter.libs = window.adapter.libs || {};
	}

	if (typeof window === 'undefined') {
	    undefined.adapter.libs.c3 = undefined.adapter.libs.c3 || {};
	} else {
	    window.adapter.libs.c3 = window.adapter.libs.c3 || {};
	}

	(function () {

	    Object.defineProperty(ScatterPlot, 'NS', {
	        value: 'adapter.libs.c3'
	    });

	    Object.defineProperty(ScatterPlot, 'CLASS_NAME', {
	        value: 'ScatterPlot'
	    });

	    function ScatterPlot() {
	        /**
	         * @public
	         * @property sessionable
	         * @readOnly
	         * @type Booloean
	         */

	        Object.defineProperty(this, 'sessionable', {
	            value: true
	        });

	        /**
	         * @public
	         * @property ns
	         * @readOnly
	         * @type String
	         */
	        Object.defineProperty(this, 'ns', {
	            value: 'adapter.libs.c3'
	        });

	        /**
	         * @public
	         * @property library
	         * @readOnly
	         * @type String
	         */
	        Object.defineProperty(this, 'library', {
	            value: 'c3'
	        });

	        /**
	         * @public
	         * @property data
	         * @readOnly
	         * @type String
	         */
	        Object.defineProperty(this, 'sessionData', {
	            value: WeaveAPI.SessionManager.registerLinkableChild(this, new adapter.session.ScatterPlot())
	        });

	        /**
	         * @public
	         * @property chart
	         * @readOnly
	         * @type d3Chart.Scatterplot
	         */
	        /*Object.defineProperty(this, 'chart', {
	            value: c3.generate(WeaveAPI.globalHashMap.getObject('dataSource').getSessionState())
	        });*/

	        /**
	         * @public
	         * @property hook
	         * @readOnly
	         * @type d3Chart.Scatterplot
	         */
	        Object.defineProperty(this, 'hook', {
	            value: new adapter.hook.C3Interface()
	        });
	    }

	    // Prototypes.
	    var p = ScatterPlot.prototype;

	    p.createUI = function (padding, size, interactions) {
	        /**
	         * @public
	         * @property ui
	         * @readOnly
	         * @type ReactElement
	         */
	        if (!this.ui) {
	            Object.defineProperty(this, 'ui', {
	                value: _react2['default'].createElement(_ScatterPlotUI2['default'], {
	                    sessionData: this.sessionData,
	                    padding: {
	                        top: padding.top,
	                        bottom: padding.bottom,
	                        left: padding.left,
	                        right: padding.right
	                    },
	                    size: {
	                        width: size.width,
	                        height: size.height
	                    },
	                    height: size.height,
	                    onProbe: interactions.onProbe,
	                    onSelect: interactions.onSelect,
	                    hook: this.hook
	                })
	            });
	        }
	    };

	    //TO-DO: Find a way for class part of Modules
	    // Need to save them global data in window object , as we need to create the object at runtime, we need namesapce
	    // where as in module provide by webpack we can't get the constructor name.
	    adapter.libs.c3.ScatterPlot = ScatterPlot;
	})();

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _c3 = __webpack_require__(14);

	var _c32 = _interopRequireDefault(_c3);

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var C3ScatterPlot = (function (_React$Component) {
	    _inherits(C3ScatterPlot, _React$Component);

	    function C3ScatterPlot(props) {
	        _classCallCheck(this, C3ScatterPlot);

	        _get(Object.getPrototypeOf(C3ScatterPlot.prototype), 'constructor', this).call(this, props);
	        this.sessionData = props.sessionData;
	        this._setReactState = this._setReactState.bind(this);
	    }

	    //tied with d3 creation

	    _createClass(C3ScatterPlot, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {

	            var data = WeaveAPI.globalHashMap.getObject('dataSource').getSessionState();
	            var columns = [[], [], []];
	            columns[0].push(this.sessionData.xAxis.value);
	            columns[1].push(this.sessionData.yAxis.value);
	            columns[2].push('index');
	            var records = data.map((function (object) {
	                columns[0].push(object[this.sessionData.xAxis.value]);
	                columns[1].push(object[this.sessionData.yAxis.value]);
	                columns[2].push(object['index']);
	            }).bind(this));

	            var config = {
	                bindto: _react2['default'].findDOMNode(this),
	                padding: this.props.padding ? this.props.padding : {},
	                size: this.props.size ? this.props.size : {},
	                data: {
	                    x: this.sessionData.xAxis.value,
	                    y: this.sessionData.yAxis.value,
	                    columns: columns,
	                    type: 'scatter',
	                    selection: {
	                        enabled: true,
	                        multiple: true,
	                        draggable: true

	                    },
	                    hide: ['index'],
	                    onselected: this.props.onSelect.callback,
	                    onmouseover: this.props.onProbe.callback
	                },
	                axis: {
	                    x: {
	                        label: this.sessionData.xAxis.value

	                    },
	                    y: {
	                        label: this.sessionData.yAxis.value
	                    }
	                },
	                onmouseout: function onmouseout() {
	                    WeaveAPI.globalHashMap.getObject('selectionKeys').setSessionState([]);
	                },
	                legend: {
	                    show: false
	                }

	            };

	            WeaveAPI.globalHashMap.getObject('dataSource').addGroupedCallback(this, this._setReactState);

	            this.sessionData.chart = _c32['default'].generate(config);
	            this.props.hook.setChart(this.sessionData.chart);

	            this.sessionData.xAxis.addGroupedCallback(this, this._setReactState);
	            this.sessionData.yAxis.addGroupedCallback(this, this._setReactState);
	        }

	        //tied with d3 update
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            this.sessionData.chart.setXAttribute(this.sessionData.xAxis.value);
	            this.sessionData.chart.setYAttribute(this.sessionData.yAxis.value);
	        }

	        //tied with d3 destruction
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.sessionData.xAxis.removeCallback(this._setReactState);
	            this.sessionData.yAxis.removeCallback(this._setReactState);
	            WeaveAPI.globalHashMap.getObject('dataSource').removeCallback(this._setReactState);
	        }
	    }, {
	        key: '_setReactState',
	        value: function _setReactState() {
	            //this wil call render function which in turn calls componentDidUpdate
	            this.setState(this.sessionData.getSessionStateValue());
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'Chart' },
	                ' '
	            );
	        }
	    }]);

	    return C3ScatterPlot;
	})(_react2['default'].Component);

	module.exports = C3ScatterPlot;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=asme-adapter.js.map
