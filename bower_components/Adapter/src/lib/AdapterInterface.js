//namespace
if (typeof window === 'undefined') {
    this.adapter = this.adapter || {};
} else {
    window.adapter = window.adapter || {};
}


(function () {
    function Interface() {}
    var p = Interface.prototype;
    /*
     *This function renders on the visualization library , which are hooked to it
     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
     */
    p.doSelection = function (keys) {
        console.log('this hook doesnt have Selection API')
    };

    p.doProbe = function (key) {
        console.log('this hook doesnt have Probe API')
    };

    p.setData = function () {};
    p.getData = function () {};

    adapter.Interface = Interface;

}());
