import React from 'react';

const Nav2 = (props) =>{

  console.log(props);
  return(
    <nav className='nav2'>
      <div className='invite'>
        <img src="assets/nav2/addFriend.svg" alt=""/>
      </div>

      <div className='channel'>
        {props.match.params.serverId}
      </div>
    </nav>
    
  )
}

export default Nav2;