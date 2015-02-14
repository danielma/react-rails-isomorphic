var Index = Index || require('./index');
var Nerp  = Nerp  || require('./nerp');

class Router extends React.Component {
  render() {
    var location = this.props.location || window.location.pathname;
    var Route;

    if (location == routes[1]) {
      Route = Index;
    } else {
      Route = Nerp;
    }

    return (
      <Route />
    );
  }
};

module.exports = Router;
