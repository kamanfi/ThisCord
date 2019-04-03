import React from 'react';
import { connect } from 'react-redux';
import { createTextChannel } from '../../../actions/textChannel_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import {withRouter} from 'react-router-dom';


class CreateServerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.server;
    this.handeleSubmit = this.handeleSubmit.bind(this);
  }

  handeleSubmit(e) {
    e.preventDefault();
    this.props.createTextChannel(this.state).then(dispatch(closeModal()));
  }


  handelChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }
  
  render() {
    return (


      <form className='create-channel-background'>
        <h1>CREATE TEXT CHANNEL</h1>
        <label className='field'>
          <ul><li>CHANNEL NAME</li></ul>
          <input type="text" onChange={this.handelChange('name')} value={this.state.name}/>
        </label>
        <label className='channel-action'>
          <span onClick={()=>dispatch(closeModal())} >Cancel</span>
          <button onClick={this.handeleSubmit}>Create</button>
        </label>
      </form>

    )
  }

}


const msp = (state, ownProps) => {
  const server = {
    name: "",
    server_id: state.entities.currentServer.id
  };
  return {
    server,
    formType: 'Create Channel'
  };

};

const mdp = dispatch => {
  return {
    createTextChannel: channel => dispatch(createTextChannel(channel)),
  };
};


export default withRouter(connect(msp, mdp)(CreateServerModal));