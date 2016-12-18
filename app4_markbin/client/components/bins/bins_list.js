import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';

class BinsList extends Component {
  renderlist() {
    return this.props.bins.map((bin) => {
      return (
        <li className="list-group-item" key={bin._id}>
          Bin {bin._id}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderlist()}
      </ul>
    );
  }
}

export default createContainer( () => {
  Meteor.subscribe('bins');

  // obj will be injected to LinkList, access by this.props.bins
  return { bins: Bins.find({}).fetch() };
}, BinsList);
