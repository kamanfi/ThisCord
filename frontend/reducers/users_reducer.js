
import {
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';

import {
    RECEIVE_USERS
} from '../actions/server_actions';


import {merge} from 'lodash';

export const usersReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({},oldState,{[action.user.id]: action.user});
        case RECEIVE_USERS:
            return merge({},oldState,action.users);
        default:
            return oldState;
    }
};