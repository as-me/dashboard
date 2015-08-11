'use strict';

/*import { History} from 'react-router';*/
var Router = require('react-router');
var History = Router.History;
import WeaveCore from 'weavecore';

//var _listeners = [];


//namesapce
if (typeof window === 'undefined') {
    this.asme = this.asme || {};
} else {
    window.asme = window.asme || {};
}


(function () {
    "use strict";



    /**
     * Indicates a new location is being pushed to the history stack.
     */
    SessionedHashLocation.PUSH = 'push';

    /**
     * Indicates the current location should be replaced.
     */
    SessionedHashLocation.REPLACE = 'replace';

    /**
     * Indicates the most recent entry should be removed from the history stack.
     */
    SessionedHashLocation.POP = 'pop';



    // constructor:
    /**
     *
     * @class SessionedHashLocation
     * @constructor
     */
    function SessionedHashLocation() {
        this._isListening = false;
        this._actionType;

        Object.defineProperty(this, 'page', {
            value: WeaveAPI.globalHashMap.requestObject("page", weavecore.LinkableString)
        });
    }

    var p = SessionedHashLocation.prototype;

    p.ensureSlash = function () {
        var path = this.getCurrentPath();

        if (path.charAt(0) === '/') {
            return true;
        }
        replace('/' + path);

        return false;
    };

    p.onHashChange = function () {
        if (this.ensureSlash()) {
            if (this._actionType === SessionedHashLocation.PUSH) History.length += 1;
            this._actionType = null;
            this.page.value = this.getCurrentPath();
            // If we don't have an _actionType then all we know is the hash
            // changed. It was probably caused by the user clicking the Back
            // button, but may have also been the Forward button or manual
            // manipulation. So just guess 'pop'.
            // var curActionType = _actionType;
            // _actionType = null;
            // notifyChange(curActionType || SessionedHashLocation.POP);
        }
    };

    p.addChangeListener = function (listener) {
        //_listeners.push(listener);
        this.page.addImmediateCallback(this, listener);

        // Do this BEFORE listening for hashchange.
        this.ensureSlash();

        if (!this._isListening) {
            if (window.addEventListener) {
                window.addEventListener('hashchange', this.onHashChange.bind(this), false);
            } else {
                window.attachEvent('onhashchange', this.onHashChange.bind(this));
            }

            this._isListening = true;
        }
    };

    p.removeChangeListener = function (listener) {
        this.page.removeCallback(this, listener);

        if (this.page._callbackEntries.length === 0) {
            if (window.removeEventListener) {
                window.removeEventListener('hashchange', this.onHashChange.bind(this), false);
            } else {
                window.removeEvent('onhashchange', this.onHashChange.bind(this));
            }

            this._isListening = false;
        }
    };

    p.push = function (path) {
        this._actionType = SessionedHashLocation.PUSH;
        window.location.hash = path;
    };

    p.replace = function (path) {
        this._actionType = SessionedHashLocation.REPLACE;
        window.location.replace(window.location.pathname + window.location.search + '#' + path);
    };

    p.pop = function () {
        this._actionType = SessionedHashLocation.POP;
        History.back();
    };

    p.getCurrentPath = function () {
        return decodeURI(
            // We can't use window.location.hash here because it's not
            // consistent across browsers - Firefox will pre-decode it!
            window.location.href.split('#')[1] || '');
    };

    p.toString = function () {
        return '<SessionedHashLocation>';
    };

    asme.SessionedHashLocation = new SessionedHashLocation();
}());



/**
 * A Location that uses `window.location.hash`.
 */
/*var SessionedHashLocation = {

    _isListening: false,
    _actionType: undefined,

    ensureSlash: function ensureSlash() {
        var path = getCurrentPath();

        if (path.charAt(0) === '/') {
            return true;
        }
        replace('/' + path);

        return false;
    },

    hashChange: function onHashChange() {
        if (ensureSlash()) {
            if (_actionType === SessionedHashLocation.PUSH) History.length += 1;
            _actionType = null;
            asme.page.value = getCurrentPath();
            // If we don't have an _actionType then all we know is the hash
            // changed. It was probably caused by the user clicking the Back
            // button, but may have also been the Forward button or manual
            // manipulation. So just guess 'pop'.
            // var curActionType = _actionType;
            // _actionType = null;
            // notifyChange(curActionType || SessionedHashLocation.POP);
        }
    },

    addChangeListener: function addChangeListener(listener) {
        //_listeners.push(listener);
        asme.page.addImmediateCallback(this, listener);

        // Do this BEFORE listening for hashchange.
        ensureSlash();

        if (!_isListening) {
            if (window.addEventListener) {
                window.addEventListener('hashchange', onHashChange, false);
            } else {
                window.attachEvent('onhashchange', onHashChange);
            }

            _isListening = true;
        }
    },

    removeChangeListener: function removeChangeListener(listener) {
        asme.page.removeCallback(this, listener);

        if (asme.page._callbackEntries.length === 0) {
            if (window.removeEventListener) {
                window.removeEventListener('hashchange', onHashChange, false);
            } else {
                window.removeEvent('onhashchange', onHashChange);
            }

            _isListening = false;
        }
    },

    push: function push(path) {
        _actionType = SessionedHashLocation.PUSH;
        window.location.hash = path;
    },

    replace: function replace(path) {
        _actionType = SessionedHashLocation.REPLACE;
        window.location.replace(window.location.pathname + window.location.search + '#' + path);
    },

    pop: function pop() {
        _actionType = SessionedHashLocation.POP;
        History.back();
    },

    getCurrentPath: function getCurrentPath() {
        return decodeURI(
            // We can't use window.location.hash here because it's not
            // consistent across browsers - Firefox will pre-decode it!
            window.location.href.split('#')[1] || '');
    },

    toString: function toString() {
        return '<SessionedHashLocation>';
    }

};*/
