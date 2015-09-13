import React from 'react';
import C3ScatterPlot from './ScatterPlotUI';
import '../../session/ScatterPlot.js';
import 'weavecore';

//namesapce
if (typeof window === 'undefined') {
    this.adapter = this.adapter || {};
} else {
    window.adapter = window.adapter || {};
}

if (typeof window === 'undefined') {
    this.adapter.libs = this.adapter.libs || {};
} else {
    window.adapter.libs = window.adapter.libs || {};
}

if (typeof window === 'undefined') {
    this.adapter.libs.c3 = this.adapter.libs.c3 || {};
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
                value: React.createElement(C3ScatterPlot, {
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
    }


    //TO-DO: Find a way for class part of Modules
    // Need to save them global data in window object , as we need to create the object at runtime, we need namesapce
    // where as in module provide by webpack we can't get the constructor name.
    adapter.libs.c3.ScatterPlot = ScatterPlot;

}());
