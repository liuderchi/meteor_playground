import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish('bins', function() {  // NOTE DO NOT use fat arrow fcn
    return Bins.find({ownerId: this.userId});
    // meteor method: this.userId  // https://docs.meteor.com/api/methods.html
  });
});
