import { connect } from 'react-redux';
import DirectMessages from '././Directmessage';
import { fetchDirectMessages } from '../../actions/directMessageAction'

const msp = (state, ownProps) => {

  return {
    dmServers: Object.values(state.entities.directMessages),
    currentUser: Object.values(state.entities.users).pop()
  };
};

const mdp = dispatch => {
  return {
    fetchDirectMessages: () => dispatch(fetchDirectMessages())
    
  };
};

export default connect(msp, mdp)(DirectMessages);
