import React, { Component } from 'react';
import MovieItem from './MovieItem/MovieItem';
import { connect } from 'react-redux';
import { fetchMovies } from '../../../actions/index';
class MovieGrid extends Component {

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
            <div className="grid__container">
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
            </div>
        );
    }

};

export default connect(null, { fetchMovies: fetchMovies })(MovieGrid);