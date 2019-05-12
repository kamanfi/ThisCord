import {
  RECEIVE_DIRECT_MESSAGES,
  RECEIVE_DIRECT_MESSAGE,
} from '../actions/directMessageAction';
import {LOGOUT_CURRENT_USER} from '../actions/session_actions';

import { merge } from 'lodash';

export const directMessagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_DIRECT_MESSAGES:
      return merge({}, oldState, action.directMessages);
    case RECEIVE_DIRECT_MESSAGE:
      return merge({}, oldState, { [action.directMessage.id]: action.directMessage });
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
}
