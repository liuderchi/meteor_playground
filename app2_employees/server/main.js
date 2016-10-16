// Executed on Server
import _ from 'lodash';
import { helpers, image } from 'faker';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../import/collections/employees';

Meteor.startup( () => {

  const numberRecords = Employees.find({}).count();
  console.log(numberRecords);

  if (!numberRecords) {

    _.times(5000, () => {    // NOTE repeate 5000 times
      const {name, email, phone} = helpers.createCard();  //es6 destructing assign
      Employees.insert({
        name, email, phone,    //es6
        avatar: image.avatar()
      });
    });
  }

  // define publishment
  Meteor.publish('employees', (per_page) => {  // NOTE arg from client subscribe()
    return Employees.find({}, {limit: per_page});
  });
});
