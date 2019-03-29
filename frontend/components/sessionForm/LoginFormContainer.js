import { connect } from 'react-redux';
import React from 'react'
import SessionForm from './SessionForm';
import { login, clearErrors } from '../../actions/session_actions';


const msp = (state, ownProps) => {
  const defaultValue = {
    email: "",
    password: "",
    user_name: ""
  };
  return {
    errors: state.errors.session,
    user: defaultValue,
    formType: 'Sign In'
  };

};

const mdp = dispatch => {
  return {
    action: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};


export default connect(msp, mdp)(SessionForm);