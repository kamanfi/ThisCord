import React from 'react';
import { withRouter } from 'react-router-dom';
import ChatRoom from './ChatRoom';
const ChatBox = () =>{

  return(
    <div className='test'>
      <ChatRoom />
    </div>
  )
}


export default withRouter(ChatBox);