var Form = require('./form');

var New = React.createClass({
  render() {
    return (
      <div>
        <h3>New post</h3>
        <Form action='/posts' />
      </div>
    );
  }
});

module.exports = New;
