
const initialState = {
    movies: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_POPULAR_MOVIES':
            return {
                ...state,
                popularMovies: [action.payload.results]
            };
        case 'SEARCH_MOVIES':
            return {
                ...state,
                SearchMovies: [...state, action.payload]
            };
        default:
            return state;
    }

}