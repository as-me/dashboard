//idead of referencing the promise's resolve and reject take from weave - weaveClient Project
/**
 * Queries a JSON RPC 2.0 service.
 * @param {string} url The URL of the service.
 * @param {string} method Name of the method to call on the server.
 * @param {?Array|Object} params Parameters for the server method.
 * @param {Function} resultHandler Optional Function to call when the RPC call returns.  This function will be passed the result of the method as the first parameter.
 * @param {string|number=} queryId Optional id to be associated with this RPC call.  This will be passed as the second parameter to the resultHandler function.
 * @return A Promise.
 */
var Servlet = {
    queryService: function (url, method, params, resultHandler, queryId) {

        var data = {
            jsonrpc: "2.0",
            id: queryId || "no_id",
            method: method,
            params: params
        };

        var client = new XMLHttpRequest();
        client.open('POST', url, true);
        client.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        client.onload = function (e) {
            if (client.readyState === 4) {
                if (client.status === 200) {
                    _handleResponse(client.response);
                } else {
                    _handleResponse(client.statusText);
                }
            }
        };
        client.onerror = function (e) {
            _handleResponse(client.statusText);
        };

        client.send(JSON.stringify(data));


        var promise, resolve, reject;
        if (window.Promise) {
            promise = new Promise(function (_resolve, _reject) {
                resolve = _resolve;
                reject = _reject;
            });
        }

        function _handleResponse(response) {
            var jsonResponse = JSON.parse(response);
            try {
                if (jsonResponse.error) {
                    if (promise)
                        reject(jsonResponse.error);
                    else
                        console.error(response);
                } else {
                    if (resultHandler)
                        resultHandler(jsonResponse.result, queryId);
                    if (promise) // which calls the function attached with then
                        resolve(jsonResponse.result);
                }
            } catch (e) {
                if (promise)
                    reject(e);
                else
                    console.error(e);
            }
        }

        return promise;
    },


    /**
     * Makes a batch request to a JSON RPC 2.0 service.
     * @param {string} url The URL of the service.
     * @param {string} method Name of the method to call on the server for each entry in the queryIdToParams mapping.
     * @param {Array|Object} queryIdToParams A mapping from queryId to RPC parameters.
     * @param {function(Array|Object)} resultsHandler Optional Function to receive a mapping from queryId to RPC result.
     * @return A Promise.
     */
    bulkQueryService: function (url, method, queryIdToParams, resultsHandler) {
        var batch = [];
        for (var queryId in queryIdToParams) {
            var m = typeof method === 'string' ? method : method[queryId];
            batch.push({
                jsonrpc: "2.0",
                id: queryId,
                method: m,
                params: queryIdToParams[queryId]
            });
        }
        if (batch.length) {
            var client = new XMLHttpRequest();
            client.open('POST', servletURL, true);
            client.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            client.onload = function (e) {
                if (client.readyState === 4) {
                    if (client.status === 200) {
                        handleBatch(client.responseText);
                    } else {
                        handleBatch(client.statusText);
                    }
                }
            };
            client.onerror = function (e) {
                handleBatch(client.statusText);
            };

            client.send(JSON.stringify(batch));
        } else
            setTimeout(handleBatch, 0);

        var promise, resolve, reject;
        if (window.Promise) {
            promise = new Promise(function (_resolve, _reject) {
                resolve = _resolve;
                reject = _reject;
            });
        }

        function handleBatch(batchResponse) {
            try {
                var results = Array.isArray(queryIdToParams) ? [] : {};
                var foundError = false;
                for (var i in batchResponse) {
                    var response = batchResponse[i];
                    if (response.error) {
                        results[response.id] = response.error;
                        foundError = true;
                    } else {
                        results[response.id] = response.result;
                    }
                }
                if (foundError) {
                    if (promise)
                        reject(results);
                    else
                        console.error(JSON.stringify(results, null, 3));
                } else {
                    if (resultsHandler)
                        resultsHandler(results);
                    if (promise)
                        resolve(results);
                }
            } catch (e) {
                if (promise)
                    reject(e);
                else
                    console.error(e);
            }
        }

        return promise;
    }



}



if (typeof exports !== 'undefined') {
    module.exports = Servlet;
} else {
    console.log('window is used');
    window.Asme = window.Asme ? window.Asme : {};
    window.Asme.Servlet = Servlet;
}
