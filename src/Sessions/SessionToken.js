(function () {
    Object.defineProperty(SessionToken, 'NS', {
        value: 'Asme'
    });

    Object.defineProperty(SessionToken, 'CLASS_NAME', {
        value: 'SessionToken'
    });

    function SessionToken() {
        Object.defineProperty(this, 'sessionable', {
            value: true
        });

        Object.defineProperty(this, 'userID', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableString(''))
        });

        Object.defineProperty(this, 'humanID', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableString(''))
        });

        Object.defineProperty(this, 'publicToken', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableString(''))
        });
        Object.defineProperty(this, 'accessToken', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableString(''))
        });

    }

    var p = SessionToken.prototype;



    if (typeof exports !== 'undefined') {
        module.exports = SessionToken;
    } else {
        console.log('window is used');
        window.Asme = window.Asme ? window.Asme : {};
        window.Asme.SessionToken = SessionToken;
    }


}());
