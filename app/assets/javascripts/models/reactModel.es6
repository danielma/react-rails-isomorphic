var keyMirror = require('keyMirror');

class ReactModel {
}

ReactModel.types = keyMirror({
  STRING: null,
  INTEGER: null,
  DATETIME: null,
  DATE: null
});

module.exports = ReactModel;
