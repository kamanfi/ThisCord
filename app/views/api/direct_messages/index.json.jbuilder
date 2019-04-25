@direct_messages.each do |direct_message|
  json.set! direct_message.id do
    json.partial! 'api/direct_messages/dm', direct_message: direct_message
  end
end