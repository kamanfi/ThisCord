# ThisCord

[Live Site](https://thiscord.herokuapp.com/#/)

![](/app/assets/images/Readme/logIn.png)

Thiscode is a full stack clone of the popular chat applciation, discord. Users can make an Servers and Channels and invite their friends to their server.

## Technologies

Ruby on Rails to implement the backend framework
Ruby on Rails Action Cables to implement websockets/chat
PostgreSQL for the database
React for the Frontend using Redux as the state manager
jQuery AJAX to access backend through Thunk actions

## Built With

* Ruby on Rails to implement the backend framework
* Ruby on Rails Action Cables to implement websockets/chat
* PostgreSQL for the database
* React for the Frontend using Redux as the state manager
* jQuery AJAX to access backend


## Core Functionality

* User Authentication - Users are able to create account and log in
* Servers - Authenticated users can create Servers and invite other users to it
* Channels - Moderators of Servers can create channels which users can join 
* Chat - Users can chat to other users who have joined a channel
* Direct Messaging - User can click on other user name and directly message them

## Challanges 
Discord displays messages in a particular manner, if last message sent to the server and the previous message are sent from the same user, and the time between those 2 messages is less than 5 minutes. Discord attached the new message to the previous message block. As shown below.

![](/app/assets/images/Readme/block.png)

To acheive this, the created at_date of the new message is subtracted from the created_at date of the last message sent to the channel. If the result is less than `100` , a `socket` object is created with an append key pointing to true. This key is read by the the chatBox component to determine if messages should be attached or displayed in a new block.

```ruby
  def speak(data)
    #find channnnel and eagerload all messages in the channel
    channel = TextChannel.includes(:messages).find(data['message']['channelId'])
    #create 
    message = Message.new(body: data['message']['body'], channel_type: 'text', author_id: data['message']['userId'], channel_id: data['message']['channelId'])
    lastmsg = channel.messages.last
    append = false
    if (message.save!)
      if lastmsg && lastmsg.author_id == message.author_id && (message.created_at - lastmsg.created_at) < 100
        append = true
      end
      date = [message.created_at.strftime("%A %m/%d/%Y")]
      formattedMessage = []
      ids =[]
      ids << [message.author.id] 
      formattedMessage << [message.body]
      author = [message.author.user_name]
      socket = { message: formattedMessage, type: 'message', authors: author, dates: date, append: append, ids: ids }
      ChatChannel.broadcast_to(channel, socket)
    end
  end

```

## Upcoming Features
* Voice Chat
* Drag and Drop images
