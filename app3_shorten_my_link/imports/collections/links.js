// create mongo colletion

import { Mongo } from 'meteor/mongo';

// NOTE create meteor method in imports shared for both client/server

Meteor.methods({
  'links.insert': function(url) {
    console.log('trying to save', url);
  }
});

export const Links = new Mongo.Collection('links');
