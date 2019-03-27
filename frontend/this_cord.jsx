import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';


/////TESTING
// import * as sessionUtil from './util/sessionApiUtil';
import { login, logout, signup } from '../frontend/actions/session_actions';
// import Root from '../frontend/components/root';


document.addEventListener('DOMContentLoaded', ()=>{
  const root = document.getElementById('root');
  let store = configureStore();


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
  
  // TESTING
    window.signup = signup;
    window.logout = logout;
    window.login = login;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
  //TESTING
  ReactDOM.render(<Root store={store} />, root)
});