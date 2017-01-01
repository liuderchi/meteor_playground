import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish('bins', function() {  // NOTE DO NOT use fat arrow fcn
    return Bins.find({ownerId: this.userId});
    // meteor method: this.userId  // https://docs.meteor.com/api/methods.html
  });

  Meteor.publish('sharedBins', function() {
    const user = Meteor.users.findOne(this.userId);
    // return current user via Meteor method

    if (!user) { return; }
    const email = user.emails[0].address;

    return Bins.find({
      sharedWith: { $elemMatch: { $eq: email } }
    });
  });
});
