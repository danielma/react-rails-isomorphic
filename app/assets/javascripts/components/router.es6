var bulk_require = require('bulk-require');
var components = bulk_require(__dirname, ['./*']);

var Router = React.createClass({
  render() {
    var location = this.props.location || window.location.pathname;
    var Route;

    if (location == routes[1]) {
      Route = components.index;
    } else {
      Route = components.nerp;
    }

    return (
      <Route />
    );
  }
});

module.exports = Router;
