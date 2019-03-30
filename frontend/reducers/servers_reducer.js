import {
RECEIVE_SERVERS,
RECEIVE_SERVER,
DELETE_SERVER
} from '../actions/server_actions';
import {LOGOUT_CURRENT_USER} from '../actions/session_actions';
import { merge } from 'lodash';

export const serversReducer = (oldState={}, action) =>{
  Object.freeze(oldState);
  debugger
  
  switch(action.type){
    case RECEIVE_SERVERS:
      return merge({}, oldState, action.servers);
    case RECEIVE_SERVER:
      return merge({}, oldState, {[action.server.id]: action.server} );
    case DELETE_SERVER:
      let newState = oldState;
      delete newState[action.serverId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
}