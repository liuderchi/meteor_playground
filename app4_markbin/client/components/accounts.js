import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';


class Accounts extends Component {
  componentDidMount() {  // right after mount
    // NOTE render Blaze accounts form
    // then find div element just rendered by render()
    // then place Blaze accounts form into the div

    this.view = Blaze.render(
      Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container)
    );
    // NOTE this.view is custom attr, not Component attr
  }

  componentWillUnmount() {  // just before Unmount
    // NOTE find the Blaze forms created and destroy them
    // should do it manually

    Blaze.remove(this.view);
  }

  render() {
    return (
      <div ref="container"></div>
    );
  }
}

export default Accounts;
