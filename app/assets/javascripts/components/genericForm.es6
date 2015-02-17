var noop = function() {};

var GenericForm = React.createClass({
  propTypes: {
    model:      React.PropTypes.string.isRequired,
    action:     React.PropTypes.string.isRequired,
    onSuccess:  React.PropTypes.func,
    onError:    React.PropTypes.func,
    onComplete: React.PropTypes.func
  },

  defaultMethod: 'POST',

  handleSubmit(e) {
    var data = {};
    data[this.props.model.toLowerCase()] = this.state;
    $.ajax({
      url:      e.target.action,
      data:     data,
      type:     this.method,
      dataType: 'json',
      success:  this.props.onSuccess || noop,
      error:    this.props.onError || noop,
      complete: this.props.onComplete || noop
    });
    return false;
  },

  render() {
    var { method, ...other } = this.props;
    this.method = method = (method || this.defaultMethod);
    return (
      <form onSubmit={this.handleSubmit} method={method} {...other} />
    );
  }
});

export default GenericForm;
