var HumanAPIServices = require('../services/HumanAPIServices.js');
var APIDataSource = require('./APIDataSource.js');

(function () {
    Object.defineProperty(HumanAPIDataSource, 'NS', {
        value: 'Asme'
    });

    Object.defineProperty(HumanAPIDataSource, 'CLASS_NAME', {
        value: 'HumanAPIDataSource'
    });

    function HumanAPIDataSource() {

        APIDataSource.call(this);



        Object.defineProperty(this, 'name', {
            value: 'Human API'
        });

        Object.defineProperty(this, 'companyUrl', {
            value: 'https://www.humanapi.co/'
        });

        Object.defineProperty(this, 'logoUrl', {
            value: 'images/HumanAPI.png'
        });

        Object.defineProperty(this, 'backgroundColor', {
            value: "#2C3D51"
        });

        Object.defineProperty(this, 'wellnessAPIs', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableVariable([]))
        });

        Object.defineProperty(this, 'activities', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableBoolean(false, null, false))
        });

        Object.defineProperty(this, '_promise', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkablePromise(this.getActivities.bind(this), this._describePromise.bind(this), false))
        });

        this.apiCalls = [this.toggleActivities.bind(this)]


        this._promise.depend(this.activities);
        this.initiate();
    }


    HumanAPIDataSource.prototype = new APIDataSource();
    HumanAPIDataSource.prototype.constructor = HumanAPIDataSource;

    var p = HumanAPIDataSource.prototype;

    p._describePromise = function () {
        console.log('Promise call initiated');
    }



    p.connect = function () {
        if (!this.sessionToken.userID.value) {
            this.sessionToken.userID.value = "sanjay1909@gmail.com";
            this.sessionToken.publicToken.value = '3b14fe511ccc9e602727e75007480f25';
            this.sessionToken.accessToken.value = 'NL4V3fJIGM3DXkeJIYH5OfW-__g=mX1Z6GQx6a19e2ac8c192e77e66036d997fc0a9b2103f52760ee8b620aa53a1f1eec87959a8c9e87e72b26c85d47510f2fc9a2300f71598a36a6a996c23d9f49533c9a69edb812c62e28149f07a70235babf9e8e99f5c15476e32607fea4f32171b580c22b668b5b763c0b68f04881cbf5ed0ab3';
            this.sessionToken.humanID.value = '565ca01149bd0f998e64a1c8d236f9df';
        }

        var inst = this;
        var options = {
            modal: 1,
            clientUserId: encodeURIComponent(this.sessionToken.userID.value), // can be email
            clientId: '9f9e4c03e02ab9e4ac8f264e65005b77e962cf8d', // found in Developer Portal
            finish: function (err, sessionTokenObject) {
                console.log(sessionTokenObject);
                // callback that would be called after user finishes
                // connecting data.

                var auth = new HumanAPIServices.AuthService('AsmeServlet');

                var prom = auth.getToken(sessionTokenObject);
                prom.then(function (response) {
                    inst.sessionToken.humanID.value = response['humanId'];
                    inst.sessionToken.publicToken.value = response['publicToken'];
                    inst.sessionToken.accessToken.value = response['accessToken'];
                }, function (error) {
                    console.log('failed')
                });


            },
            close: function () {
                // optional callback that will be called if the user
                // closes the popup without connecting any data sources.
            },
            error: function (err) {
                console.log(err);
                // optional callback that will be called if an error occurs while
                // loading the popup.
                // `err` is an object with the fields: `code`, `message`, `detailedMessage`
            }
        }
        if (this.sessionToken.publicToken.value) {
            options.publicToken = this.sessionToken.publicToken.value
        }
        HumanConnect.open(options);
    }


    p.toggleActivities = function (value) {
        this.activities.value = !this.activities.value;
    }

    p.getActivities = function (useServlet) {
        useServlet = (useServlet === undefined ? false : useServlet);

        if (this.sessionToken.accessToken.value) {
            var dataService = useServlet ? new HumanAPIServices.DataService('AsmeDataService') : new HumanAPIServices.DataAPIService('https://api.humanapi.co/v1/human/activities');
            return dataService.getActivities(this.sessionToken.accessToken.value);

        } else {
            console.warn('No Access token');
            return null;
        }
    }

    p._setData = function () {
        if (this._promise.result) {
            console.log('_setData:', this._promise.result);
            this.data.setSessionState(this._promise.result);
        } else
            console.error('Error:', this._promise.error);

    }



    p.initiate = function () {
        WeaveAPI.SessionManager.getCallbackCollection(this._promise).addImmediateCallback(null, this._setData.bind(this));

    }

    p.dispose = function () {
        WeaveAPI.SessionManager.getCallbackCollection(this._promise).removeCallback(this._setData);
    }

    if (typeof exports !== 'undefined') {
        module.exports = HumanAPIDataSource;
    } else {
        console.log('window is used');
        window.Asme = window.Asme ? window.Asme : {};
        window.Asme.HumanAPIDataSource = HumanAPIDataSource;
    }


}());
