'use strict';
/**/
var React = require('react');
var d3 = require('d3');

require('../src/styles/asme-adapter');
require('stylesheets/asme-adapter-docs');

var ReadME = require('md/MAIN.md');

document.getElementById("content").innerHTML = ReadME;
