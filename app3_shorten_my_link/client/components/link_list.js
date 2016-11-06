import React from 'react';
import { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Links } from '../../imports/collections/links';


class LinkList extends Component {
  render() {
    return (
      <div>Links to create</div>
    );
  }
}


// export default LinkList;
export default createContainer(() => {
  Meteor.subscribe('links');

  // obj will be injected to LinkList, access by this.props.links
  return { links: Links.find({}).fetch() };
}, LinkList);
