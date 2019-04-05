class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'chat_channel'
  end

  def speak(data)
    # find channel sv it as channel 
    
    message = Message.new(body: data['message']['body'], channel_type: 'text', author_id: data['message']['userId'], channel_id: data['message']['channelId'])
    message.save!
    socket = { message: message, type: 'message' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def load
    messages = Message.all
    
    socket = { messages: messages, type: 'messages' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
