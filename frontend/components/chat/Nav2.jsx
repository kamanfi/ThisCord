import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const Nav2 = (props) =>{


  
  const chatbox =(id) =>{
    let channel_id = props.match.params.serverId;
    // props.history.push(`/@me/${channel_id}/${id}`);
  };



  const lis = props.textChannels.map( (channel) => {
    return <li className='channels' key={channel.id} onClick={() => chatbox(channel.id)}># <span className='name'>{channel.name}</span> </li>
  });
  debugger
  return(

    <nav className='nav2'>
    <span className='server-name'>{props.server_name}</span>
<     p className='create-container'>
        <span>TEXT CHANNEL</span>
        <span className='plus-button' onClick={() => dispatch(openModal('createChannel'))} >+</span>
      </p>
      <ul className='first_channel'>
        {lis.shift()} <img onClick={() => dispatch(openModal('inviteCode'))} src="assets/nav2/add.svg" alt="" />
      </ul> 
      <ul className='channelul'>
        {lis}
      </ul>

    </nav>
    
  )
}

const msp = (state, ownProps) => {
  debugger
  return {
    textChannels: Object.values(state.entities.textChannels),
    server_name: state.entities.currentServer.server_name
  }
}



export default connect(msp)(Nav2);

