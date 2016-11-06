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

    // generate token w/ length 5
    const token = Math.random().toString(36).slice(-5);  // numObj.toString([radix])
    Links.insert({url, token, clicks: 0});
  }
});

export const Links = new Mongo.Collection('links');
