import {connect} from 'react-redux';
import TitleInfo from './TitleInfo.jsx'
import { withRouter } from 'react-router-dom';

const msp = (state,ownProps) =>{
    debugger
    return {
       
        serverName: state.entities.currentServer.server_name
    }
}

export default connect(msp,null)(withRouter(TitleInfo));