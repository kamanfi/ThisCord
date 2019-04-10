import React from "react";
import MessageForm from "./MessageForm.js";
import { withRouter } from 'react-router-dom';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] , authors: []};
    this.load.bind(this);
    this.subscribe.bind(this);


  }

  load(id) {

    debugger
       App.cable.subscriptions.subscriptions[0].load(id); // why is this returning false???
    }

    subscribe () {
      
      if (App.cable.subscriptions['subscriptions'].length > 1) {
        App.cable.subscriptions.remove(App.cable.subscriptions['subscriptions'][1]);
    };
      debugger
      App.cable.subscriptions.create(
        { channel: "ChatChannel", id: this.props.match.params.channelId},
        
        {
          received: data => {

            switch (data.type) {
              case "message":
              this.setState({
                messages: this.state.messages.concat(data.message),
                authors: this.state.authors.concat(data.authors)
              });
              break;
              case "messages":
             
                this.setState({ messages: data.messages, authors: data.authors });

              break;
            }
          },
          speak: function (data) { return this.perform("speak", data) },
          load: function (id) { return this.perform("load"), id },
          unsubscribe: function() {  App.cable.subscriptions.remove(this)}
        }
        );
        
    }

    componentWillUnmount(){
      
      App.cable.subscriptions.remove(App.cable.subscriptions['subscriptions'][0]);
    }

    componentDidUpdate(prevProps){
      debugger
      if (prevProps.match.params.channelId != this.props.match.params.channelId) {
 
          App.cable.subscriptions.remove(App.cable.subscriptions['subscriptions'][0]);
       this.subscribe();
      }
    }
    componentDidMount(){

        this.subscribe();
    
    }

  render() {

    debugger
    let authors = this.state.authors.slice();
    const messageList = this.state.messages.map(message => {
      return (
        <li key={message.id}>
         {authors.shift()}  {message.body} {message.created_at}
          <div ref={this.bottom} />
        </li>
      );
    });
    
    return (

      <div className="test">
        <div>ChatRoom</div>
        <div className="">{messageList}</div>
        <MessageForm />
      </div>
    );
  }
}

export default withRouter(ChatRoom);

