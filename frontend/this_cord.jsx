import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';


/////TESTING
// import * as sessionUtil from './util/sessionApiUtil';
import { login, logout, signup } from '../frontend/actions/session_actions';
import { fetchServers, fetchServer, createServer, deleteServer } from './actions/server_actions';
// import { fetchServers, fetchServer, createServer, deleteServer } from './util/severApiUtil';
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
  //TESTING
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING user auth
    window.signup = signup;
    window.logout = logout;
    window.login = login;
  // TESING servers
    window.fetchServers = fetchServers;
    window.fetchServer  = fetchServer;
    window.createServer = createServer;
    window.deleteServer = deleteServer;

  ReactDOM.render(<Root store={store} />, root)
});