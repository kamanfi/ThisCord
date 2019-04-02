import React from 'react';
import { connect } from 'react-redux';
import { joinServer } from '../../../actions/server_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';

class CreateServerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.server_name;
    this.handeleSubmit = this.handeleSubmit.bind(this);
  }

  handeleSubmit(e) {
    e.preventDefault();
    this.props.joinServer(this.state).then(dispatch(closeModal()));
  }


  handelChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {

    return (


      <form className='join-modal-background'>
        <h1>JOIN YOUR SERVER</h1>
        <p>Enter an instant invite below to join an existing 
          <br />
          server. The invite will look something like these 
          <br/>
          placeholde
          <br/> 
                     placeholder
        </p>
        <label className="input-field">
          <input type="text" onChange={this.handelChange('server_name')} value={this.state.server_name}/>
          <ul>Enter an instant invite code</ul>
        </label>
        <label className="lower-container2">
          <button onClick={() => dispatch(openModal('option'))}>Back</button>
          <button onClick={this.handeleSubmit}>Create</button>
        </label>
      </form>

    )
  }

}


const msp = (state, ownProps) => {
  const server_name = {
    server_name: ""
  };
  return {
    server_name,
    formType: 'Join Server'
  };

};

const mdp = dispatch => {
  return {
    joinServer: name => dispatch(joinServer(name)),
  };
};


export default connect(msp, mdp)(CreateServerModal);