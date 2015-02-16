var Post = React.createClass({
  render() {
    return (
      <div>
        <div className="body" dangerouslySetInnerHTML={{__html: this.props.post.html}} />
      </div>
    );
  }
});

module.exports = Post;
