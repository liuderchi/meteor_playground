import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../import/collections/employees.js';
// NOTE use curly braces to import Employees.Employees
import EmployeeDetail from './employee_detail';


const EmployeeList = (props) => {
  // props.employees : array of Employees obj

  return (
    <div>
      <div className="employee-list">
        {props.employees.map((employee) =>
          <EmployeeDetail key={employee._id} employee={employee}/>
        )}
      </div>
    </div>
  );
};

export default createContainer(() => {

  // setup subscription
  Meteor.subscribe('employees');

  // return an object,
  // whatever it returns will be inject to EmployeeList as props
  return { employees: Employees.find({}).fetch() };
  // NOTE we can fetch only what we've subscribe to (e.g. limited 20 records)

}, EmployeeList);
