import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import App from './components/app';
import businessesReducer from './reducers/businesses_reducer';
import '../assets/stylesheets/application.scss';
import businesses from './data/businesses.js';


const initialState = {
  businesses: businesses
};

const reducers = combineReducers({
  businesses: businessesReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);
// debugger
// render an instance of the component in the DOM


ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
