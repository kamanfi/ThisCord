import React from 'react';
import { withRouter } from 'react-router-dom';
import ChatRoom from './ChatRoom';
import Nav3 from './Nav3';
const ChatBox = () =>{

  return(
    <div className='chatParent'>
      <ChatRoom />
    </div>
  )
}


export default withRouter(ChatBox);