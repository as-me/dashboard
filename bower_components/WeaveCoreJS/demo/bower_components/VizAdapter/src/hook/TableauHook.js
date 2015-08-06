//namespace
if (!this.hook)
    this.hook = {};


(function () {


    function TableauInterface(chart) {
        adapter.Interface.call(this);
        this.chart = chart;
        this.recordIdentifier;
        this.markObjects = {};


    }

    TableauInterface.prototype = new adapter.Interface();
    TableauInterface.prototype.constructor = TableauInterface;




    var p = TableauInterface.prototype;
    /*
     *This function renders on the visualization library , which are hooked to it
     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
     * @param columns: We need to give the the charts column ids like ['col1','col2']
     * @param chart: we need to give chart instance generated in c3
     */
    p.doSelection = function (keys) {
        //keys --> fieldname,Value
        console.log("keys from Peer: ", keys);
        if (keys.length > 0) {
            var values = [];
            for (var i = 0; i < keys.length; i++) {
                var mark = this.markObjects[keys[i]];
                values.push(mark);
            }
            this.chart.getWorkbook().getActiveSheet().selectMarksAsync(
                values,
                tableauSoftware.SelectionUpdateType.REPLACE);
        } else {

            this.chart.getWorkbook().getActiveSheet().clearSelectedMarksAsync();
        }
    }

    hook.TableauInterface = TableauInterface;

}());
