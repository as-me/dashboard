

import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import * as HumanAPIServices from '../../services/HumanAPIServices.js';
var HumanConnectSession = require('../../ExternalAPI/HumanConnectSession.js');
var Navbar = ReactBootstrap.Navbar;

export default class DataSource extends React.Component {

    constructor(props) {
        super(props)
        this.mql = window.matchMedia(`(min-width: 800px)`);
        this.state = {isDesktop: this.mql.matches};
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.clickListener = this.clickListener.bind(this);

        this.hc = WeaveAPI.globalHashMap.requestObject("humanConnect", HumanConnectSession);
        this._promise = WeaveAPI.SessionManager.registerLinkableChild(this.hc, new weavecore.LinkablePromise(this._getInfo.bind(this), this._describePromise.bind(this), false));

    }

    _describePromise () {
        console.log('Promise call initiated');
    }

    _getInfo(){
        if(this.hc.accessToken.value){
            var dataService = new HumanAPIServices.DataService('AsmeDataService');
            return dataService.getInfo(this.hc.accessToken.value);
        }
        else return null;
    }

    componentDidMount() {
        this.mql.addListener(this.mediaQueryChanged);
        this.setState({ isDesktop: this.mql.matches});
        this._promise.depend(this.hc.accessToken);
        WeaveAPI.SessionManager.getCallbackCollection(this._promise).addImmediateCallback(null,this._setReactState.bind(this));
    }

    componentWillUnmount() {
        this.mql.removeListener(this.mediaQueryChanged);
        WeaveAPI.SessionManager.getCallbackCollection(this._promise).removeCallback(this._setReactState.bind(this));
        this._promise.dispose();
    }

    _setReactState(){
        if(this._promise.result)
            console.log(this._promise.result);
        else
            console.log(this._promise.fault);

    }



    clickListener(e){
        this.hc.userID.value = "1909sanjay@gmail.com";
        var inst = this;
        var options = {
              modal :1,
              clientUserId: encodeURIComponent(this.hc.userID.value), // can be email
              clientId: '9f9e4c03e02ab9e4ac8f264e65005b77e962cf8d', // found in Developer Portal
              finish: function(err, sessionTokenObject) {
                console.log(sessionTokenObject);
                // callback that would be called after user finishes
                // connecting data.

                var auth = new HumanAPIServices.AuthService('AsmeServlet');

                var prom = auth.getToken(sessionTokenObject);
                prom.then(function(response){
                    inst.hc.humanID.value = response['humanId'];
                    inst.hc.publicToken.value = response['publicToken'];
                    inst.hc.accessToken.value = response['accessToken'];
                },function(error){
                    console.log('failed')
                });


              },
              close: function() {
                // optional callback that will be called if the user
                // closes the popup without connecting any data sources.
              },
              error: function(err) {
              console.log(err);
                // optional callback that will be called if an error occurs while
                // loading the popup.
                // `err` is an object with the fields: `code`, `message`, `detailedMessage`
              }
        }
        if(this.hc.publicToken.value){
            options.publicToken  = this.hc.publicToken.value
        }
        HumanConnect.open(options);
    }





    mediaQueryChanged() {
        this.setState({isDesktop: this.mql.matches});
    }

    render() {
        var title = this.state.isDesktop ?"Data Source":< span > < a href = "#home" > < i className = "fa fa-chevron-left" > < /i>

            Data Source < /a >< /span >;

    return <div className={this.state.isDesktop ?"desktop":""}>
        < Navbar brand = { title
        }
        />

        <img id='connect-health-data-btn' src='https://connect.humanapi.co/assets/button/blue.png' onClick ={this.clickListener}/></div>;
    }
}
