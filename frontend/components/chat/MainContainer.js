import React from 'react';
import { logout} from '../../actions/session_actions';
import { connect } from 'react-redux';
import Main from './Main';


const msp = (state, ownProps) => {


  // const currentUser = (state.session === null ? null : state.entities.users[state.session.id]);
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(msp, mdp)(Main);
