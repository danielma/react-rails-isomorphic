var Model = require('models/reactModel');

var fieldsFor = function(model) {
  var toInput = _.partial(fieldToInput, model);
  _.map(model.fields, toInput);
}

var fieldToInput = function(model, type, field) {
  var name = `${modelName}[${field}]`;
  return (
    <p>
      <input type="text" key={name} name={name} value={this.state[field]} onChange={this.onFieldChange.bind(this, field)} placeholder={field} />
    </p>
  );
}

var components = {}

module.exports = {
};
