import React from 'react';
import { connect } from 'react-redux';
import { createServer } from '../../../actions/server_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';

class CreateServerModal extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.server_name;
    this.handeleSubmit = this.handeleSubmit.bind(this);
  }

  handeleSubmit(e) {
    e.preventDefault();
    this.props.createServer(this.state).then(dispatch(closeModal()));
  }


  handelChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render(){
    
    return (
      
   
      <form className='create-modal-background'>
        <h1>CREATE YOUR SERVER</h1>
        <p>By creating a server, you will acess to free voice and 
          <br/>
          text chat to use amongst your friends
        </p>
        <label>
          <ul><li>Server Name</li></ul>
          <input type="text" onChange={this.handelChange('server_name')} value={this.state.server_name} placeholder='Enter a server name'/>
        </label>
        <label className="lower-container">
          <button onClick={() => dispatch(openModal('option'))}>Back</button>
          <button onClick={this.handeleSubmit}>Create</button>
        </label>
      </form>
 
    )
  }

}
 

const msp = (state, ownProps) => {
  const server_name = {
    server_name:""
  };
  return {
    server_name,
    formType: 'Create Server'
  };

};

const mdp = dispatch => {
  return {
    createServer: name => dispatch(createServer(name)),
  };
};


export default connect(msp, mdp)(CreateServerModal);