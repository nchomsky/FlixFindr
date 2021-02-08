import movies from '../apis/movies';
const KEY = '01300e67fc753328e53597dcb77de4b4';

//With thunk can return a asynchronous function instead of an object that is typically required
export const searchMovies = (term) => {
    return async (dispatch) => {
        const response = await movies.get('/search/movie?', {
            params: {
                api_key: KEY,
                language: 'en-US',
                query: term,
                page: 1,
                include_adult: false,
            }
        });

        dispatch({
            type: 'SEARCH_MOVIES',
            payload: response.data
        });
    };
};

export const loadPopularMovies = () => {
    return async (dispatch) => {
        const response = await movies.get('/movie/popular?', {
            params: {
                api_key: KEY,
                page: 1
            }
        });
        dispatch({
            type: 'LOAD_POPULAR_MOVIES',
            payload: response.data
        });
    };
};

export const fetchMovieDetails = (id) => {
    return async (dispatch) => {
        const response = await movies.get(`/movie/${id}?`, {
            params: {
                api_key: KEY,
                language: 'en-US'
            }
        });
        dispatch({
            type: 'FETCH_MOVIE_DETAILS',
            payload: response.data
        });
    };
};

export const inputChange = (value) => {
    return {
        type: 'INPUT_CHANGE',
        payload: value
    }
};

// Select movie ID
export const selectedMovie = (id) => {
    return {
        type: 'SELECT_MOVIE',
        payload: id
    }
};
export const removeDetails = (value) => {
    return {
        type: 'REMOVE_MOVIE_DETAILS',
        payload: value
    }
};
