import React, { Component } from 'react';
import Homepage from './components/Homepage/Homepage';

class App extends Component {
  render() {
    console.log('App props', this.props);
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
