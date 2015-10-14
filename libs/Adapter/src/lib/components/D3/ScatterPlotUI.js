import "d3chart";
import React from 'react';

class D3ScatterPlot extends React.Component {
    constructor(props) {
        super(props);
        this.sessionData = props.sessionData;
        this.hook = props.hook;
        this.state = this.sessionData.getSessionStateValue();
        this.initialize = this.initialize.bind(this);
        this._setReactState = this._setReactState.bind(this);
    }



    initialize() {
        var _dataSourcePath = this.state.dataSourcePath;
        //since key wasnt mentioned here it creates index column and name index as key column name
        if (_dataSourcePath && _dataSourcePath.length > 0) {
            var config = {
                container: React.findDOMNode(this),
                margin: this.props.padding ? this.props.padding : {},
                size: this.props.size ? this.props.size : {},
                interactions: {
                    onProbe: this.props.onProbe,
                    onSelect: this.props.onSelect
                }
            }
            this.hook.chart = new d3Chart.Scatterplot();
            this.hook.chart.create(config);
            var path = this.state.dataSourcePath;
            var rows = WeaveAPI.SessionManager.getObject(WeaveAPI.globalHashMap, path).data.getSessionState();
            var data = {
                columns: {
                    x: this.state.xAxis,
                    y: this.state.yAxis

                },
                records: rows
            };
            console.log('d3', rows);
            this.hook.chart.renderChart(data);


        } else {
            console.warn("No data");
        }
    }

    //tied with d3 creation
    componentDidMount() {
        this.initialize();
        // make sure data update is called last , so that x and y axis property will be ready by then.
        WeaveAPI.SessionManager.getCallbackCollection(this.sessionData).addGroupedCallback(this, this._setReactState, true);
    }


    _setReactState() {
        if (!this.hook.chart) {
            this.initialize();
        }
        this.setState(this.sessionData.getSessionStateValue());
    }

    //tied with d3 update
    componentDidUpdate(prevProps, prevState) {
        if (this.hook.chart) {
            var path = this.state.dataSourcePath;
            var rows = WeaveAPI.SessionManager.getObject(WeaveAPI.globalHashMap, path).data.getSessionState();
            var data = {
                columns: {
                    x: this.state.xAxis,
                    y: this.state.yAxis

                },
                records: rows
            };
            this.hook.chart.renderChart(data);
        }

    }

    //tied with d3 destruction
    componentWillUnmount() {
        WeaveAPI.SessionManager.getCallbackCollection(this.sessionData).removeCallback(this._setReactState);
    }

    render() {
        var _dataSourcePath = this.state.dataSourcePath;
        if (_dataSourcePath && _dataSourcePath.length > 0) {
            return <div className = 'Chart' > < /div>;
        } else {
            return <div className = 'Chart' > < h2 > {
                this.sessionData.dataSourceName
            }
            dont have data < /h2> < /div > ;
        }
    }

}

module.exports = D3ScatterPlot;
