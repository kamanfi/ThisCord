import {combineReducers} from 'redux';
import {usersReducer} from './users_reducer';
import { serversReducer} from './servers_reducer';
import { textChannelReducer } from './text_channels_reducers';
import { currentServerReducer } from '../reducers/selected_server_reducer';

export const entities = combineReducers ({
    users: usersReducer,
    servers: serversReducer,
    currentServer: currentServerReducer,
    textChannels: textChannelReducer
});
