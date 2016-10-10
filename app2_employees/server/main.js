// Executed on Server

import { Meteor } from 'meteor/meteor';
import { Employees } from '../import/collections/employees';

Meteor.startup( () => {

  const numberRecords = Employees.find({}).count();

  if (!numberRecords) {
    // TODO generate data if not existed in db
  }
});
