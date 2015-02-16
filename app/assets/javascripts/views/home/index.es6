var Index = React.createClass({
  getInitialState() {
    return {message: 'blue'};
  },
  handleClick() {
    this.setState({message: (new Date()).toString()});
  },
  render() {
    return (
      <h1 onClick={this.handleClick}>You are home controller: {this.state.message}</h1>
    );
  }
});

module.exports = Index;
