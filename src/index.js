import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({reducer: rootReducer});

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
