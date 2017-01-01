import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'bins.insert': function() {   // NOTE NO fat arrow to keep this.userId clean
    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId
      // NOTE this.userId is meteor method RPC API
      // NOTE guest without auth can create bin
    });
  },

  'bins.remove': function(bin) {
    return Bins.remove(bin);
  },

  'bins.update': function(bin, content) {
    // NOTE use mongo modifier
    return Bins.update(bin._id, { $set : { content } });
  },

  'bins.share': function(bin, email) {
    return Bins.update(bin._id, { $push: { sharedWith: email }});
  }
});

export const Bins = new Mongo.Collection('bins');
