
const initialState = {
    movies: [],
    searched: false,
    searchQuery: "",
    selectedMovie: null,
    movieDetails: {}
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_POPULAR_MOVIES':
            return {
                ...state,
                movies: action.payload.results,
                loaded: true
            };
        case 'SEARCH_MOVIES':
            return {
                ...state,
                movies: action.payload.results,
                searched: true
            };
        case 'INPUT_CHANGE':
            return {
                ...state,
                searchQuery: action.payload
            };
        case 'SELECT_MOVIE':
            return {
                ...state,
                selectedMovie: action.payload
            };
        case 'FETCH_MOVIE_DETAILS':
            return {
                ...state,
                movieDetails: action.payload
            };
        case 'REMOVE_MOVIE_DETAILS':
            return {
                ...state,
                movieDetails: action.payload
            };
        default:
            return state;
    }

}

export default moviesReducer;