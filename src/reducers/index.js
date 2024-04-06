import { combineReducers } from "redux";
import { act } from "react-dom/test-utils";
import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITE } from "../actions";


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
        default:
            return state;
    }
}

const initialSearchState = {
    result: {}
}
export function search(state = initialSearchState, action){
    console.log('SEARCH REDUCER');
    return state;
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