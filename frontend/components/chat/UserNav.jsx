import React from 'react';
const UserNav = ({ username, logout}) => {
  
  return (
    <nav className='user-nav'>

      <div className='name-container'>
        <ul>{username}</ul>
        <div onClick={logout}>logout</div>
      </div>


      <div className='gear-container'>
        <img src="assets/user/microphone.svg" alt="" />
        <img src="assets/user/defean.svg" alt="" />
        <img src="assets/user/gear.svg" alt="" />
      </div>
    </nav>
  )
}

export default UserNav