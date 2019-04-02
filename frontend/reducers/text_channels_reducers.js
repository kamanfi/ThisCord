import {
  RECEIVE_TEXT_CHANNELS,
  RECEIVE_TEXT_CHANNEL,
  DELETE_TEXT_CHANNEL
} from '../actions/textChannel_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

export const textChannelReducer = (oldState = {}, action) => {
  
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TEXT_CHANNELS:
      return action.text_channels;
    case RECEIVE_TEXT_CHANNEL:
      return merge({}, oldState, { [action.text_channel.id]: action.text_channel });
    case DELETE_TEXT_CHANNEL:
      let newState = oldState;
      delete newState[action.serverId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};