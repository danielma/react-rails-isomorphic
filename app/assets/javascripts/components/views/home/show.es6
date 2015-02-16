var Show = React.createClass({
  render() {
    return (
      <h2>hello and welcome to show: {this.props.params.id}</h2>
    );
  }
});

module.exports = Show;
