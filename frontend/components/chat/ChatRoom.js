import React from "react";
import MessageForm from "./MessageForm.js";
import { withRouter } from 'react-router-dom';
// import MessageFormat from './MessageFormat'

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] , authors: [], dates: [] };
    this.load.bind(this);
    this.subscribe.bind(this);
    

  }

  load(id) {

    
       App.cable.subscriptions.subscriptions[0].load(id); // why is this returning false???
    }

    subscribe () {
      
      if (App.cable.subscriptions['subscriptions'].length > 1) {
        App.cable.subscriptions.remove(App.cable.subscriptions['subscriptions'][1]);
    };
      
      App.cable.subscriptions.create(
        { channel: "ChatChannel", id: this.props.match.params.channelId},
        
        {
          received: data => {

            switch (data.type) {
              case "message":
              this.setState({
                messages: this.state.messages.concat(data.message),
                authors: this.state.authors.concat(data.authors),
                date: this.state.authors.concat(data.date)
              });
              break;
              case "messages":
             
                this.setState({ messages: data.messages, authors: data.authors, dates: data.dates });

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
      
      if (prevProps.match.params.channelId != this.props.match.params.channelId) {
 
          App.cable.subscriptions.remove(App.cable.subscriptions['subscriptions'][0]);
       this.subscribe();
      }
    }
    componentDidMount(){

        this.subscribe();
    
    }

    formatMassage(messageList){
      
    }

  render() {

    let authors = this.state.authors.slice();
    debugger
    let dates = this.state.dates.slice();
    const messageList = this.state.messages.map(message => {
      debugger
      return (
        <div className= 'messageHolder' key={message.id}>
          
          <div className ='user-micon'></div> 

        <li className='message'>
          <span> <aside className='author_name'>{authors.shift()} </aside>  <aside className='date'>{dates.shift()} </aside></span>
          <div>{message.body} </div>
          <div ref={this.bottom} />
        </li>
        </div>
      );
    });
    
    return (

      <div className='message-holder'>
        <div className='message-list'> <ul> {messageList}</ul> </div>
        <MessageForm />
      </div>
    );
  }
}

export default withRouter(ChatRoom);