//namespace
if (typeof window === 'undefined') {
    this.adapter.hook = this.adapter.hook || {};
} else {
    window.adapter.hook = window.adapter.hook || {};
}


(function () {
    function D3Interface(chart) {
        adapter.Interface.call(this);
        if (chart)
            this.chart = chart;
        this.dataSource;
    }

    D3Interface.prototype = new adapter.Interface();
    D3Interface.prototype.constructor = D3Interface;

    var p = D3Interface.prototype;

    p.setChart = function (chart) {
        this.chart = chart;
    }

    /*
     *This function renders on the visualization library , which are hooked to it
     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
     * @param columns: We need to give the the charts column ids like ['col1','col2']
     * @param chart: we need to give chart instance generated in c3
     */
    p.doSelection = function (keys) {
        if (!this.chart) {
            console.log('Hook a d3 chart First');
            return;
        }
        this.chart.select(keys);
    }

    p.doProbe = function (key) {
        if (!this.chart) {
            console.log('Hook a d3 chart First');
            return;
        }
        this.chart.probe(key);
    }

    p.setData = function (sourceName, data) {
        if (!this.chart) {
            console.log('Hook a d3 chart First');
            return;
        }
        this.dataSource = sourceName;
        this.chart.renderChart(data);
    }

    adapter.hook.D3Interface = D3Interface;

}());
