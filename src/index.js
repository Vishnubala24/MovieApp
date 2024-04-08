import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { configureStore, Tuple } from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk';
import rootReducer from './reducers';

//  logget(obj)(next)(action)
// const logger = function({ dispatch, getState }){
//   console.log("LOL 1")
//   return function(next){
//     return function(action){
//       console.log('ACTION_TYPE = ', action.type);
//       next(action);
//     }
//   }
// }

// Above function can be writtern in below form as well
const logger = ({ dispatch, getState }) => (next) => (action) => {
  if(typeof action !== 'function')
    console.log('ACTION_TYPE = ', action.type);
  next(action);
}


// Instead of below code we are using redux-thunk
// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   if(typeof action === 'function'){
//     action(dispatch)
//     return;
//   }
//   next(action);
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
                  reducer: rootReducer,
                  middleware: () => new Tuple(logger, thunk)
              });

// console.log(store);
// console.log(store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Batman'}]
// })

// console.log(store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'IronMan'}]
// })

// console.log(store.getState());

root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
