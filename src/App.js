import React, { Component } from 'react';
import Navigation from './Navigation';
import Main from './Main';
import Form from './Form';
import ConfessionBoard from './ConfessionBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Main/>
        <Form/>
        <ConfessionBoard/>
      </div>
    );
  }
}

export default App;
