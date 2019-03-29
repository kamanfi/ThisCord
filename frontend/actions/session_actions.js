import * as SessionApi from '../util/sessionApiUtil';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: currentUser
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};
export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {

  return {
    type: CLEAR_ERRORS,
    errors: []
  };
};

export const login = (user) => dispatch => {

  return ( 
    SessionApi.login(user).then((user) => dispatch(receiveCurrentUser(user)),
    err => (
      dispatch(receiveErrors(err.responseJSON))
    )));

};

export const logout = () => dispatch => {
  return SessionApi.logout().then(() => dispatch(logoutCurrentUser()));
};

export const signup = (user) => dispatch => {
  
  return ( 
      SessionApi.signup(user).then((user) => dispatch(receiveCurrentUser(user)),
    err => (
      dispatch(receiveErrors(err.responseJSON))
    )));
};