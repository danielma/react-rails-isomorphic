var ReactModel = require('./reactModel');

class Post extends ReactModel {}

Post.fields = {
  id:           ReactModel.types.INTEGER,
  title:        ReactModel.types.STRING,
  slug:         ReactModel.types.STRING,
  source:       ReactModel.types.STRING,
  html:         ReactModel.types.STRING,
  published_at: ReactModel.types.DATETIME
}

module.exports = Post;
