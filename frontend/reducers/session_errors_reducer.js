import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';
const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      const newState = action.errors;
      return newState;
    default:
      return oldState;
  }
};