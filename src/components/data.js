/**
 * @module asme
 */
import WeaveCore from 'weavecore';

//namesapce
if (typeof window === 'undefined') {
    this.asme = this.asme || {};
} else {
    window.asme = window.asme || {};
}


(function () {
    "use strict";

    // constructor:
    /**
     *
     * @class NavBarData
     * @constructor
     */

    function NavBarData() {
        /**
         * @private
         * @property _localHM
         * @type weavecore.LinkableHashMap
         **/
        this._localHM = WeaveAPI.globalHashMap.requestObject("NavBar", weavecore.LinkableHashMap);



        /**
         * @public
         * @property localHashMap
         * @readOnly
         * @type weavecore.LinkableHashMap
         */
        Object.defineProperty(this, 'localHashMap', {
            value: this._localHM
        });

        /**
         * @public
         * @property page
         * @readOnly
         * @type weavecore.LinkableString
         */
        Object.defineProperty(this, 'page', {
            value: this._localHM.requestObject("page", weavecore.LinkableString)
        });

    }

    // Prototypes
    var p = NavBarData.prototype;

    // public methods:
    /**
     * @method getSessionStateValue
     * @return {Object}
     */
    p.getSessionStateValue = function () {
        var pageValue = this.page.value;
        return {
            'page': pageValue
        };

    };

    asme.navBarData = new NavBarData();

}());
