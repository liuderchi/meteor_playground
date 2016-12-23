import React, { Component } from 'react';
import { markdown } from 'markdown';

class BinsViewer extends Component {
  render() {
    const rawHTML = markdown.toHTML(this.props.bin.content);
    // NOTE rawHTML is string
    return (
      <div className="col-xs-4">
        <h5>Output</h5>
        <div dangerouslySetInnerHTML={{ __html:rawHTML }}></div>
        {/*NOTE this is a XSS security hole*/}
      </div>
    );
  }
}

export default BinsViewer;
