import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import combinationOfReducers from './reducers/index';
import {Provider} from 'react-redux'
/**
 * STore==>Globalize Store----------------------------------------| 
 *                                                                |
 * Action ==>INCREMENT                                            |
 *      |                                                         |   //Based on Action Reducer calls Modifies State in Store
 *    sends//Based On action                                      |
 *      |                                                         |
 * Reducer ==>Manage how Action moves your state to next state ---|
 * 
 * 
 * DISPATCH ==>EXECUTES ACTION
 */
// eslint-disable-next-line
 const store = createStore(combinationOfReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
