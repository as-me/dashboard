/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		1:0
/******/ 	};

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

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports) {

	/**
	 * React v0.13.3
	 */
	(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.React = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */

	/* globals __REACT_DEVTOOLS_GLOBAL_HOOK__*/

	'use strict';

	var EventPluginUtils = _dereq_(19);
	var ReactChildren = _dereq_(32);
	var ReactComponent = _dereq_(34);
	var ReactClass = _dereq_(33);
	var ReactContext = _dereq_(38);
	var ReactCurrentOwner = _dereq_(39);
	var ReactElement = _dereq_(57);
	var ReactElementValidator = _dereq_(58);
	var ReactDOM = _dereq_(40);
	var ReactDOMTextComponent = _dereq_(51);
	var ReactDefaultInjection = _dereq_(54);
	var ReactInstanceHandles = _dereq_(66);
	var ReactMount = _dereq_(70);
	var ReactPerf = _dereq_(75);
	var ReactPropTypes = _dereq_(78);
	var ReactReconciler = _dereq_(81);
	var ReactServerRendering = _dereq_(84);

	var assign = _dereq_(27);
	var findDOMNode = _dereq_(117);
	var onlyChild = _dereq_(144);

	ReactDefaultInjection.inject();

	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;

	if ("production" !== "development") {
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}

	var render = ReactPerf.measure('React', 'render', ReactMount.render);

	var React = {
	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    only: onlyChild
	  },
	  Component: ReactComponent,
	  DOM: ReactDOM,
	  PropTypes: ReactPropTypes,
	  initializeTouchEvents: function(shouldUseTouch) {
	    EventPluginUtils.useTouchEvents = shouldUseTouch;
	  },
	  createClass: ReactClass.createClass,
	  createElement: createElement,
	  cloneElement: cloneElement,
	  createFactory: createFactory,
	  createMixin: function(mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },
	  constructAndRenderComponent: ReactMount.constructAndRenderComponent,
	  constructAndRenderComponentByID: ReactMount.constructAndRenderComponentByID,
	  findDOMNode: findDOMNode,
	  render: render,
	  renderToString: ReactServerRendering.renderToString,
	  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
	  unmountComponentAtNode: ReactMount.unmountComponentAtNode,
	  isValidElement: ReactElement.isValidElement,
	  withContext: ReactContext.withContext,

	  // Hook for JSX spread, don't use this for anything else.
	  __spread: assign
	};

	// Inject the runtime into a devtools global hook regardless of browser.
	// Allows for debugging when the hook is injected on the page.
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
	    CurrentOwner: ReactCurrentOwner,
	    InstanceHandles: ReactInstanceHandles,
	    Mount: ReactMount,
	    Reconciler: ReactReconciler,
	    TextComponent: ReactDOMTextComponent
	  });
	}

	if ("production" !== "development") {
	  var ExecutionEnvironment = _dereq_(21);
	  if (ExecutionEnvironment.canUseDOM && window.top === window.self) {

	    // If we're in Chrome, look for the devtools marker and provide a download
	    // link if not installed.
	    if (navigator.userAgent.indexOf('Chrome') > -1) {
	      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
	        console.debug(
	          'Download the React DevTools for a better development experience: ' +
	          'https://fb.me/react-devtools'
	        );
	      }
	    }

	    var expectedFeatures = [
	      // shims
	      Array.isArray,
	      Array.prototype.every,
	      Array.prototype.forEach,
	      Array.prototype.indexOf,
	      Array.prototype.map,
	      Date.now,
	      Function.prototype.bind,
	      Object.keys,
	      String.prototype.split,
	      String.prototype.trim,

	      // shams
	      Object.create,
	      Object.freeze
	    ];

	    for (var i = 0; i < expectedFeatures.length; i++) {
	      if (!expectedFeatures[i]) {
	        console.error(
	          'One or more ES5 shim/shams expected by React are not available: ' +
	          'https://fb.me/react-warning-polyfills'
	        );
	        break;
	      }
	    }
	  }
	}

	React.version = '0.13.3';

	module.exports = React;

	},{"117":117,"144":144,"19":19,"21":21,"27":27,"32":32,"33":33,"34":34,"38":38,"39":39,"40":40,"51":51,"54":54,"57":57,"58":58,"66":66,"70":70,"75":75,"78":78,"81":81,"84":84}],2:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule AutoFocusMixin
	 * @typechecks static-only
	 */

	'use strict';

	var focusNode = _dereq_(119);

	var AutoFocusMixin = {
	  componentDidMount: function() {
	    if (this.props.autoFocus) {
	      focusNode(this.getDOMNode());
	    }
	  }
	};

	module.exports = AutoFocusMixin;

	},{"119":119}],3:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015 Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BeforeInputEventPlugin
	 * @typechecks static-only
	 */

	'use strict';

	var EventConstants = _dereq_(15);
	var EventPropagators = _dereq_(20);
	var ExecutionEnvironment = _dereq_(21);
	var FallbackCompositionState = _dereq_(22);
	var SyntheticCompositionEvent = _dereq_(93);
	var SyntheticInputEvent = _dereq_(97);

	var keyOf = _dereq_(141);

	var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
	var START_KEYCODE = 229;

	var canUseCompositionEvent = (
	  ExecutionEnvironment.canUseDOM &&
	  'CompositionEvent' in window
	);

	var documentMode = null;
	if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
	  documentMode = document.documentMode;
	}

	// Webkit offers a very useful `textInput` event that can be used to
	// directly represent `beforeInput`. The IE `textinput` event is not as
	// useful, so we don't use it.
	var canUseTextInputEvent = (
	  ExecutionEnvironment.canUseDOM &&
	  'TextEvent' in window &&
	  !documentMode &&
	  !isPresto()
	);

	// In IE9+, we have access to composition events, but the data supplied
	// by the native compositionend event may be incorrect. Japanese ideographic
	// spaces, for instance (\u3000) are not recorded correctly.
	var useFallbackCompositionData = (
	  ExecutionEnvironment.canUseDOM &&
	  (
	    (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11)
	  )
	);

	/**
	 * Opera <= 12 includes TextEvent in window, but does not fire
	 * text input events. Rely on keypress instead.
	 */
	function isPresto() {
	  var opera = window.opera;
	  return (
	    typeof opera === 'object' &&
	    typeof opera.version === 'function' &&
	    parseInt(opera.version(), 10) <= 12
	  );
	}

	var SPACEBAR_CODE = 32;
	var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);

	var topLevelTypes = EventConstants.topLevelTypes;

	// Events and their corresponding property names.
	var eventTypes = {
	  beforeInput: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onBeforeInput: null}),
	      captured: keyOf({onBeforeInputCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topCompositionEnd,
	      topLevelTypes.topKeyPress,
	      topLevelTypes.topTextInput,
	      topLevelTypes.topPaste
	    ]
	  },
	  compositionEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCompositionEnd: null}),
	      captured: keyOf({onCompositionEndCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topCompositionEnd,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topKeyPress,
	      topLevelTypes.topKeyUp,
	      topLevelTypes.topMouseDown
	    ]
	  },
	  compositionStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCompositionStart: null}),
	      captured: keyOf({onCompositionStartCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topCompositionStart,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topKeyPress,
	      topLevelTypes.topKeyUp,
	      topLevelTypes.topMouseDown
	    ]
	  },
	  compositionUpdate: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCompositionUpdate: null}),
	      captured: keyOf({onCompositionUpdateCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topCompositionUpdate,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topKeyPress,
	      topLevelTypes.topKeyUp,
	      topLevelTypes.topMouseDown
	    ]
	  }
	};

	// Track whether we've ever handled a keypress on the space key.
	var hasSpaceKeypress = false;

	/**
	 * Return whether a native keypress event is assumed to be a command.
	 * This is required because Firefox fires `keypress` events for key commands
	 * (cut, copy, select-all, etc.) even though no character is inserted.
	 */
	function isKeypressCommand(nativeEvent) {
	  return (
	    (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
	    // ctrlKey && altKey is equivalent to AltGr, and is not a command.
	    !(nativeEvent.ctrlKey && nativeEvent.altKey)
	  );
	}


	/**
	 * Translate native top level events into event types.
	 *
	 * @param {string} topLevelType
	 * @return {object}
	 */
	function getCompositionEventType(topLevelType) {
	  switch (topLevelType) {
	    case topLevelTypes.topCompositionStart:
	      return eventTypes.compositionStart;
	    case topLevelTypes.topCompositionEnd:
	      return eventTypes.compositionEnd;
	    case topLevelTypes.topCompositionUpdate:
	      return eventTypes.compositionUpdate;
	  }
	}

	/**
	 * Does our fallback best-guess model think this event signifies that
	 * composition has begun?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionStart(topLevelType, nativeEvent) {
	  return (
	    topLevelType === topLevelTypes.topKeyDown &&
	    nativeEvent.keyCode === START_KEYCODE
	  );
	}

	/**
	 * Does our fallback mode think that this event is the end of composition?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionEnd(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case topLevelTypes.topKeyUp:
	      // Command keys insert or clear IME input.
	      return (END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1);
	    case topLevelTypes.topKeyDown:
	      // Expect IME keyCode on each keydown. If we get any other
	      // code we must have exited earlier.
	      return (nativeEvent.keyCode !== START_KEYCODE);
	    case topLevelTypes.topKeyPress:
	    case topLevelTypes.topMouseDown:
	    case topLevelTypes.topBlur:
	      // Events are not possible without cancelling IME.
	      return true;
	    default:
	      return false;
	  }
	}

	/**
	 * Google Input Tools provides composition data via a CustomEvent,
	 * with the `data` property populated in the `detail` object. If this
	 * is available on the event object, use it. If not, this is a plain
	 * composition event and we have nothing special to extract.
	 *
	 * @param {object} nativeEvent
	 * @return {?string}
	 */
	function getDataFromCustomEvent(nativeEvent) {
	  var detail = nativeEvent.detail;
	  if (typeof detail === 'object' && 'data' in detail) {
	    return detail.data;
	  }
	  return null;
	}

	// Track the current IME composition fallback object, if any.
	var currentComposition = null;

	/**
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {DOMEventTarget} topLevelTarget The listening component root node.
	 * @param {string} topLevelTargetID ID of `topLevelTarget`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?object} A SyntheticCompositionEvent.
	 */
	function extractCompositionEvent(
	  topLevelType,
	  topLevelTarget,
	  topLevelTargetID,
	  nativeEvent
	) {
	  var eventType;
	  var fallbackData;

	  if (canUseCompositionEvent) {
	    eventType = getCompositionEventType(topLevelType);
	  } else if (!currentComposition) {
	    if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
	      eventType = eventTypes.compositionStart;
	    }
	  } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
	    eventType = eventTypes.compositionEnd;
	  }

	  if (!eventType) {
	    return null;
	  }

	  if (useFallbackCompositionData) {
	    // The current composition is stored statically and must not be
	    // overwritten while composition continues.
	    if (!currentComposition && eventType === eventTypes.compositionStart) {
	      currentComposition = FallbackCompositionState.getPooled(topLevelTarget);
	    } else if (eventType === eventTypes.compositionEnd) {
	      if (currentComposition) {
	        fallbackData = currentComposition.getData();
	      }
	    }
	  }

	  var event = SyntheticCompositionEvent.getPooled(
	    eventType,
	    topLevelTargetID,
	    nativeEvent
	  );

	  if (fallbackData) {
	    // Inject data generated from fallback path into the synthetic event.
	    // This matches the property of native CompositionEventInterface.
	    event.data = fallbackData;
	  } else {
	    var customData = getDataFromCustomEvent(nativeEvent);
	    if (customData !== null) {
	      event.data = customData;
	    }
	  }

	  EventPropagators.accumulateTwoPhaseDispatches(event);
	  return event;
	}

	/**
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The string corresponding to this `beforeInput` event.
	 */
	function getNativeBeforeInputChars(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case topLevelTypes.topCompositionEnd:
	      return getDataFromCustomEvent(nativeEvent);
	    case topLevelTypes.topKeyPress:
	      /**
	       * If native `textInput` events are available, our goal is to make
	       * use of them. However, there is a special case: the spacebar key.
	       * In Webkit, preventing default on a spacebar `textInput` event
	       * cancels character insertion, but it *also* causes the browser
	       * to fall back to its default spacebar behavior of scrolling the
	       * page.
	       *
	       * Tracking at:
	       * https://code.google.com/p/chromium/issues/detail?id=355103
	       *
	       * To avoid this issue, use the keypress event as if no `textInput`
	       * event is available.
	       */
	      var which = nativeEvent.which;
	      if (which !== SPACEBAR_CODE) {
	        return null;
	      }

	      hasSpaceKeypress = true;
	      return SPACEBAR_CHAR;

	    case topLevelTypes.topTextInput:
	      // Record the characters to be added to the DOM.
	      var chars = nativeEvent.data;

	      // If it's a spacebar character, assume that we have already handled
	      // it at the keypress level and bail immediately. Android Chrome
	      // doesn't give us keycodes, so we need to blacklist it.
	      if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
	        return null;
	      }

	      return chars;

	    default:
	      // For other native event types, do nothing.
	      return null;
	  }
	}

	/**
	 * For browsers that do not provide the `textInput` event, extract the
	 * appropriate string to use for SyntheticInputEvent.
	 *
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The fallback string for this `beforeInput` event.
	 */
	function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
	  // If we are currently composing (IME) and using a fallback to do so,
	  // try to extract the composed characters from the fallback object.
	  if (currentComposition) {
	    if (
	      topLevelType === topLevelTypes.topCompositionEnd ||
	      isFallbackCompositionEnd(topLevelType, nativeEvent)
	    ) {
	      var chars = currentComposition.getData();
	      FallbackCompositionState.release(currentComposition);
	      currentComposition = null;
	      return chars;
	    }
	    return null;
	  }

	  switch (topLevelType) {
	    case topLevelTypes.topPaste:
	      // If a paste event occurs after a keypress, throw out the input
	      // chars. Paste events should not lead to BeforeInput events.
	      return null;
	    case topLevelTypes.topKeyPress:
	      /**
	       * As of v27, Firefox may fire keypress events even when no character
	       * will be inserted. A few possibilities:
	       *
	       * - `which` is `0`. Arrow keys, Esc key, etc.
	       *
	       * - `which` is the pressed key code, but no char is available.
	       *   Ex: 'AltGr + d` in Polish. There is no modified character for
	       *   this key combination and no character is inserted into the
	       *   document, but FF fires the keypress for char code `100` anyway.
	       *   No `input` event will occur.
	       *
	       * - `which` is the pressed key code, but a command combination is
	       *   being used. Ex: `Cmd+C`. No character is inserted, and no
	       *   `input` event will occur.
	       */
	      if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
	        return String.fromCharCode(nativeEvent.which);
	      }
	      return null;
	    case topLevelTypes.topCompositionEnd:
	      return useFallbackCompositionData ? null : nativeEvent.data;
	    default:
	      return null;
	  }
	}

	/**
	 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
	 * `textInput` or fallback behavior.
	 *
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {DOMEventTarget} topLevelTarget The listening component root node.
	 * @param {string} topLevelTargetID ID of `topLevelTarget`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?object} A SyntheticInputEvent.
	 */
	function extractBeforeInputEvent(
	  topLevelType,
	  topLevelTarget,
	  topLevelTargetID,
	  nativeEvent
	) {
	  var chars;

	  if (canUseTextInputEvent) {
	    chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
	  } else {
	    chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
	  }

	  // If no characters are being inserted, no BeforeInput event should
	  // be fired.
	  if (!chars) {
	    return null;
	  }

	  var event = SyntheticInputEvent.getPooled(
	    eventTypes.beforeInput,
	    topLevelTargetID,
	    nativeEvent
	  );

	  event.data = chars;
	  EventPropagators.accumulateTwoPhaseDispatches(event);
	  return event;
	}

	/**
	 * Create an `onBeforeInput` event to match
	 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
	 *
	 * This event plugin is based on the native `textInput` event
	 * available in Chrome, Safari, Opera, and IE. This event fires after
	 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
	 *
	 * `beforeInput` is spec'd but not implemented in any browsers, and
	 * the `input` event does not provide any useful information about what has
	 * actually been added, contrary to the spec. Thus, `textInput` is the best
	 * available event to identify the characters that have actually been inserted
	 * into the target node.
	 *
	 * This plugin is also responsible for emitting `composition` events, thus
	 * allowing us to share composition fallback code for both `beforeInput` and
	 * `composition` event types.
	 */
	var BeforeInputEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID,
	    nativeEvent
	  ) {
	    return [
	      extractCompositionEvent(
	        topLevelType,
	        topLevelTarget,
	        topLevelTargetID,
	        nativeEvent
	      ),
	      extractBeforeInputEvent(
	        topLevelType,
	        topLevelTarget,
	        topLevelTargetID,
	        nativeEvent
	      )
	    ];
	  }
	};

	module.exports = BeforeInputEventPlugin;

	},{"141":141,"15":15,"20":20,"21":21,"22":22,"93":93,"97":97}],4:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSProperty
	 */

	'use strict';

	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */
	var isUnitlessNumber = {
	  boxFlex: true,
	  boxFlexGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	  fillOpacity: true,
	  strokeDashoffset: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}

	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function(prop) {
	  prefixes.forEach(function(prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});

	/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */
	var shorthandPropertyExpansions = {
	  background: {
	    backgroundImage: true,
	    backgroundPosition: true,
	    backgroundRepeat: true,
	    backgroundColor: true
	  },
	  border: {
	    borderWidth: true,
	    borderStyle: true,
	    borderColor: true
	  },
	  borderBottom: {
	    borderBottomWidth: true,
	    borderBottomStyle: true,
	    borderBottomColor: true
	  },
	  borderLeft: {
	    borderLeftWidth: true,
	    borderLeftStyle: true,
	    borderLeftColor: true
	  },
	  borderRight: {
	    borderRightWidth: true,
	    borderRightStyle: true,
	    borderRightColor: true
	  },
	  borderTop: {
	    borderTopWidth: true,
	    borderTopStyle: true,
	    borderTopColor: true
	  },
	  font: {
	    fontStyle: true,
	    fontVariant: true,
	    fontWeight: true,
	    fontSize: true,
	    lineHeight: true,
	    fontFamily: true
	  }
	};

	var CSSProperty = {
	  isUnitlessNumber: isUnitlessNumber,
	  shorthandPropertyExpansions: shorthandPropertyExpansions
	};

	module.exports = CSSProperty;

	},{}],5:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSPropertyOperations
	 * @typechecks static-only
	 */

	'use strict';

	var CSSProperty = _dereq_(4);
	var ExecutionEnvironment = _dereq_(21);

	var camelizeStyleName = _dereq_(108);
	var dangerousStyleValue = _dereq_(113);
	var hyphenateStyleName = _dereq_(133);
	var memoizeStringOnly = _dereq_(143);
	var warning = _dereq_(154);

	var processStyleName = memoizeStringOnly(function(styleName) {
	  return hyphenateStyleName(styleName);
	});

	var styleFloatAccessor = 'cssFloat';
	if (ExecutionEnvironment.canUseDOM) {
	  // IE8 only supports accessing cssFloat (standard) as styleFloat
	  if (document.documentElement.style.cssFloat === undefined) {
	    styleFloatAccessor = 'styleFloat';
	  }
	}

	if ("production" !== "development") {
	  // 'msTransform' is correct, but the other prefixes should be capitalized
	  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

	  // style values shouldn't contain a semicolon
	  var badStyleValueWithSemicolonPattern = /;\s*$/;

	  var warnedStyleNames = {};
	  var warnedStyleValues = {};

	  var warnHyphenatedStyleName = function(name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    ("production" !== "development" ? warning(
	      false,
	      'Unsupported style property %s. Did you mean %s?',
	      name,
	      camelizeStyleName(name)
	    ) : null);
	  };

	  var warnBadVendoredStyleName = function(name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    ("production" !== "development" ? warning(
	      false,
	      'Unsupported vendor-prefixed style property %s. Did you mean %s?',
	      name,
	      name.charAt(0).toUpperCase() + name.slice(1)
	    ) : null);
	  };

	  var warnStyleValueWithSemicolon = function(name, value) {
	    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	      return;
	    }

	    warnedStyleValues[value] = true;
	    ("production" !== "development" ? warning(
	      false,
	      'Style property values shouldn\'t contain a semicolon. ' +
	      'Try "%s: %s" instead.',
	      name,
	      value.replace(badStyleValueWithSemicolonPattern, '')
	    ) : null);
	  };

	  /**
	   * @param {string} name
	   * @param {*} value
	   */
	  var warnValidStyle = function(name, value) {
	    if (name.indexOf('-') > -1) {
	      warnHyphenatedStyleName(name);
	    } else if (badVendoredStyleNamePattern.test(name)) {
	      warnBadVendoredStyleName(name);
	    } else if (badStyleValueWithSemicolonPattern.test(value)) {
	      warnStyleValueWithSemicolon(name, value);
	    }
	  };
	}

	/**
	 * Operations for dealing with CSS properties.
	 */
	var CSSPropertyOperations = {

	  /**
	   * Serializes a mapping of style properties for use as inline styles:
	   *
	   *   > createMarkupForStyles({width: '200px', height: 0})
	   *   "width:200px;height:0;"
	   *
	   * Undefined values are ignored so that declarative programming is easier.
	   * The result should be HTML-escaped before insertion into the DOM.
	   *
	   * @param {object} styles
	   * @return {?string}
	   */
	  createMarkupForStyles: function(styles) {
	    var serialized = '';
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      var styleValue = styles[styleName];
	      if ("production" !== "development") {
	        warnValidStyle(styleName, styleValue);
	      }
	      if (styleValue != null) {
	        serialized += processStyleName(styleName) + ':';
	        serialized += dangerousStyleValue(styleName, styleValue) + ';';
	      }
	    }
	    return serialized || null;
	  },

	  /**
	   * Sets the value for multiple styles on a node.  If a value is specified as
	   * '' (empty string), the corresponding style property will be unset.
	   *
	   * @param {DOMElement} node
	   * @param {object} styles
	   */
	  setValueForStyles: function(node, styles) {
	    var style = node.style;
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      if ("production" !== "development") {
	        warnValidStyle(styleName, styles[styleName]);
	      }
	      var styleValue = dangerousStyleValue(styleName, styles[styleName]);
	      if (styleName === 'float') {
	        styleName = styleFloatAccessor;
	      }
	      if (styleValue) {
	        style[styleName] = styleValue;
	      } else {
	        var expansion = CSSProperty.shorthandPropertyExpansions[styleName];
	        if (expansion) {
	          // Shorthand property that IE8 won't like unsetting, so unset each
	          // component to placate it
	          for (var individualStyleName in expansion) {
	            style[individualStyleName] = '';
	          }
	        } else {
	          style[styleName] = '';
	        }
	      }
	    }
	  }

	};

	module.exports = CSSPropertyOperations;

	},{"108":108,"113":113,"133":133,"143":143,"154":154,"21":21,"4":4}],6:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CallbackQueue
	 */

	'use strict';

	var PooledClass = _dereq_(28);

	var assign = _dereq_(27);
	var invariant = _dereq_(135);

	/**
	 * A specialized pseudo-event module to help keep track of components waiting to
	 * be notified when their DOM representations are available for use.
	 *
	 * This implements `PooledClass`, so you should never need to instantiate this.
	 * Instead, use `CallbackQueue.getPooled()`.
	 *
	 * @class ReactMountReady
	 * @implements PooledClass
	 * @internal
	 */
	function CallbackQueue() {
	  this._callbacks = null;
	  this._contexts = null;
	}

	assign(CallbackQueue.prototype, {

	  /**
	   * Enqueues a callback to be invoked when `notifyAll` is invoked.
	   *
	   * @param {function} callback Invoked when `notifyAll` is invoked.
	   * @param {?object} context Context to call `callback` with.
	   * @internal
	   */
	  enqueue: function(callback, context) {
	    this._callbacks = this._callbacks || [];
	    this._contexts = this._contexts || [];
	    this._callbacks.push(callback);
	    this._contexts.push(context);
	  },

	  /**
	   * Invokes all enqueued callbacks and clears the queue. This is invoked after
	   * the DOM representation of a component has been created or updated.
	   *
	   * @internal
	   */
	  notifyAll: function() {
	    var callbacks = this._callbacks;
	    var contexts = this._contexts;
	    if (callbacks) {
	      ("production" !== "development" ? invariant(
	        callbacks.length === contexts.length,
	        'Mismatched list of contexts in callback queue'
	      ) : invariant(callbacks.length === contexts.length));
	      this._callbacks = null;
	      this._contexts = null;
	      for (var i = 0, l = callbacks.length; i < l; i++) {
	        callbacks[i].call(contexts[i]);
	      }
	      callbacks.length = 0;
	      contexts.length = 0;
	    }
	  },

	  /**
	   * Resets the internal queue.
	   *
	   * @internal
	   */
	  reset: function() {
	    this._callbacks = null;
	    this._contexts = null;
	  },

	  /**
	   * `PooledClass` looks for this.
	   */
	  destructor: function() {
	    this.reset();
	  }

	});

	PooledClass.addPoolingTo(CallbackQueue);

	module.exports = CallbackQueue;

	},{"135":135,"27":27,"28":28}],7:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ChangeEventPlugin
	 */

	'use strict';

	var EventConstants = _dereq_(15);
	var EventPluginHub = _dereq_(17);
	var EventPropagators = _dereq_(20);
	var ExecutionEnvironment = _dereq_(21);
	var ReactUpdates = _dereq_(87);
	var SyntheticEvent = _dereq_(95);

	var isEventSupported = _dereq_(136);
	var isTextInputElement = _dereq_(138);
	var keyOf = _dereq_(141);

	var topLevelTypes = EventConstants.topLevelTypes;

	var eventTypes = {
	  change: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onChange: null}),
	      captured: keyOf({onChangeCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topChange,
	      topLevelTypes.topClick,
	      topLevelTypes.topFocus,
	      topLevelTypes.topInput,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topKeyUp,
	      topLevelTypes.topSelectionChange
	    ]
	  }
	};

	/**
	 * For IE shims
	 */
	var activeElement = null;
	var activeElementID = null;
	var activeElementValue = null;
	var activeElementValueProp = null;

	/**
	 * SECTION: handle `change` event
	 */
	function shouldUseChangeEvent(elem) {
	  return (
	    elem.nodeName === 'SELECT' ||
	    (elem.nodeName === 'INPUT' && elem.type === 'file')
	  );
	}

	var doesChangeEventBubble = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // See `handleChange` comment below
	  doesChangeEventBubble = isEventSupported('change') && (
	    (!('documentMode' in document) || document.documentMode > 8)
	  );
	}

	function manualDispatchChangeEvent(nativeEvent) {
	  var event = SyntheticEvent.getPooled(
	    eventTypes.change,
	    activeElementID,
	    nativeEvent
	  );
	  EventPropagators.accumulateTwoPhaseDispatches(event);

	  // If change and propertychange bubbled, we'd just bind to it like all the
	  // other events and have it go through ReactBrowserEventEmitter. Since it
	  // doesn't, we manually listen for the events and so we have to enqueue and
	  // process the abstract event manually.
	  //
	  // Batching is necessary here in order to ensure that all event handlers run
	  // before the next rerender (including event handlers attached to ancestor
	  // elements instead of directly on the input). Without this, controlled
	  // components don't work properly in conjunction with event bubbling because
	  // the component is rerendered and the value reverted before all the event
	  // handlers can run. See https://github.com/facebook/react/issues/708.
	  ReactUpdates.batchedUpdates(runEventInBatch, event);
	}

	function runEventInBatch(event) {
	  EventPluginHub.enqueueEvents(event);
	  EventPluginHub.processEventQueue();
	}

	function startWatchingForChangeEventIE8(target, targetID) {
	  activeElement = target;
	  activeElementID = targetID;
	  activeElement.attachEvent('onchange', manualDispatchChangeEvent);
	}

	function stopWatchingForChangeEventIE8() {
	  if (!activeElement) {
	    return;
	  }
	  activeElement.detachEvent('onchange', manualDispatchChangeEvent);
	  activeElement = null;
	  activeElementID = null;
	}

	function getTargetIDForChangeEvent(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topChange) {
	    return topLevelTargetID;
	  }
	}
	function handleEventsForChangeEventIE8(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topFocus) {
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForChangeEventIE8();
	    startWatchingForChangeEventIE8(topLevelTarget, topLevelTargetID);
	  } else if (topLevelType === topLevelTypes.topBlur) {
	    stopWatchingForChangeEventIE8();
	  }
	}


	/**
	 * SECTION: handle `input` event
	 */
	var isInputEventSupported = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // IE9 claims to support the input event but fails to trigger it when
	  // deleting text, so we ignore its input events
	  isInputEventSupported = isEventSupported('input') && (
	    (!('documentMode' in document) || document.documentMode > 9)
	  );
	}

	/**
	 * (For old IE.) Replacement getter/setter for the `value` property that gets
	 * set on the active element.
	 */
	var newValueProp =  {
	  get: function() {
	    return activeElementValueProp.get.call(this);
	  },
	  set: function(val) {
	    // Cast to a string so we can do equality checks.
	    activeElementValue = '' + val;
	    activeElementValueProp.set.call(this, val);
	  }
	};

	/**
	 * (For old IE.) Starts tracking propertychange events on the passed-in element
	 * and override the value property so that we can distinguish user events from
	 * value changes in JS.
	 */
	function startWatchingForValueChange(target, targetID) {
	  activeElement = target;
	  activeElementID = targetID;
	  activeElementValue = target.value;
	  activeElementValueProp = Object.getOwnPropertyDescriptor(
	    target.constructor.prototype,
	    'value'
	  );

	  Object.defineProperty(activeElement, 'value', newValueProp);
	  activeElement.attachEvent('onpropertychange', handlePropertyChange);
	}

	/**
	 * (For old IE.) Removes the event listeners from the currently-tracked element,
	 * if any exists.
	 */
	function stopWatchingForValueChange() {
	  if (!activeElement) {
	    return;
	  }

	  // delete restores the original property definition
	  delete activeElement.value;
	  activeElement.detachEvent('onpropertychange', handlePropertyChange);

	  activeElement = null;
	  activeElementID = null;
	  activeElementValue = null;
	  activeElementValueProp = null;
	}

	/**
	 * (For old IE.) Handles a propertychange event, sending a `change` event if
	 * the value of the active element has changed.
	 */
	function handlePropertyChange(nativeEvent) {
	  if (nativeEvent.propertyName !== 'value') {
	    return;
	  }
	  var value = nativeEvent.srcElement.value;
	  if (value === activeElementValue) {
	    return;
	  }
	  activeElementValue = value;

	  manualDispatchChangeEvent(nativeEvent);
	}

	/**
	 * If a `change` event should be fired, returns the target's ID.
	 */
	function getTargetIDForInputEvent(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topInput) {
	    // In modern browsers (i.e., not IE8 or IE9), the input event is exactly
	    // what we want so fall through here and trigger an abstract event
	    return topLevelTargetID;
	  }
	}

	// For IE8 and IE9.
	function handleEventsForInputEventIE(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topFocus) {
	    // In IE8, we can capture almost all .value changes by adding a
	    // propertychange handler and looking for events with propertyName
	    // equal to 'value'
	    // In IE9, propertychange fires for most input events but is buggy and
	    // doesn't fire when text is deleted, but conveniently, selectionchange
	    // appears to fire in all of the remaining cases so we catch those and
	    // forward the event if the value has changed
	    // In either case, we don't want to call the event handler if the value
	    // is changed from JS so we redefine a setter for `.value` that updates
	    // our activeElementValue variable, allowing us to ignore those changes
	    //
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForValueChange();
	    startWatchingForValueChange(topLevelTarget, topLevelTargetID);
	  } else if (topLevelType === topLevelTypes.topBlur) {
	    stopWatchingForValueChange();
	  }
	}

	// For IE8 and IE9.
	function getTargetIDForInputEventIE(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topSelectionChange ||
	      topLevelType === topLevelTypes.topKeyUp ||
	      topLevelType === topLevelTypes.topKeyDown) {
	    // On the selectionchange event, the target is just document which isn't
	    // helpful for us so just check activeElement instead.
	    //
	    // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
	    // propertychange on the first input event after setting `value` from a
	    // script and fires only keydown, keypress, keyup. Catching keyup usually
	    // gets it and catching keydown lets us fire an event for the first
	    // keystroke if user does a key repeat (it'll be a little delayed: right
	    // before the second keystroke). Other input methods (e.g., paste) seem to
	    // fire selectionchange normally.
	    if (activeElement && activeElement.value !== activeElementValue) {
	      activeElementValue = activeElement.value;
	      return activeElementID;
	    }
	  }
	}


	/**
	 * SECTION: handle `click` event
	 */
	function shouldUseClickEvent(elem) {
	  // Use the `click` event to detect changes to checkbox and radio inputs.
	  // This approach works across all browsers, whereas `change` does not fire
	  // until `blur` in IE8.
	  return (
	    elem.nodeName === 'INPUT' &&
	    (elem.type === 'checkbox' || elem.type === 'radio')
	  );
	}

	function getTargetIDForClickEvent(
	    topLevelType,
	    topLevelTarget,
	    topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topClick) {
	    return topLevelTargetID;
	  }
	}

	/**
	 * This plugin creates an `onChange` event that normalizes change events
	 * across form elements. This event fires at a time when it's possible to
	 * change the element's value without seeing a flicker.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - select
	 */
	var ChangeEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {

	    var getTargetIDFunc, handleEventFunc;
	    if (shouldUseChangeEvent(topLevelTarget)) {
	      if (doesChangeEventBubble) {
	        getTargetIDFunc = getTargetIDForChangeEvent;
	      } else {
	        handleEventFunc = handleEventsForChangeEventIE8;
	      }
	    } else if (isTextInputElement(topLevelTarget)) {
	      if (isInputEventSupported) {
	        getTargetIDFunc = getTargetIDForInputEvent;
	      } else {
	        getTargetIDFunc = getTargetIDForInputEventIE;
	        handleEventFunc = handleEventsForInputEventIE;
	      }
	    } else if (shouldUseClickEvent(topLevelTarget)) {
	      getTargetIDFunc = getTargetIDForClickEvent;
	    }

	    if (getTargetIDFunc) {
	      var targetID = getTargetIDFunc(
	        topLevelType,
	        topLevelTarget,
	        topLevelTargetID
	      );
	      if (targetID) {
	        var event = SyntheticEvent.getPooled(
	          eventTypes.change,
	          targetID,
	          nativeEvent
	        );
	        EventPropagators.accumulateTwoPhaseDispatches(event);
	        return event;
	      }
	    }

	    if (handleEventFunc) {
	      handleEventFunc(
	        topLevelType,
	        topLevelTarget,
	        topLevelTargetID
	      );
	    }
	  }

	};

	module.exports = ChangeEventPlugin;

	},{"136":136,"138":138,"141":141,"15":15,"17":17,"20":20,"21":21,"87":87,"95":95}],8:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ClientReactRootIndex
	 * @typechecks
	 */

	'use strict';

	var nextReactRootIndex = 0;

	var ClientReactRootIndex = {
	  createReactRootIndex: function() {
	    return nextReactRootIndex++;
	  }
	};

	module.exports = ClientReactRootIndex;

	},{}],9:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMChildrenOperations
	 * @typechecks static-only
	 */

	'use strict';

	var Danger = _dereq_(12);
	var ReactMultiChildUpdateTypes = _dereq_(72);

	var setTextContent = _dereq_(149);
	var invariant = _dereq_(135);

	/**
	 * Inserts `childNode` as a child of `parentNode` at the `index`.
	 *
	 * @param {DOMElement} parentNode Parent node in which to insert.
	 * @param {DOMElement} childNode Child node to insert.
	 * @param {number} index Index at which to insert the child.
	 * @internal
	 */
	function insertChildAt(parentNode, childNode, index) {
	  // By exploiting arrays returning `undefined` for an undefined index, we can
	  // rely exclusively on `insertBefore(node, null)` instead of also using
	  // `appendChild(node)`. However, using `undefined` is not allowed by all
	  // browsers so we must replace it with `null`.
	  parentNode.insertBefore(
	    childNode,
	    parentNode.childNodes[index] || null
	  );
	}

	/**
	 * Operations for updating with DOM children.
	 */
	var DOMChildrenOperations = {

	  dangerouslyReplaceNodeWithMarkup: Danger.dangerouslyReplaceNodeWithMarkup,

	  updateTextContent: setTextContent,

	  /**
	   * Updates a component's children by processing a series of updates. The
	   * update configurations are each expected to have a `parentNode` property.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @param {array<string>} markupList List of markup strings.
	   * @internal
	   */
	  processUpdates: function(updates, markupList) {
	    var update;
	    // Mapping from parent IDs to initial child orderings.
	    var initialChildren = null;
	    // List of children that will be moved or removed.
	    var updatedChildren = null;

	    for (var i = 0; i < updates.length; i++) {
	      update = updates[i];
	      if (update.type === ReactMultiChildUpdateTypes.MOVE_EXISTING ||
	          update.type === ReactMultiChildUpdateTypes.REMOVE_NODE) {
	        var updatedIndex = update.fromIndex;
	        var updatedChild = update.parentNode.childNodes[updatedIndex];
	        var parentID = update.parentID;

	        ("production" !== "development" ? invariant(
	          updatedChild,
	          'processUpdates(): Unable to find child %s of element. This ' +
	          'probably means the DOM was unexpectedly mutated (e.g., by the ' +
	          'browser), usually due to forgetting a <tbody> when using tables, ' +
	          'nesting tags like <form>, <p>, or <a>, or using non-SVG elements ' +
	          'in an <svg> parent. Try inspecting the child nodes of the element ' +
	          'with React ID `%s`.',
	          updatedIndex,
	          parentID
	        ) : invariant(updatedChild));

	        initialChildren = initialChildren || {};
	        initialChildren[parentID] = initialChildren[parentID] || [];
	        initialChildren[parentID][updatedIndex] = updatedChild;

	        updatedChildren = updatedChildren || [];
	        updatedChildren.push(updatedChild);
	      }
	    }

	    var renderedMarkup = Danger.dangerouslyRenderMarkup(markupList);

	    // Remove updated children first so that `toIndex` is consistent.
	    if (updatedChildren) {
	      for (var j = 0; j < updatedChildren.length; j++) {
	        updatedChildren[j].parentNode.removeChild(updatedChildren[j]);
	      }
	    }

	    for (var k = 0; k < updates.length; k++) {
	      update = updates[k];
	      switch (update.type) {
	        case ReactMultiChildUpdateTypes.INSERT_MARKUP:
	          insertChildAt(
	            update.parentNode,
	            renderedMarkup[update.markupIndex],
	            update.toIndex
	          );
	          break;
	        case ReactMultiChildUpdateTypes.MOVE_EXISTING:
	          insertChildAt(
	            update.parentNode,
	            initialChildren[update.parentID][update.fromIndex],
	            update.toIndex
	          );
	          break;
	        case ReactMultiChildUpdateTypes.TEXT_CONTENT:
	          setTextContent(
	            update.parentNode,
	            update.textContent
	          );
	          break;
	        case ReactMultiChildUpdateTypes.REMOVE_NODE:
	          // Already removed by the for-loop above.
	          break;
	      }
	    }
	  }

	};

	module.exports = DOMChildrenOperations;

	},{"12":12,"135":135,"149":149,"72":72}],10:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMProperty
	 * @typechecks static-only
	 */

	/*jslint bitwise: true */

	'use strict';

	var invariant = _dereq_(135);

	function checkMask(value, bitmask) {
	  return (value & bitmask) === bitmask;
	}

	var DOMPropertyInjection = {
	  /**
	   * Mapping from normalized, camelcased property names to a configuration that
	   * specifies how the associated DOM property should be accessed or rendered.
	   */
	  MUST_USE_ATTRIBUTE: 0x1,
	  MUST_USE_PROPERTY: 0x2,
	  HAS_SIDE_EFFECTS: 0x4,
	  HAS_BOOLEAN_VALUE: 0x8,
	  HAS_NUMERIC_VALUE: 0x10,
	  HAS_POSITIVE_NUMERIC_VALUE: 0x20 | 0x10,
	  HAS_OVERLOADED_BOOLEAN_VALUE: 0x40,

	  /**
	   * Inject some specialized knowledge about the DOM. This takes a config object
	   * with the following properties:
	   *
	   * isCustomAttribute: function that given an attribute name will return true
	   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
	   * attributes where it's impossible to enumerate all of the possible
	   * attribute names,
	   *
	   * Properties: object mapping DOM property name to one of the
	   * DOMPropertyInjection constants or null. If your attribute isn't in here,
	   * it won't get written to the DOM.
	   *
	   * DOMAttributeNames: object mapping React attribute name to the DOM
	   * attribute name. Attribute names not specified use the **lowercase**
	   * normalized name.
	   *
	   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
	   * Property names not specified use the normalized name.
	   *
	   * DOMMutationMethods: Properties that require special mutation methods. If
	   * `value` is undefined, the mutation method should unset the property.
	   *
	   * @param {object} domPropertyConfig the config as described above.
	   */
	  injectDOMPropertyConfig: function(domPropertyConfig) {
	    var Properties = domPropertyConfig.Properties || {};
	    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
	    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
	    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

	    if (domPropertyConfig.isCustomAttribute) {
	      DOMProperty._isCustomAttributeFunctions.push(
	        domPropertyConfig.isCustomAttribute
	      );
	    }

	    for (var propName in Properties) {
	      ("production" !== "development" ? invariant(
	        !DOMProperty.isStandardName.hasOwnProperty(propName),
	        'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' +
	        '\'%s\' which has already been injected. You may be accidentally ' +
	        'injecting the same DOM property config twice, or you may be ' +
	        'injecting two configs that have conflicting property names.',
	        propName
	      ) : invariant(!DOMProperty.isStandardName.hasOwnProperty(propName)));

	      DOMProperty.isStandardName[propName] = true;

	      var lowerCased = propName.toLowerCase();
	      DOMProperty.getPossibleStandardName[lowerCased] = propName;

	      if (DOMAttributeNames.hasOwnProperty(propName)) {
	        var attributeName = DOMAttributeNames[propName];
	        DOMProperty.getPossibleStandardName[attributeName] = propName;
	        DOMProperty.getAttributeName[propName] = attributeName;
	      } else {
	        DOMProperty.getAttributeName[propName] = lowerCased;
	      }

	      DOMProperty.getPropertyName[propName] =
	        DOMPropertyNames.hasOwnProperty(propName) ?
	          DOMPropertyNames[propName] :
	          propName;

	      if (DOMMutationMethods.hasOwnProperty(propName)) {
	        DOMProperty.getMutationMethod[propName] = DOMMutationMethods[propName];
	      } else {
	        DOMProperty.getMutationMethod[propName] = null;
	      }

	      var propConfig = Properties[propName];
	      DOMProperty.mustUseAttribute[propName] =
	        checkMask(propConfig, DOMPropertyInjection.MUST_USE_ATTRIBUTE);
	      DOMProperty.mustUseProperty[propName] =
	        checkMask(propConfig, DOMPropertyInjection.MUST_USE_PROPERTY);
	      DOMProperty.hasSideEffects[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_SIDE_EFFECTS);
	      DOMProperty.hasBooleanValue[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_BOOLEAN_VALUE);
	      DOMProperty.hasNumericValue[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_NUMERIC_VALUE);
	      DOMProperty.hasPositiveNumericValue[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_POSITIVE_NUMERIC_VALUE);
	      DOMProperty.hasOverloadedBooleanValue[propName] =
	        checkMask(propConfig, DOMPropertyInjection.HAS_OVERLOADED_BOOLEAN_VALUE);

	      ("production" !== "development" ? invariant(
	        !DOMProperty.mustUseAttribute[propName] ||
	          !DOMProperty.mustUseProperty[propName],
	        'DOMProperty: Cannot require using both attribute and property: %s',
	        propName
	      ) : invariant(!DOMProperty.mustUseAttribute[propName] ||
	        !DOMProperty.mustUseProperty[propName]));
	      ("production" !== "development" ? invariant(
	        DOMProperty.mustUseProperty[propName] ||
	          !DOMProperty.hasSideEffects[propName],
	        'DOMProperty: Properties that have side effects must use property: %s',
	        propName
	      ) : invariant(DOMProperty.mustUseProperty[propName] ||
	        !DOMProperty.hasSideEffects[propName]));
	      ("production" !== "development" ? invariant(
	        !!DOMProperty.hasBooleanValue[propName] +
	          !!DOMProperty.hasNumericValue[propName] +
	          !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1,
	        'DOMProperty: Value can be one of boolean, overloaded boolean, or ' +
	        'numeric value, but not a combination: %s',
	        propName
	      ) : invariant(!!DOMProperty.hasBooleanValue[propName] +
	        !!DOMProperty.hasNumericValue[propName] +
	        !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1));
	    }
	  }
	};
	var defaultValueCache = {};

	/**
	 * DOMProperty exports lookup objects that can be used like functions:
	 *
	 *   > DOMProperty.isValid['id']
	 *   true
	 *   > DOMProperty.isValid['foobar']
	 *   undefined
	 *
	 * Although this may be confusing, it performs better in general.
	 *
	 * @see http://jsperf.com/key-exists
	 * @see http://jsperf.com/key-missing
	 */
	var DOMProperty = {

	  ID_ATTRIBUTE_NAME: 'data-reactid',

	  /**
	   * Checks whether a property name is a standard property.
	   * @type {Object}
	   */
	  isStandardName: {},

	  /**
	   * Mapping from lowercase property names to the properly cased version, used
	   * to warn in the case of missing properties.
	   * @type {Object}
	   */
	  getPossibleStandardName: {},

	  /**
	   * Mapping from normalized names to attribute names that differ. Attribute
	   * names are used when rendering markup or with `*Attribute()`.
	   * @type {Object}
	   */
	  getAttributeName: {},

	  /**
	   * Mapping from normalized names to properties on DOM node instances.
	   * (This includes properties that mutate due to external factors.)
	   * @type {Object}
	   */
	  getPropertyName: {},

	  /**
	   * Mapping from normalized names to mutation methods. This will only exist if
	   * mutation cannot be set simply by the property or `setAttribute()`.
	   * @type {Object}
	   */
	  getMutationMethod: {},

	  /**
	   * Whether the property must be accessed and mutated as an object property.
	   * @type {Object}
	   */
	  mustUseAttribute: {},

	  /**
	   * Whether the property must be accessed and mutated using `*Attribute()`.
	   * (This includes anything that fails `<propName> in <element>`.)
	   * @type {Object}
	   */
	  mustUseProperty: {},

	  /**
	   * Whether or not setting a value causes side effects such as triggering
	   * resources to be loaded or text selection changes. We must ensure that
	   * the value is only set if it has changed.
	   * @type {Object}
	   */
	  hasSideEffects: {},

	  /**
	   * Whether the property should be removed when set to a falsey value.
	   * @type {Object}
	   */
	  hasBooleanValue: {},

	  /**
	   * Whether the property must be numeric or parse as a
	   * numeric and should be removed when set to a falsey value.
	   * @type {Object}
	   */
	  hasNumericValue: {},

	  /**
	   * Whether the property must be positive numeric or parse as a positive
	   * numeric and should be removed when set to a falsey value.
	   * @type {Object}
	   */
	  hasPositiveNumericValue: {},

	  /**
	   * Whether the property can be used as a flag as well as with a value. Removed
	   * when strictly equal to false; present without a value when strictly equal
	   * to true; present with a value otherwise.
	   * @type {Object}
	   */
	  hasOverloadedBooleanValue: {},

	  /**
	   * All of the isCustomAttribute() functions that have been injected.
	   */
	  _isCustomAttributeFunctions: [],

	  /**
	   * Checks whether a property name is a custom attribute.
	   * @method
	   */
	  isCustomAttribute: function(attributeName) {
	    for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
	      var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
	      if (isCustomAttributeFn(attributeName)) {
	        return true;
	      }
	    }
	    return false;
	  },

	  /**
	   * Returns the default property value for a DOM property (i.e., not an
	   * attribute). Most default values are '' or false, but not all. Worse yet,
	   * some (in particular, `type`) vary depending on the type of element.
	   *
	   * TODO: Is it better to grab all the possible properties when creating an
	   * element to avoid having to create the same element twice?
	   */
	  getDefaultValueForProperty: function(nodeName, prop) {
	    var nodeDefaults = defaultValueCache[nodeName];
	    var testElement;
	    if (!nodeDefaults) {
	      defaultValueCache[nodeName] = nodeDefaults = {};
	    }
	    if (!(prop in nodeDefaults)) {
	      testElement = document.createElement(nodeName);
	      nodeDefaults[prop] = testElement[prop];
	    }
	    return nodeDefaults[prop];
	  },

	  injection: DOMPropertyInjection
	};

	module.exports = DOMProperty;

	},{"135":135}],11:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMPropertyOperations
	 * @typechecks static-only
	 */

	'use strict';

	var DOMProperty = _dereq_(10);

	var quoteAttributeValueForBrowser = _dereq_(147);
	var warning = _dereq_(154);

	function shouldIgnoreValue(name, value) {
	  return value == null ||
	    (DOMProperty.hasBooleanValue[name] && !value) ||
	    (DOMProperty.hasNumericValue[name] && isNaN(value)) ||
	    (DOMProperty.hasPositiveNumericValue[name] && (value < 1)) ||
	    (DOMProperty.hasOverloadedBooleanValue[name] && value === false);
	}

	if ("production" !== "development") {
	  var reactProps = {
	    children: true,
	    dangerouslySetInnerHTML: true,
	    key: true,
	    ref: true
	  };
	  var warnedProperties = {};

	  var warnUnknownProperty = function(name) {
	    if (reactProps.hasOwnProperty(name) && reactProps[name] ||
	        warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
	      return;
	    }

	    warnedProperties[name] = true;
	    var lowerCasedName = name.toLowerCase();

	    // data-* attributes should be lowercase; suggest the lowercase version
	    var standardName = (
	      DOMProperty.isCustomAttribute(lowerCasedName) ?
	        lowerCasedName :
	      DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ?
	        DOMProperty.getPossibleStandardName[lowerCasedName] :
	        null
	    );

	    // For now, only warn when we have a suggested correction. This prevents
	    // logging too much when using transferPropsTo.
	    ("production" !== "development" ? warning(
	      standardName == null,
	      'Unknown DOM property %s. Did you mean %s?',
	      name,
	      standardName
	    ) : null);

	  };
	}

	/**
	 * Operations for dealing with DOM properties.
	 */
	var DOMPropertyOperations = {

	  /**
	   * Creates markup for the ID property.
	   *
	   * @param {string} id Unescaped ID.
	   * @return {string} Markup string.
	   */
	  createMarkupForID: function(id) {
	    return DOMProperty.ID_ATTRIBUTE_NAME + '=' +
	      quoteAttributeValueForBrowser(id);
	  },

	  /**
	   * Creates markup for a property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {?string} Markup string, or null if the property was invalid.
	   */
	  createMarkupForProperty: function(name, value) {
	    if (DOMProperty.isStandardName.hasOwnProperty(name) &&
	        DOMProperty.isStandardName[name]) {
	      if (shouldIgnoreValue(name, value)) {
	        return '';
	      }
	      var attributeName = DOMProperty.getAttributeName[name];
	      if (DOMProperty.hasBooleanValue[name] ||
	          (DOMProperty.hasOverloadedBooleanValue[name] && value === true)) {
	        return attributeName;
	      }
	      return attributeName + '=' + quoteAttributeValueForBrowser(value);
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      if (value == null) {
	        return '';
	      }
	      return name + '=' + quoteAttributeValueForBrowser(value);
	    } else if ("production" !== "development") {
	      warnUnknownProperty(name);
	    }
	    return null;
	  },

	  /**
	   * Sets the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   * @param {*} value
	   */
	  setValueForProperty: function(node, name, value) {
	    if (DOMProperty.isStandardName.hasOwnProperty(name) &&
	        DOMProperty.isStandardName[name]) {
	      var mutationMethod = DOMProperty.getMutationMethod[name];
	      if (mutationMethod) {
	        mutationMethod(node, value);
	      } else if (shouldIgnoreValue(name, value)) {
	        this.deleteValueForProperty(node, name);
	      } else if (DOMProperty.mustUseAttribute[name]) {
	        // `setAttribute` with objects becomes only `[object]` in IE8/9,
	        // ('' + value) makes it output the correct toString()-value.
	        node.setAttribute(DOMProperty.getAttributeName[name], '' + value);
	      } else {
	        var propName = DOMProperty.getPropertyName[name];
	        // Must explicitly cast values for HAS_SIDE_EFFECTS-properties to the
	        // property type before comparing; only `value` does and is string.
	        if (!DOMProperty.hasSideEffects[name] ||
	            ('' + node[propName]) !== ('' + value)) {
	          // Contrary to `setAttribute`, object properties are properly
	          // `toString`ed by IE8/9.
	          node[propName] = value;
	        }
	      }
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      if (value == null) {
	        node.removeAttribute(name);
	      } else {
	        node.setAttribute(name, '' + value);
	      }
	    } else if ("production" !== "development") {
	      warnUnknownProperty(name);
	    }
	  },

	  /**
	   * Deletes the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   */
	  deleteValueForProperty: function(node, name) {
	    if (DOMProperty.isStandardName.hasOwnProperty(name) &&
	        DOMProperty.isStandardName[name]) {
	      var mutationMethod = DOMProperty.getMutationMethod[name];
	      if (mutationMethod) {
	        mutationMethod(node, undefined);
	      } else if (DOMProperty.mustUseAttribute[name]) {
	        node.removeAttribute(DOMProperty.getAttributeName[name]);
	      } else {
	        var propName = DOMProperty.getPropertyName[name];
	        var defaultValue = DOMProperty.getDefaultValueForProperty(
	          node.nodeName,
	          propName
	        );
	        if (!DOMProperty.hasSideEffects[name] ||
	            ('' + node[propName]) !== defaultValue) {
	          node[propName] = defaultValue;
	        }
	      }
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      node.removeAttribute(name);
	    } else if ("production" !== "development") {
	      warnUnknownProperty(name);
	    }
	  }

	};

	module.exports = DOMPropertyOperations;

	},{"10":10,"147":147,"154":154}],12:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Danger
	 * @typechecks static-only
	 */

	/*jslint evil: true, sub: true */

	'use strict';

	var ExecutionEnvironment = _dereq_(21);

	var createNodesFromMarkup = _dereq_(112);
	var emptyFunction = _dereq_(114);
	var getMarkupWrap = _dereq_(127);
	var invariant = _dereq_(135);

	var OPEN_TAG_NAME_EXP = /^(<[^ \/>]+)/;
	var RESULT_INDEX_ATTR = 'data-danger-index';

	/**
	 * Extracts the `nodeName` from a string of markup.
	 *
	 * NOTE: Extracting the `nodeName` does not require a regular expression match
	 * because we make assumptions about React-generated markup (i.e. there are no
	 * spaces surrounding the opening tag and there is at least one attribute).
	 *
	 * @param {string} markup String of markup.
	 * @return {string} Node name of the supplied markup.
	 * @see http://jsperf.com/extract-nodename
	 */
	function getNodeName(markup) {
	  return markup.substring(1, markup.indexOf(' '));
	}

	var Danger = {

	  /**
	   * Renders markup into an array of nodes. The markup is expected to render
	   * into a list of root nodes. Also, the length of `resultList` and
	   * `markupList` should be the same.
	   *
	   * @param {array<string>} markupList List of markup strings to render.
	   * @return {array<DOMElement>} List of rendered nodes.
	   * @internal
	   */
	  dangerouslyRenderMarkup: function(markupList) {
	    ("production" !== "development" ? invariant(
	      ExecutionEnvironment.canUseDOM,
	      'dangerouslyRenderMarkup(...): Cannot render markup in a worker ' +
	      'thread. Make sure `window` and `document` are available globally ' +
	      'before requiring React when unit testing or use ' +
	      'React.renderToString for server rendering.'
	    ) : invariant(ExecutionEnvironment.canUseDOM));
	    var nodeName;
	    var markupByNodeName = {};
	    // Group markup by `nodeName` if a wrap is necessary, else by '*'.
	    for (var i = 0; i < markupList.length; i++) {
	      ("production" !== "development" ? invariant(
	        markupList[i],
	        'dangerouslyRenderMarkup(...): Missing markup.'
	      ) : invariant(markupList[i]));
	      nodeName = getNodeName(markupList[i]);
	      nodeName = getMarkupWrap(nodeName) ? nodeName : '*';
	      markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
	      markupByNodeName[nodeName][i] = markupList[i];
	    }
	    var resultList = [];
	    var resultListAssignmentCount = 0;
	    for (nodeName in markupByNodeName) {
	      if (!markupByNodeName.hasOwnProperty(nodeName)) {
	        continue;
	      }
	      var markupListByNodeName = markupByNodeName[nodeName];

	      // This for-in loop skips the holes of the sparse array. The order of
	      // iteration should follow the order of assignment, which happens to match
	      // numerical index order, but we don't rely on that.
	      var resultIndex;
	      for (resultIndex in markupListByNodeName) {
	        if (markupListByNodeName.hasOwnProperty(resultIndex)) {
	          var markup = markupListByNodeName[resultIndex];

	          // Push the requested markup with an additional RESULT_INDEX_ATTR
	          // attribute.  If the markup does not start with a < character, it
	          // will be discarded below (with an appropriate console.error).
	          markupListByNodeName[resultIndex] = markup.replace(
	            OPEN_TAG_NAME_EXP,
	            // This index will be parsed back out below.
	            '$1 ' + RESULT_INDEX_ATTR + '="' + resultIndex + '" '
	          );
	        }
	      }

	      // Render each group of markup with similar wrapping `nodeName`.
	      var renderNodes = createNodesFromMarkup(
	        markupListByNodeName.join(''),
	        emptyFunction // Do nothing special with <script> tags.
	      );

	      for (var j = 0; j < renderNodes.length; ++j) {
	        var renderNode = renderNodes[j];
	        if (renderNode.hasAttribute &&
	            renderNode.hasAttribute(RESULT_INDEX_ATTR)) {

	          resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);
	          renderNode.removeAttribute(RESULT_INDEX_ATTR);

	          ("production" !== "development" ? invariant(
	            !resultList.hasOwnProperty(resultIndex),
	            'Danger: Assigning to an already-occupied result index.'
	          ) : invariant(!resultList.hasOwnProperty(resultIndex)));

	          resultList[resultIndex] = renderNode;

	          // This should match resultList.length and markupList.length when
	          // we're done.
	          resultListAssignmentCount += 1;

	        } else if ("production" !== "development") {
	          console.error(
	            'Danger: Discarding unexpected node:',
	            renderNode
	          );
	        }
	      }
	    }

	    // Although resultList was populated out of order, it should now be a dense
	    // array.
	    ("production" !== "development" ? invariant(
	      resultListAssignmentCount === resultList.length,
	      'Danger: Did not assign to every index of resultList.'
	    ) : invariant(resultListAssignmentCount === resultList.length));

	    ("production" !== "development" ? invariant(
	      resultList.length === markupList.length,
	      'Danger: Expected markup to render %s nodes, but rendered %s.',
	      markupList.length,
	      resultList.length
	    ) : invariant(resultList.length === markupList.length));

	    return resultList;
	  },

	  /**
	   * Replaces a node with a string of markup at its current position within its
	   * parent. The markup must render into a single root node.
	   *
	   * @param {DOMElement} oldChild Child node to replace.
	   * @param {string} markup Markup to render in place of the child node.
	   * @internal
	   */
	  dangerouslyReplaceNodeWithMarkup: function(oldChild, markup) {
	    ("production" !== "development" ? invariant(
	      ExecutionEnvironment.canUseDOM,
	      'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a ' +
	      'worker thread. Make sure `window` and `document` are available ' +
	      'globally before requiring React when unit testing or use ' +
	      'React.renderToString for server rendering.'
	    ) : invariant(ExecutionEnvironment.canUseDOM));
	    ("production" !== "development" ? invariant(markup, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : invariant(markup));
	    ("production" !== "development" ? invariant(
	      oldChild.tagName.toLowerCase() !== 'html',
	      'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the ' +
	      '<html> node. This is because browser quirks make this unreliable ' +
	      'and/or slow. If you want to render to the root you must use ' +
	      'server rendering. See React.renderToString().'
	    ) : invariant(oldChild.tagName.toLowerCase() !== 'html'));

	    var newChild = createNodesFromMarkup(markup, emptyFunction)[0];
	    oldChild.parentNode.replaceChild(newChild, oldChild);
	  }

	};

	module.exports = Danger;

	},{"112":112,"114":114,"127":127,"135":135,"21":21}],13:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DefaultEventPluginOrder
	 */

	'use strict';

	var keyOf = _dereq_(141);

	/**
	 * Module that is injectable into `EventPluginHub`, that specifies a
	 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
	 * plugins, without having to package every one of them. This is better than
	 * having plugins be ordered in the same order that they are injected because
	 * that ordering would be influenced by the packaging order.
	 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
	 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
	 */
	var DefaultEventPluginOrder = [
	  keyOf({ResponderEventPlugin: null}),
	  keyOf({SimpleEventPlugin: null}),
	  keyOf({TapEventPlugin: null}),
	  keyOf({EnterLeaveEventPlugin: null}),
	  keyOf({ChangeEventPlugin: null}),
	  keyOf({SelectEventPlugin: null}),
	  keyOf({BeforeInputEventPlugin: null}),
	  keyOf({AnalyticsEventPlugin: null}),
	  keyOf({MobileSafariClickEventPlugin: null})
	];

	module.exports = DefaultEventPluginOrder;

	},{"141":141}],14:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EnterLeaveEventPlugin
	 * @typechecks static-only
	 */

	'use strict';

	var EventConstants = _dereq_(15);
	var EventPropagators = _dereq_(20);
	var SyntheticMouseEvent = _dereq_(99);

	var ReactMount = _dereq_(70);
	var keyOf = _dereq_(141);

	var topLevelTypes = EventConstants.topLevelTypes;
	var getFirstReactDOM = ReactMount.getFirstReactDOM;

	var eventTypes = {
	  mouseEnter: {
	    registrationName: keyOf({onMouseEnter: null}),
	    dependencies: [
	      topLevelTypes.topMouseOut,
	      topLevelTypes.topMouseOver
	    ]
	  },
	  mouseLeave: {
	    registrationName: keyOf({onMouseLeave: null}),
	    dependencies: [
	      topLevelTypes.topMouseOut,
	      topLevelTypes.topMouseOver
	    ]
	  }
	};

	var extractedEvents = [null, null];

	var EnterLeaveEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * For almost every interaction we care about, there will be both a top-level
	   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
	   * we do not extract duplicate events. However, moving the mouse into the
	   * browser from outside will not fire a `mouseout` event. In this case, we use
	   * the `mouseover` top-level event.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    if (topLevelType === topLevelTypes.topMouseOver &&
	        (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
	      return null;
	    }
	    if (topLevelType !== topLevelTypes.topMouseOut &&
	        topLevelType !== topLevelTypes.topMouseOver) {
	      // Must not be a mouse in or mouse out - ignoring.
	      return null;
	    }

	    var win;
	    if (topLevelTarget.window === topLevelTarget) {
	      // `topLevelTarget` is probably a window object.
	      win = topLevelTarget;
	    } else {
	      // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	      var doc = topLevelTarget.ownerDocument;
	      if (doc) {
	        win = doc.defaultView || doc.parentWindow;
	      } else {
	        win = window;
	      }
	    }

	    var from, to;
	    if (topLevelType === topLevelTypes.topMouseOut) {
	      from = topLevelTarget;
	      to =
	        getFirstReactDOM(nativeEvent.relatedTarget || nativeEvent.toElement) ||
	        win;
	    } else {
	      from = win;
	      to = topLevelTarget;
	    }

	    if (from === to) {
	      // Nothing pertains to our managed components.
	      return null;
	    }

	    var fromID = from ? ReactMount.getID(from) : '';
	    var toID = to ? ReactMount.getID(to) : '';

	    var leave = SyntheticMouseEvent.getPooled(
	      eventTypes.mouseLeave,
	      fromID,
	      nativeEvent
	    );
	    leave.type = 'mouseleave';
	    leave.target = from;
	    leave.relatedTarget = to;

	    var enter = SyntheticMouseEvent.getPooled(
	      eventTypes.mouseEnter,
	      toID,
	      nativeEvent
	    );
	    enter.type = 'mouseenter';
	    enter.target = to;
	    enter.relatedTarget = from;

	    EventPropagators.accumulateEnterLeaveDispatches(leave, enter, fromID, toID);

	    extractedEvents[0] = leave;
	    extractedEvents[1] = enter;

	    return extractedEvents;
	  }

	};

	module.exports = EnterLeaveEventPlugin;

	},{"141":141,"15":15,"20":20,"70":70,"99":99}],15:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventConstants
	 */

	'use strict';

	var keyMirror = _dereq_(140);

	var PropagationPhases = keyMirror({bubbled: null, captured: null});

	/**
	 * Types of raw signals from the browser caught at the top level.
	 */
	var topLevelTypes = keyMirror({
	  topBlur: null,
	  topChange: null,
	  topClick: null,
	  topCompositionEnd: null,
	  topCompositionStart: null,
	  topCompositionUpdate: null,
	  topContextMenu: null,
	  topCopy: null,
	  topCut: null,
	  topDoubleClick: null,
	  topDrag: null,
	  topDragEnd: null,
	  topDragEnter: null,
	  topDragExit: null,
	  topDragLeave: null,
	  topDragOver: null,
	  topDragStart: null,
	  topDrop: null,
	  topError: null,
	  topFocus: null,
	  topInput: null,
	  topKeyDown: null,
	  topKeyPress: null,
	  topKeyUp: null,
	  topLoad: null,
	  topMouseDown: null,
	  topMouseMove: null,
	  topMouseOut: null,
	  topMouseOver: null,
	  topMouseUp: null,
	  topPaste: null,
	  topReset: null,
	  topScroll: null,
	  topSelectionChange: null,
	  topSubmit: null,
	  topTextInput: null,
	  topTouchCancel: null,
	  topTouchEnd: null,
	  topTouchMove: null,
	  topTouchStart: null,
	  topWheel: null
	});

	var EventConstants = {
	  topLevelTypes: topLevelTypes,
	  PropagationPhases: PropagationPhases
	};

	module.exports = EventConstants;

	},{"140":140}],16:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule EventListener
	 * @typechecks
	 */

	var emptyFunction = _dereq_(114);

	/**
	 * Upstream version of event listener. Does not take into account specific
	 * nature of platform.
	 */
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  },

	  /**
	   * Listen to DOM events during the capture phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  capture: function(target, eventType, callback) {
	    if (!target.addEventListener) {
	      if ("production" !== "development") {
	        console.error(
	          'Attempted to listen to events during the capture phase on a ' +
	          'browser that does not support the capture phase. Your application ' +
	          'will not receive some events.'
	        );
	      }
	      return {
	        remove: emptyFunction
	      };
	    } else {
	      target.addEventListener(eventType, callback, true);
	      return {
	        remove: function() {
	          target.removeEventListener(eventType, callback, true);
	        }
	      };
	    }
	  },

	  registerDefault: function() {}
	};

	module.exports = EventListener;

	},{"114":114}],17:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginHub
	 */

	'use strict';

	var EventPluginRegistry = _dereq_(18);
	var EventPluginUtils = _dereq_(19);

	var accumulateInto = _dereq_(105);
	var forEachAccumulated = _dereq_(120);
	var invariant = _dereq_(135);

	/**
	 * Internal store for event listeners
	 */
	var listenerBank = {};

	/**
	 * Internal queue of events that have accumulated their dispatches and are
	 * waiting to have their dispatches executed.
	 */
	var eventQueue = null;

	/**
	 * Dispatches an event and releases it back into the pool, unless persistent.
	 *
	 * @param {?object} event Synthetic event to be dispatched.
	 * @private
	 */
	var executeDispatchesAndRelease = function(event) {
	  if (event) {
	    var executeDispatch = EventPluginUtils.executeDispatch;
	    // Plugins can provide custom behavior when dispatching events.
	    var PluginModule = EventPluginRegistry.getPluginModuleForEvent(event);
	    if (PluginModule && PluginModule.executeDispatch) {
	      executeDispatch = PluginModule.executeDispatch;
	    }
	    EventPluginUtils.executeDispatchesInOrder(event, executeDispatch);

	    if (!event.isPersistent()) {
	      event.constructor.release(event);
	    }
	  }
	};

	/**
	 * - `InstanceHandle`: [required] Module that performs logical traversals of DOM
	 *   hierarchy given ids of the logical DOM elements involved.
	 */
	var InstanceHandle = null;

	function validateInstanceHandle() {
	  var valid =
	    InstanceHandle &&
	    InstanceHandle.traverseTwoPhase &&
	    InstanceHandle.traverseEnterLeave;
	  ("production" !== "development" ? invariant(
	    valid,
	    'InstanceHandle not injected before use!'
	  ) : invariant(valid));
	}

	/**
	 * This is a unified interface for event plugins to be installed and configured.
	 *
	 * Event plugins can implement the following properties:
	 *
	 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
	 *     Required. When a top-level event is fired, this method is expected to
	 *     extract synthetic events that will in turn be queued and dispatched.
	 *
	 *   `eventTypes` {object}
	 *     Optional, plugins that fire events must publish a mapping of registration
	 *     names that are used to register listeners. Values of this mapping must
	 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
	 *
	 *   `executeDispatch` {function(object, function, string)}
	 *     Optional, allows plugins to override how an event gets dispatched. By
	 *     default, the listener is simply invoked.
	 *
	 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
	 *
	 * @public
	 */
	var EventPluginHub = {

	  /**
	   * Methods for injecting dependencies.
	   */
	  injection: {

	    /**
	     * @param {object} InjectedMount
	     * @public
	     */
	    injectMount: EventPluginUtils.injection.injectMount,

	    /**
	     * @param {object} InjectedInstanceHandle
	     * @public
	     */
	    injectInstanceHandle: function(InjectedInstanceHandle) {
	      InstanceHandle = InjectedInstanceHandle;
	      if ("production" !== "development") {
	        validateInstanceHandle();
	      }
	    },

	    getInstanceHandle: function() {
	      if ("production" !== "development") {
	        validateInstanceHandle();
	      }
	      return InstanceHandle;
	    },

	    /**
	     * @param {array} InjectedEventPluginOrder
	     * @public
	     */
	    injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,

	    /**
	     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	     */
	    injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName

	  },

	  eventNameDispatchConfigs: EventPluginRegistry.eventNameDispatchConfigs,

	  registrationNameModules: EventPluginRegistry.registrationNameModules,

	  /**
	   * Stores `listener` at `listenerBank[registrationName][id]`. Is idempotent.
	   *
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {?function} listener The callback to store.
	   */
	  putListener: function(id, registrationName, listener) {
	    ("production" !== "development" ? invariant(
	      !listener || typeof listener === 'function',
	      'Expected %s listener to be a function, instead got type %s',
	      registrationName, typeof listener
	    ) : invariant(!listener || typeof listener === 'function'));

	    var bankForRegistrationName =
	      listenerBank[registrationName] || (listenerBank[registrationName] = {});
	    bankForRegistrationName[id] = listener;
	  },

	  /**
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @return {?function} The stored callback.
	   */
	  getListener: function(id, registrationName) {
	    var bankForRegistrationName = listenerBank[registrationName];
	    return bankForRegistrationName && bankForRegistrationName[id];
	  },

	  /**
	   * Deletes a listener from the registration bank.
	   *
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   */
	  deleteListener: function(id, registrationName) {
	    var bankForRegistrationName = listenerBank[registrationName];
	    if (bankForRegistrationName) {
	      delete bankForRegistrationName[id];
	    }
	  },

	  /**
	   * Deletes all listeners for the DOM element with the supplied ID.
	   *
	   * @param {string} id ID of the DOM element.
	   */
	  deleteAllListeners: function(id) {
	    for (var registrationName in listenerBank) {
	      delete listenerBank[registrationName][id];
	    }
	  },

	  /**
	   * Allows registered plugins an opportunity to extract events from top-level
	   * native browser events.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @internal
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    var events;
	    var plugins = EventPluginRegistry.plugins;
	    for (var i = 0, l = plugins.length; i < l; i++) {
	      // Not every plugin in the ordering may be loaded at runtime.
	      var possiblePlugin = plugins[i];
	      if (possiblePlugin) {
	        var extractedEvents = possiblePlugin.extractEvents(
	          topLevelType,
	          topLevelTarget,
	          topLevelTargetID,
	          nativeEvent
	        );
	        if (extractedEvents) {
	          events = accumulateInto(events, extractedEvents);
	        }
	      }
	    }
	    return events;
	  },

	  /**
	   * Enqueues a synthetic event that should be dispatched when
	   * `processEventQueue` is invoked.
	   *
	   * @param {*} events An accumulation of synthetic events.
	   * @internal
	   */
	  enqueueEvents: function(events) {
	    if (events) {
	      eventQueue = accumulateInto(eventQueue, events);
	    }
	  },

	  /**
	   * Dispatches all synthetic events on the event queue.
	   *
	   * @internal
	   */
	  processEventQueue: function() {
	    // Set `eventQueue` to null before processing it so that we can tell if more
	    // events get enqueued while processing.
	    var processingEventQueue = eventQueue;
	    eventQueue = null;
	    forEachAccumulated(processingEventQueue, executeDispatchesAndRelease);
	    ("production" !== "development" ? invariant(
	      !eventQueue,
	      'processEventQueue(): Additional events were enqueued while processing ' +
	      'an event queue. Support for this has not yet been implemented.'
	    ) : invariant(!eventQueue));
	  },

	  /**
	   * These are needed for tests only. Do not use!
	   */
	  __purge: function() {
	    listenerBank = {};
	  },

	  __getListenerBank: function() {
	    return listenerBank;
	  }

	};

	module.exports = EventPluginHub;

	},{"105":105,"120":120,"135":135,"18":18,"19":19}],18:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginRegistry
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = _dereq_(135);

	/**
	 * Injectable ordering of event plugins.
	 */
	var EventPluginOrder = null;

	/**
	 * Injectable mapping from names to event plugin modules.
	 */
	var namesToPlugins = {};

	/**
	 * Recomputes the plugin list using the injected plugins and plugin ordering.
	 *
	 * @private
	 */
	function recomputePluginOrdering() {
	  if (!EventPluginOrder) {
	    // Wait until an `EventPluginOrder` is injected.
	    return;
	  }
	  for (var pluginName in namesToPlugins) {
	    var PluginModule = namesToPlugins[pluginName];
	    var pluginIndex = EventPluginOrder.indexOf(pluginName);
	    ("production" !== "development" ? invariant(
	      pluginIndex > -1,
	      'EventPluginRegistry: Cannot inject event plugins that do not exist in ' +
	      'the plugin ordering, `%s`.',
	      pluginName
	    ) : invariant(pluginIndex > -1));
	    if (EventPluginRegistry.plugins[pluginIndex]) {
	      continue;
	    }
	    ("production" !== "development" ? invariant(
	      PluginModule.extractEvents,
	      'EventPluginRegistry: Event plugins must implement an `extractEvents` ' +
	      'method, but `%s` does not.',
	      pluginName
	    ) : invariant(PluginModule.extractEvents));
	    EventPluginRegistry.plugins[pluginIndex] = PluginModule;
	    var publishedEvents = PluginModule.eventTypes;
	    for (var eventName in publishedEvents) {
	      ("production" !== "development" ? invariant(
	        publishEventForPlugin(
	          publishedEvents[eventName],
	          PluginModule,
	          eventName
	        ),
	        'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.',
	        eventName,
	        pluginName
	      ) : invariant(publishEventForPlugin(
	        publishedEvents[eventName],
	        PluginModule,
	        eventName
	      )));
	    }
	  }
	}

	/**
	 * Publishes an event so that it can be dispatched by the supplied plugin.
	 *
	 * @param {object} dispatchConfig Dispatch configuration for the event.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @return {boolean} True if the event was successfully published.
	 * @private
	 */
	function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
	  ("production" !== "development" ? invariant(
	    !EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName),
	    'EventPluginHub: More than one plugin attempted to publish the same ' +
	    'event name, `%s`.',
	    eventName
	  ) : invariant(!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName)));
	  EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

	  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
	  if (phasedRegistrationNames) {
	    for (var phaseName in phasedRegistrationNames) {
	      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
	        var phasedRegistrationName = phasedRegistrationNames[phaseName];
	        publishRegistrationName(
	          phasedRegistrationName,
	          PluginModule,
	          eventName
	        );
	      }
	    }
	    return true;
	  } else if (dispatchConfig.registrationName) {
	    publishRegistrationName(
	      dispatchConfig.registrationName,
	      PluginModule,
	      eventName
	    );
	    return true;
	  }
	  return false;
	}

	/**
	 * Publishes a registration name that is used to identify dispatched events and
	 * can be used with `EventPluginHub.putListener` to register listeners.
	 *
	 * @param {string} registrationName Registration name to add.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @private
	 */
	function publishRegistrationName(registrationName, PluginModule, eventName) {
	  ("production" !== "development" ? invariant(
	    !EventPluginRegistry.registrationNameModules[registrationName],
	    'EventPluginHub: More than one plugin attempted to publish the same ' +
	    'registration name, `%s`.',
	    registrationName
	  ) : invariant(!EventPluginRegistry.registrationNameModules[registrationName]));
	  EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
	  EventPluginRegistry.registrationNameDependencies[registrationName] =
	    PluginModule.eventTypes[eventName].dependencies;
	}

	/**
	 * Registers plugins so that they can extract and dispatch events.
	 *
	 * @see {EventPluginHub}
	 */
	var EventPluginRegistry = {

	  /**
	   * Ordered list of injected plugins.
	   */
	  plugins: [],

	  /**
	   * Mapping from event name to dispatch config
	   */
	  eventNameDispatchConfigs: {},

	  /**
	   * Mapping from registration name to plugin module
	   */
	  registrationNameModules: {},

	  /**
	   * Mapping from registration name to event name
	   */
	  registrationNameDependencies: {},

	  /**
	   * Injects an ordering of plugins (by plugin name). This allows the ordering
	   * to be decoupled from injection of the actual plugins so that ordering is
	   * always deterministic regardless of packaging, on-the-fly injection, etc.
	   *
	   * @param {array} InjectedEventPluginOrder
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginOrder}
	   */
	  injectEventPluginOrder: function(InjectedEventPluginOrder) {
	    ("production" !== "development" ? invariant(
	      !EventPluginOrder,
	      'EventPluginRegistry: Cannot inject event plugin ordering more than ' +
	      'once. You are likely trying to load more than one copy of React.'
	    ) : invariant(!EventPluginOrder));
	    // Clone the ordering so it cannot be dynamically mutated.
	    EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
	    recomputePluginOrdering();
	  },

	  /**
	   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
	   * in the ordering injected by `injectEventPluginOrder`.
	   *
	   * Plugins can be injected as part of page initialization or on-the-fly.
	   *
	   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginsByName}
	   */
	  injectEventPluginsByName: function(injectedNamesToPlugins) {
	    var isOrderingDirty = false;
	    for (var pluginName in injectedNamesToPlugins) {
	      if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
	        continue;
	      }
	      var PluginModule = injectedNamesToPlugins[pluginName];
	      if (!namesToPlugins.hasOwnProperty(pluginName) ||
	          namesToPlugins[pluginName] !== PluginModule) {
	        ("production" !== "development" ? invariant(
	          !namesToPlugins[pluginName],
	          'EventPluginRegistry: Cannot inject two different event plugins ' +
	          'using the same name, `%s`.',
	          pluginName
	        ) : invariant(!namesToPlugins[pluginName]));
	        namesToPlugins[pluginName] = PluginModule;
	        isOrderingDirty = true;
	      }
	    }
	    if (isOrderingDirty) {
	      recomputePluginOrdering();
	    }
	  },

	  /**
	   * Looks up the plugin for the supplied event.
	   *
	   * @param {object} event A synthetic event.
	   * @return {?object} The plugin that created the supplied event.
	   * @internal
	   */
	  getPluginModuleForEvent: function(event) {
	    var dispatchConfig = event.dispatchConfig;
	    if (dispatchConfig.registrationName) {
	      return EventPluginRegistry.registrationNameModules[
	        dispatchConfig.registrationName
	      ] || null;
	    }
	    for (var phase in dispatchConfig.phasedRegistrationNames) {
	      if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
	        continue;
	      }
	      var PluginModule = EventPluginRegistry.registrationNameModules[
	        dispatchConfig.phasedRegistrationNames[phase]
	      ];
	      if (PluginModule) {
	        return PluginModule;
	      }
	    }
	    return null;
	  },

	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _resetEventPlugins: function() {
	    EventPluginOrder = null;
	    for (var pluginName in namesToPlugins) {
	      if (namesToPlugins.hasOwnProperty(pluginName)) {
	        delete namesToPlugins[pluginName];
	      }
	    }
	    EventPluginRegistry.plugins.length = 0;

	    var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
	    for (var eventName in eventNameDispatchConfigs) {
	      if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
	        delete eventNameDispatchConfigs[eventName];
	      }
	    }

	    var registrationNameModules = EventPluginRegistry.registrationNameModules;
	    for (var registrationName in registrationNameModules) {
	      if (registrationNameModules.hasOwnProperty(registrationName)) {
	        delete registrationNameModules[registrationName];
	      }
	    }
	  }

	};

	module.exports = EventPluginRegistry;

	},{"135":135}],19:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginUtils
	 */

	'use strict';

	var EventConstants = _dereq_(15);

	var invariant = _dereq_(135);

	/**
	 * Injected dependencies:
	 */

	/**
	 * - `Mount`: [required] Module that can convert between React dom IDs and
	 *   actual node references.
	 */
	var injection = {
	  Mount: null,
	  injectMount: function(InjectedMount) {
	    injection.Mount = InjectedMount;
	    if ("production" !== "development") {
	      ("production" !== "development" ? invariant(
	        InjectedMount && InjectedMount.getNode,
	        'EventPluginUtils.injection.injectMount(...): Injected Mount module ' +
	        'is missing getNode.'
	      ) : invariant(InjectedMount && InjectedMount.getNode));
	    }
	  }
	};

	var topLevelTypes = EventConstants.topLevelTypes;

	function isEndish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseUp ||
	         topLevelType === topLevelTypes.topTouchEnd ||
	         topLevelType === topLevelTypes.topTouchCancel;
	}

	function isMoveish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseMove ||
	         topLevelType === topLevelTypes.topTouchMove;
	}
	function isStartish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseDown ||
	         topLevelType === topLevelTypes.topTouchStart;
	}


	var validateEventDispatches;
	if ("production" !== "development") {
	  validateEventDispatches = function(event) {
	    var dispatchListeners = event._dispatchListeners;
	    var dispatchIDs = event._dispatchIDs;

	    var listenersIsArr = Array.isArray(dispatchListeners);
	    var idsIsArr = Array.isArray(dispatchIDs);
	    var IDsLen = idsIsArr ? dispatchIDs.length : dispatchIDs ? 1 : 0;
	    var listenersLen = listenersIsArr ?
	      dispatchListeners.length :
	      dispatchListeners ? 1 : 0;

	    ("production" !== "development" ? invariant(
	      idsIsArr === listenersIsArr && IDsLen === listenersLen,
	      'EventPluginUtils: Invalid `event`.'
	    ) : invariant(idsIsArr === listenersIsArr && IDsLen === listenersLen));
	  };
	}

	/**
	 * Invokes `cb(event, listener, id)`. Avoids using call if no scope is
	 * provided. The `(listener,id)` pair effectively forms the "dispatch" but are
	 * kept separate to conserve memory.
	 */
	function forEachEventDispatch(event, cb) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchIDs = event._dispatchIDs;
	  if ("production" !== "development") {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and IDs are two parallel arrays that are always in sync.
	      cb(event, dispatchListeners[i], dispatchIDs[i]);
	    }
	  } else if (dispatchListeners) {
	    cb(event, dispatchListeners, dispatchIDs);
	  }
	}

	/**
	 * Default implementation of PluginModule.executeDispatch().
	 * @param {SyntheticEvent} SyntheticEvent to handle
	 * @param {function} Application-level callback
	 * @param {string} domID DOM id to pass to the callback.
	 */
	function executeDispatch(event, listener, domID) {
	  event.currentTarget = injection.Mount.getNode(domID);
	  var returnValue = listener(event, domID);
	  event.currentTarget = null;
	  return returnValue;
	}

	/**
	 * Standard/simple iteration through an event's collected dispatches.
	 */
	function executeDispatchesInOrder(event, cb) {
	  forEachEventDispatch(event, cb);
	  event._dispatchListeners = null;
	  event._dispatchIDs = null;
	}

	/**
	 * Standard/simple iteration through an event's collected dispatches, but stops
	 * at the first dispatch execution returning true, and returns that id.
	 *
	 * @return id of the first dispatch execution who's listener returns true, or
	 * null if no listener returned true.
	 */
	function executeDispatchesInOrderStopAtTrueImpl(event) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchIDs = event._dispatchIDs;
	  if ("production" !== "development") {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and IDs are two parallel arrays that are always in sync.
	      if (dispatchListeners[i](event, dispatchIDs[i])) {
	        return dispatchIDs[i];
	      }
	    }
	  } else if (dispatchListeners) {
	    if (dispatchListeners(event, dispatchIDs)) {
	      return dispatchIDs;
	    }
	  }
	  return null;
	}

	/**
	 * @see executeDispatchesInOrderStopAtTrueImpl
	 */
	function executeDispatchesInOrderStopAtTrue(event) {
	  var ret = executeDispatchesInOrderStopAtTrueImpl(event);
	  event._dispatchIDs = null;
	  event._dispatchListeners = null;
	  return ret;
	}

	/**
	 * Execution of a "direct" dispatch - there must be at most one dispatch
	 * accumulated on the event or it is considered an error. It doesn't really make
	 * sense for an event with multiple dispatches (bubbled) to keep track of the
	 * return values at each dispatch execution, but it does tend to make sense when
	 * dealing with "direct" dispatches.
	 *
	 * @return The return value of executing the single dispatch.
	 */
	function executeDirectDispatch(event) {
	  if ("production" !== "development") {
	    validateEventDispatches(event);
	  }
	  var dispatchListener = event._dispatchListeners;
	  var dispatchID = event._dispatchIDs;
	  ("production" !== "development" ? invariant(
	    !Array.isArray(dispatchListener),
	    'executeDirectDispatch(...): Invalid `event`.'
	  ) : invariant(!Array.isArray(dispatchListener)));
	  var res = dispatchListener ?
	    dispatchListener(event, dispatchID) :
	    null;
	  event._dispatchListeners = null;
	  event._dispatchIDs = null;
	  return res;
	}

	/**
	 * @param {SyntheticEvent} event
	 * @return {bool} True iff number of dispatches accumulated is greater than 0.
	 */
	function hasDispatches(event) {
	  return !!event._dispatchListeners;
	}

	/**
	 * General utilities that are useful in creating custom Event Plugins.
	 */
	var EventPluginUtils = {
	  isEndish: isEndish,
	  isMoveish: isMoveish,
	  isStartish: isStartish,

	  executeDirectDispatch: executeDirectDispatch,
	  executeDispatch: executeDispatch,
	  executeDispatchesInOrder: executeDispatchesInOrder,
	  executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
	  hasDispatches: hasDispatches,
	  injection: injection,
	  useTouchEvents: false
	};

	module.exports = EventPluginUtils;

	},{"135":135,"15":15}],20:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPropagators
	 */

	'use strict';

	var EventConstants = _dereq_(15);
	var EventPluginHub = _dereq_(17);

	var accumulateInto = _dereq_(105);
	var forEachAccumulated = _dereq_(120);

	var PropagationPhases = EventConstants.PropagationPhases;
	var getListener = EventPluginHub.getListener;

	/**
	 * Some event types have a notion of different registration names for different
	 * "phases" of propagation. This finds listeners by a given phase.
	 */
	function listenerAtPhase(id, event, propagationPhase) {
	  var registrationName =
	    event.dispatchConfig.phasedRegistrationNames[propagationPhase];
	  return getListener(id, registrationName);
	}

	/**
	 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
	 * here, allows us to not have to bind or create functions for each event.
	 * Mutating the event's members allows us to not have to create a wrapping
	 * "dispatch" object that pairs the event with the listener.
	 */
	function accumulateDirectionalDispatches(domID, upwards, event) {
	  if ("production" !== "development") {
	    if (!domID) {
	      throw new Error('Dispatching id must not be null');
	    }
	  }
	  var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
	  var listener = listenerAtPhase(domID, event, phase);
	  if (listener) {
	    event._dispatchListeners =
	      accumulateInto(event._dispatchListeners, listener);
	    event._dispatchIDs = accumulateInto(event._dispatchIDs, domID);
	  }
	}

	/**
	 * Collect dispatches (must be entirely collected before dispatching - see unit
	 * tests). Lazily allocate the array to conserve memory.  We must loop through
	 * each event and perform the traversal for each one. We can not perform a
	 * single traversal for the entire collection of events because each event may
	 * have a different target.
	 */
	function accumulateTwoPhaseDispatchesSingle(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(
	      event.dispatchMarker,
	      accumulateDirectionalDispatches,
	      event
	    );
	  }
	}


	/**
	 * Accumulates without regard to direction, does not look for phased
	 * registration names. Same as `accumulateDirectDispatchesSingle` but without
	 * requiring that the `dispatchMarker` be the same as the dispatched ID.
	 */
	function accumulateDispatches(id, ignoredDirection, event) {
	  if (event && event.dispatchConfig.registrationName) {
	    var registrationName = event.dispatchConfig.registrationName;
	    var listener = getListener(id, registrationName);
	    if (listener) {
	      event._dispatchListeners =
	        accumulateInto(event._dispatchListeners, listener);
	      event._dispatchIDs = accumulateInto(event._dispatchIDs, id);
	    }
	  }
	}

	/**
	 * Accumulates dispatches on an `SyntheticEvent`, but only for the
	 * `dispatchMarker`.
	 * @param {SyntheticEvent} event
	 */
	function accumulateDirectDispatchesSingle(event) {
	  if (event && event.dispatchConfig.registrationName) {
	    accumulateDispatches(event.dispatchMarker, null, event);
	  }
	}

	function accumulateTwoPhaseDispatches(events) {
	  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
	}

	function accumulateEnterLeaveDispatches(leave, enter, fromID, toID) {
	  EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(
	    fromID,
	    toID,
	    accumulateDispatches,
	    leave,
	    enter
	  );
	}


	function accumulateDirectDispatches(events) {
	  forEachAccumulated(events, accumulateDirectDispatchesSingle);
	}



	/**
	 * A small set of propagation patterns, each of which will accept a small amount
	 * of information, and generate a set of "dispatch ready event objects" - which
	 * are sets of events that have already been annotated with a set of dispatched
	 * listener functions/ids. The API is designed this way to discourage these
	 * propagation strategies from actually executing the dispatches, since we
	 * always want to collect the entire set of dispatches before executing event a
	 * single one.
	 *
	 * @constructor EventPropagators
	 */
	var EventPropagators = {
	  accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
	  accumulateDirectDispatches: accumulateDirectDispatches,
	  accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
	};

	module.exports = EventPropagators;

	},{"105":105,"120":120,"15":15,"17":17}],21:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */

	/*jslint evil: true */

	"use strict";

	var canUseDOM = !!(
	  (typeof window !== 'undefined' &&
	  window.document && window.document.createElement)
	);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners:
	    canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

	},{}],22:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FallbackCompositionState
	 * @typechecks static-only
	 */

	'use strict';

	var PooledClass = _dereq_(28);

	var assign = _dereq_(27);
	var getTextContentAccessor = _dereq_(130);

	/**
	 * This helper class stores information about text content of a target node,
	 * allowing comparison of content before and after a given event.
	 *
	 * Identify the node where selection currently begins, then observe
	 * both its text content and its current position in the DOM. Since the
	 * browser may natively replace the target node during composition, we can
	 * use its position to find its replacement.
	 *
	 * @param {DOMEventTarget} root
	 */
	function FallbackCompositionState(root) {
	  this._root = root;
	  this._startText = this.getText();
	  this._fallbackText = null;
	}

	assign(FallbackCompositionState.prototype, {
	  /**
	   * Get current text of input.
	   *
	   * @return {string}
	   */
	  getText: function() {
	    if ('value' in this._root) {
	      return this._root.value;
	    }
	    return this._root[getTextContentAccessor()];
	  },

	  /**
	   * Determine the differing substring between the initially stored
	   * text content and the current content.
	   *
	   * @return {string}
	   */
	  getData: function() {
	    if (this._fallbackText) {
	      return this._fallbackText;
	    }

	    var start;
	    var startValue = this._startText;
	    var startLength = startValue.length;
	    var end;
	    var endValue = this.getText();
	    var endLength = endValue.length;

	    for (start = 0; start < startLength; start++) {
	      if (startValue[start] !== endValue[start]) {
	        break;
	      }
	    }

	    var minEnd = startLength - start;
	    for (end = 1; end <= minEnd; end++) {
	      if (startValue[startLength - end] !== endValue[endLength - end]) {
	        break;
	      }
	    }

	    var sliceTail = end > 1 ? 1 - end : undefined;
	    this._fallbackText = endValue.slice(start, sliceTail);
	    return this._fallbackText;
	  }
	});

	PooledClass.addPoolingTo(FallbackCompositionState);

	module.exports = FallbackCompositionState;

	},{"130":130,"27":27,"28":28}],23:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule HTMLDOMPropertyConfig
	 */

	/*jslint bitwise: true*/

	'use strict';

	var DOMProperty = _dereq_(10);
	var ExecutionEnvironment = _dereq_(21);

	var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
	var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
	var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
	var HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
	var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
	var HAS_POSITIVE_NUMERIC_VALUE =
	  DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
	var HAS_OVERLOADED_BOOLEAN_VALUE =
	  DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;

	var hasSVG;
	if (ExecutionEnvironment.canUseDOM) {
	  var implementation = document.implementation;
	  hasSVG = (
	    implementation &&
	    implementation.hasFeature &&
	    implementation.hasFeature(
	      'http://www.w3.org/TR/SVG11/feature#BasicStructure',
	      '1.1'
	    )
	  );
	}


	var HTMLDOMPropertyConfig = {
	  isCustomAttribute: RegExp.prototype.test.bind(
	    /^(data|aria)-[a-z_][a-z\d_.\-]*$/
	  ),
	  Properties: {
	    /**
	     * Standard Properties
	     */
	    accept: null,
	    acceptCharset: null,
	    accessKey: null,
	    action: null,
	    allowFullScreen: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    allowTransparency: MUST_USE_ATTRIBUTE,
	    alt: null,
	    async: HAS_BOOLEAN_VALUE,
	    autoComplete: null,
	    // autoFocus is polyfilled/normalized by AutoFocusMixin
	    // autoFocus: HAS_BOOLEAN_VALUE,
	    autoPlay: HAS_BOOLEAN_VALUE,
	    cellPadding: null,
	    cellSpacing: null,
	    charSet: MUST_USE_ATTRIBUTE,
	    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    classID: MUST_USE_ATTRIBUTE,
	    // To set className on SVG elements, it's necessary to use .setAttribute;
	    // this works on HTML elements too in all browsers except IE8. Conveniently,
	    // IE8 doesn't support SVG and so we can simply use the attribute in
	    // browsers that support SVG and the property in browsers that don't,
	    // regardless of whether the element is HTML or SVG.
	    className: hasSVG ? MUST_USE_ATTRIBUTE : MUST_USE_PROPERTY,
	    cols: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    colSpan: null,
	    content: null,
	    contentEditable: null,
	    contextMenu: MUST_USE_ATTRIBUTE,
	    controls: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    coords: null,
	    crossOrigin: null,
	    data: null, // For `<object />` acts as `src`.
	    dateTime: MUST_USE_ATTRIBUTE,
	    defer: HAS_BOOLEAN_VALUE,
	    dir: null,
	    disabled: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    download: HAS_OVERLOADED_BOOLEAN_VALUE,
	    draggable: null,
	    encType: null,
	    form: MUST_USE_ATTRIBUTE,
	    formAction: MUST_USE_ATTRIBUTE,
	    formEncType: MUST_USE_ATTRIBUTE,
	    formMethod: MUST_USE_ATTRIBUTE,
	    formNoValidate: HAS_BOOLEAN_VALUE,
	    formTarget: MUST_USE_ATTRIBUTE,
	    frameBorder: MUST_USE_ATTRIBUTE,
	    headers: null,
	    height: MUST_USE_ATTRIBUTE,
	    hidden: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    high: null,
	    href: null,
	    hrefLang: null,
	    htmlFor: null,
	    httpEquiv: null,
	    icon: null,
	    id: MUST_USE_PROPERTY,
	    label: null,
	    lang: null,
	    list: MUST_USE_ATTRIBUTE,
	    loop: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    low: null,
	    manifest: MUST_USE_ATTRIBUTE,
	    marginHeight: null,
	    marginWidth: null,
	    max: null,
	    maxLength: MUST_USE_ATTRIBUTE,
	    media: MUST_USE_ATTRIBUTE,
	    mediaGroup: null,
	    method: null,
	    min: null,
	    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    name: null,
	    noValidate: HAS_BOOLEAN_VALUE,
	    open: HAS_BOOLEAN_VALUE,
	    optimum: null,
	    pattern: null,
	    placeholder: null,
	    poster: null,
	    preload: null,
	    radioGroup: null,
	    readOnly: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    rel: null,
	    required: HAS_BOOLEAN_VALUE,
	    role: MUST_USE_ATTRIBUTE,
	    rows: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    rowSpan: null,
	    sandbox: null,
	    scope: null,
	    scoped: HAS_BOOLEAN_VALUE,
	    scrolling: null,
	    seamless: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    shape: null,
	    size: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    sizes: MUST_USE_ATTRIBUTE,
	    span: HAS_POSITIVE_NUMERIC_VALUE,
	    spellCheck: null,
	    src: null,
	    srcDoc: MUST_USE_PROPERTY,
	    srcSet: MUST_USE_ATTRIBUTE,
	    start: HAS_NUMERIC_VALUE,
	    step: null,
	    style: null,
	    tabIndex: null,
	    target: null,
	    title: null,
	    type: null,
	    useMap: null,
	    value: MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,
	    width: MUST_USE_ATTRIBUTE,
	    wmode: MUST_USE_ATTRIBUTE,

	    /**
	     * Non-standard Properties
	     */
	    // autoCapitalize and autoCorrect are supported in Mobile Safari for
	    // keyboard hints.
	    autoCapitalize: null,
	    autoCorrect: null,
	    // itemProp, itemScope, itemType are for
	    // Microdata support. See http://schema.org/docs/gs.html
	    itemProp: MUST_USE_ATTRIBUTE,
	    itemScope: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    itemType: MUST_USE_ATTRIBUTE,
	    // itemID and itemRef are for Microdata support as well but
	    // only specified in the the WHATWG spec document. See
	    // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
	    itemID: MUST_USE_ATTRIBUTE,
	    itemRef: MUST_USE_ATTRIBUTE,
	    // property is supported for OpenGraph in meta tags.
	    property: null,
	    // IE-only attribute that controls focus behavior
	    unselectable: MUST_USE_ATTRIBUTE
	  },
	  DOMAttributeNames: {
	    acceptCharset: 'accept-charset',
	    className: 'class',
	    htmlFor: 'for',
	    httpEquiv: 'http-equiv'
	  },
	  DOMPropertyNames: {
	    autoCapitalize: 'autocapitalize',
	    autoComplete: 'autocomplete',
	    autoCorrect: 'autocorrect',
	    autoFocus: 'autofocus',
	    autoPlay: 'autoplay',
	    // `encoding` is equivalent to `enctype`, IE8 lacks an `enctype` setter.
	    // http://www.w3.org/TR/html5/forms.html#dom-fs-encoding
	    encType: 'encoding',
	    hrefLang: 'hreflang',
	    radioGroup: 'radiogroup',
	    spellCheck: 'spellcheck',
	    srcDoc: 'srcdoc',
	    srcSet: 'srcset'
	  }
	};

	module.exports = HTMLDOMPropertyConfig;

	},{"10":10,"21":21}],24:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule LinkedValueUtils
	 * @typechecks static-only
	 */

	'use strict';

	var ReactPropTypes = _dereq_(78);

	var invariant = _dereq_(135);

	var hasReadOnlyValue = {
	  'button': true,
	  'checkbox': true,
	  'image': true,
	  'hidden': true,
	  'radio': true,
	  'reset': true,
	  'submit': true
	};

	function _assertSingleLink(input) {
	  ("production" !== "development" ? invariant(
	    input.props.checkedLink == null || input.props.valueLink == null,
	    'Cannot provide a checkedLink and a valueLink. If you want to use ' +
	    'checkedLink, you probably don\'t want to use valueLink and vice versa.'
	  ) : invariant(input.props.checkedLink == null || input.props.valueLink == null));
	}
	function _assertValueLink(input) {
	  _assertSingleLink(input);
	  ("production" !== "development" ? invariant(
	    input.props.value == null && input.props.onChange == null,
	    'Cannot provide a valueLink and a value or onChange event. If you want ' +
	    'to use value or onChange, you probably don\'t want to use valueLink.'
	  ) : invariant(input.props.value == null && input.props.onChange == null));
	}

	function _assertCheckedLink(input) {
	  _assertSingleLink(input);
	  ("production" !== "development" ? invariant(
	    input.props.checked == null && input.props.onChange == null,
	    'Cannot provide a checkedLink and a checked property or onChange event. ' +
	    'If you want to use checked or onChange, you probably don\'t want to ' +
	    'use checkedLink'
	  ) : invariant(input.props.checked == null && input.props.onChange == null));
	}

	/**
	 * @param {SyntheticEvent} e change event to handle
	 */
	function _handleLinkedValueChange(e) {
	  /*jshint validthis:true */
	  this.props.valueLink.requestChange(e.target.value);
	}

	/**
	  * @param {SyntheticEvent} e change event to handle
	  */
	function _handleLinkedCheckChange(e) {
	  /*jshint validthis:true */
	  this.props.checkedLink.requestChange(e.target.checked);
	}

	/**
	 * Provide a linked `value` attribute for controlled forms. You should not use
	 * this outside of the ReactDOM controlled form components.
	 */
	var LinkedValueUtils = {
	  Mixin: {
	    propTypes: {
	      value: function(props, propName, componentName) {
	        if (!props[propName] ||
	            hasReadOnlyValue[props.type] ||
	            props.onChange ||
	            props.readOnly ||
	            props.disabled) {
	          return null;
	        }
	        return new Error(
	          'You provided a `value` prop to a form field without an ' +
	          '`onChange` handler. This will render a read-only field. If ' +
	          'the field should be mutable use `defaultValue`. Otherwise, ' +
	          'set either `onChange` or `readOnly`.'
	        );
	      },
	      checked: function(props, propName, componentName) {
	        if (!props[propName] ||
	            props.onChange ||
	            props.readOnly ||
	            props.disabled) {
	          return null;
	        }
	        return new Error(
	          'You provided a `checked` prop to a form field without an ' +
	          '`onChange` handler. This will render a read-only field. If ' +
	          'the field should be mutable use `defaultChecked`. Otherwise, ' +
	          'set either `onChange` or `readOnly`.'
	        );
	      },
	      onChange: ReactPropTypes.func
	    }
	  },

	  /**
	   * @param {ReactComponent} input Form component
	   * @return {*} current value of the input either from value prop or link.
	   */
	  getValue: function(input) {
	    if (input.props.valueLink) {
	      _assertValueLink(input);
	      return input.props.valueLink.value;
	    }
	    return input.props.value;
	  },

	  /**
	   * @param {ReactComponent} input Form component
	   * @return {*} current checked status of the input either from checked prop
	   *             or link.
	   */
	  getChecked: function(input) {
	    if (input.props.checkedLink) {
	      _assertCheckedLink(input);
	      return input.props.checkedLink.value;
	    }
	    return input.props.checked;
	  },

	  /**
	   * @param {ReactComponent} input Form component
	   * @return {function} change callback either from onChange prop or link.
	   */
	  getOnChange: function(input) {
	    if (input.props.valueLink) {
	      _assertValueLink(input);
	      return _handleLinkedValueChange;
	    } else if (input.props.checkedLink) {
	      _assertCheckedLink(input);
	      return _handleLinkedCheckChange;
	    }
	    return input.props.onChange;
	  }
	};

	module.exports = LinkedValueUtils;

	},{"135":135,"78":78}],25:[function(_dereq_,module,exports){
	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule LocalEventTrapMixin
	 */

	'use strict';

	var ReactBrowserEventEmitter = _dereq_(30);

	var accumulateInto = _dereq_(105);
	var forEachAccumulated = _dereq_(120);
	var invariant = _dereq_(135);

	function remove(event) {
	  event.remove();
	}

	var LocalEventTrapMixin = {
	  trapBubbledEvent:function(topLevelType, handlerBaseName) {
	    ("production" !== "development" ? invariant(this.isMounted(), 'Must be mounted to trap events') : invariant(this.isMounted()));
	    // If a component renders to null or if another component fatals and causes
	    // the state of the tree to be corrupted, `node` here can be null.
	    var node = this.getDOMNode();
	    ("production" !== "development" ? invariant(
	      node,
	      'LocalEventTrapMixin.trapBubbledEvent(...): Requires node to be rendered.'
	    ) : invariant(node));
	    var listener = ReactBrowserEventEmitter.trapBubbledEvent(
	      topLevelType,
	      handlerBaseName,
	      node
	    );
	    this._localEventListeners =
	      accumulateInto(this._localEventListeners, listener);
	  },

	  // trapCapturedEvent would look nearly identical. We don't implement that
	  // method because it isn't currently needed.

	  componentWillUnmount:function() {
	    if (this._localEventListeners) {
	      forEachAccumulated(this._localEventListeners, remove);
	    }
	  }
	};

	module.exports = LocalEventTrapMixin;

	},{"105":105,"120":120,"135":135,"30":30}],26:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule MobileSafariClickEventPlugin
	 * @typechecks static-only
	 */

	'use strict';

	var EventConstants = _dereq_(15);

	var emptyFunction = _dereq_(114);

	var topLevelTypes = EventConstants.topLevelTypes;

	/**
	 * Mobile Safari does not fire properly bubble click events on non-interactive
	 * elements, which means delegated click listeners do not fire. The workaround
	 * for this bug involves attaching an empty click listener on the target node.
	 *
	 * This particular plugin works around the bug by attaching an empty click
	 * listener on `touchstart` (which does fire on every element).
	 */
	var MobileSafariClickEventPlugin = {

	  eventTypes: null,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    if (topLevelType === topLevelTypes.topTouchStart) {
	      var target = nativeEvent.target;
	      if (target && !target.onclick) {
	        target.onclick = emptyFunction;
	      }
	    }
	  }

	};

	module.exports = MobileSafariClickEventPlugin;

	},{"114":114,"15":15}],27:[function(_dereq_,module,exports){
	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Object.assign
	 */

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

	'use strict';

	function assign(target, sources) {
	  if (target == null) {
	    throw new TypeError('Object.assign target cannot be null or undefined');
	  }

	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;

	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }

	    var from = Object(nextSource);

	    // We don't currently support accessors nor proxies. Therefore this
	    // copy cannot throw. If we ever supported this then we must handle
	    // exceptions and side-effects. We don't support symbols so they won't
	    // be transferred.

	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }

	  return to;
	}

	module.exports = assign;

	},{}],28:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PooledClass
	 */

	'use strict';

	var invariant = _dereq_(135);

	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function(copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};

	var twoArgumentPooler = function(a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};

	var threeArgumentPooler = function(a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};

	var fiveArgumentPooler = function(a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};

	var standardReleaser = function(instance) {
	  var Klass = this;
	  ("production" !== "development" ? invariant(
	    instance instanceof Klass,
	    'Trying to release an instance into a pool of a different type.'
	  ) : invariant(instance instanceof Klass));
	  if (instance.destructor) {
	    instance.destructor();
	  }
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};

	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;

	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances (optional).
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function(CopyConstructor, pooler) {
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};

	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};

	module.exports = PooledClass;

	},{"135":135}],29:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactBrowserComponentMixin
	 */

	'use strict';

	var findDOMNode = _dereq_(117);

	var ReactBrowserComponentMixin = {
	  /**
	   * Returns the DOM node rendered by this component.
	   *
	   * @return {DOMElement} The root node of this component.
	   * @final
	   * @protected
	   */
	  getDOMNode: function() {
	    return findDOMNode(this);
	  }
	};

	module.exports = ReactBrowserComponentMixin;

	},{"117":117}],30:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactBrowserEventEmitter
	 * @typechecks static-only
	 */

	'use strict';

	var EventConstants = _dereq_(15);
	var EventPluginHub = _dereq_(17);
	var EventPluginRegistry = _dereq_(18);
	var ReactEventEmitterMixin = _dereq_(61);
	var ViewportMetrics = _dereq_(104);

	var assign = _dereq_(27);
	var isEventSupported = _dereq_(136);

	/**
	 * Summary of `ReactBrowserEventEmitter` event handling:
	 *
	 *  - Top-level delegation is used to trap most native browser events. This
	 *    may only occur in the main thread and is the responsibility of
	 *    ReactEventListener, which is injected and can therefore support pluggable
	 *    event sources. This is the only work that occurs in the main thread.
	 *
	 *  - We normalize and de-duplicate events to account for browser quirks. This
	 *    may be done in the worker thread.
	 *
	 *  - Forward these native events (with the associated top-level type used to
	 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
	 *    to extract any synthetic events.
	 *
	 *  - The `EventPluginHub` will then process each event by annotating them with
	 *    "dispatches", a sequence of listeners and IDs that care about that event.
	 *
	 *  - The `EventPluginHub` then dispatches the events.
	 *
	 * Overview of React and the event system:
	 *
	 * +------------+    .
	 * |    DOM     |    .
	 * +------------+    .
	 *       |           .
	 *       v           .
	 * +------------+    .
	 * | ReactEvent |    .
	 * |  Listener  |    .
	 * +------------+    .                         +-----------+
	 *       |           .               +--------+|SimpleEvent|
	 *       |           .               |         |Plugin     |
	 * +-----|------+    .               v         +-----------+
	 * |     |      |    .    +--------------+                    +------------+
	 * |     +-----------.--->|EventPluginHub|                    |    Event   |
	 * |            |    .    |              |     +-----------+  | Propagators|
	 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
	 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
	 * |            |    .    |              |     +-----------+  |  utilities |
	 * |     +-----------.--->|              |                    +------------+
	 * |     |      |    .    +--------------+
	 * +-----|------+    .                ^        +-----------+
	 *       |           .                |        |Enter/Leave|
	 *       +           .                +-------+|Plugin     |
	 * +-------------+   .                         +-----------+
	 * | application |   .
	 * |-------------|   .
	 * |             |   .
	 * |             |   .
	 * +-------------+   .
	 *                   .
	 *    React Core     .  General Purpose Event Plugin System
	 */

	var alreadyListeningTo = {};
	var isMonitoringScrollValue = false;
	var reactTopListenersCounter = 0;

	// For events like 'submit' which don't consistently bubble (which we trap at a
	// lower node than `document`), binding at `document` would cause duplicate
	// events so we don't include them here
	var topEventMapping = {
	  topBlur: 'blur',
	  topChange: 'change',
	  topClick: 'click',
	  topCompositionEnd: 'compositionend',
	  topCompositionStart: 'compositionstart',
	  topCompositionUpdate: 'compositionupdate',
	  topContextMenu: 'contextmenu',
	  topCopy: 'copy',
	  topCut: 'cut',
	  topDoubleClick: 'dblclick',
	  topDrag: 'drag',
	  topDragEnd: 'dragend',
	  topDragEnter: 'dragenter',
	  topDragExit: 'dragexit',
	  topDragLeave: 'dragleave',
	  topDragOver: 'dragover',
	  topDragStart: 'dragstart',
	  topDrop: 'drop',
	  topFocus: 'focus',
	  topInput: 'input',
	  topKeyDown: 'keydown',
	  topKeyPress: 'keypress',
	  topKeyUp: 'keyup',
	  topMouseDown: 'mousedown',
	  topMouseMove: 'mousemove',
	  topMouseOut: 'mouseout',
	  topMouseOver: 'mouseover',
	  topMouseUp: 'mouseup',
	  topPaste: 'paste',
	  topScroll: 'scroll',
	  topSelectionChange: 'selectionchange',
	  topTextInput: 'textInput',
	  topTouchCancel: 'touchcancel',
	  topTouchEnd: 'touchend',
	  topTouchMove: 'touchmove',
	  topTouchStart: 'touchstart',
	  topWheel: 'wheel'
	};

	/**
	 * To ensure no conflicts with other potential React instances on the page
	 */
	var topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);

	function getListeningForDocument(mountAt) {
	  // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
	  // directly.
	  if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
	    mountAt[topListenersIDKey] = reactTopListenersCounter++;
	    alreadyListeningTo[mountAt[topListenersIDKey]] = {};
	  }
	  return alreadyListeningTo[mountAt[topListenersIDKey]];
	}

	/**
	 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
	 * example:
	 *
	 *   ReactBrowserEventEmitter.putListener('myID', 'onClick', myFunction);
	 *
	 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
	 *
	 * @internal
	 */
	var ReactBrowserEventEmitter = assign({}, ReactEventEmitterMixin, {

	  /**
	   * Injectable event backend
	   */
	  ReactEventListener: null,

	  injection: {
	    /**
	     * @param {object} ReactEventListener
	     */
	    injectReactEventListener: function(ReactEventListener) {
	      ReactEventListener.setHandleTopLevel(
	        ReactBrowserEventEmitter.handleTopLevel
	      );
	      ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
	    }
	  },

	  /**
	   * Sets whether or not any created callbacks should be enabled.
	   *
	   * @param {boolean} enabled True if callbacks should be enabled.
	   */
	  setEnabled: function(enabled) {
	    if (ReactBrowserEventEmitter.ReactEventListener) {
	      ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
	    }
	  },

	  /**
	   * @return {boolean} True if callbacks are enabled.
	   */
	  isEnabled: function() {
	    return !!(
	      (ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled())
	    );
	  },

	  /**
	   * We listen for bubbled touch events on the document object.
	   *
	   * Firefox v8.01 (and possibly others) exhibited strange behavior when
	   * mounting `onmousemove` events at some node that was not the document
	   * element. The symptoms were that if your mouse is not moving over something
	   * contained within that mount point (for example on the background) the
	   * top-level listeners for `onmousemove` won't be called. However, if you
	   * register the `mousemove` on the document object, then it will of course
	   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
	   * top-level listeners to the document object only, at least for these
	   * movement types of events and possibly all events.
	   *
	   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
	   *
	   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
	   * they bubble to document.
	   *
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {object} contentDocumentHandle Document which owns the container
	   */
	  listenTo: function(registrationName, contentDocumentHandle) {
	    var mountAt = contentDocumentHandle;
	    var isListening = getListeningForDocument(mountAt);
	    var dependencies = EventPluginRegistry.
	      registrationNameDependencies[registrationName];

	    var topLevelTypes = EventConstants.topLevelTypes;
	    for (var i = 0, l = dependencies.length; i < l; i++) {
	      var dependency = dependencies[i];
	      if (!(
	            (isListening.hasOwnProperty(dependency) && isListening[dependency])
	          )) {
	        if (dependency === topLevelTypes.topWheel) {
	          if (isEventSupported('wheel')) {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topWheel,
	              'wheel',
	              mountAt
	            );
	          } else if (isEventSupported('mousewheel')) {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topWheel,
	              'mousewheel',
	              mountAt
	            );
	          } else {
	            // Firefox needs to capture a different mouse scroll event.
	            // @see http://www.quirksmode.org/dom/events/tests/scroll.html
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topWheel,
	              'DOMMouseScroll',
	              mountAt
	            );
	          }
	        } else if (dependency === topLevelTypes.topScroll) {

	          if (isEventSupported('scroll', true)) {
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
	              topLevelTypes.topScroll,
	              'scroll',
	              mountAt
	            );
	          } else {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topScroll,
	              'scroll',
	              ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE
	            );
	          }
	        } else if (dependency === topLevelTypes.topFocus ||
	            dependency === topLevelTypes.topBlur) {

	          if (isEventSupported('focus', true)) {
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
	              topLevelTypes.topFocus,
	              'focus',
	              mountAt
	            );
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
	              topLevelTypes.topBlur,
	              'blur',
	              mountAt
	            );
	          } else if (isEventSupported('focusin')) {
	            // IE has `focusin` and `focusout` events which bubble.
	            // @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topFocus,
	              'focusin',
	              mountAt
	            );
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	              topLevelTypes.topBlur,
	              'focusout',
	              mountAt
	            );
	          }

	          // to make sure blur and focus event listeners are only attached once
	          isListening[topLevelTypes.topBlur] = true;
	          isListening[topLevelTypes.topFocus] = true;
	        } else if (topEventMapping.hasOwnProperty(dependency)) {
	          ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	            dependency,
	            topEventMapping[dependency],
	            mountAt
	          );
	        }

	        isListening[dependency] = true;
	      }
	    }
	  },

	  trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
	    return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
	      topLevelType,
	      handlerBaseName,
	      handle
	    );
	  },

	  trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
	    return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
	      topLevelType,
	      handlerBaseName,
	      handle
	    );
	  },

	  /**
	   * Listens to window scroll and resize events. We cache scroll values so that
	   * application code can access them without triggering reflows.
	   *
	   * NOTE: Scroll events do not bubble.
	   *
	   * @see http://www.quirksmode.org/dom/events/scroll.html
	   */
	  ensureScrollValueMonitoring: function() {
	    if (!isMonitoringScrollValue) {
	      var refresh = ViewportMetrics.refreshScrollValues;
	      ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
	      isMonitoringScrollValue = true;
	    }
	  },

	  eventNameDispatchConfigs: EventPluginHub.eventNameDispatchConfigs,

	  registrationNameModules: EventPluginHub.registrationNameModules,

	  putListener: EventPluginHub.putListener,

	  getListener: EventPluginHub.getListener,

	  deleteListener: EventPluginHub.deleteListener,

	  deleteAllListeners: EventPluginHub.deleteAllListeners

	});

	module.exports = ReactBrowserEventEmitter;

	},{"104":104,"136":136,"15":15,"17":17,"18":18,"27":27,"61":61}],31:[function(_dereq_,module,exports){
	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildReconciler
	 * @typechecks static-only
	 */

	'use strict';

	var ReactReconciler = _dereq_(81);

	var flattenChildren = _dereq_(118);
	var instantiateReactComponent = _dereq_(134);
	var shouldUpdateReactComponent = _dereq_(151);

	/**
	 * ReactChildReconciler provides helpers for initializing or updating a set of
	 * children. Its output is suitable for passing it onto ReactMultiChild which
	 * does diffed reordering and insertion.
	 */
	var ReactChildReconciler = {

	  /**
	   * Generates a "mount image" for each of the supplied children. In the case
	   * of `ReactDOMComponent`, a mount image is a string of markup.
	   *
	   * @param {?object} nestedChildNodes Nested child maps.
	   * @return {?object} A set of child instances.
	   * @internal
	   */
	  instantiateChildren: function(nestedChildNodes, transaction, context) {
	    var children = flattenChildren(nestedChildNodes);
	    for (var name in children) {
	      if (children.hasOwnProperty(name)) {
	        var child = children[name];
	        // The rendered children must be turned into instances as they're
	        // mounted.
	        var childInstance = instantiateReactComponent(child, null);
	        children[name] = childInstance;
	      }
	    }
	    return children;
	  },

	  /**
	   * Updates the rendered children and returns a new set of children.
	   *
	   * @param {?object} prevChildren Previously initialized set of children.
	   * @param {?object} nextNestedChildNodes Nested child maps.
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   * @return {?object} A new set of child instances.
	   * @internal
	   */
	  updateChildren: function(
	    prevChildren,
	    nextNestedChildNodes,
	    transaction,
	    context) {
	    // We currently don't have a way to track moves here but if we use iterators
	    // instead of for..in we can zip the iterators and check if an item has
	    // moved.
	    // TODO: If nothing has changed, return the prevChildren object so that we
	    // can quickly bailout if nothing has changed.
	    var nextChildren = flattenChildren(nextNestedChildNodes);
	    if (!nextChildren && !prevChildren) {
	      return null;
	    }
	    var name;
	    for (name in nextChildren) {
	      if (!nextChildren.hasOwnProperty(name)) {
	        continue;
	      }
	      var prevChild = prevChildren && prevChildren[name];
	      var prevElement = prevChild && prevChild._currentElement;
	      var nextElement = nextChildren[name];
	      if (shouldUpdateReactComponent(prevElement, nextElement)) {
	        ReactReconciler.receiveComponent(
	          prevChild, nextElement, transaction, context
	        );
	        nextChildren[name] = prevChild;
	      } else {
	        if (prevChild) {
	          ReactReconciler.unmountComponent(prevChild, name);
	        }
	        // The child must be instantiated before it's mounted.
	        var nextChildInstance = instantiateReactComponent(
	          nextElement,
	          null
	        );
	        nextChildren[name] = nextChildInstance;
	      }
	    }
	    // Unmount children that are no longer present.
	    for (name in prevChildren) {
	      if (prevChildren.hasOwnProperty(name) &&
	          !(nextChildren && nextChildren.hasOwnProperty(name))) {
	        ReactReconciler.unmountComponent(prevChildren[name]);
	      }
	    }
	    return nextChildren;
	  },

	  /**
	   * Unmounts all rendered children. This should be used to clean up children
	   * when this component is unmounted.
	   *
	   * @param {?object} renderedChildren Previously initialized set of children.
	   * @internal
	   */
	  unmountChildren: function(renderedChildren) {
	    for (var name in renderedChildren) {
	      var renderedChild = renderedChildren[name];
	      ReactReconciler.unmountComponent(renderedChild);
	    }
	  }

	};

	module.exports = ReactChildReconciler;

	},{"118":118,"134":134,"151":151,"81":81}],32:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildren
	 */

	'use strict';

	var PooledClass = _dereq_(28);
	var ReactFragment = _dereq_(63);

	var traverseAllChildren = _dereq_(153);
	var warning = _dereq_(154);

	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var threeArgumentPooler = PooledClass.threeArgumentPooler;

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.forEachFunction = forEachFunction;
	  this.forEachContext = forEachContext;
	}
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

	function forEachSingleChild(traverseContext, child, name, i) {
	  var forEachBookKeeping = traverseContext;
	  forEachBookKeeping.forEachFunction.call(
	    forEachBookKeeping.forEachContext, child, i);
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc.
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }

	  var traverseContext =
	    ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}

	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, mapFunction, mapContext) {
	  this.mapResult = mapResult;
	  this.mapFunction = mapFunction;
	  this.mapContext = mapContext;
	}
	PooledClass.addPoolingTo(MapBookKeeping, threeArgumentPooler);

	function mapSingleChildIntoContext(traverseContext, child, name, i) {
	  var mapBookKeeping = traverseContext;
	  var mapResult = mapBookKeeping.mapResult;

	  var keyUnique = !mapResult.hasOwnProperty(name);
	  if ("production" !== "development") {
	    ("production" !== "development" ? warning(
	      keyUnique,
	      'ReactChildren.map(...): Encountered two children with the same key, ' +
	      '`%s`. Child keys must be unique; when two children share a key, only ' +
	      'the first child will be used.',
	      name
	    ) : null);
	  }

	  if (keyUnique) {
	    var mappedChild =
	      mapBookKeeping.mapFunction.call(mapBookKeeping.mapContext, child, i);
	    mapResult[name] = mappedChild;
	  }
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * TODO: This may likely break any calls to `ReactChildren.map` that were
	 * previously relying on the fact that we guarded against null children.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} mapFunction.
	 * @param {*} mapContext Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }

	  var mapResult = {};
	  var traverseContext = MapBookKeeping.getPooled(mapResult, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	  return ReactFragment.create(mapResult);
	}

	function forEachSingleChildDummy(traverseContext, child, name, i) {
	  return null;
	}

	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}

	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  count: countChildren
	};

	module.exports = ReactChildren;

	},{"153":153,"154":154,"28":28,"63":63}],33:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactClass
	 */

	'use strict';

	var ReactComponent = _dereq_(34);
	var ReactCurrentOwner = _dereq_(39);
	var ReactElement = _dereq_(57);
	var ReactErrorUtils = _dereq_(60);
	var ReactInstanceMap = _dereq_(67);
	var ReactLifeCycle = _dereq_(68);
	var ReactPropTypeLocations = _dereq_(77);
	var ReactPropTypeLocationNames = _dereq_(76);
	var ReactUpdateQueue = _dereq_(86);

	var assign = _dereq_(27);
	var invariant = _dereq_(135);
	var keyMirror = _dereq_(140);
	var keyOf = _dereq_(141);
	var warning = _dereq_(154);

	var MIXINS_KEY = keyOf({mixins: null});

	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */
	var SpecPolicy = keyMirror({
	  /**
	   * These methods may be defined only once by the class specification or mixin.
	   */
	  DEFINE_ONCE: null,
	  /**
	   * These methods may be defined by both the class specification and mixins.
	   * Subsequent definitions will be chained. These methods must return void.
	   */
	  DEFINE_MANY: null,
	  /**
	   * These methods are overriding the base class.
	   */
	  OVERRIDE_BASE: null,
	  /**
	   * These methods are similar to DEFINE_MANY, except we assume they return
	   * objects. We try to merge the keys of the return values of all the mixed in
	   * functions. If there is a key conflict we throw.
	   */
	  DEFINE_MANY_MERGED: null
	});


	var injectedMixins = [];

	/**
	 * Composite components are higher-level components that compose other composite
	 * or native components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {

	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: SpecPolicy.DEFINE_MANY,

	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: SpecPolicy.DEFINE_MANY,

	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: SpecPolicy.DEFINE_MANY,

	  // ==== Definition methods ====

	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,

	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: SpecPolicy.DEFINE_ONCE,



	  // ==== Delegate methods ====

	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,

	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: SpecPolicy.DEFINE_MANY,

	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: SpecPolicy.DEFINE_MANY,



	  // ==== Advanced methods ====

	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: SpecPolicy.OVERRIDE_BASE

	};

	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function(Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function(Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function(Constructor, childContextTypes) {
	    if ("production" !== "development") {
	      validateTypeDef(
	        Constructor,
	        childContextTypes,
	        ReactPropTypeLocations.childContext
	      );
	    }
	    Constructor.childContextTypes = assign(
	      {},
	      Constructor.childContextTypes,
	      childContextTypes
	    );
	  },
	  contextTypes: function(Constructor, contextTypes) {
	    if ("production" !== "development") {
	      validateTypeDef(
	        Constructor,
	        contextTypes,
	        ReactPropTypeLocations.context
	      );
	    }
	    Constructor.contextTypes = assign(
	      {},
	      Constructor.contextTypes,
	      contextTypes
	    );
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function(Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(
	        Constructor.getDefaultProps,
	        getDefaultProps
	      );
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function(Constructor, propTypes) {
	    if ("production" !== "development") {
	      validateTypeDef(
	        Constructor,
	        propTypes,
	        ReactPropTypeLocations.prop
	      );
	    }
	    Constructor.propTypes = assign(
	      {},
	      Constructor.propTypes,
	      propTypes
	    );
	  },
	  statics: function(Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  }
	};

	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but not in __DEV__
	      ("production" !== "development" ? warning(
	        typeof typeDef[propName] === 'function',
	        '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	        'React.PropTypes.',
	        Constructor.displayName || 'ReactClass',
	        ReactPropTypeLocationNames[location],
	        propName
	      ) : null);
	    }
	  }
	}

	function validateMethodOverride(proto, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ?
	    ReactClassInterface[name] :
	    null;

	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    ("production" !== "development" ? invariant(
	      specPolicy === SpecPolicy.OVERRIDE_BASE,
	      'ReactClassInterface: You are attempting to override ' +
	      '`%s` from your class specification. Ensure that your method names ' +
	      'do not overlap with React methods.',
	      name
	    ) : invariant(specPolicy === SpecPolicy.OVERRIDE_BASE));
	  }

	  // Disallow defining methods more than once unless explicitly allowed.
	  if (proto.hasOwnProperty(name)) {
	    ("production" !== "development" ? invariant(
	      specPolicy === SpecPolicy.DEFINE_MANY ||
	      specPolicy === SpecPolicy.DEFINE_MANY_MERGED,
	      'ReactClassInterface: You are attempting to define ' +
	      '`%s` on your component more than once. This conflict may be due ' +
	      'to a mixin.',
	      name
	    ) : invariant(specPolicy === SpecPolicy.DEFINE_MANY ||
	    specPolicy === SpecPolicy.DEFINE_MANY_MERGED));
	  }
	}

	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classses.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    return;
	  }

	  ("production" !== "development" ? invariant(
	    typeof spec !== 'function',
	    'ReactClass: You\'re attempting to ' +
	    'use a component class as a mixin. Instead, just use a regular object.'
	  ) : invariant(typeof spec !== 'function'));
	  ("production" !== "development" ? invariant(
	    !ReactElement.isValidElement(spec),
	    'ReactClass: You\'re attempting to ' +
	    'use a component as a mixin. Instead, just use a regular object.'
	  ) : invariant(!ReactElement.isValidElement(spec)));

	  var proto = Constructor.prototype;

	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }

	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }

	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above
	      continue;
	    }

	    var property = spec[name];
	    validateMethodOverride(proto, name);

	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod =
	        ReactClassInterface.hasOwnProperty(name);
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      var markedDontBind = property && property.__reactDontBind;
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind =
	        isFunction &&
	        !isReactClassMethod &&
	        !isAlreadyDefined &&
	        !markedDontBind;

	      if (shouldAutoBind) {
	        if (!proto.__reactAutoBindMap) {
	          proto.__reactAutoBindMap = {};
	        }
	        proto.__reactAutoBindMap[name] = property;
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];

	          // These cases should already be caught by validateMethodOverride
	          ("production" !== "development" ? invariant(
	            isReactClassMethod && (
	              (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)
	            ),
	            'ReactClass: Unexpected spec policy %s for key %s ' +
	            'when mixing in component specs.',
	            specPolicy,
	            name
	          ) : invariant(isReactClassMethod && (
	            (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)
	          )));

	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if ("production" !== "development") {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}

	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }

	    var isReserved = name in RESERVED_SPEC_KEYS;
	    ("production" !== "development" ? invariant(
	      !isReserved,
	      'ReactClass: You are attempting to define a reserved ' +
	      'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	      'as an instance property instead; it will still be accessible on the ' +
	      'constructor.',
	      name
	    ) : invariant(!isReserved));

	    var isInherited = name in Constructor;
	    ("production" !== "development" ? invariant(
	      !isInherited,
	      'ReactClass: You are attempting to define ' +
	      '`%s` on your component more than once. This conflict may be ' +
	      'due to a mixin.',
	      name
	    ) : invariant(!isInherited));
	    Constructor[name] = property;
	  }
	}

	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  ("production" !== "development" ? invariant(
	    one && two && typeof one === 'object' && typeof two === 'object',
	    'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	  ) : invariant(one && two && typeof one === 'object' && typeof two === 'object'));

	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      ("production" !== "development" ? invariant(
	        one[key] === undefined,
	        'mergeIntoWithNoDuplicateKeys(): ' +
	        'Tried to merge two objects with the same key: `%s`. This conflict ' +
	        'may be due to a mixin; in particular, this may be caused by two ' +
	        'getInitialState() or getDefaultProps() methods returning objects ' +
	        'with clashing keys.',
	        key
	      ) : invariant(one[key] === undefined));
	      one[key] = two[key];
	    }
	  }
	  return one;
	}

	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}

	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if ("production" !== "development") {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    /* eslint-disable block-scoped-var, no-undef */
	    boundMethod.bind = function(newThis ) {for (var args=[],$__0=1,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        ("production" !== "development" ? warning(
	          false,
	          'bind(): React component methods may only be bound to the ' +
	          'component instance. See %s',
	          componentName
	        ) : null);
	      } else if (!args.length) {
	        ("production" !== "development" ? warning(
	          false,
	          'bind(): You are binding a component method to the component. ' +
	          'React does this for you automatically in a high-performance ' +
	          'way, so you can safely remove this call. See %s',
	          componentName
	        ) : null);
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	      /* eslint-enable */
	    };
	  }
	  return boundMethod;
	}

	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  for (var autoBindKey in component.__reactAutoBindMap) {
	    if (component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
	      var method = component.__reactAutoBindMap[autoBindKey];
	      component[autoBindKey] = bindAutoBindMethod(
	        component,
	        ReactErrorUtils.guard(
	          method,
	          component.constructor.displayName + '.' + autoBindKey
	        )
	      );
	    }
	  }
	}

	var typeDeprecationDescriptor = {
	  enumerable: false,
	  get: function() {
	    var displayName = this.displayName || this.name || 'Component';
	    ("production" !== "development" ? warning(
	      false,
	      '%s.type is deprecated. Use %s directly to access the class.',
	      displayName,
	      displayName
	    ) : null);
	    Object.defineProperty(this, 'type', {
	      value: this
	    });
	    return this;
	  }
	};

	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {

	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function(newState, callback) {
	    ReactUpdateQueue.enqueueReplaceState(this, newState);
	    if (callback) {
	      ReactUpdateQueue.enqueueCallback(this, callback);
	    }
	  },

	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function() {
	    if ("production" !== "development") {
	      var owner = ReactCurrentOwner.current;
	      if (owner !== null) {
	        ("production" !== "development" ? warning(
	          owner._warnedAboutRefsInRender,
	          '%s is accessing isMounted inside its render() function. ' +
	          'render() should be a pure function of props and state. It should ' +
	          'never access something that requires stale data from the previous ' +
	          'render, such as refs. Move this logic to componentDidMount and ' +
	          'componentDidUpdate instead.',
	          owner.getName() || 'A component'
	        ) : null);
	        owner._warnedAboutRefsInRender = true;
	      }
	    }
	    var internalInstance = ReactInstanceMap.get(this);
	    return (
	      internalInstance &&
	      internalInstance !== ReactLifeCycle.currentlyMountingInstance
	    );
	  },

	  /**
	   * Sets a subset of the props.
	   *
	   * @param {object} partialProps Subset of the next props.
	   * @param {?function} callback Called after props are updated.
	   * @final
	   * @public
	   * @deprecated
	   */
	  setProps: function(partialProps, callback) {
	    ReactUpdateQueue.enqueueSetProps(this, partialProps);
	    if (callback) {
	      ReactUpdateQueue.enqueueCallback(this, callback);
	    }
	  },

	  /**
	   * Replace all the props.
	   *
	   * @param {object} newProps Subset of the next props.
	   * @param {?function} callback Called after props are updated.
	   * @final
	   * @public
	   * @deprecated
	   */
	  replaceProps: function(newProps, callback) {
	    ReactUpdateQueue.enqueueReplaceProps(this, newProps);
	    if (callback) {
	      ReactUpdateQueue.enqueueCallback(this, callback);
	    }
	  }
	};

	var ReactClassComponent = function() {};
	assign(
	  ReactClassComponent.prototype,
	  ReactComponent.prototype,
	  ReactClassMixin
	);

	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {

	  /**
	   * Creates a composite component class given a class specification.
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function(spec) {
	    var Constructor = function(props, context) {
	      // This constructor is overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if ("production" !== "development") {
	        ("production" !== "development" ? warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	          'JSX instead. See: https://fb.me/react-legacyfactory'
	        ) : null);
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindMap) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if ("production" !== "development") {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (typeof initialState === 'undefined' &&
	            this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      ("production" !== "development" ? invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      ) : invariant(typeof initialState === 'object' && !Array.isArray(initialState)));

	      this.state = initialState;
	    };
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;

	    injectedMixins.forEach(
	      mixSpecIntoComponent.bind(null, Constructor)
	    );

	    mixSpecIntoComponent(Constructor, spec);

	    // Initialize the defaultProps property after all mixins have been merged
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if ("production" !== "development") {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    ("production" !== "development" ? invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    ) : invariant(Constructor.prototype.render));

	    if ("production" !== "development") {
	      ("production" !== "development" ? warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	        'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	        'The name is phrased as a question because the function is ' +
	        'expected to return a value.',
	        spec.displayName || 'A component'
	      ) : null);
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    // Legacy hook
	    Constructor.type = Constructor;
	    if ("production" !== "development") {
	      try {
	        Object.defineProperty(Constructor, 'type', typeDeprecationDescriptor);
	      } catch (x) {
	        // IE will fail on defineProperty (es5-shim/sham too)
	      }
	    }

	    return Constructor;
	  },

	  injection: {
	    injectMixin: function(mixin) {
	      injectedMixins.push(mixin);
	    }
	  }

	};

	module.exports = ReactClass;

	},{"135":135,"140":140,"141":141,"154":154,"27":27,"34":34,"39":39,"57":57,"60":60,"67":67,"68":68,"76":76,"77":77,"86":86}],34:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponent
	 */

	'use strict';

	var ReactUpdateQueue = _dereq_(86);

	var invariant = _dereq_(135);
	var warning = _dereq_(154);

	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context) {
	  this.props = props;
	  this.context = context;
	}

	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function(partialState, callback) {
	  ("production" !== "development" ? invariant(
	    typeof partialState === 'object' ||
	    typeof partialState === 'function' ||
	    partialState == null,
	    'setState(...): takes an object of state variables to update or a ' +
	    'function which returns an object of state variables.'
	  ) : invariant(typeof partialState === 'object' ||
	  typeof partialState === 'function' ||
	  partialState == null));
	  if ("production" !== "development") {
	    ("production" !== "development" ? warning(
	      partialState != null,
	      'setState(...): You passed an undefined or null state object; ' +
	      'instead, use forceUpdate().'
	    ) : null);
	  }
	  ReactUpdateQueue.enqueueSetState(this, partialState);
	  if (callback) {
	    ReactUpdateQueue.enqueueCallback(this, callback);
	  }
	};

	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function(callback) {
	  ReactUpdateQueue.enqueueForceUpdate(this);
	  if (callback) {
	    ReactUpdateQueue.enqueueCallback(this, callback);
	  }
	};

	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if ("production" !== "development") {
	  var deprecatedAPIs = {
	    getDOMNode: [
	      'getDOMNode',
	      'Use React.findDOMNode(component) instead.'
	    ],
	    isMounted: [
	      'isMounted',
	      'Instead, make sure to clean up subscriptions and pending requests in ' +
	      'componentWillUnmount to prevent memory leaks.'
	    ],
	    replaceProps: [
	      'replaceProps',
	      'Instead call React.render again at the top level.'
	    ],
	    replaceState: [
	      'replaceState',
	      'Refactor your code to use setState instead (see ' +
	      'https://github.com/facebook/react/issues/3236).'
	    ],
	    setProps: [
	      'setProps',
	      'Instead call React.render again at the top level.'
	    ]
	  };
	  var defineDeprecationWarning = function(methodName, info) {
	    try {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function() {
	          ("production" !== "development" ? warning(
	            false,
	            '%s(...) is deprecated in plain JavaScript React classes. %s',
	            info[0],
	            info[1]
	          ) : null);
	          return undefined;
	        }
	      });
	    } catch (x) {
	      // IE will fail on defineProperty (es5-shim/sham too)
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	module.exports = ReactComponent;

	},{"135":135,"154":154,"86":86}],35:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentBrowserEnvironment
	 */

	/*jslint evil: true */

	'use strict';

	var ReactDOMIDOperations = _dereq_(44);
	var ReactMount = _dereq_(70);

	/**
	 * Abstracts away all functionality of the reconciler that requires knowledge of
	 * the browser context. TODO: These callers should be refactored to avoid the
	 * need for this injection.
	 */
	var ReactComponentBrowserEnvironment = {

	  processChildrenUpdates:
	    ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,

	  replaceNodeWithMarkupByID:
	    ReactDOMIDOperations.dangerouslyReplaceNodeWithMarkupByID,

	  /**
	   * If a particular environment requires that some resources be cleaned up,
	   * specify this in the injected Mixin. In the DOM, we would likely want to
	   * purge any cached node ID lookups.
	   *
	   * @private
	   */
	  unmountIDFromEnvironment: function(rootNodeID) {
	    ReactMount.purgeID(rootNodeID);
	  }

	};

	module.exports = ReactComponentBrowserEnvironment;

	},{"44":44,"70":70}],36:[function(_dereq_,module,exports){
	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentEnvironment
	 */

	'use strict';

	var invariant = _dereq_(135);

	var injected = false;

	var ReactComponentEnvironment = {

	  /**
	   * Optionally injectable environment dependent cleanup hook. (server vs.
	   * browser etc). Example: A browser system caches DOM nodes based on component
	   * ID and must remove that cache entry when this instance is unmounted.
	   */
	  unmountIDFromEnvironment: null,

	  /**
	   * Optionally injectable hook for swapping out mount images in the middle of
	   * the tree.
	   */
	  replaceNodeWithMarkupByID: null,

	  /**
	   * Optionally injectable hook for processing a queue of child updates. Will
	   * later move into MultiChildComponents.
	   */
	  processChildrenUpdates: null,

	  injection: {
	    injectEnvironment: function(environment) {
	      ("production" !== "development" ? invariant(
	        !injected,
	        'ReactCompositeComponent: injectEnvironment() can only be called once.'
	      ) : invariant(!injected));
	      ReactComponentEnvironment.unmountIDFromEnvironment =
	        environment.unmountIDFromEnvironment;
	      ReactComponentEnvironment.replaceNodeWithMarkupByID =
	        environment.replaceNodeWithMarkupByID;
	      ReactComponentEnvironment.processChildrenUpdates =
	        environment.processChildrenUpdates;
	      injected = true;
	    }
	  }

	};

	module.exports = ReactComponentEnvironment;

	},{"135":135}],37:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCompositeComponent
	 */

	'use strict';

	var ReactComponentEnvironment = _dereq_(36);
	var ReactContext = _dereq_(38);
	var ReactCurrentOwner = _dereq_(39);
	var ReactElement = _dereq_(57);
	var ReactElementValidator = _dereq_(58);
	var ReactInstanceMap = _dereq_(67);
	var ReactLifeCycle = _dereq_(68);
	var ReactNativeComponent = _dereq_(73);
	var ReactPerf = _dereq_(75);
	var ReactPropTypeLocations = _dereq_(77);
	var ReactPropTypeLocationNames = _dereq_(76);
	var ReactReconciler = _dereq_(81);
	var ReactUpdates = _dereq_(87);

	var assign = _dereq_(27);
	var emptyObject = _dereq_(115);
	var invariant = _dereq_(135);
	var shouldUpdateReactComponent = _dereq_(151);
	var warning = _dereq_(154);

	function getDeclarationErrorAddendum(component) {
	  var owner = component._currentElement._owner || null;
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * ------------------ The Life-Cycle of a Composite Component ------------------
	 *
	 * - constructor: Initialization of state. The instance is now retained.
	 *   - componentWillMount
	 *   - render
	 *   - [children's constructors]
	 *     - [children's componentWillMount and render]
	 *     - [children's componentDidMount]
	 *     - componentDidMount
	 *
	 *       Update Phases:
	 *       - componentWillReceiveProps (only called if parent updated)
	 *       - shouldComponentUpdate
	 *         - componentWillUpdate
	 *           - render
	 *           - [children's constructors or receive props phases]
	 *         - componentDidUpdate
	 *
	 *     - componentWillUnmount
	 *     - [children's componentWillUnmount]
	 *   - [children destroyed]
	 * - (destroyed): The instance is now blank, released by React and ready for GC.
	 *
	 * -----------------------------------------------------------------------------
	 */

	/**
	 * An incrementing ID assigned to each component when it is mounted. This is
	 * used to enforce the order in which `ReactUpdates` updates dirty components.
	 *
	 * @private
	 */
	var nextMountID = 1;

	/**
	 * @lends {ReactCompositeComponent.prototype}
	 */
	var ReactCompositeComponentMixin = {

	  /**
	   * Base constructor for all composite component.
	   *
	   * @param {ReactElement} element
	   * @final
	   * @internal
	   */
	  construct: function(element) {
	    this._currentElement = element;
	    this._rootNodeID = null;
	    this._instance = null;

	    // See ReactUpdateQueue
	    this._pendingElement = null;
	    this._pendingStateQueue = null;
	    this._pendingReplaceState = false;
	    this._pendingForceUpdate = false;

	    this._renderedComponent = null;

	    this._context = null;
	    this._mountOrder = 0;
	    this._isTopLevel = false;

	    // See ReactUpdates and ReactUpdateQueue.
	    this._pendingCallbacks = null;
	  },

	  /**
	   * Initializes the component, renders markup, and registers event listeners.
	   *
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {?string} Rendered markup to be inserted into the DOM.
	   * @final
	   * @internal
	   */
	  mountComponent: function(rootID, transaction, context) {
	    this._context = context;
	    this._mountOrder = nextMountID++;
	    this._rootNodeID = rootID;

	    var publicProps = this._processProps(this._currentElement.props);
	    var publicContext = this._processContext(this._currentElement._context);

	    var Component = ReactNativeComponent.getComponentClassForElement(
	      this._currentElement
	    );

	    // Initialize the public class
	    var inst = new Component(publicProps, publicContext);

	    if ("production" !== "development") {
	      // This will throw later in _renderValidatedComponent, but add an early
	      // warning now to help debugging
	      ("production" !== "development" ? warning(
	        inst.render != null,
	        '%s(...): No `render` method found on the returned component ' +
	        'instance: you may have forgotten to define `render` in your ' +
	        'component or you may have accidentally tried to render an element ' +
	        'whose type is a function that isn\'t a React component.',
	        Component.displayName || Component.name || 'Component'
	      ) : null);
	    }

	    // These should be set up in the constructor, but as a convenience for
	    // simpler class abstractions, we set them up after the fact.
	    inst.props = publicProps;
	    inst.context = publicContext;
	    inst.refs = emptyObject;

	    this._instance = inst;

	    // Store a reference from the instance back to the internal representation
	    ReactInstanceMap.set(inst, this);

	    if ("production" !== "development") {
	      this._warnIfContextsDiffer(this._currentElement._context, context);
	    }

	    if ("production" !== "development") {
	      // Since plain JS classes are defined without any special initialization
	      // logic, we can not catch common errors early. Therefore, we have to
	      // catch them here, at initialization time, instead.
	      ("production" !== "development" ? warning(
	        !inst.getInitialState ||
	        inst.getInitialState.isReactClassApproved,
	        'getInitialState was defined on %s, a plain JavaScript class. ' +
	        'This is only supported for classes created using React.createClass. ' +
	        'Did you mean to define a state property instead?',
	        this.getName() || 'a component'
	      ) : null);
	      ("production" !== "development" ? warning(
	        !inst.getDefaultProps ||
	        inst.getDefaultProps.isReactClassApproved,
	        'getDefaultProps was defined on %s, a plain JavaScript class. ' +
	        'This is only supported for classes created using React.createClass. ' +
	        'Use a static property to define defaultProps instead.',
	        this.getName() || 'a component'
	      ) : null);
	      ("production" !== "development" ? warning(
	        !inst.propTypes,
	        'propTypes was defined as an instance property on %s. Use a static ' +
	        'property to define propTypes instead.',
	        this.getName() || 'a component'
	      ) : null);
	      ("production" !== "development" ? warning(
	        !inst.contextTypes,
	        'contextTypes was defined as an instance property on %s. Use a ' +
	        'static property to define contextTypes instead.',
	        this.getName() || 'a component'
	      ) : null);
	      ("production" !== "development" ? warning(
	        typeof inst.componentShouldUpdate !== 'function',
	        '%s has a method called ' +
	        'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	        'The name is phrased as a question because the function is ' +
	        'expected to return a value.',
	        (this.getName() || 'A component')
	      ) : null);
	    }

	    var initialState = inst.state;
	    if (initialState === undefined) {
	      inst.state = initialState = null;
	    }
	    ("production" !== "development" ? invariant(
	      typeof initialState === 'object' && !Array.isArray(initialState),
	      '%s.state: must be set to an object or null',
	      this.getName() || 'ReactCompositeComponent'
	    ) : invariant(typeof initialState === 'object' && !Array.isArray(initialState)));

	    this._pendingStateQueue = null;
	    this._pendingReplaceState = false;
	    this._pendingForceUpdate = false;

	    var childContext;
	    var renderedElement;

	    var previouslyMounting = ReactLifeCycle.currentlyMountingInstance;
	    ReactLifeCycle.currentlyMountingInstance = this;
	    try {
	      if (inst.componentWillMount) {
	        inst.componentWillMount();
	        // When mounting, calls to `setState` by `componentWillMount` will set
	        // `this._pendingStateQueue` without triggering a re-render.
	        if (this._pendingStateQueue) {
	          inst.state = this._processPendingState(inst.props, inst.context);
	        }
	      }

	      childContext = this._getValidatedChildContext(context);
	      renderedElement = this._renderValidatedComponent(childContext);
	    } finally {
	      ReactLifeCycle.currentlyMountingInstance = previouslyMounting;
	    }

	    this._renderedComponent = this._instantiateReactComponent(
	      renderedElement,
	      this._currentElement.type // The wrapping type
	    );

	    var markup = ReactReconciler.mountComponent(
	      this._renderedComponent,
	      rootID,
	      transaction,
	      this._mergeChildContext(context, childContext)
	    );
	    if (inst.componentDidMount) {
	      transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
	    }

	    return markup;
	  },

	  /**
	   * Releases any resources allocated by `mountComponent`.
	   *
	   * @final
	   * @internal
	   */
	  unmountComponent: function() {
	    var inst = this._instance;

	    if (inst.componentWillUnmount) {
	      var previouslyUnmounting = ReactLifeCycle.currentlyUnmountingInstance;
	      ReactLifeCycle.currentlyUnmountingInstance = this;
	      try {
	        inst.componentWillUnmount();
	      } finally {
	        ReactLifeCycle.currentlyUnmountingInstance = previouslyUnmounting;
	      }
	    }

	    ReactReconciler.unmountComponent(this._renderedComponent);
	    this._renderedComponent = null;

	    // Reset pending fields
	    this._pendingStateQueue = null;
	    this._pendingReplaceState = false;
	    this._pendingForceUpdate = false;
	    this._pendingCallbacks = null;
	    this._pendingElement = null;

	    // These fields do not really need to be reset since this object is no
	    // longer accessible.
	    this._context = null;
	    this._rootNodeID = null;

	    // Delete the reference from the instance to this internal representation
	    // which allow the internals to be properly cleaned up even if the user
	    // leaks a reference to the public instance.
	    ReactInstanceMap.remove(inst);

	    // Some existing components rely on inst.props even after they've been
	    // destroyed (in event handlers).
	    // TODO: inst.props = null;
	    // TODO: inst.state = null;
	    // TODO: inst.context = null;
	  },

	  /**
	   * Schedule a partial update to the props. Only used for internal testing.
	   *
	   * @param {object} partialProps Subset of the next props.
	   * @param {?function} callback Called after props are updated.
	   * @final
	   * @internal
	   */
	  _setPropsInternal: function(partialProps, callback) {
	    // This is a deoptimized path. We optimize for always having an element.
	    // This creates an extra internal element.
	    var element = this._pendingElement || this._currentElement;
	    this._pendingElement = ReactElement.cloneAndReplaceProps(
	      element,
	      assign({}, element.props, partialProps)
	    );
	    ReactUpdates.enqueueUpdate(this, callback);
	  },

	  /**
	   * Filters the context object to only contain keys specified in
	   * `contextTypes`
	   *
	   * @param {object} context
	   * @return {?object}
	   * @private
	   */
	  _maskContext: function(context) {
	    var maskedContext = null;
	    // This really should be getting the component class for the element,
	    // but we know that we're not going to need it for built-ins.
	    if (typeof this._currentElement.type === 'string') {
	      return emptyObject;
	    }
	    var contextTypes = this._currentElement.type.contextTypes;
	    if (!contextTypes) {
	      return emptyObject;
	    }
	    maskedContext = {};
	    for (var contextName in contextTypes) {
	      maskedContext[contextName] = context[contextName];
	    }
	    return maskedContext;
	  },

	  /**
	   * Filters the context object to only contain keys specified in
	   * `contextTypes`, and asserts that they are valid.
	   *
	   * @param {object} context
	   * @return {?object}
	   * @private
	   */
	  _processContext: function(context) {
	    var maskedContext = this._maskContext(context);
	    if ("production" !== "development") {
	      var Component = ReactNativeComponent.getComponentClassForElement(
	        this._currentElement
	      );
	      if (Component.contextTypes) {
	        this._checkPropTypes(
	          Component.contextTypes,
	          maskedContext,
	          ReactPropTypeLocations.context
	        );
	      }
	    }
	    return maskedContext;
	  },

	  /**
	   * @param {object} currentContext
	   * @return {object}
	   * @private
	   */
	  _getValidatedChildContext: function(currentContext) {
	    var inst = this._instance;
	    var childContext = inst.getChildContext && inst.getChildContext();
	    if (childContext) {
	      ("production" !== "development" ? invariant(
	        typeof inst.constructor.childContextTypes === 'object',
	        '%s.getChildContext(): childContextTypes must be defined in order to ' +
	        'use getChildContext().',
	        this.getName() || 'ReactCompositeComponent'
	      ) : invariant(typeof inst.constructor.childContextTypes === 'object'));
	      if ("production" !== "development") {
	        this._checkPropTypes(
	          inst.constructor.childContextTypes,
	          childContext,
	          ReactPropTypeLocations.childContext
	        );
	      }
	      for (var name in childContext) {
	        ("production" !== "development" ? invariant(
	          name in inst.constructor.childContextTypes,
	          '%s.getChildContext(): key "%s" is not defined in childContextTypes.',
	          this.getName() || 'ReactCompositeComponent',
	          name
	        ) : invariant(name in inst.constructor.childContextTypes));
	      }
	      return childContext;
	    }
	    return null;
	  },

	  _mergeChildContext: function(currentContext, childContext) {
	    if (childContext) {
	      return assign({}, currentContext, childContext);
	    }
	    return currentContext;
	  },

	  /**
	   * Processes props by setting default values for unspecified props and
	   * asserting that the props are valid. Does not mutate its argument; returns
	   * a new props object with defaults merged in.
	   *
	   * @param {object} newProps
	   * @return {object}
	   * @private
	   */
	  _processProps: function(newProps) {
	    if ("production" !== "development") {
	      var Component = ReactNativeComponent.getComponentClassForElement(
	        this._currentElement
	      );
	      if (Component.propTypes) {
	        this._checkPropTypes(
	          Component.propTypes,
	          newProps,
	          ReactPropTypeLocations.prop
	        );
	      }
	    }
	    return newProps;
	  },

	  /**
	   * Assert that the props are valid
	   *
	   * @param {object} propTypes Map of prop name to a ReactPropType
	   * @param {object} props
	   * @param {string} location e.g. "prop", "context", "child context"
	   * @private
	   */
	  _checkPropTypes: function(propTypes, props, location) {
	    // TODO: Stop validating prop types here and only use the element
	    // validation.
	    var componentName = this.getName();
	    for (var propName in propTypes) {
	      if (propTypes.hasOwnProperty(propName)) {
	        var error;
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          ("production" !== "development" ? invariant(
	            typeof propTypes[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually ' +
	            'from React.PropTypes.',
	            componentName || 'React class',
	            ReactPropTypeLocationNames[location],
	            propName
	          ) : invariant(typeof propTypes[propName] === 'function'));
	          error = propTypes[propName](props, propName, componentName, location);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error instanceof Error) {
	          // We may want to extend this logic for similar errors in
	          // React.render calls, so I'm abstracting it away into
	          // a function to minimize refactoring in the future
	          var addendum = getDeclarationErrorAddendum(this);

	          if (location === ReactPropTypeLocations.prop) {
	            // Preface gives us something to blacklist in warning module
	            ("production" !== "development" ? warning(
	              false,
	              'Failed Composite propType: %s%s',
	              error.message,
	              addendum
	            ) : null);
	          } else {
	            ("production" !== "development" ? warning(
	              false,
	              'Failed Context Types: %s%s',
	              error.message,
	              addendum
	            ) : null);
	          }
	        }
	      }
	    }
	  },

	  receiveComponent: function(nextElement, transaction, nextContext) {
	    var prevElement = this._currentElement;
	    var prevContext = this._context;

	    this._pendingElement = null;

	    this.updateComponent(
	      transaction,
	      prevElement,
	      nextElement,
	      prevContext,
	      nextContext
	    );
	  },

	  /**
	   * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
	   * is set, update the component.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  performUpdateIfNecessary: function(transaction) {
	    if (this._pendingElement != null) {
	      ReactReconciler.receiveComponent(
	        this,
	        this._pendingElement || this._currentElement,
	        transaction,
	        this._context
	      );
	    }

	    if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
	      if ("production" !== "development") {
	        ReactElementValidator.checkAndWarnForMutatedProps(
	          this._currentElement
	        );
	      }

	      this.updateComponent(
	        transaction,
	        this._currentElement,
	        this._currentElement,
	        this._context,
	        this._context
	      );
	    }
	  },

	  /**
	   * Compare two contexts, warning if they are different
	   * TODO: Remove this check when owner-context is removed
	   */
	   _warnIfContextsDiffer: function(ownerBasedContext, parentBasedContext) {
	    ownerBasedContext = this._maskContext(ownerBasedContext);
	    parentBasedContext = this._maskContext(parentBasedContext);
	    var parentKeys = Object.keys(parentBasedContext).sort();
	    var displayName = this.getName() || 'ReactCompositeComponent';
	    for (var i = 0; i < parentKeys.length; i++) {
	      var key = parentKeys[i];
	      ("production" !== "development" ? warning(
	        ownerBasedContext[key] === parentBasedContext[key],
	        'owner-based and parent-based contexts differ '  +
	        '(values: `%s` vs `%s`) for key (%s) while mounting %s ' +
	        '(see: http://fb.me/react-context-by-parent)',
	        ownerBasedContext[key],
	        parentBasedContext[key],
	        key,
	        displayName
	      ) : null);
	    }
	  },

	  /**
	   * Perform an update to a mounted component. The componentWillReceiveProps and
	   * shouldComponentUpdate methods are called, then (assuming the update isn't
	   * skipped) the remaining update lifecycle methods are called and the DOM
	   * representation is updated.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @param {ReactElement} prevParentElement
	   * @param {ReactElement} nextParentElement
	   * @internal
	   * @overridable
	   */
	  updateComponent: function(
	    transaction,
	    prevParentElement,
	    nextParentElement,
	    prevUnmaskedContext,
	    nextUnmaskedContext
	  ) {
	    var inst = this._instance;

	    var nextContext = inst.context;
	    var nextProps = inst.props;

	    // Distinguish between a props update versus a simple state update
	    if (prevParentElement !== nextParentElement) {
	      nextContext = this._processContext(nextParentElement._context);
	      nextProps = this._processProps(nextParentElement.props);

	      if ("production" !== "development") {
	        if (nextUnmaskedContext != null) {
	          this._warnIfContextsDiffer(
	            nextParentElement._context,
	            nextUnmaskedContext
	          );
	        }
	      }

	      // An update here will schedule an update but immediately set
	      // _pendingStateQueue which will ensure that any state updates gets
	      // immediately reconciled instead of waiting for the next batch.

	      if (inst.componentWillReceiveProps) {
	        inst.componentWillReceiveProps(nextProps, nextContext);
	      }
	    }

	    var nextState = this._processPendingState(nextProps, nextContext);

	    var shouldUpdate =
	      this._pendingForceUpdate ||
	      !inst.shouldComponentUpdate ||
	      inst.shouldComponentUpdate(nextProps, nextState, nextContext);

	    if ("production" !== "development") {
	      ("production" !== "development" ? warning(
	        typeof shouldUpdate !== 'undefined',
	        '%s.shouldComponentUpdate(): Returned undefined instead of a ' +
	        'boolean value. Make sure to return true or false.',
	        this.getName() || 'ReactCompositeComponent'
	      ) : null);
	    }

	    if (shouldUpdate) {
	      this._pendingForceUpdate = false;
	      // Will set `this.props`, `this.state` and `this.context`.
	      this._performComponentUpdate(
	        nextParentElement,
	        nextProps,
	        nextState,
	        nextContext,
	        transaction,
	        nextUnmaskedContext
	      );
	    } else {
	      // If it's determined that a component should not update, we still want
	      // to set props and state but we shortcut the rest of the update.
	      this._currentElement = nextParentElement;
	      this._context = nextUnmaskedContext;
	      inst.props = nextProps;
	      inst.state = nextState;
	      inst.context = nextContext;
	    }
	  },

	  _processPendingState: function(props, context) {
	    var inst = this._instance;
	    var queue = this._pendingStateQueue;
	    var replace = this._pendingReplaceState;
	    this._pendingReplaceState = false;
	    this._pendingStateQueue = null;

	    if (!queue) {
	      return inst.state;
	    }

	    if (replace && queue.length === 1) {
	      return queue[0];
	    }

	    var nextState = assign({}, replace ? queue[0] : inst.state);
	    for (var i = replace ? 1 : 0; i < queue.length; i++) {
	      var partial = queue[i];
	      assign(
	        nextState,
	        typeof partial === 'function' ?
	          partial.call(inst, nextState, props, context) :
	          partial
	      );
	    }

	    return nextState;
	  },

	  /**
	   * Merges new props and state, notifies delegate methods of update and
	   * performs update.
	   *
	   * @param {ReactElement} nextElement Next element
	   * @param {object} nextProps Next public object to set as properties.
	   * @param {?object} nextState Next object to set as state.
	   * @param {?object} nextContext Next public object to set as context.
	   * @param {ReactReconcileTransaction} transaction
	   * @param {?object} unmaskedContext
	   * @private
	   */
	  _performComponentUpdate: function(
	    nextElement,
	    nextProps,
	    nextState,
	    nextContext,
	    transaction,
	    unmaskedContext
	  ) {
	    var inst = this._instance;

	    var prevProps = inst.props;
	    var prevState = inst.state;
	    var prevContext = inst.context;

	    if (inst.componentWillUpdate) {
	      inst.componentWillUpdate(nextProps, nextState, nextContext);
	    }

	    this._currentElement = nextElement;
	    this._context = unmaskedContext;
	    inst.props = nextProps;
	    inst.state = nextState;
	    inst.context = nextContext;

	    this._updateRenderedComponent(transaction, unmaskedContext);

	    if (inst.componentDidUpdate) {
	      transaction.getReactMountReady().enqueue(
	        inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext),
	        inst
	      );
	    }
	  },

	  /**
	   * Call the component's `render` method and update the DOM accordingly.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  _updateRenderedComponent: function(transaction, context) {
	    var prevComponentInstance = this._renderedComponent;
	    var prevRenderedElement = prevComponentInstance._currentElement;
	    var childContext = this._getValidatedChildContext();
	    var nextRenderedElement = this._renderValidatedComponent(childContext);
	    if (shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
	      ReactReconciler.receiveComponent(
	        prevComponentInstance,
	        nextRenderedElement,
	        transaction,
	        this._mergeChildContext(context, childContext)
	      );
	    } else {
	      // These two IDs are actually the same! But nothing should rely on that.
	      var thisID = this._rootNodeID;
	      var prevComponentID = prevComponentInstance._rootNodeID;
	      ReactReconciler.unmountComponent(prevComponentInstance);

	      this._renderedComponent = this._instantiateReactComponent(
	        nextRenderedElement,
	        this._currentElement.type
	      );
	      var nextMarkup = ReactReconciler.mountComponent(
	        this._renderedComponent,
	        thisID,
	        transaction,
	        this._mergeChildContext(context, childContext)
	      );
	      this._replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
	    }
	  },

	  /**
	   * @protected
	   */
	  _replaceNodeWithMarkupByID: function(prevComponentID, nextMarkup) {
	    ReactComponentEnvironment.replaceNodeWithMarkupByID(
	      prevComponentID,
	      nextMarkup
	    );
	  },

	  /**
	   * @protected
	   */
	  _renderValidatedComponentWithoutOwnerOrContext: function() {
	    var inst = this._instance;
	    var renderedComponent = inst.render();
	    if ("production" !== "development") {
	      // We allow auto-mocks to proceed as if they're returning null.
	      if (typeof renderedComponent === 'undefined' &&
	          inst.render._isMockFunction) {
	        // This is probably bad practice. Consider warning here and
	        // deprecating this convenience.
	        renderedComponent = null;
	      }
	    }

	    return renderedComponent;
	  },

	  /**
	   * @private
	   */
	  _renderValidatedComponent: function(childContext) {
	    var renderedComponent;
	    var previousContext = ReactContext.current;
	    ReactContext.current = this._mergeChildContext(
	      this._currentElement._context,
	      childContext
	    );
	    ReactCurrentOwner.current = this;
	    try {
	      renderedComponent =
	        this._renderValidatedComponentWithoutOwnerOrContext();
	    } finally {
	      ReactContext.current = previousContext;
	      ReactCurrentOwner.current = null;
	    }
	    ("production" !== "development" ? invariant(
	      // TODO: An `isValidNode` function would probably be more appropriate
	      renderedComponent === null || renderedComponent === false ||
	      ReactElement.isValidElement(renderedComponent),
	      '%s.render(): A valid ReactComponent must be returned. You may have ' +
	        'returned undefined, an array or some other invalid object.',
	      this.getName() || 'ReactCompositeComponent'
	    ) : invariant(// TODO: An `isValidNode` function would probably be more appropriate
	    renderedComponent === null || renderedComponent === false ||
	    ReactElement.isValidElement(renderedComponent)));
	    return renderedComponent;
	  },

	  /**
	   * Lazily allocates the refs object and stores `component` as `ref`.
	   *
	   * @param {string} ref Reference name.
	   * @param {component} component Component to store as `ref`.
	   * @final
	   * @private
	   */
	  attachRef: function(ref, component) {
	    var inst = this.getPublicInstance();
	    var refs = inst.refs === emptyObject ? (inst.refs = {}) : inst.refs;
	    refs[ref] = component.getPublicInstance();
	  },

	  /**
	   * Detaches a reference name.
	   *
	   * @param {string} ref Name to dereference.
	   * @final
	   * @private
	   */
	  detachRef: function(ref) {
	    var refs = this.getPublicInstance().refs;
	    delete refs[ref];
	  },

	  /**
	   * Get a text description of the component that can be used to identify it
	   * in error messages.
	   * @return {string} The name or null.
	   * @internal
	   */
	  getName: function() {
	    var type = this._currentElement.type;
	    var constructor = this._instance && this._instance.constructor;
	    return (
	      type.displayName || (constructor && constructor.displayName) ||
	      type.name || (constructor && constructor.name) ||
	      null
	    );
	  },

	  /**
	   * Get the publicly accessible representation of this component - i.e. what
	   * is exposed by refs and returned by React.render. Can be null for stateless
	   * components.
	   *
	   * @return {ReactComponent} the public component instance.
	   * @internal
	   */
	  getPublicInstance: function() {
	    return this._instance;
	  },

	  // Stub
	  _instantiateReactComponent: null

	};

	ReactPerf.measureMethods(
	  ReactCompositeComponentMixin,
	  'ReactCompositeComponent',
	  {
	    mountComponent: 'mountComponent',
	    updateComponent: 'updateComponent',
	    _renderValidatedComponent: '_renderValidatedComponent'
	  }
	);

	var ReactCompositeComponent = {

	  Mixin: ReactCompositeComponentMixin

	};

	module.exports = ReactCompositeComponent;

	},{"115":115,"135":135,"151":151,"154":154,"27":27,"36":36,"38":38,"39":39,"57":57,"58":58,"67":67,"68":68,"73":73,"75":75,"76":76,"77":77,"81":81,"87":87}],38:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactContext
	 */

	'use strict';

	var assign = _dereq_(27);
	var emptyObject = _dereq_(115);
	var warning = _dereq_(154);

	var didWarn = false;

	/**
	 * Keeps track of the current context.
	 *
	 * The context is automatically passed down the component ownership hierarchy
	 * and is accessible via `this.context` on ReactCompositeComponents.
	 */
	var ReactContext = {

	  /**
	   * @internal
	   * @type {object}
	   */
	  current: emptyObject,

	  /**
	   * Temporarily extends the current context while executing scopedCallback.
	   *
	   * A typical use case might look like
	   *
	   *  render: function() {
	   *    var children = ReactContext.withContext({foo: 'foo'}, () => (
	   *
	   *    ));
	   *    return <div>{children}</div>;
	   *  }
	   *
	   * @param {object} newContext New context to merge into the existing context
	   * @param {function} scopedCallback Callback to run with the new context
	   * @return {ReactComponent|array<ReactComponent>}
	   */
	  withContext: function(newContext, scopedCallback) {
	    if ("production" !== "development") {
	      ("production" !== "development" ? warning(
	        didWarn,
	        'withContext is deprecated and will be removed in a future version. ' +
	        'Use a wrapper component with getChildContext instead.'
	      ) : null);

	      didWarn = true;
	    }

	    var result;
	    var previousContext = ReactContext.current;
	    ReactContext.current = assign({}, previousContext, newContext);
	    try {
	      result = scopedCallback();
	    } finally {
	      ReactContext.current = previousContext;
	    }
	    return result;
	  }

	};

	module.exports = ReactContext;

	},{"115":115,"154":154,"27":27}],39:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 *
	 * The depth indicate how many composite components are above this render level.
	 */
	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

	},{}],40:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOM
	 * @typechecks static-only
	 */

	'use strict';

	var ReactElement = _dereq_(57);
	var ReactElementValidator = _dereq_(58);

	var mapObject = _dereq_(142);

	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @param {string} tag Tag name (e.g. `div`).
	 * @private
	 */
	function createDOMFactory(tag) {
	  if ("production" !== "development") {
	    return ReactElementValidator.createFactory(tag);
	  }
	  return ReactElement.createFactory(tag);
	}

	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOM = mapObject({
	  a: 'a',
	  abbr: 'abbr',
	  address: 'address',
	  area: 'area',
	  article: 'article',
	  aside: 'aside',
	  audio: 'audio',
	  b: 'b',
	  base: 'base',
	  bdi: 'bdi',
	  bdo: 'bdo',
	  big: 'big',
	  blockquote: 'blockquote',
	  body: 'body',
	  br: 'br',
	  button: 'button',
	  canvas: 'canvas',
	  caption: 'caption',
	  cite: 'cite',
	  code: 'code',
	  col: 'col',
	  colgroup: 'colgroup',
	  data: 'data',
	  datalist: 'datalist',
	  dd: 'dd',
	  del: 'del',
	  details: 'details',
	  dfn: 'dfn',
	  dialog: 'dialog',
	  div: 'div',
	  dl: 'dl',
	  dt: 'dt',
	  em: 'em',
	  embed: 'embed',
	  fieldset: 'fieldset',
	  figcaption: 'figcaption',
	  figure: 'figure',
	  footer: 'footer',
	  form: 'form',
	  h1: 'h1',
	  h2: 'h2',
	  h3: 'h3',
	  h4: 'h4',
	  h5: 'h5',
	  h6: 'h6',
	  head: 'head',
	  header: 'header',
	  hr: 'hr',
	  html: 'html',
	  i: 'i',
	  iframe: 'iframe',
	  img: 'img',
	  input: 'input',
	  ins: 'ins',
	  kbd: 'kbd',
	  keygen: 'keygen',
	  label: 'label',
	  legend: 'legend',
	  li: 'li',
	  link: 'link',
	  main: 'main',
	  map: 'map',
	  mark: 'mark',
	  menu: 'menu',
	  menuitem: 'menuitem',
	  meta: 'meta',
	  meter: 'meter',
	  nav: 'nav',
	  noscript: 'noscript',
	  object: 'object',
	  ol: 'ol',
	  optgroup: 'optgroup',
	  option: 'option',
	  output: 'output',
	  p: 'p',
	  param: 'param',
	  picture: 'picture',
	  pre: 'pre',
	  progress: 'progress',
	  q: 'q',
	  rp: 'rp',
	  rt: 'rt',
	  ruby: 'ruby',
	  s: 's',
	  samp: 'samp',
	  script: 'script',
	  section: 'section',
	  select: 'select',
	  small: 'small',
	  source: 'source',
	  span: 'span',
	  strong: 'strong',
	  style: 'style',
	  sub: 'sub',
	  summary: 'summary',
	  sup: 'sup',
	  table: 'table',
	  tbody: 'tbody',
	  td: 'td',
	  textarea: 'textarea',
	  tfoot: 'tfoot',
	  th: 'th',
	  thead: 'thead',
	  time: 'time',
	  title: 'title',
	  tr: 'tr',
	  track: 'track',
	  u: 'u',
	  ul: 'ul',
	  'var': 'var',
	  video: 'video',
	  wbr: 'wbr',

	  // SVG
	  circle: 'circle',
	  clipPath: 'clipPath',
	  defs: 'defs',
	  ellipse: 'ellipse',
	  g: 'g',
	  line: 'line',
	  linearGradient: 'linearGradient',
	  mask: 'mask',
	  path: 'path',
	  pattern: 'pattern',
	  polygon: 'polygon',
	  polyline: 'polyline',
	  radialGradient: 'radialGradient',
	  rect: 'rect',
	  stop: 'stop',
	  svg: 'svg',
	  text: 'text',
	  tspan: 'tspan'

	}, createDOMFactory);

	module.exports = ReactDOM;

	},{"142":142,"57":57,"58":58}],41:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMButton
	 */

	'use strict';

	var AutoFocusMixin = _dereq_(2);
	var ReactBrowserComponentMixin = _dereq_(29);
	var ReactClass = _dereq_(33);
	var ReactElement = _dereq_(57);

	var keyMirror = _dereq_(140);

	var button = ReactElement.createFactory('button');

	var mouseListenerNames = keyMirror({
	  onClick: true,
	  onDoubleClick: true,
	  onMouseDown: true,
	  onMouseMove: true,
	  onMouseUp: true,
	  onClickCapture: true,
	  onDoubleClickCapture: true,
	  onMouseDownCapture: true,
	  onMouseMoveCapture: true,
	  onMouseUpCapture: true
	});

	/**
	 * Implements a <button> native component that does not receive mouse events
	 * when `disabled` is set.
	 */
	var ReactDOMButton = ReactClass.createClass({
	  displayName: 'ReactDOMButton',
	  tagName: 'BUTTON',

	  mixins: [AutoFocusMixin, ReactBrowserComponentMixin],

	  render: function() {
	    var props = {};

	    // Copy the props; except the mouse listeners if we're disabled
	    for (var key in this.props) {
	      if (this.props.hasOwnProperty(key) &&
	          (!this.props.disabled || !mouseListenerNames[key])) {
	        props[key] = this.props[key];
	      }
	    }

	    return button(props, this.props.children);
	  }

	});

	module.exports = ReactDOMButton;

	},{"140":140,"2":2,"29":29,"33":33,"57":57}],42:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMComponent
	 * @typechecks static-only
	 */

	/* global hasOwnProperty:true */

	'use strict';

	var CSSPropertyOperations = _dereq_(5);
	var DOMProperty = _dereq_(10);
	var DOMPropertyOperations = _dereq_(11);
	var ReactBrowserEventEmitter = _dereq_(30);
	var ReactComponentBrowserEnvironment =
	  _dereq_(35);
	var ReactMount = _dereq_(70);
	var ReactMultiChild = _dereq_(71);
	var ReactPerf = _dereq_(75);

	var assign = _dereq_(27);
	var escapeTextContentForBrowser = _dereq_(116);
	var invariant = _dereq_(135);
	var isEventSupported = _dereq_(136);
	var keyOf = _dereq_(141);
	var warning = _dereq_(154);

	var deleteListener = ReactBrowserEventEmitter.deleteListener;
	var listenTo = ReactBrowserEventEmitter.listenTo;
	var registrationNameModules = ReactBrowserEventEmitter.registrationNameModules;

	// For quickly matching children type, to test if can be treated as content.
	var CONTENT_TYPES = {'string': true, 'number': true};

	var STYLE = keyOf({style: null});

	var ELEMENT_NODE_TYPE = 1;

	/**
	 * Optionally injectable operations for mutating the DOM
	 */
	var BackendIDOperations = null;

	/**
	 * @param {?object} props
	 */
	function assertValidProps(props) {
	  if (!props) {
	    return;
	  }
	  // Note the use of `==` which checks for null or undefined.
	  if (props.dangerouslySetInnerHTML != null) {
	    ("production" !== "development" ? invariant(
	      props.children == null,
	      'Can only set one of `children` or `props.dangerouslySetInnerHTML`.'
	    ) : invariant(props.children == null));
	    ("production" !== "development" ? invariant(
	      typeof props.dangerouslySetInnerHTML === 'object' &&
	      '__html' in props.dangerouslySetInnerHTML,
	      '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' +
	      'Please visit https://fb.me/react-invariant-dangerously-set-inner-html ' +
	      'for more information.'
	    ) : invariant(typeof props.dangerouslySetInnerHTML === 'object' &&
	    '__html' in props.dangerouslySetInnerHTML));
	  }
	  if ("production" !== "development") {
	    ("production" !== "development" ? warning(
	      props.innerHTML == null,
	      'Directly setting property `innerHTML` is not permitted. ' +
	      'For more information, lookup documentation on `dangerouslySetInnerHTML`.'
	    ) : null);
	    ("production" !== "development" ? warning(
	      !props.contentEditable || props.children == null,
	      'A component is `contentEditable` and contains `children` managed by ' +
	      'React. It is now your responsibility to guarantee that none of ' +
	      'those nodes are unexpectedly modified or duplicated. This is ' +
	      'probably not intentional.'
	    ) : null);
	  }
	  ("production" !== "development" ? invariant(
	    props.style == null || typeof props.style === 'object',
	    'The `style` prop expects a mapping from style properties to values, ' +
	    'not a string. For example, style={{marginRight: spacing + \'em\'}} when ' +
	    'using JSX.'
	  ) : invariant(props.style == null || typeof props.style === 'object'));
	}

	function putListener(id, registrationName, listener, transaction) {
	  if ("production" !== "development") {
	    // IE8 has no API for event capturing and the `onScroll` event doesn't
	    // bubble.
	    ("production" !== "development" ? warning(
	      registrationName !== 'onScroll' || isEventSupported('scroll', true),
	      'This browser doesn\'t support the `onScroll` event'
	    ) : null);
	  }
	  var container = ReactMount.findReactContainerForID(id);
	  if (container) {
	    var doc = container.nodeType === ELEMENT_NODE_TYPE ?
	      container.ownerDocument :
	      container;
	    listenTo(registrationName, doc);
	  }
	  transaction.getPutListenerQueue().enqueuePutListener(
	    id,
	    registrationName,
	    listener
	  );
	}

	// For HTML, certain tags should omit their close tag. We keep a whitelist for
	// those special cased tags.

	var omittedCloseTags = {
	  'area': true,
	  'base': true,
	  'br': true,
	  'col': true,
	  'embed': true,
	  'hr': true,
	  'img': true,
	  'input': true,
	  'keygen': true,
	  'link': true,
	  'meta': true,
	  'param': true,
	  'source': true,
	  'track': true,
	  'wbr': true
	  // NOTE: menuitem's close tag should be omitted, but that causes problems.
	};

	// We accept any tag to be rendered but since this gets injected into abitrary
	// HTML, we want to make sure that it's a safe tag.
	// http://www.w3.org/TR/REC-xml/#NT-Name

	var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
	var validatedTagCache = {};
	var hasOwnProperty = {}.hasOwnProperty;

	function validateDangerousTag(tag) {
	  if (!hasOwnProperty.call(validatedTagCache, tag)) {
	    ("production" !== "development" ? invariant(VALID_TAG_REGEX.test(tag), 'Invalid tag: %s', tag) : invariant(VALID_TAG_REGEX.test(tag)));
	    validatedTagCache[tag] = true;
	  }
	}

	/**
	 * Creates a new React class that is idempotent and capable of containing other
	 * React components. It accepts event listeners and DOM properties that are
	 * valid according to `DOMProperty`.
	 *
	 *  - Event listeners: `onClick`, `onMouseDown`, etc.
	 *  - DOM properties: `className`, `name`, `title`, etc.
	 *
	 * The `style` property functions differently from the DOM API. It accepts an
	 * object mapping of style properties to values.
	 *
	 * @constructor ReactDOMComponent
	 * @extends ReactMultiChild
	 */
	function ReactDOMComponent(tag) {
	  validateDangerousTag(tag);
	  this._tag = tag;
	  this._renderedChildren = null;
	  this._previousStyleCopy = null;
	  this._rootNodeID = null;
	}

	ReactDOMComponent.displayName = 'ReactDOMComponent';

	ReactDOMComponent.Mixin = {

	  construct: function(element) {
	    this._currentElement = element;
	  },

	  /**
	   * Generates root tag markup then recurses. This method has side effects and
	   * is not idempotent.
	   *
	   * @internal
	   * @param {string} rootID The root DOM ID for this node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {string} The computed markup.
	   */
	  mountComponent: function(rootID, transaction, context) {
	    this._rootNodeID = rootID;
	    assertValidProps(this._currentElement.props);
	    var closeTag = omittedCloseTags[this._tag] ? '' : '</' + this._tag + '>';
	    return (
	      this._createOpenTagMarkupAndPutListeners(transaction) +
	      this._createContentMarkup(transaction, context) +
	      closeTag
	    );
	  },

	  /**
	   * Creates markup for the open tag and all attributes.
	   *
	   * This method has side effects because events get registered.
	   *
	   * Iterating over object properties is faster than iterating over arrays.
	   * @see http://jsperf.com/obj-vs-arr-iteration
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {string} Markup of opening tag.
	   */
	  _createOpenTagMarkupAndPutListeners: function(transaction) {
	    var props = this._currentElement.props;
	    var ret = '<' + this._tag;

	    for (var propKey in props) {
	      if (!props.hasOwnProperty(propKey)) {
	        continue;
	      }
	      var propValue = props[propKey];
	      if (propValue == null) {
	        continue;
	      }
	      if (registrationNameModules.hasOwnProperty(propKey)) {
	        putListener(this._rootNodeID, propKey, propValue, transaction);
	      } else {
	        if (propKey === STYLE) {
	          if (propValue) {
	            propValue = this._previousStyleCopy = assign({}, props.style);
	          }
	          propValue = CSSPropertyOperations.createMarkupForStyles(propValue);
	        }
	        var markup =
	          DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
	        if (markup) {
	          ret += ' ' + markup;
	        }
	      }
	    }

	    // For static pages, no need to put React ID and checksum. Saves lots of
	    // bytes.
	    if (transaction.renderToStaticMarkup) {
	      return ret + '>';
	    }

	    var markupForID = DOMPropertyOperations.createMarkupForID(this._rootNodeID);
	    return ret + ' ' + markupForID + '>';
	  },

	  /**
	   * Creates markup for the content between the tags.
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} context
	   * @return {string} Content markup.
	   */
	  _createContentMarkup: function(transaction, context) {
	    var prefix = '';
	    if (this._tag === 'listing' ||
	        this._tag === 'pre' ||
	        this._tag === 'textarea') {
	      // Add an initial newline because browsers ignore the first newline in
	      // a <listing>, <pre>, or <textarea> as an "authoring convenience" -- see
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody.
	      prefix = '\n';
	    }

	    var props = this._currentElement.props;

	    // Intentional use of != to avoid catching zero/false.
	    var innerHTML = props.dangerouslySetInnerHTML;
	    if (innerHTML != null) {
	      if (innerHTML.__html != null) {
	        return prefix + innerHTML.__html;
	      }
	    } else {
	      var contentToUse =
	        CONTENT_TYPES[typeof props.children] ? props.children : null;
	      var childrenToUse = contentToUse != null ? null : props.children;
	      if (contentToUse != null) {
	        return prefix + escapeTextContentForBrowser(contentToUse);
	      } else if (childrenToUse != null) {
	        var mountImages = this.mountChildren(
	          childrenToUse,
	          transaction,
	          context
	        );
	        return prefix + mountImages.join('');
	      }
	    }
	    return prefix;
	  },

	  receiveComponent: function(nextElement, transaction, context) {
	    var prevElement = this._currentElement;
	    this._currentElement = nextElement;
	    this.updateComponent(transaction, prevElement, nextElement, context);
	  },

	  /**
	   * Updates a native DOM component after it has already been allocated and
	   * attached to the DOM. Reconciles the root DOM node, then recurses.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @param {ReactElement} prevElement
	   * @param {ReactElement} nextElement
	   * @internal
	   * @overridable
	   */
	  updateComponent: function(transaction, prevElement, nextElement, context) {
	    assertValidProps(this._currentElement.props);
	    this._updateDOMProperties(prevElement.props, transaction);
	    this._updateDOMChildren(prevElement.props, transaction, context);
	  },

	  /**
	   * Reconciles the properties by detecting differences in property values and
	   * updating the DOM as necessary. This function is probably the single most
	   * critical path for performance optimization.
	   *
	   * TODO: Benchmark whether checking for changed values in memory actually
	   *       improves performance (especially statically positioned elements).
	   * TODO: Benchmark the effects of putting this at the top since 99% of props
	   *       do not change for a given reconciliation.
	   * TODO: Benchmark areas that can be improved with caching.
	   *
	   * @private
	   * @param {object} lastProps
	   * @param {ReactReconcileTransaction} transaction
	   */
	  _updateDOMProperties: function(lastProps, transaction) {
	    var nextProps = this._currentElement.props;
	    var propKey;
	    var styleName;
	    var styleUpdates;
	    for (propKey in lastProps) {
	      if (nextProps.hasOwnProperty(propKey) ||
	         !lastProps.hasOwnProperty(propKey)) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        var lastStyle = this._previousStyleCopy;
	        for (styleName in lastStyle) {
	          if (lastStyle.hasOwnProperty(styleName)) {
	            styleUpdates = styleUpdates || {};
	            styleUpdates[styleName] = '';
	          }
	        }
	        this._previousStyleCopy = null;
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        deleteListener(this._rootNodeID, propKey);
	      } else if (
	          DOMProperty.isStandardName[propKey] ||
	          DOMProperty.isCustomAttribute(propKey)) {
	        BackendIDOperations.deletePropertyByID(
	          this._rootNodeID,
	          propKey
	        );
	      }
	    }
	    for (propKey in nextProps) {
	      var nextProp = nextProps[propKey];
	      var lastProp = propKey === STYLE ?
	        this._previousStyleCopy :
	        lastProps[propKey];
	      if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        if (nextProp) {
	          nextProp = this._previousStyleCopy = assign({}, nextProp);
	        } else {
	          this._previousStyleCopy = null;
	        }
	        if (lastProp) {
	          // Unset styles on `lastProp` but not on `nextProp`.
	          for (styleName in lastProp) {
	            if (lastProp.hasOwnProperty(styleName) &&
	                (!nextProp || !nextProp.hasOwnProperty(styleName))) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = '';
	            }
	          }
	          // Update styles that changed since `lastProp`.
	          for (styleName in nextProp) {
	            if (nextProp.hasOwnProperty(styleName) &&
	                lastProp[styleName] !== nextProp[styleName]) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = nextProp[styleName];
	            }
	          }
	        } else {
	          // Relies on `updateStylesByID` not mutating `styleUpdates`.
	          styleUpdates = nextProp;
	        }
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        putListener(this._rootNodeID, propKey, nextProp, transaction);
	      } else if (
	          DOMProperty.isStandardName[propKey] ||
	          DOMProperty.isCustomAttribute(propKey)) {
	        BackendIDOperations.updatePropertyByID(
	          this._rootNodeID,
	          propKey,
	          nextProp
	        );
	      }
	    }
	    if (styleUpdates) {
	      BackendIDOperations.updateStylesByID(
	        this._rootNodeID,
	        styleUpdates
	      );
	    }
	  },

	  /**
	   * Reconciles the children with the various properties that affect the
	   * children content.
	   *
	   * @param {object} lastProps
	   * @param {ReactReconcileTransaction} transaction
	   */
	  _updateDOMChildren: function(lastProps, transaction, context) {
	    var nextProps = this._currentElement.props;

	    var lastContent =
	      CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
	    var nextContent =
	      CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;

	    var lastHtml =
	      lastProps.dangerouslySetInnerHTML &&
	      lastProps.dangerouslySetInnerHTML.__html;
	    var nextHtml =
	      nextProps.dangerouslySetInnerHTML &&
	      nextProps.dangerouslySetInnerHTML.__html;

	    // Note the use of `!=` which checks for null or undefined.
	    var lastChildren = lastContent != null ? null : lastProps.children;
	    var nextChildren = nextContent != null ? null : nextProps.children;

	    // If we're switching from children to content/html or vice versa, remove
	    // the old content
	    var lastHasContentOrHtml = lastContent != null || lastHtml != null;
	    var nextHasContentOrHtml = nextContent != null || nextHtml != null;
	    if (lastChildren != null && nextChildren == null) {
	      this.updateChildren(null, transaction, context);
	    } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
	      this.updateTextContent('');
	    }

	    if (nextContent != null) {
	      if (lastContent !== nextContent) {
	        this.updateTextContent('' + nextContent);
	      }
	    } else if (nextHtml != null) {
	      if (lastHtml !== nextHtml) {
	        BackendIDOperations.updateInnerHTMLByID(
	          this._rootNodeID,
	          nextHtml
	        );
	      }
	    } else if (nextChildren != null) {
	      this.updateChildren(nextChildren, transaction, context);
	    }
	  },

	  /**
	   * Destroys all event registrations for this instance. Does not remove from
	   * the DOM. That must be done by the parent.
	   *
	   * @internal
	   */
	  unmountComponent: function() {
	    this.unmountChildren();
	    ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID);
	    ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
	    this._rootNodeID = null;
	  }

	};

	ReactPerf.measureMethods(ReactDOMComponent, 'ReactDOMComponent', {
	  mountComponent: 'mountComponent',
	  updateComponent: 'updateComponent'
	});

	assign(
	  ReactDOMComponent.prototype,
	  ReactDOMComponent.Mixin,
	  ReactMultiChild.Mixin
	);

	ReactDOMComponent.injection = {
	  injectIDOperations: function(IDOperations) {
	    ReactDOMComponent.BackendIDOperations = BackendIDOperations = IDOperations;
	  }
	};

	module.exports = ReactDOMComponent;

	},{"10":10,"11":11,"116":116,"135":135,"136":136,"141":141,"154":154,"27":27,"30":30,"35":35,"5":5,"70":70,"71":71,"75":75}],43:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMForm
	 */

	'use strict';

	var EventConstants = _dereq_(15);
	var LocalEventTrapMixin = _dereq_(25);
	var ReactBrowserComponentMixin = _dereq_(29);
	var ReactClass = _dereq_(33);
	var ReactElement = _dereq_(57);

	var form = ReactElement.createFactory('form');

	/**
	 * Since onSubmit doesn't bubble OR capture on the top level in IE8, we need
	 * to capture it on the <form> element itself. There are lots of hacks we could
	 * do to accomplish this, but the most reliable is to make <form> a
	 * composite component and use `componentDidMount` to attach the event handlers.
	 */
	var ReactDOMForm = ReactClass.createClass({
	  displayName: 'ReactDOMForm',
	  tagName: 'FORM',

	  mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],

	  render: function() {
	    // TODO: Instead of using `ReactDOM` directly, we should use JSX. However,
	    // `jshint` fails to parse JSX so in order for linting to work in the open
	    // source repo, we need to just use `ReactDOM.form`.
	    return form(this.props);
	  },

	  componentDidMount: function() {
	    this.trapBubbledEvent(EventConstants.topLevelTypes.topReset, 'reset');
	    this.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit, 'submit');
	  }
	});

	module.exports = ReactDOMForm;

	},{"15":15,"25":25,"29":29,"33":33,"57":57}],44:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMIDOperations
	 * @typechecks static-only
	 */

	/*jslint evil: true */

	'use strict';

	var CSSPropertyOperations = _dereq_(5);
	var DOMChildrenOperations = _dereq_(9);
	var DOMPropertyOperations = _dereq_(11);
	var ReactMount = _dereq_(70);
	var ReactPerf = _dereq_(75);

	var invariant = _dereq_(135);
	var setInnerHTML = _dereq_(148);

	/**
	 * Errors for properties that should not be updated with `updatePropertyById()`.
	 *
	 * @type {object}
	 * @private
	 */
	var INVALID_PROPERTY_ERRORS = {
	  dangerouslySetInnerHTML:
	    '`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.',
	  style: '`style` must be set using `updateStylesByID()`.'
	};

	/**
	 * Operations used to process updates to DOM nodes. This is made injectable via
	 * `ReactDOMComponent.BackendIDOperations`.
	 */
	var ReactDOMIDOperations = {

	  /**
	   * Updates a DOM node with new property values. This should only be used to
	   * update DOM properties in `DOMProperty`.
	   *
	   * @param {string} id ID of the node to update.
	   * @param {string} name A valid property name, see `DOMProperty`.
	   * @param {*} value New value of the property.
	   * @internal
	   */
	  updatePropertyByID: function(id, name, value) {
	    var node = ReactMount.getNode(id);
	    ("production" !== "development" ? invariant(
	      !INVALID_PROPERTY_ERRORS.hasOwnProperty(name),
	      'updatePropertyByID(...): %s',
	      INVALID_PROPERTY_ERRORS[name]
	    ) : invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name)));

	    // If we're updating to null or undefined, we should remove the property
	    // from the DOM node instead of inadvertantly setting to a string. This
	    // brings us in line with the same behavior we have on initial render.
	    if (value != null) {
	      DOMPropertyOperations.setValueForProperty(node, name, value);
	    } else {
	      DOMPropertyOperations.deleteValueForProperty(node, name);
	    }
	  },

	  /**
	   * Updates a DOM node to remove a property. This should only be used to remove
	   * DOM properties in `DOMProperty`.
	   *
	   * @param {string} id ID of the node to update.
	   * @param {string} name A property name to remove, see `DOMProperty`.
	   * @internal
	   */
	  deletePropertyByID: function(id, name, value) {
	    var node = ReactMount.getNode(id);
	    ("production" !== "development" ? invariant(
	      !INVALID_PROPERTY_ERRORS.hasOwnProperty(name),
	      'updatePropertyByID(...): %s',
	      INVALID_PROPERTY_ERRORS[name]
	    ) : invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name)));
	    DOMPropertyOperations.deleteValueForProperty(node, name, value);
	  },

	  /**
	   * Updates a DOM node with new style values. If a value is specified as '',
	   * the corresponding style property will be unset.
	   *
	   * @param {string} id ID of the node to update.
	   * @param {object} styles Mapping from styles to values.
	   * @internal
	   */
	  updateStylesByID: function(id, styles) {
	    var node = ReactMount.getNode(id);
	    CSSPropertyOperations.setValueForStyles(node, styles);
	  },

	  /**
	   * Updates a DOM node's innerHTML.
	   *
	   * @param {string} id ID of the node to update.
	   * @param {string} html An HTML string.
	   * @internal
	   */
	  updateInnerHTMLByID: function(id, html) {
	    var node = ReactMount.getNode(id);
	    setInnerHTML(node, html);
	  },

	  /**
	   * Updates a DOM node's text content set by `props.content`.
	   *
	   * @param {string} id ID of the node to update.
	   * @param {string} content Text content.
	   * @internal
	   */
	  updateTextContentByID: function(id, content) {
	    var node = ReactMount.getNode(id);
	    DOMChildrenOperations.updateTextContent(node, content);
	  },

	  /**
	   * Replaces a DOM node that exists in the document with markup.
	   *
	   * @param {string} id ID of child to be replaced.
	   * @param {string} markup Dangerous markup to inject in place of child.
	   * @internal
	   * @see {Danger.dangerouslyReplaceNodeWithMarkup}
	   */
	  dangerouslyReplaceNodeWithMarkupByID: function(id, markup) {
	    var node = ReactMount.getNode(id);
	    DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(node, markup);
	  },

	  /**
	   * Updates a component's children by processing a series of updates.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @param {array<string>} markup List of markup strings.
	   * @internal
	   */
	  dangerouslyProcessChildrenUpdates: function(updates, markup) {
	    for (var i = 0; i < updates.length; i++) {
	      updates[i].parentNode = ReactMount.getNode(updates[i].parentID);
	    }
	    DOMChildrenOperations.processUpdates(updates, markup);
	  }
	};

	ReactPerf.measureMethods(ReactDOMIDOperations, 'ReactDOMIDOperations', {
	  updatePropertyByID: 'updatePropertyByID',
	  deletePropertyByID: 'deletePropertyByID',
	  updateStylesByID: 'updateStylesByID',
	  updateInnerHTMLByID: 'updateInnerHTMLByID',
	  updateTextContentByID: 'updateTextContentByID',
	  dangerouslyReplaceNodeWithMarkupByID: 'dangerouslyReplaceNodeWithMarkupByID',
	  dangerouslyProcessChildrenUpdates: 'dangerouslyProcessChildrenUpdates'
	});

	module.exports = ReactDOMIDOperations;

	},{"11":11,"135":135,"148":148,"5":5,"70":70,"75":75,"9":9}],45:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMIframe
	 */

	'use strict';

	var EventConstants = _dereq_(15);
	var LocalEventTrapMixin = _dereq_(25);
	var ReactBrowserComponentMixin = _dereq_(29);
	var ReactClass = _dereq_(33);
	var ReactElement = _dereq_(57);

	var iframe = ReactElement.createFactory('iframe');

	/**
	 * Since onLoad doesn't bubble OR capture on the top level in IE8, we need to
	 * capture it on the <iframe> element itself. There are lots of hacks we could
	 * do to accomplish this, but the most reliable is to make <iframe> a composite
	 * component and use `componentDidMount` to attach the event handlers.
	 */
	var ReactDOMIframe = ReactClass.createClass({
	  displayName: 'ReactDOMIframe',
	  tagName: 'IFRAME',

	  mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],

	  render: function() {
	    return iframe(this.props);
	  },

	  componentDidMount: function() {
	    this.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load');
	  }
	});

	module.exports = ReactDOMIframe;

	},{"15":15,"25":25,"29":29,"33":33,"57":57}],46:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMImg
	 */

	'use strict';

	var EventConstants = _dereq_(15);
	var LocalEventTrapMixin = _dereq_(25);
	var ReactBrowserComponentMixin = _dereq_(29);
	var ReactClass = _dereq_(33);
	var ReactElement = _dereq_(57);

	var img = ReactElement.createFactory('img');

	/**
	 * Since onLoad doesn't bubble OR capture on the top level in IE8, we need to
	 * capture it on the <img> element itself. There are lots of hacks we could do
	 * to accomplish this, but the most reliable is to make <img> a composite
	 * component and use `componentDidMount` to attach the event handlers.
	 */
	var ReactDOMImg = ReactClass.createClass({
	  displayName: 'ReactDOMImg',
	  tagName: 'IMG',

	  mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],

	  render: function() {
	    return img(this.props);
	  },

	  componentDidMount: function() {
	    this.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load');
	    this.trapBubbledEvent(EventConstants.topLevelTypes.topError, 'error');
	  }
	});

	module.exports = ReactDOMImg;

	},{"15":15,"25":25,"29":29,"33":33,"57":57}],47:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMInput
	 */

	'use strict';

	var AutoFocusMixin = _dereq_(2);
	var DOMPropertyOperations = _dereq_(11);
	var LinkedValueUtils = _dereq_(24);
	var ReactBrowserComponentMixin = _dereq_(29);
	var ReactClass = _dereq_(33);
	var ReactElement = _dereq_(57);
	var ReactMount = _dereq_(70);
	var ReactUpdates = _dereq_(87);

	var assign = _dereq_(27);
	var invariant = _dereq_(135);

	var input = ReactElement.createFactory('input');

	var instancesByReactID = {};

	function forceUpdateIfMounted() {
	  /*jshint validthis:true */
	  if (this.isMounted()) {
	    this.forceUpdate();
	  }
	}

	/**
	 * Implements an <input> native component that allows setting these optional
	 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
	 *
	 * If `checked` or `value` are not supplied (or null/undefined), user actions
	 * that affect the checked state or value will trigger updates to the element.
	 *
	 * If they are supplied (and not null/undefined), the rendered element will not
	 * trigger updates to the element. Instead, the props must change in order for
	 * the rendered element to be updated.
	 *
	 * The rendered element will be initialized as unchecked (or `defaultChecked`)
	 * with an empty value (or `defaultValue`).
	 *
	 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
	 */
	var ReactDOMInput = ReactClass.createClass({
	  displayName: 'ReactDOMInput',
	  tagName: 'INPUT',

	  mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],

	  getInitialState: function() {
	    var defaultValue = this.props.defaultValue;
	    return {
	      initialChecked: this.props.defaultChecked || false,
	      initialValue: defaultValue != null ? defaultValue : null
	    };
	  },

	  render: function() {
	    // Clone `this.props` so we don't mutate the input.
	    var props = assign({}, this.props);

	    props.defaultChecked = null;
	    props.defaultValue = null;

	    var value = LinkedValueUtils.getValue(this);
	    props.value = value != null ? value : this.state.initialValue;

	    var checked = LinkedValueUtils.getChecked(this);
	    props.checked = checked != null ? checked : this.state.initialChecked;

	    props.onChange = this._handleChange;

	    return input(props, this.props.children);
	  },

	  componentDidMount: function() {
	    var id = ReactMount.getID(this.getDOMNode());
	    instancesByReactID[id] = this;
	  },

	  componentWillUnmount: function() {
	    var rootNode = this.getDOMNode();
	    var id = ReactMount.getID(rootNode);
	    delete instancesByReactID[id];
	  },

	  componentDidUpdate: function(prevProps, prevState, prevContext) {
	    var rootNode = this.getDOMNode();
	    if (this.props.checked != null) {
	      DOMPropertyOperations.setValueForProperty(
	        rootNode,
	        'checked',
	        this.props.checked || false
	      );
	    }

	    var value = LinkedValueUtils.getValue(this);
	    if (value != null) {
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      DOMPropertyOperations.setValueForProperty(rootNode, 'value', '' + value);
	    }
	  },

	  _handleChange: function(event) {
	    var returnValue;
	    var onChange = LinkedValueUtils.getOnChange(this);
	    if (onChange) {
	      returnValue = onChange.call(this, event);
	    }
	    // Here we use asap to wait until all updates have propagated, which
	    // is important when using controlled components within layers:
	    // https://github.com/facebook/react/issues/1698
	    ReactUpdates.asap(forceUpdateIfMounted, this);

	    var name = this.props.name;
	    if (this.props.type === 'radio' && name != null) {
	      var rootNode = this.getDOMNode();
	      var queryRoot = rootNode;

	      while (queryRoot.parentNode) {
	        queryRoot = queryRoot.parentNode;
	      }

	      // If `rootNode.form` was non-null, then we could try `form.elements`,
	      // but that sometimes behaves strangely in IE8. We could also try using
	      // `form.getElementsByName`, but that will only return direct children
	      // and won't include inputs that use the HTML5 `form=` attribute. Since
	      // the input might not even be in a form, let's just use the global
	      // `querySelectorAll` to ensure we don't miss anything.
	      var group = queryRoot.querySelectorAll(
	        'input[name=' + JSON.stringify('' + name) + '][type="radio"]');

	      for (var i = 0, groupLen = group.length; i < groupLen; i++) {
	        var otherNode = group[i];
	        if (otherNode === rootNode ||
	            otherNode.form !== rootNode.form) {
	          continue;
	        }
	        var otherID = ReactMount.getID(otherNode);
	        ("production" !== "development" ? invariant(
	          otherID,
	          'ReactDOMInput: Mixing React and non-React radio inputs with the ' +
	          'same `name` is not supported.'
	        ) : invariant(otherID));
	        var otherInstance = instancesByReactID[otherID];
	        ("production" !== "development" ? invariant(
	          otherInstance,
	          'ReactDOMInput: Unknown radio button ID %s.',
	          otherID
	        ) : invariant(otherInstance));
	        // If this is a controlled radio button group, forcing the input that
	        // was previously checked to update will cause it to be come re-checked
	        // as appropriate.
	        ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
	      }
	    }

	    return returnValue;
	  }

	});

	module.exports = ReactDOMInput;

	},{"11":11,"135":135,"2":2,"24":24,"27":27,"29":29,"33":33,"57":57,"70":70,"87":87}],48:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMOption
	 */

	'use strict';

	var ReactBrowserComponentMixin = _dereq_(29);
	var ReactClass = _dereq_(33);
	var ReactElement = _dereq_(57);

	var warning = _dereq_(154);

	var option = ReactElement.createFactory('option');

	/**
	 * Implements an <option> native component that warns when `selected` is set.
	 */
	var ReactDOMOption = ReactClass.createClass({
	  displayName: 'ReactDOMOption',
	  tagName: 'OPTION',

	  mixins: [ReactBrowserComponentMixin],

	  componentWillMount: function() {
	    // TODO (yungsters): Remove support for `selected` in <option>.
	    if ("production" !== "development") {
	      ("production" !== "development" ? warning(
	        this.props.selected == null,
	        'Use the `defaultValue` or `value` props on <select> instead of ' +
	        'setting `selected` on <option>.'
	      ) : null);
	    }
	  },

	  render: function() {
	    return option(this.props, this.props.children);
	  }

	});

	module.exports = ReactDOMOption;

	},{"154":154,"29":29,"33":33,"57":57}],49:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMSelect
	 */

	'use strict';

	var AutoFocusMixin = _dereq_(2);
	var LinkedValueUtils = _dereq_(24);
	var ReactBrowserComponentMixin = _dereq_(29);
	var ReactClass = _dereq_(33);
	var ReactElement = _dereq_(57);
	var ReactUpdates = _dereq_(87);

	var assign = _dereq_(27);

	var select = ReactElement.createFactory('select');

	function updateOptionsIfPendingUpdateAndMounted() {
	  /*jshint validthis:true */
	  if (this._pendingUpdate) {
	    this._pendingUpdate = false;
	    var value = LinkedValueUtils.getValue(this);
	    if (value != null && this.isMounted()) {
	      updateOptions(this, value);
	    }
	  }
	}

	/**
	 * Validation function for `value` and `defaultValue`.
	 * @private
	 */
	function selectValueType(props, propName, componentName) {
	  if (props[propName] == null) {
	    return null;
	  }
	  if (props.multiple) {
	    if (!Array.isArray(props[propName])) {
	      return new Error(
	        ("The `" + propName + "` prop supplied to <select> must be an array if ") +
	        ("`multiple` is true.")
	      );
	    }
	  } else {
	    if (Array.isArray(props[propName])) {
	      return new Error(
	        ("The `" + propName + "` prop supplied to <select> must be a scalar ") +
	        ("value if `multiple` is false.")
	      );
	    }
	  }
	}

	/**
	 * @param {ReactComponent} component Instance of ReactDOMSelect
	 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
	 * @private
	 */
	function updateOptions(component, propValue) {
	  var selectedValue, i, l;
	  var options = component.getDOMNode().options;

	  if (component.props.multiple) {
	    selectedValue = {};
	    for (i = 0, l = propValue.length; i < l; i++) {
	      selectedValue['' + propValue[i]] = true;
	    }
	    for (i = 0, l = options.length; i < l; i++) {
	      var selected = selectedValue.hasOwnProperty(options[i].value);
	      if (options[i].selected !== selected) {
	        options[i].selected = selected;
	      }
	    }
	  } else {
	    // Do not set `select.value` as exact behavior isn't consistent across all
	    // browsers for all cases.
	    selectedValue = '' + propValue;
	    for (i = 0, l = options.length; i < l; i++) {
	      if (options[i].value === selectedValue) {
	        options[i].selected = true;
	        return;
	      }
	    }
	    if (options.length) {
	      options[0].selected = true;
	    }
	  }
	}

	/**
	 * Implements a <select> native component that allows optionally setting the
	 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
	 * stringable. If `multiple` is true, the prop must be an array of stringables.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that change the
	 * selected option will trigger updates to the rendered options.
	 *
	 * If it is supplied (and not null/undefined), the rendered options will not
	 * update in response to user actions. Instead, the `value` prop must change in
	 * order for the rendered options to update.
	 *
	 * If `defaultValue` is provided, any options with the supplied values will be
	 * selected.
	 */
	var ReactDOMSelect = ReactClass.createClass({
	  displayName: 'ReactDOMSelect',
	  tagName: 'SELECT',

	  mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],

	  propTypes: {
	    defaultValue: selectValueType,
	    value: selectValueType
	  },

	  render: function() {
	    // Clone `this.props` so we don't mutate the input.
	    var props = assign({}, this.props);

	    props.onChange = this._handleChange;
	    props.value = null;

	    return select(props, this.props.children);
	  },

	  componentWillMount: function() {
	    this._pendingUpdate = false;
	  },

	  componentDidMount: function() {
	    var value = LinkedValueUtils.getValue(this);
	    if (value != null) {
	      updateOptions(this, value);
	    } else if (this.props.defaultValue != null) {
	      updateOptions(this, this.props.defaultValue);
	    }
	  },

	  componentDidUpdate: function(prevProps) {
	    var value = LinkedValueUtils.getValue(this);
	    if (value != null) {
	      this._pendingUpdate = false;
	      updateOptions(this, value);
	    } else if (!prevProps.multiple !== !this.props.multiple) {
	      // For simplicity, reapply `defaultValue` if `multiple` is toggled.
	      if (this.props.defaultValue != null) {
	        updateOptions(this, this.props.defaultValue);
	      } else {
	        // Revert the select back to its default unselected state.
	        updateOptions(this, this.props.multiple ? [] : '');
	      }
	    }
	  },

	  _handleChange: function(event) {
	    var returnValue;
	    var onChange = LinkedValueUtils.getOnChange(this);
	    if (onChange) {
	      returnValue = onChange.call(this, event);
	    }

	    this._pendingUpdate = true;
	    ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted, this);
	    return returnValue;
	  }

	});

	module.exports = ReactDOMSelect;

	},{"2":2,"24":24,"27":27,"29":29,"33":33,"57":57,"87":87}],50:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMSelection
	 */

	'use strict';

	var ExecutionEnvironment = _dereq_(21);

	var getNodeForCharacterOffset = _dereq_(128);
	var getTextContentAccessor = _dereq_(130);

	/**
	 * While `isCollapsed` is available on the Selection object and `collapsed`
	 * is available on the Range object, IE11 sometimes gets them wrong.
	 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
	 */
	function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
	  return anchorNode === focusNode && anchorOffset === focusOffset;
	}

	/**
	 * Get the appropriate anchor and focus node/offset pairs for IE.
	 *
	 * The catch here is that IE's selection API doesn't provide information
	 * about whether the selection is forward or backward, so we have to
	 * behave as though it's always forward.
	 *
	 * IE text differs from modern selection in that it behaves as though
	 * block elements end with a new line. This means character offsets will
	 * differ between the two APIs.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */
	function getIEOffsets(node) {
	  var selection = document.selection;
	  var selectedRange = selection.createRange();
	  var selectedLength = selectedRange.text.length;

	  // Duplicate selection so we can move range without breaking user selection.
	  var fromStart = selectedRange.duplicate();
	  fromStart.moveToElementText(node);
	  fromStart.setEndPoint('EndToStart', selectedRange);

	  var startOffset = fromStart.text.length;
	  var endOffset = startOffset + selectedLength;

	  return {
	    start: startOffset,
	    end: endOffset
	  };
	}

	/**
	 * @param {DOMElement} node
	 * @return {?object}
	 */
	function getModernOffsets(node) {
	  var selection = window.getSelection && window.getSelection();

	  if (!selection || selection.rangeCount === 0) {
	    return null;
	  }

	  var anchorNode = selection.anchorNode;
	  var anchorOffset = selection.anchorOffset;
	  var focusNode = selection.focusNode;
	  var focusOffset = selection.focusOffset;

	  var currentRange = selection.getRangeAt(0);

	  // If the node and offset values are the same, the selection is collapsed.
	  // `Selection.isCollapsed` is available natively, but IE sometimes gets
	  // this value wrong.
	  var isSelectionCollapsed = isCollapsed(
	    selection.anchorNode,
	    selection.anchorOffset,
	    selection.focusNode,
	    selection.focusOffset
	  );

	  var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;

	  var tempRange = currentRange.cloneRange();
	  tempRange.selectNodeContents(node);
	  tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);

	  var isTempRangeCollapsed = isCollapsed(
	    tempRange.startContainer,
	    tempRange.startOffset,
	    tempRange.endContainer,
	    tempRange.endOffset
	  );

	  var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
	  var end = start + rangeLength;

	  // Detect whether the selection is backward.
	  var detectionRange = document.createRange();
	  detectionRange.setStart(anchorNode, anchorOffset);
	  detectionRange.setEnd(focusNode, focusOffset);
	  var isBackward = detectionRange.collapsed;

	  return {
	    start: isBackward ? end : start,
	    end: isBackward ? start : end
	  };
	}

	/**
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
	function setIEOffsets(node, offsets) {
	  var range = document.selection.createRange().duplicate();
	  var start, end;

	  if (typeof offsets.end === 'undefined') {
	    start = offsets.start;
	    end = start;
	  } else if (offsets.start > offsets.end) {
	    start = offsets.end;
	    end = offsets.start;
	  } else {
	    start = offsets.start;
	    end = offsets.end;
	  }

	  range.moveToElementText(node);
	  range.moveStart('character', start);
	  range.setEndPoint('EndToStart', range);
	  range.moveEnd('character', end - start);
	  range.select();
	}

	/**
	 * In modern non-IE browsers, we can support both forward and backward
	 * selections.
	 *
	 * Note: IE10+ supports the Selection object, but it does not support
	 * the `extend` method, which means that even in modern IE, it's not possible
	 * to programatically create a backward selection. Thus, for all IE
	 * versions, we use the old IE API to create our selections.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
	function setModernOffsets(node, offsets) {
	  if (!window.getSelection) {
	    return;
	  }

	  var selection = window.getSelection();
	  var length = node[getTextContentAccessor()].length;
	  var start = Math.min(offsets.start, length);
	  var end = typeof offsets.end === 'undefined' ?
	            start : Math.min(offsets.end, length);

	  // IE 11 uses modern selection, but doesn't support the extend method.
	  // Flip backward selections, so we can set with a single range.
	  if (!selection.extend && start > end) {
	    var temp = end;
	    end = start;
	    start = temp;
	  }

	  var startMarker = getNodeForCharacterOffset(node, start);
	  var endMarker = getNodeForCharacterOffset(node, end);

	  if (startMarker && endMarker) {
	    var range = document.createRange();
	    range.setStart(startMarker.node, startMarker.offset);
	    selection.removeAllRanges();

	    if (start > end) {
	      selection.addRange(range);
	      selection.extend(endMarker.node, endMarker.offset);
	    } else {
	      range.setEnd(endMarker.node, endMarker.offset);
	      selection.addRange(range);
	    }
	  }
	}

	var useIEOffsets = (
	  ExecutionEnvironment.canUseDOM &&
	  'selection' in document &&
	  !('getSelection' in window)
	);

	var ReactDOMSelection = {
	  /**
	   * @param {DOMElement} node
	   */
	  getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,

	  /**
	   * @param {DOMElement|DOMTextNode} node
	   * @param {object} offsets
	   */
	  setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
	};

	module.exports = ReactDOMSelection;

	},{"128":128,"130":130,"21":21}],51:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMTextComponent
	 * @typechecks static-only
	 */

	'use strict';

	var DOMPropertyOperations = _dereq_(11);
	var ReactComponentBrowserEnvironment =
	  _dereq_(35);
	var ReactDOMComponent = _dereq_(42);

	var assign = _dereq_(27);
	var escapeTextContentForBrowser = _dereq_(116);

	/**
	 * Text nodes violate a couple assumptions that React makes about components:
	 *
	 *  - When mounting text into the DOM, adjacent text nodes are merged.
	 *  - Text nodes cannot be assigned a React root ID.
	 *
	 * This component is used to wrap strings in elements so that they can undergo
	 * the same reconciliation that is applied to elements.
	 *
	 * TODO: Investigate representing React components in the DOM with text nodes.
	 *
	 * @class ReactDOMTextComponent
	 * @extends ReactComponent
	 * @internal
	 */
	var ReactDOMTextComponent = function(props) {
	  // This constructor and its argument is currently used by mocks.
	};

	assign(ReactDOMTextComponent.prototype, {

	  /**
	   * @param {ReactText} text
	   * @internal
	   */
	  construct: function(text) {
	    // TODO: This is really a ReactText (ReactNode), not a ReactElement
	    this._currentElement = text;
	    this._stringText = '' + text;

	    // Properties
	    this._rootNodeID = null;
	    this._mountIndex = 0;
	  },

	  /**
	   * Creates the markup for this text node. This node is not intended to have
	   * any features besides containing text content.
	   *
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {string} Markup for this text node.
	   * @internal
	   */
	  mountComponent: function(rootID, transaction, context) {
	    this._rootNodeID = rootID;
	    var escapedText = escapeTextContentForBrowser(this._stringText);

	    if (transaction.renderToStaticMarkup) {
	      // Normally we'd wrap this in a `span` for the reasons stated above, but
	      // since this is a situation where React won't take over (static pages),
	      // we can simply return the text as it is.
	      return escapedText;
	    }

	    return (
	      '<span ' + DOMPropertyOperations.createMarkupForID(rootID) + '>' +
	        escapedText +
	      '</span>'
	    );
	  },

	  /**
	   * Updates this component by updating the text content.
	   *
	   * @param {ReactText} nextText The next text content
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  receiveComponent: function(nextText, transaction) {
	    if (nextText !== this._currentElement) {
	      this._currentElement = nextText;
	      var nextStringText = '' + nextText;
	      if (nextStringText !== this._stringText) {
	        // TODO: Save this as pending props and use performUpdateIfNecessary
	        // and/or updateComponent to do the actual update for consistency with
	        // other component types?
	        this._stringText = nextStringText;
	        ReactDOMComponent.BackendIDOperations.updateTextContentByID(
	          this._rootNodeID,
	          nextStringText
	        );
	      }
	    }
	  },

	  unmountComponent: function() {
	    ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
	  }

	});

	module.exports = ReactDOMTextComponent;

	},{"11":11,"116":116,"27":27,"35":35,"42":42}],52:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMTextarea
	 */

	'use strict';

	var AutoFocusMixin = _dereq_(2);
	var DOMPropertyOperations = _dereq_(11);
	var LinkedValueUtils = _dereq_(24);
	var ReactBrowserComponentMixin = _dereq_(29);
	var ReactClass = _dereq_(33);
	var ReactElement = _dereq_(57);
	var ReactUpdates = _dereq_(87);

	var assign = _dereq_(27);
	var invariant = _dereq_(135);

	var warning = _dereq_(154);

	var textarea = ReactElement.createFactory('textarea');

	function forceUpdateIfMounted() {
	  /*jshint validthis:true */
	  if (this.isMounted()) {
	    this.forceUpdate();
	  }
	}

	/**
	 * Implements a <textarea> native component that allows setting `value`, and
	 * `defaultValue`. This differs from the traditional DOM API because value is
	 * usually set as PCDATA children.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that affect the
	 * value will trigger updates to the element.
	 *
	 * If `value` is supplied (and not null/undefined), the rendered element will
	 * not trigger updates to the element. Instead, the `value` prop must change in
	 * order for the rendered element to be updated.
	 *
	 * The rendered element will be initialized with an empty value, the prop
	 * `defaultValue` if specified, or the children content (deprecated).
	 */
	var ReactDOMTextarea = ReactClass.createClass({
	  displayName: 'ReactDOMTextarea',
	  tagName: 'TEXTAREA',

	  mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],

	  getInitialState: function() {
	    var defaultValue = this.props.defaultValue;
	    // TODO (yungsters): Remove support for children content in <textarea>.
	    var children = this.props.children;
	    if (children != null) {
	      if ("production" !== "development") {
	        ("production" !== "development" ? warning(
	          false,
	          'Use the `defaultValue` or `value` props instead of setting ' +
	          'children on <textarea>.'
	        ) : null);
	      }
	      ("production" !== "development" ? invariant(
	        defaultValue == null,
	        'If you supply `defaultValue` on a <textarea>, do not pass children.'
	      ) : invariant(defaultValue == null));
	      if (Array.isArray(children)) {
	        ("production" !== "development" ? invariant(
	          children.length <= 1,
	          '<textarea> can only have at most one child.'
	        ) : invariant(children.length <= 1));
	        children = children[0];
	      }

	      defaultValue = '' + children;
	    }
	    if (defaultValue == null) {
	      defaultValue = '';
	    }
	    var value = LinkedValueUtils.getValue(this);
	    return {
	      // We save the initial value so that `ReactDOMComponent` doesn't update
	      // `textContent` (unnecessary since we update value).
	      // The initial value can be a boolean or object so that's why it's
	      // forced to be a string.
	      initialValue: '' + (value != null ? value : defaultValue)
	    };
	  },

	  render: function() {
	    // Clone `this.props` so we don't mutate the input.
	    var props = assign({}, this.props);

	    ("production" !== "development" ? invariant(
	      props.dangerouslySetInnerHTML == null,
	      '`dangerouslySetInnerHTML` does not make sense on <textarea>.'
	    ) : invariant(props.dangerouslySetInnerHTML == null));

	    props.defaultValue = null;
	    props.value = null;
	    props.onChange = this._handleChange;

	    // Always set children to the same thing. In IE9, the selection range will
	    // get reset if `textContent` is mutated.
	    return textarea(props, this.state.initialValue);
	  },

	  componentDidUpdate: function(prevProps, prevState, prevContext) {
	    var value = LinkedValueUtils.getValue(this);
	    if (value != null) {
	      var rootNode = this.getDOMNode();
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      DOMPropertyOperations.setValueForProperty(rootNode, 'value', '' + value);
	    }
	  },

	  _handleChange: function(event) {
	    var returnValue;
	    var onChange = LinkedValueUtils.getOnChange(this);
	    if (onChange) {
	      returnValue = onChange.call(this, event);
	    }
	    ReactUpdates.asap(forceUpdateIfMounted, this);
	    return returnValue;
	  }

	});

	module.exports = ReactDOMTextarea;

	},{"11":11,"135":135,"154":154,"2":2,"24":24,"27":27,"29":29,"33":33,"57":57,"87":87}],53:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultBatchingStrategy
	 */

	'use strict';

	var ReactUpdates = _dereq_(87);
	var Transaction = _dereq_(103);

	var assign = _dereq_(27);
	var emptyFunction = _dereq_(114);

	var RESET_BATCHED_UPDATES = {
	  initialize: emptyFunction,
	  close: function() {
	    ReactDefaultBatchingStrategy.isBatchingUpdates = false;
	  }
	};

	var FLUSH_BATCHED_UPDATES = {
	  initialize: emptyFunction,
	  close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
	};

	var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];

	function ReactDefaultBatchingStrategyTransaction() {
	  this.reinitializeTransaction();
	}

	assign(
	  ReactDefaultBatchingStrategyTransaction.prototype,
	  Transaction.Mixin,
	  {
	    getTransactionWrappers: function() {
	      return TRANSACTION_WRAPPERS;
	    }
	  }
	);

	var transaction = new ReactDefaultBatchingStrategyTransaction();

	var ReactDefaultBatchingStrategy = {
	  isBatchingUpdates: false,

	  /**
	   * Call the provided function in a context within which calls to `setState`
	   * and friends are batched such that components aren't updated unnecessarily.
	   */
	  batchedUpdates: function(callback, a, b, c, d) {
	    var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;

	    ReactDefaultBatchingStrategy.isBatchingUpdates = true;

	    // The code is written this way to avoid extra allocations
	    if (alreadyBatchingUpdates) {
	      callback(a, b, c, d);
	    } else {
	      transaction.perform(callback, null, a, b, c, d);
	    }
	  }
	};

	module.exports = ReactDefaultBatchingStrategy;

	},{"103":103,"114":114,"27":27,"87":87}],54:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultInjection
	 */

	'use strict';

	var BeforeInputEventPlugin = _dereq_(3);
	var ChangeEventPlugin = _dereq_(7);
	var ClientReactRootIndex = _dereq_(8);
	var DefaultEventPluginOrder = _dereq_(13);
	var EnterLeaveEventPlugin = _dereq_(14);
	var ExecutionEnvironment = _dereq_(21);
	var HTMLDOMPropertyConfig = _dereq_(23);
	var MobileSafariClickEventPlugin = _dereq_(26);
	var ReactBrowserComponentMixin = _dereq_(29);
	var ReactClass = _dereq_(33);
	var ReactComponentBrowserEnvironment =
	  _dereq_(35);
	var ReactDefaultBatchingStrategy = _dereq_(53);
	var ReactDOMComponent = _dereq_(42);
	var ReactDOMButton = _dereq_(41);
	var ReactDOMForm = _dereq_(43);
	var ReactDOMImg = _dereq_(46);
	var ReactDOMIDOperations = _dereq_(44);
	var ReactDOMIframe = _dereq_(45);
	var ReactDOMInput = _dereq_(47);
	var ReactDOMOption = _dereq_(48);
	var ReactDOMSelect = _dereq_(49);
	var ReactDOMTextarea = _dereq_(52);
	var ReactDOMTextComponent = _dereq_(51);
	var ReactElement = _dereq_(57);
	var ReactEventListener = _dereq_(62);
	var ReactInjection = _dereq_(64);
	var ReactInstanceHandles = _dereq_(66);
	var ReactMount = _dereq_(70);
	var ReactReconcileTransaction = _dereq_(80);
	var SelectEventPlugin = _dereq_(89);
	var ServerReactRootIndex = _dereq_(90);
	var SimpleEventPlugin = _dereq_(91);
	var SVGDOMPropertyConfig = _dereq_(88);

	var createFullPageComponent = _dereq_(111);

	function autoGenerateWrapperClass(type) {
	  return ReactClass.createClass({
	    tagName: type.toUpperCase(),
	    render: function() {
	      return new ReactElement(
	        type,
	        null,
	        null,
	        null,
	        null,
	        this.props
	      );
	    }
	  });
	}

	function inject() {
	  ReactInjection.EventEmitter.injectReactEventListener(
	    ReactEventListener
	  );

	  /**
	   * Inject modules for resolving DOM hierarchy and plugin ordering.
	   */
	  ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
	  ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles);
	  ReactInjection.EventPluginHub.injectMount(ReactMount);

	  /**
	   * Some important event plugins included by default (without having to require
	   * them).
	   */
	  ReactInjection.EventPluginHub.injectEventPluginsByName({
	    SimpleEventPlugin: SimpleEventPlugin,
	    EnterLeaveEventPlugin: EnterLeaveEventPlugin,
	    ChangeEventPlugin: ChangeEventPlugin,
	    MobileSafariClickEventPlugin: MobileSafariClickEventPlugin,
	    SelectEventPlugin: SelectEventPlugin,
	    BeforeInputEventPlugin: BeforeInputEventPlugin
	  });

	  ReactInjection.NativeComponent.injectGenericComponentClass(
	    ReactDOMComponent
	  );

	  ReactInjection.NativeComponent.injectTextComponentClass(
	    ReactDOMTextComponent
	  );

	  ReactInjection.NativeComponent.injectAutoWrapper(
	    autoGenerateWrapperClass
	  );

	  // This needs to happen before createFullPageComponent() otherwise the mixin
	  // won't be included.
	  ReactInjection.Class.injectMixin(ReactBrowserComponentMixin);

	  ReactInjection.NativeComponent.injectComponentClasses({
	    'button': ReactDOMButton,
	    'form': ReactDOMForm,
	    'iframe': ReactDOMIframe,
	    'img': ReactDOMImg,
	    'input': ReactDOMInput,
	    'option': ReactDOMOption,
	    'select': ReactDOMSelect,
	    'textarea': ReactDOMTextarea,

	    'html': createFullPageComponent('html'),
	    'head': createFullPageComponent('head'),
	    'body': createFullPageComponent('body')
	  });

	  ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
	  ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);

	  ReactInjection.EmptyComponent.injectEmptyComponent('noscript');

	  ReactInjection.Updates.injectReconcileTransaction(
	    ReactReconcileTransaction
	  );
	  ReactInjection.Updates.injectBatchingStrategy(
	    ReactDefaultBatchingStrategy
	  );

	  ReactInjection.RootIndex.injectCreateReactRootIndex(
	    ExecutionEnvironment.canUseDOM ?
	      ClientReactRootIndex.createReactRootIndex :
	      ServerReactRootIndex.createReactRootIndex
	  );

	  ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);
	  ReactInjection.DOMComponent.injectIDOperations(ReactDOMIDOperations);

	  if ("production" !== "development") {
	    var url = (ExecutionEnvironment.canUseDOM && window.location.href) || '';
	    if ((/[?&]react_perf\b/).test(url)) {
	      var ReactDefaultPerf = _dereq_(55);
	      ReactDefaultPerf.start();
	    }
	  }
	}

	module.exports = {
	  inject: inject
	};

	},{"111":111,"13":13,"14":14,"21":21,"23":23,"26":26,"29":29,"3":3,"33":33,"35":35,"41":41,"42":42,"43":43,"44":44,"45":45,"46":46,"47":47,"48":48,"49":49,"51":51,"52":52,"53":53,"55":55,"57":57,"62":62,"64":64,"66":66,"7":7,"70":70,"8":8,"80":80,"88":88,"89":89,"90":90,"91":91}],55:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultPerf
	 * @typechecks static-only
	 */

	'use strict';

	var DOMProperty = _dereq_(10);
	var ReactDefaultPerfAnalysis = _dereq_(56);
	var ReactMount = _dereq_(70);
	var ReactPerf = _dereq_(75);

	var performanceNow = _dereq_(146);

	function roundFloat(val) {
	  return Math.floor(val * 100) / 100;
	}

	function addValue(obj, key, val) {
	  obj[key] = (obj[key] || 0) + val;
	}

	var ReactDefaultPerf = {
	  _allMeasurements: [], // last item in the list is the current one
	  _mountStack: [0],
	  _injected: false,

	  start: function() {
	    if (!ReactDefaultPerf._injected) {
	      ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);
	    }

	    ReactDefaultPerf._allMeasurements.length = 0;
	    ReactPerf.enableMeasure = true;
	  },

	  stop: function() {
	    ReactPerf.enableMeasure = false;
	  },

	  getLastMeasurements: function() {
	    return ReactDefaultPerf._allMeasurements;
	  },

	  printExclusive: function(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);
	    console.table(summary.map(function(item) {
	      return {
	        'Component class name': item.componentName,
	        'Total inclusive time (ms)': roundFloat(item.inclusive),
	        'Exclusive mount time (ms)': roundFloat(item.exclusive),
	        'Exclusive render time (ms)': roundFloat(item.render),
	        'Mount time per instance (ms)': roundFloat(item.exclusive / item.count),
	        'Render time per instance (ms)': roundFloat(item.render / item.count),
	        'Instances': item.count
	      };
	    }));
	    // TODO: ReactDefaultPerfAnalysis.getTotalTime() does not return the correct
	    // number.
	  },

	  printInclusive: function(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);
	    console.table(summary.map(function(item) {
	      return {
	        'Owner > component': item.componentName,
	        'Inclusive time (ms)': roundFloat(item.time),
	        'Instances': item.count
	      };
	    }));
	    console.log(
	      'Total time:',
	      ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms'
	    );
	  },

	  getMeasurementsSummaryMap: function(measurements) {
	    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(
	      measurements,
	      true
	    );
	    return summary.map(function(item) {
	      return {
	        'Owner > component': item.componentName,
	        'Wasted time (ms)': item.time,
	        'Instances': item.count
	      };
	    });
	  },

	  printWasted: function(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    console.table(ReactDefaultPerf.getMeasurementsSummaryMap(measurements));
	    console.log(
	      'Total time:',
	      ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms'
	    );
	  },

	  printDOM: function(measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getDOMSummary(measurements);
	    console.table(summary.map(function(item) {
	      var result = {};
	      result[DOMProperty.ID_ATTRIBUTE_NAME] = item.id;
	      result['type'] = item.type;
	      result['args'] = JSON.stringify(item.args);
	      return result;
	    }));
	    console.log(
	      'Total time:',
	      ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms'
	    );
	  },

	  _recordWrite: function(id, fnName, totalTime, args) {
	    // TODO: totalTime isn't that useful since it doesn't count paints/reflows
	    var writes =
	      ReactDefaultPerf
	        ._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1]
	        .writes;
	    writes[id] = writes[id] || [];
	    writes[id].push({
	      type: fnName,
	      time: totalTime,
	      args: args
	    });
	  },

	  measure: function(moduleName, fnName, func) {
	    return function() {for (var args=[],$__0=0,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
	      var totalTime;
	      var rv;
	      var start;

	      if (fnName === '_renderNewRootComponent' ||
	          fnName === 'flushBatchedUpdates') {
	        // A "measurement" is a set of metrics recorded for each flush. We want
	        // to group the metrics for a given flush together so we can look at the
	        // components that rendered and the DOM operations that actually
	        // happened to determine the amount of "wasted work" performed.
	        ReactDefaultPerf._allMeasurements.push({
	          exclusive: {},
	          inclusive: {},
	          render: {},
	          counts: {},
	          writes: {},
	          displayNames: {},
	          totalTime: 0
	        });
	        start = performanceNow();
	        rv = func.apply(this, args);
	        ReactDefaultPerf._allMeasurements[
	          ReactDefaultPerf._allMeasurements.length - 1
	        ].totalTime = performanceNow() - start;
	        return rv;
	      } else if (fnName === '_mountImageIntoNode' ||
	          moduleName === 'ReactDOMIDOperations') {
	        start = performanceNow();
	        rv = func.apply(this, args);
	        totalTime = performanceNow() - start;

	        if (fnName === '_mountImageIntoNode') {
	          var mountID = ReactMount.getID(args[1]);
	          ReactDefaultPerf._recordWrite(mountID, fnName, totalTime, args[0]);
	        } else if (fnName === 'dangerouslyProcessChildrenUpdates') {
	          // special format
	          args[0].forEach(function(update) {
	            var writeArgs = {};
	            if (update.fromIndex !== null) {
	              writeArgs.fromIndex = update.fromIndex;
	            }
	            if (update.toIndex !== null) {
	              writeArgs.toIndex = update.toIndex;
	            }
	            if (update.textContent !== null) {
	              writeArgs.textContent = update.textContent;
	            }
	            if (update.markupIndex !== null) {
	              writeArgs.markup = args[1][update.markupIndex];
	            }
	            ReactDefaultPerf._recordWrite(
	              update.parentID,
	              update.type,
	              totalTime,
	              writeArgs
	            );
	          });
	        } else {
	          // basic format
	          ReactDefaultPerf._recordWrite(
	            args[0],
	            fnName,
	            totalTime,
	            Array.prototype.slice.call(args, 1)
	          );
	        }
	        return rv;
	      } else if (moduleName === 'ReactCompositeComponent' && (
	        (// TODO: receiveComponent()?
	        (fnName === 'mountComponent' ||
	        fnName === 'updateComponent' || fnName === '_renderValidatedComponent')))) {

	        if (typeof this._currentElement.type === 'string') {
	          return func.apply(this, args);
	        }

	        var rootNodeID = fnName === 'mountComponent' ?
	          args[0] :
	          this._rootNodeID;
	        var isRender = fnName === '_renderValidatedComponent';
	        var isMount = fnName === 'mountComponent';

	        var mountStack = ReactDefaultPerf._mountStack;
	        var entry = ReactDefaultPerf._allMeasurements[
	          ReactDefaultPerf._allMeasurements.length - 1
	        ];

	        if (isRender) {
	          addValue(entry.counts, rootNodeID, 1);
	        } else if (isMount) {
	          mountStack.push(0);
	        }

	        start = performanceNow();
	        rv = func.apply(this, args);
	        totalTime = performanceNow() - start;

	        if (isRender) {
	          addValue(entry.render, rootNodeID, totalTime);
	        } else if (isMount) {
	          var subMountTime = mountStack.pop();
	          mountStack[mountStack.length - 1] += totalTime;
	          addValue(entry.exclusive, rootNodeID, totalTime - subMountTime);
	          addValue(entry.inclusive, rootNodeID, totalTime);
	        } else {
	          addValue(entry.inclusive, rootNodeID, totalTime);
	        }

	        entry.displayNames[rootNodeID] = {
	          current: this.getName(),
	          owner: this._currentElement._owner ?
	            this._currentElement._owner.getName() :
	            '<root>'
	        };

	        return rv;
	      } else {
	        return func.apply(this, args);
	      }
	    };
	  }
	};

	module.exports = ReactDefaultPerf;

	},{"10":10,"146":146,"56":56,"70":70,"75":75}],56:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultPerfAnalysis
	 */

	var assign = _dereq_(27);

	// Don't try to save users less than 1.2ms (a number I made up)
	var DONT_CARE_THRESHOLD = 1.2;
	var DOM_OPERATION_TYPES = {
	  '_mountImageIntoNode': 'set innerHTML',
	  INSERT_MARKUP: 'set innerHTML',
	  MOVE_EXISTING: 'move',
	  REMOVE_NODE: 'remove',
	  TEXT_CONTENT: 'set textContent',
	  'updatePropertyByID': 'update attribute',
	  'deletePropertyByID': 'delete attribute',
	  'updateStylesByID': 'update styles',
	  'updateInnerHTMLByID': 'set innerHTML',
	  'dangerouslyReplaceNodeWithMarkupByID': 'replace'
	};

	function getTotalTime(measurements) {
	  // TODO: return number of DOM ops? could be misleading.
	  // TODO: measure dropped frames after reconcile?
	  // TODO: log total time of each reconcile and the top-level component
	  // class that triggered it.
	  var totalTime = 0;
	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    totalTime += measurement.totalTime;
	  }
	  return totalTime;
	}

	function getDOMSummary(measurements) {
	  var items = [];
	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var id;

	    for (id in measurement.writes) {
	      measurement.writes[id].forEach(function(write) {
	        items.push({
	          id: id,
	          type: DOM_OPERATION_TYPES[write.type] || write.type,
	          args: write.args
	        });
	      });
	    }
	  }
	  return items;
	}

	function getExclusiveSummary(measurements) {
	  var candidates = {};
	  var displayName;

	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var allIDs = assign(
	      {},
	      measurement.exclusive,
	      measurement.inclusive
	    );

	    for (var id in allIDs) {
	      displayName = measurement.displayNames[id].current;

	      candidates[displayName] = candidates[displayName] || {
	        componentName: displayName,
	        inclusive: 0,
	        exclusive: 0,
	        render: 0,
	        count: 0
	      };
	      if (measurement.render[id]) {
	        candidates[displayName].render += measurement.render[id];
	      }
	      if (measurement.exclusive[id]) {
	        candidates[displayName].exclusive += measurement.exclusive[id];
	      }
	      if (measurement.inclusive[id]) {
	        candidates[displayName].inclusive += measurement.inclusive[id];
	      }
	      if (measurement.counts[id]) {
	        candidates[displayName].count += measurement.counts[id];
	      }
	    }
	  }

	  // Now make a sorted array with the results.
	  var arr = [];
	  for (displayName in candidates) {
	    if (candidates[displayName].exclusive >= DONT_CARE_THRESHOLD) {
	      arr.push(candidates[displayName]);
	    }
	  }

	  arr.sort(function(a, b) {
	    return b.exclusive - a.exclusive;
	  });

	  return arr;
	}

	function getInclusiveSummary(measurements, onlyClean) {
	  var candidates = {};
	  var inclusiveKey;

	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var allIDs = assign(
	      {},
	      measurement.exclusive,
	      measurement.inclusive
	    );
	    var cleanComponents;

	    if (onlyClean) {
	      cleanComponents = getUnchangedComponents(measurement);
	    }

	    for (var id in allIDs) {
	      if (onlyClean && !cleanComponents[id]) {
	        continue;
	      }

	      var displayName = measurement.displayNames[id];

	      // Inclusive time is not useful for many components without knowing where
	      // they are instantiated. So we aggregate inclusive time with both the
	      // owner and current displayName as the key.
	      inclusiveKey = displayName.owner + ' > ' + displayName.current;

	      candidates[inclusiveKey] = candidates[inclusiveKey] || {
	        componentName: inclusiveKey,
	        time: 0,
	        count: 0
	      };

	      if (measurement.inclusive[id]) {
	        candidates[inclusiveKey].time += measurement.inclusive[id];
	      }
	      if (measurement.counts[id]) {
	        candidates[inclusiveKey].count += measurement.counts[id];
	      }
	    }
	  }

	  // Now make a sorted array with the results.
	  var arr = [];
	  for (inclusiveKey in candidates) {
	    if (candidates[inclusiveKey].time >= DONT_CARE_THRESHOLD) {
	      arr.push(candidates[inclusiveKey]);
	    }
	  }

	  arr.sort(function(a, b) {
	    return b.time - a.time;
	  });

	  return arr;
	}

	function getUnchangedComponents(measurement) {
	  // For a given reconcile, look at which components did not actually
	  // render anything to the DOM and return a mapping of their ID to
	  // the amount of time it took to render the entire subtree.
	  var cleanComponents = {};
	  var dirtyLeafIDs = Object.keys(measurement.writes);
	  var allIDs = assign({}, measurement.exclusive, measurement.inclusive);

	  for (var id in allIDs) {
	    var isDirty = false;
	    // For each component that rendered, see if a component that triggered
	    // a DOM op is in its subtree.
	    for (var i = 0; i < dirtyLeafIDs.length; i++) {
	      if (dirtyLeafIDs[i].indexOf(id) === 0) {
	        isDirty = true;
	        break;
	      }
	    }
	    if (!isDirty && measurement.counts[id] > 0) {
	      cleanComponents[id] = true;
	    }
	  }
	  return cleanComponents;
	}

	var ReactDefaultPerfAnalysis = {
	  getExclusiveSummary: getExclusiveSummary,
	  getInclusiveSummary: getInclusiveSummary,
	  getDOMSummary: getDOMSummary,
	  getTotalTime: getTotalTime
	};

	module.exports = ReactDefaultPerfAnalysis;

	},{"27":27}],57:[function(_dereq_,module,exports){
	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElement
	 */

	'use strict';

	var ReactContext = _dereq_(38);
	var ReactCurrentOwner = _dereq_(39);

	var assign = _dereq_(27);
	var warning = _dereq_(154);

	var RESERVED_PROPS = {
	  key: true,
	  ref: true
	};

	/**
	 * Warn for mutations.
	 *
	 * @internal
	 * @param {object} object
	 * @param {string} key
	 */
	function defineWarningProperty(object, key) {
	  Object.defineProperty(object, key, {

	    configurable: false,
	    enumerable: true,

	    get: function() {
	      if (!this._store) {
	        return null;
	      }
	      return this._store[key];
	    },

	    set: function(value) {
	      ("production" !== "development" ? warning(
	        false,
	        'Don\'t set the %s property of the React element. Instead, ' +
	        'specify the correct value when initially creating the element.',
	        key
	      ) : null);
	      this._store[key] = value;
	    }

	  });
	}

	/**
	 * This is updated to true if the membrane is successfully created.
	 */
	var useMutationMembrane = false;

	/**
	 * Warn for mutations.
	 *
	 * @internal
	 * @param {object} element
	 */
	function defineMutationMembrane(prototype) {
	  try {
	    var pseudoFrozenProperties = {
	      props: true
	    };
	    for (var key in pseudoFrozenProperties) {
	      defineWarningProperty(prototype, key);
	    }
	    useMutationMembrane = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}

	/**
	 * Base constructor for all React elements. This is only used to make this
	 * work with a dynamic instanceof check. Nothing should live on this prototype.
	 *
	 * @param {*} type
	 * @param {string|object} ref
	 * @param {*} key
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function(type, key, ref, owner, context, props) {
	  // Built-in properties that belong on the element
	  this.type = type;
	  this.key = key;
	  this.ref = ref;

	  // Record the component responsible for creating this element.
	  this._owner = owner;

	  // TODO: Deprecate withContext, and then the context becomes accessible
	  // through the owner.
	  this._context = context;

	  if ("production" !== "development") {
	    // The validation flag and props are currently mutative. We put them on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    this._store = {props: props, originalProps: assign({}, props)};

	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    try {
	      Object.defineProperty(this._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true
	      });
	    } catch (x) {
	    }
	    this._store.validated = false;

	    // We're not allowed to set props directly on the object so we early
	    // return and rely on the prototype membrane to forward to the backing
	    // store.
	    if (useMutationMembrane) {
	      Object.freeze(this);
	      return;
	    }
	  }

	  this.props = props;
	};

	// We intentionally don't expose the function on the constructor property.
	// ReactElement should be indistinguishable from a plain object.
	ReactElement.prototype = {
	  _isReactElement: true
	};

	if ("production" !== "development") {
	  defineMutationMembrane(ReactElement.prototype);
	}

	ReactElement.createElement = function(type, config, children) {
	  var propName;

	  // Reserved names are extracted
	  var props = {};

	  var key = null;
	  var ref = null;

	  if (config != null) {
	    ref = config.ref === undefined ? null : config.ref;
	    key = config.key === undefined ? null : '' + config.key;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) &&
	          !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (typeof props[propName] === 'undefined') {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }

	  return new ReactElement(
	    type,
	    key,
	    ref,
	    ReactCurrentOwner.current,
	    ReactContext.current,
	    props
	  );
	};

	ReactElement.createFactory = function(type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. <Foo />.type === Foo.type.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};

	ReactElement.cloneAndReplaceProps = function(oldElement, newProps) {
	  var newElement = new ReactElement(
	    oldElement.type,
	    oldElement.key,
	    oldElement.ref,
	    oldElement._owner,
	    oldElement._context,
	    newProps
	  );

	  if ("production" !== "development") {
	    // If the key on the original is valid, then the clone is valid
	    newElement._store.validated = oldElement._store.validated;
	  }
	  return newElement;
	};

	ReactElement.cloneElement = function(element, config, children) {
	  var propName;

	  // Original props are copied
	  var props = assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config != null) {
	    if (config.ref !== undefined) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (config.key !== undefined) {
	      key = '' + config.key;
	    }
	    // Remaining properties override existing props
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) &&
	          !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }

	  return new ReactElement(
	    element.type,
	    key,
	    ref,
	    owner,
	    element._context,
	    props
	  );
	};

	/**
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function(object) {
	  // ReactTestUtils is often used outside of beforeEach where as React is
	  // within it. This leads to two different instances of React on the same
	  // page. To identify a element from a different React instance we use
	  // a flag instead of an instanceof check.
	  var isElement = !!(object && object._isReactElement);
	  // if (isElement && !(object instanceof ReactElement)) {
	  // This is an indicator that you're using multiple versions of React at the
	  // same time. This will screw with ownership and stuff. Fix it, please.
	  // TODO: We could possibly warn here.
	  // }
	  return isElement;
	};

	module.exports = ReactElement;

	},{"154":154,"27":27,"38":38,"39":39}],58:[function(_dereq_,module,exports){
	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementValidator
	 */

	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */

	'use strict';

	var ReactElement = _dereq_(57);
	var ReactFragment = _dereq_(63);
	var ReactPropTypeLocations = _dereq_(77);
	var ReactPropTypeLocationNames = _dereq_(76);
	var ReactCurrentOwner = _dereq_(39);
	var ReactNativeComponent = _dereq_(73);

	var getIteratorFn = _dereq_(126);
	var invariant = _dereq_(135);
	var warning = _dereq_(154);

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};

	var loggedTypeFailures = {};

	var NUMERIC_PROPERTY_REGEX = /^\d+$/;

	/**
	 * Gets the instance's name for use in warnings.
	 *
	 * @internal
	 * @return {?string} Display name or undefined
	 */
	function getName(instance) {
	  var publicInstance = instance && instance.getPublicInstance();
	  if (!publicInstance) {
	    return undefined;
	  }
	  var constructor = publicInstance.constructor;
	  if (!constructor) {
	    return undefined;
	  }
	  return constructor.displayName || constructor.name || undefined;
	}

	/**
	 * Gets the current owner's displayName for use in warnings.
	 *
	 * @internal
	 * @return {?string} Display name or undefined
	 */
	function getCurrentOwnerDisplayName() {
	  var current = ReactCurrentOwner.current;
	  return (
	    current && getName(current) || undefined
	  );
	}

	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;

	  warnAndMonitorForKeyUse(
	    'Each child in an array or iterator should have a unique "key" prop.',
	    element,
	    parentType
	  );
	}

	/**
	 * Warn if the key is being defined as an object property but has an incorrect
	 * value.
	 *
	 * @internal
	 * @param {string} name Property name of the key.
	 * @param {ReactElement} element Component that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validatePropertyKey(name, element, parentType) {
	  if (!NUMERIC_PROPERTY_REGEX.test(name)) {
	    return;
	  }
	  warnAndMonitorForKeyUse(
	    'Child objects should have non-numeric keys so ordering is preserved.',
	    element,
	    parentType
	  );
	}

	/**
	 * Shared warning and monitoring code for the key warnings.
	 *
	 * @internal
	 * @param {string} message The base warning that gets output.
	 * @param {ReactElement} element Component that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function warnAndMonitorForKeyUse(message, element, parentType) {
	  var ownerName = getCurrentOwnerDisplayName();
	  var parentName = typeof parentType === 'string' ?
	    parentType : parentType.displayName || parentType.name;

	  var useName = ownerName || parentName;
	  var memoizer = ownerHasKeyUseWarning[message] || (
	    (ownerHasKeyUseWarning[message] = {})
	  );
	  if (memoizer.hasOwnProperty(useName)) {
	    return;
	  }
	  memoizer[useName] = true;

	  var parentOrOwnerAddendum =
	    ownerName ? (" Check the render method of " + ownerName + ".") :
	    parentName ? (" Check the React.render call using <" + parentName + ">.") :
	    '';

	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwnerAddendum = '';
	  if (element &&
	      element._owner &&
	      element._owner !== ReactCurrentOwner.current) {
	    // Name of the component that originally created this child.
	    var childOwnerName = getName(element._owner);

	    childOwnerAddendum = (" It was passed a child from " + childOwnerName + ".");
	  }

	  ("production" !== "development" ? warning(
	    false,
	    message + '%s%s See https://fb.me/react-warning-keys for more information.',
	    parentOrOwnerAddendum,
	    childOwnerAddendum
	  ) : null);
	}

	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    node._store.validated = true;
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    } else if (typeof node === 'object') {
	      var fragment = ReactFragment.extractIfFragment(node);
	      for (var key in fragment) {
	        if (fragment.hasOwnProperty(key)) {
	          validatePropertyKey(key, fragment[key], parentType);
	        }
	      }
	    }
	  }
	}

	/**
	 * Assert that the props are valid
	 *
	 * @param {string} componentName Name of the component for error messages.
	 * @param {object} propTypes Map of prop name to a ReactPropType
	 * @param {object} props
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @private
	 */
	function checkPropTypes(componentName, propTypes, props, location) {
	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        ("production" !== "development" ? invariant(
	          typeof propTypes[propName] === 'function',
	          '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	          'React.PropTypes.',
	          componentName || 'React class',
	          ReactPropTypeLocationNames[location],
	          propName
	        ) : invariant(typeof propTypes[propName] === 'function'));
	        error = propTypes[propName](props, propName, componentName, location);
	      } catch (ex) {
	        error = ex;
	      }
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;

	        var addendum = getDeclarationErrorAddendum(this);
	        ("production" !== "development" ? warning(false, 'Failed propType: %s%s', error.message, addendum) : null);
	      }
	    }
	  }
	}

	var warnedPropsMutations = {};

	/**
	 * Warn about mutating props when setting `propName` on `element`.
	 *
	 * @param {string} propName The string key within props that was set
	 * @param {ReactElement} element
	 */
	function warnForPropsMutation(propName, element) {
	  var type = element.type;
	  var elementName = typeof type === 'string' ? type : type.displayName;
	  var ownerName = element._owner ?
	    element._owner.getPublicInstance().constructor.displayName : null;

	  var warningKey = propName + '|' + elementName + '|' + ownerName;
	  if (warnedPropsMutations.hasOwnProperty(warningKey)) {
	    return;
	  }
	  warnedPropsMutations[warningKey] = true;

	  var elementInfo = '';
	  if (elementName) {
	    elementInfo = ' <' + elementName + ' />';
	  }
	  var ownerInfo = '';
	  if (ownerName) {
	    ownerInfo = ' The element was created by ' + ownerName + '.';
	  }

	  ("production" !== "development" ? warning(
	    false,
	    'Don\'t set .props.%s of the React component%s. Instead, specify the ' +
	    'correct value when initially creating the element or use ' +
	    'React.cloneElement to make a new element with updated props.%s',
	    propName,
	    elementInfo,
	    ownerInfo
	  ) : null);
	}

	// Inline Object.is polyfill
	function is(a, b) {
	  if (a !== a) {
	    // NaN
	    return b !== b;
	  }
	  if (a === 0 && b === 0) {
	    // +-0
	    return 1 / a === 1 / b;
	  }
	  return a === b;
	}

	/**
	 * Given an element, check if its props have been mutated since element
	 * creation (or the last call to this function). In particular, check if any
	 * new props have been added, which we can't directly catch by defining warning
	 * properties on the props object.
	 *
	 * @param {ReactElement} element
	 */
	function checkAndWarnForMutatedProps(element) {
	  if (!element._store) {
	    // Element was created using `new ReactElement` directly or with
	    // `ReactElement.createElement`; skip mutation checking
	    return;
	  }

	  var originalProps = element._store.originalProps;
	  var props = element.props;

	  for (var propName in props) {
	    if (props.hasOwnProperty(propName)) {
	      if (!originalProps.hasOwnProperty(propName) ||
	          !is(originalProps[propName], props[propName])) {
	        warnForPropsMutation(propName, element);

	        // Copy over the new value so that the two props objects match again
	        originalProps[propName] = props[propName];
	      }
	    }
	  }
	}

	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  if (element.type == null) {
	    // This has already warned. Don't throw.
	    return;
	  }
	  // Extract the component class from the element. Converts string types
	  // to a composite class which may have propTypes.
	  // TODO: Validating a string's propTypes is not decoupled from the
	  // rendering target which is problematic.
	  var componentClass = ReactNativeComponent.getComponentClassForElement(
	    element
	  );
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkPropTypes(
	      name,
	      componentClass.propTypes,
	      element.props,
	      ReactPropTypeLocations.prop
	    );
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    ("production" !== "development" ? warning(
	      componentClass.getDefaultProps.isReactClassApproved,
	      'getDefaultProps is only used on classic React.createClass ' +
	      'definitions. Use a static property named `defaultProps` instead.'
	    ) : null);
	  }
	}

	var ReactElementValidator = {

	  checkAndWarnForMutatedProps: checkAndWarnForMutatedProps,

	  createElement: function(type, props, children) {
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    ("production" !== "development" ? warning(
	      type != null,
	      'React.createElement: type should not be null or undefined. It should ' +
	        'be a string (for DOM elements) or a ReactClass (for composite ' +
	        'components).'
	    ) : null);

	    var element = ReactElement.createElement.apply(this, arguments);

	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }

	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], type);
	    }

	    validatePropTypes(element);

	    return element;
	  },

	  createFactory: function(type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(
	      null,
	      type
	    );
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;

	    if ("production" !== "development") {
	      try {
	        Object.defineProperty(
	          validatedFactory,
	          'type',
	          {
	            enumerable: false,
	            get: function() {
	              ("production" !== "development" ? warning(
	                false,
	                'Factory.type is deprecated. Access the class directly ' +
	                'before passing it to createFactory.'
	              ) : null);
	              Object.defineProperty(this, 'type', {
	                value: type
	              });
	              return type;
	            }
	          }
	        );
	      } catch (x) {
	        // IE will fail on defineProperty (es5-shim/sham too)
	      }
	    }


	    return validatedFactory;
	  },

	  cloneElement: function(element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }

	};

	module.exports = ReactElementValidator;

	},{"126":126,"135":135,"154":154,"39":39,"57":57,"63":63,"73":73,"76":76,"77":77}],59:[function(_dereq_,module,exports){
	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEmptyComponent
	 */

	'use strict';

	var ReactElement = _dereq_(57);
	var ReactInstanceMap = _dereq_(67);

	var invariant = _dereq_(135);

	var component;
	// This registry keeps track of the React IDs of the components that rendered to
	// `null` (in reality a placeholder such as `noscript`)
	var nullComponentIDsRegistry = {};

	var ReactEmptyComponentInjection = {
	  injectEmptyComponent: function(emptyComponent) {
	    component = ReactElement.createFactory(emptyComponent);
	  }
	};

	var ReactEmptyComponentType = function() {};
	ReactEmptyComponentType.prototype.componentDidMount = function() {
	  var internalInstance = ReactInstanceMap.get(this);
	  // TODO: Make sure we run these methods in the correct order, we shouldn't
	  // need this check. We're going to assume if we're here it means we ran
	  // componentWillUnmount already so there is no internal instance (it gets
	  // removed as part of the unmounting process).
	  if (!internalInstance) {
	    return;
	  }
	  registerNullComponentID(internalInstance._rootNodeID);
	};
	ReactEmptyComponentType.prototype.componentWillUnmount = function() {
	  var internalInstance = ReactInstanceMap.get(this);
	  // TODO: Get rid of this check. See TODO in componentDidMount.
	  if (!internalInstance) {
	    return;
	  }
	  deregisterNullComponentID(internalInstance._rootNodeID);
	};
	ReactEmptyComponentType.prototype.render = function() {
	  ("production" !== "development" ? invariant(
	    component,
	    'Trying to return null from a render, but no null placeholder component ' +
	    'was injected.'
	  ) : invariant(component));
	  return component();
	};

	var emptyElement = ReactElement.createElement(ReactEmptyComponentType);

	/**
	 * Mark the component as having rendered to null.
	 * @param {string} id Component's `_rootNodeID`.
	 */
	function registerNullComponentID(id) {
	  nullComponentIDsRegistry[id] = true;
	}

	/**
	 * Unmark the component as having rendered to null: it renders to something now.
	 * @param {string} id Component's `_rootNodeID`.
	 */
	function deregisterNullComponentID(id) {
	  delete nullComponentIDsRegistry[id];
	}

	/**
	 * @param {string} id Component's `_rootNodeID`.
	 * @return {boolean} True if the component is rendered to null.
	 */
	function isNullComponentID(id) {
	  return !!nullComponentIDsRegistry[id];
	}

	var ReactEmptyComponent = {
	  emptyElement: emptyElement,
	  injection: ReactEmptyComponentInjection,
	  isNullComponentID: isNullComponentID
	};

	module.exports = ReactEmptyComponent;

	},{"135":135,"57":57,"67":67}],60:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactErrorUtils
	 * @typechecks
	 */

	"use strict";

	var ReactErrorUtils = {
	  /**
	   * Creates a guarded version of a function. This is supposed to make debugging
	   * of event handlers easier. To aid debugging with the browser's debugger,
	   * this currently simply returns the original function.
	   *
	   * @param {function} func Function to be executed
	   * @param {string} name The name of the guard
	   * @return {function}
	   */
	  guard: function(func, name) {
	    return func;
	  }
	};

	module.exports = ReactErrorUtils;

	},{}],61:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEventEmitterMixin
	 */

	'use strict';

	var EventPluginHub = _dereq_(17);

	function runEventQueueInBatch(events) {
	  EventPluginHub.enqueueEvents(events);
	  EventPluginHub.processEventQueue();
	}

	var ReactEventEmitterMixin = {

	  /**
	   * Streams a fired top-level event to `EventPluginHub` where plugins have the
	   * opportunity to create `ReactEvent`s to be dispatched.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {object} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native environment event.
	   */
	  handleTopLevel: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    var events = EventPluginHub.extractEvents(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent
	    );

	    runEventQueueInBatch(events);
	  }
	};

	module.exports = ReactEventEmitterMixin;

	},{"17":17}],62:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEventListener
	 * @typechecks static-only
	 */

	'use strict';

	var EventListener = _dereq_(16);
	var ExecutionEnvironment = _dereq_(21);
	var PooledClass = _dereq_(28);
	var ReactInstanceHandles = _dereq_(66);
	var ReactMount = _dereq_(70);
	var ReactUpdates = _dereq_(87);

	var assign = _dereq_(27);
	var getEventTarget = _dereq_(125);
	var getUnboundedScrollPosition = _dereq_(131);

	/**
	 * Finds the parent React component of `node`.
	 *
	 * @param {*} node
	 * @return {?DOMEventTarget} Parent container, or `null` if the specified node
	 *                           is not nested.
	 */
	function findParent(node) {
	  // TODO: It may be a good idea to cache this to prevent unnecessary DOM
	  // traversal, but caching is difficult to do correctly without using a
	  // mutation observer to listen for all DOM changes.
	  var nodeID = ReactMount.getID(node);
	  var rootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);
	  var container = ReactMount.findReactContainerForID(rootID);
	  var parent = ReactMount.getFirstReactDOM(container);
	  return parent;
	}

	// Used to store ancestor hierarchy in top level callback
	function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
	  this.topLevelType = topLevelType;
	  this.nativeEvent = nativeEvent;
	  this.ancestors = [];
	}
	assign(TopLevelCallbackBookKeeping.prototype, {
	  destructor: function() {
	    this.topLevelType = null;
	    this.nativeEvent = null;
	    this.ancestors.length = 0;
	  }
	});
	PooledClass.addPoolingTo(
	  TopLevelCallbackBookKeeping,
	  PooledClass.twoArgumentPooler
	);

	function handleTopLevelImpl(bookKeeping) {
	  var topLevelTarget = ReactMount.getFirstReactDOM(
	    getEventTarget(bookKeeping.nativeEvent)
	  ) || window;

	  // Loop through the hierarchy, in case there's any nested components.
	  // It's important that we build the array of ancestors before calling any
	  // event handlers, because event handlers can modify the DOM, leading to
	  // inconsistencies with ReactMount's node cache. See #1105.
	  var ancestor = topLevelTarget;
	  while (ancestor) {
	    bookKeeping.ancestors.push(ancestor);
	    ancestor = findParent(ancestor);
	  }

	  for (var i = 0, l = bookKeeping.ancestors.length; i < l; i++) {
	    topLevelTarget = bookKeeping.ancestors[i];
	    var topLevelTargetID = ReactMount.getID(topLevelTarget) || '';
	    ReactEventListener._handleTopLevel(
	      bookKeeping.topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      bookKeeping.nativeEvent
	    );
	  }
	}

	function scrollValueMonitor(cb) {
	  var scrollPosition = getUnboundedScrollPosition(window);
	  cb(scrollPosition);
	}

	var ReactEventListener = {
	  _enabled: true,
	  _handleTopLevel: null,

	  WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,

	  setHandleTopLevel: function(handleTopLevel) {
	    ReactEventListener._handleTopLevel = handleTopLevel;
	  },

	  setEnabled: function(enabled) {
	    ReactEventListener._enabled = !!enabled;
	  },

	  isEnabled: function() {
	    return ReactEventListener._enabled;
	  },


	  /**
	   * Traps top-level events by using event bubbling.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} handle Element on which to attach listener.
	   * @return {object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
	    var element = handle;
	    if (!element) {
	      return null;
	    }
	    return EventListener.listen(
	      element,
	      handlerBaseName,
	      ReactEventListener.dispatchEvent.bind(null, topLevelType)
	    );
	  },

	  /**
	   * Traps a top-level event by using event capturing.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} handle Element on which to attach listener.
	   * @return {object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
	    var element = handle;
	    if (!element) {
	      return null;
	    }
	    return EventListener.capture(
	      element,
	      handlerBaseName,
	      ReactEventListener.dispatchEvent.bind(null, topLevelType)
	    );
	  },

	  monitorScrollValue: function(refresh) {
	    var callback = scrollValueMonitor.bind(null, refresh);
	    EventListener.listen(window, 'scroll', callback);
	  },

	  dispatchEvent: function(topLevelType, nativeEvent) {
	    if (!ReactEventListener._enabled) {
	      return;
	    }

	    var bookKeeping = TopLevelCallbackBookKeeping.getPooled(
	      topLevelType,
	      nativeEvent
	    );
	    try {
	      // Event queue being processed in the same cycle allows
	      // `preventDefault`.
	      ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
	    } finally {
	      TopLevelCallbackBookKeeping.release(bookKeeping);
	    }
	  }
	};

	module.exports = ReactEventListener;

	},{"125":125,"131":131,"16":16,"21":21,"27":27,"28":28,"66":66,"70":70,"87":87}],63:[function(_dereq_,module,exports){
	/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule ReactFragment
	*/

	'use strict';

	var ReactElement = _dereq_(57);

	var warning = _dereq_(154);

	/**
	 * We used to allow keyed objects to serve as a collection of ReactElements,
	 * or nested sets. This allowed us a way to explicitly key a set a fragment of
	 * components. This is now being replaced with an opaque data structure.
	 * The upgrade path is to call React.addons.createFragment({ key: value }) to
	 * create a keyed fragment. The resulting data structure is opaque, for now.
	 */

	if ("production" !== "development") {
	  var fragmentKey = '_reactFragment';
	  var didWarnKey = '_reactDidWarn';
	  var canWarnForReactFragment = false;

	  try {
	    // Feature test. Don't even try to issue this warning if we can't use
	    // enumerable: false.

	    var dummy = function() {
	      return 1;
	    };

	    Object.defineProperty(
	      {},
	      fragmentKey,
	      {enumerable: false, value: true}
	    );

	    Object.defineProperty(
	      {},
	      'key',
	      {enumerable: true, get: dummy}
	    );

	    canWarnForReactFragment = true;
	  } catch (x) { }

	  var proxyPropertyAccessWithWarning = function(obj, key) {
	    Object.defineProperty(obj, key, {
	      enumerable: true,
	      get: function() {
	        ("production" !== "development" ? warning(
	          this[didWarnKey],
	          'A ReactFragment is an opaque type. Accessing any of its ' +
	          'properties is deprecated. Pass it to one of the React.Children ' +
	          'helpers.'
	        ) : null);
	        this[didWarnKey] = true;
	        return this[fragmentKey][key];
	      },
	      set: function(value) {
	        ("production" !== "development" ? warning(
	          this[didWarnKey],
	          'A ReactFragment is an immutable opaque type. Mutating its ' +
	          'properties is deprecated.'
	        ) : null);
	        this[didWarnKey] = true;
	        this[fragmentKey][key] = value;
	      }
	    });
	  };

	  var issuedWarnings = {};

	  var didWarnForFragment = function(fragment) {
	    // We use the keys and the type of the value as a heuristic to dedupe the
	    // warning to avoid spamming too much.
	    var fragmentCacheKey = '';
	    for (var key in fragment) {
	      fragmentCacheKey += key + ':' + (typeof fragment[key]) + ',';
	    }
	    var alreadyWarnedOnce = !!issuedWarnings[fragmentCacheKey];
	    issuedWarnings[fragmentCacheKey] = true;
	    return alreadyWarnedOnce;
	  };
	}

	var ReactFragment = {
	  // Wrap a keyed object in an opaque proxy that warns you if you access any
	  // of its properties.
	  create: function(object) {
	    if ("production" !== "development") {
	      if (typeof object !== 'object' || !object || Array.isArray(object)) {
	        ("production" !== "development" ? warning(
	          false,
	          'React.addons.createFragment only accepts a single object.',
	          object
	        ) : null);
	        return object;
	      }
	      if (ReactElement.isValidElement(object)) {
	        ("production" !== "development" ? warning(
	          false,
	          'React.addons.createFragment does not accept a ReactElement ' +
	          'without a wrapper object.'
	        ) : null);
	        return object;
	      }
	      if (canWarnForReactFragment) {
	        var proxy = {};
	        Object.defineProperty(proxy, fragmentKey, {
	          enumerable: false,
	          value: object
	        });
	        Object.defineProperty(proxy, didWarnKey, {
	          writable: true,
	          enumerable: false,
	          value: false
	        });
	        for (var key in object) {
	          proxyPropertyAccessWithWarning(proxy, key);
	        }
	        Object.preventExtensions(proxy);
	        return proxy;
	      }
	    }
	    return object;
	  },
	  // Extract the original keyed object from the fragment opaque type. Warn if
	  // a plain object is passed here.
	  extract: function(fragment) {
	    if ("production" !== "development") {
	      if (canWarnForReactFragment) {
	        if (!fragment[fragmentKey]) {
	          ("production" !== "development" ? warning(
	            didWarnForFragment(fragment),
	            'Any use of a keyed object should be wrapped in ' +
	            'React.addons.createFragment(object) before being passed as a ' +
	            'child.'
	          ) : null);
	          return fragment;
	        }
	        return fragment[fragmentKey];
	      }
	    }
	    return fragment;
	  },
	  // Check if this is a fragment and if so, extract the keyed object. If it
	  // is a fragment-like object, warn that it should be wrapped. Ignore if we
	  // can't determine what kind of object this is.
	  extractIfFragment: function(fragment) {
	    if ("production" !== "development") {
	      if (canWarnForReactFragment) {
	        // If it is the opaque type, return the keyed object.
	        if (fragment[fragmentKey]) {
	          return fragment[fragmentKey];
	        }
	        // Otherwise, check each property if it has an element, if it does
	        // it is probably meant as a fragment, so we can warn early. Defer,
	        // the warning to extract.
	        for (var key in fragment) {
	          if (fragment.hasOwnProperty(key) &&
	              ReactElement.isValidElement(fragment[key])) {
	            // This looks like a fragment object, we should provide an
	            // early warning.
	            return ReactFragment.extract(fragment);
	          }
	        }
	      }
	    }
	    return fragment;
	  }
	};

	module.exports = ReactFragment;

	},{"154":154,"57":57}],64:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInjection
	 */

	'use strict';

	var DOMProperty = _dereq_(10);
	var EventPluginHub = _dereq_(17);
	var ReactComponentEnvironment = _dereq_(36);
	var ReactClass = _dereq_(33);
	var ReactEmptyComponent = _dereq_(59);
	var ReactBrowserEventEmitter = _dereq_(30);
	var ReactNativeComponent = _dereq_(73);
	var ReactDOMComponent = _dereq_(42);
	var ReactPerf = _dereq_(75);
	var ReactRootIndex = _dereq_(83);
	var ReactUpdates = _dereq_(87);

	var ReactInjection = {
	  Component: ReactComponentEnvironment.injection,
	  Class: ReactClass.injection,
	  DOMComponent: ReactDOMComponent.injection,
	  DOMProperty: DOMProperty.injection,
	  EmptyComponent: ReactEmptyComponent.injection,
	  EventPluginHub: EventPluginHub.injection,
	  EventEmitter: ReactBrowserEventEmitter.injection,
	  NativeComponent: ReactNativeComponent.injection,
	  Perf: ReactPerf.injection,
	  RootIndex: ReactRootIndex.injection,
	  Updates: ReactUpdates.injection
	};

	module.exports = ReactInjection;

	},{"10":10,"17":17,"30":30,"33":33,"36":36,"42":42,"59":59,"73":73,"75":75,"83":83,"87":87}],65:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInputSelection
	 */

	'use strict';

	var ReactDOMSelection = _dereq_(50);

	var containsNode = _dereq_(109);
	var focusNode = _dereq_(119);
	var getActiveElement = _dereq_(121);

	function isInDocument(node) {
	  return containsNode(document.documentElement, node);
	}

	/**
	 * @ReactInputSelection: React input selection module. Based on Selection.js,
	 * but modified to be suitable for react and has a couple of bug fixes (doesn't
	 * assume buttons have range selections allowed).
	 * Input selection module for React.
	 */
	var ReactInputSelection = {

	  hasSelectionCapabilities: function(elem) {
	    return elem && (
	      ((elem.nodeName === 'INPUT' && elem.type === 'text') ||
	      elem.nodeName === 'TEXTAREA' || elem.contentEditable === 'true')
	    );
	  },

	  getSelectionInformation: function() {
	    var focusedElem = getActiveElement();
	    return {
	      focusedElem: focusedElem,
	      selectionRange:
	          ReactInputSelection.hasSelectionCapabilities(focusedElem) ?
	          ReactInputSelection.getSelection(focusedElem) :
	          null
	    };
	  },

	  /**
	   * @restoreSelection: If any selection information was potentially lost,
	   * restore it. This is useful when performing operations that could remove dom
	   * nodes and place them back in, resulting in focus being lost.
	   */
	  restoreSelection: function(priorSelectionInformation) {
	    var curFocusedElem = getActiveElement();
	    var priorFocusedElem = priorSelectionInformation.focusedElem;
	    var priorSelectionRange = priorSelectionInformation.selectionRange;
	    if (curFocusedElem !== priorFocusedElem &&
	        isInDocument(priorFocusedElem)) {
	      if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
	        ReactInputSelection.setSelection(
	          priorFocusedElem,
	          priorSelectionRange
	        );
	      }
	      focusNode(priorFocusedElem);
	    }
	  },

	  /**
	   * @getSelection: Gets the selection bounds of a focused textarea, input or
	   * contentEditable node.
	   * -@input: Look up selection bounds of this input
	   * -@return {start: selectionStart, end: selectionEnd}
	   */
	  getSelection: function(input) {
	    var selection;

	    if ('selectionStart' in input) {
	      // Modern browser with input or textarea.
	      selection = {
	        start: input.selectionStart,
	        end: input.selectionEnd
	      };
	    } else if (document.selection && input.nodeName === 'INPUT') {
	      // IE8 input.
	      var range = document.selection.createRange();
	      // There can only be one selection per document in IE, so it must
	      // be in our element.
	      if (range.parentElement() === input) {
	        selection = {
	          start: -range.moveStart('character', -input.value.length),
	          end: -range.moveEnd('character', -input.value.length)
	        };
	      }
	    } else {
	      // Content editable or old IE textarea.
	      selection = ReactDOMSelection.getOffsets(input);
	    }

	    return selection || {start: 0, end: 0};
	  },

	  /**
	   * @setSelection: Sets the selection bounds of a textarea or input and focuses
	   * the input.
	   * -@input     Set selection bounds of this input or textarea
	   * -@offsets   Object of same form that is returned from get*
	   */
	  setSelection: function(input, offsets) {
	    var start = offsets.start;
	    var end = offsets.end;
	    if (typeof end === 'undefined') {
	      end = start;
	    }

	    if ('selectionStart' in input) {
	      input.selectionStart = start;
	      input.selectionEnd = Math.min(end, input.value.length);
	    } else if (document.selection && input.nodeName === 'INPUT') {
	      var range = input.createTextRange();
	      range.collapse(true);
	      range.moveStart('character', start);
	      range.moveEnd('character', end - start);
	      range.select();
	    } else {
	      ReactDOMSelection.setOffsets(input, offsets);
	    }
	  }
	};

	module.exports = ReactInputSelection;

	},{"109":109,"119":119,"121":121,"50":50}],66:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstanceHandles
	 * @typechecks static-only
	 */

	'use strict';

	var ReactRootIndex = _dereq_(83);

	var invariant = _dereq_(135);

	var SEPARATOR = '.';
	var SEPARATOR_LENGTH = SEPARATOR.length;

	/**
	 * Maximum depth of traversals before we consider the possibility of a bad ID.
	 */
	var MAX_TREE_DEPTH = 100;

	/**
	 * Creates a DOM ID prefix to use when mounting React components.
	 *
	 * @param {number} index A unique integer
	 * @return {string} React root ID.
	 * @internal
	 */
	function getReactRootIDString(index) {
	  return SEPARATOR + index.toString(36);
	}

	/**
	 * Checks if a character in the supplied ID is a separator or the end.
	 *
	 * @param {string} id A React DOM ID.
	 * @param {number} index Index of the character to check.
	 * @return {boolean} True if the character is a separator or end of the ID.
	 * @private
	 */
	function isBoundary(id, index) {
	  return id.charAt(index) === SEPARATOR || index === id.length;
	}

	/**
	 * Checks if the supplied string is a valid React DOM ID.
	 *
	 * @param {string} id A React DOM ID, maybe.
	 * @return {boolean} True if the string is a valid React DOM ID.
	 * @private
	 */
	function isValidID(id) {
	  return id === '' || (
	    id.charAt(0) === SEPARATOR && id.charAt(id.length - 1) !== SEPARATOR
	  );
	}

	/**
	 * Checks if the first ID is an ancestor of or equal to the second ID.
	 *
	 * @param {string} ancestorID
	 * @param {string} descendantID
	 * @return {boolean} True if `ancestorID` is an ancestor of `descendantID`.
	 * @internal
	 */
	function isAncestorIDOf(ancestorID, descendantID) {
	  return (
	    descendantID.indexOf(ancestorID) === 0 &&
	    isBoundary(descendantID, ancestorID.length)
	  );
	}

	/**
	 * Gets the parent ID of the supplied React DOM ID, `id`.
	 *
	 * @param {string} id ID of a component.
	 * @return {string} ID of the parent, or an empty string.
	 * @private
	 */
	function getParentID(id) {
	  return id ? id.substr(0, id.lastIndexOf(SEPARATOR)) : '';
	}

	/**
	 * Gets the next DOM ID on the tree path from the supplied `ancestorID` to the
	 * supplied `destinationID`. If they are equal, the ID is returned.
	 *
	 * @param {string} ancestorID ID of an ancestor node of `destinationID`.
	 * @param {string} destinationID ID of the destination node.
	 * @return {string} Next ID on the path from `ancestorID` to `destinationID`.
	 * @private
	 */
	function getNextDescendantID(ancestorID, destinationID) {
	  ("production" !== "development" ? invariant(
	    isValidID(ancestorID) && isValidID(destinationID),
	    'getNextDescendantID(%s, %s): Received an invalid React DOM ID.',
	    ancestorID,
	    destinationID
	  ) : invariant(isValidID(ancestorID) && isValidID(destinationID)));
	  ("production" !== "development" ? invariant(
	    isAncestorIDOf(ancestorID, destinationID),
	    'getNextDescendantID(...): React has made an invalid assumption about ' +
	    'the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.',
	    ancestorID,
	    destinationID
	  ) : invariant(isAncestorIDOf(ancestorID, destinationID)));
	  if (ancestorID === destinationID) {
	    return ancestorID;
	  }
	  // Skip over the ancestor and the immediate separator. Traverse until we hit
	  // another separator or we reach the end of `destinationID`.
	  var start = ancestorID.length + SEPARATOR_LENGTH;
	  var i;
	  for (i = start; i < destinationID.length; i++) {
	    if (isBoundary(destinationID, i)) {
	      break;
	    }
	  }
	  return destinationID.substr(0, i);
	}

	/**
	 * Gets the nearest common ancestor ID of two IDs.
	 *
	 * Using this ID scheme, the nearest common ancestor ID is the longest common
	 * prefix of the two IDs that immediately preceded a "marker" in both strings.
	 *
	 * @param {string} oneID
	 * @param {string} twoID
	 * @return {string} Nearest common ancestor ID, or the empty string if none.
	 * @private
	 */
	function getFirstCommonAncestorID(oneID, twoID) {
	  var minLength = Math.min(oneID.length, twoID.length);
	  if (minLength === 0) {
	    return '';
	  }
	  var lastCommonMarkerIndex = 0;
	  // Use `<=` to traverse until the "EOL" of the shorter string.
	  for (var i = 0; i <= minLength; i++) {
	    if (isBoundary(oneID, i) && isBoundary(twoID, i)) {
	      lastCommonMarkerIndex = i;
	    } else if (oneID.charAt(i) !== twoID.charAt(i)) {
	      break;
	    }
	  }
	  var longestCommonID = oneID.substr(0, lastCommonMarkerIndex);
	  ("production" !== "development" ? invariant(
	    isValidID(longestCommonID),
	    'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s',
	    oneID,
	    twoID,
	    longestCommonID
	  ) : invariant(isValidID(longestCommonID)));
	  return longestCommonID;
	}

	/**
	 * Traverses the parent path between two IDs (either up or down). The IDs must
	 * not be the same, and there must exist a parent path between them. If the
	 * callback returns `false`, traversal is stopped.
	 *
	 * @param {?string} start ID at which to start traversal.
	 * @param {?string} stop ID at which to end traversal.
	 * @param {function} cb Callback to invoke each ID with.
	 * @param {?boolean} skipFirst Whether or not to skip the first node.
	 * @param {?boolean} skipLast Whether or not to skip the last node.
	 * @private
	 */
	function traverseParentPath(start, stop, cb, arg, skipFirst, skipLast) {
	  start = start || '';
	  stop = stop || '';
	  ("production" !== "development" ? invariant(
	    start !== stop,
	    'traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.',
	    start
	  ) : invariant(start !== stop));
	  var traverseUp = isAncestorIDOf(stop, start);
	  ("production" !== "development" ? invariant(
	    traverseUp || isAncestorIDOf(start, stop),
	    'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do ' +
	    'not have a parent path.',
	    start,
	    stop
	  ) : invariant(traverseUp || isAncestorIDOf(start, stop)));
	  // Traverse from `start` to `stop` one depth at a time.
	  var depth = 0;
	  var traverse = traverseUp ? getParentID : getNextDescendantID;
	  for (var id = start; /* until break */; id = traverse(id, stop)) {
	    var ret;
	    if ((!skipFirst || id !== start) && (!skipLast || id !== stop)) {
	      ret = cb(id, traverseUp, arg);
	    }
	    if (ret === false || id === stop) {
	      // Only break //after// visiting `stop`.
	      break;
	    }
	    ("production" !== "development" ? invariant(
	      depth++ < MAX_TREE_DEPTH,
	      'traverseParentPath(%s, %s, ...): Detected an infinite loop while ' +
	      'traversing the React DOM ID tree. This may be due to malformed IDs: %s',
	      start, stop
	    ) : invariant(depth++ < MAX_TREE_DEPTH));
	  }
	}

	/**
	 * Manages the IDs assigned to DOM representations of React components. This
	 * uses a specific scheme in order to traverse the DOM efficiently (e.g. in
	 * order to simulate events).
	 *
	 * @internal
	 */
	var ReactInstanceHandles = {

	  /**
	   * Constructs a React root ID
	   * @return {string} A React root ID.
	   */
	  createReactRootID: function() {
	    return getReactRootIDString(ReactRootIndex.createReactRootIndex());
	  },

	  /**
	   * Constructs a React ID by joining a root ID with a name.
	   *
	   * @param {string} rootID Root ID of a parent component.
	   * @param {string} name A component's name (as flattened children).
	   * @return {string} A React ID.
	   * @internal
	   */
	  createReactID: function(rootID, name) {
	    return rootID + name;
	  },

	  /**
	   * Gets the DOM ID of the React component that is the root of the tree that
	   * contains the React component with the supplied DOM ID.
	   *
	   * @param {string} id DOM ID of a React component.
	   * @return {?string} DOM ID of the React component that is the root.
	   * @internal
	   */
	  getReactRootIDFromNodeID: function(id) {
	    if (id && id.charAt(0) === SEPARATOR && id.length > 1) {
	      var index = id.indexOf(SEPARATOR, 1);
	      return index > -1 ? id.substr(0, index) : id;
	    }
	    return null;
	  },

	  /**
	   * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
	   * should would receive a `mouseEnter` or `mouseLeave` event.
	   *
	   * NOTE: Does not invoke the callback on the nearest common ancestor because
	   * nothing "entered" or "left" that element.
	   *
	   * @param {string} leaveID ID being left.
	   * @param {string} enterID ID being entered.
	   * @param {function} cb Callback to invoke on each entered/left ID.
	   * @param {*} upArg Argument to invoke the callback with on left IDs.
	   * @param {*} downArg Argument to invoke the callback with on entered IDs.
	   * @internal
	   */
	  traverseEnterLeave: function(leaveID, enterID, cb, upArg, downArg) {
	    var ancestorID = getFirstCommonAncestorID(leaveID, enterID);
	    if (ancestorID !== leaveID) {
	      traverseParentPath(leaveID, ancestorID, cb, upArg, false, true);
	    }
	    if (ancestorID !== enterID) {
	      traverseParentPath(ancestorID, enterID, cb, downArg, true, false);
	    }
	  },

	  /**
	   * Simulates the traversal of a two-phase, capture/bubble event dispatch.
	   *
	   * NOTE: This traversal happens on IDs without touching the DOM.
	   *
	   * @param {string} targetID ID of the target node.
	   * @param {function} cb Callback to invoke.
	   * @param {*} arg Argument to invoke the callback with.
	   * @internal
	   */
	  traverseTwoPhase: function(targetID, cb, arg) {
	    if (targetID) {
	      traverseParentPath('', targetID, cb, arg, true, false);
	      traverseParentPath(targetID, '', cb, arg, false, true);
	    }
	  },

	  /**
	   * Traverse a node ID, calling the supplied `cb` for each ancestor ID. For
	   * example, passing `.0.$row-0.1` would result in `cb` getting called
	   * with `.0`, `.0.$row-0`, and `.0.$row-0.1`.
	   *
	   * NOTE: This traversal happens on IDs without touching the DOM.
	   *
	   * @param {string} targetID ID of the target node.
	   * @param {function} cb Callback to invoke.
	   * @param {*} arg Argument to invoke the callback with.
	   * @internal
	   */
	  traverseAncestors: function(targetID, cb, arg) {
	    traverseParentPath('', targetID, cb, arg, true, false);
	  },

	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _getFirstCommonAncestorID: getFirstCommonAncestorID,

	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _getNextDescendantID: getNextDescendantID,

	  isAncestorIDOf: isAncestorIDOf,

	  SEPARATOR: SEPARATOR

	};

	module.exports = ReactInstanceHandles;

	},{"135":135,"83":83}],67:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstanceMap
	 */

	'use strict';

	/**
	 * `ReactInstanceMap` maintains a mapping from a public facing stateful
	 * instance (key) and the internal representation (value). This allows public
	 * methods to accept the user facing instance as an argument and map them back
	 * to internal methods.
	 */

	// TODO: Replace this with ES6: var ReactInstanceMap = new Map();
	var ReactInstanceMap = {

	  /**
	   * This API should be called `delete` but we'd have to make sure to always
	   * transform these to strings for IE support. When this transform is fully
	   * supported we can rename it.
	   */
	  remove: function(key) {
	    key._reactInternalInstance = undefined;
	  },

	  get: function(key) {
	    return key._reactInternalInstance;
	  },

	  has: function(key) {
	    return key._reactInternalInstance !== undefined;
	  },

	  set: function(key, value) {
	    key._reactInternalInstance = value;
	  }

	};

	module.exports = ReactInstanceMap;

	},{}],68:[function(_dereq_,module,exports){
	/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactLifeCycle
	 */

	'use strict';

	/**
	 * This module manages the bookkeeping when a component is in the process
	 * of being mounted or being unmounted. This is used as a way to enforce
	 * invariants (or warnings) when it is not recommended to call
	 * setState/forceUpdate.
	 *
	 * currentlyMountingInstance: During the construction phase, it is not possible
	 * to trigger an update since the instance is not fully mounted yet. However, we
	 * currently allow this as a convenience for mutating the initial state.
	 *
	 * currentlyUnmountingInstance: During the unmounting phase, the instance is
	 * still mounted and can therefore schedule an update. However, this is not
	 * recommended and probably an error since it's about to be unmounted.
	 * Therefore we still want to trigger in an error for that case.
	 */

	var ReactLifeCycle = {
	  currentlyMountingInstance: null,
	  currentlyUnmountingInstance: null
	};

	module.exports = ReactLifeCycle;

	},{}],69:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMarkupChecksum
	 */

	'use strict';

	var adler32 = _dereq_(106);

	var ReactMarkupChecksum = {
	  CHECKSUM_ATTR_NAME: 'data-react-checksum',

	  /**
	   * @param {string} markup Markup string
	   * @return {string} Markup string with checksum attribute attached
	   */
	  addChecksumToMarkup: function(markup) {
	    var checksum = adler32(markup);
	    return markup.replace(
	      '>',
	      ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '">'
	    );
	  },

	  /**
	   * @param {string} markup to use
	   * @param {DOMElement} element root React element
	   * @returns {boolean} whether or not the markup is the same
	   */
	  canReuseMarkup: function(markup, element) {
	    var existingChecksum = element.getAttribute(
	      ReactMarkupChecksum.CHECKSUM_ATTR_NAME
	    );
	    existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
	    var markupChecksum = adler32(markup);
	    return markupChecksum === existingChecksum;
	  }
	};

	module.exports = ReactMarkupChecksum;

	},{"106":106}],70:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMount
	 */

	'use strict';

	var DOMProperty = _dereq_(10);
	var ReactBrowserEventEmitter = _dereq_(30);
	var ReactCurrentOwner = _dereq_(39);
	var ReactElement = _dereq_(57);
	var ReactElementValidator = _dereq_(58);
	var ReactEmptyComponent = _dereq_(59);
	var ReactInstanceHandles = _dereq_(66);
	var ReactInstanceMap = _dereq_(67);
	var ReactMarkupChecksum = _dereq_(69);
	var ReactPerf = _dereq_(75);
	var ReactReconciler = _dereq_(81);
	var ReactUpdateQueue = _dereq_(86);
	var ReactUpdates = _dereq_(87);

	var emptyObject = _dereq_(115);
	var containsNode = _dereq_(109);
	var getReactRootElementInContainer = _dereq_(129);
	var instantiateReactComponent = _dereq_(134);
	var invariant = _dereq_(135);
	var setInnerHTML = _dereq_(148);
	var shouldUpdateReactComponent = _dereq_(151);
	var warning = _dereq_(154);

	var SEPARATOR = ReactInstanceHandles.SEPARATOR;

	var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
	var nodeCache = {};

	var ELEMENT_NODE_TYPE = 1;
	var DOC_NODE_TYPE = 9;

	/** Mapping from reactRootID to React component instance. */
	var instancesByReactRootID = {};

	/** Mapping from reactRootID to `container` nodes. */
	var containersByReactRootID = {};

	if ("production" !== "development") {
	  /** __DEV__-only mapping from reactRootID to root elements. */
	  var rootElementsByReactRootID = {};
	}

	// Used to store breadth-first search state in findComponentRoot.
	var findComponentRootReusableArray = [];

	/**
	 * Finds the index of the first character
	 * that's not common between the two given strings.
	 *
	 * @return {number} the index of the character where the strings diverge
	 */
	function firstDifferenceIndex(string1, string2) {
	  var minLen = Math.min(string1.length, string2.length);
	  for (var i = 0; i < minLen; i++) {
	    if (string1.charAt(i) !== string2.charAt(i)) {
	      return i;
	    }
	  }
	  return string1.length === string2.length ? -1 : minLen;
	}

	/**
	 * @param {DOMElement} container DOM element that may contain a React component.
	 * @return {?string} A "reactRoot" ID, if a React component is rendered.
	 */
	function getReactRootID(container) {
	  var rootElement = getReactRootElementInContainer(container);
	  return rootElement && ReactMount.getID(rootElement);
	}

	/**
	 * Accessing node[ATTR_NAME] or calling getAttribute(ATTR_NAME) on a form
	 * element can return its control whose name or ID equals ATTR_NAME. All
	 * DOM nodes support `getAttributeNode` but this can also get called on
	 * other objects so just return '' if we're given something other than a
	 * DOM node (such as window).
	 *
	 * @param {?DOMElement|DOMWindow|DOMDocument|DOMTextNode} node DOM node.
	 * @return {string} ID of the supplied `domNode`.
	 */
	function getID(node) {
	  var id = internalGetID(node);
	  if (id) {
	    if (nodeCache.hasOwnProperty(id)) {
	      var cached = nodeCache[id];
	      if (cached !== node) {
	        ("production" !== "development" ? invariant(
	          !isValid(cached, id),
	          'ReactMount: Two valid but unequal nodes with the same `%s`: %s',
	          ATTR_NAME, id
	        ) : invariant(!isValid(cached, id)));

	        nodeCache[id] = node;
	      }
	    } else {
	      nodeCache[id] = node;
	    }
	  }

	  return id;
	}

	function internalGetID(node) {
	  // If node is something like a window, document, or text node, none of
	  // which support attributes or a .getAttribute method, gracefully return
	  // the empty string, as if the attribute were missing.
	  return node && node.getAttribute && node.getAttribute(ATTR_NAME) || '';
	}

	/**
	 * Sets the React-specific ID of the given node.
	 *
	 * @param {DOMElement} node The DOM node whose ID will be set.
	 * @param {string} id The value of the ID attribute.
	 */
	function setID(node, id) {
	  var oldID = internalGetID(node);
	  if (oldID !== id) {
	    delete nodeCache[oldID];
	  }
	  node.setAttribute(ATTR_NAME, id);
	  nodeCache[id] = node;
	}

	/**
	 * Finds the node with the supplied React-generated DOM ID.
	 *
	 * @param {string} id A React-generated DOM ID.
	 * @return {DOMElement} DOM node with the suppled `id`.
	 * @internal
	 */
	function getNode(id) {
	  if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
	    nodeCache[id] = ReactMount.findReactNodeByID(id);
	  }
	  return nodeCache[id];
	}

	/**
	 * Finds the node with the supplied public React instance.
	 *
	 * @param {*} instance A public React instance.
	 * @return {?DOMElement} DOM node with the suppled `id`.
	 * @internal
	 */
	function getNodeFromInstance(instance) {
	  var id = ReactInstanceMap.get(instance)._rootNodeID;
	  if (ReactEmptyComponent.isNullComponentID(id)) {
	    return null;
	  }
	  if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
	    nodeCache[id] = ReactMount.findReactNodeByID(id);
	  }
	  return nodeCache[id];
	}

	/**
	 * A node is "valid" if it is contained by a currently mounted container.
	 *
	 * This means that the node does not have to be contained by a document in
	 * order to be considered valid.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @param {string} id The expected ID of the node.
	 * @return {boolean} Whether the node is contained by a mounted container.
	 */
	function isValid(node, id) {
	  if (node) {
	    ("production" !== "development" ? invariant(
	      internalGetID(node) === id,
	      'ReactMount: Unexpected modification of `%s`',
	      ATTR_NAME
	    ) : invariant(internalGetID(node) === id));

	    var container = ReactMount.findReactContainerForID(id);
	    if (container && containsNode(container, node)) {
	      return true;
	    }
	  }

	  return false;
	}

	/**
	 * Causes the cache to forget about one React-specific ID.
	 *
	 * @param {string} id The ID to forget.
	 */
	function purgeID(id) {
	  delete nodeCache[id];
	}

	var deepestNodeSoFar = null;
	function findDeepestCachedAncestorImpl(ancestorID) {
	  var ancestor = nodeCache[ancestorID];
	  if (ancestor && isValid(ancestor, ancestorID)) {
	    deepestNodeSoFar = ancestor;
	  } else {
	    // This node isn't populated in the cache, so presumably none of its
	    // descendants are. Break out of the loop.
	    return false;
	  }
	}

	/**
	 * Return the deepest cached node whose ID is a prefix of `targetID`.
	 */
	function findDeepestCachedAncestor(targetID) {
	  deepestNodeSoFar = null;
	  ReactInstanceHandles.traverseAncestors(
	    targetID,
	    findDeepestCachedAncestorImpl
	  );

	  var foundNode = deepestNodeSoFar;
	  deepestNodeSoFar = null;
	  return foundNode;
	}

	/**
	 * Mounts this component and inserts it into the DOM.
	 *
	 * @param {ReactComponent} componentInstance The instance to mount.
	 * @param {string} rootID DOM ID of the root node.
	 * @param {DOMElement} container DOM element to mount into.
	 * @param {ReactReconcileTransaction} transaction
	 * @param {boolean} shouldReuseMarkup If true, do not insert markup
	 */
	function mountComponentIntoNode(
	    componentInstance,
	    rootID,
	    container,
	    transaction,
	    shouldReuseMarkup) {
	  var markup = ReactReconciler.mountComponent(
	    componentInstance, rootID, transaction, emptyObject
	  );
	  componentInstance._isTopLevel = true;
	  ReactMount._mountImageIntoNode(markup, container, shouldReuseMarkup);
	}

	/**
	 * Batched mount.
	 *
	 * @param {ReactComponent} componentInstance The instance to mount.
	 * @param {string} rootID DOM ID of the root node.
	 * @param {DOMElement} container DOM element to mount into.
	 * @param {boolean} shouldReuseMarkup If true, do not insert markup
	 */
	function batchedMountComponentIntoNode(
	    componentInstance,
	    rootID,
	    container,
	    shouldReuseMarkup) {
	  var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
	  transaction.perform(
	    mountComponentIntoNode,
	    null,
	    componentInstance,
	    rootID,
	    container,
	    transaction,
	    shouldReuseMarkup
	  );
	  ReactUpdates.ReactReconcileTransaction.release(transaction);
	}

	/**
	 * Mounting is the process of initializing a React component by creating its
	 * representative DOM elements and inserting them into a supplied `container`.
	 * Any prior content inside `container` is destroyed in the process.
	 *
	 *   ReactMount.render(
	 *     component,
	 *     document.getElementById('container')
	 *   );
	 *
	 *   <div id="container">                   <-- Supplied `container`.
	 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
	 *       // ...                                 component.
	 *     </div>
	 *   </div>
	 *
	 * Inside of `container`, the first element rendered is the "reactRoot".
	 */
	var ReactMount = {
	  /** Exposed for debugging purposes **/
	  _instancesByReactRootID: instancesByReactRootID,

	  /**
	   * This is a hook provided to support rendering React components while
	   * ensuring that the apparent scroll position of its `container` does not
	   * change.
	   *
	   * @param {DOMElement} container The `container` being rendered into.
	   * @param {function} renderCallback This must be called once to do the render.
	   */
	  scrollMonitor: function(container, renderCallback) {
	    renderCallback();
	  },

	  /**
	   * Take a component that's already mounted into the DOM and replace its props
	   * @param {ReactComponent} prevComponent component instance already in the DOM
	   * @param {ReactElement} nextElement component instance to render
	   * @param {DOMElement} container container to render into
	   * @param {?function} callback function triggered on completion
	   */
	  _updateRootComponent: function(
	      prevComponent,
	      nextElement,
	      container,
	      callback) {
	    if ("production" !== "development") {
	      ReactElementValidator.checkAndWarnForMutatedProps(nextElement);
	    }

	    ReactMount.scrollMonitor(container, function() {
	      ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement);
	      if (callback) {
	        ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
	      }
	    });

	    if ("production" !== "development") {
	      // Record the root element in case it later gets transplanted.
	      rootElementsByReactRootID[getReactRootID(container)] =
	        getReactRootElementInContainer(container);
	    }

	    return prevComponent;
	  },

	  /**
	   * Register a component into the instance map and starts scroll value
	   * monitoring
	   * @param {ReactComponent} nextComponent component instance to render
	   * @param {DOMElement} container container to render into
	   * @return {string} reactRoot ID prefix
	   */
	  _registerComponent: function(nextComponent, container) {
	    ("production" !== "development" ? invariant(
	      container && (
	        (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE)
	      ),
	      '_registerComponent(...): Target container is not a DOM element.'
	    ) : invariant(container && (
	      (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE)
	    )));

	    ReactBrowserEventEmitter.ensureScrollValueMonitoring();

	    var reactRootID = ReactMount.registerContainer(container);
	    instancesByReactRootID[reactRootID] = nextComponent;
	    return reactRootID;
	  },

	  /**
	   * Render a new component into the DOM.
	   * @param {ReactElement} nextElement element to render
	   * @param {DOMElement} container container to render into
	   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
	   * @return {ReactComponent} nextComponent
	   */
	  _renderNewRootComponent: function(
	    nextElement,
	    container,
	    shouldReuseMarkup
	  ) {
	    // Various parts of our code (such as ReactCompositeComponent's
	    // _renderValidatedComponent) assume that calls to render aren't nested;
	    // verify that that's the case.
	    ("production" !== "development" ? warning(
	      ReactCurrentOwner.current == null,
	      '_renderNewRootComponent(): Render methods should be a pure function ' +
	      'of props and state; triggering nested component updates from ' +
	      'render is not allowed. If necessary, trigger nested updates in ' +
	      'componentDidUpdate.'
	    ) : null);

	    var componentInstance = instantiateReactComponent(nextElement, null);
	    var reactRootID = ReactMount._registerComponent(
	      componentInstance,
	      container
	    );

	    // The initial render is synchronous but any updates that happen during
	    // rendering, in componentWillMount or componentDidMount, will be batched
	    // according to the current batching strategy.

	    ReactUpdates.batchedUpdates(
	      batchedMountComponentIntoNode,
	      componentInstance,
	      reactRootID,
	      container,
	      shouldReuseMarkup
	    );

	    if ("production" !== "development") {
	      // Record the root element in case it later gets transplanted.
	      rootElementsByReactRootID[reactRootID] =
	        getReactRootElementInContainer(container);
	    }

	    return componentInstance;
	  },

	  /**
	   * Renders a React component into the DOM in the supplied `container`.
	   *
	   * If the React component was previously rendered into `container`, this will
	   * perform an update on it and only mutate the DOM as necessary to reflect the
	   * latest React component.
	   *
	   * @param {ReactElement} nextElement Component element to render.
	   * @param {DOMElement} container DOM element to render into.
	   * @param {?function} callback function triggered on completion
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
	  render: function(nextElement, container, callback) {
	    ("production" !== "development" ? invariant(
	      ReactElement.isValidElement(nextElement),
	      'React.render(): Invalid component element.%s',
	      (
	        typeof nextElement === 'string' ?
	          ' Instead of passing an element string, make sure to instantiate ' +
	          'it by passing it to React.createElement.' :
	        typeof nextElement === 'function' ?
	          ' Instead of passing a component class, make sure to instantiate ' +
	          'it by passing it to React.createElement.' :
	        // Check if it quacks like an element
	        nextElement != null && nextElement.props !== undefined ?
	          ' This may be caused by unintentionally loading two independent ' +
	          'copies of React.' :
	          ''
	      )
	    ) : invariant(ReactElement.isValidElement(nextElement)));

	    var prevComponent = instancesByReactRootID[getReactRootID(container)];

	    if (prevComponent) {
	      var prevElement = prevComponent._currentElement;
	      if (shouldUpdateReactComponent(prevElement, nextElement)) {
	        return ReactMount._updateRootComponent(
	          prevComponent,
	          nextElement,
	          container,
	          callback
	        ).getPublicInstance();
	      } else {
	        ReactMount.unmountComponentAtNode(container);
	      }
	    }

	    var reactRootElement = getReactRootElementInContainer(container);
	    var containerHasReactMarkup =
	      reactRootElement && ReactMount.isRenderedByReact(reactRootElement);

	    if ("production" !== "development") {
	      if (!containerHasReactMarkup || reactRootElement.nextSibling) {
	        var rootElementSibling = reactRootElement;
	        while (rootElementSibling) {
	          if (ReactMount.isRenderedByReact(rootElementSibling)) {
	            ("production" !== "development" ? warning(
	              false,
	              'render(): Target node has markup rendered by React, but there ' +
	              'are unrelated nodes as well. This is most commonly caused by ' +
	              'white-space inserted around server-rendered markup.'
	            ) : null);
	            break;
	          }

	          rootElementSibling = rootElementSibling.nextSibling;
	        }
	      }
	    }

	    var shouldReuseMarkup = containerHasReactMarkup && !prevComponent;

	    var component = ReactMount._renderNewRootComponent(
	      nextElement,
	      container,
	      shouldReuseMarkup
	    ).getPublicInstance();
	    if (callback) {
	      callback.call(component);
	    }
	    return component;
	  },

	  /**
	   * Constructs a component instance of `constructor` with `initialProps` and
	   * renders it into the supplied `container`.
	   *
	   * @param {function} constructor React component constructor.
	   * @param {?object} props Initial props of the component instance.
	   * @param {DOMElement} container DOM element to render into.
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
	  constructAndRenderComponent: function(constructor, props, container) {
	    var element = ReactElement.createElement(constructor, props);
	    return ReactMount.render(element, container);
	  },

	  /**
	   * Constructs a component instance of `constructor` with `initialProps` and
	   * renders it into a container node identified by supplied `id`.
	   *
	   * @param {function} componentConstructor React component constructor
	   * @param {?object} props Initial props of the component instance.
	   * @param {string} id ID of the DOM element to render into.
	   * @return {ReactComponent} Component instance rendered in the container node.
	   */
	  constructAndRenderComponentByID: function(constructor, props, id) {
	    var domNode = document.getElementById(id);
	    ("production" !== "development" ? invariant(
	      domNode,
	      'Tried to get element with id of "%s" but it is not present on the page.',
	      id
	    ) : invariant(domNode));
	    return ReactMount.constructAndRenderComponent(constructor, props, domNode);
	  },

	  /**
	   * Registers a container node into which React components will be rendered.
	   * This also creates the "reactRoot" ID that will be assigned to the element
	   * rendered within.
	   *
	   * @param {DOMElement} container DOM element to register as a container.
	   * @return {string} The "reactRoot" ID of elements rendered within.
	   */
	  registerContainer: function(container) {
	    var reactRootID = getReactRootID(container);
	    if (reactRootID) {
	      // If one exists, make sure it is a valid "reactRoot" ID.
	      reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID);
	    }
	    if (!reactRootID) {
	      // No valid "reactRoot" ID found, create one.
	      reactRootID = ReactInstanceHandles.createReactRootID();
	    }
	    containersByReactRootID[reactRootID] = container;
	    return reactRootID;
	  },

	  /**
	   * Unmounts and destroys the React component rendered in the `container`.
	   *
	   * @param {DOMElement} container DOM element containing a React component.
	   * @return {boolean} True if a component was found in and unmounted from
	   *                   `container`
	   */
	  unmountComponentAtNode: function(container) {
	    // Various parts of our code (such as ReactCompositeComponent's
	    // _renderValidatedComponent) assume that calls to render aren't nested;
	    // verify that that's the case. (Strictly speaking, unmounting won't cause a
	    // render but we still don't expect to be in a render call here.)
	    ("production" !== "development" ? warning(
	      ReactCurrentOwner.current == null,
	      'unmountComponentAtNode(): Render methods should be a pure function of ' +
	      'props and state; triggering nested component updates from render is ' +
	      'not allowed. If necessary, trigger nested updates in ' +
	      'componentDidUpdate.'
	    ) : null);

	    ("production" !== "development" ? invariant(
	      container && (
	        (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE)
	      ),
	      'unmountComponentAtNode(...): Target container is not a DOM element.'
	    ) : invariant(container && (
	      (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE)
	    )));

	    var reactRootID = getReactRootID(container);
	    var component = instancesByReactRootID[reactRootID];
	    if (!component) {
	      return false;
	    }
	    ReactMount.unmountComponentFromNode(component, container);
	    delete instancesByReactRootID[reactRootID];
	    delete containersByReactRootID[reactRootID];
	    if ("production" !== "development") {
	      delete rootElementsByReactRootID[reactRootID];
	    }
	    return true;
	  },

	  /**
	   * Unmounts a component and removes it from the DOM.
	   *
	   * @param {ReactComponent} instance React component instance.
	   * @param {DOMElement} container DOM element to unmount from.
	   * @final
	   * @internal
	   * @see {ReactMount.unmountComponentAtNode}
	   */
	  unmountComponentFromNode: function(instance, container) {
	    ReactReconciler.unmountComponent(instance);

	    if (container.nodeType === DOC_NODE_TYPE) {
	      container = container.documentElement;
	    }

	    // http://jsperf.com/emptying-a-node
	    while (container.lastChild) {
	      container.removeChild(container.lastChild);
	    }
	  },

	  /**
	   * Finds the container DOM element that contains React component to which the
	   * supplied DOM `id` belongs.
	   *
	   * @param {string} id The ID of an element rendered by a React component.
	   * @return {?DOMElement} DOM element that contains the `id`.
	   */
	  findReactContainerForID: function(id) {
	    var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(id);
	    var container = containersByReactRootID[reactRootID];

	    if ("production" !== "development") {
	      var rootElement = rootElementsByReactRootID[reactRootID];
	      if (rootElement && rootElement.parentNode !== container) {
	        ("production" !== "development" ? invariant(
	          // Call internalGetID here because getID calls isValid which calls
	          // findReactContainerForID (this function).
	          internalGetID(rootElement) === reactRootID,
	          'ReactMount: Root element ID differed from reactRootID.'
	        ) : invariant(// Call internalGetID here because getID calls isValid which calls
	        // findReactContainerForID (this function).
	        internalGetID(rootElement) === reactRootID));

	        var containerChild = container.firstChild;
	        if (containerChild &&
	            reactRootID === internalGetID(containerChild)) {
	          // If the container has a new child with the same ID as the old
	          // root element, then rootElementsByReactRootID[reactRootID] is
	          // just stale and needs to be updated. The case that deserves a
	          // warning is when the container is empty.
	          rootElementsByReactRootID[reactRootID] = containerChild;
	        } else {
	          ("production" !== "development" ? warning(
	            false,
	            'ReactMount: Root element has been removed from its original ' +
	            'container. New container:', rootElement.parentNode
	          ) : null);
	        }
	      }
	    }

	    return container;
	  },

	  /**
	   * Finds an element rendered by React with the supplied ID.
	   *
	   * @param {string} id ID of a DOM node in the React component.
	   * @return {DOMElement} Root DOM node of the React component.
	   */
	  findReactNodeByID: function(id) {
	    var reactRoot = ReactMount.findReactContainerForID(id);
	    return ReactMount.findComponentRoot(reactRoot, id);
	  },

	  /**
	   * True if the supplied `node` is rendered by React.
	   *
	   * @param {*} node DOM Element to check.
	   * @return {boolean} True if the DOM Element appears to be rendered by React.
	   * @internal
	   */
	  isRenderedByReact: function(node) {
	    if (node.nodeType !== 1) {
	      // Not a DOMElement, therefore not a React component
	      return false;
	    }
	    var id = ReactMount.getID(node);
	    return id ? id.charAt(0) === SEPARATOR : false;
	  },

	  /**
	   * Traverses up the ancestors of the supplied node to find a node that is a
	   * DOM representation of a React component.
	   *
	   * @param {*} node
	   * @return {?DOMEventTarget}
	   * @internal
	   */
	  getFirstReactDOM: function(node) {
	    var current = node;
	    while (current && current.parentNode !== current) {
	      if (ReactMount.isRenderedByReact(current)) {
	        return current;
	      }
	      current = current.parentNode;
	    }
	    return null;
	  },

	  /**
	   * Finds a node with the supplied `targetID` inside of the supplied
	   * `ancestorNode`.  Exploits the ID naming scheme to perform the search
	   * quickly.
	   *
	   * @param {DOMEventTarget} ancestorNode Search from this root.
	   * @pararm {string} targetID ID of the DOM representation of the component.
	   * @return {DOMEventTarget} DOM node with the supplied `targetID`.
	   * @internal
	   */
	  findComponentRoot: function(ancestorNode, targetID) {
	    var firstChildren = findComponentRootReusableArray;
	    var childIndex = 0;

	    var deepestAncestor = findDeepestCachedAncestor(targetID) || ancestorNode;

	    firstChildren[0] = deepestAncestor.firstChild;
	    firstChildren.length = 1;

	    while (childIndex < firstChildren.length) {
	      var child = firstChildren[childIndex++];
	      var targetChild;

	      while (child) {
	        var childID = ReactMount.getID(child);
	        if (childID) {
	          // Even if we find the node we're looking for, we finish looping
	          // through its siblings to ensure they're cached so that we don't have
	          // to revisit this node again. Otherwise, we make n^2 calls to getID
	          // when visiting the many children of a single node in order.

	          if (targetID === childID) {
	            targetChild = child;
	          } else if (ReactInstanceHandles.isAncestorIDOf(childID, targetID)) {
	            // If we find a child whose ID is an ancestor of the given ID,
	            // then we can be sure that we only want to search the subtree
	            // rooted at this child, so we can throw out the rest of the
	            // search state.
	            firstChildren.length = childIndex = 0;
	            firstChildren.push(child.firstChild);
	          }

	        } else {
	          // If this child had no ID, then there's a chance that it was
	          // injected automatically by the browser, as when a `<table>`
	          // element sprouts an extra `<tbody>` child as a side effect of
	          // `.innerHTML` parsing. Optimistically continue down this
	          // branch, but not before examining the other siblings.
	          firstChildren.push(child.firstChild);
	        }

	        child = child.nextSibling;
	      }

	      if (targetChild) {
	        // Emptying firstChildren/findComponentRootReusableArray is
	        // not necessary for correctness, but it helps the GC reclaim
	        // any nodes that were left at the end of the search.
	        firstChildren.length = 0;

	        return targetChild;
	      }
	    }

	    firstChildren.length = 0;

	    ("production" !== "development" ? invariant(
	      false,
	      'findComponentRoot(..., %s): Unable to find element. This probably ' +
	      'means the DOM was unexpectedly mutated (e.g., by the browser), ' +
	      'usually due to forgetting a <tbody> when using tables, nesting tags ' +
	      'like <form>, <p>, or <a>, or using non-SVG elements in an <svg> ' +
	      'parent. ' +
	      'Try inspecting the child nodes of the element with React ID `%s`.',
	      targetID,
	      ReactMount.getID(ancestorNode)
	    ) : invariant(false));
	  },

	  _mountImageIntoNode: function(markup, container, shouldReuseMarkup) {
	    ("production" !== "development" ? invariant(
	      container && (
	        (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE)
	      ),
	      'mountComponentIntoNode(...): Target container is not valid.'
	    ) : invariant(container && (
	      (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE)
	    )));

	    if (shouldReuseMarkup) {
	      var rootElement = getReactRootElementInContainer(container);
	      if (ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
	        return;
	      } else {
	        var checksum = rootElement.getAttribute(
	          ReactMarkupChecksum.CHECKSUM_ATTR_NAME
	        );
	        rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);

	        var rootMarkup = rootElement.outerHTML;
	        rootElement.setAttribute(
	          ReactMarkupChecksum.CHECKSUM_ATTR_NAME,
	          checksum
	        );

	        var diffIndex = firstDifferenceIndex(markup, rootMarkup);
	        var difference = ' (client) ' +
	          markup.substring(diffIndex - 20, diffIndex + 20) +
	          '\n (server) ' + rootMarkup.substring(diffIndex - 20, diffIndex + 20);

	        ("production" !== "development" ? invariant(
	          container.nodeType !== DOC_NODE_TYPE,
	          'You\'re trying to render a component to the document using ' +
	          'server rendering but the checksum was invalid. This usually ' +
	          'means you rendered a different component type or props on ' +
	          'the client from the one on the server, or your render() ' +
	          'methods are impure. React cannot handle this case due to ' +
	          'cross-browser quirks by rendering at the document root. You ' +
	          'should look for environment dependent code in your components ' +
	          'and ensure the props are the same client and server side:\n%s',
	          difference
	        ) : invariant(container.nodeType !== DOC_NODE_TYPE));

	        if ("production" !== "development") {
	          ("production" !== "development" ? warning(
	            false,
	            'React attempted to reuse markup in a container but the ' +
	            'checksum was invalid. This generally means that you are ' +
	            'using server rendering and the markup generated on the ' +
	            'server was not what the client was expecting. React injected ' +
	            'new markup to compensate which works but you have lost many ' +
	            'of the benefits of server rendering. Instead, figure out ' +
	            'why the markup being generated is different on the client ' +
	            'or server:\n%s',
	            difference
	          ) : null);
	        }
	      }
	    }

	    ("production" !== "development" ? invariant(
	      container.nodeType !== DOC_NODE_TYPE,
	      'You\'re trying to render a component to the document but ' +
	        'you didn\'t use server rendering. We can\'t do this ' +
	        'without using server rendering due to cross-browser quirks. ' +
	        'See React.renderToString() for server rendering.'
	    ) : invariant(container.nodeType !== DOC_NODE_TYPE));

	    setInnerHTML(container, markup);
	  },

	  /**
	   * React ID utilities.
	   */

	  getReactRootID: getReactRootID,

	  getID: getID,

	  setID: setID,

	  getNode: getNode,

	  getNodeFromInstance: getNodeFromInstance,

	  purgeID: purgeID
	};

	ReactPerf.measureMethods(ReactMount, 'ReactMount', {
	  _renderNewRootComponent: '_renderNewRootComponent',
	  _mountImageIntoNode: '_mountImageIntoNode'
	});

	module.exports = ReactMount;

	},{"10":10,"109":109,"115":115,"129":129,"134":134,"135":135,"148":148,"151":151,"154":154,"30":30,"39":39,"57":57,"58":58,"59":59,"66":66,"67":67,"69":69,"75":75,"81":81,"86":86,"87":87}],71:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMultiChild
	 * @typechecks static-only
	 */

	'use strict';

	var ReactComponentEnvironment = _dereq_(36);
	var ReactMultiChildUpdateTypes = _dereq_(72);

	var ReactReconciler = _dereq_(81);
	var ReactChildReconciler = _dereq_(31);

	/**
	 * Updating children of a component may trigger recursive updates. The depth is
	 * used to batch recursive updates to render markup more efficiently.
	 *
	 * @type {number}
	 * @private
	 */
	var updateDepth = 0;

	/**
	 * Queue of update configuration objects.
	 *
	 * Each object has a `type` property that is in `ReactMultiChildUpdateTypes`.
	 *
	 * @type {array<object>}
	 * @private
	 */
	var updateQueue = [];

	/**
	 * Queue of markup to be rendered.
	 *
	 * @type {array<string>}
	 * @private
	 */
	var markupQueue = [];

	/**
	 * Enqueues markup to be rendered and inserted at a supplied index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} markup Markup that renders into an element.
	 * @param {number} toIndex Destination index.
	 * @private
	 */
	function enqueueMarkup(parentID, markup, toIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
	    markupIndex: markupQueue.push(markup) - 1,
	    textContent: null,
	    fromIndex: null,
	    toIndex: toIndex
	  });
	}

	/**
	 * Enqueues moving an existing element to another index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {number} fromIndex Source index of the existing element.
	 * @param {number} toIndex Destination index of the element.
	 * @private
	 */
	function enqueueMove(parentID, fromIndex, toIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
	    markupIndex: null,
	    textContent: null,
	    fromIndex: fromIndex,
	    toIndex: toIndex
	  });
	}

	/**
	 * Enqueues removing an element at an index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {number} fromIndex Index of the element to remove.
	 * @private
	 */
	function enqueueRemove(parentID, fromIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.REMOVE_NODE,
	    markupIndex: null,
	    textContent: null,
	    fromIndex: fromIndex,
	    toIndex: null
	  });
	}

	/**
	 * Enqueues setting the text content.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} textContent Text content to set.
	 * @private
	 */
	function enqueueTextContent(parentID, textContent) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
	    markupIndex: null,
	    textContent: textContent,
	    fromIndex: null,
	    toIndex: null
	  });
	}

	/**
	 * Processes any enqueued updates.
	 *
	 * @private
	 */
	function processQueue() {
	  if (updateQueue.length) {
	    ReactComponentEnvironment.processChildrenUpdates(
	      updateQueue,
	      markupQueue
	    );
	    clearQueue();
	  }
	}

	/**
	 * Clears any enqueued updates.
	 *
	 * @private
	 */
	function clearQueue() {
	  updateQueue.length = 0;
	  markupQueue.length = 0;
	}

	/**
	 * ReactMultiChild are capable of reconciling multiple children.
	 *
	 * @class ReactMultiChild
	 * @internal
	 */
	var ReactMultiChild = {

	  /**
	   * Provides common functionality for components that must reconcile multiple
	   * children. This is used by `ReactDOMComponent` to mount, update, and
	   * unmount child components.
	   *
	   * @lends {ReactMultiChild.prototype}
	   */
	  Mixin: {

	    /**
	     * Generates a "mount image" for each of the supplied children. In the case
	     * of `ReactDOMComponent`, a mount image is a string of markup.
	     *
	     * @param {?object} nestedChildren Nested child maps.
	     * @return {array} An array of mounted representations.
	     * @internal
	     */
	    mountChildren: function(nestedChildren, transaction, context) {
	      var children = ReactChildReconciler.instantiateChildren(
	        nestedChildren, transaction, context
	      );
	      this._renderedChildren = children;
	      var mountImages = [];
	      var index = 0;
	      for (var name in children) {
	        if (children.hasOwnProperty(name)) {
	          var child = children[name];
	          // Inlined for performance, see `ReactInstanceHandles.createReactID`.
	          var rootID = this._rootNodeID + name;
	          var mountImage = ReactReconciler.mountComponent(
	            child,
	            rootID,
	            transaction,
	            context
	          );
	          child._mountIndex = index;
	          mountImages.push(mountImage);
	          index++;
	        }
	      }
	      return mountImages;
	    },

	    /**
	     * Replaces any rendered children with a text content string.
	     *
	     * @param {string} nextContent String of content.
	     * @internal
	     */
	    updateTextContent: function(nextContent) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        var prevChildren = this._renderedChildren;
	        // Remove any rendered children.
	        ReactChildReconciler.unmountChildren(prevChildren);
	        // TODO: The setTextContent operation should be enough
	        for (var name in prevChildren) {
	          if (prevChildren.hasOwnProperty(name)) {
	            this._unmountChildByName(prevChildren[name], name);
	          }
	        }
	        // Set new text content.
	        this.setTextContent(nextContent);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          if (errorThrown) {
	            clearQueue();
	          } else {
	            processQueue();
	          }
	        }
	      }
	    },

	    /**
	     * Updates the rendered children with new children.
	     *
	     * @param {?object} nextNestedChildren Nested child maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     */
	    updateChildren: function(nextNestedChildren, transaction, context) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        this._updateChildren(nextNestedChildren, transaction, context);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          if (errorThrown) {
	            clearQueue();
	          } else {
	            processQueue();
	          }
	        }

	      }
	    },

	    /**
	     * Improve performance by isolating this hot code path from the try/catch
	     * block in `updateChildren`.
	     *
	     * @param {?object} nextNestedChildren Nested child maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @final
	     * @protected
	     */
	    _updateChildren: function(nextNestedChildren, transaction, context) {
	      var prevChildren = this._renderedChildren;
	      var nextChildren = ReactChildReconciler.updateChildren(
	        prevChildren, nextNestedChildren, transaction, context
	      );
	      this._renderedChildren = nextChildren;
	      if (!nextChildren && !prevChildren) {
	        return;
	      }
	      var name;
	      // `nextIndex` will increment for each child in `nextChildren`, but
	      // `lastIndex` will be the last index visited in `prevChildren`.
	      var lastIndex = 0;
	      var nextIndex = 0;
	      for (name in nextChildren) {
	        if (!nextChildren.hasOwnProperty(name)) {
	          continue;
	        }
	        var prevChild = prevChildren && prevChildren[name];
	        var nextChild = nextChildren[name];
	        if (prevChild === nextChild) {
	          this.moveChild(prevChild, nextIndex, lastIndex);
	          lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	          prevChild._mountIndex = nextIndex;
	        } else {
	          if (prevChild) {
	            // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
	            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	            this._unmountChildByName(prevChild, name);
	          }
	          // The child must be instantiated before it's mounted.
	          this._mountChildByNameAtIndex(
	            nextChild, name, nextIndex, transaction, context
	          );
	        }
	        nextIndex++;
	      }
	      // Remove children that are no longer present.
	      for (name in prevChildren) {
	        if (prevChildren.hasOwnProperty(name) &&
	            !(nextChildren && nextChildren.hasOwnProperty(name))) {
	          this._unmountChildByName(prevChildren[name], name);
	        }
	      }
	    },

	    /**
	     * Unmounts all rendered children. This should be used to clean up children
	     * when this component is unmounted.
	     *
	     * @internal
	     */
	    unmountChildren: function() {
	      var renderedChildren = this._renderedChildren;
	      ReactChildReconciler.unmountChildren(renderedChildren);
	      this._renderedChildren = null;
	    },

	    /**
	     * Moves a child component to the supplied index.
	     *
	     * @param {ReactComponent} child Component to move.
	     * @param {number} toIndex Destination index of the element.
	     * @param {number} lastIndex Last index visited of the siblings of `child`.
	     * @protected
	     */
	    moveChild: function(child, toIndex, lastIndex) {
	      // If the index of `child` is less than `lastIndex`, then it needs to
	      // be moved. Otherwise, we do not need to move it because a child will be
	      // inserted or moved before `child`.
	      if (child._mountIndex < lastIndex) {
	        enqueueMove(this._rootNodeID, child._mountIndex, toIndex);
	      }
	    },

	    /**
	     * Creates a child component.
	     *
	     * @param {ReactComponent} child Component to create.
	     * @param {string} mountImage Markup to insert.
	     * @protected
	     */
	    createChild: function(child, mountImage) {
	      enqueueMarkup(this._rootNodeID, mountImage, child._mountIndex);
	    },

	    /**
	     * Removes a child component.
	     *
	     * @param {ReactComponent} child Child to remove.
	     * @protected
	     */
	    removeChild: function(child) {
	      enqueueRemove(this._rootNodeID, child._mountIndex);
	    },

	    /**
	     * Sets this text content string.
	     *
	     * @param {string} textContent Text content to set.
	     * @protected
	     */
	    setTextContent: function(textContent) {
	      enqueueTextContent(this._rootNodeID, textContent);
	    },

	    /**
	     * Mounts a child with the supplied name.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to mount.
	     * @param {string} name Name of the child.
	     * @param {number} index Index at which to insert the child.
	     * @param {ReactReconcileTransaction} transaction
	     * @private
	     */
	    _mountChildByNameAtIndex: function(
	      child,
	      name,
	      index,
	      transaction,
	      context) {
	      // Inlined for performance, see `ReactInstanceHandles.createReactID`.
	      var rootID = this._rootNodeID + name;
	      var mountImage = ReactReconciler.mountComponent(
	        child,
	        rootID,
	        transaction,
	        context
	      );
	      child._mountIndex = index;
	      this.createChild(child, mountImage);
	    },

	    /**
	     * Unmounts a rendered child by name.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to unmount.
	     * @param {string} name Name of the child in `this._renderedChildren`.
	     * @private
	     */
	    _unmountChildByName: function(child, name) {
	      this.removeChild(child);
	      child._mountIndex = null;
	    }

	  }

	};

	module.exports = ReactMultiChild;

	},{"31":31,"36":36,"72":72,"81":81}],72:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMultiChildUpdateTypes
	 */

	'use strict';

	var keyMirror = _dereq_(140);

	/**
	 * When a component's children are updated, a series of update configuration
	 * objects are created in order to batch and serialize the required changes.
	 *
	 * Enumerates all the possible types of update configurations.
	 *
	 * @internal
	 */
	var ReactMultiChildUpdateTypes = keyMirror({
	  INSERT_MARKUP: null,
	  MOVE_EXISTING: null,
	  REMOVE_NODE: null,
	  TEXT_CONTENT: null
	});

	module.exports = ReactMultiChildUpdateTypes;

	},{"140":140}],73:[function(_dereq_,module,exports){
	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNativeComponent
	 */

	'use strict';

	var assign = _dereq_(27);
	var invariant = _dereq_(135);

	var autoGenerateWrapperClass = null;
	var genericComponentClass = null;
	// This registry keeps track of wrapper classes around native tags
	var tagToComponentClass = {};
	var textComponentClass = null;

	var ReactNativeComponentInjection = {
	  // This accepts a class that receives the tag string. This is a catch all
	  // that can render any kind of tag.
	  injectGenericComponentClass: function(componentClass) {
	    genericComponentClass = componentClass;
	  },
	  // This accepts a text component class that takes the text string to be
	  // rendered as props.
	  injectTextComponentClass: function(componentClass) {
	    textComponentClass = componentClass;
	  },
	  // This accepts a keyed object with classes as values. Each key represents a
	  // tag. That particular tag will use this class instead of the generic one.
	  injectComponentClasses: function(componentClasses) {
	    assign(tagToComponentClass, componentClasses);
	  },
	  // Temporary hack since we expect DOM refs to behave like composites,
	  // for this release.
	  injectAutoWrapper: function(wrapperFactory) {
	    autoGenerateWrapperClass = wrapperFactory;
	  }
	};

	/**
	 * Get a composite component wrapper class for a specific tag.
	 *
	 * @param {ReactElement} element The tag for which to get the class.
	 * @return {function} The React class constructor function.
	 */
	function getComponentClassForElement(element) {
	  if (typeof element.type === 'function') {
	    return element.type;
	  }
	  var tag = element.type;
	  var componentClass = tagToComponentClass[tag];
	  if (componentClass == null) {
	    tagToComponentClass[tag] = componentClass = autoGenerateWrapperClass(tag);
	  }
	  return componentClass;
	}

	/**
	 * Get a native internal component class for a specific tag.
	 *
	 * @param {ReactElement} element The element to create.
	 * @return {function} The internal class constructor function.
	 */
	function createInternalComponent(element) {
	  ("production" !== "development" ? invariant(
	    genericComponentClass,
	    'There is no registered component for the tag %s',
	    element.type
	  ) : invariant(genericComponentClass));
	  return new genericComponentClass(element.type, element.props);
	}

	/**
	 * @param {ReactText} text
	 * @return {ReactComponent}
	 */
	function createInstanceForText(text) {
	  return new textComponentClass(text);
	}

	/**
	 * @param {ReactComponent} component
	 * @return {boolean}
	 */
	function isTextComponent(component) {
	  return component instanceof textComponentClass;
	}

	var ReactNativeComponent = {
	  getComponentClassForElement: getComponentClassForElement,
	  createInternalComponent: createInternalComponent,
	  createInstanceForText: createInstanceForText,
	  isTextComponent: isTextComponent,
	  injection: ReactNativeComponentInjection
	};

	module.exports = ReactNativeComponent;

	},{"135":135,"27":27}],74:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactOwner
	 */

	'use strict';

	var invariant = _dereq_(135);

	/**
	 * ReactOwners are capable of storing references to owned components.
	 *
	 * All components are capable of //being// referenced by owner components, but
	 * only ReactOwner components are capable of //referencing// owned components.
	 * The named reference is known as a "ref".
	 *
	 * Refs are available when mounted and updated during reconciliation.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return (
	 *         <div onClick={this.handleClick}>
	 *           <CustomComponent ref="custom" />
	 *         </div>
	 *       );
	 *     },
	 *     handleClick: function() {
	 *       this.refs.custom.handleClick();
	 *     },
	 *     componentDidMount: function() {
	 *       this.refs.custom.initialize();
	 *     }
	 *   });
	 *
	 * Refs should rarely be used. When refs are used, they should only be done to
	 * control data that is not handled by React's data flow.
	 *
	 * @class ReactOwner
	 */
	var ReactOwner = {

	  /**
	   * @param {?object} object
	   * @return {boolean} True if `object` is a valid owner.
	   * @final
	   */
	  isValidOwner: function(object) {
	    return !!(
	      (object &&
	      typeof object.attachRef === 'function' && typeof object.detachRef === 'function')
	    );
	  },

	  /**
	   * Adds a component by ref to an owner component.
	   *
	   * @param {ReactComponent} component Component to reference.
	   * @param {string} ref Name by which to refer to the component.
	   * @param {ReactOwner} owner Component on which to record the ref.
	   * @final
	   * @internal
	   */
	  addComponentAsRefTo: function(component, ref, owner) {
	    ("production" !== "development" ? invariant(
	      ReactOwner.isValidOwner(owner),
	      'addComponentAsRefTo(...): Only a ReactOwner can have refs. This ' +
	      'usually means that you\'re trying to add a ref to a component that ' +
	      'doesn\'t have an owner (that is, was not created inside of another ' +
	      'component\'s `render` method). Try rendering this component inside of ' +
	      'a new top-level component which will hold the ref.'
	    ) : invariant(ReactOwner.isValidOwner(owner)));
	    owner.attachRef(ref, component);
	  },

	  /**
	   * Removes a component by ref from an owner component.
	   *
	   * @param {ReactComponent} component Component to dereference.
	   * @param {string} ref Name of the ref to remove.
	   * @param {ReactOwner} owner Component on which the ref is recorded.
	   * @final
	   * @internal
	   */
	  removeComponentAsRefFrom: function(component, ref, owner) {
	    ("production" !== "development" ? invariant(
	      ReactOwner.isValidOwner(owner),
	      'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. This ' +
	      'usually means that you\'re trying to remove a ref to a component that ' +
	      'doesn\'t have an owner (that is, was not created inside of another ' +
	      'component\'s `render` method). Try rendering this component inside of ' +
	      'a new top-level component which will hold the ref.'
	    ) : invariant(ReactOwner.isValidOwner(owner)));
	    // Check that `component` is still the current ref because we do not want to
	    // detach the ref if another component stole it.
	    if (owner.getPublicInstance().refs[ref] === component.getPublicInstance()) {
	      owner.detachRef(ref);
	    }
	  }

	};

	module.exports = ReactOwner;

	},{"135":135}],75:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPerf
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * ReactPerf is a general AOP system designed to measure performance. This
	 * module only has the hooks: see ReactDefaultPerf for the analysis tool.
	 */
	var ReactPerf = {
	  /**
	   * Boolean to enable/disable measurement. Set to false by default to prevent
	   * accidental logging and perf loss.
	   */
	  enableMeasure: false,

	  /**
	   * Holds onto the measure function in use. By default, don't measure
	   * anything, but we'll override this if we inject a measure function.
	   */
	  storedMeasure: _noMeasure,

	  /**
	   * @param {object} object
	   * @param {string} objectName
	   * @param {object<string>} methodNames
	   */
	  measureMethods: function(object, objectName, methodNames) {
	    if ("production" !== "development") {
	      for (var key in methodNames) {
	        if (!methodNames.hasOwnProperty(key)) {
	          continue;
	        }
	        object[key] = ReactPerf.measure(
	          objectName,
	          methodNames[key],
	          object[key]
	        );
	      }
	    }
	  },

	  /**
	   * Use this to wrap methods you want to measure. Zero overhead in production.
	   *
	   * @param {string} objName
	   * @param {string} fnName
	   * @param {function} func
	   * @return {function}
	   */
	  measure: function(objName, fnName, func) {
	    if ("production" !== "development") {
	      var measuredFunc = null;
	      var wrapper = function() {
	        if (ReactPerf.enableMeasure) {
	          if (!measuredFunc) {
	            measuredFunc = ReactPerf.storedMeasure(objName, fnName, func);
	          }
	          return measuredFunc.apply(this, arguments);
	        }
	        return func.apply(this, arguments);
	      };
	      wrapper.displayName = objName + '_' + fnName;
	      return wrapper;
	    }
	    return func;
	  },

	  injection: {
	    /**
	     * @param {function} measure
	     */
	    injectMeasure: function(measure) {
	      ReactPerf.storedMeasure = measure;
	    }
	  }
	};

	/**
	 * Simply passes through the measured function, without measuring it.
	 *
	 * @param {string} objName
	 * @param {string} fnName
	 * @param {function} func
	 * @return {function}
	 */
	function _noMeasure(objName, fnName, func) {
	  return func;
	}

	module.exports = ReactPerf;

	},{}],76:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocationNames
	 */

	'use strict';

	var ReactPropTypeLocationNames = {};

	if ("production" !== "development") {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}

	module.exports = ReactPropTypeLocationNames;

	},{}],77:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocations
	 */

	'use strict';

	var keyMirror = _dereq_(140);

	var ReactPropTypeLocations = keyMirror({
	  prop: null,
	  context: null,
	  childContext: null
	});

	module.exports = ReactPropTypeLocations;

	},{"140":140}],78:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypes
	 */

	'use strict';

	var ReactElement = _dereq_(57);
	var ReactFragment = _dereq_(63);
	var ReactPropTypeLocationNames = _dereq_(76);

	var emptyFunction = _dereq_(114);

	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */

	var ANONYMOUS = '<<anonymous>>';

	var elementTypeChecker = createElementTypeChecker();
	var nodeTypeChecker = createNodeChecker();

	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),

	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: elementTypeChecker,
	  instanceOf: createInstanceTypeChecker,
	  node: nodeTypeChecker,
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};

	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location) {
	    componentName = componentName || ANONYMOUS;
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        return new Error(
	          ("Required " + locationName + " `" + propName + "` was not specified in ") +
	          ("`" + componentName + "`.")
	        );
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location);
	    }
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);

	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` of type `" + preciseType + "` ") +
	        ("supplied to `" + componentName + "`, expected `" + expectedType + "`.")
	      );
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}

	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` of type ") +
	        ("`" + propType + "` supplied to `" + componentName + "`, expected an array.")
	      );
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location);
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location) {
	    if (!ReactElement.isValidElement(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` supplied to ") +
	        ("`" + componentName + "`, expected a ReactElement.")
	      );
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` supplied to ") +
	        ("`" + componentName + "`, expected instance of `" + expectedClassName + "`.")
	      );
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createEnumTypeChecker(expectedValues) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (propValue === expectedValues[i]) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new Error(
	      ("Invalid " + locationName + " `" + propName + "` of value `" + propValue + "` ") +
	      ("supplied to `" + componentName + "`, expected one of " + valuesString + ".")
	    );
	  }
	  return createChainableTypeChecker(validate);
	}

	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` of type ") +
	        ("`" + propType + "` supplied to `" + componentName + "`, expected an object.")
	      );
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  function validate(props, propName, componentName, location) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location) == null) {
	        return null;
	      }
	    }

	    var locationName = ReactPropTypeLocationNames[location];
	    return new Error(
	      ("Invalid " + locationName + " `" + propName + "` supplied to ") +
	      ("`" + componentName + "`.")
	    );
	  }
	  return createChainableTypeChecker(validate);
	}

	function createNodeChecker() {
	  function validate(props, propName, componentName, location) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` supplied to ") +
	        ("`" + componentName + "`, expected a ReactNode.")
	      );
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error(
	        ("Invalid " + locationName + " `" + propName + "` of type `" + propType + "` ") +
	        ("supplied to `" + componentName + "`, expected `object`.")
	      );
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}

	function isNode(propValue) {
	  switch (typeof propValue) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }
	      propValue = ReactFragment.extractIfFragment(propValue);
	      for (var k in propValue) {
	        if (!isNode(propValue[k])) {
	          return false;
	        }
	      }
	      return true;
	    default:
	      return false;
	  }
	}

	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  return propType;
	}

	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}

	module.exports = ReactPropTypes;

	},{"114":114,"57":57,"63":63,"76":76}],79:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPutListenerQueue
	 */

	'use strict';

	var PooledClass = _dereq_(28);
	var ReactBrowserEventEmitter = _dereq_(30);

	var assign = _dereq_(27);

	function ReactPutListenerQueue() {
	  this.listenersToPut = [];
	}

	assign(ReactPutListenerQueue.prototype, {
	  enqueuePutListener: function(rootNodeID, propKey, propValue) {
	    this.listenersToPut.push({
	      rootNodeID: rootNodeID,
	      propKey: propKey,
	      propValue: propValue
	    });
	  },

	  putListeners: function() {
	    for (var i = 0; i < this.listenersToPut.length; i++) {
	      var listenerToPut = this.listenersToPut[i];
	      ReactBrowserEventEmitter.putListener(
	        listenerToPut.rootNodeID,
	        listenerToPut.propKey,
	        listenerToPut.propValue
	      );
	    }
	  },

	  reset: function() {
	    this.listenersToPut.length = 0;
	  },

	  destructor: function() {
	    this.reset();
	  }
	});

	PooledClass.addPoolingTo(ReactPutListenerQueue);

	module.exports = ReactPutListenerQueue;

	},{"27":27,"28":28,"30":30}],80:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactReconcileTransaction
	 * @typechecks static-only
	 */

	'use strict';

	var CallbackQueue = _dereq_(6);
	var PooledClass = _dereq_(28);
	var ReactBrowserEventEmitter = _dereq_(30);
	var ReactInputSelection = _dereq_(65);
	var ReactPutListenerQueue = _dereq_(79);
	var Transaction = _dereq_(103);

	var assign = _dereq_(27);

	/**
	 * Ensures that, when possible, the selection range (currently selected text
	 * input) is not disturbed by performing the transaction.
	 */
	var SELECTION_RESTORATION = {
	  /**
	   * @return {Selection} Selection information.
	   */
	  initialize: ReactInputSelection.getSelectionInformation,
	  /**
	   * @param {Selection} sel Selection information returned from `initialize`.
	   */
	  close: ReactInputSelection.restoreSelection
	};

	/**
	 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
	 * high level DOM manipulations (like temporarily removing a text input from the
	 * DOM).
	 */
	var EVENT_SUPPRESSION = {
	  /**
	   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
	   * the reconciliation.
	   */
	  initialize: function() {
	    var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
	    ReactBrowserEventEmitter.setEnabled(false);
	    return currentlyEnabled;
	  },

	  /**
	   * @param {boolean} previouslyEnabled Enabled status of
	   *   `ReactBrowserEventEmitter` before the reconciliation occured. `close`
	   *   restores the previous value.
	   */
	  close: function(previouslyEnabled) {
	    ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
	  }
	};

	/**
	 * Provides a queue for collecting `componentDidMount` and
	 * `componentDidUpdate` callbacks during the the transaction.
	 */
	var ON_DOM_READY_QUEUEING = {
	  /**
	   * Initializes the internal `onDOMReady` queue.
	   */
	  initialize: function() {
	    this.reactMountReady.reset();
	  },

	  /**
	   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
	   */
	  close: function() {
	    this.reactMountReady.notifyAll();
	  }
	};

	var PUT_LISTENER_QUEUEING = {
	  initialize: function() {
	    this.putListenerQueue.reset();
	  },

	  close: function() {
	    this.putListenerQueue.putListeners();
	  }
	};

	/**
	 * Executed within the scope of the `Transaction` instance. Consider these as
	 * being member methods, but with an implied ordering while being isolated from
	 * each other.
	 */
	var TRANSACTION_WRAPPERS = [
	  PUT_LISTENER_QUEUEING,
	  SELECTION_RESTORATION,
	  EVENT_SUPPRESSION,
	  ON_DOM_READY_QUEUEING
	];

	/**
	 * Currently:
	 * - The order that these are listed in the transaction is critical:
	 * - Suppresses events.
	 * - Restores selection range.
	 *
	 * Future:
	 * - Restore document/overflow scroll positions that were unintentionally
	 *   modified via DOM insertions above the top viewport boundary.
	 * - Implement/integrate with customized constraint based layout system and keep
	 *   track of which dimensions must be remeasured.
	 *
	 * @class ReactReconcileTransaction
	 */
	function ReactReconcileTransaction() {
	  this.reinitializeTransaction();
	  // Only server-side rendering really needs this option (see
	  // `ReactServerRendering`), but server-side uses
	  // `ReactServerRenderingTransaction` instead. This option is here so that it's
	  // accessible and defaults to false when `ReactDOMComponent` and
	  // `ReactTextComponent` checks it in `mountComponent`.`
	  this.renderToStaticMarkup = false;
	  this.reactMountReady = CallbackQueue.getPooled(null);
	  this.putListenerQueue = ReactPutListenerQueue.getPooled();
	}

	var Mixin = {
	  /**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array<object>} List of operation wrap proceedures.
	   *   TODO: convert to array<TransactionWrapper>
	   */
	  getTransactionWrappers: function() {
	    return TRANSACTION_WRAPPERS;
	  },

	  /**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
	  getReactMountReady: function() {
	    return this.reactMountReady;
	  },

	  getPutListenerQueue: function() {
	    return this.putListenerQueue;
	  },

	  /**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be resused.
	   */
	  destructor: function() {
	    CallbackQueue.release(this.reactMountReady);
	    this.reactMountReady = null;

	    ReactPutListenerQueue.release(this.putListenerQueue);
	    this.putListenerQueue = null;
	  }
	};


	assign(ReactReconcileTransaction.prototype, Transaction.Mixin, Mixin);

	PooledClass.addPoolingTo(ReactReconcileTransaction);

	module.exports = ReactReconcileTransaction;

	},{"103":103,"27":27,"28":28,"30":30,"6":6,"65":65,"79":79}],81:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactReconciler
	 */

	'use strict';

	var ReactRef = _dereq_(82);
	var ReactElementValidator = _dereq_(58);

	/**
	 * Helper to call ReactRef.attachRefs with this composite component, split out
	 * to avoid allocations in the transaction mount-ready queue.
	 */
	function attachRefs() {
	  ReactRef.attachRefs(this, this._currentElement);
	}

	var ReactReconciler = {

	  /**
	   * Initializes the component, renders markup, and registers event listeners.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {?string} Rendered markup to be inserted into the DOM.
	   * @final
	   * @internal
	   */
	  mountComponent: function(internalInstance, rootID, transaction, context) {
	    var markup = internalInstance.mountComponent(rootID, transaction, context);
	    if ("production" !== "development") {
	      ReactElementValidator.checkAndWarnForMutatedProps(
	        internalInstance._currentElement
	      );
	    }
	    transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
	    return markup;
	  },

	  /**
	   * Releases any resources allocated by `mountComponent`.
	   *
	   * @final
	   * @internal
	   */
	  unmountComponent: function(internalInstance) {
	    ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
	    internalInstance.unmountComponent();
	  },

	  /**
	   * Update a component using a new element.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {ReactElement} nextElement
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   * @internal
	   */
	  receiveComponent: function(
	    internalInstance, nextElement, transaction, context
	  ) {
	    var prevElement = internalInstance._currentElement;

	    if (nextElement === prevElement && nextElement._owner != null) {
	      // Since elements are immutable after the owner is rendered,
	      // we can do a cheap identity compare here to determine if this is a
	      // superfluous reconcile. It's possible for state to be mutable but such
	      // change should trigger an update of the owner which would recreate
	      // the element. We explicitly check for the existence of an owner since
	      // it's possible for an element created outside a composite to be
	      // deeply mutated and reused.
	      return;
	    }

	    if ("production" !== "development") {
	      ReactElementValidator.checkAndWarnForMutatedProps(nextElement);
	    }

	    var refsChanged = ReactRef.shouldUpdateRefs(
	      prevElement,
	      nextElement
	    );

	    if (refsChanged) {
	      ReactRef.detachRefs(internalInstance, prevElement);
	    }

	    internalInstance.receiveComponent(nextElement, transaction, context);

	    if (refsChanged) {
	      transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
	    }
	  },

	  /**
	   * Flush any dirty changes in a component.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  performUpdateIfNecessary: function(
	    internalInstance,
	    transaction
	  ) {
	    internalInstance.performUpdateIfNecessary(transaction);
	  }

	};

	module.exports = ReactReconciler;

	},{"58":58,"82":82}],82:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactRef
	 */

	'use strict';

	var ReactOwner = _dereq_(74);

	var ReactRef = {};

	function attachRef(ref, component, owner) {
	  if (typeof ref === 'function') {
	    ref(component.getPublicInstance());
	  } else {
	    // Legacy ref
	    ReactOwner.addComponentAsRefTo(component, ref, owner);
	  }
	}

	function detachRef(ref, component, owner) {
	  if (typeof ref === 'function') {
	    ref(null);
	  } else {
	    // Legacy ref
	    ReactOwner.removeComponentAsRefFrom(component, ref, owner);
	  }
	}

	ReactRef.attachRefs = function(instance, element) {
	  var ref = element.ref;
	  if (ref != null) {
	    attachRef(ref, instance, element._owner);
	  }
	};

	ReactRef.shouldUpdateRefs = function(prevElement, nextElement) {
	  // If either the owner or a `ref` has changed, make sure the newest owner
	  // has stored a reference to `this`, and the previous owner (if different)
	  // has forgotten the reference to `this`. We use the element instead
	  // of the public this.props because the post processing cannot determine
	  // a ref. The ref conceptually lives on the element.

	  // TODO: Should this even be possible? The owner cannot change because
	  // it's forbidden by shouldUpdateReactComponent. The ref can change
	  // if you swap the keys of but not the refs. Reconsider where this check
	  // is made. It probably belongs where the key checking and
	  // instantiateReactComponent is done.

	  return (
	    nextElement._owner !== prevElement._owner ||
	    nextElement.ref !== prevElement.ref
	  );
	};

	ReactRef.detachRefs = function(instance, element) {
	  var ref = element.ref;
	  if (ref != null) {
	    detachRef(ref, instance, element._owner);
	  }
	};

	module.exports = ReactRef;

	},{"74":74}],83:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactRootIndex
	 * @typechecks
	 */

	'use strict';

	var ReactRootIndexInjection = {
	  /**
	   * @param {function} _createReactRootIndex
	   */
	  injectCreateReactRootIndex: function(_createReactRootIndex) {
	    ReactRootIndex.createReactRootIndex = _createReactRootIndex;
	  }
	};

	var ReactRootIndex = {
	  createReactRootIndex: null,
	  injection: ReactRootIndexInjection
	};

	module.exports = ReactRootIndex;

	},{}],84:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactServerRendering
	 */
	'use strict';

	var ReactElement = _dereq_(57);
	var ReactInstanceHandles = _dereq_(66);
	var ReactMarkupChecksum = _dereq_(69);
	var ReactServerRenderingTransaction =
	  _dereq_(85);

	var emptyObject = _dereq_(115);
	var instantiateReactComponent = _dereq_(134);
	var invariant = _dereq_(135);

	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup
	 */
	function renderToString(element) {
	  ("production" !== "development" ? invariant(
	    ReactElement.isValidElement(element),
	    'renderToString(): You must pass a valid ReactElement.'
	  ) : invariant(ReactElement.isValidElement(element)));

	  var transaction;
	  try {
	    var id = ReactInstanceHandles.createReactRootID();
	    transaction = ReactServerRenderingTransaction.getPooled(false);

	    return transaction.perform(function() {
	      var componentInstance = instantiateReactComponent(element, null);
	      var markup =
	        componentInstance.mountComponent(id, transaction, emptyObject);
	      return ReactMarkupChecksum.addChecksumToMarkup(markup);
	    }, null);
	  } finally {
	    ReactServerRenderingTransaction.release(transaction);
	  }
	}

	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup, without the extra React ID and checksum
	 * (for generating static pages)
	 */
	function renderToStaticMarkup(element) {
	  ("production" !== "development" ? invariant(
	    ReactElement.isValidElement(element),
	    'renderToStaticMarkup(): You must pass a valid ReactElement.'
	  ) : invariant(ReactElement.isValidElement(element)));

	  var transaction;
	  try {
	    var id = ReactInstanceHandles.createReactRootID();
	    transaction = ReactServerRenderingTransaction.getPooled(true);

	    return transaction.perform(function() {
	      var componentInstance = instantiateReactComponent(element, null);
	      return componentInstance.mountComponent(id, transaction, emptyObject);
	    }, null);
	  } finally {
	    ReactServerRenderingTransaction.release(transaction);
	  }
	}

	module.exports = {
	  renderToString: renderToString,
	  renderToStaticMarkup: renderToStaticMarkup
	};

	},{"115":115,"134":134,"135":135,"57":57,"66":66,"69":69,"85":85}],85:[function(_dereq_,module,exports){
	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactServerRenderingTransaction
	 * @typechecks
	 */

	'use strict';

	var PooledClass = _dereq_(28);
	var CallbackQueue = _dereq_(6);
	var ReactPutListenerQueue = _dereq_(79);
	var Transaction = _dereq_(103);

	var assign = _dereq_(27);
	var emptyFunction = _dereq_(114);

	/**
	 * Provides a `CallbackQueue` queue for collecting `onDOMReady` callbacks
	 * during the performing of the transaction.
	 */
	var ON_DOM_READY_QUEUEING = {
	  /**
	   * Initializes the internal `onDOMReady` queue.
	   */
	  initialize: function() {
	    this.reactMountReady.reset();
	  },

	  close: emptyFunction
	};

	var PUT_LISTENER_QUEUEING = {
	  initialize: function() {
	    this.putListenerQueue.reset();
	  },

	  close: emptyFunction
	};

	/**
	 * Executed within the scope of the `Transaction` instance. Consider these as
	 * being member methods, but with an implied ordering while being isolated from
	 * each other.
	 */
	var TRANSACTION_WRAPPERS = [
	  PUT_LISTENER_QUEUEING,
	  ON_DOM_READY_QUEUEING
	];

	/**
	 * @class ReactServerRenderingTransaction
	 * @param {boolean} renderToStaticMarkup
	 */
	function ReactServerRenderingTransaction(renderToStaticMarkup) {
	  this.reinitializeTransaction();
	  this.renderToStaticMarkup = renderToStaticMarkup;
	  this.reactMountReady = CallbackQueue.getPooled(null);
	  this.putListenerQueue = ReactPutListenerQueue.getPooled();
	}

	var Mixin = {
	  /**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array} Empty list of operation wrap proceedures.
	   */
	  getTransactionWrappers: function() {
	    return TRANSACTION_WRAPPERS;
	  },

	  /**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
	  getReactMountReady: function() {
	    return this.reactMountReady;
	  },

	  getPutListenerQueue: function() {
	    return this.putListenerQueue;
	  },

	  /**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be resused.
	   */
	  destructor: function() {
	    CallbackQueue.release(this.reactMountReady);
	    this.reactMountReady = null;

	    ReactPutListenerQueue.release(this.putListenerQueue);
	    this.putListenerQueue = null;
	  }
	};


	assign(
	  ReactServerRenderingTransaction.prototype,
	  Transaction.Mixin,
	  Mixin
	);

	PooledClass.addPoolingTo(ReactServerRenderingTransaction);

	module.exports = ReactServerRenderingTransaction;

	},{"103":103,"114":114,"27":27,"28":28,"6":6,"79":79}],86:[function(_dereq_,module,exports){
	/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactUpdateQueue
	 */

	'use strict';

	var ReactLifeCycle = _dereq_(68);
	var ReactCurrentOwner = _dereq_(39);
	var ReactElement = _dereq_(57);
	var ReactInstanceMap = _dereq_(67);
	var ReactUpdates = _dereq_(87);

	var assign = _dereq_(27);
	var invariant = _dereq_(135);
	var warning = _dereq_(154);

	function enqueueUpdate(internalInstance) {
	  if (internalInstance !== ReactLifeCycle.currentlyMountingInstance) {
	    // If we're in a componentWillMount handler, don't enqueue a rerender
	    // because ReactUpdates assumes we're in a browser context (which is
	    // wrong for server rendering) and we're about to do a render anyway.
	    // See bug in #1740.
	    ReactUpdates.enqueueUpdate(internalInstance);
	  }
	}

	function getInternalInstanceReadyForUpdate(publicInstance, callerName) {
	  ("production" !== "development" ? invariant(
	    ReactCurrentOwner.current == null,
	    '%s(...): Cannot update during an existing state transition ' +
	    '(such as within `render`). Render methods should be a pure function ' +
	    'of props and state.',
	    callerName
	  ) : invariant(ReactCurrentOwner.current == null));

	  var internalInstance = ReactInstanceMap.get(publicInstance);
	  if (!internalInstance) {
	    if ("production" !== "development") {
	      // Only warn when we have a callerName. Otherwise we should be silent.
	      // We're probably calling from enqueueCallback. We don't want to warn
	      // there because we already warned for the corresponding lifecycle method.
	      ("production" !== "development" ? warning(
	        !callerName,
	        '%s(...): Can only update a mounted or mounting component. ' +
	        'This usually means you called %s() on an unmounted ' +
	        'component. This is a no-op.',
	        callerName,
	        callerName
	      ) : null);
	    }
	    return null;
	  }

	  if (internalInstance === ReactLifeCycle.currentlyUnmountingInstance) {
	    return null;
	  }

	  return internalInstance;
	}

	/**
	 * ReactUpdateQueue allows for state updates to be scheduled into a later
	 * reconciliation step.
	 */
	var ReactUpdateQueue = {

	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function(publicInstance, callback) {
	    ("production" !== "development" ? invariant(
	      typeof callback === 'function',
	      'enqueueCallback(...): You called `setProps`, `replaceProps`, ' +
	      '`setState`, `replaceState`, or `forceUpdate` with a callback that ' +
	      'isn\'t callable.'
	    ) : invariant(typeof callback === 'function'));
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance);

	    // Previously we would throw an error if we didn't have an internal
	    // instance. Since we want to make it a no-op instead, we mirror the same
	    // behavior we have in other enqueue* methods.
	    // We also need to ignore callbacks in componentWillMount. See
	    // enqueueUpdates.
	    if (!internalInstance ||
	        internalInstance === ReactLifeCycle.currentlyMountingInstance) {
	      return null;
	    }

	    if (internalInstance._pendingCallbacks) {
	      internalInstance._pendingCallbacks.push(callback);
	    } else {
	      internalInstance._pendingCallbacks = [callback];
	    }
	    // TODO: The callback here is ignored when setState is called from
	    // componentWillMount. Either fix it or disallow doing so completely in
	    // favor of getInitialState. Alternatively, we can disallow
	    // componentWillMount during server-side rendering.
	    enqueueUpdate(internalInstance);
	  },

	  enqueueCallbackInternal: function(internalInstance, callback) {
	    ("production" !== "development" ? invariant(
	      typeof callback === 'function',
	      'enqueueCallback(...): You called `setProps`, `replaceProps`, ' +
	      '`setState`, `replaceState`, or `forceUpdate` with a callback that ' +
	      'isn\'t callable.'
	    ) : invariant(typeof callback === 'function'));
	    if (internalInstance._pendingCallbacks) {
	      internalInstance._pendingCallbacks.push(callback);
	    } else {
	      internalInstance._pendingCallbacks = [callback];
	    }
	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldUpdateComponent`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function(publicInstance) {
	    var internalInstance = getInternalInstanceReadyForUpdate(
	      publicInstance,
	      'forceUpdate'
	    );

	    if (!internalInstance) {
	      return;
	    }

	    internalInstance._pendingForceUpdate = true;

	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function(publicInstance, completeState) {
	    var internalInstance = getInternalInstanceReadyForUpdate(
	      publicInstance,
	      'replaceState'
	    );

	    if (!internalInstance) {
	      return;
	    }

	    internalInstance._pendingStateQueue = [completeState];
	    internalInstance._pendingReplaceState = true;

	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function(publicInstance, partialState) {
	    var internalInstance = getInternalInstanceReadyForUpdate(
	      publicInstance,
	      'setState'
	    );

	    if (!internalInstance) {
	      return;
	    }

	    var queue =
	      internalInstance._pendingStateQueue ||
	      (internalInstance._pendingStateQueue = []);
	    queue.push(partialState);

	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Sets a subset of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialProps Subset of the next props.
	   * @internal
	   */
	  enqueueSetProps: function(publicInstance, partialProps) {
	    var internalInstance = getInternalInstanceReadyForUpdate(
	      publicInstance,
	      'setProps'
	    );

	    if (!internalInstance) {
	      return;
	    }

	    ("production" !== "development" ? invariant(
	      internalInstance._isTopLevel,
	      'setProps(...): You called `setProps` on a ' +
	      'component with a parent. This is an anti-pattern since props will ' +
	      'get reactively updated when rendered. Instead, change the owner\'s ' +
	      '`render` method to pass the correct value as props to the component ' +
	      'where it is created.'
	    ) : invariant(internalInstance._isTopLevel));

	    // Merge with the pending element if it exists, otherwise with existing
	    // element props.
	    var element = internalInstance._pendingElement ||
	                  internalInstance._currentElement;
	    var props = assign({}, element.props, partialProps);
	    internalInstance._pendingElement = ReactElement.cloneAndReplaceProps(
	      element,
	      props
	    );

	    enqueueUpdate(internalInstance);
	  },

	  /**
	   * Replaces all of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} props New props.
	   * @internal
	   */
	  enqueueReplaceProps: function(publicInstance, props) {
	    var internalInstance = getInternalInstanceReadyForUpdate(
	      publicInstance,
	      'replaceProps'
	    );

	    if (!internalInstance) {
	      return;
	    }

	    ("production" !== "development" ? invariant(
	      internalInstance._isTopLevel,
	      'replaceProps(...): You called `replaceProps` on a ' +
	      'component with a parent. This is an anti-pattern since props will ' +
	      'get reactively updated when rendered. Instead, change the owner\'s ' +
	      '`render` method to pass the correct value as props to the component ' +
	      'where it is created.'
	    ) : invariant(internalInstance._isTopLevel));

	    // Merge with the pending element if it exists, otherwise with existing
	    // element props.
	    var element = internalInstance._pendingElement ||
	                  internalInstance._currentElement;
	    internalInstance._pendingElement = ReactElement.cloneAndReplaceProps(
	      element,
	      props
	    );

	    enqueueUpdate(internalInstance);
	  },

	  enqueueElementInternal: function(internalInstance, newElement) {
	    internalInstance._pendingElement = newElement;
	    enqueueUpdate(internalInstance);
	  }

	};

	module.exports = ReactUpdateQueue;

	},{"135":135,"154":154,"27":27,"39":39,"57":57,"67":67,"68":68,"87":87}],87:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactUpdates
	 */

	'use strict';

	var CallbackQueue = _dereq_(6);
	var PooledClass = _dereq_(28);
	var ReactCurrentOwner = _dereq_(39);
	var ReactPerf = _dereq_(75);
	var ReactReconciler = _dereq_(81);
	var Transaction = _dereq_(103);

	var assign = _dereq_(27);
	var invariant = _dereq_(135);
	var warning = _dereq_(154);

	var dirtyComponents = [];
	var asapCallbackQueue = CallbackQueue.getPooled();
	var asapEnqueued = false;

	var batchingStrategy = null;

	function ensureInjected() {
	  ("production" !== "development" ? invariant(
	    ReactUpdates.ReactReconcileTransaction && batchingStrategy,
	    'ReactUpdates: must inject a reconcile transaction class and batching ' +
	    'strategy'
	  ) : invariant(ReactUpdates.ReactReconcileTransaction && batchingStrategy));
	}

	var NESTED_UPDATES = {
	  initialize: function() {
	    this.dirtyComponentsLength = dirtyComponents.length;
	  },
	  close: function() {
	    if (this.dirtyComponentsLength !== dirtyComponents.length) {
	      // Additional updates were enqueued by componentDidUpdate handlers or
	      // similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
	      // these new updates so that if A's componentDidUpdate calls setState on
	      // B, B will update before the callback A's updater provided when calling
	      // setState.
	      dirtyComponents.splice(0, this.dirtyComponentsLength);
	      flushBatchedUpdates();
	    } else {
	      dirtyComponents.length = 0;
	    }
	  }
	};

	var UPDATE_QUEUEING = {
	  initialize: function() {
	    this.callbackQueue.reset();
	  },
	  close: function() {
	    this.callbackQueue.notifyAll();
	  }
	};

	var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];

	function ReactUpdatesFlushTransaction() {
	  this.reinitializeTransaction();
	  this.dirtyComponentsLength = null;
	  this.callbackQueue = CallbackQueue.getPooled();
	  this.reconcileTransaction =
	    ReactUpdates.ReactReconcileTransaction.getPooled();
	}

	assign(
	  ReactUpdatesFlushTransaction.prototype,
	  Transaction.Mixin, {
	  getTransactionWrappers: function() {
	    return TRANSACTION_WRAPPERS;
	  },

	  destructor: function() {
	    this.dirtyComponentsLength = null;
	    CallbackQueue.release(this.callbackQueue);
	    this.callbackQueue = null;
	    ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
	    this.reconcileTransaction = null;
	  },

	  perform: function(method, scope, a) {
	    // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
	    // with this transaction's wrappers around it.
	    return Transaction.Mixin.perform.call(
	      this,
	      this.reconcileTransaction.perform,
	      this.reconcileTransaction,
	      method,
	      scope,
	      a
	    );
	  }
	});

	PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);

	function batchedUpdates(callback, a, b, c, d) {
	  ensureInjected();
	  batchingStrategy.batchedUpdates(callback, a, b, c, d);
	}

	/**
	 * Array comparator for ReactComponents by mount ordering.
	 *
	 * @param {ReactComponent} c1 first component you're comparing
	 * @param {ReactComponent} c2 second component you're comparing
	 * @return {number} Return value usable by Array.prototype.sort().
	 */
	function mountOrderComparator(c1, c2) {
	  return c1._mountOrder - c2._mountOrder;
	}

	function runBatchedUpdates(transaction) {
	  var len = transaction.dirtyComponentsLength;
	  ("production" !== "development" ? invariant(
	    len === dirtyComponents.length,
	    'Expected flush transaction\'s stored dirty-components length (%s) to ' +
	    'match dirty-components array length (%s).',
	    len,
	    dirtyComponents.length
	  ) : invariant(len === dirtyComponents.length));

	  // Since reconciling a component higher in the owner hierarchy usually (not
	  // always -- see shouldComponentUpdate()) will reconcile children, reconcile
	  // them before their children by sorting the array.
	  dirtyComponents.sort(mountOrderComparator);

	  for (var i = 0; i < len; i++) {
	    // If a component is unmounted before pending changes apply, it will still
	    // be here, but we assume that it has cleared its _pendingCallbacks and
	    // that performUpdateIfNecessary is a noop.
	    var component = dirtyComponents[i];

	    // If performUpdateIfNecessary happens to enqueue any new updates, we
	    // shouldn't execute the callbacks until the next render happens, so
	    // stash the callbacks first
	    var callbacks = component._pendingCallbacks;
	    component._pendingCallbacks = null;

	    ReactReconciler.performUpdateIfNecessary(
	      component,
	      transaction.reconcileTransaction
	    );

	    if (callbacks) {
	      for (var j = 0; j < callbacks.length; j++) {
	        transaction.callbackQueue.enqueue(
	          callbacks[j],
	          component.getPublicInstance()
	        );
	      }
	    }
	  }
	}

	var flushBatchedUpdates = function() {
	  // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
	  // array and perform any updates enqueued by mount-ready handlers (i.e.,
	  // componentDidUpdate) but we need to check here too in order to catch
	  // updates enqueued by setState callbacks and asap calls.
	  while (dirtyComponents.length || asapEnqueued) {
	    if (dirtyComponents.length) {
	      var transaction = ReactUpdatesFlushTransaction.getPooled();
	      transaction.perform(runBatchedUpdates, null, transaction);
	      ReactUpdatesFlushTransaction.release(transaction);
	    }

	    if (asapEnqueued) {
	      asapEnqueued = false;
	      var queue = asapCallbackQueue;
	      asapCallbackQueue = CallbackQueue.getPooled();
	      queue.notifyAll();
	      CallbackQueue.release(queue);
	    }
	  }
	};
	flushBatchedUpdates = ReactPerf.measure(
	  'ReactUpdates',
	  'flushBatchedUpdates',
	  flushBatchedUpdates
	);

	/**
	 * Mark a component as needing a rerender, adding an optional callback to a
	 * list of functions which will be executed once the rerender occurs.
	 */
	function enqueueUpdate(component) {
	  ensureInjected();

	  // Various parts of our code (such as ReactCompositeComponent's
	  // _renderValidatedComponent) assume that calls to render aren't nested;
	  // verify that that's the case. (This is called by each top-level update
	  // function, like setProps, setState, forceUpdate, etc.; creation and
	  // destruction of top-level components is guarded in ReactMount.)
	  ("production" !== "development" ? warning(
	    ReactCurrentOwner.current == null,
	    'enqueueUpdate(): Render methods should be a pure function of props ' +
	    'and state; triggering nested component updates from render is not ' +
	    'allowed. If necessary, trigger nested updates in ' +
	    'componentDidUpdate.'
	  ) : null);

	  if (!batchingStrategy.isBatchingUpdates) {
	    batchingStrategy.batchedUpdates(enqueueUpdate, component);
	    return;
	  }

	  dirtyComponents.push(component);
	}

	/**
	 * Enqueue a callback to be run at the end of the current batching cycle. Throws
	 * if no updates are currently being performed.
	 */
	function asap(callback, context) {
	  ("production" !== "development" ? invariant(
	    batchingStrategy.isBatchingUpdates,
	    'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where' +
	    'updates are not being batched.'
	  ) : invariant(batchingStrategy.isBatchingUpdates));
	  asapCallbackQueue.enqueue(callback, context);
	  asapEnqueued = true;
	}

	var ReactUpdatesInjection = {
	  injectReconcileTransaction: function(ReconcileTransaction) {
	    ("production" !== "development" ? invariant(
	      ReconcileTransaction,
	      'ReactUpdates: must provide a reconcile transaction class'
	    ) : invariant(ReconcileTransaction));
	    ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
	  },

	  injectBatchingStrategy: function(_batchingStrategy) {
	    ("production" !== "development" ? invariant(
	      _batchingStrategy,
	      'ReactUpdates: must provide a batching strategy'
	    ) : invariant(_batchingStrategy));
	    ("production" !== "development" ? invariant(
	      typeof _batchingStrategy.batchedUpdates === 'function',
	      'ReactUpdates: must provide a batchedUpdates() function'
	    ) : invariant(typeof _batchingStrategy.batchedUpdates === 'function'));
	    ("production" !== "development" ? invariant(
	      typeof _batchingStrategy.isBatchingUpdates === 'boolean',
	      'ReactUpdates: must provide an isBatchingUpdates boolean attribute'
	    ) : invariant(typeof _batchingStrategy.isBatchingUpdates === 'boolean'));
	    batchingStrategy = _batchingStrategy;
	  }
	};

	var ReactUpdates = {
	  /**
	   * React references `ReactReconcileTransaction` using this property in order
	   * to allow dependency injection.
	   *
	   * @internal
	   */
	  ReactReconcileTransaction: null,

	  batchedUpdates: batchedUpdates,
	  enqueueUpdate: enqueueUpdate,
	  flushBatchedUpdates: flushBatchedUpdates,
	  injection: ReactUpdatesInjection,
	  asap: asap
	};

	module.exports = ReactUpdates;

	},{"103":103,"135":135,"154":154,"27":27,"28":28,"39":39,"6":6,"75":75,"81":81}],88:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SVGDOMPropertyConfig
	 */

	/*jslint bitwise: true*/

	'use strict';

	var DOMProperty = _dereq_(10);

	var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;

	var SVGDOMPropertyConfig = {
	  Properties: {
	    clipPath: MUST_USE_ATTRIBUTE,
	    cx: MUST_USE_ATTRIBUTE,
	    cy: MUST_USE_ATTRIBUTE,
	    d: MUST_USE_ATTRIBUTE,
	    dx: MUST_USE_ATTRIBUTE,
	    dy: MUST_USE_ATTRIBUTE,
	    fill: MUST_USE_ATTRIBUTE,
	    fillOpacity: MUST_USE_ATTRIBUTE,
	    fontFamily: MUST_USE_ATTRIBUTE,
	    fontSize: MUST_USE_ATTRIBUTE,
	    fx: MUST_USE_ATTRIBUTE,
	    fy: MUST_USE_ATTRIBUTE,
	    gradientTransform: MUST_USE_ATTRIBUTE,
	    gradientUnits: MUST_USE_ATTRIBUTE,
	    markerEnd: MUST_USE_ATTRIBUTE,
	    markerMid: MUST_USE_ATTRIBUTE,
	    markerStart: MUST_USE_ATTRIBUTE,
	    offset: MUST_USE_ATTRIBUTE,
	    opacity: MUST_USE_ATTRIBUTE,
	    patternContentUnits: MUST_USE_ATTRIBUTE,
	    patternUnits: MUST_USE_ATTRIBUTE,
	    points: MUST_USE_ATTRIBUTE,
	    preserveAspectRatio: MUST_USE_ATTRIBUTE,
	    r: MUST_USE_ATTRIBUTE,
	    rx: MUST_USE_ATTRIBUTE,
	    ry: MUST_USE_ATTRIBUTE,
	    spreadMethod: MUST_USE_ATTRIBUTE,
	    stopColor: MUST_USE_ATTRIBUTE,
	    stopOpacity: MUST_USE_ATTRIBUTE,
	    stroke: MUST_USE_ATTRIBUTE,
	    strokeDasharray: MUST_USE_ATTRIBUTE,
	    strokeLinecap: MUST_USE_ATTRIBUTE,
	    strokeOpacity: MUST_USE_ATTRIBUTE,
	    strokeWidth: MUST_USE_ATTRIBUTE,
	    textAnchor: MUST_USE_ATTRIBUTE,
	    transform: MUST_USE_ATTRIBUTE,
	    version: MUST_USE_ATTRIBUTE,
	    viewBox: MUST_USE_ATTRIBUTE,
	    x1: MUST_USE_ATTRIBUTE,
	    x2: MUST_USE_ATTRIBUTE,
	    x: MUST_USE_ATTRIBUTE,
	    y1: MUST_USE_ATTRIBUTE,
	    y2: MUST_USE_ATTRIBUTE,
	    y: MUST_USE_ATTRIBUTE
	  },
	  DOMAttributeNames: {
	    clipPath: 'clip-path',
	    fillOpacity: 'fill-opacity',
	    fontFamily: 'font-family',
	    fontSize: 'font-size',
	    gradientTransform: 'gradientTransform',
	    gradientUnits: 'gradientUnits',
	    markerEnd: 'marker-end',
	    markerMid: 'marker-mid',
	    markerStart: 'marker-start',
	    patternContentUnits: 'patternContentUnits',
	    patternUnits: 'patternUnits',
	    preserveAspectRatio: 'preserveAspectRatio',
	    spreadMethod: 'spreadMethod',
	    stopColor: 'stop-color',
	    stopOpacity: 'stop-opacity',
	    strokeDasharray: 'stroke-dasharray',
	    strokeLinecap: 'stroke-linecap',
	    strokeOpacity: 'stroke-opacity',
	    strokeWidth: 'stroke-width',
	    textAnchor: 'text-anchor',
	    viewBox: 'viewBox'
	  }
	};

	module.exports = SVGDOMPropertyConfig;

	},{"10":10}],89:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SelectEventPlugin
	 */

	'use strict';

	var EventConstants = _dereq_(15);
	var EventPropagators = _dereq_(20);
	var ReactInputSelection = _dereq_(65);
	var SyntheticEvent = _dereq_(95);

	var getActiveElement = _dereq_(121);
	var isTextInputElement = _dereq_(138);
	var keyOf = _dereq_(141);
	var shallowEqual = _dereq_(150);

	var topLevelTypes = EventConstants.topLevelTypes;

	var eventTypes = {
	  select: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onSelect: null}),
	      captured: keyOf({onSelectCapture: null})
	    },
	    dependencies: [
	      topLevelTypes.topBlur,
	      topLevelTypes.topContextMenu,
	      topLevelTypes.topFocus,
	      topLevelTypes.topKeyDown,
	      topLevelTypes.topMouseDown,
	      topLevelTypes.topMouseUp,
	      topLevelTypes.topSelectionChange
	    ]
	  }
	};

	var activeElement = null;
	var activeElementID = null;
	var lastSelection = null;
	var mouseDown = false;

	/**
	 * Get an object which is a unique representation of the current selection.
	 *
	 * The return value will not be consistent across nodes or browsers, but
	 * two identical selections on the same node will return identical objects.
	 *
	 * @param {DOMElement} node
	 * @param {object}
	 */
	function getSelection(node) {
	  if ('selectionStart' in node &&
	      ReactInputSelection.hasSelectionCapabilities(node)) {
	    return {
	      start: node.selectionStart,
	      end: node.selectionEnd
	    };
	  } else if (window.getSelection) {
	    var selection = window.getSelection();
	    return {
	      anchorNode: selection.anchorNode,
	      anchorOffset: selection.anchorOffset,
	      focusNode: selection.focusNode,
	      focusOffset: selection.focusOffset
	    };
	  } else if (document.selection) {
	    var range = document.selection.createRange();
	    return {
	      parentElement: range.parentElement(),
	      text: range.text,
	      top: range.boundingTop,
	      left: range.boundingLeft
	    };
	  }
	}

	/**
	 * Poll selection to see whether it's changed.
	 *
	 * @param {object} nativeEvent
	 * @return {?SyntheticEvent}
	 */
	function constructSelectEvent(nativeEvent) {
	  // Ensure we have the right element, and that the user is not dragging a
	  // selection (this matches native `select` event behavior). In HTML5, select
	  // fires only on input and textarea thus if there's no focused element we
	  // won't dispatch.
	  if (mouseDown ||
	      activeElement == null ||
	      activeElement !== getActiveElement()) {
	    return null;
	  }

	  // Only fire when selection has actually changed.
	  var currentSelection = getSelection(activeElement);
	  if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
	    lastSelection = currentSelection;

	    var syntheticEvent = SyntheticEvent.getPooled(
	      eventTypes.select,
	      activeElementID,
	      nativeEvent
	    );

	    syntheticEvent.type = 'select';
	    syntheticEvent.target = activeElement;

	    EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);

	    return syntheticEvent;
	  }
	}

	/**
	 * This plugin creates an `onSelect` event that normalizes select events
	 * across form elements.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - contentEditable
	 *
	 * This differs from native browser implementations in the following ways:
	 * - Fires on contentEditable fields as well as inputs.
	 * - Fires for collapsed selection.
	 * - Fires after user input.
	 */
	var SelectEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {

	    switch (topLevelType) {
	      // Track the input node that has focus.
	      case topLevelTypes.topFocus:
	        if (isTextInputElement(topLevelTarget) ||
	            topLevelTarget.contentEditable === 'true') {
	          activeElement = topLevelTarget;
	          activeElementID = topLevelTargetID;
	          lastSelection = null;
	        }
	        break;
	      case topLevelTypes.topBlur:
	        activeElement = null;
	        activeElementID = null;
	        lastSelection = null;
	        break;

	      // Don't fire the event while the user is dragging. This matches the
	      // semantics of the native select event.
	      case topLevelTypes.topMouseDown:
	        mouseDown = true;
	        break;
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topMouseUp:
	        mouseDown = false;
	        return constructSelectEvent(nativeEvent);

	      // Chrome and IE fire non-standard event when selection is changed (and
	      // sometimes when it hasn't).
	      // Firefox doesn't support selectionchange, so check selection status
	      // after each key entry. The selection changes after keydown and before
	      // keyup, but we check on keydown as well in the case of holding down a
	      // key, when multiple keydown events are fired but only one keyup is.
	      case topLevelTypes.topSelectionChange:
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        return constructSelectEvent(nativeEvent);
	    }
	  }
	};

	module.exports = SelectEventPlugin;

	},{"121":121,"138":138,"141":141,"15":15,"150":150,"20":20,"65":65,"95":95}],90:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ServerReactRootIndex
	 * @typechecks
	 */

	'use strict';

	/**
	 * Size of the reactRoot ID space. We generate random numbers for React root
	 * IDs and if there's a collision the events and DOM update system will
	 * get confused. In the future we need a way to generate GUIDs but for
	 * now this will work on a smaller scale.
	 */
	var GLOBAL_MOUNT_POINT_MAX = Math.pow(2, 53);

	var ServerReactRootIndex = {
	  createReactRootIndex: function() {
	    return Math.ceil(Math.random() * GLOBAL_MOUNT_POINT_MAX);
	  }
	};

	module.exports = ServerReactRootIndex;

	},{}],91:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SimpleEventPlugin
	 */

	'use strict';

	var EventConstants = _dereq_(15);
	var EventPluginUtils = _dereq_(19);
	var EventPropagators = _dereq_(20);
	var SyntheticClipboardEvent = _dereq_(92);
	var SyntheticEvent = _dereq_(95);
	var SyntheticFocusEvent = _dereq_(96);
	var SyntheticKeyboardEvent = _dereq_(98);
	var SyntheticMouseEvent = _dereq_(99);
	var SyntheticDragEvent = _dereq_(94);
	var SyntheticTouchEvent = _dereq_(100);
	var SyntheticUIEvent = _dereq_(101);
	var SyntheticWheelEvent = _dereq_(102);

	var getEventCharCode = _dereq_(122);

	var invariant = _dereq_(135);
	var keyOf = _dereq_(141);
	var warning = _dereq_(154);

	var topLevelTypes = EventConstants.topLevelTypes;

	var eventTypes = {
	  blur: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onBlur: true}),
	      captured: keyOf({onBlurCapture: true})
	    }
	  },
	  click: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onClick: true}),
	      captured: keyOf({onClickCapture: true})
	    }
	  },
	  contextMenu: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onContextMenu: true}),
	      captured: keyOf({onContextMenuCapture: true})
	    }
	  },
	  copy: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCopy: true}),
	      captured: keyOf({onCopyCapture: true})
	    }
	  },
	  cut: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onCut: true}),
	      captured: keyOf({onCutCapture: true})
	    }
	  },
	  doubleClick: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDoubleClick: true}),
	      captured: keyOf({onDoubleClickCapture: true})
	    }
	  },
	  drag: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDrag: true}),
	      captured: keyOf({onDragCapture: true})
	    }
	  },
	  dragEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragEnd: true}),
	      captured: keyOf({onDragEndCapture: true})
	    }
	  },
	  dragEnter: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragEnter: true}),
	      captured: keyOf({onDragEnterCapture: true})
	    }
	  },
	  dragExit: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragExit: true}),
	      captured: keyOf({onDragExitCapture: true})
	    }
	  },
	  dragLeave: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragLeave: true}),
	      captured: keyOf({onDragLeaveCapture: true})
	    }
	  },
	  dragOver: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragOver: true}),
	      captured: keyOf({onDragOverCapture: true})
	    }
	  },
	  dragStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDragStart: true}),
	      captured: keyOf({onDragStartCapture: true})
	    }
	  },
	  drop: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onDrop: true}),
	      captured: keyOf({onDropCapture: true})
	    }
	  },
	  focus: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onFocus: true}),
	      captured: keyOf({onFocusCapture: true})
	    }
	  },
	  input: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onInput: true}),
	      captured: keyOf({onInputCapture: true})
	    }
	  },
	  keyDown: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onKeyDown: true}),
	      captured: keyOf({onKeyDownCapture: true})
	    }
	  },
	  keyPress: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onKeyPress: true}),
	      captured: keyOf({onKeyPressCapture: true})
	    }
	  },
	  keyUp: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onKeyUp: true}),
	      captured: keyOf({onKeyUpCapture: true})
	    }
	  },
	  load: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onLoad: true}),
	      captured: keyOf({onLoadCapture: true})
	    }
	  },
	  error: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onError: true}),
	      captured: keyOf({onErrorCapture: true})
	    }
	  },
	  // Note: We do not allow listening to mouseOver events. Instead, use the
	  // onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
	  mouseDown: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseDown: true}),
	      captured: keyOf({onMouseDownCapture: true})
	    }
	  },
	  mouseMove: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseMove: true}),
	      captured: keyOf({onMouseMoveCapture: true})
	    }
	  },
	  mouseOut: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseOut: true}),
	      captured: keyOf({onMouseOutCapture: true})
	    }
	  },
	  mouseOver: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseOver: true}),
	      captured: keyOf({onMouseOverCapture: true})
	    }
	  },
	  mouseUp: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onMouseUp: true}),
	      captured: keyOf({onMouseUpCapture: true})
	    }
	  },
	  paste: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onPaste: true}),
	      captured: keyOf({onPasteCapture: true})
	    }
	  },
	  reset: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onReset: true}),
	      captured: keyOf({onResetCapture: true})
	    }
	  },
	  scroll: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onScroll: true}),
	      captured: keyOf({onScrollCapture: true})
	    }
	  },
	  submit: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onSubmit: true}),
	      captured: keyOf({onSubmitCapture: true})
	    }
	  },
	  touchCancel: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchCancel: true}),
	      captured: keyOf({onTouchCancelCapture: true})
	    }
	  },
	  touchEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchEnd: true}),
	      captured: keyOf({onTouchEndCapture: true})
	    }
	  },
	  touchMove: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchMove: true}),
	      captured: keyOf({onTouchMoveCapture: true})
	    }
	  },
	  touchStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchStart: true}),
	      captured: keyOf({onTouchStartCapture: true})
	    }
	  },
	  wheel: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onWheel: true}),
	      captured: keyOf({onWheelCapture: true})
	    }
	  }
	};

	var topLevelEventsToDispatchConfig = {
	  topBlur:        eventTypes.blur,
	  topClick:       eventTypes.click,
	  topContextMenu: eventTypes.contextMenu,
	  topCopy:        eventTypes.copy,
	  topCut:         eventTypes.cut,
	  topDoubleClick: eventTypes.doubleClick,
	  topDrag:        eventTypes.drag,
	  topDragEnd:     eventTypes.dragEnd,
	  topDragEnter:   eventTypes.dragEnter,
	  topDragExit:    eventTypes.dragExit,
	  topDragLeave:   eventTypes.dragLeave,
	  topDragOver:    eventTypes.dragOver,
	  topDragStart:   eventTypes.dragStart,
	  topDrop:        eventTypes.drop,
	  topError:       eventTypes.error,
	  topFocus:       eventTypes.focus,
	  topInput:       eventTypes.input,
	  topKeyDown:     eventTypes.keyDown,
	  topKeyPress:    eventTypes.keyPress,
	  topKeyUp:       eventTypes.keyUp,
	  topLoad:        eventTypes.load,
	  topMouseDown:   eventTypes.mouseDown,
	  topMouseMove:   eventTypes.mouseMove,
	  topMouseOut:    eventTypes.mouseOut,
	  topMouseOver:   eventTypes.mouseOver,
	  topMouseUp:     eventTypes.mouseUp,
	  topPaste:       eventTypes.paste,
	  topReset:       eventTypes.reset,
	  topScroll:      eventTypes.scroll,
	  topSubmit:      eventTypes.submit,
	  topTouchCancel: eventTypes.touchCancel,
	  topTouchEnd:    eventTypes.touchEnd,
	  topTouchMove:   eventTypes.touchMove,
	  topTouchStart:  eventTypes.touchStart,
	  topWheel:       eventTypes.wheel
	};

	for (var type in topLevelEventsToDispatchConfig) {
	  topLevelEventsToDispatchConfig[type].dependencies = [type];
	}

	var SimpleEventPlugin = {

	  eventTypes: eventTypes,

	  /**
	   * Same as the default implementation, except cancels the event when return
	   * value is false. This behavior will be disabled in a future release.
	   *
	   * @param {object} Event to be dispatched.
	   * @param {function} Application-level callback.
	   * @param {string} domID DOM ID to pass to the callback.
	   */
	  executeDispatch: function(event, listener, domID) {
	    var returnValue = EventPluginUtils.executeDispatch(event, listener, domID);

	    ("production" !== "development" ? warning(
	      typeof returnValue !== 'boolean',
	      'Returning `false` from an event handler is deprecated and will be ' +
	      'ignored in a future release. Instead, manually call ' +
	      'e.stopPropagation() or e.preventDefault(), as appropriate.'
	    ) : null);

	    if (returnValue === false) {
	      event.stopPropagation();
	      event.preventDefault();
	    }
	  },

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent) {
	    var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
	    if (!dispatchConfig) {
	      return null;
	    }
	    var EventConstructor;
	    switch (topLevelType) {
	      case topLevelTypes.topInput:
	      case topLevelTypes.topLoad:
	      case topLevelTypes.topError:
	      case topLevelTypes.topReset:
	      case topLevelTypes.topSubmit:
	        // HTML Events
	        // @see http://www.w3.org/TR/html5/index.html#events-0
	        EventConstructor = SyntheticEvent;
	        break;
	      case topLevelTypes.topKeyPress:
	        // FireFox creates a keypress event for function keys too. This removes
	        // the unwanted keypress events. Enter is however both printable and
	        // non-printable. One would expect Tab to be as well (but it isn't).
	        if (getEventCharCode(nativeEvent) === 0) {
	          return null;
	        }
	        /* falls through */
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        EventConstructor = SyntheticKeyboardEvent;
	        break;
	      case topLevelTypes.topBlur:
	      case topLevelTypes.topFocus:
	        EventConstructor = SyntheticFocusEvent;
	        break;
	      case topLevelTypes.topClick:
	        // Firefox creates a click event on right mouse clicks. This removes the
	        // unwanted click events.
	        if (nativeEvent.button === 2) {
	          return null;
	        }
	        /* falls through */
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topDoubleClick:
	      case topLevelTypes.topMouseDown:
	      case topLevelTypes.topMouseMove:
	      case topLevelTypes.topMouseOut:
	      case topLevelTypes.topMouseOver:
	      case topLevelTypes.topMouseUp:
	        EventConstructor = SyntheticMouseEvent;
	        break;
	      case topLevelTypes.topDrag:
	      case topLevelTypes.topDragEnd:
	      case topLevelTypes.topDragEnter:
	      case topLevelTypes.topDragExit:
	      case topLevelTypes.topDragLeave:
	      case topLevelTypes.topDragOver:
	      case topLevelTypes.topDragStart:
	      case topLevelTypes.topDrop:
	        EventConstructor = SyntheticDragEvent;
	        break;
	      case topLevelTypes.topTouchCancel:
	      case topLevelTypes.topTouchEnd:
	      case topLevelTypes.topTouchMove:
	      case topLevelTypes.topTouchStart:
	        EventConstructor = SyntheticTouchEvent;
	        break;
	      case topLevelTypes.topScroll:
	        EventConstructor = SyntheticUIEvent;
	        break;
	      case topLevelTypes.topWheel:
	        EventConstructor = SyntheticWheelEvent;
	        break;
	      case topLevelTypes.topCopy:
	      case topLevelTypes.topCut:
	      case topLevelTypes.topPaste:
	        EventConstructor = SyntheticClipboardEvent;
	        break;
	    }
	    ("production" !== "development" ? invariant(
	      EventConstructor,
	      'SimpleEventPlugin: Unhandled event type, `%s`.',
	      topLevelType
	    ) : invariant(EventConstructor));
	    var event = EventConstructor.getPooled(
	      dispatchConfig,
	      topLevelTargetID,
	      nativeEvent
	    );
	    EventPropagators.accumulateTwoPhaseDispatches(event);
	    return event;
	  }

	};

	module.exports = SimpleEventPlugin;

	},{"100":100,"101":101,"102":102,"122":122,"135":135,"141":141,"15":15,"154":154,"19":19,"20":20,"92":92,"94":94,"95":95,"96":96,"98":98,"99":99}],92:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticClipboardEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = _dereq_(95);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/clipboard-apis/
	 */
	var ClipboardEventInterface = {
	  clipboardData: function(event) {
	    return (
	      'clipboardData' in event ?
	        event.clipboardData :
	        window.clipboardData
	    );
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);

	module.exports = SyntheticClipboardEvent;

	},{"95":95}],93:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticCompositionEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = _dereq_(95);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
	 */
	var CompositionEventInterface = {
	  data: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticCompositionEvent(
	  dispatchConfig,
	  dispatchMarker,
	  nativeEvent) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticEvent.augmentClass(
	  SyntheticCompositionEvent,
	  CompositionEventInterface
	);

	module.exports = SyntheticCompositionEvent;

	},{"95":95}],94:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticDragEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticMouseEvent = _dereq_(99);

	/**
	 * @interface DragEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var DragEventInterface = {
	  dataTransfer: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);

	module.exports = SyntheticDragEvent;

	},{"99":99}],95:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticEvent
	 * @typechecks static-only
	 */

	'use strict';

	var PooledClass = _dereq_(28);

	var assign = _dereq_(27);
	var emptyFunction = _dereq_(114);
	var getEventTarget = _dereq_(125);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var EventInterface = {
	  type: null,
	  target: getEventTarget,
	  // currentTarget is set when dispatching; no use in copying it here
	  currentTarget: emptyFunction.thatReturnsNull,
	  eventPhase: null,
	  bubbles: null,
	  cancelable: null,
	  timeStamp: function(event) {
	    return event.timeStamp || Date.now();
	  },
	  defaultPrevented: null,
	  isTrusted: null
	};

	/**
	 * Synthetic events are dispatched by event plugins, typically in response to a
	 * top-level event delegation handler.
	 *
	 * These systems should generally use pooling to reduce the frequency of garbage
	 * collection. The system should check `isPersistent` to determine whether the
	 * event should be released into the pool after being dispatched. Users that
	 * need a persisted event should invoke `persist`.
	 *
	 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
	 * normalizing browser quirks. Subclasses do not necessarily have to implement a
	 * DOM interface; custom application-specific events can also subclass this.
	 *
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 */
	function SyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  this.dispatchConfig = dispatchConfig;
	  this.dispatchMarker = dispatchMarker;
	  this.nativeEvent = nativeEvent;

	  var Interface = this.constructor.Interface;
	  for (var propName in Interface) {
	    if (!Interface.hasOwnProperty(propName)) {
	      continue;
	    }
	    var normalize = Interface[propName];
	    if (normalize) {
	      this[propName] = normalize(nativeEvent);
	    } else {
	      this[propName] = nativeEvent[propName];
	    }
	  }

	  var defaultPrevented = nativeEvent.defaultPrevented != null ?
	    nativeEvent.defaultPrevented :
	    nativeEvent.returnValue === false;
	  if (defaultPrevented) {
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  } else {
	    this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
	  }
	  this.isPropagationStopped = emptyFunction.thatReturnsFalse;
	}

	assign(SyntheticEvent.prototype, {

	  preventDefault: function() {
	    this.defaultPrevented = true;
	    var event = this.nativeEvent;
	    if (event.preventDefault) {
	      event.preventDefault();
	    } else {
	      event.returnValue = false;
	    }
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  },

	  stopPropagation: function() {
	    var event = this.nativeEvent;
	    if (event.stopPropagation) {
	      event.stopPropagation();
	    } else {
	      event.cancelBubble = true;
	    }
	    this.isPropagationStopped = emptyFunction.thatReturnsTrue;
	  },

	  /**
	   * We release all dispatched `SyntheticEvent`s after each event loop, adding
	   * them back into the pool. This allows a way to hold onto a reference that
	   * won't be added back into the pool.
	   */
	  persist: function() {
	    this.isPersistent = emptyFunction.thatReturnsTrue;
	  },

	  /**
	   * Checks if this event should be released back into the pool.
	   *
	   * @return {boolean} True if this should not be released, false otherwise.
	   */
	  isPersistent: emptyFunction.thatReturnsFalse,

	  /**
	   * `PooledClass` looks for `destructor` on each instance it releases.
	   */
	  destructor: function() {
	    var Interface = this.constructor.Interface;
	    for (var propName in Interface) {
	      this[propName] = null;
	    }
	    this.dispatchConfig = null;
	    this.dispatchMarker = null;
	    this.nativeEvent = null;
	  }

	});

	SyntheticEvent.Interface = EventInterface;

	/**
	 * Helper to reduce boilerplate when creating subclasses.
	 *
	 * @param {function} Class
	 * @param {?object} Interface
	 */
	SyntheticEvent.augmentClass = function(Class, Interface) {
	  var Super = this;

	  var prototype = Object.create(Super.prototype);
	  assign(prototype, Class.prototype);
	  Class.prototype = prototype;
	  Class.prototype.constructor = Class;

	  Class.Interface = assign({}, Super.Interface, Interface);
	  Class.augmentClass = Super.augmentClass;

	  PooledClass.addPoolingTo(Class, PooledClass.threeArgumentPooler);
	};

	PooledClass.addPoolingTo(SyntheticEvent, PooledClass.threeArgumentPooler);

	module.exports = SyntheticEvent;

	},{"114":114,"125":125,"27":27,"28":28}],96:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticFocusEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = _dereq_(101);

	/**
	 * @interface FocusEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var FocusEventInterface = {
	  relatedTarget: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);

	module.exports = SyntheticFocusEvent;

	},{"101":101}],97:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticInputEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = _dereq_(95);

	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
	 *      /#events-inputevents
	 */
	var InputEventInterface = {
	  data: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticInputEvent(
	  dispatchConfig,
	  dispatchMarker,
	  nativeEvent) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticEvent.augmentClass(
	  SyntheticInputEvent,
	  InputEventInterface
	);

	module.exports = SyntheticInputEvent;

	},{"95":95}],98:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticKeyboardEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = _dereq_(101);

	var getEventCharCode = _dereq_(122);
	var getEventKey = _dereq_(123);
	var getEventModifierState = _dereq_(124);

	/**
	 * @interface KeyboardEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var KeyboardEventInterface = {
	  key: getEventKey,
	  location: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  repeat: null,
	  locale: null,
	  getModifierState: getEventModifierState,
	  // Legacy Interface
	  charCode: function(event) {
	    // `charCode` is the result of a KeyPress event and represents the value of
	    // the actual printable character.

	    // KeyPress is deprecated, but its replacement is not yet final and not
	    // implemented in any major browser. Only KeyPress has charCode.
	    if (event.type === 'keypress') {
	      return getEventCharCode(event);
	    }
	    return 0;
	  },
	  keyCode: function(event) {
	    // `keyCode` is the result of a KeyDown/Up event and represents the value of
	    // physical keyboard key.

	    // The actual meaning of the value depends on the users' keyboard layout
	    // which cannot be detected. Assuming that it is a US keyboard layout
	    // provides a surprisingly accurate mapping for US and European users.
	    // Due to this, it is left to the user to implement at this time.
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  },
	  which: function(event) {
	    // `which` is an alias for either `keyCode` or `charCode` depending on the
	    // type of the event.
	    if (event.type === 'keypress') {
	      return getEventCharCode(event);
	    }
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);

	module.exports = SyntheticKeyboardEvent;

	},{"101":101,"122":122,"123":123,"124":124}],99:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticMouseEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = _dereq_(101);
	var ViewportMetrics = _dereq_(104);

	var getEventModifierState = _dereq_(124);

	/**
	 * @interface MouseEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var MouseEventInterface = {
	  screenX: null,
	  screenY: null,
	  clientX: null,
	  clientY: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  getModifierState: getEventModifierState,
	  button: function(event) {
	    // Webkit, Firefox, IE9+
	    // which:  1 2 3
	    // button: 0 1 2 (standard)
	    var button = event.button;
	    if ('which' in event) {
	      return button;
	    }
	    // IE<9
	    // which:  undefined
	    // button: 0 0 0
	    // button: 1 4 2 (onmouseup)
	    return button === 2 ? 2 : button === 4 ? 1 : 0;
	  },
	  buttons: null,
	  relatedTarget: function(event) {
	    return event.relatedTarget || (
	      ((event.fromElement === event.srcElement ? event.toElement : event.fromElement))
	    );
	  },
	  // "Proprietary" Interface.
	  pageX: function(event) {
	    return 'pageX' in event ?
	      event.pageX :
	      event.clientX + ViewportMetrics.currentScrollLeft;
	  },
	  pageY: function(event) {
	    return 'pageY' in event ?
	      event.pageY :
	      event.clientY + ViewportMetrics.currentScrollTop;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);

	module.exports = SyntheticMouseEvent;

	},{"101":101,"104":104,"124":124}],100:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticTouchEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticUIEvent = _dereq_(101);

	var getEventModifierState = _dereq_(124);

	/**
	 * @interface TouchEvent
	 * @see http://www.w3.org/TR/touch-events/
	 */
	var TouchEventInterface = {
	  touches: null,
	  targetTouches: null,
	  changedTouches: null,
	  altKey: null,
	  metaKey: null,
	  ctrlKey: null,
	  shiftKey: null,
	  getModifierState: getEventModifierState
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);

	module.exports = SyntheticTouchEvent;

	},{"101":101,"124":124}],101:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticUIEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticEvent = _dereq_(95);

	var getEventTarget = _dereq_(125);

	/**
	 * @interface UIEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var UIEventInterface = {
	  view: function(event) {
	    if (event.view) {
	      return event.view;
	    }

	    var target = getEventTarget(event);
	    if (target != null && target.window === target) {
	      // target is a window object
	      return target;
	    }

	    var doc = target.ownerDocument;
	    // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	    if (doc) {
	      return doc.defaultView || doc.parentWindow;
	    } else {
	      return window;
	    }
	  },
	  detail: function(event) {
	    return event.detail || 0;
	  }
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);

	module.exports = SyntheticUIEvent;

	},{"125":125,"95":95}],102:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticWheelEvent
	 * @typechecks static-only
	 */

	'use strict';

	var SyntheticMouseEvent = _dereq_(99);

	/**
	 * @interface WheelEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var WheelEventInterface = {
	  deltaX: function(event) {
	    return (
	      'deltaX' in event ? event.deltaX :
	      // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
	      'wheelDeltaX' in event ? -event.wheelDeltaX : 0
	    );
	  },
	  deltaY: function(event) {
	    return (
	      'deltaY' in event ? event.deltaY :
	      // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
	      'wheelDeltaY' in event ? -event.wheelDeltaY :
	      // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
	      'wheelDelta' in event ? -event.wheelDelta : 0
	    );
	  },
	  deltaZ: null,

	  // Browsers without "deltaMode" is reporting in raw wheel delta where one
	  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
	  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
	  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
	  deltaMode: null
	};

	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticMouseEvent}
	 */
	function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent) {
	  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
	}

	SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);

	module.exports = SyntheticWheelEvent;

	},{"99":99}],103:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Transaction
	 */

	'use strict';

	var invariant = _dereq_(135);

	/**
	 * `Transaction` creates a black box that is able to wrap any method such that
	 * certain invariants are maintained before and after the method is invoked
	 * (Even if an exception is thrown while invoking the wrapped method). Whoever
	 * instantiates a transaction can provide enforcers of the invariants at
	 * creation time. The `Transaction` class itself will supply one additional
	 * automatic invariant for you - the invariant that any transaction instance
	 * should not be run while it is already being run. You would typically create a
	 * single instance of a `Transaction` for reuse multiple times, that potentially
	 * is used to wrap several different methods. Wrappers are extremely simple -
	 * they only require implementing two methods.
	 *
	 * <pre>
	 *                       wrappers (injected at creation time)
	 *                                      +        +
	 *                                      |        |
	 *                    +-----------------|--------|--------------+
	 *                    |                 v        |              |
	 *                    |      +---------------+   |              |
	 *                    |   +--|    wrapper1   |---|----+         |
	 *                    |   |  +---------------+   v    |         |
	 *                    |   |          +-------------+  |         |
	 *                    |   |     +----|   wrapper2  |--------+   |
	 *                    |   |     |    +-------------+  |     |   |
	 *                    |   |     |                     |     |   |
	 *                    |   v     v                     v     v   | wrapper
	 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
	 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
	 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | +---+ +---+   +---------+   +---+ +---+ |
	 *                    |  initialize                    close    |
	 *                    +-----------------------------------------+
	 * </pre>
	 *
	 * Use cases:
	 * - Preserving the input selection ranges before/after reconciliation.
	 *   Restoring selection even in the event of an unexpected error.
	 * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
	 *   while guaranteeing that afterwards, the event system is reactivated.
	 * - Flushing a queue of collected DOM mutations to the main UI thread after a
	 *   reconciliation takes place in a worker thread.
	 * - Invoking any collected `componentDidUpdate` callbacks after rendering new
	 *   content.
	 * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
	 *   to preserve the `scrollTop` (an automatic scroll aware DOM).
	 * - (Future use case): Layout calculations before and after DOM updates.
	 *
	 * Transactional plugin API:
	 * - A module that has an `initialize` method that returns any precomputation.
	 * - and a `close` method that accepts the precomputation. `close` is invoked
	 *   when the wrapped process is completed, or has failed.
	 *
	 * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
	 * that implement `initialize` and `close`.
	 * @return {Transaction} Single transaction for reuse in thread.
	 *
	 * @class Transaction
	 */
	var Mixin = {
	  /**
	   * Sets up this instance so that it is prepared for collecting metrics. Does
	   * so such that this setup method may be used on an instance that is already
	   * initialized, in a way that does not consume additional memory upon reuse.
	   * That can be useful if you decide to make your subclass of this mixin a
	   * "PooledClass".
	   */
	  reinitializeTransaction: function() {
	    this.transactionWrappers = this.getTransactionWrappers();
	    if (!this.wrapperInitData) {
	      this.wrapperInitData = [];
	    } else {
	      this.wrapperInitData.length = 0;
	    }
	    this._isInTransaction = false;
	  },

	  _isInTransaction: false,

	  /**
	   * @abstract
	   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
	   */
	  getTransactionWrappers: null,

	  isInTransaction: function() {
	    return !!this._isInTransaction;
	  },

	  /**
	   * Executes the function within a safety window. Use this for the top level
	   * methods that result in large amounts of computation/mutations that would
	   * need to be safety checked.
	   *
	   * @param {function} method Member of scope to call.
	   * @param {Object} scope Scope to invoke from.
	   * @param {Object?=} args... Arguments to pass to the method (optional).
	   *                           Helps prevent need to bind in many cases.
	   * @return Return value from `method`.
	   */
	  perform: function(method, scope, a, b, c, d, e, f) {
	    ("production" !== "development" ? invariant(
	      !this.isInTransaction(),
	      'Transaction.perform(...): Cannot initialize a transaction when there ' +
	      'is already an outstanding transaction.'
	    ) : invariant(!this.isInTransaction()));
	    var errorThrown;
	    var ret;
	    try {
	      this._isInTransaction = true;
	      // Catching errors makes debugging more difficult, so we start with
	      // errorThrown set to true before setting it to false after calling
	      // close -- if it's still set to true in the finally block, it means
	      // one of these calls threw.
	      errorThrown = true;
	      this.initializeAll(0);
	      ret = method.call(scope, a, b, c, d, e, f);
	      errorThrown = false;
	    } finally {
	      try {
	        if (errorThrown) {
	          // If `method` throws, prefer to show that stack trace over any thrown
	          // by invoking `closeAll`.
	          try {
	            this.closeAll(0);
	          } catch (err) {
	          }
	        } else {
	          // Since `method` didn't throw, we don't want to silence the exception
	          // here.
	          this.closeAll(0);
	        }
	      } finally {
	        this._isInTransaction = false;
	      }
	    }
	    return ret;
	  },

	  initializeAll: function(startIndex) {
	    var transactionWrappers = this.transactionWrappers;
	    for (var i = startIndex; i < transactionWrappers.length; i++) {
	      var wrapper = transactionWrappers[i];
	      try {
	        // Catching errors makes debugging more difficult, so we start with the
	        // OBSERVED_ERROR state before overwriting it with the real return value
	        // of initialize -- if it's still set to OBSERVED_ERROR in the finally
	        // block, it means wrapper.initialize threw.
	        this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;
	        this.wrapperInitData[i] = wrapper.initialize ?
	          wrapper.initialize.call(this) :
	          null;
	      } finally {
	        if (this.wrapperInitData[i] === Transaction.OBSERVED_ERROR) {
	          // The initializer for wrapper i threw an error; initialize the
	          // remaining wrappers but silence any exceptions from them to ensure
	          // that the first error is the one to bubble up.
	          try {
	            this.initializeAll(i + 1);
	          } catch (err) {
	          }
	        }
	      }
	    }
	  },

	  /**
	   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
	   * them the respective return values of `this.transactionWrappers.init[i]`
	   * (`close`rs that correspond to initializers that failed will not be
	   * invoked).
	   */
	  closeAll: function(startIndex) {
	    ("production" !== "development" ? invariant(
	      this.isInTransaction(),
	      'Transaction.closeAll(): Cannot close transaction when none are open.'
	    ) : invariant(this.isInTransaction()));
	    var transactionWrappers = this.transactionWrappers;
	    for (var i = startIndex; i < transactionWrappers.length; i++) {
	      var wrapper = transactionWrappers[i];
	      var initData = this.wrapperInitData[i];
	      var errorThrown;
	      try {
	        // Catching errors makes debugging more difficult, so we start with
	        // errorThrown set to true before setting it to false after calling
	        // close -- if it's still set to true in the finally block, it means
	        // wrapper.close threw.
	        errorThrown = true;
	        if (initData !== Transaction.OBSERVED_ERROR && wrapper.close) {
	          wrapper.close.call(this, initData);
	        }
	        errorThrown = false;
	      } finally {
	        if (errorThrown) {
	          // The closer for wrapper i threw an error; close the remaining
	          // wrappers but silence any exceptions from them to ensure that the
	          // first error is the one to bubble up.
	          try {
	            this.closeAll(i + 1);
	          } catch (e) {
	          }
	        }
	      }
	    }
	    this.wrapperInitData.length = 0;
	  }
	};

	var Transaction = {

	  Mixin: Mixin,

	  /**
	   * Token to look for to determine if an error occured.
	   */
	  OBSERVED_ERROR: {}

	};

	module.exports = Transaction;

	},{"135":135}],104:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ViewportMetrics
	 */

	'use strict';

	var ViewportMetrics = {

	  currentScrollLeft: 0,

	  currentScrollTop: 0,

	  refreshScrollValues: function(scrollPosition) {
	    ViewportMetrics.currentScrollLeft = scrollPosition.x;
	    ViewportMetrics.currentScrollTop = scrollPosition.y;
	  }

	};

	module.exports = ViewportMetrics;

	},{}],105:[function(_dereq_,module,exports){
	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule accumulateInto
	 */

	'use strict';

	var invariant = _dereq_(135);

	/**
	 *
	 * Accumulates items that must not be null or undefined into the first one. This
	 * is used to conserve memory by avoiding array allocations, and thus sacrifices
	 * API cleanness. Since `current` can be null before being passed in and not
	 * null after this function, make sure to assign it back to `current`:
	 *
	 * `a = accumulateInto(a, b);`
	 *
	 * This API should be sparingly used. Try `accumulate` for something cleaner.
	 *
	 * @return {*|array<*>} An accumulation of items.
	 */

	function accumulateInto(current, next) {
	  ("production" !== "development" ? invariant(
	    next != null,
	    'accumulateInto(...): Accumulated items must not be null or undefined.'
	  ) : invariant(next != null));
	  if (current == null) {
	    return next;
	  }

	  // Both are not empty. Warning: Never call x.concat(y) when you are not
	  // certain that x is an Array (x could be a string with concat method).
	  var currentIsArray = Array.isArray(current);
	  var nextIsArray = Array.isArray(next);

	  if (currentIsArray && nextIsArray) {
	    current.push.apply(current, next);
	    return current;
	  }

	  if (currentIsArray) {
	    current.push(next);
	    return current;
	  }

	  if (nextIsArray) {
	    // A bit too dangerous to mutate `next`.
	    return [current].concat(next);
	  }

	  return [current, next];
	}

	module.exports = accumulateInto;

	},{"135":135}],106:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule adler32
	 */

	/* jslint bitwise:true */

	'use strict';

	var MOD = 65521;

	// This is a clean-room implementation of adler32 designed for detecting
	// if markup is not what we expect it to be. It does not need to be
	// cryptographically strong, only reasonably good at detecting if markup
	// generated on the server is different than that on the client.
	function adler32(data) {
	  var a = 1;
	  var b = 0;
	  for (var i = 0; i < data.length; i++) {
	    a = (a + data.charCodeAt(i)) % MOD;
	    b = (b + a) % MOD;
	  }
	  return a | (b << 16);
	}

	module.exports = adler32;

	},{}],107:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelize
	 * @typechecks
	 */

	var _hyphenPattern = /-(.)/g;

	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function(_, character) {
	    return character.toUpperCase();
	  });
	}

	module.exports = camelize;

	},{}],108:[function(_dereq_,module,exports){
	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelizeStyleName
	 * @typechecks
	 */

	"use strict";

	var camelize = _dereq_(107);

	var msPattern = /^-ms-/;

	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}

	module.exports = camelizeStyleName;

	},{"107":107}],109:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule containsNode
	 * @typechecks
	 */

	var isTextNode = _dereq_(139);

	/*jslint bitwise:true */

	/**
	 * Checks if a given DOM node contains or is another DOM node.
	 *
	 * @param {?DOMNode} outerNode Outer DOM node.
	 * @param {?DOMNode} innerNode Inner DOM node.
	 * @return {boolean} True if `outerNode` contains or is `innerNode`.
	 */
	function containsNode(outerNode, innerNode) {
	  if (!outerNode || !innerNode) {
	    return false;
	  } else if (outerNode === innerNode) {
	    return true;
	  } else if (isTextNode(outerNode)) {
	    return false;
	  } else if (isTextNode(innerNode)) {
	    return containsNode(outerNode, innerNode.parentNode);
	  } else if (outerNode.contains) {
	    return outerNode.contains(innerNode);
	  } else if (outerNode.compareDocumentPosition) {
	    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
	  } else {
	    return false;
	  }
	}

	module.exports = containsNode;

	},{"139":139}],110:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createArrayFromMixed
	 * @typechecks
	 */

	var toArray = _dereq_(152);

	/**
	 * Perform a heuristic test to determine if an object is "array-like".
	 *
	 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
	 *   Joshu replied: "Mu."
	 *
	 * This function determines if its argument has "array nature": it returns
	 * true if the argument is an actual array, an `arguments' object, or an
	 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
	 *
	 * It will return false for other array-like objects like Filelist.
	 *
	 * @param {*} obj
	 * @return {boolean}
	 */
	function hasArrayNature(obj) {
	  return (
	    // not null/false
	    !!obj &&
	    // arrays are objects, NodeLists are functions in Safari
	    (typeof obj == 'object' || typeof obj == 'function') &&
	    // quacks like an array
	    ('length' in obj) &&
	    // not window
	    !('setInterval' in obj) &&
	    // no DOM node should be considered an array-like
	    // a 'select' element has 'length' and 'item' properties on IE8
	    (typeof obj.nodeType != 'number') &&
	    (
	      // a real array
	      (// HTMLCollection/NodeList
	      (Array.isArray(obj) ||
	      // arguments
	      ('callee' in obj) || 'item' in obj))
	    )
	  );
	}

	/**
	 * Ensure that the argument is an array by wrapping it in an array if it is not.
	 * Creates a copy of the argument if it is already an array.
	 *
	 * This is mostly useful idiomatically:
	 *
	 *   var createArrayFromMixed = require('createArrayFromMixed');
	 *
	 *   function takesOneOrMoreThings(things) {
	 *     things = createArrayFromMixed(things);
	 *     ...
	 *   }
	 *
	 * This allows you to treat `things' as an array, but accept scalars in the API.
	 *
	 * If you need to convert an array-like object, like `arguments`, into an array
	 * use toArray instead.
	 *
	 * @param {*} obj
	 * @return {array}
	 */
	function createArrayFromMixed(obj) {
	  if (!hasArrayNature(obj)) {
	    return [obj];
	  } else if (Array.isArray(obj)) {
	    return obj.slice();
	  } else {
	    return toArray(obj);
	  }
	}

	module.exports = createArrayFromMixed;

	},{"152":152}],111:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createFullPageComponent
	 * @typechecks
	 */

	'use strict';

	// Defeat circular references by requiring this directly.
	var ReactClass = _dereq_(33);
	var ReactElement = _dereq_(57);

	var invariant = _dereq_(135);

	/**
	 * Create a component that will throw an exception when unmounted.
	 *
	 * Components like <html> <head> and <body> can't be removed or added
	 * easily in a cross-browser way, however it's valuable to be able to
	 * take advantage of React's reconciliation for styling and <title>
	 * management. So we just document it and throw in dangerous cases.
	 *
	 * @param {string} tag The tag to wrap
	 * @return {function} convenience constructor of new component
	 */
	function createFullPageComponent(tag) {
	  var elementFactory = ReactElement.createFactory(tag);

	  var FullPageComponent = ReactClass.createClass({
	    tagName: tag.toUpperCase(),
	    displayName: 'ReactFullPageComponent' + tag,

	    componentWillUnmount: function() {
	      ("production" !== "development" ? invariant(
	        false,
	        '%s tried to unmount. Because of cross-browser quirks it is ' +
	        'impossible to unmount some top-level components (eg <html>, <head>, ' +
	        'and <body>) reliably and efficiently. To fix this, have a single ' +
	        'top-level component that never unmounts render these elements.',
	        this.constructor.displayName
	      ) : invariant(false));
	    },

	    render: function() {
	      return elementFactory(this.props);
	    }
	  });

	  return FullPageComponent;
	}

	module.exports = createFullPageComponent;

	},{"135":135,"33":33,"57":57}],112:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createNodesFromMarkup
	 * @typechecks
	 */

	/*jslint evil: true, sub: true */

	var ExecutionEnvironment = _dereq_(21);

	var createArrayFromMixed = _dereq_(110);
	var getMarkupWrap = _dereq_(127);
	var invariant = _dereq_(135);

	/**
	 * Dummy container used to render all markup.
	 */
	var dummyNode =
	  ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

	/**
	 * Pattern used by `getNodeName`.
	 */
	var nodeNamePattern = /^\s*<(\w+)/;

	/**
	 * Extracts the `nodeName` of the first element in a string of markup.
	 *
	 * @param {string} markup String of markup.
	 * @return {?string} Node name of the supplied markup.
	 */
	function getNodeName(markup) {
	  var nodeNameMatch = markup.match(nodeNamePattern);
	  return nodeNameMatch && nodeNameMatch[1].toLowerCase();
	}

	/**
	 * Creates an array containing the nodes rendered from the supplied markup. The
	 * optionally supplied `handleScript` function will be invoked once for each
	 * <script> element that is rendered. If no `handleScript` function is supplied,
	 * an exception is thrown if any <script> elements are rendered.
	 *
	 * @param {string} markup A string of valid HTML markup.
	 * @param {?function} handleScript Invoked once for each rendered <script>.
	 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
	 */
	function createNodesFromMarkup(markup, handleScript) {
	  var node = dummyNode;
	  ("production" !== "development" ? invariant(!!dummyNode, 'createNodesFromMarkup dummy not initialized') : invariant(!!dummyNode));
	  var nodeName = getNodeName(markup);

	  var wrap = nodeName && getMarkupWrap(nodeName);
	  if (wrap) {
	    node.innerHTML = wrap[1] + markup + wrap[2];

	    var wrapDepth = wrap[0];
	    while (wrapDepth--) {
	      node = node.lastChild;
	    }
	  } else {
	    node.innerHTML = markup;
	  }

	  var scripts = node.getElementsByTagName('script');
	  if (scripts.length) {
	    ("production" !== "development" ? invariant(
	      handleScript,
	      'createNodesFromMarkup(...): Unexpected <script> element rendered.'
	    ) : invariant(handleScript));
	    createArrayFromMixed(scripts).forEach(handleScript);
	  }

	  var nodes = createArrayFromMixed(node.childNodes);
	  while (node.lastChild) {
	    node.removeChild(node.lastChild);
	  }
	  return nodes;
	}

	module.exports = createNodesFromMarkup;

	},{"110":110,"127":127,"135":135,"21":21}],113:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule dangerousStyleValue
	 * @typechecks static-only
	 */

	'use strict';

	var CSSProperty = _dereq_(4);

	var isUnitlessNumber = CSSProperty.isUnitlessNumber;

	/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @return {string} Normalized style value with dimensions applied.
	 */
	function dangerousStyleValue(name, value) {
	  // Note that we've removed escapeTextForBrowser() calls here since the
	  // whole string will be escaped when the attribute is injected into
	  // the markup. If you provide unsafe user data here they can inject
	  // arbitrary CSS which may be problematic (I couldn't repro this):
	  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	  // This is not an XSS hole but instead a potential CSS injection issue
	  // which has lead to a greater discussion about how we're going to
	  // trust URLs moving forward. See #2115901

	  var isEmpty = value == null || typeof value === 'boolean' || value === '';
	  if (isEmpty) {
	    return '';
	  }

	  var isNonNumeric = isNaN(value);
	  if (isNonNumeric || value === 0 ||
	      isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
	    return '' + value; // cast to string
	  }

	  if (typeof value === 'string') {
	    value = value.trim();
	  }
	  return value + 'px';
	}

	module.exports = dangerousStyleValue;

	},{"4":4}],114:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyFunction
	 */

	function makeEmptyFunction(arg) {
	  return function() {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function() { return this; };
	emptyFunction.thatReturnsArgument = function(arg) { return arg; };

	module.exports = emptyFunction;

	},{}],115:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyObject
	 */

	"use strict";

	var emptyObject = {};

	if ("production" !== "development") {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;

	},{}],116:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule escapeTextContentForBrowser
	 */

	'use strict';

	var ESCAPE_LOOKUP = {
	  '&': '&amp;',
	  '>': '&gt;',
	  '<': '&lt;',
	  '"': '&quot;',
	  '\'': '&#x27;'
	};

	var ESCAPE_REGEX = /[&><"']/g;

	function escaper(match) {
	  return ESCAPE_LOOKUP[match];
	}

	/**
	 * Escapes text to prevent scripting attacks.
	 *
	 * @param {*} text Text value to escape.
	 * @return {string} An escaped string.
	 */
	function escapeTextContentForBrowser(text) {
	  return ('' + text).replace(ESCAPE_REGEX, escaper);
	}

	module.exports = escapeTextContentForBrowser;

	},{}],117:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule findDOMNode
	 * @typechecks static-only
	 */

	'use strict';

	var ReactCurrentOwner = _dereq_(39);
	var ReactInstanceMap = _dereq_(67);
	var ReactMount = _dereq_(70);

	var invariant = _dereq_(135);
	var isNode = _dereq_(137);
	var warning = _dereq_(154);

	/**
	 * Returns the DOM node rendered by this element.
	 *
	 * @param {ReactComponent|DOMElement} componentOrElement
	 * @return {DOMElement} The root node of this element.
	 */
	function findDOMNode(componentOrElement) {
	  if ("production" !== "development") {
	    var owner = ReactCurrentOwner.current;
	    if (owner !== null) {
	      ("production" !== "development" ? warning(
	        owner._warnedAboutRefsInRender,
	        '%s is accessing getDOMNode or findDOMNode inside its render(). ' +
	        'render() should be a pure function of props and state. It should ' +
	        'never access something that requires stale data from the previous ' +
	        'render, such as refs. Move this logic to componentDidMount and ' +
	        'componentDidUpdate instead.',
	        owner.getName() || 'A component'
	      ) : null);
	      owner._warnedAboutRefsInRender = true;
	    }
	  }
	  if (componentOrElement == null) {
	    return null;
	  }
	  if (isNode(componentOrElement)) {
	    return componentOrElement;
	  }
	  if (ReactInstanceMap.has(componentOrElement)) {
	    return ReactMount.getNodeFromInstance(componentOrElement);
	  }
	  ("production" !== "development" ? invariant(
	    componentOrElement.render == null ||
	    typeof componentOrElement.render !== 'function',
	    'Component (with keys: %s) contains `render` method ' +
	    'but is not mounted in the DOM',
	    Object.keys(componentOrElement)
	  ) : invariant(componentOrElement.render == null ||
	  typeof componentOrElement.render !== 'function'));
	  ("production" !== "development" ? invariant(
	    false,
	    'Element appears to be neither ReactComponent nor DOMNode (keys: %s)',
	    Object.keys(componentOrElement)
	  ) : invariant(false));
	}

	module.exports = findDOMNode;

	},{"135":135,"137":137,"154":154,"39":39,"67":67,"70":70}],118:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule flattenChildren
	 */

	'use strict';

	var traverseAllChildren = _dereq_(153);
	var warning = _dereq_(154);

	/**
	 * @param {function} traverseContext Context passed through traversal.
	 * @param {?ReactComponent} child React child component.
	 * @param {!string} name String name of key path to child.
	 */
	function flattenSingleChildIntoContext(traverseContext, child, name) {
	  // We found a component instance.
	  var result = traverseContext;
	  var keyUnique = !result.hasOwnProperty(name);
	  if ("production" !== "development") {
	    ("production" !== "development" ? warning(
	      keyUnique,
	      'flattenChildren(...): Encountered two children with the same key, ' +
	      '`%s`. Child keys must be unique; when two children share a key, only ' +
	      'the first child will be used.',
	      name
	    ) : null);
	  }
	  if (keyUnique && child != null) {
	    result[name] = child;
	  }
	}

	/**
	 * Flattens children that are typically specified as `props.children`. Any null
	 * children will not be included in the resulting object.
	 * @return {!object} flattened children keyed by name.
	 */
	function flattenChildren(children) {
	  if (children == null) {
	    return children;
	  }
	  var result = {};
	  traverseAllChildren(children, flattenSingleChildIntoContext, result);
	  return result;
	}

	module.exports = flattenChildren;

	},{"153":153,"154":154}],119:[function(_dereq_,module,exports){
	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule focusNode
	 */

	"use strict";

	/**
	 * @param {DOMElement} node input/textarea to focus
	 */
	function focusNode(node) {
	  // IE8 can throw "Can't move focus to the control because it is invisible,
	  // not enabled, or of a type that does not accept the focus." for all kinds of
	  // reasons that are too expensive and fragile to test.
	  try {
	    node.focus();
	  } catch(e) {
	  }
	}

	module.exports = focusNode;

	},{}],120:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule forEachAccumulated
	 */

	'use strict';

	/**
	 * @param {array} an "accumulation" of items which is either an Array or
	 * a single item. Useful when paired with the `accumulate` module. This is a
	 * simple utility that allows us to reason about a collection of items, but
	 * handling the case when there is exactly one item (and we do not need to
	 * allocate an array).
	 */
	var forEachAccumulated = function(arr, cb, scope) {
	  if (Array.isArray(arr)) {
	    arr.forEach(cb, scope);
	  } else if (arr) {
	    cb.call(scope, arr);
	  }
	};

	module.exports = forEachAccumulated;

	},{}],121:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getActiveElement
	 * @typechecks
	 */

	/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document body is not yet defined.
	 */
	function getActiveElement() /*?DOMElement*/ {
	  try {
	    return document.activeElement || document.body;
	  } catch (e) {
	    return document.body;
	  }
	}

	module.exports = getActiveElement;

	},{}],122:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventCharCode
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * `charCode` represents the actual "character code" and is safe to use with
	 * `String.fromCharCode`. As such, only keys that correspond to printable
	 * characters produce a valid `charCode`, the only exception to this is Enter.
	 * The Tab-key is considered non-printable and does not have a `charCode`,
	 * presumably because it does not produce a tab-character in browsers.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {string} Normalized `charCode` property.
	 */
	function getEventCharCode(nativeEvent) {
	  var charCode;
	  var keyCode = nativeEvent.keyCode;

	  if ('charCode' in nativeEvent) {
	    charCode = nativeEvent.charCode;

	    // FF does not set `charCode` for the Enter-key, check against `keyCode`.
	    if (charCode === 0 && keyCode === 13) {
	      charCode = 13;
	    }
	  } else {
	    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
	    charCode = keyCode;
	  }

	  // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
	  // Must not discard the (non-)printable Enter-key.
	  if (charCode >= 32 || charCode === 13) {
	    return charCode;
	  }

	  return 0;
	}

	module.exports = getEventCharCode;

	},{}],123:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventKey
	 * @typechecks static-only
	 */

	'use strict';

	var getEventCharCode = _dereq_(122);

	/**
	 * Normalization of deprecated HTML5 `key` values
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var normalizeKey = {
	  'Esc': 'Escape',
	  'Spacebar': ' ',
	  'Left': 'ArrowLeft',
	  'Up': 'ArrowUp',
	  'Right': 'ArrowRight',
	  'Down': 'ArrowDown',
	  'Del': 'Delete',
	  'Win': 'OS',
	  'Menu': 'ContextMenu',
	  'Apps': 'ContextMenu',
	  'Scroll': 'ScrollLock',
	  'MozPrintableKey': 'Unidentified'
	};

	/**
	 * Translation from legacy `keyCode` to HTML5 `key`
	 * Only special keys supported, all others depend on keyboard layout or browser
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var translateToKey = {
	  8: 'Backspace',
	  9: 'Tab',
	  12: 'Clear',
	  13: 'Enter',
	  16: 'Shift',
	  17: 'Control',
	  18: 'Alt',
	  19: 'Pause',
	  20: 'CapsLock',
	  27: 'Escape',
	  32: ' ',
	  33: 'PageUp',
	  34: 'PageDown',
	  35: 'End',
	  36: 'Home',
	  37: 'ArrowLeft',
	  38: 'ArrowUp',
	  39: 'ArrowRight',
	  40: 'ArrowDown',
	  45: 'Insert',
	  46: 'Delete',
	  112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6',
	  118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12',
	  144: 'NumLock',
	  145: 'ScrollLock',
	  224: 'Meta'
	};

	/**
	 * @param {object} nativeEvent Native browser event.
	 * @return {string} Normalized `key` property.
	 */
	function getEventKey(nativeEvent) {
	  if (nativeEvent.key) {
	    // Normalize inconsistent values reported by browsers due to
	    // implementations of a working draft specification.

	    // FireFox implements `key` but returns `MozPrintableKey` for all
	    // printable characters (normalized to `Unidentified`), ignore it.
	    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
	    if (key !== 'Unidentified') {
	      return key;
	    }
	  }

	  // Browser does not implement `key`, polyfill as much of it as we can.
	  if (nativeEvent.type === 'keypress') {
	    var charCode = getEventCharCode(nativeEvent);

	    // The enter-key is technically both printable and non-printable and can
	    // thus be captured by `keypress`, no other non-printable key should.
	    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
	  }
	  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
	    // While user keyboard layout determines the actual meaning of each
	    // `keyCode` value, almost all function keys have a universal value.
	    return translateToKey[nativeEvent.keyCode] || 'Unidentified';
	  }
	  return '';
	}

	module.exports = getEventKey;

	},{"122":122}],124:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventModifierState
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Translation from modifier key to the associated property in the event.
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
	 */

	var modifierKeyToProp = {
	  'Alt': 'altKey',
	  'Control': 'ctrlKey',
	  'Meta': 'metaKey',
	  'Shift': 'shiftKey'
	};

	// IE8 does not implement getModifierState so we simply map it to the only
	// modifier keys exposed by the event itself, does not support Lock-keys.
	// Currently, all major browsers except Chrome seems to support Lock-keys.
	function modifierStateGetter(keyArg) {
	  /*jshint validthis:true */
	  var syntheticEvent = this;
	  var nativeEvent = syntheticEvent.nativeEvent;
	  if (nativeEvent.getModifierState) {
	    return nativeEvent.getModifierState(keyArg);
	  }
	  var keyProp = modifierKeyToProp[keyArg];
	  return keyProp ? !!nativeEvent[keyProp] : false;
	}

	function getEventModifierState(nativeEvent) {
	  return modifierStateGetter;
	}

	module.exports = getEventModifierState;

	},{}],125:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventTarget
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Gets the target node from a native browser event by accounting for
	 * inconsistencies in browser DOM APIs.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {DOMEventTarget} Target node.
	 */
	function getEventTarget(nativeEvent) {
	  var target = nativeEvent.target || nativeEvent.srcElement || window;
	  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
	  // @see http://www.quirksmode.org/js/events_properties.html
	  return target.nodeType === 3 ? target.parentNode : target;
	}

	module.exports = getEventTarget;

	},{}],126:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getIteratorFn
	 * @typechecks static-only
	 */

	'use strict';

	/* global Symbol */
	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (
	    (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL])
	  );
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}

	module.exports = getIteratorFn;

	},{}],127:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getMarkupWrap
	 */

	var ExecutionEnvironment = _dereq_(21);

	var invariant = _dereq_(135);

	/**
	 * Dummy container used to detect which wraps are necessary.
	 */
	var dummyNode =
	  ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

	/**
	 * Some browsers cannot use `innerHTML` to render certain elements standalone,
	 * so we wrap them, render the wrapped nodes, then extract the desired node.
	 *
	 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
	 */
	var shouldWrap = {
	  // Force wrapping for SVG elements because if they get created inside a <div>,
	  // they will be initialized in the wrong namespace (and will not display).
	  'circle': true,
	  'clipPath': true,
	  'defs': true,
	  'ellipse': true,
	  'g': true,
	  'line': true,
	  'linearGradient': true,
	  'path': true,
	  'polygon': true,
	  'polyline': true,
	  'radialGradient': true,
	  'rect': true,
	  'stop': true,
	  'text': true
	};

	var selectWrap = [1, '<select multiple="true">', '</select>'];
	var tableWrap = [1, '<table>', '</table>'];
	var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	var svgWrap = [1, '<svg>', '</svg>'];

	var markupWrap = {
	  '*': [1, '?<div>', '</div>'],

	  'area': [1, '<map>', '</map>'],
	  'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
	  'legend': [1, '<fieldset>', '</fieldset>'],
	  'param': [1, '<object>', '</object>'],
	  'tr': [2, '<table><tbody>', '</tbody></table>'],

	  'optgroup': selectWrap,
	  'option': selectWrap,

	  'caption': tableWrap,
	  'colgroup': tableWrap,
	  'tbody': tableWrap,
	  'tfoot': tableWrap,
	  'thead': tableWrap,

	  'td': trWrap,
	  'th': trWrap,

	  'circle': svgWrap,
	  'clipPath': svgWrap,
	  'defs': svgWrap,
	  'ellipse': svgWrap,
	  'g': svgWrap,
	  'line': svgWrap,
	  'linearGradient': svgWrap,
	  'path': svgWrap,
	  'polygon': svgWrap,
	  'polyline': svgWrap,
	  'radialGradient': svgWrap,
	  'rect': svgWrap,
	  'stop': svgWrap,
	  'text': svgWrap
	};

	/**
	 * Gets the markup wrap configuration for the supplied `nodeName`.
	 *
	 * NOTE: This lazily detects which wraps are necessary for the current browser.
	 *
	 * @param {string} nodeName Lowercase `nodeName`.
	 * @return {?array} Markup wrap configuration, if applicable.
	 */
	function getMarkupWrap(nodeName) {
	  ("production" !== "development" ? invariant(!!dummyNode, 'Markup wrapping node not initialized') : invariant(!!dummyNode));
	  if (!markupWrap.hasOwnProperty(nodeName)) {
	    nodeName = '*';
	  }
	  if (!shouldWrap.hasOwnProperty(nodeName)) {
	    if (nodeName === '*') {
	      dummyNode.innerHTML = '<link />';
	    } else {
	      dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
	    }
	    shouldWrap[nodeName] = !dummyNode.firstChild;
	  }
	  return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
	}


	module.exports = getMarkupWrap;

	},{"135":135,"21":21}],128:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getNodeForCharacterOffset
	 */

	'use strict';

	/**
	 * Given any node return the first leaf node without children.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {DOMElement|DOMTextNode}
	 */
	function getLeafNode(node) {
	  while (node && node.firstChild) {
	    node = node.firstChild;
	  }
	  return node;
	}

	/**
	 * Get the next sibling within a container. This will walk up the
	 * DOM if a node's siblings have been exhausted.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {?DOMElement|DOMTextNode}
	 */
	function getSiblingNode(node) {
	  while (node) {
	    if (node.nextSibling) {
	      return node.nextSibling;
	    }
	    node = node.parentNode;
	  }
	}

	/**
	 * Get object describing the nodes which contain characters at offset.
	 *
	 * @param {DOMElement|DOMTextNode} root
	 * @param {number} offset
	 * @return {?object}
	 */
	function getNodeForCharacterOffset(root, offset) {
	  var node = getLeafNode(root);
	  var nodeStart = 0;
	  var nodeEnd = 0;

	  while (node) {
	    if (node.nodeType === 3) {
	      nodeEnd = nodeStart + node.textContent.length;

	      if (nodeStart <= offset && nodeEnd >= offset) {
	        return {
	          node: node,
	          offset: offset - nodeStart
	        };
	      }

	      nodeStart = nodeEnd;
	    }

	    node = getLeafNode(getSiblingNode(node));
	  }
	}

	module.exports = getNodeForCharacterOffset;

	},{}],129:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getReactRootElementInContainer
	 */

	'use strict';

	var DOC_NODE_TYPE = 9;

	/**
	 * @param {DOMElement|DOMDocument} container DOM element that may contain
	 *                                           a React component
	 * @return {?*} DOM element that may have the reactRoot ID, or null.
	 */
	function getReactRootElementInContainer(container) {
	  if (!container) {
	    return null;
	  }

	  if (container.nodeType === DOC_NODE_TYPE) {
	    return container.documentElement;
	  } else {
	    return container.firstChild;
	  }
	}

	module.exports = getReactRootElementInContainer;

	},{}],130:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getTextContentAccessor
	 */

	'use strict';

	var ExecutionEnvironment = _dereq_(21);

	var contentKey = null;

	/**
	 * Gets the key used to access text content on a DOM node.
	 *
	 * @return {?string} Key used to access text content.
	 * @internal
	 */
	function getTextContentAccessor() {
	  if (!contentKey && ExecutionEnvironment.canUseDOM) {
	    // Prefer textContent to innerText because many browsers support both but
	    // SVG <text> elements don't support innerText even when <div> does.
	    contentKey = 'textContent' in document.documentElement ?
	      'textContent' :
	      'innerText';
	  }
	  return contentKey;
	}

	module.exports = getTextContentAccessor;

	},{"21":21}],131:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getUnboundedScrollPosition
	 * @typechecks
	 */

	"use strict";

	/**
	 * Gets the scroll position of the supplied element or window.
	 *
	 * The return values are unbounded, unlike `getScrollPosition`. This means they
	 * may be negative or exceed the element boundaries (which is possible using
	 * inertial scrolling).
	 *
	 * @param {DOMWindow|DOMElement} scrollable
	 * @return {object} Map with `x` and `y` keys.
	 */
	function getUnboundedScrollPosition(scrollable) {
	  if (scrollable === window) {
	    return {
	      x: window.pageXOffset || document.documentElement.scrollLeft,
	      y: window.pageYOffset || document.documentElement.scrollTop
	    };
	  }
	  return {
	    x: scrollable.scrollLeft,
	    y: scrollable.scrollTop
	  };
	}

	module.exports = getUnboundedScrollPosition;

	},{}],132:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hyphenate
	 * @typechecks
	 */

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	module.exports = hyphenate;

	},{}],133:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hyphenateStyleName
	 * @typechecks
	 */

	"use strict";

	var hyphenate = _dereq_(132);

	var msPattern = /^ms-/;

	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;

	},{"132":132}],134:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule instantiateReactComponent
	 * @typechecks static-only
	 */

	'use strict';

	var ReactCompositeComponent = _dereq_(37);
	var ReactEmptyComponent = _dereq_(59);
	var ReactNativeComponent = _dereq_(73);

	var assign = _dereq_(27);
	var invariant = _dereq_(135);
	var warning = _dereq_(154);

	// To avoid a cyclic dependency, we create the final class in this module
	var ReactCompositeComponentWrapper = function() { };
	assign(
	  ReactCompositeComponentWrapper.prototype,
	  ReactCompositeComponent.Mixin,
	  {
	    _instantiateReactComponent: instantiateReactComponent
	  }
	);

	/**
	 * Check if the type reference is a known internal type. I.e. not a user
	 * provided composite type.
	 *
	 * @param {function} type
	 * @return {boolean} Returns true if this is a valid internal type.
	 */
	function isInternalComponentType(type) {
	  return (
	    typeof type === 'function' &&
	    typeof type.prototype !== 'undefined' &&
	    typeof type.prototype.mountComponent === 'function' &&
	    typeof type.prototype.receiveComponent === 'function'
	  );
	}

	/**
	 * Given a ReactNode, create an instance that will actually be mounted.
	 *
	 * @param {ReactNode} node
	 * @param {*} parentCompositeType The composite type that resolved this.
	 * @return {object} A new instance of the element's constructor.
	 * @protected
	 */
	function instantiateReactComponent(node, parentCompositeType) {
	  var instance;

	  if (node === null || node === false) {
	    node = ReactEmptyComponent.emptyElement;
	  }

	  if (typeof node === 'object') {
	    var element = node;
	    if ("production" !== "development") {
	      ("production" !== "development" ? warning(
	        element && (typeof element.type === 'function' ||
	                    typeof element.type === 'string'),
	        'Only functions or strings can be mounted as React components.'
	      ) : null);
	    }

	    // Special case string values
	    if (parentCompositeType === element.type &&
	        typeof element.type === 'string') {
	      // Avoid recursion if the wrapper renders itself.
	      instance = ReactNativeComponent.createInternalComponent(element);
	      // All native components are currently wrapped in a composite so we're
	      // safe to assume that this is what we should instantiate.
	    } else if (isInternalComponentType(element.type)) {
	      // This is temporarily available for custom components that are not string
	      // represenations. I.e. ART. Once those are updated to use the string
	      // representation, we can drop this code path.
	      instance = new element.type(element);
	    } else {
	      instance = new ReactCompositeComponentWrapper();
	    }
	  } else if (typeof node === 'string' || typeof node === 'number') {
	    instance = ReactNativeComponent.createInstanceForText(node);
	  } else {
	    ("production" !== "development" ? invariant(
	      false,
	      'Encountered invalid React node of type %s',
	      typeof node
	    ) : invariant(false));
	  }

	  if ("production" !== "development") {
	    ("production" !== "development" ? warning(
	      typeof instance.construct === 'function' &&
	      typeof instance.mountComponent === 'function' &&
	      typeof instance.receiveComponent === 'function' &&
	      typeof instance.unmountComponent === 'function',
	      'Only React Components can be mounted.'
	    ) : null);
	  }

	  // Sets up the instance. This can probably just move into the constructor now.
	  instance.construct(node);

	  // These two fields are used by the DOM and ART diffing algorithms
	  // respectively. Instead of using expandos on components, we should be
	  // storing the state needed by the diffing algorithms elsewhere.
	  instance._mountIndex = 0;
	  instance._mountImage = null;

	  if ("production" !== "development") {
	    instance._isOwnerNecessary = false;
	    instance._warnedAboutRefsInRender = false;
	  }

	  // Internal instances should fully constructed at this point, so they should
	  // not get any new fields added to them at this point.
	  if ("production" !== "development") {
	    if (Object.preventExtensions) {
	      Object.preventExtensions(instance);
	    }
	  }

	  return instance;
	}

	module.exports = instantiateReactComponent;

	},{"135":135,"154":154,"27":27,"37":37,"59":59,"73":73}],135:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if ("production" !== "development") {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	},{}],136:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isEventSupported
	 */

	'use strict';

	var ExecutionEnvironment = _dereq_(21);

	var useHasFeature;
	if (ExecutionEnvironment.canUseDOM) {
	  useHasFeature =
	    document.implementation &&
	    document.implementation.hasFeature &&
	    // always returns true in newer browsers as per the standard.
	    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	    document.implementation.hasFeature('', '') !== true;
	}

	/**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */
	function isEventSupported(eventNameSuffix, capture) {
	  if (!ExecutionEnvironment.canUseDOM ||
	      capture && !('addEventListener' in document)) {
	    return false;
	  }

	  var eventName = 'on' + eventNameSuffix;
	  var isSupported = eventName in document;

	  if (!isSupported) {
	    var element = document.createElement('div');
	    element.setAttribute(eventName, 'return;');
	    isSupported = typeof element[eventName] === 'function';
	  }

	  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
	    // This is the only way to test support for the `wheel` event in IE9+.
	    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
	  }

	  return isSupported;
	}

	module.exports = isEventSupported;

	},{"21":21}],137:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isNode
	 * @typechecks
	 */

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
	function isNode(object) {
	  return !!(object && (
	    ((typeof Node === 'function' ? object instanceof Node : typeof object === 'object' &&
	    typeof object.nodeType === 'number' &&
	    typeof object.nodeName === 'string'))
	  ));
	}

	module.exports = isNode;

	},{}],138:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isTextInputElement
	 */

	'use strict';

	/**
	 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
	 */
	var supportedInputTypes = {
	  'color': true,
	  'date': true,
	  'datetime': true,
	  'datetime-local': true,
	  'email': true,
	  'month': true,
	  'number': true,
	  'password': true,
	  'range': true,
	  'search': true,
	  'tel': true,
	  'text': true,
	  'time': true,
	  'url': true,
	  'week': true
	};

	function isTextInputElement(elem) {
	  return elem && (
	    (elem.nodeName === 'INPUT' && supportedInputTypes[elem.type] || elem.nodeName === 'TEXTAREA')
	  );
	}

	module.exports = isTextInputElement;

	},{}],139:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isTextNode
	 * @typechecks
	 */

	var isNode = _dereq_(137);

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */
	function isTextNode(object) {
	  return isNode(object) && object.nodeType == 3;
	}

	module.exports = isTextNode;

	},{"137":137}],140:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyMirror
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = _dereq_(135);

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  ("production" !== "development" ? invariant(
	    obj instanceof Object && !Array.isArray(obj),
	    'keyMirror(...): Argument must be an object.'
	  ) : invariant(obj instanceof Object && !Array.isArray(obj)));
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;

	},{"135":135}],141:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without loosing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};


	module.exports = keyOf;

	},{}],142:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule mapObject
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Executes the provided `callback` once for each enumerable own property in the
	 * object and constructs a new object from the results. The `callback` is
	 * invoked with three arguments:
	 *
	 *  - the property value
	 *  - the property name
	 *  - the object being traversed
	 *
	 * Properties that are added after the call to `mapObject` will not be visited
	 * by `callback`. If the values of existing properties are changed, the value
	 * passed to `callback` will be the value at the time `mapObject` visits them.
	 * Properties that are deleted before being visited are not visited.
	 *
	 * @grep function objectMap()
	 * @grep function objMap()
	 *
	 * @param {?object} object
	 * @param {function} callback
	 * @param {*} context
	 * @return {?object}
	 */
	function mapObject(object, callback, context) {
	  if (!object) {
	    return null;
	  }
	  var result = {};
	  for (var name in object) {
	    if (hasOwnProperty.call(object, name)) {
	      result[name] = callback.call(context, object[name], name, object);
	    }
	  }
	  return result;
	}

	module.exports = mapObject;

	},{}],143:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule memoizeStringOnly
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 *
	 * @param {function} callback
	 * @return {function}
	 */
	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function(string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}

	module.exports = memoizeStringOnly;

	},{}],144:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule onlyChild
	 */
	'use strict';

	var ReactElement = _dereq_(57);

	var invariant = _dereq_(135);

	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection. The current implementation of this
	 * function assumes that a single child gets passed without a wrapper, but the
	 * purpose of this helper function is to abstract away the particular structure
	 * of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactComponent} The first and only `ReactComponent` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  ("production" !== "development" ? invariant(
	    ReactElement.isValidElement(children),
	    'onlyChild must be passed a children with exactly one child.'
	  ) : invariant(ReactElement.isValidElement(children)));
	  return children;
	}

	module.exports = onlyChild;

	},{"135":135,"57":57}],145:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule performance
	 * @typechecks
	 */

	"use strict";

	var ExecutionEnvironment = _dereq_(21);

	var performance;

	if (ExecutionEnvironment.canUseDOM) {
	  performance =
	    window.performance ||
	    window.msPerformance ||
	    window.webkitPerformance;
	}

	module.exports = performance || {};

	},{"21":21}],146:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule performanceNow
	 * @typechecks
	 */

	var performance = _dereq_(145);

	/**
	 * Detect if we can use `window.performance.now()` and gracefully fallback to
	 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	 * because of Facebook's testing infrastructure.
	 */
	if (!performance || !performance.now) {
	  performance = Date;
	}

	var performanceNow = performance.now.bind(performance);

	module.exports = performanceNow;

	},{"145":145}],147:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule quoteAttributeValueForBrowser
	 */

	'use strict';

	var escapeTextContentForBrowser = _dereq_(116);

	/**
	 * Escapes attribute value to prevent scripting attacks.
	 *
	 * @param {*} value Value to escape.
	 * @return {string} An escaped string.
	 */
	function quoteAttributeValueForBrowser(value) {
	  return '"' + escapeTextContentForBrowser(value) + '"';
	}

	module.exports = quoteAttributeValueForBrowser;

	},{"116":116}],148:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule setInnerHTML
	 */

	/* globals MSApp */

	'use strict';

	var ExecutionEnvironment = _dereq_(21);

	var WHITESPACE_TEST = /^[ \r\n\t\f]/;
	var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;

	/**
	 * Set the innerHTML property of a node, ensuring that whitespace is preserved
	 * even in IE8.
	 *
	 * @param {DOMElement} node
	 * @param {string} html
	 * @internal
	 */
	var setInnerHTML = function(node, html) {
	  node.innerHTML = html;
	};

	// Win8 apps: Allow all html to be inserted
	if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
	  setInnerHTML = function(node, html) {
	    MSApp.execUnsafeLocalFunction(function() {
	      node.innerHTML = html;
	    });
	  };
	}

	if (ExecutionEnvironment.canUseDOM) {
	  // IE8: When updating a just created node with innerHTML only leading
	  // whitespace is removed. When updating an existing node with innerHTML
	  // whitespace in root TextNodes is also collapsed.
	  // @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html

	  // Feature detection; only IE8 is known to behave improperly like this.
	  var testElement = document.createElement('div');
	  testElement.innerHTML = ' ';
	  if (testElement.innerHTML === '') {
	    setInnerHTML = function(node, html) {
	      // Magic theory: IE8 supposedly differentiates between added and updated
	      // nodes when processing innerHTML, innerHTML on updated nodes suffers
	      // from worse whitespace behavior. Re-adding a node like this triggers
	      // the initial and more favorable whitespace behavior.
	      // TODO: What to do on a detached node?
	      if (node.parentNode) {
	        node.parentNode.replaceChild(node, node);
	      }

	      // We also implement a workaround for non-visible tags disappearing into
	      // thin air on IE8, this only happens if there is no visible text
	      // in-front of the non-visible tags. Piggyback on the whitespace fix
	      // and simply check if any non-visible tags appear in the source.
	      if (WHITESPACE_TEST.test(html) ||
	          html[0] === '<' && NONVISIBLE_TEST.test(html)) {
	        // Recover leading whitespace by temporarily prepending any character.
	        // \uFEFF has the potential advantage of being zero-width/invisible.
	        node.innerHTML = '\uFEFF' + html;

	        // deleteData leaves an empty `TextNode` which offsets the index of all
	        // children. Definitely want to avoid this.
	        var textNode = node.firstChild;
	        if (textNode.data.length === 1) {
	          node.removeChild(textNode);
	        } else {
	          textNode.deleteData(0, 1);
	        }
	      } else {
	        node.innerHTML = html;
	      }
	    };
	  }
	}

	module.exports = setInnerHTML;

	},{"21":21}],149:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule setTextContent
	 */

	'use strict';

	var ExecutionEnvironment = _dereq_(21);
	var escapeTextContentForBrowser = _dereq_(116);
	var setInnerHTML = _dereq_(148);

	/**
	 * Set the textContent property of a node, ensuring that whitespace is preserved
	 * even in IE8. innerText is a poor substitute for textContent and, among many
	 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
	 * as it should.
	 *
	 * @param {DOMElement} node
	 * @param {string} text
	 * @internal
	 */
	var setTextContent = function(node, text) {
	  node.textContent = text;
	};

	if (ExecutionEnvironment.canUseDOM) {
	  if (!('textContent' in document.documentElement)) {
	    setTextContent = function(node, text) {
	      setInnerHTML(node, escapeTextContentForBrowser(text));
	    };
	  }
	}

	module.exports = setTextContent;

	},{"116":116,"148":148,"21":21}],150:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 */

	'use strict';

	/**
	 * Performs equality by iterating through keys on an object and returning
	 * false when any key has values which are not strictly equal between
	 * objA and objB. Returns true when the values of all keys are strictly equal.
	 *
	 * @return {boolean}
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	  var key;
	  // Test for A's keys different from B.
	  for (key in objA) {
	    if (objA.hasOwnProperty(key) &&
	        (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
	      return false;
	    }
	  }
	  // Test for B's keys missing from A.
	  for (key in objB) {
	    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = shallowEqual;

	},{}],151:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shouldUpdateReactComponent
	 * @typechecks static-only
	 */

	'use strict';

	var warning = _dereq_(154);

	/**
	 * Given a `prevElement` and `nextElement`, determines if the existing
	 * instance should be updated as opposed to being destroyed or replaced by a new
	 * instance. Both arguments are elements. This ensures that this logic can
	 * operate on stateless trees without any backing instance.
	 *
	 * @param {?object} prevElement
	 * @param {?object} nextElement
	 * @return {boolean} True if the existing instance should be updated.
	 * @protected
	 */
	function shouldUpdateReactComponent(prevElement, nextElement) {
	  if (prevElement != null && nextElement != null) {
	    var prevType = typeof prevElement;
	    var nextType = typeof nextElement;
	    if (prevType === 'string' || prevType === 'number') {
	      return (nextType === 'string' || nextType === 'number');
	    } else {
	      if (nextType === 'object' &&
	          prevElement.type === nextElement.type &&
	          prevElement.key === nextElement.key) {
	        var ownersMatch = prevElement._owner === nextElement._owner;
	        var prevName = null;
	        var nextName = null;
	        var nextDisplayName = null;
	        if ("production" !== "development") {
	          if (!ownersMatch) {
	            if (prevElement._owner != null &&
	                prevElement._owner.getPublicInstance() != null &&
	                prevElement._owner.getPublicInstance().constructor != null) {
	              prevName =
	                prevElement._owner.getPublicInstance().constructor.displayName;
	            }
	            if (nextElement._owner != null &&
	                nextElement._owner.getPublicInstance() != null &&
	                nextElement._owner.getPublicInstance().constructor != null) {
	              nextName =
	                nextElement._owner.getPublicInstance().constructor.displayName;
	            }
	            if (nextElement.type != null &&
	                nextElement.type.displayName != null) {
	              nextDisplayName = nextElement.type.displayName;
	            }
	            if (nextElement.type != null && typeof nextElement.type === 'string') {
	              nextDisplayName = nextElement.type;
	            }
	            if (typeof nextElement.type !== 'string' ||
	                nextElement.type === 'input' ||
	                nextElement.type === 'textarea') {
	              if ((prevElement._owner != null &&
	                  prevElement._owner._isOwnerNecessary === false) ||
	                  (nextElement._owner != null &&
	                  nextElement._owner._isOwnerNecessary === false)) {
	                if (prevElement._owner != null) {
	                  prevElement._owner._isOwnerNecessary = true;
	                }
	                if (nextElement._owner != null) {
	                  nextElement._owner._isOwnerNecessary = true;
	                }
	                ("production" !== "development" ? warning(
	                  false,
	                  '<%s /> is being rendered by both %s and %s using the same ' +
	                  'key (%s) in the same place. Currently, this means that ' +
	                  'they don\'t preserve state. This behavior should be very ' +
	                  'rare so we\'re considering deprecating it. Please contact ' +
	                  'the React team and explain your use case so that we can ' +
	                  'take that into consideration.',
	                  nextDisplayName || 'Unknown Component',
	                  prevName || '[Unknown]',
	                  nextName || '[Unknown]',
	                  prevElement.key
	                ) : null);
	              }
	            }
	          }
	        }
	        return ownersMatch;
	      }
	    }
	  }
	  return false;
	}

	module.exports = shouldUpdateReactComponent;

	},{"154":154}],152:[function(_dereq_,module,exports){
	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule toArray
	 * @typechecks
	 */

	var invariant = _dereq_(135);

	/**
	 * Convert array-like objects to arrays.
	 *
	 * This API assumes the caller knows the contents of the data type. For less
	 * well defined inputs use createArrayFromMixed.
	 *
	 * @param {object|function|filelist} obj
	 * @return {array}
	 */
	function toArray(obj) {
	  var length = obj.length;

	  // Some browse builtin objects can report typeof 'function' (e.g. NodeList in
	  // old versions of Safari).
	  ("production" !== "development" ? invariant(
	    !Array.isArray(obj) &&
	    (typeof obj === 'object' || typeof obj === 'function'),
	    'toArray: Array-like object expected'
	  ) : invariant(!Array.isArray(obj) &&
	  (typeof obj === 'object' || typeof obj === 'function')));

	  ("production" !== "development" ? invariant(
	    typeof length === 'number',
	    'toArray: Object needs a length property'
	  ) : invariant(typeof length === 'number'));

	  ("production" !== "development" ? invariant(
	    length === 0 ||
	    (length - 1) in obj,
	    'toArray: Object should have keys for indices'
	  ) : invariant(length === 0 ||
	  (length - 1) in obj));

	  // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
	  // without method will throw during the slice call and skip straight to the
	  // fallback.
	  if (obj.hasOwnProperty) {
	    try {
	      return Array.prototype.slice.call(obj);
	    } catch (e) {
	      // IE < 9 does not support Array#slice on collections objects
	    }
	  }

	  // Fall back to copying key by key. This assumes all keys have a value,
	  // so will not preserve sparsely populated inputs.
	  var ret = Array(length);
	  for (var ii = 0; ii < length; ii++) {
	    ret[ii] = obj[ii];
	  }
	  return ret;
	}

	module.exports = toArray;

	},{"135":135}],153:[function(_dereq_,module,exports){
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule traverseAllChildren
	 */

	'use strict';

	var ReactElement = _dereq_(57);
	var ReactFragment = _dereq_(63);
	var ReactInstanceHandles = _dereq_(66);

	var getIteratorFn = _dereq_(126);
	var invariant = _dereq_(135);
	var warning = _dereq_(154);

	var SEPARATOR = ReactInstanceHandles.SEPARATOR;
	var SUBSEPARATOR = ':';

	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */

	var userProvidedKeyEscaperLookup = {
	  '=': '=0',
	  '.': '=1',
	  ':': '=2'
	};

	var userProvidedKeyEscapeRegex = /[=.:]/g;

	var didWarnAboutMaps = false;

	function userProvidedKeyEscaper(match) {
	  return userProvidedKeyEscaperLookup[match];
	}

	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  if (component && component.key != null) {
	    // Explicit key
	    return wrapUserProvidedKey(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}

	/**
	 * Escape a component key so that it is safe to use in a reactid.
	 *
	 * @param {*} key Component key to be escaped.
	 * @return {string} An escaped string.
	 */
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(
	    userProvidedKeyEscapeRegex,
	    userProvidedKeyEscaper
	  );
	}

	/**
	 * Wrap a `key` value explicitly provided by the user to distinguish it from
	 * implicitly-generated keys generated by a component's index in its parent.
	 *
	 * @param {string} key Value of a user-provided `key` attribute
	 * @return {string}
	 */
	function wrapUserProvidedKey(key) {
	  return '$' + escapeUserProvidedKey(key);
	}

	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!number} indexSoFar Number of children encountered until this point.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(
	  children,
	  nameSoFar,
	  indexSoFar,
	  callback,
	  traverseContext
	) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  if (children === null ||
	      type === 'string' ||
	      type === 'number' ||
	      ReactElement.isValidElement(children)) {
	    callback(
	      traverseContext,
	      children,
	      // If it's the only child, treat the name as if it was wrapped in an array
	      // so that it's consistent if the number of children grows.
	      nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar,
	      indexSoFar
	    );
	    return 1;
	  }

	  var child, nextName, nextIndex;
	  var subtreeCount = 0; // Count of children found in the current subtree.

	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = (
	        (nameSoFar !== '' ? nameSoFar + SUBSEPARATOR : SEPARATOR) +
	        getComponentKey(child, i)
	      );
	      nextIndex = indexSoFar + subtreeCount;
	      subtreeCount += traverseAllChildrenImpl(
	        child,
	        nextName,
	        nextIndex,
	        callback,
	        traverseContext
	      );
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = (
	            (nameSoFar !== '' ? nameSoFar + SUBSEPARATOR : SEPARATOR) +
	            getComponentKey(child, ii++)
	          );
	          nextIndex = indexSoFar + subtreeCount;
	          subtreeCount += traverseAllChildrenImpl(
	            child,
	            nextName,
	            nextIndex,
	            callback,
	            traverseContext
	          );
	        }
	      } else {
	        if ("production" !== "development") {
	          ("production" !== "development" ? warning(
	            didWarnAboutMaps,
	            'Using Maps as children is not yet fully supported. It is an ' +
	            'experimental feature that might be removed. Convert it to a ' +
	            'sequence / iterable of keyed ReactElements instead.'
	          ) : null);
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = (
	              (nameSoFar !== '' ? nameSoFar + SUBSEPARATOR : SEPARATOR) +
	              wrapUserProvidedKey(entry[0]) + SUBSEPARATOR +
	              getComponentKey(child, 0)
	            );
	            nextIndex = indexSoFar + subtreeCount;
	            subtreeCount += traverseAllChildrenImpl(
	              child,
	              nextName,
	              nextIndex,
	              callback,
	              traverseContext
	            );
	          }
	        }
	      }
	    } else if (type === 'object') {
	      ("production" !== "development" ? invariant(
	        children.nodeType !== 1,
	        'traverseAllChildren(...): Encountered an invalid child; DOM ' +
	        'elements are not valid children of React components.'
	      ) : invariant(children.nodeType !== 1));
	      var fragment = ReactFragment.extract(children);
	      for (var key in fragment) {
	        if (fragment.hasOwnProperty(key)) {
	          child = fragment[key];
	          nextName = (
	            (nameSoFar !== '' ? nameSoFar + SUBSEPARATOR : SEPARATOR) +
	            wrapUserProvidedKey(key) + SUBSEPARATOR +
	            getComponentKey(child, 0)
	          );
	          nextIndex = indexSoFar + subtreeCount;
	          subtreeCount += traverseAllChildrenImpl(
	            child,
	            nextName,
	            nextIndex,
	            callback,
	            traverseContext
	          );
	        }
	      }
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }

	  return traverseAllChildrenImpl(children, '', 0, callback, traverseContext);
	}

	module.exports = traverseAllChildren;

	},{"126":126,"135":135,"154":154,"57":57,"63":63,"66":66}],154:[function(_dereq_,module,exports){
	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule warning
	 */

	"use strict";

	var emptyFunction = _dereq_(114);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if ("production" !== "development") {
	  warning = function(condition, format ) {for (var args=[],$__0=2,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || /^[s\W]*$/.test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function()  {return args[argIndex++];});
	      console.warn(message);
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	},{"114":114}]},{},[1])(1)
	});


/***/ },

/***/ 9:
/***/ function(module, exports) {

	/*
	 * Event
	 * Visit http://createjs.com/ for documentation, updates and examples.
	 *
	 * Copyright (c) 2010 gskinner.com, inc.
	 *
	 * Permission is hereby granted, free of charge, to any person
	 * obtaining a copy of this software and associated documentation
	 * files (the "Software"), to deal in the Software without
	 * restriction, including without limitation the rights to use,
	 * copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the
	 * Software is furnished to do so, subject to the following
	 * conditions:
	 *
	 * The above copyright notice and this permission notice shall be
	 * included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
	 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	 * OTHER DEALINGS IN THE SOFTWARE.
	 */

	/**
	 * A collection of Classes that are shared across all the CreateJS libraries.  The classes are included in the minified
	 * files of each library and are available on the createsjs namespace directly.
	 *
	 * <h4>Example</h4>
	 *
	 *      myObject.addEventListener("change", createjs.proxy(myMethod, scope));
	 *
	 * @module CreateJS
	 * @main CreateJS
	 */

	// namespace:
	if (typeof window === 'undefined') {
	    this.createjs = this.createjs || {};
	} else {
	    window.createjs = window.createjs || {};
	}

	(function () {
	    "use strict";

	    // constructor:
	    /**
	     * Contains properties and methods shared by all events for use with
	     * {{#crossLink "EventDispatcher"}}{{/crossLink}}.
	     *
	     * Note that Event objects are often reused, so you should never
	     * rely on an event object's state outside of the call stack it was received in.
	     * @class Event
	     * @param {String} type The event type.
	     * @param {Boolean} bubbles Indicates whether the event will bubble through the display list.
	     * @param {Boolean} cancelable Indicates whether the default behaviour of this event can be cancelled.
	     * @constructor
	     **/
	    function Event(type, bubbles, cancelable) {


	        // public properties:
	        /**
	         * The type of event.
	         * @property type
	         * @type String
	         **/
	        this.type = type;

	        /**
	         * The object that generated an event.
	         * @property target
	         * @type Object
	         * @default null
	         * @readonly
	         */
	        this.target = null;

	        /**
	         * The current target that a bubbling event is being dispatched from. For non-bubbling events, this will
	         * always be the same as target. For example, if childObj.parent = parentObj, and a bubbling event
	         * is generated from childObj, then a listener on parentObj would receive the event with
	         * target=childObj (the original target) and currentTarget=parentObj (where the listener was added).
	         * @property currentTarget
	         * @type Object
	         * @default null
	         * @readonly
	         */
	        this.currentTarget = null;

	        /**
	         * For bubbling events, this indicates the current event phase:<OL>
	         * 	<LI> capture phase: starting from the top parent to the target</LI>
	         * 	<LI> at target phase: currently being dispatched from the target</LI>
	         * 	<LI> bubbling phase: from the target to the top parent</LI>
	         * </OL>
	         * @property eventPhase
	         * @type Number
	         * @default 0
	         * @readonly
	         */
	        this.eventPhase = 0;

	        /**
	         * Indicates whether the event will bubble through the display list.
	         * @property bubbles
	         * @type Boolean
	         * @default false
	         * @readonly
	         */
	        this.bubbles = !!bubbles;

	        /**
	         * Indicates whether the default behaviour of this event can be cancelled via
	         * {{#crossLink "Event/preventDefault"}}{{/crossLink}}. This is set via the Event constructor.
	         * @property cancelable
	         * @type Boolean
	         * @default false
	         * @readonly
	         */
	        this.cancelable = !!cancelable;

	        /**
	         * The epoch time at which this event was created.
	         * @property timeStamp
	         * @type Number
	         * @default 0
	         * @readonly
	         */
	        this.timeStamp = (new Date()).getTime();

	        /**
	         * Indicates if {{#crossLink "Event/preventDefault"}}{{/crossLink}} has been called
	         * on this event.
	         * @property defaultPrevented
	         * @type Boolean
	         * @default false
	         * @readonly
	         */
	        this.defaultPrevented = false;

	        /**
	         * Indicates if {{#crossLink "Event/stopPropagation"}}{{/crossLink}} or
	         * {{#crossLink "Event/stopImmediatePropagation"}}{{/crossLink}} has been called on this event.
	         * @property propagationStopped
	         * @type Boolean
	         * @default false
	         * @readonly
	         */
	        this.propagationStopped = false;

	        /**
	         * Indicates if {{#crossLink "Event/stopImmediatePropagation"}}{{/crossLink}} has been called
	         * on this event.
	         * @property immediatePropagationStopped
	         * @type Boolean
	         * @default false
	         * @readonly
	         */
	        this.immediatePropagationStopped = false;

	        /**
	         * Indicates if {{#crossLink "Event/remove"}}{{/crossLink}} has been called on this event.
	         * @property removed
	         * @type Boolean
	         * @default false
	         * @readonly
	         */
	        this.removed = false;
	    }
	    var p = Event.prototype;

	    /**
	     * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	     * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	     * for details.
	     *
	     * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	     *
	     * @method initialize
	     * @protected
	     * @deprecated
	     */
	    // p.initialize = function() {}; // searchable for devs wondering where it is.

	    // public methods:
	    /**
	     * Sets {{#crossLink "Event/defaultPrevented"}}{{/crossLink}} to true.
	     * Mirrors the DOM event standard.
	     * @method preventDefault
	     **/
	    p.preventDefault = function () {
	        this.defaultPrevented = this.cancelable && true;
	    };

	    /**
	     * Sets {{#crossLink "Event/propagationStopped"}}{{/crossLink}} to true.
	     * Mirrors the DOM event standard.
	     * @method stopPropagation
	     **/
	    p.stopPropagation = function () {
	        this.propagationStopped = true;
	    };

	    /**
	     * Sets {{#crossLink "Event/propagationStopped"}}{{/crossLink}} and
	     * {{#crossLink "Event/immediatePropagationStopped"}}{{/crossLink}} to true.
	     * Mirrors the DOM event standard.
	     * @method stopImmediatePropagation
	     **/
	    p.stopImmediatePropagation = function () {
	        this.immediatePropagationStopped = this.propagationStopped = true;
	    };

	    /**
	     * Causes the active listener to be removed via removeEventListener();
	     *
	     * 		myBtn.addEventListener("click", function(evt) {
	     * 			// do stuff...
	     * 			evt.remove(); // removes this listener.
	     * 		});
	     *
	     * @method remove
	     **/
	    p.remove = function () {
	        this.removed = true;
	    };

	    /**
	     * Returns a clone of the Event instance.
	     * @method clone
	     * @return {Event} a clone of the Event instance.
	     **/
	    p.clone = function () {
	        return new Event(this.type, this.bubbles, this.cancelable);
	    };

	    /**
	     * Provides a chainable shortcut method for setting a number of properties on the instance.
	     *
	     * @method set
	     * @param {Object} props A generic object containing properties to copy to the instance.
	     * @return {Event} Returns the instance the method is called on (useful for chaining calls.)
	     * @chainable
	     */
	    p.set = function (props) {
	        for (var n in props) {
	            this[n] = props[n];
	        }
	        return this;
	    };

	    /**
	     * Returns a string representation of this object.
	     * @method toString
	     * @return {String} a string representation of the instance.
	     **/
	    p.toString = function () {
	        return "[Event (type=" + this.type + ")]";
	    };

	    createjs.Event = Event;
	}());
	/*
	 * EventDispatcher
	 * Visit http://createjs.com/ for documentation, updates and examples.
	 *
	 * Copyright (c) 2010 gskinner.com, inc.
	 *
	 * Permission is hereby granted, free of charge, to any person
	 * obtaining a copy of this software and associated documentation
	 * files (the "Software"), to deal in the Software without
	 * restriction, including without limitation the rights to use,
	 * copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the
	 * Software is furnished to do so, subject to the following
	 * conditions:
	 *
	 * The above copyright notice and this permission notice shall be
	 * included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
	 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	 * OTHER DEALINGS IN THE SOFTWARE.
	 */

	/**
	 * @module CreateJS
	 */

	// namespace:
	if (typeof window === 'undefined') {
	    this.createjs = this.createjs || {};
	} else {
	    window.createjs = window.createjs || {};
	}

	(function () {
	    "use strict";


	    // constructor:
	    /**
	     * EventDispatcher provides methods for managing queues of event listeners and dispatching events.
	     *
	     * You can either extend EventDispatcher or mix its methods into an existing prototype or instance by using the
	     * EventDispatcher {{#crossLink "EventDispatcher/initialize"}}{{/crossLink}} method.
	     *
	     * Together with the CreateJS Event class, EventDispatcher provides an extended event model that is based on the
	     * DOM Level 2 event model, including addEventListener, removeEventListener, and dispatchEvent. It supports
	     * bubbling / capture, preventDefault, stopPropagation, stopImmediatePropagation, and handleEvent.
	     *
	     * EventDispatcher also exposes a {{#crossLink "EventDispatcher/on"}}{{/crossLink}} method, which makes it easier
	     * to create scoped listeners, listeners that only run once, and listeners with associated arbitrary data. The
	     * {{#crossLink "EventDispatcher/off"}}{{/crossLink}} method is merely an alias to
	     * {{#crossLink "EventDispatcher/removeEventListener"}}{{/crossLink}}.
	     *
	     * Another addition to the DOM Level 2 model is the {{#crossLink "EventDispatcher/removeAllEventListeners"}}{{/crossLink}}
	     * method, which can be used to listeners for all events, or listeners for a specific event. The Event object also
	     * includes a {{#crossLink "Event/remove"}}{{/crossLink}} method which removes the active listener.
	     *
	     * <h4>Example</h4>
	     * Add EventDispatcher capabilities to the "MyClass" class.
	     *
	     *      EventDispatcher.initialize(MyClass.prototype);
	     *
	     * Add an event (see {{#crossLink "EventDispatcher/addEventListener"}}{{/crossLink}}).
	     *
	     *      instance.addEventListener("eventName", handlerMethod);
	     *      function handlerMethod(event) {
	     *          console.log(event.target + " Was Clicked");
	     *      }
	     *
	     * <b>Maintaining proper scope</b><br />
	     * Scope (ie. "this") can be be a challenge with events. Using the {{#crossLink "EventDispatcher/on"}}{{/crossLink}}
	     * method to subscribe to events simplifies this.
	     *
	     *      instance.addEventListener("click", function(event) {
	     *          console.log(instance == this); // false, scope is ambiguous.
	     *      });
	     *
	     *      instance.on("click", function(event) {
	     *          console.log(instance == this); // true, "on" uses dispatcher scope by default.
	     *      });
	     *
	     * If you want to use addEventListener instead, you may want to use function.bind() or a similar proxy to manage scope.
	     *
	     *
	     * @class EventDispatcher
	     * @constructor
	     **/
	    function EventDispatcher() {


	        // private properties:
	        /**
	         * @protected
	         * @property _listeners
	         * @type Object
	         **/
	        this._listeners = null;

	        /**
	         * @protected
	         * @property _captureListeners
	         * @type Object
	         **/
	        this._captureListeners = null;
	    }
	    var p = EventDispatcher.prototype;

	    /**
	     * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
	     * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
	     * for details.
	     *
	     * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
	     *
	     * @method initialize
	     * @protected
	     * @deprecated
	     */
	    // p.initialize = function() {}; // searchable for devs wondering where it is.


	    // static public methods:
	    /**
	     * Static initializer to mix EventDispatcher methods into a target object or prototype.
	     *
	     * 		EventDispatcher.initialize(MyClass.prototype); // add to the prototype of the class
	     * 		EventDispatcher.initialize(myObject); // add to a specific instance
	     *
	     * @method initialize
	     * @static
	     * @param {Object} target The target object to inject EventDispatcher methods into. This can be an instance or a
	     * prototype.
	     **/
	    EventDispatcher.initialize = function (target) {
	        target.addEventListener = p.addEventListener;
	        target.on = p.on;
	        target.removeEventListener = target.off = p.removeEventListener;
	        target.removeAllEventListeners = p.removeAllEventListeners;
	        target.hasEventListener = p.hasEventListener;
	        target.dispatchEvent = p.dispatchEvent;
	        target._dispatchEvent = p._dispatchEvent;
	        target.willTrigger = p.willTrigger;
	    };


	    // public methods:
	    /**
	     * Adds the specified event listener. Note that adding multiple listeners to the same function will result in
	     * multiple callbacks getting fired.
	     *
	     * <h4>Example</h4>
	     *
	     *      displayObject.addEventListener("click", handleClick);
	     *      function handleClick(event) {
	     *         // Click happened.
	     *      }
	     *
	     * @method addEventListener
	     * @param {String} type The string type of the event.
	     * @param {Function | Object} listener An object with a handleEvent method, or a function that will be called when
	     * the event is dispatched.
	     * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
	     * @return {Function | Object} Returns the listener for chaining or assignment.
	     **/
	    p.addEventListener = function (type, listener, useCapture) {
	        var listeners;
	        if (useCapture) {
	            listeners = this._captureListeners = this._captureListeners || {};
	        } else {
	            listeners = this._listeners = this._listeners || {};
	        }
	        var arr = listeners[type];
	        if (arr) {
	            this.removeEventListener(type, listener, useCapture);
	        }
	        arr = listeners[type]; // remove may have deleted the array
	        if (!arr) {
	            listeners[type] = [listener];
	        } else {
	            arr.push(listener);
	        }
	        return listener;
	    };

	    /**
	     * A shortcut method for using addEventListener that makes it easier to specify an execution scope, have a listener
	     * only run once, associate arbitrary data with the listener, and remove the listener.
	     *
	     * This method works by creating an anonymous wrapper function and subscribing it with addEventListener.
	     * The created anonymous function is returned for use with .removeEventListener (or .off).
	     *
	     * <h4>Example</h4>
	     *
	     * 		var listener = myBtn.on("click", handleClick, null, false, {count:3});
	     * 		function handleClick(evt, data) {
	     * 			data.count -= 1;
	     * 			console.log(this == myBtn); // true - scope defaults to the dispatcher
	     * 			if (data.count == 0) {
	     * 				alert("clicked 3 times!");
	     * 				myBtn.off("click", listener);
	     * 				// alternately: evt.remove();
	     * 			}
	     * 		}
	     *
	     * @method on
	     * @param {String} type The string type of the event.
	     * @param {Function | Object} listener An object with a handleEvent method, or a function that will be called when
	     * the event is dispatched.
	     * @param {Object} [scope] The scope to execute the listener in. Defaults to the dispatcher/currentTarget for function listeners, and to the listener itself for object listeners (ie. using handleEvent).
	     * @param {Boolean} [once=false] If true, the listener will remove itself after the first time it is triggered.
	     * @param {*} [data] Arbitrary data that will be included as the second parameter when the listener is called.
	     * @param {Boolean} [useCapture=false] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
	     * @return {Function} Returns the anonymous function that was created and assigned as the listener. This is needed to remove the listener later using .removeEventListener.
	     **/
	    p.on = function (type, listener, scope, once, data, useCapture) {
	        if (listener.handleEvent) {
	            scope = scope || listener;
	            listener = listener.handleEvent;
	        }
	        scope = scope || this;
	        return this.addEventListener(type, function (evt) {
	            listener.call(scope, evt, data);
	            once && evt.remove();
	        }, useCapture);
	    };

	    /**
	     * Removes the specified event listener.
	     *
	     * <b>Important Note:</b> that you must pass the exact function reference used when the event was added. If a proxy
	     * function, or function closure is used as the callback, the proxy/closure reference must be used - a new proxy or
	     * closure will not work.
	     *
	     * <h4>Example</h4>
	     *
	     *      displayObject.removeEventListener("click", handleClick);
	     *
	     * @method removeEventListener
	     * @param {String} type The string type of the event.
	     * @param {Function | Object} listener The listener function or object.
	     * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
	     **/
	    p.removeEventListener = function (type, listener, useCapture) {
	        var listeners = useCapture ? this._captureListeners : this._listeners;
	        if (!listeners) {
	            return;
	        }
	        var arr = listeners[type];
	        if (!arr) {
	            return;
	        }
	        for (var i = 0, l = arr.length; i < l; i++) {
	            if (arr[i] == listener) {
	                if (l == 1) {
	                    delete(listeners[type]);
	                } // allows for faster checks.
	                else {
	                    arr.splice(i, 1);
	                }
	                break;
	            }
	        }
	    };

	    /**
	     * A shortcut to the removeEventListener method, with the same parameters and return value. This is a companion to the
	     * .on method.
	     *
	     * @method off
	     * @param {String} type The string type of the event.
	     * @param {Function | Object} listener The listener function or object.
	     * @param {Boolean} [useCapture] For events that bubble, indicates whether to listen for the event in the capture or bubbling/target phase.
	     **/
	    p.off = p.removeEventListener;

	    /**
	     * Removes all listeners for the specified type, or all listeners of all types.
	     *
	     * <h4>Example</h4>
	     *
	     *      // Remove all listeners
	     *      displayObject.removeAllEventListeners();
	     *
	     *      // Remove all click listeners
	     *      displayObject.removeAllEventListeners("click");
	     *
	     * @method removeAllEventListeners
	     * @param {String} [type] The string type of the event. If omitted, all listeners for all types will be removed.
	     **/
	    p.removeAllEventListeners = function (type) {
	        if (!type) {
	            this._listeners = this._captureListeners = null;
	        } else {
	            if (this._listeners) {
	                delete(this._listeners[type]);
	            }
	            if (this._captureListeners) {
	                delete(this._captureListeners[type]);
	            }
	        }
	    };

	    /**
	     * Dispatches the specified event to all listeners.
	     *
	     * <h4>Example</h4>
	     *
	     *      // Use a string event
	     *      this.dispatchEvent("complete");
	     *
	     *      // Use an Event instance
	     *      var event = new createjs.Event("progress");
	     *      this.dispatchEvent(event);
	     *
	     * @method dispatchEvent
	     * @param {Object | String | Event} eventObj An object with a "type" property, or a string type.
	     * While a generic object will work, it is recommended to use a CreateJS Event instance. If a string is used,
	     * dispatchEvent will construct an Event instance with the specified type.
	     * @return {Boolean} Returns the value of eventObj.defaultPrevented.
	     **/
	    p.dispatchEvent = function (eventObj) {
	        if (typeof eventObj == "string") {
	            // won't bubble, so skip everything if there's no listeners:
	            var listeners = this._listeners;
	            if (!listeners || !listeners[eventObj]) {
	                return false;
	            }
	            eventObj = new createjs.Event(eventObj);
	        } else if (eventObj.target && eventObj.clone) {
	            // redispatching an active event object, so clone it:
	            eventObj = eventObj.clone();
	        }
	        try {
	            eventObj.target = this;
	        } catch (e) {} // try/catch allows redispatching of native events

	        if (!eventObj.bubbles || !this.parent) {
	            this._dispatchEvent(eventObj, 2);
	        } else {
	            var top = this,
	                list = [top];
	            while (top.parent) {
	                list.push(top = top.parent);
	            }
	            var i, l = list.length;

	            // capture & atTarget
	            for (i = l - 1; i >= 0 && !eventObj.propagationStopped; i--) {
	                list[i]._dispatchEvent(eventObj, 1 + (i == 0));
	            }
	            // bubbling
	            for (i = 1; i < l && !eventObj.propagationStopped; i++) {
	                list[i]._dispatchEvent(eventObj, 3);
	            }
	        }
	        return eventObj.defaultPrevented;
	    };

	    /**
	     * Indicates whether there is at least one listener for the specified event type.
	     * @method hasEventListener
	     * @param {String} type The string type of the event.
	     * @return {Boolean} Returns true if there is at least one listener for the specified event.
	     **/
	    p.hasEventListener = function (type) {
	        var listeners = this._listeners,
	            captureListeners = this._captureListeners;
	        return !!((listeners && listeners[type]) || (captureListeners && captureListeners[type]));
	    };

	    /**
	     * Indicates whether there is at least one listener for the specified event type on this object or any of its
	     * ancestors (parent, parent's parent, etc). A return value of true indicates that if a bubbling event of the
	     * specified type is dispatched from this object, it will trigger at least one listener.
	     *
	     * This is similar to {{#crossLink "EventDispatcher/hasEventListener"}}{{/crossLink}}, but it searches the entire
	     * event flow for a listener, not just this object.
	     * @method willTrigger
	     * @param {String} type The string type of the event.
	     * @return {Boolean} Returns `true` if there is at least one listener for the specified event.
	     **/
	    p.willTrigger = function (type) {
	        var o = this;
	        while (o) {
	            if (o.hasEventListener(type)) {
	                return true;
	            }
	            o = o.parent;
	        }
	        return false;
	    };

	    /**
	     * @method toString
	     * @return {String} a string representation of the instance.
	     **/
	    p.toString = function () {
	        return "[EventDispatcher]";
	    };


	    // private methods:
	    /**
	     * @method _dispatchEvent
	     * @param {Object | String | Event} eventObj
	     * @param {Object} eventPhase
	     * @protected
	     **/
	    p._dispatchEvent = function (eventObj, eventPhase) {
	        var l, listeners = (eventPhase == 1) ? this._captureListeners : this._listeners;
	        if (eventObj && listeners) {
	            var arr = listeners[eventObj.type];
	            if (!arr || !(l = arr.length)) {
	                return;
	            }
	            try {
	                eventObj.currentTarget = this;
	            } catch (e) {}
	            try {
	                eventObj.eventPhase = eventPhase;
	            } catch (e) {}
	            eventObj.removed = false;

	            arr = arr.slice(); // to avoid issues with items being removed or added during the dispatch
	            for (var i = 0; i < l && !eventObj.immediatePropagationStopped; i++) {
	                var o = arr[i];
	                if (o.handleEvent) {
	                    o.handleEvent(eventObj);
	                } else {
	                    o(eventObj);
	                }
	                if (eventObj.removed) {
	                    this.off(eventObj.type, o, eventPhase == 1);
	                    eventObj.removed = false;
	                }
	            }
	        }
	    };


	    createjs.EventDispatcher = EventDispatcher;
	}());
	/*
	 * Ticker
	 * Visit http://createjs.com/ for documentation, updates and examples.
	 *
	 * Copyright (c) 2010 gskinner.com, inc.
	 *
	 * Permission is hereby granted, free of charge, to any person
	 * obtaining a copy of this software and associated documentation
	 * files (the "Software"), to deal in the Software without
	 * restriction, including without limitation the rights to use,
	 * copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the
	 * Software is furnished to do so, subject to the following
	 * conditions:
	 *
	 * The above copyright notice and this permission notice shall be
	 * included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
	 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	 * OTHER DEALINGS IN THE SOFTWARE.
	 */

	/**
	 * @module CreateJS
	 */

	// namespace:
	if (typeof window === 'undefined') {
	    this.createjs = this.createjs || {};
	} else {
	    window.createjs = window.createjs || {};
	}

	(function () {
	    "use strict";


	    // constructor:
	    /**
	     * The Ticker provides a centralized tick or heartbeat broadcast at a set interval. Listeners can subscribe to the tick
	     * event to be notified when a set time interval has elapsed.
	     *
	     * Note that the interval that the tick event is called is a target interval, and may be broadcast at a slower interval
	     * when under high CPU load. The Ticker class uses a static interface (ex. `Ticker.framerate = 30;`) and
	     * can not be instantiated.
	     *
	     * <h4>Example</h4>
	     *
	     *      createjs.Ticker.addEventListener("tick", handleTick);
	     *      function handleTick(event) {
	     *          // Actions carried out each tick (aka frame)
	     *          if (!event.paused) {
	     *              // Actions carried out when the Ticker is not paused.
	     *          }
	     *      }
	     *
	     * @class Ticker
	     * @uses EventDispatcher
	     * @static
	     **/
	    function Ticker() {
	        throw "Ticker cannot be instantiated.";
	    }


	    // constants:
	    /**
	     * In this mode, Ticker uses the requestAnimationFrame API, but attempts to synch the ticks to target framerate. It
	     * uses a simple heuristic that compares the time of the RAF return to the target time for the current frame and
	     * dispatches the tick when the time is within a certain threshold.
	     *
	     * This mode has a higher variance for time between frames than TIMEOUT, but does not require that content be time
	     * based as with RAF while gaining the benefits of that API (screen synch, background throttling).
	     *
	     * Variance is usually lowest for framerates that are a divisor of the RAF frequency. This is usually 60, so
	     * framerates of 10, 12, 15, 20, and 30 work well.
	     *
	     * Falls back on TIMEOUT if the requestAnimationFrame API is not supported.
	     * @property RAF_SYNCHED
	     * @static
	     * @type {String}
	     * @default "synched"
	     * @readonly
	     **/
	    Ticker.RAF_SYNCHED = "synched";

	    /**
	     * In this mode, Ticker passes through the requestAnimationFrame heartbeat, ignoring the target framerate completely.
	     * Because requestAnimationFrame frequency is not deterministic, any content using this mode should be time based.
	     * You can leverage {{#crossLink "Ticker/getTime"}}{{/crossLink}} and the tick event object's "delta" properties
	     * to make this easier.
	     *
	     * Falls back on TIMEOUT if the requestAnimationFrame API is not supported.
	     * @property RAF
	     * @static
	     * @type {String}
	     * @default "raf"
	     * @readonly
	     **/
	    Ticker.RAF = "raf";

	    /**
	     * In this mode, Ticker uses the setTimeout API. This provides predictable, adaptive frame timing, but does not
	     * provide the benefits of requestAnimationFrame (screen synch, background throttling).
	     * @property TIMEOUT
	     * @static
	     * @type {String}
	     * @default "timer"
	     * @readonly
	     **/
	    Ticker.TIMEOUT = "timeout";


	    // static events:
	    /**
	     * Dispatched each tick. The event will be dispatched to each listener even when the Ticker has been paused using
	     * {{#crossLink "Ticker/setPaused"}}{{/crossLink}}.
	     *
	     * <h4>Example</h4>
	     *
	     *      createjs.Ticker.addEventListener("tick", handleTick);
	     *      function handleTick(event) {
	     *          console.log("Paused:", event.paused, event.delta);
	     *      }
	     *
	     * @event tick
	     * @param {Object} target The object that dispatched the event.
	     * @param {String} type The event type.
	     * @param {Boolean} paused Indicates whether the ticker is currently paused.
	     * @param {Number} delta The time elapsed in ms since the last tick.
	     * @param {Number} time The total time in ms since Ticker was initialized.
	     * @param {Number} runTime The total time in ms that Ticker was not paused since it was initialized. For example,
	     * 	you could determine the amount of time that the Ticker has been paused since initialization with time-runTime.
	     * @since 0.6.0
	     */


	    // public static properties:
	    /**
	     * Deprecated in favour of {{#crossLink "Ticker/timingMode"}}{{/crossLink}}, and will be removed in a future version. If true, timingMode will
	     * use {{#crossLink "Ticker/RAF_SYNCHED"}}{{/crossLink}} by default.
	     * @deprecated Deprecated in favour of {{#crossLink "Ticker/timingMode"}}{{/crossLink}}.
	     * @property useRAF
	     * @static
	     * @type {Boolean}
	     * @default false
	     **/
	    Ticker.useRAF = false;

	    /**
	     * Specifies the timing api (setTimeout or requestAnimationFrame) and mode to use. See
	     * {{#crossLink "Ticker/TIMEOUT"}}{{/crossLink}}, {{#crossLink "Ticker/RAF"}}{{/crossLink}}, and
	     * {{#crossLink "Ticker/RAF_SYNCHED"}}{{/crossLink}} for mode details.
	     * @property timingMode
	     * @static
	     * @type {String}
	     * @default Ticker.TIMEOUT
	     **/
	    Ticker.timingMode = null;

	    /**
	     * Specifies a maximum value for the delta property in the tick event object. This is useful when building time
	     * based animations and systems to prevent issues caused by large time gaps caused by background tabs, system sleep,
	     * alert dialogs, or other blocking routines. Double the expected frame duration is often an effective value
	     * (ex. maxDelta=50 when running at 40fps).
	     *
	     * This does not impact any other values (ex. time, runTime, etc), so you may experience issues if you enable maxDelta
	     * when using both delta and other values.
	     *
	     * If 0, there is no maximum.
	     * @property maxDelta
	     * @static
	     * @type {number}
	     * @default 0
	     */
	    Ticker.maxDelta = 0;

	    /**
	     * When the ticker is paused, all listeners will still receive a tick event, but the <code>paused</code> property of the event will be false.
	     * Also, while paused the `runTime` will not increase. See {{#crossLink "Ticker/tick:event"}}{{/crossLink}},
	     * {{#crossLink "Ticker/getTime"}}{{/crossLink}}, and {{#crossLink "Ticker/getEventTime"}}{{/crossLink}} for more info.
	     *
	     * <h4>Example</h4>
	     *
	     *      createjs.Ticker.addEventListener("tick", handleTick);
	     *      createjs.Ticker.paused = true;
	     *      function handleTick(event) {
	     *          console.log(event.paused,
	     *          	createjs.Ticker.getTime(false),
	     *          	createjs.Ticker.getTime(true));
	     *      }
	     *
	     * @property paused
	     * @static
	     * @type {Boolean}
	     * @default false
	     **/
	    Ticker.paused = false;


	    // mix-ins:
	    // EventDispatcher methods:
	    Ticker.removeEventListener = null;
	    Ticker.removeAllEventListeners = null;
	    Ticker.dispatchEvent = null;
	    Ticker.hasEventListener = null;
	    Ticker._listeners = null;
	    createjs.EventDispatcher.initialize(Ticker); // inject EventDispatcher methods.
	    Ticker._addEventListener = Ticker.addEventListener;
	    Ticker.addEventListener = function () {
	        !Ticker._inited && Ticker.init();
	        return Ticker._addEventListener.apply(Ticker, arguments);
	    };


	    // private static properties:
	    /**
	     * @property _inited
	     * @static
	     * @type {Boolean}
	     * @protected
	     **/
	    Ticker._inited = false;

	    /**
	     * @property _startTime
	     * @static
	     * @type {Number}
	     * @protected
	     **/
	    Ticker._startTime = 0;

	    /**
	     * @property _pausedTime
	     * @static
	     * @type {Number}
	     * @protected
	     **/
	    Ticker._pausedTime = 0;

	    /**
	     * The number of ticks that have passed
	     * @property _ticks
	     * @static
	     * @type {Number}
	     * @protected
	     **/
	    Ticker._ticks = 0;

	    /**
	     * The number of ticks that have passed while Ticker has been paused
	     * @property _pausedTicks
	     * @static
	     * @type {Number}
	     * @protected
	     **/
	    Ticker._pausedTicks = 0;

	    /**
	     * @property _interval
	     * @static
	     * @type {Number}
	     * @protected
	     **/
	    Ticker._interval = 50;

	    /**
	     * @property _lastTime
	     * @static
	     * @type {Number}
	     * @protected
	     **/
	    Ticker._lastTime = 0;

	    /**
	     * @property _times
	     * @static
	     * @type {Array}
	     * @protected
	     **/
	    Ticker._times = null;

	    /**
	     * @property _tickTimes
	     * @static
	     * @type {Array}
	     * @protected
	     **/
	    Ticker._tickTimes = null;

	    /**
	     * Stores the timeout or requestAnimationFrame id.
	     * @property _timerId
	     * @static
	     * @type {Number}
	     * @protected
	     **/
	    Ticker._timerId = null;

	    /**
	     * True if currently using requestAnimationFrame, false if using setTimeout. This may be different than timingMode
	     * if that property changed and a tick hasn't fired.
	     * @property _raf
	     * @static
	     * @type {Boolean}
	     * @protected
	     **/
	    Ticker._raf = true;


	    // static getter / setters:
	    /**
	     * Use the {{#crossLink "Ticker/interval:property"}}{{/crossLink}} property instead.
	     * @method setInterval
	     * @static
	     * @param {Number} interval
	     * @deprecated
	     **/
	    Ticker.setInterval = function (interval) {
	        Ticker._interval = interval;
	        if (!Ticker._inited) {
	            return;
	        }
	        Ticker._setupTick();
	    };

	    /**
	     * Use the {{#crossLink "Ticker/framerate:property"}}{{/crossLink}} property instead.
	     * @method getInterval
	     * @static
	     * @return {Number}
	     * @deprecated
	     **/
	    Ticker.getInterval = function () {
	        return Ticker._interval;
	    };

	    /**
	     * Use the {{#crossLink "Ticker/framerate:property"}}{{/crossLink}} property instead.
	     * @method setFPS
	     * @static
	     * @param {Number} value
	     * @deprecated
	     **/
	    Ticker.setFPS = function (value) {
	        Ticker.setInterval(1000 / value);
	    };

	    /**
	     * Use the {{#crossLink "Ticker/interval:property"}}{{/crossLink}} property instead.
	     * @method getFPS
	     * @static
	     * @return {Number}
	     * @deprecated
	     **/
	    Ticker.getFPS = function () {
	        return 1000 / Ticker._interval;
	    };

	    /**
	     * Indicates the target time (in milliseconds) between ticks. Default is 50 (20 FPS).
	     * Note that actual time between ticks may be more than specified depending on CPU load.
	     * This property is ignored if the ticker is using the `RAF` timing mode.
	     * @property interval
	     * @static
	     * @type {Number}
	     **/

	    /**
	     * Indicates the target frame rate in frames per second (FPS). Effectively just a shortcut to `interval`, where
	     * `framerate == 1000/interval`.
	     * @property framerate
	     * @static
	     * @type {Number}
	     **/
	    try {
	        Object.defineProperties(Ticker, {
	            interval: {
	                get: Ticker.getInterval,
	                set: Ticker.setInterval
	            },
	            framerate: {
	                get: Ticker.getFPS,
	                set: Ticker.setFPS
	            }
	        });
	    } catch (e) {
	        console.log(e);
	    }


	    // public static methods:
	    /**
	     * Starts the tick. This is called automatically when the first listener is added.
	     * @method init
	     * @static
	     **/
	    Ticker.init = function () {
	        if (Ticker._inited) {
	            return;
	        }
	        Ticker._inited = true;
	        Ticker._times = [];
	        Ticker._tickTimes = [];
	        Ticker._startTime = Ticker._getTime();
	        Ticker._times.push(Ticker._lastTime = 0);
	        Ticker.interval = Ticker._interval;
	    };

	    /**
	     * Stops the Ticker and removes all listeners. Use init() to restart the Ticker.
	     * @method reset
	     * @static
	     **/
	    Ticker.reset = function () {
	        if (Ticker._raf) {
	            var f = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
	            f && f(Ticker._timerId);
	        } else {
	            clearTimeout(Ticker._timerId);
	        }
	        Ticker.removeAllEventListeners("tick");
	        Ticker._timerId = Ticker._times = Ticker._tickTimes = null;
	        Ticker._startTime = Ticker._lastTime = Ticker._ticks = 0;
	        Ticker._inited = false;
	    };

	    /**
	     * Returns the average time spent within a tick. This can vary significantly from the value provided by getMeasuredFPS
	     * because it only measures the time spent within the tick execution stack.
	     *
	     * Example 1: With a target FPS of 20, getMeasuredFPS() returns 20fps, which indicates an average of 50ms between
	     * the end of one tick and the end of the next. However, getMeasuredTickTime() returns 15ms. This indicates that
	     * there may be up to 35ms of "idle" time between the end of one tick and the start of the next.
	     *
	     * Example 2: With a target FPS of 30, getFPS() returns 10fps, which indicates an average of 100ms between the end of
	     * one tick and the end of the next. However, getMeasuredTickTime() returns 20ms. This would indicate that something
	     * other than the tick is using ~80ms (another script, DOM rendering, etc).
	     * @method getMeasuredTickTime
	     * @static
	     * @param {Number} [ticks] The number of previous ticks over which to measure the average time spent in a tick.
	     * Defaults to the number of ticks per second. To get only the last tick's time, pass in 1.
	     * @return {Number} The average time spent in a tick in milliseconds.
	     **/
	    Ticker.getMeasuredTickTime = function (ticks) {
	        var ttl = 0,
	            times = Ticker._tickTimes;
	        if (!times || times.length < 1) {
	            return -1;
	        }

	        // by default, calculate average for the past ~1 second:
	        ticks = Math.min(times.length, ticks || (Ticker.getFPS() | 0));
	        for (var i = 0; i < ticks; i++) {
	            ttl += times[i];
	        }
	        return ttl / ticks;
	    };

	    /**
	     * Returns the actual frames / ticks per second.
	     * @method getMeasuredFPS
	     * @static
	     * @param {Number} [ticks] The number of previous ticks over which to measure the actual frames / ticks per second.
	     * Defaults to the number of ticks per second.
	     * @return {Number} The actual frames / ticks per second. Depending on performance, this may differ
	     * from the target frames per second.
	     **/
	    Ticker.getMeasuredFPS = function (ticks) {
	        var times = Ticker._times;
	        if (!times || times.length < 2) {
	            return -1;
	        }

	        // by default, calculate fps for the past ~1 second:
	        ticks = Math.min(times.length - 1, ticks || (Ticker.getFPS() | 0));
	        return 1000 / ((times[0] - times[ticks]) / ticks);
	    };

	    /**
	     * Use the {{#crossLink "Ticker/paused:property"}}{{/crossLink}} property instead.
	     * @method setPaused
	     * @static
	     * @param {Boolean} value
	     * @deprecated
	     **/
	    Ticker.setPaused = function (value) {
	        // TODO: deprecated.
	        Ticker.paused = value;
	    };

	    /**
	     * Use the {{#crossLink "Ticker/paused:property"}}{{/crossLink}} property instead.
	     * @method getPaused
	     * @static
	     * @return {Boolean}
	     * @deprecated
	     **/
	    Ticker.getPaused = function () {
	        // TODO: deprecated.
	        return Ticker.paused;
	    };

	    /**
	     * Returns the number of milliseconds that have elapsed since Ticker was initialized via {{#crossLink "Ticker/init"}}.
	     * Returns -1 if Ticker has not been initialized. For example, you could use
	     * this in a time synchronized animation to determine the exact amount of time that has elapsed.
	     * @method getTime
	     * @static
	     * @param {Boolean} [runTime=false] If true only time elapsed while Ticker was not paused will be returned.
	     * If false, the value returned will be total time elapsed since the first tick event listener was added.
	     * @return {Number} Number of milliseconds that have elapsed since Ticker was initialized or -1.
	     **/
	    Ticker.getTime = function (runTime) {
	        return Ticker._startTime ? Ticker._getTime() - (runTime ? Ticker._pausedTime : 0) : -1;
	    };

	    /**
	     * Similar to getTime(), but returns the time on the most recent tick event object.
	     * @method getEventTime
	     * @static
	     * @param runTime {Boolean} [runTime=false] If true, the runTime property will be returned instead of time.
	     * @returns {number} The time or runTime property from the most recent tick event or -1.
	     */
	    Ticker.getEventTime = function (runTime) {
	        return Ticker._startTime ? (Ticker._lastTime || Ticker._startTime) - (runTime ? Ticker._pausedTime : 0) : -1;
	    };

	    /**
	     * Returns the number of ticks that have been broadcast by Ticker.
	     * @method getTicks
	     * @static
	     * @param {Boolean} pauseable Indicates whether to include ticks that would have been broadcast
	     * while Ticker was paused. If true only tick events broadcast while Ticker is not paused will be returned.
	     * If false, tick events that would have been broadcast while Ticker was paused will be included in the return
	     * value. The default value is false.
	     * @return {Number} of ticks that have been broadcast.
	     **/
	    Ticker.getTicks = function (pauseable) {
	        return Ticker._ticks - (pauseable ? Ticker._pausedTicks : 0);
	    };


	    // private static methods:
	    /**
	     * @method _handleSynch
	     * @static
	     * @protected
	     **/
	    Ticker._handleSynch = function () {
	        Ticker._timerId = null;
	        Ticker._setupTick();

	        // run if enough time has elapsed, with a little bit of flexibility to be early:
	        if (Ticker._getTime() - Ticker._lastTime >= (Ticker._interval - 1) * 0.97) {
	            Ticker._tick();
	        }
	    };

	    /**
	     * @method _handleRAF
	     * @static
	     * @protected
	     **/
	    Ticker._handleRAF = function () {
	        Ticker._timerId = null;
	        Ticker._setupTick();
	        Ticker._tick();
	    };

	    /**
	     * @method _handleTimeout
	     * @static
	     * @protected
	     **/
	    Ticker._handleTimeout = function () {
	        Ticker._timerId = null;
	        Ticker._setupTick();
	        Ticker._tick();
	    };

	    /**
	     * @method _setupTick
	     * @static
	     * @protected
	     **/
	    Ticker._setupTick = function () {
	        if (Ticker._timerId != null) {
	            return;
	        } // avoid duplicates

	        var mode = Ticker.timingMode || (Ticker.useRAF && Ticker.RAF_SYNCHED);
	        if (mode == Ticker.RAF_SYNCHED || mode == Ticker.RAF) {
	            var f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
	            if (f) {
	                Ticker._timerId = f(mode == Ticker.RAF ? Ticker._handleRAF : Ticker._handleSynch);
	                Ticker._raf = true;
	                return;
	            }
	        }
	        Ticker._raf = false;
	        Ticker._timerId = setTimeout(Ticker._handleTimeout, Ticker._interval);
	    };

	    /**
	     * @method _tick
	     * @static
	     * @protected
	     **/
	    Ticker._tick = function () {
	        var paused = Ticker.paused;
	        var time = Ticker._getTime();
	        var elapsedTime = time - Ticker._lastTime;
	        Ticker._lastTime = time;
	        Ticker._ticks++;

	        if (paused) {
	            Ticker._pausedTicks++;
	            Ticker._pausedTime += elapsedTime;
	        }

	        if (Ticker.hasEventListener("tick")) {
	            var event = new createjs.Event("tick");
	            var maxDelta = Ticker.maxDelta;
	            event.delta = (maxDelta && elapsedTime > maxDelta) ? maxDelta : elapsedTime;
	            event.paused = paused;
	            event.time = time;
	            event.runTime = time - Ticker._pausedTime;
	            Ticker.dispatchEvent(event);
	        }

	        Ticker._tickTimes.unshift(Ticker._getTime() - time);
	        while (Ticker._tickTimes.length > 100) {
	            Ticker._tickTimes.pop();
	        }

	        Ticker._times.unshift(time);
	        while (Ticker._times.length > 100) {
	            Ticker._times.pop();
	        }
	    };

	    /**
	     * @method _getTime
	     * @static
	     * @protected
	     **/
	    var now = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
	    Ticker._getTime = function () {
	        return ((now && now.call(performance)) || (new Date().getTime())) - Ticker._startTime;
	    };


	    createjs.Ticker = Ticker;
	}());
	/*
	    Weave (Web-based Analysis and Visualization Environment)
	    Copyright (C) 2008-2011 University of Massachusetts Lowell
	    This file is a part of Weave.
	    Weave is free software: you can redistribute it and/or modify
	    it under the terms of the GNU General Public License, Version 3,
	    as published by the Free Software Foundation.
	    Weave is distributed in the hope that it will be useful,
	    but WITHOUT ANY WARRANTY; without even the implied warranty of
	    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	    GNU General Public License for more details.
	    You should have received a copy of the GNU General Public License
	    along with Weave.  If not, see <http://www.gnu.org/licenses/>.
	*/

	// namespace
	if (typeof window === 'undefined') {
	    this.weavecore = this.weavecore || {};
	} else {
	    window.weavecore = window.weavecore || {};
	}

	/**
	 * This provides a set of useful static functions for Object Comparison.
	 * All Static functions are Ported from  Apache Flex mx.utils.ObjectUtil - ActionScript Code
	 * @author sanjay1909
	 */
	(function () {
	    "use strict";

	    //constructor
	    function ObjectUtil() {
	        throw "ObjectUtil cannot be instantiated.";
	    }

	    /**
	     *  Compares two numeric values.
	     *  @param a First number.
	     *  @param b Second number.
	     *  @return 0 is both numbers are NaN.
	     *  1 if only <code>a</code> is a NaN.
	     *  -1 if only <code>b</code> is a NaN.
	     *  -1 if <code>a</code> is less than <code>b</code>.
	     *  1 if <code>a</code> is greater than <code>b</code>.
	     */
	    ObjectUtil.numericCompare = function (a, b) {
	        if (isNaN(a) && isNaN(b))
	            return 0;

	        if (isNaN(a))
	            return 1;

	        if (isNaN(b))
	            return -1;

	        if (a < b)
	            return -1;

	        if (a > b)
	            return 1;

	        return 0;
	    };

	    /**
	     *  Compares two String values.
	     *  @param a First String value.
	     *  @param b Second String value.
	     *  @param caseInsensitive Specifies to perform a case insensitive compare,
	     *  <code>true</code>, or not, <code>false</code>.
	     *
	     *  @return 0 is both Strings are null.
	     *  1 if only <code>a</code> is null.
	     *  -1 if only <code>b</code> is null.
	     *  -1 if <code>a</code> precedes <code>b</code>.
	     *  1 if <code>b</code> precedes <code>a</code>.
	     */
	    ObjectUtil.stringCompare = function (a, b, caseInsensitive) {
	        if ((a === null || a === undefined) && (b === null || b === undefined))
	            return 0;

	        if (a === null || a === undefined)
	            return 1;

	        if (b === null || b === undefined)
	            return -1;

	        // Convert to lowercase if we are case insensitive.
	        if (caseInsensitive) {
	            a = a.toLocaleLowerCase();
	            b = b.toLocaleLowerCase();
	        }

	        var result = a.localeCompare(b);

	        if (result < -1)
	            result = -1;
	        else if (result > 1)
	            result = 1;

	        return result;
	    };

	    /**
	     *  Compares the two Date objects and returns an integer value
	     *  indicating if the first Date object is before, equal to,
	     *  or after the second item.
	     *  @param a Date object.
	     *  @param b Date object.
	     *  @return 0 if <code>a</code> and <code>b</code> are equal
	     *  (or both are <code>null</code>);
	     *  -1 if <code>a</code> is before <code>b</code>
	     *  (or <code>b</code> is <code>null</code>);
	     *  1 if <code>a</code> is after <code>b</code>
	     *  (or <code>a</code> is <code>null</code>);
	     *  0 is both dates getTime's are NaN;
	     *  1 if only <code>a</code> getTime is a NaN;
	     *  -1 if only <code>b</code> getTime is a NaN.
	     */
	    ObjectUtil.dateCompare = function (a, b) {
	        if ((a === null || a === undefined) && (b === null || b === undefined))
	            return 0;

	        if (a === null || undefined)
	            return 1;

	        if (b === null || undefined)
	            return -1;

	        var na = a.getTime();
	        var nb = b.getTime();

	        if (na < nb)
	            return -1;

	        if (na > nb)
	            return 1;

	        if (isNaN(na) && isNaN(nb))
	            return 0;

	        if (isNaN(na))
	            return 1;

	        if (isNaN(nb))
	            return -1;

	        return 0;
	    };

	    weavecore.ObjectUtil = ObjectUtil;

	}());

	/*
	    Weave (Web-based Analysis and Visualization Environment)
	    Copyright (C) 2008-2011 University of Massachusetts Lowell
	    This file is a part of Weave.
	    Weave is free software: you can redistribute it and/or modify
	    it under the terms of the GNU General Public License, Version 3,
	    as published by the Free Software Foundation.
	    Weave is distributed in the hope that it will be useful,
	    but WITHOUT ANY WARRANTY; without even the implied warranty of
	    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	    GNU General Public License for more details.
	    You should have received a copy of the GNU General Public License
	    along with Weave.  If not, see <http://www.gnu.org/licenses/>.
	*/

	// namespace
	if (typeof window === 'undefined') {
	    this.weavecore = this.weavecore || {};
	} else {
	    window.weavecore = window.weavecore || {};
	}

	/**
	 * This provides a set of useful static functions.
	 * All the functions defined in this class are pure functions,
	 * meaning they always return the same result with the same arguments, and they have no side-effects.
	 *
	 * @author adufilie
	 * @author sanbalag
	 */
	(function () {
	    "use strict";

	    //constructor
	    function StandardLib() {
	        throw "StandardLib cannot be instantiated.";
	    }

	    /**
	     * This compares two dynamic objects or primitive values and is much faster than ObjectUtil.compare().
	     * Does not check for circular refrences.
	     * @param a First dynamic object or primitive value.
	     * @param b Second dynamic object or primitive value.
	     * @return A value of zero if the two objects are equal, nonzero if not equal.
	     */
	    StandardLib.compare = function (a, b) {
	        var c;
	        var ObjectUtil = weavecore.ObjectUtil;
	        if (a === b)
	            return 0;
	        if (a === null || a === undefined)
	            return 1;
	        if (b === null || b === undefined)
	            return -1;
	        var typeA = typeof (a);
	        var typeB = typeof (b);
	        if (typeA !== typeB)
	            return weavecore.ObjectUtil.stringCompare(typeA, typeB);
	        if (typeA === 'boolean')
	            return weavecore.ObjectUtil.numericCompare(Number(a), Number(b));
	        if (typeA === 'number')
	            return weavecore.ObjectUtil.numericCompare(a, b);
	        if (typeA === 'string')
	            return weavecore.ObjectUtil.stringCompare(a, b);

	        if (typeA !== 'object')
	            return 1;

	        if (a instanceof Date && b instanceof Date)
	            return weavecore.ObjectUtil.dateCompare(a, b);

	        if (a.constructor === Array && b.constructor === Array) {
	            var an = a.length;
	            var bn = b.length;
	            if (an < bn)
	                return -1;
	            if (an > bn)
	                return 1;
	            for (var i = 0; i < an; i++) {
	                c = StandardLib.compare(a[i], b[i]);
	                if (c !== 0)
	                    return c;
	            }
	            return 0;
	        }

	        var qna = a.constructor.name;
	        var qnb = b.constructor.name;

	        if (qna != qnb)
	            return weavecore.ObjectUtil.stringCompare(qna, qnb);

	        var p;

	        // test if objects are dynamic
	        try {
	            a[''];
	            b[''];
	        } catch (e) {
	            return 1; // not dynamic objects
	        }

	        // if there are properties in a not found in b, return -1
	        for (p in a) {
	            if (!b.hasOwnProperty(p))
	                return -1;
	        }
	        for (p in b) {
	            // if there are properties in b not found in a, return 1
	            if (!a.hasOwnProperty(p))
	                return 1;

	            c = StandardLib.compare(a[p], b[p]);
	            if (c !== 0)
	                return c;
	        }

	        return 0;
	    };

	    weavecore.StandardLib = StandardLib;
	}());
	/**
	 * @module weavecore
	 */

	//namesapce
	if (typeof window === 'undefined') {
	    this.weavecore = this.weavecore || {};
	} else {
	    window.weavecore = window.weavecore || {};
	}

	(function () {
	    "use strict";

	    // constructor
	    /**
	     * Utility Class to create Dynamic state objects with three properties: objectName, className, sessionState
	     * @class DynamicState
	     */
	    function DynamicState() {
	        throw "DynamicState cannot be instantiated.";
	    }

	    // Static Public Const Properties
	    /**
	     * The name of the property containing the name assigned to the object when the session state is generated.
	     * @static
	     * @public
	     * @property OBJECT_NAME
	     * @readOnly
	     * @default "objectName"
	     * @type String
	     */
	    Object.defineProperty(DynamicState, 'OBJECT_NAME', {
	        value: "objectName"
	    });

	    /**
	     * The name of the property containing the qualified class name of the original object providing the session state.
	     * @static
	     * @public
	     * @property CLASS_NAME
	     * @readOnly
	     * @default "className"
	     * @type String
	     */
	    Object.defineProperty(DynamicState, 'CLASS_NAME', {
	        value: "className"
	    });

	    /**
	     * The name of the property containing the session state for an object of the type specified by className.
	     * @static
	     * @public
	     * @property SESSION_STATE
	     * @readOnly
	     * @default "sessionState"
	     * @type String
	     */
	    Object.defineProperty(DynamicState, 'SESSION_STATE', {
	        value: "sessionState"
	    });

	    //static Public Methods
	    /**
	     * Creates an Object having three properties: objectName, className, sessionState
	     * @method create
	     * @static
	     * @param {String} objectName The name assigned to the object when the session state is generated.
	     * @param {String} className The qualified class name of the original object providing the session state.
	     * @param {Object} sessionState The session state for an object of the type specified by className.
	     */
	    DynamicState.create = function (objectName, className, sessionState) {
	        var obj = {};
	        // convert empty strings ("") to null
	        obj[DynamicState.OBJECT_NAME] = objectName || null;
	        obj[DynamicState.CLASS_NAME] = className || null;
	        obj[DynamicState.SESSION_STATE] = sessionState;
	        return obj;
	    };

	    /**
	     * This function can be used to detect dynamic state objects within nested, untyped session state objects.
	     * This function will check if the given object has the three properties of a dynamic state object.
	     * @method isDynamicState
	     * @static
	     * @param {Object} object An object to check.
	     * @return {Boolean} true if the object has all three properties and no extras.
	     */
	    DynamicState.isDynamicState = function (object) {
	        var matchCount = 0;
	        for (var name in object) {
	            if (name === DynamicState.OBJECT_NAME || name === DynamicState.CLASS_NAME || name === DynamicState.SESSION_STATE)
	                matchCount++;
	            else
	                return false;
	        }
	        return (matchCount == 3); // must match all three properties with no extras
	    };

	    /**
	     * This function checks whether or not a session state is an Array containing at least one
	     * object that looks like a DynamicState and has no other non-String items.
	     * @method isDynamicStateArray
	     * @static
	     * @param {Object} state
	     * @return {Boolean} A value of true if the Array looks like a dynamic session state or diff.
	     */
	    DynamicState.isDynamicStateArray = function (state) {
	        if (!Array.isArray(state))
	            return false;
	        var result = false;
	        for (var i = 0; i < state.length; i++) {
	            var item = state[i];
	            if (typeof item == 'string' || item instanceof String)
	                continue; // dynamic state diffs can contain String values.
	            if (DynamicState.isDynamicState(item))
	                result = true;
	            else
	                return false;
	        }
	        return result;
	    };

	    weavecore.DynamicState = DynamicState;

	}());
	/**
	 * @module weavecore
	 */

	//namesapce
	if (typeof window === 'undefined') {
	    this.weavecore = this.weavecore || {};
	} else {
	    window.weavecore = window.weavecore || {};
	}

	(function () {
	    "use strict";

	    // constructor:
	    /**
	     * An object that implements this empty interface has an associated CallbackCollection and session state,
	     * accessible through the global functions in the WeaveAPI Object. In order for an ILinkableObject to
	     * be created dynamically at runtime, it must not require any constructor parameters.
	     * @class ILinkableObject
	     * @constructor
	     */
	    function ILinkableObject() {}

	    weavecore.ILinkableObject = ILinkableObject;

	}());
	if (typeof window === 'undefined') {
	    this.weavecore = this.weavecore || {};
	} else {
	    window.weavecore = window.weavecore || {};
	}

	/**
	 * This is an interface to a composite object with dynamic state, meaning child objects can be dynamically added or removed.
	 * The session state for this type of object is defined as an Array of DynamicState objects.
	 * DynamicState objects are defined as having exactly three properties: objectName, className, and sessionState.
	 * @see DynamicState
	 *
	 * @author adufilie
	 * @author sanjay1909
	 */
	(function () {
	    function ILinkableCompositeObject() {

	    }



	    ILinkableCompositeObject.prototype = new weavecore.ILinkableObject();
	    ILinkableCompositeObject.prototype.constructor = ILinkableCompositeObject;

	    // Prototypes
	    var p = ILinkableCompositeObject.prototype;

	    /**
	     * This gets the session state of this composite object.
	     * @return An Array of DynamicState objects which compose the session state for this object.
	     * @see weave.api.core.DynamicState
	     */
	    p.getSessionState = function () {};

	    /**
	     * This sets the session state of this composite object.
	     * @param newState An Array of child name Strings or DynamicState objects containing the new values and types for child ILinkableObjects.
	     * @param removeMissingDynamicObjects If true, this will remove any child objects that do not appear in the session state.
	     *     As a special case, a null session state will result in no change regardless of the removeMissingDynamicObjects value.
	     * @see weave.api.core.DynamicState
	     */
	    p.setSessionState = function (newState, removeMissingDynamicObjects) {};

	    weavecore.ILinkableCompositeObject = ILinkableCompositeObject;

	}());
	/**
	 * @module weavecore
	 */

	//namesapce
	if (typeof window === 'undefined') {
	    this.weavecore = this.weavecore || {};
	} else {
	    window.weavecore = window.weavecore || {};
	}


	(function () {
	    "use strict";

	    // Static Public Const Properties
	    /**
	     * The name of the property containing the name assigned to the object when the session state is generated.
	     * @static
	     * @public
	     * @property DEFAULT_TRIGGER_COUNT
	     * @readOnly
	     * @default 1
	     * @type number
	     */
	    Object.defineProperty(CallbackCollection, 'DEFAULT_TRIGGER_COUNT', {
	        value: 1
	    });

	    // constructor:
	    /**
	     * This class manages a list of callback functions.
	     * If specified, the preCallback function will be called immediately before running each
	     * callback using the parameters passed to _runCallbacksImmediately(). This means if there
	     * are five callbacks added, preCallback() gets called five times whenever
	     * _runCallbacksImmediately() is called.  An example usage of this is to make sure a relevant
	     * variable is set to the appropriate value while each callback is running.  The preCallback
	     * function will not be called before grouped callbacks.
	     * @class CallbackCollection
	     * @param {Function} preCallback An optional function to call before each immediate callback.
	     * @constructor
	     */

	    function CallbackCollection(preCallback) {

	        weavecore.ILinkableObject.call(this);

	        //private properties:

	        /**
	         * for debugging only... will be set when debug==true
	         * @private
	         * @property _linkableObject
	         * @type ILinkableObject
	         **/
	        this._linkableObject;

	        /**
	         * for debugging only... will be set when debug==true
	         * @private
	         * @property _lastTriggerStackTrace
	         * @type string
	         **/
	        this._lastTriggerStackTrace; //
	        /**
	         * @private
	         * @property _oldEntries
	         * @type Array
	         **/
	        this._oldEntries;

	        /**
	         * This is a list of CallbackEntry objects in the order they were created.
	         * @private
	         * @property _callbackEntries
	         * @type Array
	         **/
	        this._callbackEntries = [];

	        /**
	         * This is the function that gets called immediately before every callback.
	         * @protected
	         * @property _precallback
	         * @type function
	         **/
	        this._preCallback = preCallback;

	        /**
	         * If this is true, it means triggerCallbacks() has been called while delayed was true.
	         * @private
	         * @property _runCallbacksIsPending
	         * @defaut false
	         * @type boolean
	         **/
	        this._runCallbacksIsPending = false;

	        /**
	         * This is the number of times delayCallbacks() has been called without a matching call to resumeCallbacks().
	         * While this is greater than zero, effects of triggerCallbacks() will be delayed.
	         * @private
	         * @property _delayCount
	         * @type number
	         * @default 0
	         **/
	        this._delayCount = 0;

	        /**
	         * This value keeps track of how many times callbacks were triggered, and is returned by the public triggerCounter accessor function.
	         * The value starts at 1 to simplify code that compares the counter to a previous value.
	         * This allows the previous value to be set to zero so change will be detected the first time the counter is compared.
	         * This fixes potential bugs where the base case of zero is not considered.
	         * @private
	         * @property _runCallbacksIsPending
	         * @type boolean
	         **/
	        this._triggerCounter = CallbackCollection.DEFAULT_TRIGGER_COUNT;

	        /**
	         * A list of CallbackEntry objects for when dispose() is called.
	         * @private
	         * @property _disposeCallbackEntries
	         * @type Array
	         */
	        this._disposeCallbackEntries = [];
	        /**
	         * This value is used internally to remember if dispose() was called.
	         * @private
	         * @property _wasDisposed
	         * @type Boolean
	         * @default false
	         */
	        this._wasDisposed = false;

	        /**
	         * This flag is used in _runCallbacksImmediately() to detect when a recursive call has completed running all the callbacks.
	         * @private
	         * @property _runCallbacksCompleted
	         * @type Boolean
	         */
	        this._runCallbacksCompleted;

	        // public properties:
	        // readonly Properties

	        /**
	         * This counter gets incremented at the time that callbacks are triggered and before they are actually called.
	         * It is necessary in some situations to check this counter to determine if cached data should be used.
	         * @public
	         * @property triggerCounter
	         * @readOnly
	         * @type Number
	         */
	        Object.defineProperty(this, 'triggerCounter', {
	            get: function () {
	                return this._triggerCounter;
	            }
	        });

	        /**
	         * While this is true, it means the delay count is greater than zero and the effects of
	         * triggerCallbacks() are delayed until resumeCallbacks() is called to reduce the delay count.
	         * @public
	         * @property callbacksAreDelayed
	         * @readOnly
	         * @type Boolean
	         */
	        Object.defineProperty(this, 'callbacksAreDelayed', {
	            get: function () {
	                return this._delayCount > 0;
	            }
	        });

	        /**
	         * This flag becomes true after dispose() is called.
	         * @public
	         * @property wasDisposed
	         * @readOnly
	         * @type Boolean
	         */
	        Object.defineProperty(this, 'wasDisposed', {
	            get: function () {
	                return this._wasDisposed;
	            }
	        });

	    }

	    CallbackCollection.prototype = new weavecore.ILinkableObject();
	    CallbackCollection.prototype.constructor = CallbackCollection;

	    // Prototypes
	    var p = CallbackCollection.prototype;
	    // public methods:
	    /**
	     * This adds the given function as a callback.  The function must not require any parameters.
	     * The callback function will not be called recursively as a result of it triggering callbacks recursively.
	     * @method addImmediateCallback
	     * @param {Object} relevantContext If this is not null, then the callback will be removed when the relevantContext object is disposed via SessionManager.dispose().  This parameter is typically a 'this' pointer.
	     * @param {Function} callback The function to call when callbacks are triggered.
	     * @param {Boolean} runCallbackNow If this is set to true, the callback will be run immediately after it is added.
	     * @param {Boolean} alwaysCallLast If this is set to true, the callback will be always be called after any callbacks that were added with alwaysCallLast=false.  Use this to establish the desired child-to-parent triggering order.
	     */
	    p.addImmediateCallback = function (contextObj, callback, runCallbackNow, alwaysCallLast) {
	        if (callback === null || callback === undefined)
	            return;

	        // set default value for parameters
	        if (runCallbackNow === null || runCallbackNow === undefined)
	            runCallbackNow = false;

	        if (alwaysCallLast === null || alwaysCallLast === undefined)
	            alwaysCallLast = false;

	        // remove the callback if it was previously added
	        this.removeCallback(callback);

	        var entry = new CallbackEntry(contextObj, callback);
	        if (alwaysCallLast) // this will run the callback in second round of callback entries
	            entry.schedule = 1; //mostly parent.triggercallback are called last.
	        this._callbackEntries.push(entry);

	        if (runCallbackNow) {
	            // increase the recursion count while the function is running
	            entry.recursionCount++;
	            callback.call(this);
	            entry.recursionCount--;
	        }
	    };

	    /**
	     * This will trigger every callback function to be called with their saved arguments.
	     * If the delay count is greater than zero, the callbacks will not be called immediately.
	     * @method triggerCallbacks
	     */
	    p.triggerCallbacks = function () {

	        if (CallbackCollection.debug) {
	            if (arguments)
	                console.log("triggerCallbacks", arguments);
	            else
	                console.log("triggerCallbacks", this);

	            this._lastTriggerStackTrace = new Error(CallbackCollection.STACK_TRACE_TRIGGER).stack;
	        }

	        if (this._delayCount > 0) {
	            // we still want to increase the counter even if callbacks are delayed
	            this._triggerCounter++;
	            if (CallbackCollection.debug) console.log("triggerCallbacks: _runCallbacksIsPending ->true", this._delayCount, this._triggerCounter);
	            this._runCallbacksIsPending = true;
	            return;
	        }
	        this._runCallbacksImmediately.call(this);
	    };


	    /**
	     * This function runs callbacks immediately, ignoring any delays.
	     * The preCallback function will be called with the specified preCallbackParams arguments.
	     * @method _runCallbacksImmediately
	     * @param preCallbackParams The arguments to pass to the preCallback function given in the constructor.
	     * @protected
	     * @final
	     */
	    p._runCallbacksImmediately = function () {
	        if (CallbackCollection.debug) {
	            if (arguments.length > 1) console.log("_runCallbacksImmediately: ", arguments);
	        }
	        var preCallbackParams = arguments;
	        //increase the counter immediately
	        this._triggerCounter++;
	        this._runCallbacksIsPending = false;

	        // This flag is set to false before running the callbacks.  When it becomes true, the loop exits.
	        this._runCallbacksCompleted = false;

	        for (var schedule = 0; schedule < 2; schedule++) {
	            // run the callbacks in the order they were added
	            for (var i = 0; i < this._callbackEntries.length; i++) {
	                // If this flag is set to true, it means a recursive call has finished running callbacks.
	                // If _preCallback is specified, we don't want to exit the loop because that cause a loss of information.
	                if (this._runCallbacksCompleted && (this._preCallback === undefined || this._preCallback === null))
	                    break;

	                var entry = this._callbackEntries[i];

	                // if we haven't reached the matching schedule yet, skip this callback
	                if (entry.schedule != schedule)
	                    continue;
	                // Remove the entry if the context was disposed by SessionManager.
	                var shouldRemoveEntry;
	                if (entry.callback === null || entry.callback === undefined)
	                    shouldRemoveEntry = true;
	                else if (entry.context instanceof CallbackCollection) // special case
	                    shouldRemoveEntry = entry.context.wasDisposed;
	                else
	                    shouldRemoveEntry = WeaveAPI.SessionManager.objectWasDisposed(entry.context);
	                if (shouldRemoveEntry) {
	                    if (CallbackCollection.debug) {
	                        if (arguments.length > 1) console.log("Entry is disposed");
	                    }
	                    entry.dispose();
	                    // remove the empty callback reference from the list
	                    var removed = this._callbackEntries.splice(i--, 1); // decrease i because remaining entries have shifted
	                    if (CallbackCollection.debug)
	                        this._oldEntries = this._oldEntries ? this._oldEntries.concat(removed) : removed;
	                    continue;
	                }
	                // if _preCallback is specified, we don't want to limit recursion because that would cause a loss of information.
	                if (entry.recursionCount === 0 || (this._preCallback !== undefined && this._preCallback !== null)) {
	                    entry.recursionCount++; // increase count to signal that we are currently running this callback.
	                    if (this._preCallback !== undefined && this._preCallback !== null)
	                        this._preCallback.apply(this, preCallbackParams);
	                    if (CallbackCollection.debug) {
	                        if (arguments.length > 1) console.log(["callback executed"]);
	                    }
	                    entry.callback.call();

	                    entry.recursionCount--; // decrease count because the callback finished.
	                }
	            }
	        }
	        // This flag is now set to true in case this function was called recursively.  This causes the outer call to exit its loop.
	        this._runCallbacksCompleted = true;
	    };

	    /**
	     * This function will remove a callback that was previously added.
	     * @method removeCallback
	     * @param {Function} callback The function to remove from the list of callbacks.
	     */
	    p.removeCallback = function (callback) {
	        // if the callback was added as a grouped callback, we need to remove the trigger function
	        GroupedCallbackEntry.removeGroupedCallback(this, callback);
	        // find the matching CallbackEntry, if any
	        for (var outerLoop = 0; outerLoop < 2; outerLoop++) {
	            var entries = outerLoop === 0 ? this._callbackEntries : this._disposeCallbackEntries;
	            for (var index = 0; index < entries.length; index++) {
	                var entry = entries[index];
	                if (entry !== null && entry !== undefined && callback === entry.callback) {
	                    // Remove the callback by setting the function pointer to null.
	                    // This is done instead of removing the entry because we may be looping over the _callbackEntries Array right now.
	                    entry.dispose();
	                }
	            }
	        }
	    };



	    /**
	     * This will increase the delay count by 1.  To decrease the delay count, use resumeCallbacks().
	     * As long as the delay count is greater than zero, effects of triggerCallbacks() will be delayed.
	     * @method delayCallbacks
	     */
	    p.delayCallbacks = function () {
	        this._delayCount++;
	    };

	    /**
	     * This will decrease the delay count by one if it is greater than zero.
	     * If triggerCallbacks() was called while the delay count was greater than zero, immediate callbacks will be called now.
	     * @method resumeCallbacks
	     */
	    p.resumeCallbacks = function () {
	        if (this._delayCount > 0)
	            this._delayCount--;

	        if (this._delayCount === 0 && this._runCallbacksIsPending)
	            this.triggerCallbacks("resume Callbacks");
	    };

	    /**
	     * This will add a callback that will only be called once, when this callback collection is disposed.
	     * @method addDisposeCallback
	     * @param {Object} relevantContext If this is not null, then the callback will be removed when the relevantContext object is disposed via SessionManager.dispose().  This parameter is typically a 'this' pointer.
	     * @param callback {Function} The function to call when this callback collection is disposed.
	     */
	    p.addDisposeCallback = function (relevantContext, callback) {
	        // don't do anything if the dispose callback was already added
	        for (var i = 0; i < this._disposeCallbackEntries.length; i++) {
	            var entry = this._disposeCallbackEntries[i];
	            if (entry.callback === callback)
	                return;
	        }


	        this._disposeCallbackEntries.push(new CallbackEntry(relevantContext, callback));
	    };


	    /**
	     * This function will be called automatically when the object is no longer needed, and should not be called directly.
	     * Use disposeObject() instead so parent-child relationships get cleaned up automatically.
	     * @method dispose
	     */
	    p.dispose = function () {
	        // remove all callbacks
	        if (CallbackCollection.debug)
	            this._oldEntries = this._oldEntries ? this._oldEntries.concat(this._callbackEntries) : this._callbackEntries.concat();

	        this._callbackEntries.length = 0;
	        this._wasDisposed = true;

	        // run & remove dispose callbacks
	        while (this._disposeCallbackEntries.length) {
	            var entry = this._disposeCallbackEntries.shift();
	            if (entry.callback !== null && entry.callback !== undefined && !WeaveAPI.SessionManager.objectWasDisposed(entry.context)) {
	                entry.callback();
	            }
	        }
	    };



	    /**
	     * Adds a callback that will only be called during a scheduled time each frame.  Grouped callbacks use a central trigger list,
	     * meaning that if multiple ICallbackCollections trigger the same grouped callback before the scheduled time, it will behave as
	     * if it were only triggered once.  For this reason, grouped callback functions cannot have any parameters.  Adding a grouped
	     * callback to a ICallbackCollection will undo any previous effects of addImmediateCallback() or addDisposeCallback() made to the
	     * same ICallbackCollection.  The callback function will not be called recursively as a result of it triggering callbacks recursively.
	     * @method addGroupedCallback
	     * @param relevantContext {Object} If this is not null, then the callback will be removed when the relevantContext object is disposed via SessionManager.dispose().  This parameter is typically a 'this' pointer.
	     * @param groupedCallback {Function} The callback function that will only be allowed to run during a scheduled time each frame.  It must not require any parameters.
	     * @param triggerCallbackNow {Boolean} If this is set to true, the callback will be triggered to run during the scheduled time after it is added.
	     */
	    p.addGroupedCallback = function (relevantContext, groupedCallback, triggerCallbackNow) {
	        //set default value for parameters
	        if (triggerCallbackNow === null || triggerCallbackNow === undefined)
	            triggerCallbackNow = false;
	        GroupedCallbackEntry.addGroupedCallback(this, relevantContext, groupedCallback, triggerCallbackNow);
	    };



	    weavecore.CallbackCollection = CallbackCollection;


	    // constructor:
	    /**
	     * Internal Class used in {{#crossLink "CallbackCollection"}}{{/crossLink}}
	     * @class CallbackEntry
	     * @for CallbackCollection
	     * @param {Object} context
	     * @param {Function} callback
	     * @constructor
	     */
	    function CallbackEntry(context, callback) {
	        /**
	         * This is the context in which the callback function is relevant.
	         * When the context is disposed, the callback should not be called anymore.
	         * @public
	         * @property context
	         * @type Object
	         */
	        this.context = context;
	        /**
	         * This is the callback function.
	         * @public
	         * @property callback
	         * @type Function
	         */
	        this.callback = callback;
	        /**
	         * This is the current recursion depth.
	         * If this is greater than zero, it means the function is currently running.
	         * @public
	         * @property recursionCount
	         * @type number
	         */
	        this.recursionCount = 0;
	        /**
	         * This is 0 if the callback was added with alwaysCallLast=false, or 1 for alwaysCallLast=true
	         * @public
	         * @property schedule
	         * @type number
	         */
	        this.schedule = 0;

	        /**
	         * This is a stack trace from when the callback was added.
	         * @public
	         * @property addCallback_stackTrace
	         * @type string
	         */
	        this.addCallback_stackTrace;
	        /**
	         * This is a stack trace from when the callback was removed.
	         * @public
	         * @property removeCallback_stackTrace
	         * @type string
	         */
	        this.removeCallback_stackTrace;

	        if (CallbackCollection.debug)
	            this.addCallback_stackTrace = new Error(CallbackEntry.STACK_TRACE_ADD).stack;
	    }

	    //Static Properties:
	    /**
	     * Internal Static const properties for Debugging
	     * @private
	     * @static
	     * @property STACK_TRACE_TRIGGER
	     * @readOnly
	     * @default "This is the stack trace from when the callbacks were last triggered."
	     * @type string
	     */
	    Object.defineProperty(CallbackEntry, 'STACK_TRACE_TRIGGER', {
	        value: "This is the stack trace from when the callbacks were last triggered."
	    });
	    /**
	     * Internal Static const properties for Debugging
	     * @private
	     * @static
	     * @property STACK_TRACE_ADD
	     * @readOnly
	     * @default "This is the stack trace from when the callback was added."
	     * @type string
	     */
	    Object.defineProperty(CallbackEntry, 'STACK_TRACE_ADD', {
	        value: "This is the stack trace from when the callback was added."
	    });
	    /**
	     * Internal Static const properties for Debugging
	     * @private
	     * @static
	     * @property STACK_TRACE_REMOVE
	     * @readOnly
	     * @default "This is the stack trace from when the callback was removed."
	     * @type string
	     */
	    Object.defineProperty(CallbackEntry, 'STACK_TRACE_REMOVE', {
	        value: "This is the stack trace from when the callback was removed."
	    });

	    /**
	     * Call this when the callback entry is no longer needed.
	     * @method dispose
	     */
	    CallbackEntry.prototype.dispose = function () {
	        if (CallbackCollection.debug && this.callback !== null && this.callback !== undefined)
	            this.removeCallback_stackTrace = new Error(CallbackEntry.STACK_TRACE_REMOVE).stack;

	        this.context = null;
	        this.callback = null;
	    };

	    weavecore.CallbackEntry = CallbackEntry;


	    // constructor:
	    /**
	     * Internal Class used in {{#crossLink "CallbackCollection"}}{{/crossLink}}
	     * @class GroupedCallbackEntry
	     * @extends CallbackEntry
	     * @for CallbackCollection
	     * @param {Function} groupedCallback
	     * @constructor
	     */
	    function GroupedCallbackEntry(groupedCallback) {

	        CallbackEntry.call(this, [], groupedCallback);
	        /**
	         * If true, the callback was triggered this frame.
	         * @public
	         * @property triggered
	         * @type Boolean
	         * @default false
	         */
	        this.triggered = false;

	        /**
	         * If true, the callback was triggered again from another grouped callback.
	         * @public
	         * @property triggeredAgain
	         * @type Boolean
	         * @default false
	         */
	        this.triggeredAgain = false;


	        if (!GroupedCallbackEntry._initialized) {
	            weavecore.StageUtils.addEventCallback("tick", null, GroupedCallbackEntry._handleGroupedCallbacks.bind(this));
	            GroupedCallbackEntry._initialized = true;
	        }
	    }

	    //Static Properties:
	    /**
	     * True while handling grouped callbacks.
	     * @private
	     * @static
	     * @property _handlingGroupedCallbacks
	     * @default false
	     * @type Boolean
	     */
	    GroupedCallbackEntry._handlingGroupedCallbacks = false;

	    /**
	     * True while handling grouped callbacks called recursively from other grouped callbacks.
	     * @private
	     * @static
	     * @property _handlingRecursiveGroupedCallbacks
	     * @default false
	     * @type Boolean
	     */
	    GroupedCallbackEntry._handlingRecursiveGroupedCallbacks = false;

	    /**
	     * This gets set to true when the static _handleGroupedCallbacks() callback has been added as a frame listener.
	     * @private
	     * @static
	     * @property _initialized
	     * @default false
	     * @type Boolean
	     */
	    GroupedCallbackEntry._initialized = false;

	    /**
	     * This maps a groupedCallback function to its corresponding GroupedCallbackEntry.
	     * @private
	     * @static
	     * @readOnly
	     * @property _entryLookup
	     * @type Map
	     */
	    Object.defineProperty(GroupedCallbackEntry, '_entryLookup', {
	        value: new Map()
	    });

	    /**
	     * This is a list of GroupedCallbackEntry objects in the order they were triggered.
	     * @private
	     * @static
	     * @readOnly
	     * @property _triggeredEntries
	     * @type Array
	     */
	    Object.defineProperty(GroupedCallbackEntry, '_triggeredEntries', {
	        value: []
	    });

	    //Static Methods:

	    /**
	     * @method addGroupedCallback
	     * @static
	     * @param {CallbackCollection} callbackCollection
	     * @param {Object} relevantContext
	     * @param {Function} groupedCallback
	     * @param {Boolean} triggerCallbackNow
	     */
	    GroupedCallbackEntry.addGroupedCallback = function (callbackCollection, relevantContext, groupedCallback, triggerCallbackNow) {
	        // get (or create) the shared entry for the groupedCallback
	        var entry = GroupedCallbackEntry._entryLookup.get(groupedCallback);
	        if (!entry) {
	            entry = new GroupedCallbackEntry(groupedCallback);
	            GroupedCallbackEntry._entryLookup.set(groupedCallback, entry);
	        }

	        // context shouldn't be null because we use it to determine when to clean up the GroupedCallbackEntry.
	        if (relevantContext === null || relevantContext === undefined)
	            relevantContext = callbackCollection;

	        // add this context to the list of relevant contexts
	        entry.context.push(relevantContext);


	        // make sure the actual function is not already added as a callback.
	        callbackCollection.removeCallback(groupedCallback);

	        // add the trigger function as a callback
	        // The relevantContext parameter is set to null for entry.trigger so the same callback can be added multiple times to the same
	        // target using different contexts without having the side effect of losing the callback when one of those contexts is disposed.
	        // The entry.trigger function will be removed once all contexts are disposed.
	        callbackCollection.addImmediateCallback(null, entry.trigger.bind(entry), triggerCallbackNow);
	    };

	    /**
	     * @method removeGroupedCallback
	     * @static
	     * @param {CallbackCollection} callbackCollection
	     * @param {Function} groupedCallback
	     */
	    GroupedCallbackEntry.removeGroupedCallback = function (callbackCollection, groupedCallback) {
	        // remove the trigger function as a callback
	        var entry = GroupedCallbackEntry._entryLookup.get(groupedCallback);
	        if (entry)
	            callbackCollection.removeCallback(entry.trigger);
	    };

	    /**
	     * This function gets called once per frame and allows grouped callbacks to run.
	     * @method _handleGroupedCallbacks
	     * @static
	     * @private
	     */
	    GroupedCallbackEntry._handleGroupedCallbacks = function () {
	        var i;
	        var entry;

	        GroupedCallbackEntry._handlingGroupedCallbacks = true; {
	            // Handle grouped callbacks in the order they were triggered,
	            // anticipating that more may be added to the end of the list in the process.
	            // This first pass does not allow grouped callbacks to call each other immediately.
	            for (i = 0; i < GroupedCallbackEntry._triggeredEntries.length; i++) {
	                entry = GroupedCallbackEntry._triggeredEntries[i];
	                entry.handleGroupedCallback();
	            }

	            // after all grouped callbacks have been handled once, run those which were triggered recursively and allow them to call other grouped callbacks immediately.
	            GroupedCallbackEntry._handlingRecursiveGroupedCallbacks = true; {
	                // handle grouped callbacks that were triggered recursively
	                for (i = 0; i < GroupedCallbackEntry._triggeredEntries.length; i++) {
	                    entry = GroupedCallbackEntry._triggeredEntries[i];
	                    if (entry.triggeredAgain)
	                        entry.handleGroupedCallback();
	                }
	            }
	            GroupedCallbackEntry._handlingRecursiveGroupedCallbacks = false;
	        }
	        GroupedCallbackEntry._handlingGroupedCallbacks = false;

	        // reset for next frame
	        for (i = 0; i < GroupedCallbackEntry._triggeredEntries.length; i++) {
	            entry = GroupedCallbackEntry._triggeredEntries[i];
	            entry.triggered = entry.triggeredAgain = false;
	        }
	        GroupedCallbackEntry._triggeredEntries.length = 0;

	    };

	    GroupedCallbackEntry.prototype = new CallbackEntry();
	    GroupedCallbackEntry.prototype.constructor = GroupedCallbackEntry;

	    var gcP = GroupedCallbackEntry.prototype;

	    /**
	     * Marks the entry to be handled later (unless already triggered this frame).
	     * This also takes care of preventing recursion.
	     * @method trigger
	     */
	    gcP.trigger = function () {
	        // if handling recursive callbacks, call now
	        if (GroupedCallbackEntry._handlingRecursiveGroupedCallbacks) {
	            this.handleGroupedCallback();
	        } else if (!this.triggered) {
	            // not previously triggered
	            GroupedCallbackEntry._triggeredEntries.push(this);
	            this.triggered = true;
	        } else if (GroupedCallbackEntry._handlingGroupedCallbacks) {
	            // triggered recursively - call later
	            this.triggeredAgain = true;
	        }
	    };


	    /**
	     * Checks the context(s) before calling groupedCallback
	     * @method handleGroupedCallback
	     */
	    gcP.handleGroupedCallback = function () {
	        if (!this.context)
	            return;

	        // first, make sure there is at least one relevant context for this callback.
	        var allContexts = this.context;
	        // remove the contexts that have been disposed.
	        for (var i = 0; i < allContexts.length; i++)
	            if (WeaveAPI.SessionManager.objectWasDisposed(allContexts[i]))
	                allContexts.splice(i--, 1);
	            // if there are no more relevant contexts for this callback, don't run it.
	        if (allContexts.length === 0) {
	            this.dispose();
	            GroupedCallbackEntry._entryLookup.delete(this.callback);
	            return;
	        }

	        // avoid immediate recursion
	        if (this.recursionCount === 0) {
	            this.recursionCount++;
	            this.callback.apply();
	            this.recursionCount--;
	        }
	        // avoid delayed recursion
	        this.triggeredAgain = false;
	    };

	    weavecore.GroupedCallbackEntry = GroupedCallbackEntry;

	}());
	/**
	 * @module weavecore
	 */

	// namespace
	if (typeof window === 'undefined') {
	    this.weavecore = this.weavecore || {};
	} else {
	    window.weavecore = window.weavecore || {};
	}


	(function () {
	    "use strict";

	    // constructor:
	    /**
	     * Session manager contains core functions related to session state.
	     * @class SessionManager
	     * @constructor
	     */
	    function SessionManager() {

	        //const properties - writable default to false.
	        /**
	         * @private
	         * @readOnly
	         * @property _childToParentMap
	         * @type Map
	         * This maps a child ILinkableObject to a Dictionary, which maps each of its registered parent ILinkableObjects to a value of true if the child should appear in the session state automatically or false if not.
	         */
	        Object.defineProperty(this, "_childToParentMap", {
	            value: new Map()
	        });

	        /**
	         * @private
	         * @readOnly
	         * @property _parentToChildMap
	         * @type Map
	         * This maps a parent ILinkableObject to a Dictionary, which maps each of its registered child ILinkableObjects to a value of true if the child should appear in the session state automatically or false if not.
	         */
	        Object.defineProperty(this, "_parentToChildMap", {
	            value: new Map()
	        });

	        /**
	         * @private
	         * @readOnly
	         * @property _ownerToChildMap
	         * @type Map
	         * This maps a parent ILinkableObject to a Dictionary, which maps each child ILinkableObject it owns to a value of true.
	         */
	        Object.defineProperty(this, "_ownerToChildMap", {
	            value: new Map()
	        });

	        /**
	         * This maps a child ILinkableObject to its registered owner.
	         * @private
	         * @readOnly
	         * @property _childToOwnerMap
	         * @type Map
	         */
	        Object.defineProperty(this, "_childToOwnerMap", {
	            value: new Map()
	        });

	        this.debug = false;

	        this.linkableObjectToCallbackCollectionMap = new Map();
	        this.debugBusyTasks = false;

	        /**
	         * @private
	         * @readOnly
	         * @property _disposedObjectsMap
	         * @type Map
	         */
	        Object.defineProperty(this, "_disposedObjectsMap", {
	            value: new Map()
	        });

	        /**
	         * @private
	         * @readOnly
	         * @property _treeCallbacks
	         * @type CallbackCollection
	         */
	        Object.defineProperty(this, "_treeCallbacks", {
	            value: new weavecore.CallbackCollection()
	        });

	        /**
	         * @private
	         * @readOnly
	         * @property _classNameToSessionedPropertyNames
	         * @type Object
	         */
	        Object.defineProperty(this, "_classNameToSessionedPropertyNames", {
	            value: {}
	        });

	        /**
	         * keeps track of which objects are currently being traversed
	         * @private
	         * @readOnly
	         * @property _getSessionStateIgnoreList
	         * @type Map
	         */
	        Object.defineProperty(this, "_getSessionStateIgnoreList", {
	            value: new Map()
	        });

	    }

	    var p = SessionManager.prototype;



	    /**
	     * This function tells the SessionManager that the session state of the specified child should appear in the
	     * session state of the specified parent, and the child should be disposed when the parent is disposed.
	     *
	     * There is one other requirement for the child session state to appear in the parent session state -- the child
	     * must be accessible through a public variable of the parent or through an accessor function of the parent.
	     *
	     * This function will add callbacks to the sessioned children that cause the parent callbacks to run.
	     *
	     * If a callback function is given, the callback will be added to the child and cleaned up when the parent is disposed.
	     *
	     * @method registerLinkableChild
	     * @param {Object} linkableParent A parent ILinkableObject that the child will be registered with.
	     * @param {ILinkableObject} linkableChild The child ILinkableObject to register as a child.
	     * @param {Function} callback A callback with no parameters that will be added to the child that will run before the parent callbacks are triggered, or during the next ENTER_FRAME event if a grouped callback is used.
	     * @param {Boolean} useGroupedCallback If this is true, addGroupedCallback() will be used instead of addImmediateCallback().
	     * @return {Object} The linkableChild object that was passed to the function.
	     * @example usage:    const foo = registerLinkableChild(this, someLinkableNumber, handleFooChange);
	     */
	    p.registerLinkableChild = function (linkableParent, linkableChild, callback, useGroupedCallback) {
	        //set default values for parameters
	        if (useGroupedCallback === undefined)
	            useGroupedCallback = false;
	        if (!(linkableParent instanceof weavecore.ILinkableObject)) {
	            console.log("registerLinkableChild(): Parent does not inherit ILinkableObject.");
	            return;
	        }

	        if (!(linkableChild instanceof weavecore.ILinkableObject)) {
	            console.log("registerLinkableChild(): child does not inherit ILinkableObject.");
	            return;
	        }

	        if (callback !== null && callback !== undefined) {
	            var cc = this.getCallbackCollection.call(this, linkableChild);
	            if (useGroupedCallback)
	                cc.addGroupedCallback(linkableParent, callback);
	            else
	                cc.addImmediateCallback(linkableParent, callback);
	        }

	        // if the child doesn't have an owner yet, this parent is the owner of the child
	        // and the child should be disposed when the parent is disposed.
	        // registerDisposableChild() also initializes the required Dictionaries.
	        this.registerDisposableChild(linkableParent, linkableChild);

	        if (this._childToParentMap.get(linkableChild).get(linkableParent) === undefined) {
	            // remember this child-parent relationship
	            this._childToParentMap.get(linkableChild).set(linkableParent, true);
	            this._parentToChildMap.get(linkableParent).set(linkableChild, true);

	            // make child changes trigger parent callbacks
	            var parentCC = this.getCallbackCollection(linkableParent);
	            // set alwaysCallLast=true for triggering parent callbacks, so parent will be triggered after all the other child callbacks
	            this.getCallbackCollection(linkableChild).addImmediateCallback(linkableParent, parentCC.triggerCallbacks.bind(parentCC, "Parent's -triggerCallback"), false, true); // parent-child relationship
	        }

	        this._treeCallbacks.triggerCallbacks("Session Tree: Child Registered");

	        return linkableChild;
	    };

	    /**
	     * This will register a child of a parent and cause the child to be disposed when the parent is disposed.
	     * Use this function when a child object can be disposed but you do not want to link the callbacks.
	     * The child will be disposed when the parent is disposed.
	     *
	     * @method registerDisposableChild
	     * @example usage:    const foo = registerDisposableChild(this, someLinkableNumber);
	     *
	     * @param {Object} disposableParent A parent disposable object that the child will be registered with.
	     * @param {Object} disposableChild The disposable object to register as a child of the parent.
	     * @return {Object} The linkableChild object that was passed to the function.
	     */
	    p.registerDisposableChild = function (disposableParent, disposableChild) {
	        if (this._ownerToChildMap.get(disposableParent) === undefined) {
	            this._ownerToChildMap.set(disposableParent, new Map());
	            this._parentToChildMap.set(disposableParent, new Map());
	        }
	        // if this child has no owner yet...
	        if (this._childToOwnerMap.get(disposableChild) === undefined) {
	            // make this first parent the owner
	            this._childToOwnerMap.set(disposableChild, disposableParent);
	            this._ownerToChildMap.get(disposableParent).set(disposableChild, true);
	            // initialize the parent dictionary for this child
	            this._childToParentMap.set(disposableChild, new Map());
	        }
	        return disposableChild;
	    };

	    /**
	     * Use this function with care.  This will remove child objects from the session state of a parent and
	     * stop the child from triggering the parent callbacks.
	     * @method unregisterLinkableChild
	     * @param {ILinkableChild} parent A parent that the specified child objects were previously registered with.
	     * @param {ILinkableChild} child The child object to unregister from the parent.
	     */
	    p.unregisterLinkableChild = function (parent, child) {
	        if (this._childToParentMap.get(child))
	            this._childToParentMap.get(child).delete(parent);
	        if (this._parentToChildMap.get(parent))
	            this._parentToChildMap(parent).delete(child);
	        this.getCallbackCollection(child).removeCallback(this.getCallbackCollection(parent).triggerCallbacks.bind(parent));

	        this._treeCallbacks.triggerCallbacks("Session Tree: Child un-Registered");
	    };


	    /**
	     * This function will add or remove child objects from the session state of a parent.  Use this function
	     * with care because the child will no longer be "sessioned."  The child objects will continue to trigger the
	     * callbacks of the parent object, but they will no longer be considered a part of the parent's session state.
	     * If you are not careful, this will break certain functionalities that depend on the session state of the parent.
	     * @method excludeLinkableChildFromSessionState
	     * @param {ILinkableChild} parent A parent that the specified child objects were previously registered with.
	     * @param {ILinkableChild} child The child object to remove from the session state of the parent.
	     */
	    p.excludeLinkableChildFromSessionState = function (parent, child) {
	        if (parent === null || child === null || parent === undefined || child === undefined) {
	            console.log("SessionManager.excludeLinkableChildFromSessionState(): Parameters cannot be null.");
	            return;
	        }
	        if (this._childToParentMap.get(child) !== undefined && this._childToParentMap.get(child).get(parent))
	            this._childToParentMap.get(child).set(parent, false);
	        if (this._parentToChildMap.get(parent) !== undefined && this._parentToChildMap.get(parent).get(child))
	            this._parentToChildMap.get(parent).set(child, false);
	    };

	    /**
	     * @method _getRegisteredChildren
	     * @private
	     * This function will return all the child objects that have been registered with a parent.
	     * @param {ILinkableChild} parent A parent object to get the registered children of.
	     * @return {Array} An Array containing a list of linkable objects that have been registered as children of the specified parent.
	     *         This list includes all children that have been registered, even those that do not appear in the session state.
	     */
	    p._getRegisteredChildren = function (parent) {
	        var result = [];
	        if (this._parentToChildMap.get(parent) !== undefined)
	            for (var child in this._parentToChildMap.get(parent))
	                result.push(child);
	        return result;
	    };

	    /**
	     * This function gets the owner of a linkable object.  The owner of an object is defined as its first registered parent.
	     * @method getLinkableOwner
	     * @param {ILinkableObject} child An ILinkableObject that was registered as a child of another ILinkableObject.
	     * @return {ILinkableObject} The owner of the child object (the first parent that was registered with the child), or null if the child has no owner.
	     * See {{#crossLink "SessionManager/getLinkableDescendants:method"}}{{/crossLink}}
	     */
	    p.getLinkableOwner = function (child) {
	        return this._childToOwnerMap.get(child);
	    };

	    /**
	     * This function will return all the descendant objects that implement ILinkableObject.
	     * If the filter parameter is specified, the results will contain only those objects that extend or implement the filter class.
	     * @method getLinkableDescendants
	     * @param {ILinkableObject} root A root object to get the descendants of.
	     * @param {Class} filter An optional Class definition which will be used to filter the results.
	     * @return {Array} An Array containing a list of descendant objects.
	     * See {{#crossLink "SessionManager/getLinkableOwner:method"}}{{/crossLink}}
	     */
	    p.getLinkableDescendants = function (root, filter) { //TODO: Port getLinkableDescendants
	        //return this._childToOwnerMap.get(child);
	    };
	    //TODO: Port Busy task from As3

	    /**
	     * @method getSessionStateTree
	     * @param {ILinkableObject} root The linkable object to be placed at the root node of the tree.
	     * @param {String} objectName
	     * @param {Object} objectTypeFilter
	     * @return {WeaveTreeItem} A tree of nodes with the properties "label", "object", and "children"
	     */
	    p.getSessionStateTree = function (root, objectName, objectTypeFilter) {
	        var treeItem = new weavecore.WeaveTreeItem();
	        treeItem.label = objectName;
	        treeItem.source = root;
	        treeItem.children = SessionManager.prototype._getTreeItemChildren.bind(this);
	        treeItem.data = objectTypeFilter;
	        return treeItem;
	    };

	    /**
	     * @method _getTreeItemChildren
	     * @param {WeaveTreeItem} treeItem
	     * @return {Array}
	     */
	    p._getTreeItemChildren = function (treeItem) {
	        var object = treeItem.source;
	        var objectTypeFilter = treeItem.data;
	        var children = [];
	        var names = [];
	        var childObject;
	        var subtree;
	        var ignoreList = new Map();
	        if (object instanceof weavecore.LinkableHashMap) {
	            names = object.getNames();
	            var childObjects = object.getObjects();
	            for (var i = 0; i < names.length; i++) {
	                childObject = childObjects[i];
	                if (this._childToParentMap.get(childObject) && this._childToParentMap.get(childObject).get(object)) {
	                    if (ignoreList.get(childObject) !== undefined)
	                        continue;
	                    ignoreList.set(childObject, true);

	                    subtree = this.getSessionStateTree(childObject, names[i], objectTypeFilter);
	                    if (subtree !== null && subtree !== undefined)
	                        children.push(subtree);
	                }
	            }
	        } else {
	            var deprecatedLookup = null;
	            //TODO: support for Linkable dynamic object
	            console.log("Linkable dynamic object not yet supported - only Linkablehashmap");
	        }
	        if (children.length === 0)
	            children = null;
	        if (objectTypeFilter === null || objectTypeFilter === undefined)
	            return children;
	        if ((children === null || children === undefined) && !(object instanceof objectTypeFilter))
	            return null;
	        return children;
	    };

	    /**
	     * Adds a grouped callback that will be triggered when the session state tree changes.
	     * USE WITH CARE. The groupedCallback should not run computationally-expensive code.
	     * @method addTreeCallback
	     * @param {Object} relevantContext
	     * @param {Function} groupedCallback
	     * @param {Boolean} triggerCallbackNow
	     */
	    p.addTreeCallback = function (relevantContext, groupedCallback, triggerCallbackNow) {
	        if (triggerCallbackNow === undefined) triggerCallbackNow = false;
	        this._treeCallbacks.addGroupedCallback(relevantContext, groupedCallback, triggerCallbackNow);
	    };

	    /**
	     * @method removeTreeCallback
	     * @param {Function} groupedCallback
	     */
	    p.removeTreeCallback = function (groupedCallback) {
	        this._treeCallbacks.removeCallback(groupedCallback);
	    };

	    /**
	     * This function will copy the session state from one sessioned object to another.
	     * If the two objects are of different types, the behavior of this function is undefined.
	     * @method copySessionState
	     * @param {ILinkableObject} source A sessioned object to copy the session state from.
	     * @param {ILinkableObject} destination A sessioned object to copy the session state to.
	     * see {{#crossLink "SessionManager/getSessionState:method"}}{{/crossLink}}
	     * see {{#crossLink "SessionManager/setSessionState:method"}}{{/crossLink}}
	     */
	    p.copySessionState = function (source, destination) {
	        var sessionState = this.getSessionState(source);
	        this.setSessionState(destination, sessionState, true);
	    };

	    /**
	     * @method _applyDiff
	     * @private
	     * @param {Object} base
	     * @param {Object} diff
	     */
	    p._applyDiff = function (base, diff) {
	        if (base === null || base === undefined || typeof (base) !== 'object')
	            return diff;

	        for (var key in diff)
	            base[key] = this._applyDiff(base[key], diff[key]);

	        return base;
	    };

	    /**
	     * Sets the session state of an ILinkableObject.
	     * @method setSessionState
	     * @param {ILinkableObject} linkableObject An object containing sessioned properties (sessioned objects may be nested).
	     * @param {Object} newState An object containing the new values for sessioned properties in the sessioned object.
	     * @param {Boolean} removeMissingDynamicObjects If true, this will remove any properties from an ILinkableCompositeObject that do not appear in the session state.
	     * see {{#crossLink "SessionManager/getSessionState:method"}}{{/crossLink}}
	     */
	    p.setSessionState = function (linkableObject, newState, removeMissingDynamicObjects) {
	        if (removeMissingDynamicObjects === undefined) removeMissingDynamicObjects = true;
	        if (linkableObject === null) {
	            console.log("SessionManager.setSessionState(): linkableObject cannot be null.");
	            return;
	        }

	        if (linkableObject === undefined) {
	            console.log("SessionManager.setSessionState(): linkableObject cannot be undefined.");
	            return;
	        }

	        // special cases: for Explicit and Composite Session Object
	        if (linkableObject instanceof weavecore.LinkableVariable) {
	            var lv = linkableObject;
	            if (removeMissingDynamicObjects === false && newState && newState.constructor.name === 'Object') {
	                lv.setSessionState.call(lv, this._applyDiff.call(this, Object.create(lv.getSessionState(lv)), newState));
	            } else {
	                lv.setSessionState.call(lv, newState);
	            }
	            return;
	        }
	        //linkableHashmap is handled, In As3 version it implements ILinkableCompositeObject
	        // in jS we couldnt do that, thats why linkableObject.setSessionState is used
	        if (linkableObject instanceof weavecore.ILinkableCompositeObject || linkableObject.setSessionState) {
	            if (newState.constructor.name === "String")
	                newState = [newState];

	            if (newState !== null && !(newState instanceof Array)) {
	                var array = [];
	                for (var key in newState)
	                    array.push(weavecore.DynamicState.create(key, null, newState[key]));
	                newState = array;
	            }

	            linkableObject.setSessionState(newState, removeMissingDynamicObjects);
	            return;
	        }

	        if (newState === null || newState === undefined)
	            return;

	        // delay callbacks before setting session state
	        var objectCC = this.getCallbackCollection(linkableObject);
	        objectCC.delayCallbacks();

	        // cache property names if necessary
	        var className = (linkableObject.constructor.name);
	        if (!this._classNameToSessionedPropertyNames[className])
	            this._cacheClassInfo(linkableObject, className);

	        // set session state
	        var foundMissingProperty = false;
	        var propertyNames;

	        propertyNames = this._classNameToSessionedPropertyNames[className];

	        for (var i = 0; i < propertyNames.length; i++) {
	            var name = propertyNames[i];
	            if (!newState.hasOwnProperty(name)) {
	                if (removeMissingDynamicObjects) //&& linkableObject is ILinkableObjectWithNewProperties
	                    foundMissingProperty = true;
	                continue;
	            }

	            var property = null;
	            try {
	                property = linkableObject[name];
	            } catch (e) {
	                console.log('SessionManager.setSessionState(): Unable to get property "' + name + '" of class "' + linkableObject.constructor.name + '"', e);
	            }

	            if (property === null)
	                continue;

	            this.setSessionState(property, newState[name], removeMissingDynamicObjects);
	        }

	        // TODO: handle properties appearing in session state that do not appear in the linkableObject
	        /*if (linkableObject instanceof ILinkableObjectWithNewProperties)
					for (name in newState)
						if (!deprecatedLookup.hasOwnProperty(name))
							linkableObject.handleMissingSessionStateProperty(newState, name);*/

	        // handle properties missing from absolute session state
	        if (foundMissingProperty)
	            propertyNames.forEach(function (name) {
	                if (!newState.hasOwnProperty(name))
	                    linkableObject.handleMissingSessionStateProperty(newState, name);
	            });

	        // resume callbacks after setting session state
	        objectCC.resumeCallbacks();

	    };

	    /**
	     * Gets the session state of an ILinkableObject.
	     * @method getSessionState
	     * @param {IlinkableObject} linkableObject An object containing sessioned properties (sessioned objects may be nested).
	     * @return {Object} An object containing the values from the sessioned properties.
	     * see {{#crossLink "SessionManager/setSessionState:method"}}{{/crossLink}}
	     */
	    p.getSessionState = function (linkableObject) {
	        if (linkableObject === null) {
	            console.log("SessionManager.getSessionState(): linkableObject cannot be null.");
	            return null;
	        }

	        if (linkableObject === undefined) {
	            console.log("SessionManager.getSessionState(): linkableObject cannot be undefined.");
	            return null;
	        }

	        var result = null;

	        // special cases (explicit session state)
	        if (linkableObject instanceof weavecore.LinkableVariable) {
	            result = linkableObject.getSessionState();
	        }
	        //linkableHashmap is handled, In As3 version it implements ILinkableCompositeObject
	        // in jS we couldnt do that, thats why linkableObject.setSessionState is used
	        else if (linkableObject instanceof weavecore.ILinkableCompositeObject || linkableObject.getSessionState) {
	            result = linkableObject.getSessionState();
	        } else {
	            // implicit session state
	            // first pass: get property names

	            // cache property names if necessary
	            var className = linkableObject.constructor.name;

	            if (!this._classNameToSessionedPropertyNames[className])
	                this._cacheClassInfo(linkableObject, className);

	            var propertyNames = this._classNameToSessionedPropertyNames[className];
	            var resultNames = [];
	            var resultProperties = [];
	            var property = null;
	            var i;
	            for (i = 0; i < propertyNames.length; i++) {
	                var name = propertyNames[i];

	                try {
	                    property = null; // must set this to null first because accessing the property may fail
	                    property = linkableObject[name];
	                } catch (e) {
	                    console.log('Unable to get property "' + name + '" of class "' + linkableObject.constructor.name + '"');
	                }

	                // first pass: set result[name] to the ILinkableObject
	                if (property !== null && !this._getSessionStateIgnoreList[property]) {
	                    // skip this property if it should not appear in the session state under the parent.
	                    if (this._childToParentMap[property] === undefined || !this._childToParentMap[property][linkableObject])
	                        continue;
	                    // avoid infinite recursion in implicit session states
	                    this._getSessionStateIgnoreList[property] = true;
	                    resultNames.push(name);
	                    resultProperties.push(property);
	                } else {
	                    if (debug) {
	                        if (property !== null)
	                            console.log("ignoring duplicate object:", name, property);
	                    }


	                }

	            }

	            // special case if there are no child objects -- return null
	            if (resultNames.length > 0) {
	                // second pass: get values from property names
	                result = {};
	                for (i = 0; i < resultNames.length; i++) {
	                    var value = this.getSessionState(resultProperties[i]);
	                    property = resultProperties[i];
	                    // do not include objects that have a null implicit session state (no child objects)
	                    if (value === null && !(property instanceof weavecore.LinkableVariable) && !(property instanceof weavecore.ILinkableCompositeObject) && !(property.getSessionState))
	                        continue;
	                    result[resultNames[i]] = value;

	                    if (debug)
	                        console.log("getState", sessionedObject.constructor.name, resultNames[i], result[resultNames[i]]);
	                }
	            }
	        }

	        this._getSessionStateIgnoreList[linkableObject] = undefined;

	        return result;
	    };


	    /**
	     * @method _cacheClassInfo
	     * @private
	     * @param {ILinkableObject} linkableObject
	     * @param {String} className
	     */
	    p._cacheClassInfo = function (linkableObject, className) {
	        // linkable property names
	        var propertyNames = Object.getOwnPropertyNames(linkableObject);
	        var sessionedPublicProperties = propertyNames.filter(function (propName) {
	            if (propName.charAt(0) === '_')
	                return false; //Private properties are ignored
	            else
	                return linkableObject[propName] instanceof weavecore.ILinkableObject;
	        });

	        this._classNameToSessionedPropertyNames[className] = sessionedPublicProperties.sort();
	    };

	    /**
	     * This function gets a list of sessioned property names so accessor functions for non-sessioned properties do not have to be called.
	     * @method getLinkablePropertyNames
	     * @param {ILinkableObject} linkableObject An object containing sessioned properties.
	     * @param {Boolean} filtered If set to true, filters out deprecated, null, and excluded properties.
	     * @return {Array} An Array containing the names of the sessioned properties of that object class.
	     */
	    p.getLinkablePropertyNames = function (linkableObject, filtered) {
	        if (filtered === undefined) //default parameter value
	            filtered = false;

	        if (linkableObject === null) {
	            console.log("SessionManager.getLinkablePropertyNames(): linkableObject cannot be null.");
	            return [];
	        }

	        if (linkableObject === undefined) {
	            console.log("SessionManager.getLinkablePropertyNames(): linkableObject cannot be undefined.");
	            return [];
	        }

	        var className = linkableObject.constructor.name;
	        var propertyNames = this._classNameToSessionedPropertyNames[className];
	        if (propertyNames === null || propertyNames === undefined) {
	            this._cacheClassInfo(linkableObject, className);
	            propertyNames = this._classNameToSessionedPropertyNames[className];
	        }

	        if (filtered) {
	            var filteredPropNames = propertyNames.filter(function (propName) {
	                var property = linkableObject[propName];
	                if (property === null || property === undefined)
	                    return false;
	                if (this._childToParentMap[property] === undefined || !this._childToParentMap[property][linkableObject])
	                    return false;

	                return true;
	            });
	            return filteredPropNames;
	        }
	        return propertyNames;
	    };

	    /**
	     * This function gets the CallbackCollection associated with an ILinkableObject.
	     * If there is no CallbackCollection defined for the object, one will be created.
	     * This CallbackCollection is used for reporting changes in the session state
	     * @method getCallbackCollection
	     * @param {ILinkableObject} linkableObject An ILinkableObject to get the associated ICallbackCollection for.
	     * @return {CallbackCollection} The CallbackCollection associated with the given object.
	     */
	    p.getCallbackCollection = function (linkableObject) {
	        if (linkableObject === null || linkableObject === undefined)
	            return null;
	        if (linkableObject instanceof weavecore.CallbackCollection)
	            return linkableObject;

	        var objectCC = this.linkableObjectToCallbackCollectionMap.get(linkableObject);
	        if (objectCC === null || objectCC === undefined) {
	            objectCC = this.registerDisposableChild(linkableObject, new weavecore.CallbackCollection());
	            if (weavecore.CallbackCollection.debug)
	                objectCC._linkableObject = linkableObject;
	            this.linkableObjectToCallbackCollectionMap.set(linkableObject, objectCC);
	        }

	        return objectCC;
	    };


	    /**
	     * This function checks if an object has been disposed by the SessionManager.
	     * @method objectWasDisposed
	     * @param {Object} object An object to check.
	     * @return {Boolean} A value of true if disposeObject() was called for the specified object.
	     * see {{#crossLink "SessionManager/disposeObject:method"}}{{/crossLink}}
	     */
	    p.objectWasDisposed = function (object) {
	        if (object === undefined)
	            return true; // added by sanjay:
	        if (object === null) //null means :Object parameter is null i.e Object has no parameters
	            return false;
	        if (object instanceof weavecore.ILinkableObject) {
	            var cc = this.getCallbackCollection(object);
	            if (cc)
	                return cc.wasDisposed;
	        }
	        return this._disposedObjectsMap.get(object) !== undefined;
	    };


	    /**
	     * This function should be called when an ILinkableObject  is no longer needed.
	     * @method disposeObject
	     * @param {Object} object An ILinkableObject  to clean up.
	     * see {{#crossLink "SessionManager/objectWasDisposed:method"}}{{/crossLink}}
	     */
	    p.disposeObject = function (object) {
	        if (object !== null && object !== undefined && !this._disposedObjectsMap.get(object)) {
	            this._disposedObjectsMap.set(object, true);

	            // TODO: clean up pointers to busy tasks
	            //disposeBusyTaskPointers(object as ILinkableObject);

	            try {
	                // if the object implements IDisposableObject, call its dispose() function now
	                //if (object instanceof IDisposableObject)
	                //	{
	                //	object.dispose();
	                //	}
	                if (object.dispose && object.dispose.constructor === Function) {
	                    // call dispose() anyway if it exists, because it is common to forget to implement IDisposableObject.
	                    object.dispose();
	                }
	            } catch (e) {
	                console.log(e);
	            }

	            var linkableObject = object;
	            if (linkableObject) {
	                // dispose the callback collection corresponding to the object.
	                // this removes all callbacks, including the one that triggers parent callbacks.
	                var objectCC = this.getCallbackCollection(linkableObject);
	                if (objectCC !== linkableObject)
	                    this.disposeObject(objectCC);
	            }

	            // unregister from parents
	            if (this._childToParentMap.get(object) !== undefined) {
	                // remove the parent-to-child mappings
	                for (var parent in this._childToParentMap.get(object))
	                    if (this._parentToChildMap(parent) !== undefined)
	                        this._parentToChildMap.get(parent).delete(object);
	                    // remove child-to-parent mapping
	                this._childToParentMap.delete(object);
	            }

	            // unregister from owner
	            var owner = this._childToOwnerMap.get(object);
	            if (owner !== null || owner !== undefined) {
	                if (this._ownerToChildMap.get(owner) !== undefined)
	                    this._ownerToChildMap.get(owner).delete(object);
	                this._childToOwnerMap.delete(object);
	            }

	            // if the object is an ILinkableVariable, unlink it from all bindable properties that were previously linked
	            //if (linkableObject instanceof LinkableVariable)
	            //for (var bindableParent:* in _watcherMap[linkableObject])
	            //for (var bindablePropertyName:String in _watcherMap[linkableObject][bindableParent])
	            //unlinkBindableProperty(linkableObject as ILinkableVariable, bindableParent, bindablePropertyName);

	            // unlink this object from all other linkable objects
	            //for (var otherObject in linkFunctionCache.dictionary[linkableObject])
	            //unlinkSessionState(linkableObject, otherObject as ILinkableObject);

	            // dispose all registered children that this object owns
	            var children = this._ownerToChildMap.get(object);
	            if (children !== null && children !== undefined) {
	                // clear the pointers to the child dictionaries for this object
	                this._ownerToChildMap.delete(object);
	                this._parentToChildMap.delete(object);
	                // dispose the children this object owned
	                for (var child in children)
	                    this.disposeObject(child);
	            }

	            this._treeCallbacks.triggerCallbacks("Session Tree: Object Disposed");
	        }
	    };


	    /**
	     * This function computes the diff of two session states.
	     * @method computeDiff
	     * @param {Object} oldState The source session state.
	     * @param {Object} newState The destination session state.
	     * @return {Object} A patch that generates the destination session state when applied to the source session state, or undefined if the two states are equivalent.
	     * see {{#crossLink "SessionManager/combineDiff:method"}}{{/crossLink}}
	     */
	    p.computeDiff = function (oldState, newState) {
	        var type = typeof (oldState); // the type of null is 'object'
	        var diffValue;

	        // special case if types differ
	        if (typeof (newState) !== type)
	            return newState;


	        if (type === 'number') {
	            if (isNaN(oldState) && isNaN(newState))
	                return undefined; // no diff

	            if (oldState !== newState)
	                return newState;

	            return undefined; // no diff
	        } else if (oldState === null || oldState === undefined || newState === null || newState === undefined || type !== 'object') // other primitive value
	        {
	            if (oldState !== newState) // no type-casting
	                return newState;

	            return undefined; // no diff
	        } else if (oldState.constructor === Array && newState.constructor === Array) {
	            // If neither is a dynamic state array, don't compare them as such.
	            if (!weavecore.DynamicState.isDynamicStateArray(oldState) && !weavecore.DynamicState.isDynamicStateArray(newState)) {
	                if (weavecore.StandardLib.compare(oldState, newState) === 0)
	                    return undefined; // no diff
	                return newState;
	            }

	            // create an array of new DynamicState objects for all new names followed by missing old names
	            var i;
	            var typedState;
	            var changeDetected = false;

	            // create oldLookup
	            var oldLookup = {};
	            var objectName;
	            var className;
	            var sessionState;
	            for (i = 0; i < oldState.length; i++) {
	                // assume everthing is typed session state
	                //note: there is no error checking here for typedState
	                typedState = oldState[i];
	                objectName = typedState[weavecore.DynamicState.OBJECT_NAME];
	                // use '' instead of null to avoid "null"
	                oldLookup[objectName || ''] = typedState;
	            }
	            if (oldState.length !== newState.length)
	                changeDetected = true;

	            // create new Array with new DynamicState objects
	            var result = [];
	            for (i = 0; i < newState.length; i++) {
	                // assume everthing is typed session state
	                //note: there is no error checking here for typedState
	                typedState = newState[i];
	                objectName = typedState[weavecore.DynamicState.OBJECT_NAME];
	                className = typedState[weavecore.DynamicState.CLASS_NAME];
	                sessionState = typedState[weavecore.DynamicState.SESSION_STATE];
	                var oldTypedState = oldLookup[objectName || ''];
	                delete oldLookup[objectName || '']; // remove it from the lookup because it's already been handled

	                // If the object specified in newState does not exist in oldState, we don't need to do anything further.
	                // If the class is the same as before, then we can save a diff instead of the entire session state.
	                // If the class changed, we can't save only a diff -- we need to keep the entire session state.
	                // Replace the sessionState in the new DynamicState object with the diff.
	                if (oldTypedState !== undefined && oldTypedState[weavecore.DynamicState.CLASS_NAME] === className) {
	                    className = null; // no change
	                    diffValue = this.computeDiff(oldTypedState[weavecore.DynamicState.SESSION_STATE], sessionState);
	                    if (diffValue === undefined) {
	                        // Since the class name is the same and the session state is the same,
	                        // we only need to specify that this name is still present.
	                        result.push(objectName);

	                        if (!changeDetected && oldState[i][weavecore.DynamicState.OBJECT_NAME] != objectName)
	                            changeDetected = true;

	                        continue;
	                    }
	                    sessionState = diffValue;
	                }

	                // save in new array and remove from lookup
	                result.push(weavecore.DynamicState.create(objectName || null, className, sessionState)); // convert empty string to null
	                changeDetected = true;
	            }

	            // Anything remaining in the lookup does not appear in newState.
	            // Add DynamicState entries with an invalid className ("delete") to convey that each of these objects should be removed.
	            for (objectName in oldLookup) {
	                result.push(weavecore.DynamicState.create(objectName || null, SessionManager.DIFF_DELETE)); // convert empty string to null
	                changeDetected = true;
	            }

	            if (changeDetected)
	                return result;

	            return undefined; // no diff
	        } else // nested object
	        {
	            var diff; // start with no diff

	            // find old properties that changed value
	            for (var oldName in oldState) {
	                diffValue = computeDiff(oldState[oldName], newState[oldName]);
	                if (diffValue !== undefined) {
	                    if (!diff)
	                        diff = {};
	                    diff[oldName] = diffValue;
	                }
	            }

	            // find new properties
	            for (var newName in newState) {
	                if (oldState[newName] === undefined) {
	                    if (!diff)
	                        diff = {};
	                    diff[newName] = newState[newName]; // TODO: same object pointer.. potential problem?
	                }
	            }

	            return diff;
	        }
	    };

	    /**
	     * This modifies an existing diff to include an additional diff.
	     * @method combineDiff
	     * @param {Object} baseDiff The base diff which will be modified to include an additional diff.
	     * @param {Object} diffToAdd The diff to add to the base diff.  This diff will not be modified.
	     * @return {Object} The modified baseDiff, or a new diff object if baseDiff is a primitive value.
	     * see {{#crossLink "SessionManager/computeDiff:method"}}{{/crossLink}}
	     */
	    p.combineDiff = function (baseDiff, diffToAdd) {
	        var baseType = typeof (baseDiff); // the type of null is 'object'
	        var diffType = typeof (diffToAdd);

	        // special cases
	        if (baseDiff === null || baseDiff === undefined || diffToAdd === null || diffToAdd === undefined || baseType !== diffType || baseType !== 'object') {
	            if (diffType === 'object') // not a primitive, so make a copy
	                baseDiff = Object.getPrototypeOf(Object.create(diffToAdd)).slice(0); //TODO: find better solution for array copy(currently Shallow copy)
	            else
	                baseDiff = diffToAdd;
	        } else if (Array.isArray(baseDiff) && Array.isArray(diffToAdd)) {
	            var i;

	            // If either of the arrays look like DynamicState arrays, treat as such
	            if (weavecore.DynamicState.isDynamicStateArray(baseDiff) || weavecore.DynamicState.isDynamicStateArray(diffToAdd)) {
	                var typedState;
	                var objectName;

	                // create lookup: objectName -> old diff entry
	                // temporarily turn baseDiff into an Array of object names
	                var baseLookup = {};
	                for (i = 0; i < baseDiff.length; i++) {
	                    typedState = baseDiff[i];
	                    // note: no error checking for typedState
	                    if (typeof typedState === 'string' || typedState instanceof String || typedState === null || typedState === undefined)
	                        objectName = typedState;
	                    else
	                        objectName = typedState[weavecore.DynamicState.OBJECT_NAME];
	                    baseLookup[objectName] = typedState;
	                    // temporarily turn baseDiff into an Array of object names
	                    baseDiff[i] = objectName;
	                }
	                // apply each typedState diff appearing in diffToAdd
	                for (i = 0; i < diffToAdd.length; i++) {
	                    typedState = diffToAdd[i];
	                    // note: no error checking for typedState
	                    if (typeof typedState === 'string' || typedState instanceof String || typedState === null || typedState === undefined)
	                        objectName = typedState;
	                    else
	                        objectName = typedState[weavecore.DynamicState.OBJECT_NAME];

	                    // adjust names list so this name appears at the end
	                    if (baseLookup.hasOwnProperty(objectName)) {
	                        for (var j = baseDiff.indexOf(objectName); j < baseDiff.length - 1; j++)
	                            baseDiff[j] = baseDiff[j + 1];
	                        baseDiff[baseDiff.length - 1] = objectName;
	                    } else {
	                        baseDiff.push(objectName);
	                    }

	                    // apply diff
	                    var oldTypedState = baseLookup[objectName];
	                    if (typeof oldTypedState === 'string' || oldTypedState instanceof String || oldTypedState === null || oldTypedState === undefined) {
	                        if (typeof typedState === 'string' || typedState instanceof String || typedState === null || typedState === undefined)
	                            baseLookup[objectName] = typedState; // avoid unnecessary function call overhead
	                        else
	                            baseLookup[objectName] = Object.getPrototypeOf(Object.create(typedState)).slice(0); //TODO: Temp solution for Array Copy
	                    } else if (!(typeof typedState === 'string' || typedState instanceof String || typedState === null || typedState === undefined)) // update dynamic state
	                    {
	                        var className = typedState[weavecore.DynamicState.CLASS_NAME];
	                        // if new className is different and not null, start with a fresh typedState diff
	                        if (className && className != oldTypedState[weavecore.DynamicState.CLASS_NAME]) {
	                            baseLookup[objectName] = Object.getPrototypeOf(Object.create(typedState)).slice(0); //TODO: Temp solution for Array Copy
	                        } else // className hasn't changed, so combine the diffs
	                        {
	                            oldTypedState[weavecore.DynamicState.SESSION_STATE] = this.combineDiff(oldTypedState[weavecore.DynamicState.SESSION_STATE], typedState[weavecore.DynamicState.SESSION_STATE]);
	                        }
	                    }
	                }
	                // change baseDiff back from names to typed states
	                for (i = 0; i < baseDiff.length; i++)
	                    baseDiff[i] = baseLookup[baseDiff[i]];
	            } else // not typed session state
	            {
	                // overwrite old Array with new Array's values
	                i = baseDiff.length = diffToAdd.length;
	                while (i--) {
	                    var value = diffToAdd[i];
	                    if (value === null || value === undefined || typeof value !== 'object')
	                        baseDiff[i] = value; // avoid function call overhead
	                    else
	                        baseDiff[i] = this.combineDiff(baseDiff[i], value);
	                }
	            }
	        } else // nested object
	        {
	            for (var newName in diffToAdd)
	                baseDiff[newName] = this.combineDiff(baseDiff[newName], diffToAdd[newName]);
	        }

	        return baseDiff;
	    };

	    /**
	     * @public
	     * @property  DIFF_DELETE
	     * @static
	     * @readOnly
	     * @type String
	     * @default "delete"
	     */
	    Object.defineProperty(SessionManager, 'DIFF_DELETE', {
	        value: "delete"
	    });

	    weavecore.SessionManager = SessionManager;

	}());
	/*
	    Weave (Web-based Analysis and Visualization Environment)
	    Copyright (C) 2008-2011 University of Massachusetts Lowell

	    This file is a part of Weave.

	    Weave is free software: you can redistribute it and/or modify
	    it under the terms of the GNU General Public License, Version 3,
	    as published by the Free Software Foundation.

	    Weave is distributed in the hope that it will be useful,
	    but WITHOUT ANY WARRANTY; without even the implied warranty of
	    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	    GNU General Public License for more details.

	    You should have received a copy of the GNU General Public License
	    along with Weave.  If not, see <http://www.gnu.org/licenses/>.
	*/


	if (typeof window === 'undefined') {
	    this.weavecore = this.weavecore || {};
	} else {
	    window.weavecore = window.weavecore || {};
	}

	/**
	 * Facilitates the creation of dynamic trees.
	 */
	(function () {


	    //----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----

	    /**
	     * Constructs a new WeaveTreeItem.
	     * @param params An Object containing property values to set on the WeaveTreeItem.
	     *               If params is a String, both <code>label</code> and <code>data</code> will be set to that String.
	     */

	    function WeaveTreeItem(params) {
	        //set default values
	        if (params === undefined) params = null;
	        /**
	         * Set this to change the constructor used for initializing child items.
	         * This variable is intentionally uninitialized to avoid overwriting the value set by an extending class in its constructor.
	         */
	        this.childItemClass; // IMPORTANT - no initial value
	        this._recursion = {}; // recursionName -> Boolean
	        this._label = "";
	        this._children = null;
	        this._source = null;
	        /**
	         * Cached values that get invalidated when the source triggers callbacks.
	         */
	        this._cache = {};

	        /**
	         * Cached values of getCallbackCollection(source).triggerCounter.
	         */
	        this._counter = {};


	        //----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----

	        /**
	         * This can be set to either a String or a Function.
	         * This property is checked by Flex's default data descriptor.
	         * If this property is not set, the <code>data</code> property will be used as the label.
	         */
	        Object.defineProperty(this, 'label', {
	            get: function () {
	                const id = 'label';
	                if (this.isCached(id))
	                    return this._cache[id];

	                var str = this.getString(this._label, id);
	                if (!str && this.data !== null && this.data !== undefined)
	                    str = String(this.data);
	                return this.cache(id, str);
	            },
	            set: function (value) {
	                this._counter['label'] = undefined;
	                this._label = value;
	            }
	        });




	        Object.defineProperty(this, 'children', {
	            /**
	             * Gets a filtered copy of the child menu items.
	             * When this property is accessed, refresh() will be called except if refresh() is already being called.
	             * This property is checked by Flex's default data descriptor.
	             */
	            get: function () {
	                const id = 'children';
	                if (this.isCached(id))
	                    return this._cache[id];

	                var items = this.getObject(this._children, id);
	                if (!items)
	                    return this.cache(id, null);

	                var result = items.map(WeaveTreeItem._mapItems.bind(this), this.childItemClass).filter(WeaveTreeItem._filterItems.bind(this));
	                return this.cache(id, result);
	            },
	            /**
	             * This can be set to either an Array or a Function that returns an Array.
	             * The function can be like function():void or function(item:WeaveTreeItem):void.
	             * The Array can contain either WeaveTreeItems or Objects, each of which will be passed to the WeaveTreeItem constructor.
	             */
	            set: function (value) {
	                this._counter['children'] = undefined;
	                this._children = value;
	            }
	        });


	        /**
	         * A pointer to the ILinkableObject that created this node.
	         * This is used to determine when to invalidate cached values.
	         */
	        Object.defineProperty(this, 'source', {
	            get: function () {
	                if (this._source && WeaveAPI.SessionManager.objectWasDisposed(this._source)) {
	                    this.source = null;
	                }
	                return this._source;
	            },
	            set: function (value) {
	                if (this._source != value)
	                    this._counter = {};
	                this._source = value;
	            }
	        });

	        /**
	         * This can be any data associated with this tree item.
	         */
	        this.data = null;

	        if (typeof (params) === 'string') {
	            this.label = params;
	            this.data = params;
	        } else
	            for (var key in params)
	                this[key] = params[key];
	    }






	    //----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----
	    var p = WeaveTreeItem.prototype;
	    /**
	     * Computes a Boolean value from various structures
	     * @param param Either a Boolean, and Object like {not: param}, a Function, an ILinkableVariable, or an Array of those objects.
	     * @param recursionName A name used to keep track of recursion.
	     * @return A Boolean value derived from the param, or the param itself if called recursively.
	     */
	    p.getBoolean = function (param, recursionName) {
	        if (!this._recursion[recursionName]) {
	            try {
	                this._recursion[recursionName] = true;

	                if (this.isSimpleObject(param, 'not'))
	                    param = !this.getBoolean(param['not'], "not_" + recursionName);
	                if (this.isSimpleObject(param, 'or'))
	                    param = this.getBoolean(param['or'], "or_" + recursionName);
	                if (typeof (param) === "function")
	                    param = this.evalFunction(param);
	                if (param instanceof weavecore.LinkableVariable)
	                    param = param.getSessionState();
	                if (param instanceof Array) {
	                    var breakValue = recursionName.indexOf("or_") === 0;
	                    for (var param in param) {
	                        param = this.getBoolean(param, "item_" + recursionName);
	                        if (param ? breakValue : !breakValue)
	                            break;
	                    }
	                }
	                param = param ? true : false;
	            } finally {
	                this._recursion[recursionName] = false;
	            }
	        }
	        return param;
	    };

	    /**
	     * Checks if an object has a single specified property.
	     */
	    p.isSimpleObject = function (object, singlePropertyName) {
	        if (!(object instanceof Object) || object.constructor !== Object)
	            return false;

	        var found = false;
	        for (var key in object) {
	            if (found)
	                return false; // two or more properties

	            if (key !== singlePropertyName)
	                return false; // not the desired property

	            found = true; // found the desired property
	        }
	        return found;
	    };

	    /**
	     * Gets a String value from a String or Function.
	     * @param param Either a String or a Function.
	     * @param recursionName A name used to keep track of recursion.
	     * @return A String value derived from the param, or the param itself if called recursively.
	     */
	    p.getString = function (param, recursionName) {
	        if (!this._recursion[recursionName]) {
	            try {
	                this._recursion[recursionName] = true;

	                if (typeof (param) === "function")
	                    param = this.evalFunction(param);
	                else
	                    param = param || '';
	            } finally {
	                this._recursion[recursionName] = false;
	            }
	        }
	        return param;
	    };

	    /**
	     * Evaluates a function to get an Object or just returns the non-Function Object passed in.
	     * @param param Either an Object or a Function.
	     * @param recursionName A name used to keep track of recursion.
	     * @return An Object derived from the param, or the param itself if called recursively.
	     */
	    p.getObject = function (param, recursionName) {
	        if (!this._recursion[recursionName]) {
	            try {
	                this._recursion[recursionName] = true;

	                if (typeof (param) === "function")
	                    param = this.evalFunction(param);
	            } finally {
	                this._recursion[recursionName] = false;
	            }
	        }
	        return param;
	    };

	    /**
	     * First tries calling a function with no parameters.
	     * If an ArgumentError is thrown, the function will called again, passing this WeaveTreeItem as the first parameter.
	     */
	    p.evalFunction = function (func) {
	        try {
	            // first try calling the function with no parameters
	            return func.call(this);
	        } catch (e) {
	            console.log(e);
	            /*if (!(e is ArgumentError))
					{
						if (e is Error)
							trace((e as Error).getStackTrace());
						throw e;
					}*/
	        }

	        // on ArgumentError, pass in this WeaveTreeItem as the first parameter
	        return func.call(this, this);
	    };

	    //----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----

	    /**
	     * Checks if cached value is valid.
	     * Always returns false if the source property is not set.
	     * @param id A string identifying a property.
	     * @return true if the property value has been cached.
	     */
	    p.isCached = function (id) {
	        if (this._source && WeaveAPI.SessionManager.objectWasDisposed(this._source))
	            source = null;
	        return this._source && this._counter[id] === WeaveAPI.SessionManager.getCallbackCollection(this._source).triggerCounter;
	    };

	    /**
	     * Retrieves or updates a cached value for a property.
	     * Does not cache the value if the source property is not set.
	     * @param id A string identifying a property.
	     * @param newValue Optional new value to cache for the property.
	     * @return The new or existing value for the property.
	     */
	    p.cache = function (id, newValue) {
	        if (arguments.length === 1)
	            return this._cache[id];

	        if (this._source && WeaveAPI.SessionManager.objectWasDisposed(this._source))
	            source = null;
	        if (this._source) {
	            this._counter[id] = WeaveAPI.SessionManager.getCallbackCollection(this._source).triggerCounter;
	            this._cache[id] = newValue;
	        }
	        return newValue;
	    };


	    /**
	     * Initializes an Array of WeaveTreeItems using an Array of objects to pass to the constructor.
	     * Any Arrays passed in will be flattened.
	     * @param WeaveTreeItem_implementation The implementation of WeaveTreeItem to use.
	     * @param items Item descriptors.
	     */
	    WeaveTreeItem.createItems = function (WeaveTreeItem_implementation, items) {
	        // flatten
	        var n = 0;
	        while (n !== items.length) {
	            n = items.length;
	            items = [].concat.apply(null, items);
	        }

	        return items.map(_mapItems, WeaveTreeItem_implementation).filter(_filterItems);
	    };

	    /**
	     * Used for mapping an Array of params objects to an Array of WeaveTreeItem objects.
	     * The "this" argument is used to specify a particular WeaveTreeItem implementation.
	     */
	    WeaveTreeItem._mapItems = function (item, i, a) {
	        // If the item is a Class definition, create an instance of that Class.
	        if (typeof (item) === 'function')
	            return new item();

	        // If the item is a String or an Object, we can pass it to the constructor.
	        if (typeof (item) === 'string' || (item !== null && item !== undefined && item.constructor.name === "Object")) {
	            var ItemClass = WeaveTreeItem;
	            return new ItemClass(item);
	        }

	        // If the item is any other type, return the original item.
	        return item;
	    };

	    /**
	     * Filters out null items.
	     */
	    WeaveTreeItem._filterItems = function (item, i, a) {
	        return item !== null || item !== undefined;
	    };



	    weavecore.WeaveTreeItem = WeaveTreeItem;

	}());
	/*
	    Weave (Web-based Analysis and Visualization Environment)
	    Copyright (C) 2008-2011 University of Massachusetts Lowell

	    This file is a part of Weave.

	    Weave is free software: you can redistribute it and/or modify
	    it under the terms of the GNU General Public License, Version 3,
	    as published by the Free Software Foundation.

	    Weave is distributed in the hope that it will be useful,
	    but WITHOUT ANY WARRANTY; without even the implied warranty of
	    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	    GNU General Public License for more details.

	    You should have received a copy of the GNU General Public License
	    along with Weave.  If not, see <http://www.gnu.org/licenses/>.
	*/

	if (typeof window === 'undefined') {
	    this.weavecore = this.weavecore || {};
	} else {
	    window.weavecore = window.weavecore || {};
	}

	/**
	 * This is a wrapper for a 2-dimensional Dictionary.
	 *
	 * @author adufilie
	 * @author sanjay1909
	 */

	(function () {
	    function Dictionary2D() {
	        this.dictionary = new Map();
	    }

	    var p = Dictionary2D.prototype;

	    /**
	     *
	     * @param key1 The first dictionary key.
	     * @param key2 The second dictionary key.
	     * @return The value in the dictionary.
	     */
	    p.get = function (key1, key2) {
	        var d2 = this.dictionary.get(key1);
	        return d2 ? d2.get(key2) : undefined;
	    };

	    /**
	     * This will add or replace an entry in the dictionary.
	     * @param key1 The first dictionary key.
	     * @param key2 The second dictionary key.
	     * @param value The value to put into the dictionary.
	     */
	    p.set = function (key1, key2, value) {
	        var d2 = this.dictionary.get(key1);
	        if (d2 === null || d2 === undefined)
	            d2 = new Map();
	        this.dictionary.set(key1, d2);
	        d2.set(key2, value);
	    };

	    /**
	     * This removes all values associated with the given primary key.
	     * @param key1 The first dictionary key.
	     */
	    p.removeAllPrimary = function (key1) {
	        this.dictionary.delete(key1);
	    };

	    /**
	     * This removes all values associated with the given secondary key.
	     * @param key2 The second dictionary key.
	     */
	    p.removeAllSecondary = function (key2) {
	        for (var key1 of this.dictionary.keys()) {
	            this.dictionary.get(key1).delete(key2);
	        }

	    };

	    /**
	     * This removes a value associated with the given primary and secondary keys.
	     * @param key1 The first dictionary key.
	     * @param key2 The second dictionary key.
	     * @return The value that was in the dictionary.
	     */
	    p.remove = function (key1, key2) {
	        var value;
	        var d2 = this.dictionary.get(key1);
	        if (d2) {
	            value = d2.get(key2);
	            d2.delete(key2);
	        }

	        // if entries remain in d2, keep it
	        for (var v2 of d2.values())
	            return value;

	        // otherwise, remove it
	        this.dictionary.delete(key1);

	        return value;
	    };

	    weavecore.Dictionary2D = Dictionary2D;
	}());
	if (typeof window === 'undefined') {
	    this.weavecore = this.weavecore || {};
	} else {
	    window.weavecore = window.weavecore || {};
	}
	/**
	 * LinkableVariable allows callbacks to be added that will be called when the value changes.
	 * A LinkableVariable has an optional type restriction on the values it holds.
	 *
	 * @author adufilie
	 * @author sanjay1909
	 */

	(function () {
	    /**
	     * If a defaultValue is specified, callbacks will be triggered in a later frame unless they have already been triggered before then.
	     * This behavior is desirable because it allows the initial value to be handled by the same callbacks that handles new values.
	     * @param sessionStateType The type of values accepted for this sessioned property.
	     * @param verifier A function that returns true or false to verify that a value is accepted as a session state or not.  The function signature should be  function(value:*):Boolean.
	     * @param defaultValue The default value for the session state.
	     * @param defaultValueTriggersCallbacks Set this to false if you do not want the callbacks to be triggered one frame later after setting the default value.
	     */

	    function LinkableVariable(sessionStateType, verifier, defaultValue, defaultValueTriggersCallbacks) {
	        if (sessionStateType === undefined) sessionStateType = null;
	        if (verifier === undefined) verifier = null;
	        if (defaultValueTriggersCallbacks === undefined) defaultValueTriggersCallbacks = true;

	        weavecore.CallbackCollection.call(this);

	        /**
	         * This function is used to prevent the session state from having unwanted values.
	         * Function signature should be  function(value:*):Boolean
	         * @private
	         * @property _verifier
	         * @type function
	         */
	        this._verifier = verifier;

	        /**
	         * This is true if the session state has been set at least once.
	         */
	        this._sessionStateWasSet = false;

	        /**
	         * This is true if the _sessionStateType is a primitive type.
	         */
	        this._primitiveType = false;

	        /**
	         * Type restriction passed in to the constructor.
	         */
	        this._sessionStateType = null;

	        /**
	         * Cannot be modified externally because it is not returned by getSessionState()
	         */
	        this._sessionStateInternal = undefined;

	        /**
	         * Available externally via getSessionState()
	         */
	        this._sessionStateExternal = undefined;

	        this._locked = false;

	        Object.defineProperty(this, 'locked', {
	            get: function () {
	                return this._locked;
	            }
	        });

	        if (sessionStateType !== Object) {
	            this._sessionStateType = sessionStateType;
	            this._primitiveType = this._sessionStateType === "string" || this._sessionStateType === "number" || this._sessionStateType === "boolean";
	        }
	        if (defaultValue !== undefined) {
	            this.setSessionState(defaultValue);

	            // If callbacks were triggered, make sure callbacks are triggered again one frame later when
	            // it is possible for other classes to have a pointer to this object and retrieve the value.
	            if (defaultValueTriggersCallbacks && this._triggerCounter > weavecore.CallbackCollection.DEFAULT_TRIGGER_COUNT)
	                weavecore.StageUtils.callLater(this, _defaultValueTrigger.bind(this));
	        }
	    }

	    function _defaultValueTrigger() {
	        // unless callbacks were triggered again since the default value was set, trigger callbacks now
	        if (!this._wasDisposed && this._triggerCounter === weavecore.CallbackCollection.DEFAULT_TRIGGER_COUNT + 1)
	            this.triggerCallbacks();

	    }

	    /**
	     * This function will verify if a given value is a valid session state for this linkable variable.
	     * @param value The value to verify.
	     * @return A value of true if the value is accepted by this linkable variable.
	     */
	    function verifyValue(value) {
	        return this._verifier === null || this._verifier === undefined || this._verifier(value);
	    }

	    LinkableVariable.prototype = new weavecore.CallbackCollection();
	    LinkableVariable.prototype.constructor = LinkableVariable;

	    var p = LinkableVariable.prototype;

	    /**
	     * The type restriction passed in to the constructor.
	     */
	    p.getSessionStateType = function () {
	        return this._sessionStateType;
	    };

	    p.getSessionState = function () {
	        return this._sessionStateExternal;
	    };

	    p.setSessionState = function (value) {
	        if (this._locked)
	            return;

	        // cast value now in case it is not the appropriate type
	        if (this._sessionStateType !== null && this._sessionStateType !== undefined)
	            value = value;

	        // stop if verifier says it's not an accepted value
	        if (this._verifier !== null && this._verifier !== undefined && !this._verifier(value))
	            return;

	        var wasCopied = false;
	        var type = null;
	        if (value !== null && value !== undefined) {
	            type = typeof (value);

	            if (type === 'object' && value.constructor !== Object && value.constructor !== Array) {
	                // convert to dynamic Object prior to sessionStateEquals comparison
	                value = Object.create(value);
	                wasCopied = true;
	            }
	        }

	        // If this is the first time we are calling setSessionState(), including
	        // from the constructor, don't bother checking sessionStateEquals().
	        // Otherwise, stop if the value did not change.
	        if (this._sessionStateWasSet && this.sessionStateEquals(value))
	            return;

	        // If the value is a dynamic object, save a copy because we don't want
	        // two LinkableVariables to share the same object as their session state.
	        if (type === 'object') {
	            if (!wasCopied) {
	                if (value.constructor === Array) //TODO:Temp solution for array copy - its a shallow copy now
	                    value = Object.getPrototypeOf(Object.create(value)).slice(0);
	                else
	                    value = Object.create(value);
	            }


	            // save external copy, accessible via getSessionState()
	            this._sessionStateExternal = value;

	            // save internal copy
	            if (value.constructor === Array) // TODO:Temp solution for array copy - its a shallow copy now
	                this._sessionStateInternal = Object.getPrototypeOf(Object.create(value)).slice(0);
	            else
	                this._sessionStateInternal = Object.create(value);

	        } else {
	            // save primitive value
	            this._sessionStateExternal = this._sessionStateInternal = value;
	        }

	        // remember that we have set the session state at least once.
	        this._sessionStateWasSet = true;

	        this.triggerCallbacks();
	    };

	    /**
	     * This function is used in setSessionState() to determine if the value has changed or not.
	     * object that prototype this object may override this function.
	     */
	    p.sessionStateEquals = function (otherSessionState) {
	        if (this._primitiveType)
	            return this._sessionStateInternal === otherSessionState;

	        return weavecore.StandardLib.compare(this._sessionStateInternal, otherSessionState) === 0;
	    };


	    /**
	     * This function may be called to detect change to a non-primitive session state in case it has been modified externally.
	     */
	    p.detectChanges = function () {
	        if (!this.sessionStateEquals(this._sessionStateExternal))
	            this.triggerCallbacks();
	    };

	    p.lock = function () {
	        this._locked = true;
	    };





	    p.dispose = function () {
	        weavecore.CallbackCollection.prototype.dispose.call(this);
	        this.setSessionState(null);
	    };

	    weavecore.LinkableVariable = LinkableVariable;

	}());
	if (typeof window === 'undefined') {
	    this.weavecore = this.weavecore || {};
	} else {
	    window.weavecore = window.weavecore || {};
	}

	/**
	 * This is a LinkableVariable which limits its session state to Number values.
	 * @author adufilie
	 * @author sanjay1909
	 */
	(function () {
	    function LinkableNumber(defaultValue, verifier, defaultValueTriggersCallbacks) {
	        // set default values for Parameters
	        if (defaultValue === undefined) defaultValue = NaN;
	        if (verifier === undefined) verifier = null;
	        if (defaultValueTriggersCallbacks === undefined) defaultValueTriggersCallbacks = true;

	        // Note: Calling  weavecore.LinkableVariable.call() will set all the default values for member variables defined in the super class,
	        // which means we can't set _sessionStateInternal = NaN here.
	        weavecore.LinkableVariable.call(this, "number", verifier, arguments.length ? defaultValue : undefined, defaultValueTriggersCallbacks);

	        Object.defineProperty(this, 'value', {
	            get: function () {
	                return this._sessionStateExternal;
	            },
	            set: function (val) {
	                this.setSessionState(val);
	            }
	        });
	    }

	    LinkableNumber.prototype = new weavecore.LinkableVariable();
	    LinkableNumber.prototype.constructor = LinkableNumber;

	    var p = LinkableNumber.prototype;


	    p.setSessionState = function (val) {
	        if (typeof (val) != "number") {
	            if (val === null || val === '' || val === undefined) val = NaN;
	            else val = Number(val);
	        }
	        weavecore.LinkableVariable.prototype.setSessionState.call(this, val);
	    };

	    p.sessionStateEquals = function (otherSessionState) {
	        // We must check for null here because we can't set _sessionStateInternal = NaN in the constructor.
	        if (this._sessionStateInternal === null || this._sessionStateInternal === undefined)
	            this._sessionStateInternal = this._sessionStateExternal = NaN;
	        if (isNaN(this._sessionStateInternal) && isNaN(otherSessionState))
	            return true;
	        return this._sessionStateInternal === otherSessionState;
	    };

	    weavecore.LinkableNumber = LinkableNumber;

	}());
	if (typeof window === 'undefined') {
	    this.weavecore = this.weavecore || {};
	} else {
	    window.weavecore = window.weavecore || {};
	}

	/**
	 * This is a LinkableVariable which limits its session state to Boolean values.
	 * @author adufilie
	 * @author sanjay1909
	 */
	(function () {
	    function LinkableBoolean(defaultValue, verifier, defaultValueTriggersCallbacks) {
	        // set default values for Parameters
	        if (verifier === undefined) verifier = null;
	        if (defaultValueTriggersCallbacks === undefined) defaultValueTriggersCallbacks = true;

	        weavecore.LinkableVariable.call(this, "boolean", verifier, defaultValue, defaultValueTriggersCallbacks);

	        Object.defineProperty(this, 'value', {
	            get: function () {
	                return this._sessionStateExternal;
	            },
	            set: function (val) {
	                this.setSessionState(val);
	            }
	        });
	    }

	    LinkableBoolean.prototype = new weavecore.LinkableVariable();
	    LinkableBoolean.prototype.constructor = LinkableBoolean;

	    var p = LinkableBoolean.prototype;


	    p.setSessionState = function (val) {
	        if (typeof (val) === "string") {
	            val = weavecore.ObjectUtil.stringCompare(val, "true", true) === 0;
	        }
	        weavecore.LinkableVariable.prototype.setSessionState.call(this, val ? true : false);
	    };

	    weavecore.LinkableBoolean = LinkableBoolean;

	}());
	if (typeof window === 'undefined') {
	    this.weavecore = this.weavecore || {};
	} else {
	    window.weavecore = window.weavecore || {};
	}

	/**
	 * This is a LinkableVariable which limits its session state to string values.
	 * @author adufilie
	 * @author sanjay1909
	 */
	(function () {
	    function LinkableString(defaultValue, verifier, defaultValueTriggersCallbacks) {
	        // set default values for Parameters

	        if (defaultValue === undefined) defaultValue = null;
	        if (verifier === undefined) verifier = null;
	        if (defaultValueTriggersCallbacks === undefined) defaultValueTriggersCallbacks = true;


	        weavecore.LinkableVariable.call(this, "string", verifier, arguments.length ? defaultValue : undefined, defaultValueTriggersCallbacks);

	        Object.defineProperty(this, 'value', {
	            get: function () {
	                return this._sessionStateExternal;
	            },
	            set: function (val) {
	                this.setSessionState(val);
	            }
	        });
	    }

	    LinkableString.prototype = new weavecore.LinkableVariable();
	    LinkableString.prototype.constructor = LinkableString;

	    var p = LinkableString.prototype;

	    p.setSessionState = function (val) {
	        if (val !== null)
	            val = String(val);
	        weavecore.LinkableVariable.prototype.setSessionState.call(this, val);
	    };

	    weavecore.LinkableString = LinkableString;

	}());
	/**
	 * @module weavecore
	 */

	//namesapce
	if (typeof window === 'undefined') {
	    this.weavecore = this.weavecore || {};
	} else {
	    window.weavecore = window.weavecore || {};
	}

	(function () {
	    "use strict";

	    // constructor:
	    /**
	     * Private Class for use with {{#crossLink "LinkableHashMap"}}{{/crossLink}}
	     * @class ChildListCallbackInterface
	     * @extends CallbackCollection
	     * @private
	     * @constructor
	     */
	    function ChildListCallbackInterface() {

	        // specify the preCallback function in super() so list callback
	        // variables will be set before each change callback.
	        weavecore.CallbackCollection.call(this, this._setCallbackVariables);
	        /**
	         * returned by public getter
	         * @private
	         * @property _lastNameAdded
	         * @default null
	         * @type String
	         **/
	        this._lastNameAdded = null;
	        /**
	         * returned by public getter
	         * @private
	         * @property _lastObjectAdded
	         * @default null
	         * @type ILinkableObject
	         **/
	        this._lastObjectAdded = null;
	        /**
	         * returned by public getter
	         * @private
	         * @property _lastNameRemoved
	         * @default null
	         * @type String
	         **/
	        this._lastNameRemoved = null;
	        /**
	         * returned by public getter
	         * @private
	         * @property _lastObjectRemoved
	         * @default null
	         * @type ILinkableObject
	         **/
	        this._lastObjectRemoved = null;

	        /**
	         * This is the name of the object that was added prior to running callbacks.
	         * @public
	         * @property lastNameAdded
	         * @readOnly
	         * @type String
	         */
	        Object.defineProperty(this, 'lastNameAdded', {
	            get: function () {
	                return this._lastNameAdded;
	            }
	        });

	        /**
	         * This is the object that was added prior to running callbacks.
	         * @public
	         * @property lastObjectAdded
	         * @readOnly
	         * @type ILinkableObject
	         */
	        Object.defineProperty(this, 'lastObjectAdded', {
	            get: function () {
	                return this._lastObjectAdded;
	            }
	        });

	        /**
	         * This is the name of the object that was removed prior to running callbacks.
	         * @public
	         * @property lastNameRemoved
	         * @readOnly
	         * @type String
	         */
	        Object.defineProperty(this, 'lastNameRemoved', {
	            get: function () {
	                return this._lastNameRemoved;
	            }
	        });

	        /**
	         * This is the object that was removed prior to running callbacks.
	         * @public
	         * @property lastObjectRemoved
	         * @readOnly
	         * @type ILinkableObject
	         */
	        Object.defineProperty(this, 'lastObjectRemoved', {
	            get: function () {
	                return this._lastObjectRemoved;
	            }
	        });

	    }

	    ChildListCallbackInterface.prototype = new weavecore.CallbackCollection();
	    ChildListCallbackInterface.prototype.constructor = ChildListCallbackInterface;

	    var p = ChildListCallbackInterface.prototype;
	    /**
	     * This function will set the list callback variables:
	     *     lastNameAdded, lastObjectAdded, lastNameRemoved, lastObjectRemoved, childListChanged
	     * @method _setCallbackVariables
	     * @private
	     * @param {String} name This is the name of the object that was just added or removed from the hash map.
	     * @param {ILinkableObject} objectAdded This is the object that was just added to the hash map.
	     * @param {ILinkableObject} objectRemoved This is the object that was just removed from the hash map.
	     */
	    p._setCallbackVariables = function (name, objectAdded, objectRemoved) {
	        this._lastNameAdded = objectAdded ? name : null;
	        this._lastObjectAdded = objectAdded;
	        this._lastNameRemoved = objectRemoved ? name : null;
	        this._lastObjectRemoved = objectRemoved;
	    };

	    /**
	     * This function will run callbacks immediately, setting the list callback variables before each one.
	     * @method runCallbacks
	     * @param {String} name
	     * @param {ILinkableObject} objectAdded
	     * @param {ILinkableObject} objectRemoved
	     */
	    p.runCallbacks = function (name, objectAdded, objectRemoved) {
	        // remember previous values
	        var _name = this._lastNameAdded || this._lastNameRemoved;
	        var _added = this._lastObjectAdded;
	        var _removed = this._lastObjectRemoved;

	        this._runCallbacksImmediately(name, objectAdded, objectRemoved);

	        // restore previous values (in case an external JavaScript popup caused us to interrupt something else)
	        this._setCallbackVariables.call(this, _name, _added, _removed);
	    };



	    weavecore.ChildListCallbackInterface = ChildListCallbackInterface;

	}());
	/**
	 * @module weavecore
	 */

	// namespace
	if (typeof window === 'undefined') {
	    this.weavecore = this.weavecore || {};
	} else {
	    window.weavecore = window.weavecore || {};
	}

	(function () {
	    "use strict";

	    // constructor:
	    /**
	     * This is used to dynamically attach a set of callbacks to different targets.
	     * The callbacks of the LinkableWatcher will be triggered automatically when the
	     * target triggers callbacks, changes, becomes null or is disposed.
	     * Instead of calling this constructor directly, consider using one of the {{#crossLink "SessionManager"}}{{/crossLink}} functions
	     * {{#crossLink "SessionManager/registerLinkableChild:method"}}{{/crossLink}} or  {{#crossLink "SessionManager/registerDisposableChild:method"}}{{/crossLink}} to make sure the watcher will get disposed automatically.
	     * @class LinkableWatcher
	     * @extends ILinkableObject
	     * @constructor
	     * @param {Class} typeRestriction Optionally restricts which type of targets this watcher accepts.
	     * @param {Function} immediateCallback A function to add as an immediate callback.
	     * @param {Function} groupedCallback A function to add as a grouped callback.
	     */
	    function LinkableWatcher(typeRestriction, immediateCallback, groupedCallback) {
	        if (typeRestriction === undefined) typeRestriction = null;
	        if (immediateCallback === undefined) immediateCallback = null;
	        if (groupedCallback === undefined) groupedCallback = null;

	        weavecore.ILinkableObject.call(this);

	        this._typeRestriction = typeRestriction;

	        if (immediateCallback !== null)
	            WeaveAPI.SessionManager.getCallbackCollection(this).addImmediateCallback(null, immediateCallback);

	        if (groupedCallback !== null)
	            WeaveAPI.SessionManager.getCallbackCollection(this).addGroupedCallback(null, groupedCallback);

	        this._target; // the current target or ancestor of the to-be-target
	        this._foundTarget = true; // false when _target is not the desired target
	        this._targetPath; // the path that is being watched
	        this._pathDependencies = new Map(); // Maps an ILinkableDynamicObject to its previous internalObject.

	        Object.defineProperty(this, 'targetPath', {
	            /**
	             * This is the path that is currently being watched for linkable object targets.
	             */
	            get: function () {
	                return this._targetPath ? this._targetPath.concat() : null;
	            },
	            /**
	             * This will set a path which should be watched for new targets.
	             * Callbacks will be triggered immediately if the path changes or points to a new target.
	             */
	            set: function (path) {
	                // do not allow watching the globalHashMap
	                if (path && path.length === 0)
	                    path = null;
	                if (weavecore.StandardLib.compare(this._targetPath, path) !== 0) {
	                    var cc = WeaveAPI.SessionManager.getCallbackCollection(this);
	                    cc.delayCallbacks();

	                    this._resetPathDependencies();
	                    this._targetPath = path;
	                    this._handlePath();
	                    cc.triggerCallbacks();

	                    cc.resumeCallbacks();
	                }
	            },
	            configurable: true
	        });

	        Object.defineProperty(this, 'target', {
	            /**
	             * This is the linkable object currently being watched.
	             * Setting this will unset the targetPath.
	             */
	            get: function () {
	                return this._foundTarget ? this._target : null;
	            },
	            set: function (newTarget) {
	                var cc = WeaveAPI.SessionManager.getCallbackCollection(this);
	                cc.delayCallbacks();
	                this.targetPath = null;
	                this.internalSetTarget(newTarget);
	                cc.resumeCallbacks();
	            },
	            configurable: true
	        });
	    }

	    LinkableWatcher.prototype = new weavecore.ILinkableObject();
	    LinkableWatcher.prototype.constructor = LinkableWatcher;

	    var p = LinkableWatcher.prototype;

	    /**
	     * This sets the new target to be watched without resetting targetPath.
	     * Callbacks will be triggered immediately if the new target is different from the old one.
	     */
	    p.internalSetTarget = function (newTarget) {
	        if (this._foundTarget && this._typeRestriction)
	            newTarget = newTarget;

	        // do nothing if the targets are the same.
	        if (_target === newTarget)
	            return;

	        var sm = WeaveAPI.SessionManager;

	        // unlink from old target
	        if (this._target) {
	            sm.getCallbackCollection(this._target).removeCallback(this._handleTargetTrigger);
	            sm.getCallbackCollection(this._target).removeCallback(this._handleTargetDispose);
	            // if we own the previous target, dispose it
	            if (sm.getLinkableOwner(this._target) === this)
	                sm.disposeObject(this._target);
	            else
	                sm.unregisterLinkableChild(this, this._target);
	        }

	        this._target = newTarget;

	        // link to new target
	        if (this._target) {
	            // we want to register the target as a linkable child (for busy status)
	            sm.registerLinkableChild(this, _target);
	            // we don't want the target triggering our callbacks directly
	            sm.getCallbackCollection(this._target).removeCallback(sm.getCallbackCollection(this).triggerCallbacks);
	            sm.getCallbackCollection(this._target).addImmediateCallback(this, this._handleTargetTrigger.bind(this), false, true);
	            // we need to know when the target is disposed
	            sm.getCallbackCollection(this._target).addDisposeCallback(this, this._handleTargetDispose.bind(this));
	        }

	        if (this._foundTarget)
	            this._handleTargetTrigger();
	    };


	    p._handleTargetTrigger = function () {
	        if (this._foundTarget)
	            WeaveAPI.SessionManager.getCallbackCollection(this).triggerCallbacks();
	        else
	            this._handlePath();
	    };



	    p._handleTargetDispose = function () {
	        if (this._targetPath) {
	            this._handlePath();
	        } else {
	            this._target = null;
	            WeaveAPI.SessionManager.getCallbackCollection(this).triggerCallbacks();
	        }
	    };

	    p._handlePath = function () {
	        if (!this._targetPath) {
	            this._foundTarget = true;
	            this.internalSetTarget(null);
	            return;
	        }

	        // traverse the path, finding ILinkableDynamicObject path dependencies along the way
	        var sm = WeaveAPI.SessionManager;
	        var node = WeaveAPI.globalHashMap;
	        var subPath = [];
	        for (var name of this._targetPath) {
	            if (node instanceof weavecore.LinkableDynamicObject)
	                this._addPathDependency(node);

	            subPath[0] = name;
	            var child = sm.getObject(node, subPath);
	            if (child) {
	                node = child;
	            } else {
	                // the path points to an object that doesn't exist yet
	                if (node instanceof weavecore.LinkableHashMap) {
	                    // watching childListCallbacks instead of the hash map accomplishes two things:
	                    // 1. eliminate unnecessary calls to _handlePath()
	                    // 2. avoid watching the root hash map (and registering the root as a child of the watcher)
	                    node = node.childListCallbacks;
	                }
	                this._foundTarget = false;
	                if (node instanceof weavecore.LinkableDynamicObject) {
	                    if (this._target !== null) {
	                        // path dependency code will detect changes to this node
	                        this.internalSetTarget(null);
	                        // must trigger here because _foundtarget is false
	                        sm.getCallbackCollection(this).triggerCallbacks();
	                    }
	                } else
	                    this.internalSetTarget(node);
	                return;
	            }
	        }

	        // we found a desired target if there is no type restriction or the object fits the restriction
	        this._foundTarget = !this._typeRestriction || node instanceof this._typeRestriction;
	        this.internalSetTarget(node);
	    };

	    p._addPathDependency = function (ldo) {
	        var sm = WeaveAPI.SessionManager;
	        if (!this._pathDependencies.get(ldo)) {
	            this._pathDependencies.set(ldo, ldo.internalObject);
	            sm.getCallbackCollection(ldo).addImmediateCallback(this, this._handlePathDependencies.bind(this));
	            sm.getCallbackCollection(ldo).addDisposeCallback(this, this._handlePathDependencies.bind(this));
	        }
	    };


	    p._handlePathDependencies = function () {
	        var sm = WeaveAPI.SessionManager;
	        for (var key of this._pathDependencies.keys()) {
	            var ldo = key;
	            if (sm.objectWasDisposed(ldo) || ldo.internalObject !== this._pathDependencies.get(ldo)) {
	                this._resetPathDependencies();
	                this._handlePath();
	                return;
	            }
	        }
	    };

	    p._resetPathDependencies = function () {
	        var sm = WeaveAPI.SessionManager;
	        for (var key of this._pathDependencies.keys())
	            sm.getCallbackCollection(key).removeCallback(this._handlePathDependencies);
	        this._pathDependencies = new Map();
	    };


	    p.dispose = function () {
	        this._targetPath = null;
	        this._target = null;
	        // everything else will be cleaned up automatically
	    };

	    weavecore.LinkableWatcher = LinkableWatcher;

	    /*
				// JavaScript test code for path dependency case
				var lhm = weave.path('lhm').remove().request('LinkableHashMap');

				var a = lhm.push('a').request('LinkableDynamicObject').state(lhm.getPath('b', null));

				a.addCallback(function () {
				if (a.getType(null))
				console.log('a.getState(null): ', JSON.stringify(a.getState(null)));
				else
				console.log('a has no internal object');
				}, false, true);

				var b = lhm.push('b').request('LinkableDynamicObject').state(lhm.getPath('c'));

				// a has no internal object

				var c = lhm.push('c').request('LinkableDynamicObject').request(null, 'LinkableString').state(null, 'c value');

				// a.getState(null): []
				// a.getState(null): [{"className":"weave.core::LinkableString","objectName":null,"sessionState":null}]
				// a.getState(null): [{"className":"weave.core::LinkableString","objectName":null,"sessionState":"c value"}]

				b.remove(null);

				// a has no internal object

				b.request(null, 'LinkableString').state(null, 'b value');

				// a.getState(null): null
				// a.getState(null): "b value"
			*/
	}());
	/**
	 * @module weavecore
	 */

	//namesapce
	if (typeof window === 'undefined') {
	    this.weavecore = this.weavecore || {};
	} else {
	    window.weavecore = window.weavecore || {};
	}

	(function () {
	    "use strict";

	    // constructor:
	    /**
	     * Allows dynamically creating instances of objects inheriting ILinkableObject at runtime.
	     * The session state is an Array of {{#crossLink "DynamicState"}}{{/crossLink}} objects.
	     * @class LinkableHashMap
	     * @extends CallbackCollection
	     * @constructor
	     * @param {Class} typeRestriction If specified, this will limit the type of objects that can be added to this LinkableHashMap.
	     */
	    function LinkableHashMap(typeRestriction) {
	        if (typeRestriction === undefined) typeRestriction = null;

	        weavecore.CallbackCollection.call(this);

	        /**
	         * restricts the type of object that can be stored
	         * @private
	         * @property _typeRestriction
	         * @type Class
	         */
	        this._typeRestriction;
	        /**
	         * qualified class name of _typeRestriction
	         * @private
	         * @property _typeRestrictionClassName
	         * @type String
	         */
	        this._typeRestrictionClassName;

	        if (typeRestriction !== null && typeRestriction !== undefined) {
	            this._typeRestriction = typeRestriction;
	            this._typeRestrictionClassName = typeRestriction.name;
	        }

	        /**
	         * @private
	         * @readOnly
	         * @property _childListCallbacks
	         * @type ChildListCallbackInterface
	         */
	        Object.defineProperty(this, '_childListCallbacks', {
	            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.ChildListCallbackInterface())
	        });

	        /**
	         * an ordered list of names appearing in _nameToObjectMap
	         * @private
	         * @readOnly
	         * @property _orderedNames
	         * @type Array
	         */
	        Object.defineProperty(this, '_orderedNames', {
	            value: []
	        });

	        /**
	         * maps an identifying name to an object
	         * @private
	         * @readOnly
	         * @property _nameToObjectMap
	         * @type Object
	         */
	        Object.defineProperty(this, '_nameToObjectMap', {
	            value: {}
	        });

	        /**
	         * maps an object to an identifying name
	         * @private
	         * @readOnly
	         * @property _objectToNameMap
	         * @type Map
	         */
	        Object.defineProperty(this, '_objectToNameMap', {
	            value: new Map()
	        });

	        /**
	         * maps an identifying name to a value of true if that name is locked.
	         * @private
	         * @readOnly
	         * @property _nameIsLocked
	         * @type Object
	         */
	        Object.defineProperty(this, '_nameIsLocked', {
	            value: {}
	        });

	        /**
	         * maps a previously used name to a value of true.  used when generating unique names.
	         * @private
	         * @readOnly
	         * @property _previousNameMap
	         * @type Object
	         */
	        Object.defineProperty(this, '_previousNameMap', {
	            value: {}
	        });

	        /**
	         * The child type restriction, or null if there is none.
	         * @public
	         * @readOnly
	         * @property typeRestriction
	         * @type Class
	         */
	        Object.defineProperty(this, 'typeRestriction', {
	            get: function () {
	                return this._typeRestriction;
	            }
	        });

	        /**
	         * This is an interface for adding and removing callbacks that will get triggered immediately
	         * when the list of child objects changes.
	         * @public
	         * @readOnly
	         * @property childListCallbacks
	         * @type ChildListCallbackInterface
	         */
	        Object.defineProperty(this, 'childListCallbacks', {
	            get: function () {
	                return this._childListCallbacks;
	            }
	        });
	    }

	    LinkableHashMap.prototype = new weavecore.CallbackCollection();
	    LinkableHashMap.prototype.constructor = LinkableHashMap;

	    var p = LinkableHashMap.prototype;

	    /**
	     * This function returns an ordered list of names in the hash map.
	     * @method getNames
	     * @param {Class} filter If specified, names of objects that are not of this type will be filtered out.
	     * @return {Array} A copy of the ordered list of names of objects contained in this LinkableHashMap.
	     */
	    p.getNames = function (filter) {
	        // set default value for parameter
	        if (filter === undefined) filter = null;
	        var result = [];
	        for (var i = 0; i < this._orderedNames.length; i++) {
	            var name = this._orderedNames[i];
	            if (filter === null || this._nameToObjectMap[name] instanceof filter)
	                result.push(name);
	        }
	        return result;
	    };

	    /**
	     * This function returns an ordered list of objects in the hash map.
	     * @method getObjects
	     * @param {Class} filter If specified, objects that are not of this type will be filtered out.
	     * @return {Array} An ordered Array of objects that correspond to the names returned by getNames(filter).
	     */
	    p.getObjects = function (filter) {
	        // set default value for parameter
	        if (filter === undefined) filter = null;
	        var result = [];
	        for (var i = 0; i < this._orderedNames.length; i++) {
	            var name = this._orderedNames[i];
	            var object = this._nameToObjectMap[name];
	            if (filter === null || filter === undefined || object instanceof filter)
	                result.push(object);
	        }
	        return result;
	    };

	    /**
	     * This function gets the object associated with the specified name.
	     * @method getObject
	     * @param {String} name The identifying name to associate with an object.
	     * @return {ILinkableObject} The object associated with the given name.
	     */
	    p.getObject = function (name) {
	        return this._nameToObjectMap[name];
	    };

	    /**
	     * This function gets the name of the specified object in the hash map.
	     * @getName
	     * @param {ILinkableObject} object An object contained in this LinkableHashMap.
	     * @return {String} The name associated with the object, or null if the object was not found.
	     */
	    p.getName = function (object) {
	        return this._objectToNameMap.get(object);
	    };

	    /**
	     * This will reorder the names returned by getNames().
	     * Any names appearing in newOrder that do not appear in getNames() will be ignored.
	     * Callbacks will be called if the new name order differs from the old order.
	     * @method setNameOrder
	     * @param {Array} newOrder The new desired ordering of names.
	     */
	    p.setNameOrder = function (newOrder) {
	        var changeDetected = false;
	        var name;
	        var i;
	        var originalNameCount = this._orderedNames.length; // remembers how many names existed before appending
	        var haveSeen = {}; // to remember which names have been seen in newOrder
	        // append each name in newOrder to the end of _orderedNames
	        for (i = 0; i < newOrder.length; i++) {
	            name = newOrder[i];
	            // ignore bogus names and append each name only once.
	            if (this._nameToObjectMap[name] === undefined || haveSeen[name] !== undefined)
	                continue;
	            haveSeen[name] = true; // remember that this name was appended to the end of the list
	            this._orderedNames.push(name); // add this name to the end of the list
	        }
	        // Now compare the ordered appended items to the end of the original list.
	        // If the order differs, set _nameOrderChanged to true.
	        // Meanwhile, set old name entries to null so they will be removed in the next pass.
	        var appendedCount = this._orderedNames.length - originalNameCount;
	        for (i = 0; i < appendedCount; i++) {
	            var newIndex = originalNameCount + i;
	            var oldIndex = this._orderedNames.indexOf(this._orderedNames[newIndex]);
	            if (newIndex - oldIndex !== appendedCount)
	                changeDetected = true;
	            this._orderedNames[oldIndex] = null;
	        }
	        // remove array items that have been set to null
	        var out = 0;
	        for (i = 0; i < this._orderedNames.length; i++)
	            if (this._orderedNames[i] !== null && this._orderedNames[i] !== undefined)
	                this._orderedNames[out++] = this._orderedNames[i];
	        this._orderedNames.length = out;
	        // if the name order changed, run child list callbacks
	        if (changeDetected)
	            this._childListCallbacks.runCallbacks(null, null, null);
	    };

	    /**
	     * This function creates an object in the hash map if it doesn't already exist.
	     * If there is an existing object associated with the specified name, it will be kept if it
	     * is the specified type, or replaced with a new instance of the specified type if it is not.
	     * @method requestObject
	     * @param {String} name The identifying name of a new or existing object.
	     * @param {Class} classDef The Class of the desired object type.
	     * @param {Boolean} lockObject If this is true, the object will be locked in place under the specified name.
	     * @return {Object} The object under the requested name of the requested type, or null if an error occurred.
	     */
	    p.requestObject = function (name, classDef, lockObject) {
	        var className = classDef ? classDef.name : null;
	        var result = this._initObjectByClassName.call(this, name, className, lockObject);
	        return classDef ? result : null;
	    };

	    /**
	     * This function will copy the session state of an ILinkableObject to a new object under the given name in this LinkableHashMap.
	     * @method requestObjectCopy
	     * @param {String} newName A name for the object to be initialized in this LinkableHashMap.
	     * @param {ILinkableObject} objectToCopy An object to copy the session state from.
	     * @return {ILinkableObject} The new object of the same type, or null if an error occurred.
	     */
	    p.requestObjectCopy = function (name, objectToCopy) {
	        if (objectToCopy === null || objectToCopy === undefined) {
	            this.removeObject(name);
	            return null;
	        }

	        this.delayCallbacks(); // make sure callbacks only trigger once
	        var classDef = objectToCopy.constructor; //ClassUtils.getClassDefinition(className);
	        var sessionState = WeaveAPI.SessionManager.getSessionState(objectToCopy);
	        var object = requestObject(name, classDef, false);
	        if (object !== null && object !== undefined)
	            WeaveAPI.SessionManager.setSessionState(object, sessionState);
	        this.resumeCallbacks();

	        return object;
	    };

	    /**
	     * This function will rename an object by making a copy and removing the original.
	     * @method renameObject
	     * @param {String} oldName The name of an object to replace.
	     * @param {String} newName The new name to use for the copied object.
	     * @return {ILinkableObject} The copied object associated with the new name, or the original object if newName is the same as oldName.
	     */
	    p.renameObject = function (oldName, newName) {
	        if (oldName !== newName) {
	            this.delayCallbacks();

	            // prepare a name order that will put the new name in the same place the old name was
	            var newNameOrder = this._orderedNames.concat();
	            var index = newNameOrder.indexOf(oldName);
	            if (index >= 0)
	                newNameOrder.splice(index, 1, newName);

	            this.requestObjectCopy(newName, getObject(oldName));
	            this.removeObject(oldName);
	            this.setNameOrder(newNameOrder);

	            this.resumeCallbacks();
	        }
	        return this.getObject(newName);
	    };

	    /**
	     * If there is an existing object associated with the specified name, it will be kept if it
	     * is the specified type, or replaced with a new instance of the specified type if it is not.
	     * @method _initObjectByClassName
	     * @private
	     * @param {String} name The identifying name of a new or existing object.  If this is null, a new one will be generated.
	     * @param {String} className The qualified class name of the desired object type.
	     * @param {Boolean} lockObject If this is set to true, lockObject() will be called on the given name.
	     * @return {ILinkableObject} The object associated with the given name, or null if an error occurred.
	     */
	    p._initObjectByClassName = function (name, className, lockObject) {
	        if (className) {
	            // if no name is specified, generate a unique one now.
	            if (!name)
	                name = generateUniqueName(className.split("::").pop());
	            if (className !== "delete") // to-do Add Support for class Utils - delete is temp solution
	            {
	                // If this name is not associated with an object of the specified type,
	                // associate the name with a new object of the specified type.
	                console.log(className);
	                var classDef = eval('weavecore.' + className); //TODO:remove hardcoded weavecore with namespace
	                var object = this._nameToObjectMap[name];
	                if (!object || object.constructor !== classDef)
	                    this._createAndSaveNewObject.call(this, name, classDef, lockObject);
	                else if (lockObject)
	                    this._lockObject(name);

	            } else {
	                this.removeObject(name);
	            }
	        } else {
	            this.removeObject(name);
	        }
	        return this._nameToObjectMap[name];
	    };

	    /**
	     * @method _createAndSaveNewObject
	     * @private
	     * @param {String} name The identifying name to associate with a new object.
	     * @param {Class} classDef The Class definition used to instantiate a new object.
	     * @param {Boolean} lockObject If this is set to true, lockObject() will be called on the given name.
	     */
	    p._createAndSaveNewObject = function (name, classDef, lockObject) {
	        if (this._nameIsLocked[name])
	            return;

	        // remove any object currently using this name
	        this.removeObject(name);
	        // create a new object
	        var object = new classDef();
	        // register the object as a child of this LinkableHashMap
	        WeaveAPI.SessionManager.registerLinkableChild(this, object);
	        // save the name-object mappings
	        this._nameToObjectMap[name] = object;
	        this._objectToNameMap.set(object, name);
	        // add the name to the end of _orderedNames
	        this._orderedNames.push(name);
	        // remember that this name was used.
	        this._previousNameMap[name] = true;

	        if (lockObject)
	            this._lockObject(name);

	        // make sure the callback variables signal that the object was added
	        this._childListCallbacks.runCallbacks(name, object, null);
	    };

	    /**
	     * This function will lock an object in place for a given identifying name.
	     * If there is no object using the specified name, this function will have no effect.
	     * @method _lockObject
	     * @private
	     * @param {String} name The identifying name of an object to lock in place.
	     */
	    p._lockObject = function (name) {
	        if (name !== null && name !== undefined && this._nameToObjectMap[name] !== null && this._nameToObjectMap[name] !== undefined)
	            this._nameIsLocked[name] = true;
	    };

	    /**
	     * This function will return true if the specified object was previously locked.
	     * @method objectIsLocked
	     * @param {String} name The name of an object.
	     * @return {Boolean}
	     */
	    p.objectIsLocked = function (name) {
	        return this._nameIsLocked[name] ? true : false;
	    };

	    /**
	     * This function removes an object from the hash map.
	     * @method removeObject
	     * @param {String} name The identifying name of an object previously saved with setObject().
	     */
	    p.removeObject = function (name) {
	        if (!name || this._nameIsLocked[name])
	            return;

	        var object = this._nameToObjectMap[name];
	        if (object === null || object === undefined)
	            return; // do nothing if the name isn't mapped to an object.

	        //console.log(LinkableHashMap, "removeObject",name,object);
	        // remove name & associated object
	        delete this._nameToObjectMap[name];
	        this._objectToNameMap.delete(object);
	        var index = this._orderedNames.indexOf(name);
	        this._orderedNames.splice(index, 1);

	        // make sure the callback variables signal that the object was removed
	        this._childListCallbacks.runCallbacks(name, null, object);

	        // dispose the object AFTER the callbacks know that the object was removed
	        WeaveAPI.SessionManager.disposeObject(object);
	    };

	    /**
	     * This function attempts to removes all objects from this LinkableHashMap.
	     * Any objects that are locked will remain.
	     * @method removeAllObjects
	     */
	    p.removeAllObjects = function () {
	        this.delayCallbacks();
	        var orderedNamesCopy = this._orderedNames.concat();
	        for (var i = 0; i < orderedNamesCopy.length; i++) {
	            this.removeObject(orderedNamesCopy[i]);
	        }
	        this.resumeCallbacks();
	    };

	    /**
	     * This function removes all objects from this LinkableHashMap.
	     * adds implementaion to {{#crossLink "CallbackCollection/dispose:method"}}{{/crossLink}}
	     * @method dispose
	     */
	    p.dispose = function dispose() {

	        weavecore.CallbackCollection.prototype.dispose.call(this);

	        // first, remove all objects that aren't locked
	        this.removeAllObjects();

	        // remove all locked objects
	        var orderedNamesCopy = this._orderedNames.concat();
	        for (var i = 0; i < orderedNamesCopy.length; i++) {
	            var name = orderedNamesCopy[i];
	            this._nameIsLocked[name] = undefined; // make sure removeObject() will carry out its action
	            this.removeObject(name);
	        }
	    };

	    /**
	     * This will generate a new name for an object that is different from all the names of objects previously used in this LinkableHashMap.
	     * @method generateUniqueName
	     * @param {String} baseName The name to start with.  If the name is already in use, an integer will be appended to create a unique name.
	     */
	    p.generateUniqueName = function (baseName) {
	        var count = 1;
	        var name = baseName;
	        while (this._previousNameMap[name] !== undefined)
	            name = baseName + (++count);
	        return name;
	    };

	    /**
	     * This gets the session state of this composite object.
	     * @method getSessionState
	     * @return {Array} An Array of {{#crossLink "DynamicState"}}{{/crossLink}} objects which compose the session state for this object.
	     */
	    p.getSessionState = function () {
	        var result = new Array(this._orderedNames.length);
	        for (var i = 0; i < this._orderedNames.length; i++) {
	            var name = this._orderedNames[i];
	            var object = this._nameToObjectMap[name];
	            result[i] = weavecore.DynamicState.create(
	                name,
	                object.constructor.name,
	                WeaveAPI.SessionManager.getSessionState(object)
	            );
	        }
	        return result;
	    };

	    /**
	     * This sets the session state of this composite object.
	     * @method setSessionState
	     * @param {Array} newState An Array of child name Strings or {{#crossLink "DynamicState"}}{{/crossLink}} objects containing the new values and types for child ILinkableObjects.
	     * @param {Boolean} removeMissingDynamicObjects If true, this will remove any child objects that do not appear in the session state.
	     *     As a special case, a null session state will result in no change regardless of the removeMissingDynamicObjects value.
	     */
	    p.setSessionState = function (newStateArray, removeMissingDynamicObjects) {
	        // special case - no change
	        if (newStateArray === null || newStateArray === undefined)
	            return;

	        this.delayCallbacks();

	        // first pass: make sure the types match and sessioned properties are instantiated.
	        var i;
	        var objectName;
	        var className;
	        var typedState;
	        var remainingObjects = removeMissingDynamicObjects ? {} : null; // maps an objectName to a value of true
	        var newObjects = {}; // maps an objectName to a value of true if the object is newly created as a result of setting the session state
	        var newNameOrder = []; // the order the object names appear in the vector
	        if (newStateArray !== null && newStateArray !== undefined) {
	            // initialize all the objects before setting their session states because they may refer to each other.
	            for (i = 0; i < newStateArray.length; i++) {
	                typedState = newStateArray[i];
	                if (!weavecore.DynamicState.isDynamicState(typedState))
	                    continue;
	                objectName = typedState[weavecore.DynamicState.OBJECT_NAME];
	                className = typedState[weavecore.DynamicState.CLASS_NAME];
	                // ignore objects that do not have a name because they may not load the same way on different application instances.
	                if (objectName === null || objectName === undefined)
	                    continue;
	                // if className is not specified, make no change
	                if (className === null || className === undefined)
	                    continue;
	                // initialize object and remember if a new one was just created
	                if (this._nameToObjectMap[objectName] !== this._initObjectByClassName.call(this, objectName, className))
	                    newObjects[objectName] = true;
	            }
	            // second pass: copy the session state for each property that is defined.
	            // Also remember the ordered list of names that appear in the session state.
	            for (i = 0; i < newStateArray.length; i++) {
	                typedState = newStateArray[i];
	                if (typeof (typedState) === "string") {
	                    objectName = typedState;
	                    if (removeMissingDynamicObjects)
	                        remainingObjects[objectName] = true;
	                    newNameOrder.push(objectName);
	                    continue;
	                }

	                if (!weavecore.DynamicState.isDynamicState(typedState))
	                    continue;
	                objectName = typedState[weavecore.DynamicState.OBJECT_NAME];
	                if (objectName === null || objectName === undefined)
	                    continue;
	                var object = this._nameToObjectMap[objectName];
	                if (object === null || object === undefined)
	                    continue;
	                // if object is newly created, we want to apply an absolute session state
	                WeaveAPI.SessionManager.setSessionState(object, typedState[weavecore.DynamicState.SESSION_STATE], newObjects[objectName] || removeMissingDynamicObjects);
	                if (removeMissingDynamicObjects)
	                    remainingObjects[objectName] = true;
	                newNameOrder.push(objectName);
	            }
	        }
	        if (removeMissingDynamicObjects) {
	            // third pass: remove objects based on the Boolean flags in remainingObjects.
	            var orderedNamesCopy = this._orderedNames.concat();
	            for (var j = 0; j < orderedNamesCopy.length; j++) {
	                objectName = torderedNamesCopy[j];
	                if (remainingObjects[objectName] !== true) {
	                    //trace(LinkableHashMap, "missing value: "+objectName);
	                    this.removeObject(objectName);
	                }
	            }
	        }
	        // update name order AFTER objects have been added and removed.
	        this.setNameOrder(newNameOrder);

	        this.resumeCallbacks();
	    };

	    weavecore.LinkableHashMap = LinkableHashMap;
	}());
	createjs.Ticker.setFPS(50);
	//createjs.Ticker.

	// constructor:

	if (typeof window === 'undefined') {
	    this.WeaveAPI = this.WeaveAPI || {};
	} else {
	    window.WeaveAPI = window.WeaveAPI || {};
	}

	//Object.defineProperty(WeaveAPI, '_sessionManager', {
	// value: new SessionManager()
	//});
	//Object.defineProperty(WeaveAPI, '_stageUtils', {
	//value: new weave.core.StageUtils()
	//});

	Object.defineProperty(WeaveAPI, 'TASK_PRIORITY_IMMEDIATE', {
	    value: 0
	});

	Object.defineProperty(WeaveAPI, 'TASK_PRIORITY_HIGH', {
	    value: 1
	});

	Object.defineProperty(WeaveAPI, 'TASK_PRIORITY_NORMAL', {
	    value: 2
	});

	Object.defineProperty(WeaveAPI, 'TASK_PRIORITY_LOW', {
	    value: 3
	});

	/* WeaveAPI.__defineGetter__("SessionManager", function(){
	     return WeaveAPI._sessionManager;
	 });

	 WeaveAPI.__defineGetter__("StageUtils", function(){
	     return WeaveAPI._stageUtils;
	 });*/
	WeaveAPI.SessionManager = new weavecore.SessionManager();
	WeaveAPI.globalHashMap = new weavecore.LinkableHashMap();
	/**
	 * @module weavecore
	 */

	//namesapce
	if (typeof window === 'undefined') {
	    this.weavecore = this.weavecore || {};
	} else {
	    window.weavecore = window.weavecore || {};
	}

	(function () {
	    "use strict";

	    // constructor:
	    /**
	     * This object links to an internal ILinkableObject.
	     * The internal object can be either a local one or a global one identified by a global name.
	     * @class LinkableDynamicObject
	     * @extends LinkableWatcher
	     * @constructor
	     * @param {Class} typeRestriction If specified, this will limit the type of objects that can be added to this LinkableHashMap.
	     */
	    function LinkableDynamicObject(typeRestriction) {
	        if (typeRestriction === undefined) typeRestriction = null;
	        // this is a constraint on the type of object that can be linked
	        this._typeRestrictionClassName;
	        this._typeRestriction = typeRestriction;
	        // when this is true, the linked object cannot be changed
	        this._locked = false;

	        weavecore.LinkableWatcher.call(this, typeRestriction);
	        if (typeRestriction)
	            this._typeRestrictionClassName = typeRestriction.constructor.name;

	        // the callback collection for this object
	        // private const
	        Object.defineProperty(this, '_cc', {
	            value: WeaveAPI.SessionManager.registerDisposableChild(this, new weavecore.CallbackCollection()),
	            writable: false
	        });

	        Object.defineProperty(LinkableDynamicObject, 'ARRAY_CLASS_NAME', {
	            value: 'Array'
	        });

	        /**
	         * @inheritDoc
	         */
	        Object.defineProperty(this, 'internalObject', {
	            get: function () {
	                return this.target;
	            }
	        });

	        // override public
	        Object.defineProperty(this, 'targetPath', {

	            set: function (path) {
	                if (this._locked)
	                    return;
	                weavecore.LinkableWatcher.prototype.targetPath = path;
	            },
	            configurable: true
	        });

	        // override public
	        Object.defineProperty(this, 'target', {

	            set: function (newTarget) {
	                if (this._locked)
	                    return;

	                if (!newTarget) {
	                    weavecore.LinkableWatcher.prototype.target = null;
	                    return;
	                }

	                this._cc.delayCallbacks();

	                // if the target can be found by a path, use the path
	                var sm = WeaveAPI.SessionManager;
	                var path = sm.getPath(WeaveAPI.globalHashMap, newTarget);
	                if (path) {
	                    this.targetPath = path;
	                } else {
	                    // it's ok to assign a local object that we own or that doesn't have an owner yet
	                    // otherwise, unset the target
	                    var owner = sm.getLinkableOwner(newTarget);
	                    if (owner === this || !owner)
	                        weavecore.LinkableWatcher.prototype.target = newTarget;
	                    else
	                        weavecore.LinkableWatcher.prototype.target = null;
	                }

	                this._cc.resumeCallbacks();
	            },
	            configurable: true
	        });


	        Object.defineProperty(this, 'globalName', {
	            /**
	             * This is the name of the linked global object, or null if the internal object is local.
	             */
	            get: function () {
	                if (this._targetPath && this._targetPath.length == 1)
	                    return this._targetPath[0];
	                return null;
	            },
	            /**
	             * This function will change the internalObject if the new globalName is different, unless this object is locked.
	             * If a new global name is given, the session state of the new global object will take precedence.
	             * @param newGlobalName This is the name of the global object to link to, or null to unlink from the current global object.
	             */
	            set: function (newGlobalName) {
	                if (this._locked)
	                    return;

	                // change empty string to null
	                if (!newGlobalName)
	                    newGlobalName = null;

	                var oldGlobalName = this.globalName;
	                if (oldGlobalName === newGlobalName)
	                    return;

	                this._cc.delayCallbacks();

	                if (newGlobalName === null || newGlobalName === undefined) {
	                    // unlink from global object and copy session state into a local object
	                    this.requestLocalObjectCopy(this.internalObject);
	                } else {
	                    // when switcing from a local object to a global one that doesn't exist yet, copy the local object
	                    if (this.target && !this.targetPath && !WeaveAPI.globalHashMap.getObject(newGlobalName))
	                        WeaveAPI.globalHashMap.requestObjectCopy(newGlobalName, this.internalObject);

	                    // link to new global name
	                    this.targetPath = [newGlobalName];
	                }

	                this._cc.resumeCallbacks();
	            }
	        });

	        /**
	         * @inheritDoc
	         */
	        Object.defineProperty(this, 'locked', {
	            get: function () {
	                return this.locked;
	            }

	        });
	    }

	    LinkableDynamicObject.prototype = new weavecore.LinkableWatcher();
	    LinkableDynamicObject.prototype.constructor = LinkableDynamicObject;

	    var p = LinkableDynamicObject.prototype;


	    p.lock = function () {
	        this._locked = true;
	    };

	    /**
	     * @inheritDoc
	     */
	    //public

	    p.getSessionState = function () {
	        var obj = this.targetPath || this.target;
	        if (!obj)
	            return [];

	        var className = obj.constructor.name;
	        var sessionState = obj || WeaveAPI.SessionManager.getSessionState(obj);
	        return [weavecore.DynamicState.create(null, className, sessionState)];
	    };

	    /**
	     * @inheritDoc
	     */
	    //public

	    p.setSessionState = function (newState, removeMissingDynamicObjects) {
	        //console.log(debugId(this), removeMissingDynamicObjects ? 'diff' : 'state', Compiler.stringify(newState, null, '\t'));

	        // special case - no change
	        if (newState === null || newState === undefined)
	            return;

	        try {
	            // make sure callbacks only run once
	            this._cc.delayCallbacks();

	            // stop if there are no items
	            if (!newState.length) {
	                if (removeMissingDynamicObjects)
	                    target = null;
	                return;
	            }

	            // if it's not a dynamic state array, treat it as a path
	            if (!weavecore.DynamicState.isDynamicStateArray(newState)) {
	                this.targetPath = newState;
	                return;
	            }

	            // if there is more than one item, it's in a deprecated format
	            /*if (newState.length > 1) {
	                handleDeprecatedSessionState(newState, removeMissingDynamicObjects);
	                return;
	            }*/

	            var dynamicState = newState[0];
	            var className = dynamicState[weavecore.DynamicState.CLASS_NAME];
	            var objectName = dynamicState[weavecore.DynamicState.OBJECT_NAME];
	            var sessionState = dynamicState[weavecore.DynamicState.SESSION_STATE];

	            // backwards compatibility
	            /*if (className == 'weave.core::GlobalObjectReference' || className == 'GlobalObjectReference') {
	                className = ARRAY_CLASS_NAME;
	                sessionState = [objectName];
	            }*/

	            if (className === ARRAY_CLASS_NAME || (!className && this.targetPath))
	                this.targetPath = sessionState;
	            else if (className === SessionManager.DIFF_DELETE)
	                this.target = null;
	            else {
	                var prevTarget = this.target;
	                // if className is not specified, make no change unless removeMissingDynamicObjects is true
	                if (className || removeMissingDynamicObjects)
	                    this._setLocalObjectType(className);
	                //TODO:Remove hardcoded NameSpace
	                var classDef = eval("weavecore." + className);
	                if ((!className && this.target) || (classDef && this.target instanceof classDef))
	                    WeaveAPI.SessionManager.setSessionState(this.target, sessionState, prevTarget !== this.target || removeMissingDynamicObjects);
	            }
	        } finally {
	            // allow callbacks to run once now
	            this._cc.resumeCallbacks();
	        }
	    };





	    // override protected

	    p.internalSetTarget = function (newTarget) {
	        // don't allow recursive linking
	        if (newTarget === this || WeaveAPI.SessionManager.getLinkableDescendants(newTarget, LinkableDynamicObject).indexOf(this) >= 0)
	            newTarget = null;

	        weavecore.LinkableWatcher.prototype.internalSetTarget(newTarget);
	    };



	    //private

	    p._setLocalObjectType = function (className) {
	        // stop if locked
	        if (this._locked)
	            return;

	        this._cc.delayCallbacks();

	        this.targetPath = null;

	        var classDef = eval('weavecore.' + className);
	        if (classDef instanceof weavecore.ILinkableObject && (this._typeRestriction === null || this._typeRestriction === undefined || classDef instanceof this._typeRestriction)) {

	            var obj = target;
	            if (!obj || obj.constructor !== classDef)
	                weavecore.LinkableWatcher.prototype.target = new classDef();
	        } else {
	            weavecore.LinkableWatcher.prototype.target = null;
	        }

	        _cc.resumeCallbacks();
	    };

	    /**
	     * @inheritDoc
	     */


	    p.requestLocalObject = function (objectType, lockObject) {
	        this._cc.delayCallbacks();

	        if (objectType)
	            this._setLocalObjectType(objectType.constructor.name);
	        else
	            this.target = null;

	        if (lockObject)
	            this._locked = true;

	        this._cc.resumeCallbacks();

	        return target;
	    };

	    /**
	     * @inheritDoc
	     */
	    p.requestGlobalObject = function (name, objectType, lockObject) {
	        if (!name)
	            return this.requestLocalObject(objectType, lockObject);

	        if (!this._locked) {
	            this._cc.delayCallbacks();

	            this.targetPath = [name];
	            WeaveAPI.globalHashMap.requestObject(name, objectType, lockObject);
	            if (lockObject)
	                this._locked = true;

	            this._cc.resumeCallbacks();
	        }

	        return this.target;
	    };

	    /**
	     * @inheritDoc
	     */
	    p.requestLocalObjectCopy = function (objectToCopy) {
	        this._cc.delayCallbacks(); // make sure callbacks only trigger once
	        var classDef = objectToCopy ? objectToCopy.constructor : null;
	        var object = this.requestLocalObject(classDef, false);
	        if (object !== null && object !== undefined && objectToCopy !== null && objectToCopy !== undefined) {
	            var state = WeaveAPI.SessionManager.getSessionState(objectToCopy);
	            WeaveAPI.SessionManager.setSessionState(object, state, true);
	        }
	        this._cc.resumeCallbacks();
	    };


	    p.removeObject = function () {
	        if (!this._locked)
	            weavecore.LinkableWatcher.prototype.target = null;
	    };

	    p.dispose = function () {
	        // explicitly dispose the CallbackCollection before anything else
	        this._cc.dispose();
	        weavecore.LinkableWatcher.prototype.dispose();
	    };

	    weavecore.LinkableDynamicObject = LinkableDynamicObject;


	}());
	/*
	    Weave (Web-based Analysis and Visualization Environment)
	    Copyright (C) 2008-2011 University of Massachusetts Lowell
	    This file is a part of Weave.
	    Weave is free software: you can redistribute it and/or modify
	    it under the terms of the GNU General Public License, Version 3,
	    as published by the Free Software Foundation.
	    Weave is distributed in the hope that it will be useful,
	    but WITHOUT ANY WARRANTY; without even the implied warranty of
	    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	    GNU General Public License for more details.
	    You should have received a copy of the GNU General Public License
	    along with Weave.  If not, see <http://www.gnu.org/licenses/>.
	*/

	// namespace

	if (!this.weavecore)
	    this.weavecore = {};

	/**
	 * This allows you to add callbacks that will be called when an event occurs on the stage.
	 *
	 * WARNING: These callbacks will trigger on every mouse and keyboard event that occurs on the stage.
	 *          Developers should not add any callbacks that run computationally expensive code.
	 *
	 * @author adufilie
	 * @author sanjay1909
	 */
	(function () {

	    // Internal class constructor

	    Object.defineProperty(EventCallbackCollection, 'eventTypes', {
	        value: ['tick']
	    });

	    function EventCallbackCollection(eventManager, eventType) {
	        weavecore.CallbackCollection.call(this, this.setEvent.bind(this));
	        this._eventManager = eventManager;
	        this._eventType = eventType;

	    }

	    EventCallbackCollection.prototype = new weavecore.CallbackCollection();
	    EventCallbackCollection.prototype.constructor = EventCallbackCollection;

	    var p = EventCallbackCollection.prototype;

	    /**
	     * This is the _preCallback
	     */
	    p.setEvent = function setEvent(event) {
	        this._eventManager.event = event;
	    };

	    /**
	     * This function remembers the previous event value, runs callbacks using the new event value,
	     * then restores the previous event value. This is necessary because it is possible for a popup
	     * browser window to interrupt Flash with requests in the middle of an event.
	     */
	    p.runEventCallbacks = function (event) {
	        var previousEvent = this._eventManager.event; // remember previous value
	        this._runCallbacksImmediately(event); // make sure event is set before each immediate callback
	        this._preCallback(previousEvent); // restore the previous value
	    };

	    /**
	     * Call this when the stage is available to set up event listeners.
	     */
	    p.listenToStage = function () {
	        // do not create event listeners for these meta events
	        //if (eventType == POINT_CLICK_EVENT || eventType == THROTTLED_MOUSE_MOVE_EVENT)
	        //return;

	        //if (eventType == KeyboardEvent.KEY_DOWN && Capabilities.playerType == "Desktop")
	        //cancelable = false;

	        // Add a listener to the capture phase so the callbacks will run before the target gets the event.
	        //stage.addEventListener(eventType, captureListener, true, 0, true); // use capture phase

	        // If the target is the stage, the capture listener won't be called, so add
	        // an additional listener that runs callbacks when the stage is the target.
	        createjs.Ticker.addEventListener(this._eventType, this._tickerListener.bind(this)); // do not use capture phase

	        // when callbacks are disposed, remove the listeners
	        this.addDisposeCallback(null, function () {
	            //stage.removeEventListener(eventType, captureListener, true);
	            createjs.Ticker.removeEventListener(this._eventType, this._tickerListener.bind(this));
	        });
	    };

	    p._tickerListener = function (event) {
	        this._eventManager.eventTime = new Date().getTime();
	        if (this._eventType === "tick") {
	            if (this._eventManager.userActivity > 0 && !this._eventManager.mouseButtonDown)
	                this._eventManager.userActivity--;
	            this._eventManager.previousFrameElapsedTime = this._eventManager.eventTime - this._eventManager.currentFrameStartTime;
	            this._eventManager.currentFrameStartTime = this._eventManager.eventTime;
	            //this._eventManager.triggeredThrottledMouseThisFrame = false;
	        }
	        // finally, trigger callbacks for non-mouse-move events
	        if (this._eventType === "tick") // altered temporarily
	            this.runEventCallbacks(event);

	    };

	    weavecore.EventCallbackCollection = EventCallbackCollection;

	    //constructor
	    function StageUtils() {

	        this.averageFrameTime = 0;

	        Object.defineProperties(this, {
	            eventManager: {
	                value: new EventManager()
	            },
	            frameTimes: {
	                value: []
	            },
	            _stackTraceMap: {
	                value: new Map()
	            },
	            _taskElapsedTime: {
	                value: new Map()
	            },
	            _taskStartTime: {
	                value: new Map()
	            },

	        });
	        this._currentTaskStopTime = 0;

	        /**
	         * This is an Array of "callLater queues", each being an Array of function invocations to be done later.
	         * The Arrays get populated by callLater().
	         * There are four nested Arrays corresponding to the four priorities (0, 1, 2, 3) defined by static constants in WeaveAPI.
	         */
	        Object.defineProperties(this, {
	            _priorityCallLaterQueues: {
	                value: [[], [], [], []]
	            },
	            _priorityAllocatedTimes: {
	                value: [Number.MAX_VALUE, 300, 200, 100]
	            }
	        });
	        this._activePriority = WeaveAPI.TASK_PRIORITY_IMMEDIATE + 1; // task priority that is currently being processed
	        this._activePriorityElapsedTime = 0;
	        this._deactivatedMaxComputationTimePerFrame = 1000;
	        this._nextCallLaterPriority = WeaveAPI.TASK_PRIORITY_IMMEDIATE; // private variable to control the priority of the next callLater() internally
	        this.addEventCallback("tick", null, this._handleCallLater.bind(this));
	        this.maxComputationTimePerFrame = 100;
	        this.maxComputationTimePerFrame_noActivity = 250;

	    }

	    var suP = StageUtils.prototype;
	    suP.getMaxComputationTimePerFrame = function () {
	        return this.maxComputationTimePerFrame;
	    };

	    suP.setMaxComputationTimePerFrame = function (value) {
	        // this.eventManager.throttledMouseMoveInterval = value;
	        this.maxComputationTimePerFrame = value;
	    };

	    suP.getTaskPriorityTimeAllocation = function (priority) {
	        return this._priorityAllocatedTimes[priority];
	    };

	    suP.setTaskPriorityTimeAllocation = function (priority, milliseconds) {
	        this._priorityAllocatedTimes[priority] = Math.max(milliseconds, 5);
	    };

	    StageUtils._time;
	    StageUtils._times = [];

	    suP.callLater = function (relevantContext, method, parameters) {
	        if (method === null || method === undefined) {
	            console.log('StageUtils.callLater(): received null "method" parameter');
	            return;
	        }

	        this._priorityCallLaterQueues[this._nextCallLaterPriority].push(arguments);
	        this._nextCallLaterPriority = WeaveAPI.TASK_PRIORITY_IMMEDIATE;

	        //if (this.debug_async_stack)
	        //_stackTraceMap[arguments] = new Error("This is the stack trace from when callLater() was called.").getStackTrace();
	    };

	    suP._handleCallLater = function () {
	        if (this.maxComputationTimePerFrame === 0)
	            this.maxComputationTimePerFrame = 100;

	        var maxComputationTime;
	        if (this.eventManager.useDeactivatedFrameRate)
	            maxComputationTime = this._deactivatedMaxComputationTimePerFrame;
	        else if (!this.eventManager.userActivity)
	            maxComputationTime = this.maxComputationTimePerFrame_noActivity;
	        else
	            maxComputationTime = this.maxComputationTimePerFrame;
	        if (!this.eventManager.event) {
	            console.log("StageUtils.handleCallLater(): _event is null. This should never happen.");
	            return;
	        }
	        if (this.eventManager.event.type === "tick") {
	            //resetDebugTime();

	            /*if (debug_fps)
	            {
	                frameTimes.push(previousFrameElapsedTime);
	                if (StandardLib.sum(frameTimes) >= 1000)
	                {
	                    averageFrameTime = StandardLib.mean(frameTimes);
	                    var fps:Number = StandardLib.roundSignificant(1000 / averageFrameTime, 2);
	                    trace(fps,'fps; max computation time',maxComputationTime);
	                    frameTimes.length = 0;
	                }
	            }*/

	            if (this.eventManager.previousFrameElapsedTime > 3000)
	                console.log('Previous frame took', this.eventManager.previousFrameElapsedTime, 'ms');
	        }

	        //if (UIComponentGlobals.callLaterSuspendCount > 0)
	        //return;

	        // The variables countdown and lastPriority are used to avoid running newly-added tasks immediately.
	        // This avoids wasting time on async tasks that do nothing and return early, adding themselves back to the queue.

	        var args;
	        var args2; // this is set to args[2]
	        var stackTrace;
	        var now;
	        var allStop = this.eventManager.currentFrameStartTime + maxComputationTime;

	        this._currentTaskStopTime = allStop; // make sure _iterateTask knows when to stop

	        // first run the functions that should be called before anything else.
	        /*if (pauseForGCIfCollectionImminent != null)
	        {
	            var t:int = getTimer();
	            pauseForGCIfCollectionImminent();
	            t = getTimer() - t;
	            if (t > maxComputationTimePerFrame)
	                trace('paused',t,'ms for GC');
	        }*/
	        var queue = this._priorityCallLaterQueues[WeaveAPI.TASK_PRIORITY_IMMEDIATE];
	        var countdown;
	        for (countdown = queue.length; countdown > 0; countdown--) {
	            /*if (debug_callLater)
	                DebugTimer.begin();*/

	            now = new Date().getTime();
	            // stop when max computation time is reached for this frame
	            if (now > allStop) {
	                /*if (debug_callLater)
	                    DebugTimer.cancel();*/
	                return;
	            }

	            // args: (relevantContext:Object, method:Function, parameters:Array, priority:uint)
	            args = queue.shift();
	            stackTrace = this._stackTraceMap[args];

	            // don't call the function if the relevantContext was disposed.
	            if (!WeaveAPI.SessionManager.objectWasDisposed(args[0])) {
	                args2 = args[2];
	                if (args2 !== null && args2 && args2.length > 0)
	                    args[1].apply(null, args2);
	                else
	                    args[1].call();
	            }

	            /*if (debug_callLater)
	                DebugTimer.end(stackTrace);*/
	        }

	        //			trace('-------');

	        var minPriority = WeaveAPI.TASK_PRIORITY_IMMEDIATE + 1;
	        var lastPriority = this._activePriority === minPriority ? this._priorityCallLaterQueues.length - 1 : this._activePriority - 1;
	        var pStart = new Date().getTime();
	        var pAlloc = this._priorityAllocatedTimes[this._activePriority];
	        if (this.eventManager.useDeactivatedFrameRate)
	            pAlloc = pAlloc * this._deactivatedMaxComputationTimePerFrame / this.maxComputationTimePerFrame;
	        else if (!this.eventManager.userActivity)
	            pAlloc = pAlloc * this.maxComputationTimePerFrame_noActivity / this.maxComputationTimePerFrame;
	        var pStop = Math.min(allStop, pStart + pAlloc - this._activePriorityElapsedTime); // continue where we left off
	        queue = this._priorityCallLaterQueues[this._activePriority];
	        countdown = queue.length;
	        while (true) {
	            /*if (debug_callLater)
						DebugTimer.begin();*/

	            now = new Date().getTime();
	            if (countdown === 0 || now > pStop) {
	                // add the time we just spent on this priority
	                this._activePriorityElapsedTime += now - pStart;

	                // if max computation time was reached for this frame or we have visited all priorities, stop now
	                if (now > allStop || this._activePriority === lastPriority) {
	                    /*if (debug_callLater)
								DebugTimer.cancel();
							if (debug_fps)
								trace('spent',currentFrameElapsedTime,'ms');*/
	                    return;
	                }

	                // see if there are any entries left in the queues (except for the immediate queue)
	                var remaining = 0;
	                for (var i = minPriority; i < this._priorityCallLaterQueues.length; i++)
	                    remaining += this._priorityCallLaterQueues[i].length;
	                // stop if no more entries
	                if (remaining === 0) {
	                    /*if (debug_callLater)
								DebugTimer.cancel();*/
	                    break;
	                }

	                // switch to next priority, reset elapsed time
	                this._activePriority++;
	                this._activePriorityElapsedTime = 0;
	                if (this._activePriority === this._priorityCallLaterQueues.length)
	                    this._activePriority = minPriority;
	                pStart = now;
	                pAlloc = this._priorityAllocatedTimes[_activePriority];
	                if (this.eventManager.useDeactivatedFrameRate)
	                    pAlloc = pAlloc * this._deactivatedMaxComputationTimePerFrame / this.maxComputationTimePerFrame;
	                else if (!this.eventManager.userActivity)
	                    pAlloc = pAlloc * this.maxComputationTimePerFrame_noActivity / this.maxComputationTimePerFrame;
	                pStop = Math.min(allStop, pStart + pAlloc);
	                queue = this._priorityCallLaterQueues[this._activePriority];
	                countdown = queue.length;

	                // restart loop to check stopping condition
	                /*if (debug_callLater)
							DebugTimer.cancel();*/
	                continue;
	            }

	            countdown--;

	            //				trace('p',_activePriority,pElapsed,'/',pAlloc);
	            _currentTaskStopTime = pStop; // make sure _iterateTask knows when to stop

	            // call the next function in the queue
	            // args: (relevantContext:Object, method:Function, parameters:Array, priority:uint)
	            args = queue.shift();
	            stackTrace = this._stackTraceMap[args]; // check this for debugging where the call came from

	            //				WeaveAPI.SessionManager.unassignBusyTask(args);

	            // don't call the function if the relevantContext was disposed.
	            if (!WeaveAPI.SessionManager.objectWasDisposed(args[0])) {
	                // TODO: PROFILING: check how long this function takes to execute.
	                // if it takes a long time (> 1000 ms), something's wrong...
	                args2 = args[2];
	                if (args2 !== null && args2.length > 0)
	                    args[1].apply(null, args2);
	                else
	                    args[1].call();
	            }

	            /*if (debug_callLater)
						DebugTimer.end(stackTrace);*/
	        }

	    };

	    suP.addEventCallback = function (eventType, relevantContext, callback, runCallbackNow) {
	        // set default parameter value
	        if (runCallbackNow === null || runCallbackNow === undefined) {
	            runCallbackNow = false;
	        }
	        var cc = this.eventManager.callbackCollections[eventType];
	        if (cc !== null && cc !== undefined) {
	            cc.addImmediateCallback(relevantContext, callback, runCallbackNow);
	        } else {
	            console.log("(StageUtils) Unsupported event: ", eventType);
	        }
	    };



	    weavecore.StageUtils = new StageUtils();


	    function EventManager() {
	        Object.defineProperty(this, 'callbackCollections', {
	            value: {}
	        });
	        this.userActivity = 0; // greater than 0 when there was user activity since the last frame.
	        this.event = null;
	        this.eventTime = 0;
	        this.shiftKey = false;
	        this.altKey = false;
	        this.ctrlKey = false;
	        this.mouseButtonDown = false;

	        this.currentFrameStartTime = new Date().getTime(); // this is the result of getTimer() on the last ENTER_FRAME event.
	        this.previousFrameElapsedTime = 0; // this is the amount of time it took to process the previous frame.
	        this.pointClicked = false;
	        this.deactivated = true; // true when application is deactivated
	        this.useDeactivatedFrameRate = false;

	        this.triggeredThrottledMouseThisFrame = false; // set to false on enterFrame, set to true on throttled mouse move
	        this.nextThrottledMouseMoveTime = 0; // time threshold before triggering throttled mouse move again
	        this.throttledMouseMoveInterval = 100; // time threshold before triggering throttled mouse move again

	        // create a new callback collection for each type of event
	        for (var j = 0; j < EventCallbackCollection.eventTypes.length; j++) {
	            var type = EventCallbackCollection.eventTypes[j];
	            this.callbackCollections[type] = new EventCallbackCollection(this, type);
	            // this.callbackCollections[type] = WeaveAPI.SessionManager.registerDisposableChild(WeaveAPI.globalHashMap, new EventCallbackCollection(this, type));
	        }

	        //add event listeners
	        for (var eventtype in this.callbackCollections) {
	            this.callbackCollections[eventtype].listenToStage();
	        }
	        this.event;
	    }


	    weavecore.EventManager = EventManager;



	}());

	if (typeof window === 'undefined') {
	    this.weavecore = this.weavecore || {};
	} else {
	    window.weavecore = window.weavecore || {};
	}

	/**
	 * This class saves the session history of an ILinkableObject.
	 *
	 * @author adufilie
	 * @author sanjay1909
	 */
	(function () {

	    /**
	     * This is an entry in the session history log.  It contains both undo and redo session state diffs.
	     * The triggerDelay is the time it took for the user to make a change since the last synchronization.
	     * This time difference does not include the time it took to set the session state.  This way, when
	     * the session state is replayed at a reasonable speed regardless of the speed of the computer.
	     * @param id
	     * @param forward The diff for applying redo.
	     * @param backward The diff for applying undo.
	     * @param triggerDelay The length of time between the last synchronization and the diff.
	     */
	    function LogEntry(id, forward, backward, triggerDelay, diffDuration) {
	        this.id = id;
	        this.forward = forward; // the diff for applying redo
	        this.backward = backward; // the diff for applying undo
	        this.triggerDelay = triggerDelay; // the length of time between the last synchronization and the diff
	        this.diffDuration = diffDuration; // the length of time in which the diff took place
	    }

	    /**
	     * This will convert an Array of generic objects to an Array of LogEntry objects.
	     * Generic objects are easier to create backwards compatibility for.
	     */
	    LogEntry.convertGenericObjectsToLogEntries = function (array, defaultTriggerDelay) {
	        for (var i = 0; i < array.length; i++) {
	            var o = array[i];
	            if (!(o instanceof LogEntry))
	                array[i] = new LogEntry(o.id, o.forward, o.backward, o.triggerDelay || defaultTriggerDelay, o.diffDuration);
	        }
	        return array;
	    };


	    function getTimer() {
	        var start = new Date().getTime();
	        return start;
	    }

	    function SessionStateLog(subject, syncDelay) {
	        // set default values
	        if (syncDelay === undefined)
	            syncDelay = 0;
	        this._subject = subject; // the object we are monitoring
	        this._syncDelay = syncDelay; // the number of milliseconds to wait before automatically synchronizing
	        this._prevState = WeaveAPI.SessionManager.getSessionState(this._subject); // remember the initial state

	        /**
	         * When this is set to true, changes in the session state of the subject will be automatically logged.
	         */
	        SessionStateLog.prototype.enableLogging = WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableBoolean(true), this.synchronizeNow.bind(this));


	        WeaveAPI.SessionManager.registerDisposableChild(this._subject, this); // make sure this is disposed when _subject is disposed

	        var cc = WeaveAPI.SessionManager.getCallbackCollection(this._subject);
	        cc.addImmediateCallback(this, this._immediateCallback.bind(this));
	        cc.addGroupedCallback(this, this._groupedCallback.bind(this));

	        this._undoHistory = []; // diffs that can be undone
	        this._redoHistory = []; // diffs that can be redone
	        this._nextId = 0; // gets incremented each time a new diff is created
	        this._undoActive = false; // true while an undo operation is active
	        this._redoActive = false; // true while a redo operation is active

	        this._syncTime = getTimer(); // this is set to getTimer() when synchronization occurs
	        this._triggerDelay = -1; // this is set to (getTimer() - _syncTime) when immediate callbacks are triggered for the first time since the last synchronization occurred
	        this._saveTime = 0; // this is set to getTimer() + _syncDelay to determine when the next diff should be computed and logged
	        this._savePending = false; // true when a diff should be computed

	        Object.defineProperty(SessionStateLog, 'debug', {
	            value: true,
	            writable: true
	        });
	        Object.defineProperty(SessionStateLog, 'enableHistoryRewrite', {
	            value: true,
	            writable: true
	        });

	        /**
	         * @TODO create an interface for the objects in this Array
	         */
	        Object.defineProperty(this, 'undoHistory', {
	            get: function () {
	                return this._undoHistory;
	            }
	        });

	        /**
	         * @TODO create an interface for the objects in this Array
	         */
	        Object.defineProperty(this, 'redoHistory', {
	            get: function () {
	                return this._redoHistory;
	            }
	        });


	    }

	    SessionStateLog.prototype = new weavecore.LinkableVariable();
	    SessionStateLog.prototype.constructor = SessionStateLog;

	    var p = SessionStateLog.prototype;


	    /**
	     * @inheritDoc
	     */
	    p.dispose = function () {
	        if (this._undoHistory === null || this._undoHistory === undefined)
	            console.log("SessionStateLog.dispose() called more than once");

	        this._subject = null;
	        this._undoHistory = null;
	        this._redoHistory = null;
	    };

	    /**
	     * This function will save any pending diff in session state.
	     * Use this function only when necessary (for example, when writing a collaboration service that must synchronize).
	     */
	    p.synchronizeNow = function () {
	        this._saveDiff.call(this, true);
	    };



	    /**
	     * This gets called as an immediate callback of the subject.
	     */
	    p._immediateCallback = function () {
	        if (!this.enableLogging.value)
	            return;

	        // we have to wait until grouped callbacks are called before we save the diff
	        this._saveTime = Number.MAX_VALUE;

	        // make sure only one call to saveDiff() is pending
	        if (!this._savePending) {
	            this._savePending = true;
	            this._saveDiff.call(this);
	        }


	        if (SessionStateLog.debug && (this._undoActive || this._redoActive)) {
	            var state = WeaveAPI.SessionManager.getSessionState(this._subject);
	            var forwardDiff = WeaveAPI.SessionManager.computeDiff(this._prevState, state);
	            console.log('immediate diff:', forwardDiff);
	        }
	    };

	    /**
	     * This gets called as a grouped callback of the subject.
	     */
	    p._groupedCallback = function () {
	        if (!this.enableLogging.value)
	            return;

	        // Since grouped callbacks are currently running, it means something changed, so make sure the diff is saved.
	        this._immediateCallback();
	        // It is ok to save a diff some time after the last time grouped callbacks are called.
	        // If callbacks are triggered again before the next frame, the immediateCallback will reset this value.
	        this._saveTime = getTimer() + this._syncDelay;

	        if (SessionStateLog.debug && (this._undoActive || this._redoActive)) {
	            var state = WeaveAPI.SessionManager.getSessionState(this._subject);
	            var forwardDiff = WeaveAPI.SessionManager.computeDiff(this._prevState, state);
	            console.log('grouped diff:', forwardDiff);
	        }
	    };

	    /**
	     * This will save a diff in the history, if there is any.
	     * @param immediately Set to true if it should be saved immediately, or false if it can wait.
	     */
	    p._saveDiff = function (immediately) {
	        //console.log("save difference is called");
	        if (immediately === undefined) {
	            immediately = false;
	        }
	        if (!this.enableLogging.value) {
	            this._savePending = false;
	            return;
	        }

	        var currentTime = getTimer();

	        // remember how long it's been since the last synchronization
	        if (this._triggerDelay < 0)
	            this._triggerDelay = currentTime - this._rsyncTime;

	        if (!immediately && getTimer() < this._saveTime) {
	            // console.log("save difference is Paused");
	            // we have to wait until the next frame to save the diff because grouped callbacks haven't finished.
	            weavecore.StageUtils.callLater(this, this._saveDiff.bind(this));
	            return;
	        }

	        var cc = WeaveAPI.SessionManager.getCallbackCollection(this);
	        cc.delayCallbacks.call(cc);

	        // console.log("save difference is executed");

	        var state = WeaveAPI.SessionManager.getSessionState(this._subject);
	        var forwardDiff = WeaveAPI.SessionManager.computeDiff(this._prevState, state);
	        if (forwardDiff !== undefined) {
	            var diffDuration = currentTime - (this._rsyncTime + this._triggerDelay);
	            var backwardDiff = WeaveAPI.SessionManager.computeDiff(state, this._prevState);
	            var oldEntry;
	            var newEntry;
	            if (this._undoActive) {
	                // To prevent new undo history from being added as a result of applying an undo, overwrite first redo entry.
	                // Keep existing delay/duration.
	                oldEntry = this._redoHistory[0];
	                newEntry = new LogEntry(this._nextId++, backwardDiff, forwardDiff, oldEntry.triggerDelay, oldEntry.diffDuration);
	                if (this.enableHistoryRewrite) {
	                    this._redoHistory[0] = newEntry;
	                } else if (weavecore.StandardLib.compare(oldEntry.forward, newEntry.forward) !== 0) {
	                    this._redoHistory.unshift(newEntry);
	                }
	            } else {
	                newEntry = new LogEntry(this._nextId++, forwardDiff, backwardDiff, this._triggerDelay, diffDuration);
	                if (this._redoActive) {
	                    // To prevent new undo history from being added as a result of applying a redo, overwrite last undo entry.
	                    // Keep existing delay/duration.
	                    oldEntry = this._undoHistory.pop();
	                    newEntry.triggerDelay = oldEntry.triggerDelay;
	                    newEntry.diffDuration = oldEntry.diffDuration;

	                    if (!this.enableHistoryRewrite && weavecore.StandardLib.compare(oldEntry.forward, newEntry.forward) === 0)
	                        newEntry = oldEntry; // keep old entry
	                }
	                // save new undo entry
	                this._undoHistory.push(newEntry);
	            }

	            if (SessionStateLog.debug)
	                debugHistory.call(this, newEntry);

	            this._rsyncTime = currentTime; // remember when diff was saved
	            cc.triggerCallbacks.call(cc);
	        }

	        // always reset sync time after undo/redo even if there was no new diff
	        if (this._undoActive || this._redoActive)
	            this._rsyncTime = currentTime;
	        this._prevState = state;
	        this._undoActive = false;
	        this._redoActive = false;
	        this._savePending = false;
	        this._triggerDelay = -1;

	        cc.resumeCallbacks.call(cc);
	    };



	    /**
	     * This will undo a number of steps from the saved history.
	     * @param numberOfSteps The number of steps to undo.
	     */
	    p.undo = function (numberOfSteps) {
	        if (isNaN(numberOfSteps))
	            numberOfSteps = 1;
	        this.applyDiffs.call(this, -numberOfSteps);
	    };

	    /**
	     * This will redo a number of steps that have been previously undone.
	     * @param numberOfSteps The number of steps to redo.
	     */
	    p.redo = function (numberOfSteps) {
	        if (isNaN(numberOfSteps))
	            numberOfSteps = 1;
	        this.applyDiffs.call(this, numberOfSteps);
	    };

	    /**
	     * This will clear all undo and redo history.
	     * @param directional Zero will clear everything. Set this to -1 to clear all undos or 1 to clear all redos.
	     */
	    p.clearHistory = function (directional) {
	        if (directional === undefined) directional = 0;
	        var cc = WeaveAPI.SessionManager.getCallbackCollection(this);
	        cc.delayCallbacks();

	        this.synchronizeNow();

	        if (directional <= 0) {
	            if (this._undoHistory.length > 0)
	                cc.triggerCallbacks("Log: Clear History Undo > 0");
	            this._undoHistory.length = 0;
	        }
	        if (directional >= 0) {
	            if (this._redoHistory.length > 0)
	                cc.triggerCallbacks("Log: Clear History Redo > 0");
	            this._redoHistory.length = 0;
	        }

	        cc.resumeCallbacks();
	    };

	    /**
	     * This will apply a number of undo or redo steps.
	     * @param delta The number of steps to undo (negative) or redo (positive).
	     */
	    p.applyDiffs = function (delta) {
	        var stepsRemaining = Math.min(Math.abs(delta), delta < 0 ? this._undoHistory.length : this._redoHistory.length);
	        if (stepsRemaining > 0) {
	            var logEntry;
	            var diff;
	            var debug = SessionStateLog.debug && stepsRemaining === 1;

	            // if something changed and we're not currently undoing/redoing, save the diff now
	            if (this._savePending && !this._undoActive && !this._redoActive)
	                this.synchronizeNow();

	            var combine = stepsRemaining > 2;
	            var baseDiff = null;
	            WeaveAPI.SessionManager.getCallbackCollection(this._subject).delayCallbacks.call(this._subject);
	            // when logging is disabled, revert to previous state before applying diffs
	            if (!this.enableLogging.value) {
	                var state = WeaveAPI.SessionManager.getSessionState(this._subject);
	                // baseDiff becomes the change that needs to occur to get back to the previous state
	                baseDiff = WeaveAPI.SessionManager.computeDiff(state, this._prevState);
	                if (baseDiff !== null && baseDiff !== undefined)
	                    combine = true;
	            }
	            while (stepsRemaining-- > 0) {
	                if (delta < 0) {
	                    logEntry = this._undoHistory.pop();
	                    this._redoHistory.unshift(logEntry);
	                    diff = logEntry.backward;
	                } else {
	                    logEntry = this._redoHistory.shift();
	                    this._undoHistory.push(logEntry);
	                    diff = logEntry.forward;
	                }
	                if (debug)
	                    console.log('apply ' + (delta < 0 ? 'undo' : 'redo'), logEntry.id + ':', diff);

	                if (stepsRemaining === 0 && this.enableLogging.value) {
	                    // remember the session state right before applying the last step so we can rewrite the history if necessary
	                    this._prevState = WeaveAPI.SessionManager.getSessionState(this._subject);
	                }

	                if (combine) {
	                    baseDiff = WeaveAPI.SessionManager.combineDiff(baseDiff, diff);
	                    if (stepsRemaining <= 1) {
	                        WeaveAPI.SessionManager.setSessionState(this._subject, baseDiff, false);
	                        combine = false;
	                    }
	                } else {
	                    WeaveAPI.SessionManager.setSessionState(this._subject, diff, false);
	                }

	                if (debug) {
	                    var newState = WeaveAPI.SessionManager.getSessionState(this._subject);
	                    var resultDiff = WeaveAPI.SessionManager.computeDiff(this._prevState, newState);
	                    console.log('resulting diff:', resultDiff);
	                }
	            }

	            WeaveAPI.SessionManager.getCallbackCollection(this._subject).resumeCallbacks.call(this._subject);

	            this._undoActive = delta < 0 && this._savePending;
	            this._redoActive = delta > 0 && this._savePending;
	            if (!this._savePending) {
	                this._prevState = WeaveAPI.SessionManager.getSessionState(this._subject);
	            }
	            var slcc = WeaveAPI.SessionManager.getCallbackCollection(this);
	            slcc.triggerCallbacks.call(slcc);
	        }
	    };



	    function debugHistory(logEntry) {
	        var h = this._undoHistory.concat();
	        for (var i = 0; i < h.length; i++)
	            h[i] = h[i].id;
	        var f = this._redoHistory.concat();
	        for (i = 0; i < f.length; i++)
	            f[i] = f[i].id;
	        if (logEntry) {
	            console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
	            console.log('NEW HISTORY (backward) ' + logEntry.id + ':', logEntry.backward);
	            console.log("===============================================================");
	            console.log('NEW HISTORY (forward) ' + logEntry.id + ':', logEntry.forward);
	            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
	        }
	        console.log('undo [' + h + ']', 'redo [' + f + ']');
	    }

	    /**
	     * This will generate an untyped session state object that contains the session history log.
	     * @return An object containing the session history log.
	     */
	    p.getSessionState = function () {
	        var cc = WeaveAPI.SessionManager.getCallbackCollection(this);
	        cc.delayCallbacks();
	        this.synchronizeNow.call(this);

	        // The "version" property can be used to detect old session state formats and should be incremented whenever the format is changed.
	        var state = {
	            "version": 0,
	            "currentState": this._prevState,
	            "undoHistory": this._undoHistory.concat(),
	            "redoHistory": this._redoHistory.concat(),
	            "nextId": this._nextId
	                // not including enableLogging
	        };

	        cc.resumeCallbacks();
	        return state;
	    };

	    /**
	     * This will load a session state log from an untyped session state object.
	     * @param input The ByteArray containing the output from seralize().
	     */
	    p.setSessionState = function (state) {
	        // make sure callbacks only run once while we set the session state
	        var cc = WeaveAPI.SessionManager.getCallbackCollection(this);
	        cc.delayCallbacks();
	        this.enableLogging.delayCallbacks();
	        try {
	            var version = state.version;
	            switch (version) {
	            case 0:
	                {
	                    // note: some states from version 0 may include enableLogging, but here we ignore it
	                    this._prevState = state.currentState;
	                    this._undoHistory = LogEntry.convertGenericObjectsToLogEntries(state.undoHistory, this._syncDelay);
	                    this._redoHistory = LogEntry.convertGenericObjectsToLogEntries(state.redoHistory, this._syncDelay);
	                    this._nextId = state.nextId;

	                    break;
	                }
	            default:
	                console.log("Weave history format version " + version + " is unsupported.");
	            }

	            // reset these flags so nothing unexpected happens in later frames
	            this._undoActive = false;
	            this._redoActive = false;
	            this._savePending = false;
	            this._saveTime = 0;
	            this._triggerDelay = -1;
	            this._rsyncTime = getTimer();

	            WeaveAPI.SessionManager.setSessionState(this._subject, this._prevState);
	        } finally {
	            this.enableLogging.resumeCallbacks();
	            cc.triggerCallbacks("Log: Setsessionstate");
	            cc.resumeCallbacks();
	        }
	    };
	    weavecore.SessionStateLog = SessionStateLog;

	}());


/***/ }

/******/ });
