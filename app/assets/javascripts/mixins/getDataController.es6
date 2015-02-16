var getDataController = function(stateProp) {
  return {
    componentDidMount() {
      var collection = this.state[stateProp],
          newState   = {};

      // if the state object isn't empty, assume data has already been loaded
      if (collection != null && Object.keys(collection).length != 0) return;

      $.getJSON(window.location.href, function(data) {
        if (this.isMounted()) {
          newState[stateProp] = data;
          this.setState(newState);
        }
      }.bind(this));
    }
  };
};

module.exports = getDataController;
