import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Container from './Container/Container';
// import MovieNotFound from './Container/MovieGrid/MovieNotFound/MovieNotFound';
import '../App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Container} />
        {/* <Route path="/movie/:id" exact component={MovieNotFound} /> */}
      </div>
    );
  }
}

export default App;
