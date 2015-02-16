var Post = React.createClass({
  render() {
    return (
      <div>
        <h2 className="title"><a href={'/posts/' + this.props.post.id}>{this.props.post.title}</a></h2>
        <div className="body" dangerouslySetInnerHTML={{__html: this.props.post.html}} />
      </div>
    );
  }
});

module.exports = Post;
