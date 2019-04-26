import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import {NavLink} from 'react-router-dom';
import { selectsServer } from '../../actions/current_server_actions';
import UserNav from './UserNavContainer';

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
   
 debugger
    const lis = this.props.textChannels.map( ({id, name}) => {
      
    return <NavLink to={`/@me/${this.props.match.params.serverId}/${id}/${name}`} className={(parseInt(this.props.match.params.channelId) == id  && name != 'general') ? "selecteda" : ""} key={id} name={name} ># <span className='name'>{name}</span> </NavLink>
    });
    
    return(
    <div className='holder'>
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
    < UserNav />
    </div>
  )
}  
}


export default Nav2;

