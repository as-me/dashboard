(function () {
    Object.defineProperty(HumanConnectSession, 'NS', {
        value: 'Asme'
    });

    Object.defineProperty(HumanConnectSession, 'CLASS_NAME', {
        value: 'HumanConnectSession'
    });

    function HumanConnectSession() {
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

    var p = HumanConnectSession.prototype;



    if (typeof exports !== 'undefined') {
        module.exports = HumanConnectSession;
    } else {
        console.log('window is used');
        window.Asme = window.Asme ? window.Asme : {};
        window.Asme.HumanConnectSession = HumanConnectSession;
    }


}());
