import React, { Component } from 'react';
import MovieItem from './MovieItem/MovieItem';
import { connect } from 'react-redux';
import { loadPopularMovies } from '../../../actions/index';
class MovieGrid extends Component {

    componentDidMount() {
        this.props.loadPopularMovies();
    }

    // renderList() {
    //     this.props.movies.map(movie => {
    //         return (
    //             <MovieItem title={movie.title} key={movie.id} />
    //         );
    //     });
    // }

    render() {
        console.log(this.props.movies);
        return (
            <div className="grid__container">
                {this.props.movies.map(movie => {
                    return (
                        <MovieItem movie={movie} key={movie.id} />
                    );
                })}
            </div>
        );
    }

};

//connects the dat
const mapStateToProps = (state) => {
    // movies is the prop and state is mapped to the movies prop
    //the movies prop is accessed by this component
    return { movies: state.movies.movies };
};

export default connect(mapStateToProps, { loadPopularMovies: loadPopularMovies })(MovieGrid);