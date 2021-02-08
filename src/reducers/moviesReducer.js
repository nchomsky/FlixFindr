
const initialState = {
    movies: [],
    searched: false,
    movieSelected: null
}

export default (state = initialState, action) => {
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
        default:
            return state;
    }

}