import React, { Component } from 'react';
import Header from './Header/Header';
import MovieGrid from './MovieGrid/MovieGrid';

class Container extends Component {

    render() {
        return (
            <div className="container">
                <Header />
                <div className="grid">
                    <MovieGrid />
                </div>
            </div>
        );
    }

}

export default Container;