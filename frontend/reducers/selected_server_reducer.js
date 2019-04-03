import { SELECT_SERVER, UNSELECT_SERVER, RETURN_SERVER} from '../actions/current_server_actions';

export const currentServerReducer = (state = {}, action) =>{
  
  switch (action.type) {
    case SELECT_SERVER:
      return action.info;
    case RETURN_SERVER:
      return state;
    case UNSELECT_SERVER:
      return {};
    default:
      return state;
  }
}; 