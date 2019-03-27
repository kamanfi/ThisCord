import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Greetings from './Greetings';

const msp = (state, ownProps) => {
  debugger
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(msp, mdp)(Greetings);
