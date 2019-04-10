import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class MessageForm extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.state = { body: "",
      userId: this.props.userId,
      channelId: ""
  };      
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value, channelId: this.props.match.params.channelId });
  }

  handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak({ message: this.state });
    this.setState({ body: "" });
  }
  
  render() {
    return (
      <div>
        start
        <form className='inputform' onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder="Type message here"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const msp = state =>{
  return {
    userId: state.session.id
  }
}


export default   connect(msp)(withRouter(MessageForm));