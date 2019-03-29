import {combineReducers} from 'redux';
import {usersReducer} from './users_reducer';
import { serversReducer} from './servers_reducer';

export const entities = combineReducers ({
    users: usersReducer,
    servers: serversReducer
});
