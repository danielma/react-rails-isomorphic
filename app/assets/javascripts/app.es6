var Cookies;

if (window) {
  Cookies = require('cookies-js');
}

var App = {
  init() {
    $.ajaxSetup({
      headers: {
        'X-CSRF-Token': Cookies.get('CSRF-TOKEN')
      }
    });
  }
};

module.exports = App;
