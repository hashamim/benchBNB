import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from "./util/session_api_util";
import configureStore from './store/store';
document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome To B E N C H B N B</h1>, root);
    window.getState = store.getState;
    window.dispatch = store.dispatch;
});


window.signup = APIUtil.signup;
window.login = APIUtil.login;
window.logout = APIUtil.logout;