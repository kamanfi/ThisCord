class Api::ServersController < ApplicationController

  def index
    servers = current_user.servers
    @servers= servers.map do |server| 
      Server.find(server.server_id)
    end
  end

  def create
    @server = Server.new({server_name: server_params[:server_name]})
    @server.moderator_id = current_user.id
    
    if @server.save
      @general_channel = TextChannel.new({name: 'general', server_id: @server.id})
      @general_channel.save!
      
        if server_params[:dm] == nil
          @users_server = UsersServer.new({user_id: current_user.id, server_id: @server.id})
          @users_server.save!
          render "api/servers/show"
        else
          @directMessage = DirectMessage.new({receiver_id: server_params[:receiver_id], sender_id: current_user.id, text_channel_id: @general_channel.id} )
          
          @directMessage.sender_name  = @directMessage.sender.user_name
          @directMessage.receiver_name = @directMessage.receiver.user_name
          
          @directMessage.save!
          render json: @directMessage
        end
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

    params.require(:server).permit(:server_name, :moderator_id, :img_url, :invite_code, :dm, :receiver_id )
  end
end
