import { act } from "react-dom/test-utils";
import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITE } from "../actions";

const initialMoviesState = {
    movies: [],
    favourites: [],
    showFavourites: false
}
export default function movies(state = initialMoviesState, action){

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
