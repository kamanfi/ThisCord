import React from 'react';
import { openModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';

const InviteCodeModal = (props) => {
  
  return (
    <span className='invite_modal'>
      <p>INVITE FRIENDS TO {props.server_name.toUpperCase()}</p>
      <span className='spanclass'>Share this link with other to grant acess to this server</span>
      <input type="text" name="" id="" value={props.inviteCode}/>
      <span className='spanclass2'>Your invite code will never expire</span>
    </span>
  )

}
const msp = (state, ownProps) => {
  return {
    inviteCode: state.entities.currentServer.invite_code,
    server_name: state.entities.currentServer.server_name
  }
}



export default connect(msp)(InviteCodeModal);


