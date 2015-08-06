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
