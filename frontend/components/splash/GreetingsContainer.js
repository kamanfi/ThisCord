import { logout, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Greetings from './Greetings';

const msp = (state, ownProps) => {

  
  // const currentUser = (state.session === null ? null : state.entities.users[state.session.id]);
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(Greetings);
