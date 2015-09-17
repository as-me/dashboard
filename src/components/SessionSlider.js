import * as React from 'react';



class SessionSlider extends React.Component {
    constructor(props) {
        super(props)
        this.log = WeaveAPI.log = new weavecore.SessionStateLog(WeaveAPI.globalHashMap);

        this.state = {
            max: 1,
            value: 0
        };

        this._runLog = this._runLog.bind(this);
        this._setReactState = this._setReactState.bind(this);
    }

    _setReactState() {

        console.log('UpdateSlider State called');
        this.setState({
            max: this.log._undoHistory.length + this.log._redoHistory.length,
            value: this.log._undoHistory.length
        });
    }

    _runLog(e, value) {
        var delta = value - this.log.undoHistory.length;
        if (delta < 0)
            this.log.undo(-delta);
        else
            this.log.redo(delta);

    }

    componentDidMount() {
        var cc = WeaveAPI.SessionManager.getCallbackCollection(this.log);
        cc.addGroupedCallback(this, this._setReactState, true);
    }

    // Unbind change listener
    componentWillUnmount() {
        var cc = WeaveAPI.SessionManager.getCallbackCollection(this.log);
        cc.removeCallback(this._setReactState);
    }


    render() {

        console.log(this.state.max, this.state.value);
        return ( < input type = "range"
            min = {
                0
            }
            max = {
                this.state.max
            }
            value = {
                this.state.value
            }
            onInput = {
                this._runLog
            }
            / >

        );
    }
}

module.exports = SessionSlider;
