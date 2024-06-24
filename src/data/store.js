/*eslint-disable*/
import { createStore } from 'redux';
import {compose } from 'redux';



import { reducer } from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers());
