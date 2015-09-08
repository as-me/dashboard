'use strict';
/**/
var React = require('react');

//require('../src/styles/asme');
require('stylesheets/asme-docs');

var ReadME = require('md/MAIN.md');

document.getElementById("content").innerHTML = ReadME;
