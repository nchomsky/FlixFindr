import React, { Component } from 'react';
import MovieItem from './MovieItem/MovieItem';
import MovieNotFound from './MovieNotFound/MovieNotFound'
import { connect } from 'react-redux';
import { loadPopularMovies } from '../../../actions/index';

class MovieGrid extends Component {

    componentDidMount() {
        this.props.loadPopularMovies();
    }

    // Add componentDidUpdate to compare prior state to the newState and have it rerender the movies?
    //Or will that happen automatically with redux form

    render() {
        if (this.props.movies.length !== 0) {
            return (
                <div className="grid__container">
                    {this.props.movies.map(movie => {
                        return (

                            <MovieItem movie={movie} key={movie.id} />

                        );
                    })}
                </div>
            );
        } else if (this.props.searched === true && this.props.movies.length === 0) {
            return <MovieNotFound />
        } else {
            return <div></div>
        }
    }

};


const mapStateToProps = (state) => {
    // movies is the prop and state is mapped to the movies prop
    //the movies prop is accessed by this component
    return {
        movies: state.movies.movies,
        searched: state.movies.searched
    };
};

export default connect(mapStateToProps, { loadPopularMovies: loadPopularMovies })(MovieGrid);