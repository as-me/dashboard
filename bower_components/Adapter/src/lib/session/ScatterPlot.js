import 'weavecore';

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

}());
