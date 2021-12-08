import React from 'react';
import ReactDOM from 'react-dom';
// Import redux stuff
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// Import reducers
import { reducer } from './reducers';

import App from './App';
import './index.css';

// Create store
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
