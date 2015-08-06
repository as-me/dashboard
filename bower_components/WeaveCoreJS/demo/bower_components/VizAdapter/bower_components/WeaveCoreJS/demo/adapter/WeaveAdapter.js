//namespace
if (!this.weaveAdapter)
    this.weaveAdapter = {};


(function () {
    function InteractionInterface() {}
    var p = InteractionInterface.prototype;
    /*
     *This function renders on the visualization library , which are hooked to it
     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
     */
    p.doSelection = function (keys) {};

    p.doProbe = function (key) {};

    weaveAdapter.InteractionInterface = InteractionInterface;

}());

(function () {
    function DataInterface() {}


    weaveAdapter.DataInterface = DataInterface;

}());
