var bulk_require = require('bulk-require');
var views = bulk_require(__dirname + '/views', ['./**/*.es6']);

var Router = React.createClass({
  render() {
    var location = this.props.location || window.location.pathname;
    var Route;
    var foundRoute = getRoute(location);

    Route = views[foundRoute.controller][foundRoute.action];

    return (
      <Route />
    );
  }
});

module.exports = Router;
