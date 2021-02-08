import React from 'react';
import { Link } from "react-router-dom";


const MovieItem = ({ movie }) => {

    return (
        <Link to={`movie/${movie.id}`} style={{ textDecoration: 'none' }} >
            <div className="movieItem">
                <div className="movieItem__titleYear">
                    <h4>{movie.title}</h4>
                    <h4>{movie.release_date.slice(0, 4)}</h4>
                </div>
                <div className="movieItem__image">{
                    movie.poster_path ? (
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                    ) : <div className="movieItem__image--none"> No Image Available</div>
                }
                </div>
            </div>
        </Link>
    );
};

export default MovieItem;