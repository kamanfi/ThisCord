import Nav2 from './Nav2';
import { connect } from 'react-redux';
import { fetchTextChannels } from '../../actions/textChannel_actions';
import { fetchUsers } from '../../actions/server_actions';
import { logout } from '../../actions/session_actions';



const msp = (state, ownProps) => {

    return {
      textChannels: Object.values(state.entities.textChannels),
      server: state.entities.servers[ownProps.match.params.serverId],
      currentUser: Object.values(state.entities.users[state.session.id])
    };
  }
  

const mdp = dispatch => {
  return {
    fetchTextChannels: (id) => dispatch(fetchTextChannels(id)),
    logout: () => dispatch(logout()),
    fetchUsers: (id) => dispatch(fetchUsers(id))
  };
};

export default connect(msp, mdp)(Nav2);
