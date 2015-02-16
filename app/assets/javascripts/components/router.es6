var bulk_require = require('bulk-require');
var views = bulk_require(__dirname + '/views', ['./**/*.es6']);

var Router = React.createClass({
  render() {
    var location = this.props.location || window.location.pathname;
    var foundRoute = getRoute(location);
    var routeView = foundRoute ? views[foundRoute.view.controller][foundRoute.view.action] : views.notFound;

    var Route = routeView;

    return (
      <Route />
    );
  }
});

module.exports = Router;
