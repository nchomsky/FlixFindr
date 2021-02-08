import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { selectedMovie } from '../../../../actions/index';

class MovieItem extends Component {

    clickHandler = () => {
        this.props.selectedMovie(this.props.movie.id);
    }

    render() {
        const { movie } = this.props;
        return (
            <Link onClick={this.clickHandler} to={`movie/${movie.id}`} style={{ textDecoration: 'none' }} >
                <div className="movieItem" >
                    <div className="movieItem__titleYear">
                        <h4>{movie.title}</h4>
                        <h4>{movie.release_date ? movie.release_date.slice(0, 4) : 'No Release Date Available'}</h4>
                    </div>
                    <div className="movieItem__image">{
                        movie.poster_path ? (
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                        ) : <div className="movieItem__image--none"> No Image Available</div>
                    }
                    </div>
                </div>
            </Link >
        )
    }

};


export default connect(null, { selectedMovie: selectedMovie })(MovieItem);