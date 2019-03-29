import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './SessionForm';
import { signup, clearErrors } from '../../actions/session_actions';


const msp = (state,ownProps) => {
  const defaultValue ={
    email: "",
    password: "",
    user_name: ""
  };
  return {
    errors: state.errors.session,
    user: defaultValue,
    formType: 'Sign Up'
  };

};

const mdp = dispatch =>{
  return {
   action: user => dispatch(signup(user)),
   clearErrors: () => dispatch(clearErrors())
  };
};


export default connect( msp,mdp)(SessionForm);