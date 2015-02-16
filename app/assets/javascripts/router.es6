var bulk_require = require('bulk-require');
var views = bulk_require(__dirname + '/views', ['./**/*.es6']);

var Router = React.createClass({
  render() {
    var location = this.props.location || window.location.pathname;
    var foundRoute = getRoute(location);
    var routeView, params;

    if (foundRoute) {
      routeView = views[foundRoute.view.controller][foundRoute.view.action];
      params = foundRoute.params;
    } else {
      routeView = views.notFound;
      params    = {};
    }
    var Route = routeView;

    return (
      <Route params={params} />
    );
  }
});

module.exports = Router;
