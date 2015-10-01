import "d3chart";
import React from 'react';


class VisTool extends React.Component {
    constructor() {
        super();
        this._setReactState = this._setReactState.bind(this);

        Object.defineProperty(this, 'sessionable', {
            value: true
        });

        _initializeSessionData();

    }

    _initializeSessionData() {
        Object.defineProperty(this, 'top', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableNumber(4))
        });
        Object.defineProperty(this, 'bottom', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableHashMap(4))
        });
        Object.defineProperty(this, 'right', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableNumber(4))
        });
        Object.defineProperty(this, 'left', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableHashMap(4))
        });

        Object.defineProperty(this, 'width', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableNumber(400))
        });
        Object.defineProperty(this, 'height', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableHashMap(400))
        });

    }

    //tied with d3 creation
    componentDidMount() {
        var config = {
            container: React.findDOMNode(this),
            margin: {
                top: this.props.top,
                bottom: this.props.bottom,
                left: this.props.left,
                right: this.props.right
            },
            size: {
                width: this.props.width,
                height: this.props.height
            },
            columns: {
                x: "name",
                y: "protein",
                key: "name"
            }
        }


    }

    //tied with d3 update
    componentDidUpdate(prevProps, prevState) {
        console.log(adapter.sessionData.GlobalData.getData());
        adapter.sessionData.scatterPlotData.chart.renderChart(adapter.sessionData.GlobalData.getData());
        adapter.sessionData.scatterPlotData.chart.setXAttribute(adapter.sessionData.scatterPlotData.xAxis.value);
        adapter.sessionData.scatterPlotData.chart.setYAttribute(adapter.sessionData.scatterPlotData.yAxis.value);
    }

    //tied with d3 destruction
    componentWillUnmount() {
        adapter.sessionData.scatterPlotData.xAxis.removeCallback(this._setReactState);
        adapter.sessionData.scatterPlotData.yAxis.removeCallback(this._setReactState);
    }

    _setReactState() {
        //TO-DO: check whether column Name is Part of the data Source
        console.log('Scatterplot Callback:', adapter.sessionData.scatterPlotData.getSessionStateValue());

        this.setState(adapter.sessionData.scatterPlotData.getSessionStateValue());
    }

    render() {
        return <div className = 'VisTool' > < /div>;
    }

}

module.exports = ScatterPlot;
