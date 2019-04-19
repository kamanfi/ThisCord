import React from 'react';
import { withRouter } from 'react-router-dom';
import ChatRoom from './ChatRoom';
import TitleInfo from './TitleInfoContainer';
const ChatBox = () =>{

  return(
    <div className='test'>
    {/* <TitleInfo /> */}
      <ChatRoom />
    </div>
  )
}


export default withRouter(ChatBox);