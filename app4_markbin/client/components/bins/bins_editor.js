import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';  // run this script

class BinsEditor extends Component {
  onEditorChange(content) {
    // NOTE content is not event object
    console.log(content);

    // TODO update bin with content
  }
  render() {
    return (
      <div className="col-xs-8">
        <h5>Input</h5>
        <CodeMirror
          onChange={this.onEditorChange.bind(this)}
          options={{ mode: 'markdown', lineNumbers: true }}/>
        {/*NOTE pass object {} into options*/}
      </div>
    );
  }
}

export default BinsEditor;
