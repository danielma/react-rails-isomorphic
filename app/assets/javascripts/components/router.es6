var bulk_require = require('bulk-require');
var components = bulk_require(__dirname, ['./views/*']);

var Router = React.createClass({
  render() {
    var location = this.props.location || window.location.pathname;
    var Route;

    Route = components.views.home;

    return (
      <Route />
    );
  }
});

module.exports = Router;
