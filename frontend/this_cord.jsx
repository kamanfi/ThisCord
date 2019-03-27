import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
/////TESTING
// import * as sessionUtil from './util/sessionApiUtil';
import { login, logout, signup } from '../frontend/actions/session_actions';
// import Root from '../frontend/components/root';


document.addEventListener('DOMContentLoaded', ()=>{
  const root = document.getElementById('root');
  const store = configureStore();
  // TESTING
    window.signup = signup;
    window.logout = logout;
    window.login = login;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
  //TESTING
  ReactDOM.render(<Root store={store} />, root)
});