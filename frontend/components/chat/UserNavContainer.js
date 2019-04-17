import React from 'react';
import UserNav from './UserNav';
import { logout} from '../../actions/session_actions';
import { connect } from 'react-redux';


const msp = state => {
    debugger
    return {
        user: Object.values(state.entities.users[state.session.id])
    };
};

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(msp,mdp)(UserNav);