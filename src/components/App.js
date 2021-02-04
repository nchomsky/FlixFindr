import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Container from './Container/Container';
import '../App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Container} />
      </div>
    );
  }
}

export default App;
