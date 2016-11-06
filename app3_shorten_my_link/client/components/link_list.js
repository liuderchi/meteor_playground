import React from 'react';
import { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Links } from '../../imports/collections/links';


class LinkList extends Component {
  renderRows() {
    return this.props.links.map((link) => {
      const {url, token, clicks} = link;
      const shortLink = `http:localhost:3000/${token}`;

      return (
        <tr key={token}>
          <td>{url}</td>
          <td><a href={`${token}`}>{shortLink}</a></td>
          <td>{clicks}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>URL</th>
            <th>Address</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }
}


// export default LinkList;
export default createContainer(() => {
  Meteor.subscribe('links');

  // obj will be injected to LinkList, access by this.props.links
  return { links: Links.find({}).fetch() };
}, LinkList);
