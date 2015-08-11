import React from 'react';
import WeaveCore from 'weavecore';
import mui from 'material-ui';


// Get mui Components
let ThemeManager = new mui.Styles.ThemeManager();
let Slider = mui.Slider;


export default class SessionSlider extends React.Component {

    constructor() {
        super();

        this.log = new weavecore.SessionStateLog(WeaveAPI.globalHashMap);
        this.state = {
            max: 1,
            value: 0
        };

        this._runLog = this._runLog.bind(this);
        this._setReactState = this._setReactState.bind(this);
    }

    getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
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
        return <Slider name = "sessionSlider"
        step = {
            1
        }
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
        / > ;
    }
}

SessionSlider.childContextTypes = {
  muiTheme: React.PropTypes.object
};
