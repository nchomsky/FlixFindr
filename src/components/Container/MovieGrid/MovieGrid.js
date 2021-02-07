import React, { Component } from 'react';
import MovieItem from './MovieItem/MovieItem';
import { connect } from 'react-redux';
import { loadPopularMovies } from '../../../actions/index';
class MovieGrid extends Component {

    componentDidMount() {
        this.props.loadPopularMovies();
    }

    render() {
        console.log(this.props.movies);
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

//connects the dat
const mapStateToProps = (state) => {
    // movies is the prop and state is mapped to the movies prop
    //the movies prop is accessed by this component
    return { movies: state.movies };
};

export default connect(mapStateToProps, { loadPopularMovies: loadPopularMovies })(MovieGrid);