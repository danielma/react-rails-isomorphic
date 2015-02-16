var Post = require('./post')

var Index = React.createClass({
  getInitialState() {
    return {
      posts: this.props.posts || []
    };
  },
  componentDidMount() {
    if (this.state.posts.length != 0) return;

    $.getJSON('/posts', function(posts) {
      if (this.isMounted()) {
        this.setState({posts: posts});
      }
    }.bind(this));
  },
  render() {
    var posts = this.state.posts.map(function(post) {
      return <Post key={post.id} post={post} />;
    });
    return (
      <div>
        <h1>Posts</h1>
        {posts}
      </div>
    );
  }
});

module.exports = Index;
