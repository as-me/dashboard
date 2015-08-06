//namespace
if (!this.adapter)
    this.adapter = {};


(function () {
    function Interface() {}
    var p = Interface.prototype;
    /*
     *This function renders on the visualization library , which are hooked to it
     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
     */
    p.doSelection = function (keys) {};

    p.doProbe = function (key) {};

    p.setData = function () {};
    p.getData = function () {};

    adapter.Interface = Interface;

}());

//namespace
if (!this.hook)
    this.hook = {};


(function () {
    function C3Interface(chart) {
        adapter.Interface.call(this);
        this.chart = chart;
    }

    C3Interface.prototype = new adapter.Interface();
    C3Interface.prototype.constructor = C3Interface;

    var p = C3Interface.prototype;
    /*
     *This function renders on the visualization library , which are hooked to it
     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
     * @param columns: We need to give the the charts column ids like ['col1','col2']
     * @param chart: we need to give chart instance generated in c3
     */
    p.doSelection = function (keys) {

        if (keys !== undefined) {
            if (keys.constructor !== Array) console.log("Keys has to be an array ");
        } else console.log("keys(Array)  is required");

        if (keys.length > 0) {
            var numericKeys = keys.map(function (key) {
                if (key.constructor === String)
                    return key = Number(key);
                else
                    return key;
            });
            this.chart.select(this.chart.columns, numericKeys, true);
        } else
            this.chart.unselect();
    }

    hook.C3Interface = C3Interface;

}());

//namespace
if (!this.hook)
    this.hook = {};


(function () {
    function D3Interface(chart) {
        adapter.Interface.call(this);
        this.chart = chart;
        this.dataSource;
    }

    D3Interface.prototype = new adapter.Interface();
    D3Interface.prototype.constructor = D3Interface;

    var p = D3Interface.prototype;
    /*
     *This function renders on the visualization library , which are hooked to it
     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
     * @param columns: We need to give the the charts column ids like ['col1','col2']
     * @param chart: we need to give chart instance generated in c3
     */
    p.doSelection = function (keys) {
        this.chart.select(keys);
    }

    p.doProbe = function (key) {
        this.chart.probe(key);
    }

    p.setData = function (sourceName, data) {
        this.dataSource = sourceName;
        this.chart.renderChart(data);
    }

    hook.D3Interface = D3Interface;

}());

//namespace
if (!this.hook)
    this.hook = {};


(function () {


    function TableauInterface(chart) {
        adapter.Interface.call(this);
        this.chart = chart;
        this.recordIdentifier;
        this.markObjects = {};


    }

    TableauInterface.prototype = new adapter.Interface();
    TableauInterface.prototype.constructor = TableauInterface;




    var p = TableauInterface.prototype;
    /*
     *This function renders on the visualization library , which are hooked to it
     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
     * @param columns: We need to give the the charts column ids like ['col1','col2']
     * @param chart: we need to give chart instance generated in c3
     */
    p.doSelection = function (keys) {
        //keys --> fieldname,Value
        console.log("keys from Peer: ", keys);
        if (keys.length > 0) {
            var values = [];
            for (var i = 0; i < keys.length; i++) {
                var mark = this.markObjects[keys[i]];
                values.push(mark);
            }
            this.chart.getWorkbook().getActiveSheet().selectMarksAsync(
                values,
                tableauSoftware.SelectionUpdateType.REPLACE);
        } else {

            this.chart.getWorkbook().getActiveSheet().clearSelectedMarksAsync();
        }
    }

    hook.TableauInterface = TableauInterface;

}());

//namespace
if (!this.peer)
    this.peer = {};





(function () {
    //constructor
    function WeaveFlashInterface() {
        adapter.Interface.call(this);
        this.hooks = [];
        this.activeHook = null;
        this.setWeaveWindow(window);
        this.keyType;
        this.path;
    }





    WeaveFlashInterface.prototype = new adapter.Interface();
    WeaveFlashInterface.prototype.constructor = WeaveFlashInterface;

    /**
     * Deterministic JSON encoding
     * @param value The value to stringify
     * @param replacer A replacer function that you would give to JSON.stringify()
     * @param indent An indent value that you would give to JSON.stringify()
     * @param json_values_only Set this to true to change NaN and undefined values to null
     * @returns A JSON string
     */
    WeaveFlashInterface.weaveStringify = function (value, replacer, indent, json_values_only) {
        if (typeof indent == 'number') {
            var str = ' ';
            while (str.length < indent)
                str += str;
            indent = str.substr(0, indent);
        }
        if (!indent)
            indent = '';
        return _weaveStringify("", value, replacer, indent ? '\n' : '', indent, json_values_only);
    }

    function _weaveStringify(key, value, replacer, lineBreak, indent, json_values_only) {
        if (replacer != null)
            value = replacer(key, value);

        var output;
        var item;
        var key;

        if (typeof value == 'string')
            return _weaveEncodeString(value);

        // non-string primitives
        if (value == null || typeof value != 'object') {
            if (json_values_only && (value === undefined || !isFinite(value)))
                value = null;
            if (value == null)
                return 'null';
            return value + '';
        }

        // loop over keys in Array or Object
        var lineBreakIndent = lineBreak + indent;
        var valueIsArray = Array.isArray(value);
        output = [];
        if (valueIsArray) {
            for (var i = 0; i < value.length; i++)
                output.push(_weaveStringify(String(i), value[i], replacer, lineBreakIndent, indent, json_values_only));
        } else {
            for (key in value)
                output.push(_weaveEncodeString(key) + ": " + _weaveStringify(key, value[key], replacer, lineBreakIndent, indent, json_values_only));
            // sort keys
            output.sort();
        }

        if (output.length == 0)
            return valueIsArray ? "[]" : "{}";

        return (valueIsArray ? "[" : "{") + lineBreakIndent + output.join(indent ? ',' + lineBreakIndent : ', ') + lineBreak + (valueIsArray ? "]" : "}");
    }
    var WEAVE_ENCODE_LOOKUP = {
        '\b': 'b',
        '\f': 'f',
        '\n': 'n',
        '\r': 'r',
        '\t': 't',
        '\\': '\\'
    };

    function _weaveEncodeString(string, quote) {
        if (!quote)
            quote = '"';
        if (string == null)
            return 'null';
        var result = new Array(string.length);
        for (var i = 0; i < string.length; i++) {
            var chr = string.charAt(i);
            var esc = chr == quote ? quote : WEAVE_ENCODE_LOOKUP[chr];
            result[i] = esc ? '\\' + esc : chr;
        }
        return quote + result.join('') + quote;
    }

    function renderSelection() {
        console.log("renderSelection");
        var keysArray = this.path.selection_keyset.getState();
        if (keysArray === null) { // specail case when selection seesion state is null
            callHooks.apply(this, [[]]);
            return;
        }
        var keys;
        var peerkeyType;
        console.log("Keys from Peer : ", keysArray);

        if (keysArray !== null && keysArray[0]) {
            keys = keysArray[0];
        } else // empty keys
            keys = keysArray;
        peerkeyType = keys.shift();

        if (!peerkeyType || this.keyType === peerkeyType) {
            callHooks.apply(this, [keys]);
        }

        console.log("activehook removed");

    }

    function callHooks(keys) {
        this.hooks.forEach(function (hook, index) {
            if (hook.chart != this.activeHook)
                hook.doSelection(keys);
        }.bind(this));
        this.activeHook = null;
    }

    function renderProbe() {
        var keysArray = this.path.probe_keyset.getState();
        var keys;
        if (keysArray[0])
            keys = keysArray[0];
        else // empty keys
            keys = keysArray

        var peerkeyType = keys.shift();

        if (this.keyType === peerkeyType) {
            this.hooks.forEach(function (hook, index) {
                if (hook.chart != this.activeHook)
                    hook.doProbe(keys);
            });
        }
        this.activeHook = null;

    }

    var p = WeaveFlashInterface.prototype;

    p.checkWeaveReady = function () {
        return this.weave && this.weave.WeavePath && this.weave._jsonCall;
    };

    p.setWeaveWindow = function (window) {
        if (!window) {
            this.weave = null;
            return;
        }
        this.weaveWindow = window;
        this.weave = window.document.getElementById('weave');

        if (this.checkWeaveReady()) {
            console.log("weave and its api are ready");
            this.path = weave.path();
            this.path.selection_keyset.addCallback(renderSelection.bind(this));
            this.path.probe_keyset.addCallback(renderProbe.bind(this));
        } else {
            setTimeout(this.setWeaveWindow.bind(this), 50, window);
        }
    };



    /*
     *This function renders on the visualization library , which are hooked to it
     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
     */
    p.doSelection = function (keys, add) {

        // to-do
        // do selection only when datasource and keytype matches
        // else return reporting keytype are not matching
        if (!this.weave.path(this.keyType).getState()) {
            console.log("This " + this.keyType + " is not hooked");
        }
        console.log("Keys from Hook : ", keys);
        if (keys.length > 0) {
            var QKeys = keys.map(function (key) {
                return {
                    localName: key,
                    keyType: this.keyType
                };
            }.bind(this));
            var weaveScript = 'this.replaceKeys(keys)';
            if (add)
                weaveScript = 'this.addKeys(keys)';
            this.weave.evaluateExpression(this.path.selection_keyset._path, weaveScript, {
                keys: QKeys
            }, null, "");
        } else
            this.weave.evaluateExpression(this.path.selection_keyset._path, 'this.replaceKeys(keys)', {
                keys: []
            }, null, "");
    }

    p.doProbe = function (key) {

        if (key) {
            var QKey = {
                localName: key,
                keyType: this.keyType
            };
            this.weave.evaluateExpression(this.path.probe_keyset._path, 'this.replaceKeys(keys)', {
                keys: [QKey]
            }, null, "");
        } else
            this.weave.evaluateExpression(this.path.probe_keyset._path, 'this.replaceKeys(keys)', {
                keys: []
            }, null, "");
    }

    p.setData = function (sourceName, csvRecords) {
        this.weave.path(sourceName)
            .request('CSVDataSource')
            .vars({
                "records": csvRecords
            })
            .exec('var rows = WeaveAPI.CSVParser.convertRecordsToRows(records); this.setCSVData(rows);');
    }

    p.setKeyColumnName = function (sourceName, keyColumnName) {
        this.keyType = sourceName;
        this.weave.setSessionState([sourceName], {
            keyColName: keyColumnName,
            keyType: sourceName
        });

    }


    p.getData = function (sourceName) {
        return this.weave.path(sourceName)
            .request('CSVDataSource')
            .getValue('WeaveAPI.CSVParser.convertRowsToRecords(getCSVData())');

    }
    p.getCSVData = function (sourceName) {
        return this.weave.path(sourceName)
            .request('CSVDataSource')
            .getValue('getCSVData()');

    }

    peer.WeaveFlashInterface = WeaveFlashInterface;

}());
//namespace
if (!this.peer)
    this.peer = {};



(function () {
    //static Declaration
    // set Probe and Selection keys
    Object.defineProperty(WeaveJSInterface, 'probeKeys', {
        value: WeaveAPI.globalHashMap.requestObject('probeKeys', weavecore.LinkableVariable, false)
    });

    Object.defineProperty(WeaveJSInterface, 'selectionKeys', {
        value: WeaveAPI.globalHashMap.requestObject('selectionKeys', weavecore.LinkableVariable, false)
    });

    //constructor
    function WeaveJSInterface() {
        adapter.Interface.call(this);
        this.hooks = [];
        this.activeHook = null;
        WeaveJSInterface.selectionKeys.addImmediateCallback({}, renderSelection.bind(this));
        WeaveJSInterface.probeKeys.addImmediateCallback({}, renderProbe.bind(this));
    }



    WeaveJSInterface.prototype = new adapter.Interface();
    WeaveJSInterface.prototype.constructor = WeaveJSInterface;

    function renderSelection() {
        var keys = WeaveJSInterface.selectionKeys.getSessionState();
        this.hooks.forEach(function (hook, index) {
            if (hook != this.activehook)
                hook.doSelection(keys);
            else
                this.activehook = null;
        });
    }

    function renderProbe() {
        var key = WeaveJSInterface.probeKeys.getSessionState();
        this.hooks.forEach(function (hook, index) {
            if (hook != this.activehook)
                hook.doProbe(key);
            else
                this.activehook = null;
        });
    }

    var p = WeaveJSInterface.prototype;
    /*
     *This function renders on the visualization library , which are hooked to it
     * @param keys: We need to give the index value or Keys associated with that record [0,3,5]
     */
    p.doSelection = function (keys) {
        WeaveJSInterface.selectionKeys.setSessionState(keys);
    }

    p.doProbe = function (key) {
        WeaveJSInterface.probeKeys.setSessionState(key);
    }

    peer.WeaveJSInterface = WeaveJSInterface;

}());
