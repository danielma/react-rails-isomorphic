var Post = require('models/post');
var Input = require('react-bootstrap').Input;
var GenericForm = require('components/genericForm');

var Form = React.createClass({
  getDefaultProps() {
    return {
      action: '/posts'
    };
  },

  setFieldValue(field, event) {
    var newState = {};
    newState[field] = event.target.value;
    this.setState(newState);
  },

  getInitialState() {
    return this.props.post || {};
  },

  handleSuccess(data) {
    console.log(data);
  },

  render() {
    var action = this.props.action;
    return (
      <GenericForm model='post' action={action} onSuccess={this.handleSuccess} method='post'>
        <Input type='text' value={this.state.title} onChange={this.setFieldValue.bind(this, 'title')} label='Title' />
        <Input type='textarea' value={this.state.source} onChange={this.setFieldValue.bind(this, 'source')} label='Source' />
        <pre>
          {JSON.stringify(this.state, undefined, 2)}
        </pre>
        <input type='submit' />
      </GenericForm>
    );
  }
});

module.exports = Form;
