import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const configureStore = (preloadedState = {}) => {
    createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
}

export default configureStore;