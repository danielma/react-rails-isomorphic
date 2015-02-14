var Nerp = React.createClass({
  getInitialState() {
    return {message: 'nerp'};
  },
  handleClick() {
    this.setState({message: 'Clicked!'})
  },
  render() {
    return (
      <h2 onClick={this.handleClick}>{this.state.message}</h2>
    );
  }
});

module.exports = Nerp;
