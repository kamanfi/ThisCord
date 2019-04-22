class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    
    channel = TextChannel.find(params[:id])
    stream_for channel
    load(params[:id])
  end

  def speak(data)
    # find channel sv it as channel 
    channel = TextChannel.includes(:messages).find(data['message']['channelId'])
    message = Message.new(body: data['message']['body'], channel_type: 'text', author_id: data['message']['userId'], channel_id: data['message']['channelId'])
    lastmsg = channel.messages.last
    append = false
    if (message.save!)
      if lastmsg && lastmsg.author_id == message.author_id && (message.created_at - lastmsg.created_at) < 100
        append = true
      end
      date = [message.created_at.strftime("%A %m/%d/%Y")]
      formattedMessage = [] 
      formattedMessage << [message.body]
      author = [message.author.user_name]
      socket = { message: formattedMessage, type: 'message', authors: author, dates: date, append: append }
      ChatChannel.broadcast_to(channel, socket)
    end
  end

  def load(id)
    
    channel = TextChannel.includes(:messages).find(id)
    messages = channel.messages.includes(:author)
    date = [];
    authors =[]
    formattedMessage =[]
    lastmsg = nil
      messages.each do |msg|
      if lastmsg && lastmsg.author_id == msg.author_id && (msg.created_at - lastmsg.created_at) < 100
        formattedMessage.last.push(msg.body)
      else
        authors << msg.author.user_name
        formattedMessage <<  [msg.body]
        date << msg.created_at.strftime("%A %m/%d/%Y")
      end
      lastmsg = msg
    end
    
    if (formattedMessage)

      channel = TextChannel.find(id)
      socket = { messages: formattedMessage, type: 'messages', authors: authors, dates: date }
      ChatChannel.broadcast_to(channel, socket)
    end
      
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
