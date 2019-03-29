import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions';

export const sessionErrorsReducer = (oldState = [], action) => {
  debugger
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      const newState = action.errors;
      return newState;
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};