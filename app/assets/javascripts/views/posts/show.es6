var Post = require('./post');
var getDataController = require('mixins/getDataController');

var Show = React.createClass({
  mixins: [getDataController('post')],
  getInitialState() {
    return {
      post: this.props.post || {}
    };
  },
  render() {
    var post = this.state.post;
    return (
      <div>
        <h1>Posts: show</h1>
        <Post key={post.id} post={post} />
      </div>
    );
  }
});

module.exports = Show;
