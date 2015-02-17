var Content = React.createClass({
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

export default Content;
