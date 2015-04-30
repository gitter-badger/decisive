/* global window, require */
'use strict';

var React       = require('react');
var Application = require('./application');

React.render(
    React.createElement(Application),
    window.document.body
);