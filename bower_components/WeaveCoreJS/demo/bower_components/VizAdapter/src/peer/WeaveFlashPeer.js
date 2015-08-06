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
