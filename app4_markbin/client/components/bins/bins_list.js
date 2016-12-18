import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';

class BinsList extends Component {

  onBinRemove(bin) {
    console.log(`deleting bin ${bin._id}`);
    Meteor.call('bins.remove', bin);
  }

  renderlist() {
    return this.props.bins.map((bin) => {
      return (
        <li className="list-group-item" key={bin._id}>
          Bin {bin._id}
          <span className="pull-right">
            <button
              className="btn btn-danger"
              onClick={() => this.onBinRemove(bin)}>
              Remove
            </button>
            {/*NOTE DO NOT use this.onBinRemove.bind(this) HERE*/}
          </span>
        </li>
      );
    });
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
