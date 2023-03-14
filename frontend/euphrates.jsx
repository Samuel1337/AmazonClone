import React from "react";
import configureStore from "./store/store";
import Root from './components/root'
import { signup, login, logout } from './actions/session_actions'
import { postReview } from "./util/reviews_api_util";
import { createRoot } from 'react-dom/client';

document.addEventListener("DOMContentLoaded", () => {
    // set up Store
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
            users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    // set up Root
    const root = createRoot(document.getElementById("root"));
    root.render(<Root store={store} />, root);

    // testing
    window.store = store;
    window.getState = store.getState;
    window.user = {username: 'Sam', password: '123456'}
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.dispatch = store.dispatch;
    window.postReview = postReview;
});
