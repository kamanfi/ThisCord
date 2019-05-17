import React from 'react';
import { withRouter } from 'react-router-dom';
import ChatRoom from './ChatRoomContainer';
import TitleInfo from './TitleInfo';
import Users from './Users';

const ChatBox = (props) =>{
  
  return(
    <div className='test'>
    <TitleInfo name={props.match.params.name}/> 
    <div className ='chatRoom'>
      <ChatRoom />
      {/* <Users /> */}
    </div>  
    </div>
  )
}


export default withRouter(ChatBox);