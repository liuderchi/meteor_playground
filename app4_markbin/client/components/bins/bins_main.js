import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import BinsEditor from './bins_editor';
import BinsViewer from './bins_viewer';

class BinsMain extends Component {
  render() {
    if (this.props.bin === undefined) { return (<div>Loading...</div>); }

    return (
      <div>
        <BinsEditor bin={this.props.bin}/>
        <BinsViewer bin={this.props.bin}/>
      </div>
    );
  }
}

export default createContainer((props) => {
  // NOTE access url like accessing this.props.params.binId in render() scope

  const { binId } = props.params;  // NOTE props arg is coming from BinsMain Component
  Meteor.subscribe('bins');  // subscribe even we did it in BinsList

  return { bin: Bins.findOne(binId) };  // access it by props.bin in reder() scope
}, BinsMain);
