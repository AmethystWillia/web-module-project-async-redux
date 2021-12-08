import React from 'react';
import ReactDOM from 'react-dom';
// Import redux stuff
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// Import reducers
import { catReducer } from './reducers/catReducer';

// Create store
const store = createStore(catReducer, applyMiddleware(thunk, logger));

import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
