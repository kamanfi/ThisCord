import React from 'react';
import { withRouter } from 'react-router-dom';
import ChatRoom from './ChatRoom';
import TitleInfo from './TitleInfo';
const ChatBox = (props) =>{
  debugger
  return(
    <div className='test'>
    <TitleInfo name={props.match.params.name}/> 
      <ChatRoom />
    </div>
  )
}


export default withRouter(ChatBox);