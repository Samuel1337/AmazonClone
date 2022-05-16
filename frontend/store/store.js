<<<<<<< HEAD
import RootReducer from '../reducers/root_reducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => (
    createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
)
=======
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk'
import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

export default configureStore;
>>>>>>> user-auth

