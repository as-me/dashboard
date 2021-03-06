import * as React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

var Panel = ReactBootstrap.Panel;

var Button = ReactBootstrap.Button;
var Archive = require('../services/Archive.js');



class SessionSlider extends React.Component {
    constructor(props) {
        super(props)
        this.log = Archive.history;

        this.state = {
            max: 1,
            value: 0,
            open: this.props.open
        };

        this._runLog = this._runLog.bind(this);
        this._setReactState = this._setReactState.bind(this);
    }

    _setReactState() {
        console.log('Slider');
        this.setState({
            max: Archive.history._undoHistory.length + Archive.history._redoHistory.length,
            value: Archive.history._undoHistory.length
        });
    }

    _runLog(e, value) {
        var delta = e.target.value - Archive.history.undoHistory.length;
        if (delta < 0)
            this.log.undo(-delta);
        else
            this.log.redo(delta);

    }

    componentDidMount() {
        var cc = WeaveAPI.SessionManager.getCallbackCollection(Archive.history);
        cc.addImmediateCallback(this, this._setReactState, true);
    }

    // Unbind change listener
    componentWillUnmount() {
        var cc = WeaveAPI.SessionManager.getCallbackCollection(Archive.history);
        cc.removeCallback(this._setReactState);
    }


    render() {

        var options = [];
        for (var i = 0; i <= this.state.max; i++) {
            var option = < option key = {
                i
            } > {
                i
            } < /option>
            options.push(option);
        }

        return ( < div className = "slider" >


            < Button className = "sliderBtn"
            bsSize = "small"
            onClick = {
                () => this.setState({
                    open: !this.state.open
                })
            } > {
                this.state.open ? < i className = "fa fa-chevron-circle-down" > < /i>:< i className = "fa fa-chevron-circle-up" > < /i >
            } < /Button >



            < Panel collapsible expanded = {
                this.state.open
            } > < input type = "range"
            min = {
                0
            }
            max = {
                this.state.max
            }

            value = {
                this.state.value
            }
            onChange = {
                this._runLog
            }

            list = "steplist"

            > < datalist id = "steplist" > {
                options
            } < /datalist></input > < /Panel > < /div >

        );
    }
}

module.exports = SessionSlider;
