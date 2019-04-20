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
    this.bottom = React.createRef();

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
              if (data.append){
                let newMessage = this.state.messages;
                newMessage[newMessage.length-1].push(data.message);
                this.setState({
                  messages: newMessage
                });
              }else{
                this.setState({
                  messages: this.state.messages.concat(data.message),
                  authors: this.state.authors.concat(data.authors),
                  date: this.state.authors.concat(data.date)
                });
              }
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
      debugger
      if (this.bottom.current){
        this.bottom.current.scrollIntoView();  
      }
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
    let dates = this.state.dates.slice();
    const messageList = this.state.messages.map(message => {
      
      return (
        <div className= 'messageHolder' key={message.id}>
          
          <div className ='user-micon'></div> 

        <div className='message'>
          <span> <aside className='author_name'>{authors.shift()} </aside>  <aside className='date'>{dates.shift()} </aside></span>
          {message.map(body => {
            return (
              <li>{body}</li>
            )
          })}
          <div ref={this.bottom} />
        </div>
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