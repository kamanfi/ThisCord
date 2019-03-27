import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Greetings from './Greetings';

const msp = (state, ownProps) => {

  
  const currentUser = (state.session === null ? null : state.entities.users[state.session.id]);
  return {
    currentUser
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(msp, mdp)(Greetings);
