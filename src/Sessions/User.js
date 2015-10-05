(function () {
    Object.defineProperty(User, 'NS', {
        value: 'Asme'
    });

    Object.defineProperty(User, 'CLASS_NAME', {
        value: 'User'
    });

    function User() {
        Object.defineProperty(this, 'sessionable', {
            value: true
        });

        Object.defineProperty(this, 'name', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableString(''))
        });

        Object.defineProperty(this, 'logged', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableBoolean(false))
        });
    }

    var p = User.prototype;



    if (typeof exports !== 'undefined') {
        module.exports = User;
    } else {
        console.log('window is used');
        window.Asme = window.Asme ? window.Asme : {};
        window.Asme.User = User;
    }


}());