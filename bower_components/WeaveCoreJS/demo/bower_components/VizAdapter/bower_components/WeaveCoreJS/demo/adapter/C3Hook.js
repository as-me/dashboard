//namespace
if (!this.c3Hook)
    this.c3Hook = {};


(function () {
    function Interaction(chart) {
        weaveAdapter.InteractionInterface.call(this);
        this.chart = chart;
    }

    Interaction.prototype = new weaveAdapter.InteractionInterface();
    Interaction.prototype.constructor = Interaction;

    var p = Interaction.prototype;
    /*
     *This function renders on the visualization library , which are hooked to it
     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
     * @param columns: We need to give the the charts column ids like ['col1','col2']
     * @param chart: we need to give chart instance generated in c3
     */
    p.doSelection = function (keys) {

        if (keys !== undefined) {
            if (keys.constructor !== Array) console.log("Keys has to be an array ");
        } else console.log("keys(Array)  is required");

        if (keys.length > 0)
            this.chart.select(this.chart.columns, keys, true);
        else
            this.chart.unselect();
    }

    c3Hook.Interaction = Interaction;

}());
