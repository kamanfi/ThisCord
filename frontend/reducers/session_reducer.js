import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_ERRORS
} from '../actions/session_actions';

export const session = (oldState = {id: null}, action) =>{
    
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            const newState = {id: action.user.id};
            return newState;
        case LOGOUT_CURRENT_USER:
            return null;
        default:
            return oldState;
    }
};