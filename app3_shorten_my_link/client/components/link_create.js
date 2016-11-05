// create form component, as a util class

import React, { Component } from 'react';

class LinkCreate extends Component {
  constructor(props) {  // set component state
    super(props);
    this.state = {error: ''};
  }

  handleSubmit(event) {
    event.preventDefault(); // don't handle default event
    // Meteor.call(my_key, func_args, errorCb)
    Meteor.call('links.insert', this.refs.link.value, (error) => {
      // NOTE Update error msg to view
      if (error){  // error obj gen by meteor
        this.setState({ error: `Enter a valid Url, msg: ${error.message}`});
      } else {  // clear error msg and input
        this.setState({ error: ''});
        this.refs.link.value = '';
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Link to Shorten</label>
          <input ref="link" className="form-control" />
        </div>
        <div className="text-danger">{this.state.error}</div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    );
  }
}

export default LinkCreate;
