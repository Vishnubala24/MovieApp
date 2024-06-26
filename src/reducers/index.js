import { combineReducers } from "redux";
import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITE, ADD_SEARCH_RESULT, ADD_MOVIE_TO_LIST } from "../actions";

const initialMoviesState = {
    movies: [],
    favourites: [],
    showFavourites: false
}
export function movies(state = initialMoviesState, action){

    console.log('MOVIE REDUCER');

    switch(action.type) {
        case ADD_MOVIES:
            return {
                    ...state,
                    movies: action.movies
                };
        
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            };

        case REMOVE_FAVOURITE:
            const filteredArr = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            )
            return {
                ...state,
                favourites: filteredArr
            };
    
        case SET_SHOW_FAVOURITE:
            return {
                ...state,
                showFavourites: action.val
            }
        case ADD_MOVIE_TO_LIST:
            return {
                    ...state,
                    movies: [action.movie, ...state.movies]
                };
        default:
            return state;
    }
}

const initialSearchState = {
    result: {},
    showSearchResults: false
}
export function search(state = initialSearchState, action){
    console.log('SEARCH REDUCER');

    switch(action.type) {
        case ADD_SEARCH_RESULT:
            return {
                    ...state,
                    result: action.movie,
                    showSearchResults: true
                };
        case ADD_MOVIE_TO_LIST:
            return {
                    ...state,
                    showSearchResults: false
                };
        default:
            return state;
    }
}

const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
}

// export default function rootReducer(state = initialRootState, action){
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

export default combineReducers({
    movies,
    search
});