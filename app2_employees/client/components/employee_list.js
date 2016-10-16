import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../import/collections/employees.js';
// NOTE use curly braces to import Employees.Employees
import EmployeeDetail from './employee_detail';

const PER_PAGE = 20;  // NOTE display num

const EmployeeList = (props) => {
  // props.employees : array of Employees obj

  return (
    <div>
      <div className="employee-list">
        {props.employees.map((employee) =>
          <EmployeeDetail key={employee._id} employee={employee}/>
        )}
      </div>
      <button
        onClick={() => {
          Meteor.subscribe('employees', 40);  //hard code to display 40 records
        }}
        className="btn btn-primary">
        Load More...
      </button>
    </div>
  );
};

export default createContainer(() => {

  // setup subscription
  Meteor.subscribe('employees', PER_PAGE);
  // NOTE pass PER_PAGE to server publish()

  // return an object,
  // whatever it returns will be inject to EmployeeList as props
  return { employees: Employees.find({}).fetch() };
  // NOTE we can fetch only what we've subscribe to (e.g. limited 20 records)

}, EmployeeList);
