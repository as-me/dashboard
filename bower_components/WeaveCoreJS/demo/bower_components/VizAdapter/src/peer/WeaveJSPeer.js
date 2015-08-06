//namespace
if (!this.peer)
    this.peer = {};



(function () {
    //static Declaration
    // set Probe and Selection keys
    Object.defineProperty(WeaveJSInterface, 'probeKeys', {
        value: WeaveAPI.globalHashMap.requestObject('probeKeys', weavecore.LinkableVariable, false)
    });

    Object.defineProperty(WeaveJSInterface, 'selectionKeys', {
        value: WeaveAPI.globalHashMap.requestObject('selectionKeys', weavecore.LinkableVariable, false)
    });

    //constructor
    function WeaveJSInterface() {
        adapter.Interface.call(this);
        this.hooks = [];
        this.activeHook = null;
        WeaveJSInterface.selectionKeys.addImmediateCallback({}, renderSelection.bind(this));
        WeaveJSInterface.probeKeys.addImmediateCallback({}, renderProbe.bind(this));
    }



    WeaveJSInterface.prototype = new adapter.Interface();
    WeaveJSInterface.prototype.constructor = WeaveJSInterface;

    function renderSelection() {
        var keys = WeaveJSInterface.selectionKeys.getSessionState();
        this.hooks.forEach(function (hook, index) {
            if (hook != this.activehook)
                hook.doSelection(keys);
            else
                this.activehook = null;
        });
    }

    function renderProbe() {
        var key = WeaveJSInterface.probeKeys.getSessionState();
        this.hooks.forEach(function (hook, index) {
            if (hook != this.activehook)
                hook.doProbe(key);
            else
                this.activehook = null;
        });
    }

    var p = WeaveJSInterface.prototype;
    /*
     *This function renders on the visualization library , which are hooked to it
     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
     */
    p.doSelection = function (keys) {
        WeaveJSInterface.selectionKeys.setSessionState(keys);
    }

    p.doProbe = function (key) {
        WeaveJSInterface.probeKeys.setSessionState(key);
    }

    peer.WeaveJSInterface = WeaveJSInterface;

}());
