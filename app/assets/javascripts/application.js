//= require jquery
//= require react
//= require react_ujs
//= require routes
//= require_self

require('babelify/polyfill');
global.Router = require('./router');
global._      = require('lodash');
global.ReactPlayground = {};
