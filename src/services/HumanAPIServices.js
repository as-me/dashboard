var Servlet = require('./Servlet.js');

(function () {
    'use strict';

    var API_URL = 'http://localhost:8080/AsmeHealthDataService';


    var HumanAPIServices = function () {



        this.getAuth = function (servlet) {
            return new HumanAPIServices.Auth(servlet);
        };


    };


    // User API
    // =======

    HumanAPIServices.AuthService = function (servlet) {
        this.servlet = '/' + servlet;

        /*function (err, res) {
            cb(err, res);
        }*/
        this.getToken = function (sessionTokenObject) {

            //return _request("POST", this.servlet, sessionTokenObject);
            return Servlet.queryService(API_URL + this.servlet, 'getToken', [sessionTokenObject], null, 'getToken');
        };



    };


    // User API
    // =======

    HumanAPIServices.DataService = function (servlet) {
        this.servlet = '/' + servlet;

        /*function (err, res) {
            cb(err, res);
        }*/
        this.getInfo = function (accessToken) {

            return Servlet.queryService(API_URL + this.servlet, 'getInfo', [accessToken], null, 'getInfo');
        };

        this.getDemoData = function () {

            return Servlet.queryService(API_URL + this.servlet, 'getDemoData', [], null, 'getDemoData');
        };

        this.getActivities = function (accessToken) {

            return Servlet.queryService(API_URL + this.servlet, 'getActivities', [], null, 'getActivties');
        };




    };



    if (typeof exports !== 'undefined') {
        module.exports = HumanAPIServices;
    } else {
        console.log('window is used: HumanConnect');
        window.Asme = window.Asme ? window.Asme : {};
        window.Asme.HumanAPIServices = HumanAPIServices;
    }
}).call(this);
