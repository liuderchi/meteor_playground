import React from 'react';
import { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../import/collections/employees.js';
// NOTE use curly braces to import Employees.Employees
import EmployeeDetail from './employee_detail';

const PER_PAGE = 20;  // NOTE display num

class EmployeeList extends Component {
  // NOTE this.props is set in default consctructor()
  // this.props.employees : array of Employees obj
  render() {
    return (
      <div>
        <div className="employee-list">
          {this.props.employees.map((employee) =>
            <EmployeeDetail key={employee._id} employee={employee}/>
          )}
        </div>
        <button
          onClick={() => {
            Meteor.subscribe('employees', 40);  //hard code to display 40 records
            // update subscription, not recreating subscription
            // NOTE we want to improve transmission only 20+ employees
          }}
          className="btn btn-primary">
          Load More...
        </button>
      </div>
    );
  }
}

export default createContainer(() => {

  // setup subscription
  Meteor.subscribe('employees', PER_PAGE);
  // NOTE pass PER_PAGE to server publish()

  // return an object,
  // whatever it returns will be inject to EmployeeList as props
  return { employees: Employees.find({}).fetch() };
  // NOTE we can fetch only what we've subscribe to (e.g. limited 20 records)

}, EmployeeList);
