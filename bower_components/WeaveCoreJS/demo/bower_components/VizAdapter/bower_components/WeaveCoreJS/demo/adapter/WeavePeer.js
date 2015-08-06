//namespace
if (!this.weavePeer)
    this.weavePeer = {};




(function () {
    //static Declaration
    // set Probe and Selection keys
    Object.defineProperty(Interaction, 'probeKeys', {
        value: WeaveAPI.globalHashMap.requestObject('probeKeys', weavecore.LinkableVariable, false)
    });

    Object.defineProperty(Interaction, 'selectionKeys', {
        value: WeaveAPI.globalHashMap.requestObject('selectionKeys', weavecore.LinkableVariable, false)
    });

    //constructor
    function Interaction() {
        weaveAdapter.InteractionInterface.call(this);
        this.hooks = [];
        this.activeHook = null;
        Interaction.selectionKeys.addImmediateCallback({}, renderSelection.bind(this));
        Interaction.probeKeys.addImmediateCallback({}, renderProbe.bind(this));
    }



    Interaction.prototype = new weaveAdapter.InteractionInterface();
    Interaction.prototype.constructor = Interaction;

    function renderSelection() {
        var keys = Interaction.selectionKeys.getSessionState();
        this.hooks.forEach(function (hook, index) {
            if (hook != this.activehook)
                hook.doSelection(keys);
            else
                this.activehook = null;
        });
    }

    function renderProbe() {
        var key = Interaction.probeKeys.getSessionState();
        this.hooks.forEach(function (hook, index) {
            if (hook != this.activehook)
                hook.doProbe(key);
            else
                this.activehook = null;
        });
    }

    var p = Interaction.prototype;
    /*
     *This function renders on the visualization library , which are hooked to it
     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
     */
    p.doSelection = function (keys) {
        Interaction.selectionKeys.setSessionState(keys);
    }

    p.doProbe = function (key) {
        Interaction.probeKeys.setSessionState(key);
    }

    weavePeer.Interaction = Interaction;

}());
