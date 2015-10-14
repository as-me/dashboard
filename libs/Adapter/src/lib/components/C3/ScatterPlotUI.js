import c3 from 'c3';
import React from 'react';



class C3ScatterPlot extends React.Component {
    constructor(props) {
        super(props);
        this.sessionData = props.sessionData;
        this.hook = props.hook;
        this.state = this.sessionData.getSessionStateValue();
        this.initialize = this.initialize.bind(this);
        this._setReactState = this._setReactState.bind(this);

        this.getColumns = this.getColumns.bind(this);
    }



    initialize() {
        var chartUI = this;
        var _dataSourcePath = this.state.dataSourcePath;
        if (_dataSourcePath && _dataSourcePath.length > 0) {
            //data.x data.y are ids - so make it x and y
            //unlike d3 c3 wont le tyou to load all data, it converts data specifed in columns to array fo json data style
            //so its important to set hide to keycolumnName which hleps in retrieving the the seleted data

            var config = {
                bindto: React.findDOMNode(this),
                padding: this.props.padding ? this.props.padding : {},
                size: this.props.size ? this.props.size : {},
                data: {
                    x: 'x',
                    y: 'y',
                    columns: [],
                    type: 'scatter',
                    selection: {
                        enabled: true,
                        multiple: true,
                        draggable: true

                    },
                    onselected: function () {
                        var selectedPoints = this.selected();
                        //console.log('From c3 Selection selectedPoints Key', selectedPoints);
                        if (selectedPoints.constructor === Array) {
                            var keys = selectedPoints.map(function (point) {
                                    return chartUI.hook.chart.yIndexToKeyColumn[point['index']];
                                })
                                //console.log('From c3 Selection Multiple Key', keys);
                            chartUI.props.onSelect.callback.call(this, keys);

                        } else {
                            //console.log('From c3 Selection Single Key', chartUI.hook.chart.yIndexToKeyColumn[selectedPoints['index']])
                            chartUI.props.onSelect.callback.call(this, chartUI.hook.chart.yIndexToKeyColumn[selectedPoints['index']]);
                        }


                    },
                    onmouseover: function (point) {
                        //console.log('From c3 Probe Key', chartUI.hook.chart.yIndexToKeyColumn[point['index']])
                        chartUI.props.onProbe.callback.call(this, chartUI.hook.chart.yIndexToKeyColumn[point['index']]);
                    }
                },
                axis: {
                    x: {
                        label: this.state.xAxis,
                        tick: {
                            fit: false
                        }
                    },
                    y: {
                        label: this.state.yAxis
                    }
                },
                onmouseout: function () {
                    WeaveAPI.globalHashMap.getObject('selectionKeys').setSessionState([]);
                },
                legend: {
                    show: false
                }

            }
            this.hook.chart = c3.generate(config);
            var records = this.getColumns(this.state.xAxis, this.state.yAxis);
            this.hook.chart.load({
                columns: records
            });
        } else {
            console.warn("No Data Found");
        }
    }

    //tied with d3 creation
    componentDidMount() {
        this.initialize();
        WeaveAPI.SessionManager.getCallbackCollection(this.sessionData).addGroupedCallback(this, this._setReactState, true);

    }


    _setReactState() {
        if (!this.hook.chart) {
            this.initialize();
        }
        this.setState(this.sessionData.getSessionStateValue());
    }

    getColumns(xColumnName, yColumnName) {
        this.hook.chart.keyColumnToYIndex = {}
        this.hook.chart.yIndexToKeyColumn = {}
        var path = this.state.dataSourcePath;
        var data = WeaveAPI.SessionManager.getObject(WeaveAPI.globalHashMap, path).data.getSessionState();
        var createIndex = false;
        if (!data[0].hasOwnProperty('index')) {
            console.warn("Its a good practise to set key column. failing to do so, will create a index as key column");
            createIndex = true;
        }

        var columns = [[], []];
        var keyCol = this.sessionData.keyColumn.value = this.sessionData.keyColumn.value ? this.sessionData.keyColumn.value : 'index';
        console.log('Key Column:', keyCol);
        columns[0].push('x');
        columns[1].push('y');
        // in c3 index value is mapped with Y axis value
        // So map our keycolumn value with Y index which aids in exact selection and probing
        data.forEach(function (object, i) {
            if (createIndex) object['index'] = i;
            if (typeof (object[xColumnName]) === 'string') {
                if (isNaN(Number(object[xColumnName]))) {
                    columns[0].push(object['index']);
                } else {
                    columns[0].push(Number(object[xColumnName]));
                }
            } else {
                columns[0].push(object[xColumnName]);
            }
            if (typeof (object[yColumnName]) === 'string') {
                if (isNaN(Number(object[yColumnName]))) {
                    columns[1].push(object['index']);
                } else {
                    columns[1].push(Number(object[yColumnName]));
                }
            } else {
                columns[1].push(object[yColumnName]);
            }
            this.hook.chart.keyColumnToYIndex[object[keyCol]] = i;
            this.hook.chart.yIndexToKeyColumn[i] = object[keyCol];
        }.bind(this));
        console.log(columns);
        return columns;
    }

    //tied with d3 update
    componentDidUpdate(prevProps, prevState) {
        if (this.hook.chart) {
            this.hook.chart.axis.labels({
                x: this.state.xAxis,
                y: this.state.yAxis
            });
            var columns = this.getColumns(this.state.xAxis, this.state.yAxis);
            this.hook.chart.load({
                columns: columns
            });
        }

    }

    //tied with d3 destruction
    componentWillUnmount() {
        WeaveAPI.SessionManager.getCallbackCollection(this.sessionData).removeCallback(this._setReactState);
    }

    render() {
        var _target = this.sessionData.dataSourceWatcher.target;
        if (_target) {
            return <div className = 'Chart' > < /div>;
        } else {
            return <div className = 'Chart' > < h2 > No Data < /h2> < /div > ;
        }
    }

}

module.exports = C3ScatterPlot;
