import React from "react";
import MessageForm from "./MessageForm.js";
import { withRouter } from 'react-router-dom';
// import Dropzone from './DropZone';
import Dropzone from 'react-dropzone';


// import MessageFormat from './MessageFormat'

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], authors: [], dates: [], ids: [], };
    this.load.bind(this);
    this.subscribe.bind(this);
    this.bottom = React.createRef();
    this.sendDM.bind(this);

  }

  load(id) {


    App.cable.subscriptions.subscriptions[0].load(id); // why is this returning false???
  }

  subscribe() {

    if (App.cable.subscriptions['subscriptions'].length > 1) {
      App.cable.subscriptions.remove(App.cable.subscriptions['subscriptions'][1]);
    };


    App.cable.subscriptions.create(
      { channel: "ChatChannel", id: this.props.match.params.channelId },

      {
        received: data => {

          switch (data.type) {
            case "message":
              if (data.append === true) {
                let newMessage = this.state.messages;
                newMessage[newMessage.length - 1].push(data.message);
                this.setState({
                  messages: newMessage
                });
              } else {
                this.setState({
                  messages: this.state.messages.concat(data.message),
                  authors: this.state.authors.concat(data.authors),
                  dates: this.state.dates.concat(data.dates),
                  ids: this.state.ids.concat(data.ids)
                });
              }
              break;
            case "messages":

              this.setState({ messages: data.messages, authors: data.authors, dates: data.dates, ids: data.ids });

              break;
          }
        },
        speak: function (data) { return this.perform("speak", data) },
        load: function (id) { return this.perform("load"), id },
        unsubscribe: function () { App.cable.subscriptions.remove(this) }
      }
    );

  }

  componentWillUnmount() {

    App.cable.subscriptions.remove(App.cable.subscriptions['subscriptions'][0]);
  }

  componentDidUpdate(prevProps) {

    if (this.bottom.current) {
      this.bottom.current.scrollIntoView();
    }
    if (prevProps.match.params.channelId != this.props.match.params.channelId) {

      App.cable.subscriptions.remove(App.cable.subscriptions['subscriptions'][0]);
      this.subscribe();
    }

  }
  componentDidMount() {
    this.subscribe();
    this.props.fetchDirectMessages();
  }

  sendDM(receiver_id) {
    // this.props.history.push(`@me/dm/${sender_id}`);
    // this.props.find()

    let channel_id = undefined;
    let user_id = this.props.user_id;
    if (receiver_id != this.props.user_id) {
      this.props.dms.forEach(dm => {

        if (dm.receiver_id == receiver_id && dm.sender_id == user_id || dm.sender_id == receiver_id && dm.sender_id == receiver_id) {

          channel_id = dm.text_channel_id;
        }
      });
      this.props.history.location.pathname = (`/`);
      if (channel_id == undefined) {
        this.props.createServer({ server_name: 'REALTEST333', dm: true, receiver_id }).then((dmserver) => this.props.history.push(`@me/dm/${dmserver.directMessage.text_channel_id}/Direct Message`))
      } else {
        this.props.history.push(`@me/dm/${channel_id}/Direct Message`);
      }

    }

  }

  render() {

    let authors = this.state.authors.slice();
    let dates = this.state.dates.slice();
    let ids = this.state.ids.slice();
    let key = 0;

    const messageList = this.state.messages.map((message, index) => {
      let receiver_id = ids[index];

      return (
        <div key={key += 1} className='messageHolder'>

          <div className='user-micon'></div>

          <div className='message'>
            <span> <aside onClick={() => this.sendDM(receiver_id)} className='author_name'>{authors.shift()} </aside>  <aside className='date'>{dates.shift()} </aside></span>
            {message.map(body => {
              return (
                <li key={key += 1} >{body}</li>
              )
            })}
            <div ref={this.bottom} />
          </div>
        </div>
      );
    });

    return (
      <Dropzone onDragEnter={acceptedFiles => this.props.openModal('uploadFile')}  noClick={true}>
        {({ getRootProps, getInputProps }) => (

          <div className='message-holder' {...getRootProps()}>
            <input {...getInputProps()} />
            <div className='message-list'> <ul> {messageList}</ul> </div>
            <MessageForm />
          </div>


        )}
      </Dropzone>
    );
  }
}

export default withRouter(ChatRoom);