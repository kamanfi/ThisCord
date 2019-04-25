import React from 'react';
import { logout} from '../../actions/session_actions';
import { connect } from 'react-redux';
import Main from './Main';
import { fetchServers } from '../../actions/server_actions';
import { fetchTextChannels } from '../../actions/textChannel_actions';
import { fetchDirectMessages } from '../../actions/directMessageAction'

const msp = (state, ownProps) => {

  return {
    currentUser: Object.values(state.entities.users[state.session.id]),
    servers: Object.values(state.entities.servers),
    dmServers: Object.values(state.entities.directMessages)
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchServers: () => dispatch(fetchServers()),
    fetchTextChannels: (id) => dispatch(fetchTextChannels(id)),
    fetchDirectMessages: () => dispatch(fetchDirectMessages())
  };
};

export default connect(msp, mdp)(Main);
