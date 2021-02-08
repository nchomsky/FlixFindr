
const initialState = {
    movies: [],
    searched: false,
    searchQuery: "",
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
        case 'INPUT_CHANGE':
            return {
                ...state,
                searchQuery: action.payload
            }
        default:
            return state;
    }

}