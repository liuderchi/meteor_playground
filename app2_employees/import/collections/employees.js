// declare employees collection
// NOTE files in ./import folder is shared by ./client and ./server

import { Mongo } from 'meteor/mongo';

export const Employees = new Mongo.Collection('employees');

// NOTE use 'export' rather than 'export default' for multiple exportion
