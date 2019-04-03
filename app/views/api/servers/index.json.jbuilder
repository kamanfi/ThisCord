@servers.each do |server|
  json.set! server.id do
    json.extract! server, :server_id
  end
end