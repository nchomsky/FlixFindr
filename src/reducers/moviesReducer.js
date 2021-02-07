
const initialState = {
    movies: [],
    movieSelected: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_POPULAR_MOVIES':
            return {
                ...state,
                movies: action.payload.results
            };
        case 'SEARCH_MOVIES':
            return {
                ...state,
                movies: [action.payload.results]
            };
        default:
            return state;
    }

}