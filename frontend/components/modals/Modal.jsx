import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import DefaultModal from '../chat/serverModal/DefaultModal';
import CreateServerModal from '../chat/serverModal/CreateServerModal';
import JoinServerModal from '../chat/serverModal/JoinServerModal';

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
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
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