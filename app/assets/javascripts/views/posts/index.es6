var Post = require('./post');
var getDataController = require('mixins/getDataController');

var Index = React.createClass({
  mixins: [getDataController('posts')],
  getInitialState() {
    return {
      posts: this.props.posts || []
    };
  },
  render() {
    var posts = this.state.posts.map(function(post) {
      return <Post key={post.id} post={post} />;
    });
    return (
      <div>
        <h1>Posts</h1>
        {posts}
        <a href="/posts/new" className="btn btn-default">New Post</a>
      </div>
    );
  }
});

module.exports = Index;
