import { connect } from 'react-redux';
import DirectMessages from '././Directmessage';
import { fetchDirectMessages } from '../../actions/directMessageAction';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {

  return {
    dmServers: Object.values(state.entities.directMessages),
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    fetchDirectMessages: () => dispatch(fetchDirectMessages())
    
  };
};

export default connect(msp, mdp)(withRouter(DirectMessages));
