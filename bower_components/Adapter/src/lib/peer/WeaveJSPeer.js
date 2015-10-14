/**
 * @module adapter.peer
 */

require('weavecore');
import '../session/DataSource.js';

//namespace
if (typeof window === 'undefined') {
    this.adapter.peer = this.adapter.peer || {};
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

        Object.defineProperty(this, 'dataSources', {
            value: WeaveAPI.globalHashMap.requestObject('dataSources', weavecore.LinkableHashMap, false)
        });

        this.selectionKeys.setSessionState([]);
        this.probeKeys.setSessionState(null);

        this.selectionKeys.addImmediateCallback(this, renderSelection.bind(this));
        this.probeKeys.addImmediateCallback(this, renderProbe.bind(this));

        this.hooks.childListCallbacks.addImmediateCallback(this, updateDataSource.bind(this));
    }



    WeaveJSInterface.prototype = new adapter.Interface();
    WeaveJSInterface.prototype.constructor = WeaveJSInterface;

    function renderSelection() {
        var keys = this.selectionKeys.getSessionState();
        console.log(keys);
        var hookedTools = this.hooks.getObjects();
        hookedTools.forEach(function (tool, index) {
            if (tool.hook.chart !== this.activeHook) {
                console.log(tool.hook, keys);
                tool.hook.doSelection(keys);
            }

        }.bind(this));
        this.activeHook = null;
    }

    function renderProbe() {
        var key = this.probeKeys.getSessionState();
        var hookedTools = this.hooks.getObjects();
        hookedTools.forEach(function (tool, index) {
            if (tool.hook.chart != this.activeHook)
                tool.hook.doProbe(key);
        }.bind(this));
        this.activeHook = null;
    }

    function updateDataSource() {
        if (this.hooks.childListCallbacks.lastObjectAdded) {
            var addedTool = this.hooks.childListCallbacks.lastObjectAdded;
            addedTool.sessionData.dataSourceWatcher.targetPath = WeaveAPI.SessionManager.getPath(WeaveAPI.globalHashMap, this.dataSources.getObject(this.dataSources.getNames()[0]));
        }
        if (this.hooks.childListCallbacks.lastObjectRemoved) {
            var removedTool = this.hooks.childListCallbacks.lastObjectRemoved;
            removedTool.sessionData.dataSourceWatcher.dispose();
            WeaveAPI.SessionManager.disposeObject(removedTool.sessionData);
            WeaveAPI.SessionManager.disposeObject(removedTool);
        }
    }

    var p = WeaveJSInterface.prototype;

    /**
     * This function renders on the visualization library , which are hooked to it
     * @method doSelection
     * @param {Array} keys We need to give the index value or Keys associated with that record [0,3,5].
     */
    p.doSelection = function (keys) {
        keys = keys.length > 0 ? keys : [];
        this.selectionKeys.setSessionState(keys);
    }

    /**
     * This function renders on the visualization library , which are hooked to it
     * @method doProbe
     * @param {Object} key We need to give the index value or Key associated with that record.
     */
    p.doProbe = function (key) {
        key = key !== undefined ? key : null;
        this.probeKeys.setSessionState(key);
    }


    /**
     * This function request for hook which is either instance of IlinkableObject or has sessionable property value true
     * @method requestHook
     * @param {String} name to identify the object in session state
     * @param {Class} classDefn sessionable Object
     * @return {Object} Mostly DOM element which is wrapped with sessionable propert
     */
    p.requestHook = function (name, classDefn) {
        return this.hooks.requestObject(name, classDefn, false);
    }

    /**
     * This function request for hook which is either instance of IlinkableObject or has sessionable property value true
     * @method requestHook
     * @param {String} name to identify the object in session state
     * @param {Object} classDefn sessionable Object
     * @return {Object} Mostly DOM element which is wrapped with sessionable propert
     */
    p.removeHook = function (name) {
        return this.hooks.removeObject(name);
    }



    /**
     * This function request for hook which is either instance of IlinkableObject or has sessionable property value true
     * @method requestHook
     * @param {String} name to identify the object in session state
     * @param {Class} classDefn sessionable Object
     * @return {Object} Mostly DOM element which is wrapped with sessionable propert
     */
    p.requestDataSource = function (name, classDefn) {
        return this.dataSources.requestObject(name, classDefn, false);
    }

    /**
     * This function request for hook which is either instance of IlinkableObject or has sessionable property value true
     * @method requestHook
     * @param {String} name to identify the object in session state
     * @param {Object} classDefn sessionable Object
     * @return {Object} Mostly DOM element which is wrapped with sessionable propert
     */
    p.removeDataSource = function (name) {
        return this.dataSources.removeObject(name);
    }

    // p.register



    adapter.peer.WeaveJSInterface = WeaveJSInterface;

}());
