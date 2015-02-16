var bulk_require = require('bulk-require');
var views = bulk_require(__dirname + '/views', ['./**/*.es6']);

var Router = React.createClass({
  getInitialState() {
    return {location: this.props.location || window.location.pathname};
  },
  componentDidMount() {
    this.registerClickHandler();
  },
  registerClickHandler() {
    $('body').on('click', 'a', this.clickHandler);
  },
  clickHandler(e) {
    var href = e.target.href;
    this.setState({location: href}, function() {
      history.pushState(null, null, href);
    });
    return false;
  },
  render() {
    var foundRoute = getRoute(this.state.location);
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
      <Route params={params} {...this.props} />
    );
  }
});

module.exports = Router;
