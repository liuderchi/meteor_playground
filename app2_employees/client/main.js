import React from 'react';
import ReactDOM from 'react-dom';

import EmployeeList from './components/employee_list';

const App = () => {
  return (
    <h1>
      <EmployeeList />
    </h1>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
