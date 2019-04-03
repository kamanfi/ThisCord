import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const Nav2 = (props) =>{
  console.log(props);
  const lis = props.textChannels.map( (channel) => {
    return  <li key={channel.id}># <span className='name'>{channel.name}</span> </li>
  });

  return(
    <nav className='nav2'>
      <div className='invite'>
        <img src="assets/nav2/addFriend.svg" alt=""/>
      </div>

      <div className='channel'>
        <p className='create-container'>
          <span>TEXT CHANNEL</span>
          <span className='plus-button' onClick={() => dispatch(openModal('createChannel'))} >+</span>
        </p>
        <ul className='first_channel'>
          {lis.shift()} <img onClick={() => dispatch(openModal('inviteCode'))} src="assets/nav2/add.svg" alt="" />
         </ul>
        <ul>
          {lis}
        </ul>
      </div>
    </nav>
    
  )
}

const msp = (state, ownProps) => {
  debugger
  return {
    textChannels: Object.values(state.entities.textChannels)
  }
}



export default connect(msp)(Nav2);

