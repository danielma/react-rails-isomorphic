var Post = require('models/post');

var Form = React.createClass({
  defaultAction: '/posts',
  modelName: 'post',

  getInitialState() {
    return {};
  },

  fieldToInput(field) {
    var name = `${this.modelName}[${field}]`;
    return (
      <p>
        <input type="text" key={name} name={name} value={this.state[field]} onChange={this.onFieldChange.bind(this, field)} placeholder={field} />
      </p>
    );
  },

  onFieldChange(field, event) {
    var newState = {};
    newState[field] = event.target.value;
    this.setState(newState);
  },

  handleSubmit(e) {
    $.post(e.target.action, {post: this.state}, function(response) {
      console.log(response);
    });
    return false;
  },

  render() {
    var action = this.props.action || this.defaultAction;
    var fields = ['title', 'source'].map(this.fieldToInput);
    return (
      <form action={action} onSubmit={this.handleSubmit} method='post'>
        {fields}
        <pre>
          {JSON.stringify(this.state, undefined, 2)}
        </pre>
        <input type='submit' />
      </form>
    );
  }
});

module.exports = Form;
