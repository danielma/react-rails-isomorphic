//= require jquery
//= require react
//= require react_ujs
//= require routes

global.Router = require('./components/router');
global.ReactPlayground = {};

$(() =>
  React.render(<Router />, document.body)
)
