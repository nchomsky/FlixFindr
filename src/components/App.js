import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Container from './Container/Container';
import MovieModal from './MovieModal/MovieModal';
import '../App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Container} />
        <Route path="/movie/:id" exact component={MovieModal} />
      </div>
    );
  }
}

export default App;
