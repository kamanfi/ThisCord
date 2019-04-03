
server = {server_id: @server.id , invite_code: @server.invite_code}
json.partial! 'api/servers/server', server: server