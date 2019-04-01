import React from 'react';
import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions';

class CreateServerModal extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.name;
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handelSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  handelChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render(){
    return (
    <div className='session-div'>
      <form className='session-form' >
        <h2>Create an account</h2>
        <label>
          <ul><li>Name</li></ul>
          <input  type="text" onChange={this.handelChange('name')} value={this.state.name} />
        </label>
        <label>
          <button className="continue-button" onClick={this.handelSubmit} >Continue</button>
        </label>
 
      </form>
    </div>
    )
  }

}
 

const msp = (state, ownProps) => {
  const name = {
    name:""
  };
  return {
    name,
    formType: 'Create Server'
  };

};

const mdp = dispatch => {
  return {
    createServer: name => dispatch(createServer(name)),
  };
};


export default connect(msp, mdp)(CreateServerModal);