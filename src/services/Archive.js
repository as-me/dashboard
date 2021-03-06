/**
 * @module Asme
 */







(function () {
    "use strict";



    /**
     * @static
     * @public
     * @property ARCHIVE_HISTORY
     * @readOnly
     * @type String
     */
    Object.defineProperty(Archive, 'ARCHIVE_HISTORY', {
        value: 'history.json'
    });

    /**
     * @static
     * @public
     * @property ARCHIVE_SCREENSHOT_PNG
     * @readOnly
     * @type String
     */
    Object.defineProperty(Archive, 'ARCHIVE_SCREENSHOT_PNG', {
        value: 'screenshot.png'
    });
    /**
     * @static
     * @public
     * @property HISTORY_SYNC_DELAY
     * @readOnly
     * @type Number
     */
    Object.defineProperty(Archive, 'HISTORY_SYNC_DELAY', {
        value: 100
    });
    /**
     * @static
     * @public
     * @property THUMBNAIL_SIZE
     * @readOnly
     * @type Number
     */
    Object.defineProperty(Archive, 'THUMBNAIL_SIZE', {
        value: 200
    });
    /**
     * @static
     * @public
     * @property ARCHIVE_THUMBNAIL_PNG
     * @readOnly
     * @type String
     */
    Object.defineProperty(Archive, 'ARCHIVE_THUMBNAIL_PNG', {
        value: 'thumbnail.png'
    });


    Archive._history = null;

    /**
     * @public
     * @property history
     * @readOnly
     * @type JSON
     */
    Object.defineProperty(Archive, 'history', {
        get: function () {
            if (!Archive._history)
                Archive._history = new weavecore.SessionStateLog(WeaveAPI.globalHashMap, Archive.HISTORY_SYNC_DELAY);
            return Archive._history;
        },
        set: function (history) {
            Archive._history = history;
        }
    });





    // constructor:
    /**
     * An object that implements this empty interface has an associated CallbackCollection and session state,
     * accessible through the global functions in the WeaveAPI Object. In order for an ILinkableObject to
     * be created dynamically at runtime, it must not require any constructor parameters.
     * @class Archive
     * @constructor
     */
    function Archive(input) {




        /**
         * This is a dynamic object containing all the amf objects stored in the archive.
         * The property names used in this object must be valid filenames or serialize() will fail.
         * @public
         * @property zip
         * @readOnly
         * @type JSZip
         */
        Object.defineProperty(this, 'objects', {
            value: {}
        });

        if (input) {
            this._readArchive(input)
        }

    }

    Archive.createScreenshot = function (thumbnailSize) {


    }

    Archive.updateLocalThumbnailAndScreenshot = function (saveScreenshot) {


    }


    /**
     * This function will create an object that can be saved to a file and recalled later with loadWeaveFileContent().
     */
    Archive.createFileContent = function (saveScreenshot) {
        var output = new Asme.Archive();

        //thumbnail should go first in the stream because we will often just want to extract the thumbnail and nothing
        //Archive.updateLocalThumbnailAndScreenshot(saveScreenshot);



        // session history
        var _history = Archive.history.getSessionState();
        output.objects[Archive.ARCHIVE_HISTORY] = _history;


        // TEMPORARY SOLUTION - url cache
        //if (WeaveAPI.URLRequestUtils['saveCache'])
        //output.objects[ARCHIVE_URL_CACHE_AMF] = WeaveAPI.URLRequestUtils.getCache();

        return output.serialize();
    }

    Archive.string2binary = function (str) {
        var result = "";
        for (var i = 0; i < str.length; i++) {
            result += String.fromCharCode(str.charCodeAt(i) & 0xff);
        }
        return result;
    }

    Archive.openFile = function (files) {
        const selectedfile = files[0];


        // Build Promise List, each promise resolved by FileReader.onload.

        new Promise(function (resolve, reject) {
                let reader = new FileReader();

                reader.onload = function (event) {
                    // Resolve both the FileReader result and its original file.
                    resolve([event, selectedfile]);
                };

                // Read the fil.
                reader.readAsArrayBuffer(selectedfile);
            })
            .then(function (zippedResults) {
                // Run the callback after all files have been read.
                console.log(zippedResults);
                var e = zippedResults[0];
                // read the content of the file with JSZip
                var zip = new JSZip(e.target.result);
                var zipObject = zip.files['history.json'];
                var jsonContent = JSON.parse(zipObject.asText());
                console.log(jsonContent);
                Archive.history.setSessionState(jsonContent);

            });


    }







    var p = Archive.prototype;

    p.serialize = function () {
        var name;

        var zip = new JSZip();
        //support datatypes
        // "string","array","nodebuffer","uint8array","arraybuffer"


        for (name in this.objects) {
            //copy[name] = this.objects[name];
            zip.file(name, JSON.stringify(this.objects[name]))

        }

        //TO-DO: temp solution , need to find bext way to create array buffer
        // var zip = new JSZip(JSON.stringify(test));
        return zip.generate({
            type: "blob"
        });
    }

    p._readArchive = function (fileData) {
        var zip = Archive.zip.load(fileData);
        for (var path in zip) {
            var fileName = path.substr(path.indexOf('/') + 1);
            objects[fileName] = zip[path];
        }
    }

    if (typeof exports !== 'undefined') {
        module.exports = Archive;
    } else {
        console.log('window is used: HumanConnect');
        window.Asme = window.Asme ? window.Asme : {};
        window.Asme.Archive = Archive;
    }

}());
