import "d3chart";
import React from 'react';



class D3ScatterPlot extends React.Component {
    constructor(props) {
        super(props);
        this.sessionData = props.sessionData;
        this.chart = props.chart;
        this._setReactState = this._setReactState.bind(this);
    }

    //tied with d3 creation
    componentDidMount() {
        var config = {
            container: React.findDOMNode(this),
            margin: this.props.padding ? this.props.padding : {},
            size: this.props.size ? this.props.size : {},
            columns: {
                x: this.sessionData.xAxis.value,
                y: this.sessionData.yAxis.value,
                key: "index"
            },
            interactions: {
                onProbe: this.props.onProbe,
                onSelect: this.props.onSelect
            }
        }

        var data = WeaveAPI.globalHashMap.getObject('dataSource').getSessionState();
        WeaveAPI.globalHashMap.getObject('dataSource').addGroupedCallback(this, this._setReactState);
        console.log(this, this.props);
        this.sessionData.chart = new d3Chart.Scatterplot();
        this.props.hook.setChart(this.sessionData.chart);

        this.sessionData.chart.create(config);
        this.sessionData.chart.renderChart(data);
        this.sessionData.xAxis.addGroupedCallback(this, this._setReactState);
        this.sessionData.yAxis.addGroupedCallback(this, this._setReactState);


    }

    //tied with d3 update
    componentDidUpdate(prevProps, prevState) {
        //var data = WeaveAPI.globalHashMap.getObject('dataSource').getSessionState();
        //this.sessionData.chart.renderChart(data);
        this.sessionData.chart.setXAttribute(this.sessionData.xAxis.value);
        this.sessionData.chart.setYAttribute(this.sessionData.yAxis.value);
    }

    //tied with d3 destruction
    componentWillUnmount() {
        this.sessionData.xAxis.removeCallback(this._setReactState);
        this.sessionData.yAxis.removeCallback(this._setReactState);
        WeaveAPI.globalHashMap.getObject('dataSource').removeCallback(this._setReactState);
    }


    _setReactState() {
        //this wil call render function which in turn calls componentDidUpdate
        this.setState(this.sessionData.getSessionStateValue());
    }

    render() {
        return <div className = 'Chart' > < /div>;
    }

}

module.exports = D3ScatterPlot;
