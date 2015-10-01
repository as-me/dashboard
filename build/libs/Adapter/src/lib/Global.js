require("weavecore");

//namesapce
if (typeof window === 'undefined') {
    this.adapter = this.adapter || {};
} else {
    window.adapter = window.adapter || {};
}


if (typeof window === 'undefined') {
    this.adapter.session = this.adapter.session || {};
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
    }

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

}());
