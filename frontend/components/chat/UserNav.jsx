import React from 'react';
const UserNav = ({ username, logout}) => {
  

  const unsub =() =>{
    logout()
    
  }
  return (
    <nav className='user-nav'>

      <div className='gear-container'>
        <img src={window.homeicon2} alt="" />
      </div>
      <div className='name-container'>
        <ul>{username}</ul>
        <div onClick={logout}>logout</div>
      </div>


    </nav>
  )
}

export default UserNav