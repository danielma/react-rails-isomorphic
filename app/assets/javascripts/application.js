//= require jquery
//= require react_ujs
//= require routes

global.React = require('react');
global.Router = require('./components/router');
global.ReactPlayground = {};

$(() =>
  React.render(<Router />, document.body)
)
