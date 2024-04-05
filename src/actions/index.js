// {
//     type: 'ADD_MOVIES'
// }


// Action Types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE';


// Action Creators
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies
      }
}

export function addFavourite(movie){
  return {
      type: ADD_FAVOURITE,
      movie
    }
}

export function removeFavourite(movie){
  return {
      type: REMOVE_FAVOURITE,
      movie
    }
}

export function setShowFavourites(val){
  return {
      type: SET_SHOW_FAVOURITE,
      val
    }
}