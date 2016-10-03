// Any JS in here is automatically ran for us

// Import the React library
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';

// Create a component
const App = () => {
  return (
    <div>
      <ImageList />
    </div>
  );
};

// Render this root App component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
  // NOTE ReactDOM is usually used one time
});
