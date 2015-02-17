var Cookies;

if (window) {
  Cookies = require('cookies-js');
}

var App = React.createClass({
  componentDidMount() {
    $.ajaxSetup({
      headers: {
        'X-CSRF-Token': Cookies.get('CSRF-TOKEN')
      }
    });
  },
  render() {
    return false;
  }
});

module.exports = App;
