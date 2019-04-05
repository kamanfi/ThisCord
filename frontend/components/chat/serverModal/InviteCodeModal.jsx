import React from 'react';
import { openModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';

const InviteCodeModal = (props) => {
  
  return (
    <span className='invite_modal'>
      <p>INVITE CODE</p>
      <input type="text" name="" id="" value={props.inviteCode}/>
    </span>
  )

}
const msp = (state, ownProps) => {
  return {
    inviteCode: state.entities.currentServer.invite_code
  }
}



export default connect(msp)(InviteCodeModal);


