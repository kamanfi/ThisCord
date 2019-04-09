import Nav2 from './Nav2';
import { connect } from 'react-redux';
import { fetchTextChannels } from '../../actions/textChannel_actions';



const msp = (state, ownProps) => {

    return {
      textChannels: Object.values(state.entities.textChannels),
      server: state.entities.servers[ownProps.match.params.serverId]
    };
  }
  

const mdp = dispatch => {

  return {
    fetchTextChannels: (id) => dispatch(fetchTextChannels(id))
  };
};

export default connect(msp, mdp)(Nav2);
