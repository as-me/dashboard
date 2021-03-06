import * as React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

var Modal = ReactBootstrap.Modal;
var Button = ReactBootstrap.Button;



class LogIn extends React.Component {
    constructor(props) {
        super(props)

        this._closePanel = this._closePanel.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.user = WeaveAPI.globalHashMap.requestObject("user", Asme.User);

        this.state = {
            showModal: true
        }
    }

    componentDidMount() {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '1911709119054983',
                cookie: true, // enable cookies to allow the server to access
                // the session
                xfbml: true, // parse social plugins on this page
                version: 'v2.1' // use version 2.1
            });

            // Now that we've initialized the JavaScript SDK, we call
            // FB.getLoginStatus().  This function gets the state of the
            // person visiting this page and can return one of three states to
            // the callback you provide.  They can be:
            //
            // 1. Logged into your app ('connected')
            // 2. Logged into Facebook, but not your app ('not_authorized')
            // 3. Not logged into Facebook and can't tell if they are logged into
            //    your app or not.
            //
            // These three cases are handled in the callback function.
            FB.getLoginStatus(function (response) {
                this.statusChangeCallback(response);
            }.bind(this));

        }.bind(this);

        // Load the SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.
    getInfo() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function (response) {
            console.log(response);
            this.user.name.value = response.name;
            this.user.logged.value = true;

            console.log('Successful login for: ' + response.name);

        }.bind(this));

        FB.api('/me/picture', function (response) {
            console.log('Picture:', response);
            this.user.profilePic.value = response.data.url;
        }.bind(this));
    }

    // This is called with the results from from FB.getLoginStatus().
    statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {

            // Logged into your app and Facebook.
            this.getInfo();
        } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            document.getElementById('status').innerHTML = 'Please log ' +
                'into this app.';
        } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            document.getElementById('status').innerHTML = 'Please log ' +
                'into Facebook.';
        }
    }

    // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    checkLoginState() {
        FB.getLoginStatus(function (response) {
            this.statusChangeCallback(response);
        }.bind(this));
    }

    handleClick() {
        FB.login(this.checkLoginState());
    }

    componentDidUpdate(prevProps, prevState) {


    }

    _closePanel() {
        this.setState({
            showModal: false
        });
    }



    componentWillUnmount() {}
    render() {
        return ( < Modal show = {
                this.state.showModal
            }
            onHide = {
                this._closePanel
            } >
            < Modal.Header closeButton >
            < Modal.Title > As~Me < /Modal.Title> < /Modal.Header >
            < Modal.Body > { < a href = "#"
                onClick = {
                    this.handleClick
                } > Login < /a>
            } < /Modal.Body>< /Modal >

        );
    }
}

module.exports = LogIn;
