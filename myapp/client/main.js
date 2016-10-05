// Any JS in here is automatically ran for us

// Import the React library
import React from 'react';
import { Component } from 'react';  // NOTE import React.Component as Component
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

// Create a component
class App extends Component {
  constructor(props){
    super(props);
    this.state = { images: [] };
  }
  componentWillMount() {
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then( response => {
        // NOTE set state in smart way by react, would render() automatically
        this.setState({images: response.data.data});

        // NOTE NEVER DO THIS:
        // this.state.images = response.data.data;
        // this.render();
      });
      // NOTE we want do re-render in Callback
      //      should using state which Component has access to
      //      state of App changes > re-render App > re-render child components
  }
  render() {
    console.log(this.state.images);  // NOTE would call each time re-render
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
