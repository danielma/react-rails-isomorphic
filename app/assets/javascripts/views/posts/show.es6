var Post = require('./post');

var Show = React.createClass({
  getInitialState() {
    return {
      post: this.props.post || {}
    };
  },
  componentDidMount() {
    if (Object.keys(this.state.post).length != 0) return;

    $.getJSON('/posts/' + this.props.params.id, function(post) {
      if (this.isMounted()) {
        this.setState({post: post});
      }
    }.bind(this));
  },
  render() {
    var post = this.state.post || {};
    return (
      <div>
        <h1>Posts: show</h1>
        <Post key={post.id} post={post} />
      </div>
    );
  }
});

module.exports = Show;
