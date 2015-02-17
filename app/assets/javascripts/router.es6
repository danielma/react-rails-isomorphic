var bulk_require = require('bulk-require');
var views        = bulk_require(__dirname + '/views', ['./**/*.es6']);
var Header       = views.layouts.header;
var Content      = views.layouts.content;
var Footer       = views.layouts.footer;
var App          = require('app');
var url          = require('url');

var Router = React.createClass({
  getInitialState() {
    return {location: this.props.location || window.location.pathname};
  },
  componentDidMount() {
    this.registerEventHandlers();
    App.init();
  },
  registerEventHandlers() {
    this.registerClickHandler();
    window.addEventListener('popstate', this.backHandler);
  },
  backHandler() {
    this.setState({location: window.location.pathname});
  },
  registerClickHandler() {
    $('body').on('click', 'a', this.clickHandler);
  },
  clickHandler(e) {
    var link = url.parse(e.target.href);
    var location = url.parse(window.location.href);
    if (link.host === location.host) {
      var newLocation = link.path;
      history.pushState(null, null, newLocation);
      this.setState({location: newLocation});
      return false;
    };
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
      <div className='app'>
        <Header />
        <Content>
          <Route params={params} {...this.props} />
        </Content>
        <Footer />
      </div>
    );
  }
});

module.exports = Router;
