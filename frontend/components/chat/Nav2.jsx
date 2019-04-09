import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import {NavLink} from 'react-router-dom';
import { selectsServer } from '../../actions/current_server_actions';


class Nav2 extends React.Component{

  constructor(props){
    super(props);
    // this.chatbox = this.chatbox.bind(this)
  }

  componentDidMount(){
    
    this.props.fetchTextChannels(this.props.match.params.serverId);

  }
  
  componentDidUpdate(){


  }
  render(){  

    if (this.props.textChannels.length == 0 || this.props.server === undefined){
      return null;
    }
   
 
    const lis = this.props.textChannels.map( ({id, name}) => {
    return <NavLink to={`/@me/${this.props.match.params.serverId}/${id}`} key={id} ># <span className='name'>{name}</span> </NavLink>
    });
    
    return(
    <>
    <nav className='nav2'>
    <span className='server-name'>{ this.props.server.server_name}</span>
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


export default Nav2;

