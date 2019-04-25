import ChatRoom from './ChatRoom';
import { connect } from 'react-redux';
import { createDirectMessages,fetchDirectMessages } from '../../actions/directMessageAction'
import { createServer } from '../../actions/server_actions';

const msp = state =>{
    return {
        user_id: state.session.id,
        dms: Object.values(state.entities.directMessages)
    }
}

const mdp = dispatch =>{
    return{
        createDirectMessage: (createDirectMessage) => dispatch(createDirectMessages(createDirectMessage)),
        createServer: name => dispatch(createServer(name)),
        fetchDirectMessages: () => dispatch(fetchDirectMessages())
    };
};

export default connect(msp, mdp)(ChatRoom); 