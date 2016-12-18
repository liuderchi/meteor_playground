import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';

class BinsList extends Component {
  render() {
    console.log(this.props.bins);
    return (
      <div>Bins List</div>
    );
  }
}

export default createContainer( () => {
  Meteor.subscribe('bins');

  // obj will be injected to LinkList, access by this.props.bins
  return { bins: Bins.find({}).fetch() };
}, BinsList);
