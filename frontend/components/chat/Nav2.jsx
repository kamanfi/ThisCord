import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import ChatRoom from '../chat/ChatRoom';



class Nav2 extends React.Component{

  constructor(props){
    super(props)
    this.chatbox = this.chatbox.bind(this)
  }
   chatbox (id){
    let serverId = this.props.match.params.serverId;
    this.props.history.push(`/@me/${serverId}/${id}`);
  }
  
  
  render(){  
    const lis = this.props.textChannels.map( (channel) => {
    return <li className='channels' key={channel.id} onClick={() => this.chatbox(channel.id)}># <span className='name'>{channel.name}</span> </li>
    });
    return(
    <>
    <nav className='nav2'>
    <span className='server-name'>{this.props.server_name}</span>
<     p className='create-container'>
        <span>TEXT CHANNEL</span>
        <span className='plus-button' onClick={() => dispatch(openModal('createChannel'))} >+</span>
      </p>
      <ul className='first_channel'>
        {lis.shift()} <img onClick={() => dispatch(openModal('inviteCode'))} src={window.add} alt="" />
      </ul> 
      <ul className='channelul'>
        {lis}
      </ul>
      
    </nav>

    </>
  )
}

  
}


const msp = (state, ownprops) => {
  return {
    textChannels: Object.values(state.entities.textChannels),
    server_name: state.entities.currentServer.server_name
  }
}



export default connect(msp)(Nav2);

