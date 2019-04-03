class Api::ServersController < ApplicationController

  def index
    servers = current_user.servers
    @servers= servers.map do |server| 
      Server.find(server.server_id)
    end
  end

  def create
    @server = Server.new(server_params)
    @server.moderator_id = current_user.id
    # debugger
    if @server.save
        @users_server = UsersServer.new({user_id: current_user.id, server_id: @server.id})
        @general_channel = TextChannel.new({name: 'general', server_id: @server.id})
        @general_channel.save!
        @users_server.save!
      render "api/servers/show"
    else
      render json: @server.errors.full_messages, status: 422
    end
  end
  
  def show
    @server = Server.find(params[:id])
  end

  def destroy
    Server.find(params[:id]).destroy
    render json: params[:id]
  end

  def join
    
    @server=Server.find_by(invite_code: params[:invite_code][:invite_code])
    if @server 
       @users_server = UsersServer.new({user_id: current_user.id, server_id: @server.id})
       @users_server.save!
      render "api/servers/show"
    else
       render json: @server.errors.full_messages, status: 422
    end
  end

  private 
  
  def server_params
    # debugger
    params.require(:server).permit(:server_name, :moderator_id, :img_url, :invite_code)
  end
end
