var SessionToken = require('./SessionToken.js');

(function () {
    Object.defineProperty(APIDataSource, 'NS', {
        value: 'Asme'
    });

    Object.defineProperty(APIDataSource, 'CLASS_NAME', {
        value: 'APIDataSource'
    });

    function APIDataSource() {
        Object.defineProperty(this, 'isAPIDataSource', {
            value: true
        });
        Object.defineProperty(this, 'sessionToken', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new SessionToken())
        });



        this.apiCalls = [];


    }

    APIDataSource.prototype = new adapter.session.DataSource();
    APIDataSource.prototype.constructor = APIDataSource;
    var p = APIDataSource.prototype;



    if (typeof exports !== 'undefined') {
        module.exports = APIDataSource;
    } else {
        console.log('window is used');
        window.Asme = window.Asme ? window.Asme : {};
        window.Asme.APIDataSource = APIDataSource;
    }


}());
