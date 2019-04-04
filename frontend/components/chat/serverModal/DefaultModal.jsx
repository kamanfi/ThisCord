import React from 'react';
import { openModal } from '../../../actions/modal_actions';

const DefaultModal = ({ createServer, joinServer, back }) => {

  return (
    <span className='server-modal-background'>
      <h1>OH, ANOTHER SERVER HUH?</h1>
      <div className='action-holder'>
        <span className='create-server'>
          <h1>CREATE</h1>
          <p>Create a new server and <br></br>
            invite your friends. it's free!</p>
          <img src={window.create_action_icon} alt="" />
          <div className='create-action' onClick={() => dispatch(openModal('create'))}>Create a server</div>
        </span>
        <span className='join-server'>
          <h1>JOIN</h1>
          <p>Enter an instant invite and <br></br>
            your friend's server</p>
          <img src={window.join_action_icon} alt="" />
          <div className='join-action' onClick={() => dispatch(openModal('join'))}>Join a server</div>
        </span>
      </div>
    </span>
  )

}
export default DefaultModal;