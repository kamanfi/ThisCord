import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import DefaultModal from '../chat/serverModal/DefaultModal';
import CreateServerModal from '../chat/serverModal/CreateServerModal';
import JoinServerModal from '../chat/serverModal/JoinServerModal';
import CreateChannelModal from '../chat/channelModal/CreateChannelModal';
import InviteCodeModal from '../chat/serverModal/InviteCodeModal';
import UploadFileModal from '../chat/uploadFileModal/UploadFileModal';
import Dropzone from 'react-dropzone';


function Modal({ modal, closeModal }) {

  
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'option':
      component = <DefaultModal />;
      break;
    case 'create':
      component = <CreateServerModal />;
      break;
    case 'join':
      component = <JoinServerModal />;
      break;
    case 'createChannel':
      component = <CreateChannelModal />;
      break;
    case 'inviteCode':
      component = <InviteCodeModal />;
      break;
    case 'uploadFile':
      component = <UploadFileModal />
      break;
    default:
      return null;
  }
  return (
    <Dropzone  noClick={true} onDragLeave={closeModal}>
       {({ getRootProps, getInputProps }) => (
    <div className="modal-background" {...getRootProps()} onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
    )}
    </Dropzone>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);