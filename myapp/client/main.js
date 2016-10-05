// Any JS in here is automatically ran for us

// Import the React library
import React from 'react';
import { Component } from 'react';  // NOTE import React.Component as Component
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

// Create a component
class App extends Component {
  componentWillMount() {
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then( response => console.log(response) );
  }
  render() {
    return (
      <div>
        <ImageList />
      </div>
    );
  }
}

// Render this root App component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
  // NOTE ReactDOM is usually used one time
});
