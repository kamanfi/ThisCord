import React from "react";
import MessageForm from "./MessageForm.js";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.bottom = React.createRef();
    this.loadChat.bind(this);
  }

  componentDidMount() {

    App.cable.subscriptions.create(
      { channel: "ChatChannel", },
      // id: this.props 
      {
        received: data => {
         
          switch (data.type) {
            case "message":
            this.setState({
              messages: this.state.messages.concat(data.message)
            });
            break;
            case "messages":
            this.setState({ messages: data.messages });
            break;
          }
        },
        speak: function (data) { return this.perform("speak", data) },
        load: function () { return this.perform("load") }
        
      }
      );
      this.loadChat();
   
  }

  loadChat() {
    App.cable.subscriptions.subscriptions[0].load();
  }


  componentDidUpdate() {
     
  }

  render() {
    
    const messageList = this.state.messages.map(message => {
      return (
        <li key={message.id}>
          {message.body}
          <div ref={this.bottom} />
        </li>
      );
    });
    
    return (
      <div className="test">
        <div>ChatRoom</div>
        <div className="message-list">{messageList}</div>
        <MessageForm />
      </div>
    );
  }
}

export default ChatRoom;