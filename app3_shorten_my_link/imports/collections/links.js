// create mongo colletion

import { Mongo } from 'meteor/mongo';
import { check, Match } from 'meteor/check';
import validUrl from 'valid-url';
// NOTE check var with customize validation by Match, validUrl
// throws js exception if validation fails

// NOTE create meteor method in imports shared for both client/server

Meteor.methods({
  'links.insert': function(url) {
    check(url, Match.Where(url => validUrl.isUri(url)));
  }
});

export const Links = new Mongo.Collection('links');
