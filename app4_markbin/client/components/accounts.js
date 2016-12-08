import React, { Component } from 'react';

class Accounts extends Component {
  componentDidMount() {  // right after mount
    // NOTE render Blaze accounts form
    // then find div element just rendered by render()
    // then place Blaze accounts form into the div

  }

  componentWillUnmount() {  // just before Unmount
    // NOTE find the Blaze forms created and destroy them
    // should do it manually

  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Accounts;
