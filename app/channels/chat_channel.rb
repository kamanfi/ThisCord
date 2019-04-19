class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    
    channel = TextChannel.find(params[:id])
    stream_for channel
    load(params[:id])
  end

  def speak(data)
    # find channel sv it as channel 
    channel = TextChannel.find(data['message']['channelId'])
    message = Message.new(body: data['message']['body'], channel_type: 'text', author_id: data['message']['userId'], channel_id: data['message']['channelId'])
    if (message.save!)
      
      date = message.created_at.strftime("%A %m/%d/%Y")
      debugger
      author = [message.author.user_name]
      socket = { message: message, type: 'message', dates: date }
      ChatChannel.broadcast_to(channel, socket)
    end
  end

  def load(id)
    
    channel = TextChannel.includes(:messages).find(id)
    messages = channel.messages.includes(:author)
    date = [];
    authors = messages.map do |msg|
      date << msg.created_at.strftime("%A %m/%d/%Y")
      msg.author.user_name
    end
    
    if (messages)

      channel = TextChannel.find(id)
      socket = { messages: messages, type: 'messages', authors: authors, dates: date }
      ChatChannel.broadcast_to(channel, socket)
    end
      
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
