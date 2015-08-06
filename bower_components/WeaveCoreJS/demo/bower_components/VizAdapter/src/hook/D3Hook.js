//namespace
if (!this.hook)
    this.hook = {};


(function () {
    function D3Interface(chart) {
        adapter.Interface.call(this);
        this.chart = chart;
        this.dataSource;
    }

    D3Interface.prototype = new adapter.Interface();
    D3Interface.prototype.constructor = D3Interface;

    var p = D3Interface.prototype;
    /*
     *This function renders on the visualization library , which are hooked to it
     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
     * @param columns: We need to give the the charts column ids like ['col1','col2']
     * @param chart: we need to give chart instance generated in c3
     */
    p.doSelection = function (keys) {
        this.chart.select(keys);
    }

    p.doProbe = function (key) {
        this.chart.probe(key);
    }

    p.setData = function (sourceName, data) {
        this.dataSource = sourceName;
        this.chart.renderChart(data);
    }

    hook.D3Interface = D3Interface;

}());
