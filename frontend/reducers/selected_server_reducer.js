import { SELECT_SERVER, UNSELECT_SERVER } from '../actions/current_server_actions';

export const currentServerReducer = (state = null, action) =>{
  
  switch (action.type) {
    case SELECT_SERVER:
      return action.serverId;
    case UNSELECT_SERVER:
      return null;
    default:
      return state;
  }
} 