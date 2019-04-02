import React from 'react';
import { connect } from 'react-redux';

const Nav2 = (props) =>{

  console.log(props);
  const lis = props.textChannels.map( (channel) => {
    return  <li key={channel.id}>{channel.name}</li>
  });
  return(
    <nav className='nav2'>
      <div className='invite'>
        <img src="assets/nav2/addFriend.svg" alt=""/>
      </div>

      <div className='channel'>
        {props.match.params.serverId}
        <ul>
          {lis}
        </ul>
      </div>
    </nav>
    
  )
}

const msp = (state, ownProps) => {
  return {
    textChannels: Object.values(state.entities.textChannels)
  }
}


export default connect(msp)(Nav2);