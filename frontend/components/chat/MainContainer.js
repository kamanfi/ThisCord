import React from 'react';
import { logout} from '../../actions/session_actions';
import { connect } from 'react-redux';
import Main from './Main';
import { fetchServers } from '../../actions/server_actions';
import { fetchTextChannels } from '../../actions/textChannel_actions';


const msp = (state, ownProps) => {


  // const currentUser = (state.session === null ? null : state.entities.users[state.session.id]);
  return {
    currentUser: Object.values(state.entities.users[state.session.id]),
    servers: Object.values(state.entities.servers)
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchServers: () => dispatch(fetchServers()),
    fetchTextChannels: (id) => dispatch(fetchTextChannels(id))
  };
};

export default connect(msp, mdp)(Main);
