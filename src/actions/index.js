import movies from '../apis/movies';

//With thunk can return a asynchronous function instead of an object that is typically required
export const fetchMovies = () => {
    return async (dispatch) => {
        const response = await movies.get('search/movie?');

        dispatch({
            type: 'FETCH_MOVIES',
            payload: response.results
        });
    };
};

//If i want to fetch specific details I can make a fetchDetails action creator