import {combineReducers} from 'redux';
import {usersReducer} from './users_reducer';

export const entities = combineReducers ({
    users: usersReducer
});
