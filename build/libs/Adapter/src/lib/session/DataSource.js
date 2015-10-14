import 'weavecore';

//namesapce
if (typeof window === 'undefined') {
    this.adapter = this.adapter || {};
} else {
    window.adapter = window.adapter || {};
}

if (typeof window === 'undefined') {
    this.adapter.session = this.adapter.session || {};
} else {
    window.adapter.session = window.adapter.session || {};
}


(function () {

    Object.defineProperty(DataSource, 'NS', {
        value: 'adapter.session'
    });

    Object.defineProperty(DataSource, 'CLASS_NAME', {
        value: 'DataSource'
    });

    function DataSource() {


        /**
         * @public
         * @property sessionable
         * @readOnly
         * @type Booloean
         */
        Object.defineProperty(this, 'sessionable', {
            value: true
        });


        /**
         * To identify dataSource session objects
         * @public
         * @property IDataSource
         * @readOnly
         * @type Booloean
         */
        Object.defineProperty(this, 'IDataSource', {
            value: true
        });
        /**
         * @public
         * @property data
         * @readOnly
         * @type weavecore.LinkableVariable
         */
        Object.defineProperty(this, 'data', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.LinkableVariable([]), updateColumns.bind(this))
        });

        this.columns = [];

    }

    function updateColumns() {
        var records = this.data.getSessionState();
        if (records.length) {
            var row = records[0];
            for (var key in row)
                this.columns.push(key);
        }
    }


    // Prototypes
    var p = DataSource.prototype;

    p.getRecords = function () {
        return this.data.getSessionState();
    }


    adapter.session.DataSource = DataSource;

}());
