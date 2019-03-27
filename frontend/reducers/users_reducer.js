
import {
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

import {merge} from 'lodash';

export const usersReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({},oldState,{[action.user.id]: action.user});
            // debugger
        default:
            return oldState;
    }
};