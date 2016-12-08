import React from 'react';
import { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../import/collections/employees.js';
// NOTE use curly braces to import Employees.Employees
import EmployeeDetail from './employee_detail';

const PER_PAGE = 20;  // NOTE display num

class EmployeeList extends Component {

  componentWillMount() {    // called when init
    this.page = 1;
  }

  handleButtonClick() {
    Meteor.subscribe('employees', PER_PAGE * (this.page + 1));
    // update subscription, not recreating subscription
    // improve transmission only 20+ employees
    this.page += 1;
  }

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
          onClick={this.handleButtonClick.bind(this)}
          className="btn btn-primary">
          Load More...
        </button>
        {/*NOTE use .bind(this) to pass outer this into inner function*/}
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
