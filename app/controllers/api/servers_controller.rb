class Api::ServersController < ApplicationController

  def index
    @servers = current_user.servers
  end

  def create
    @server = Server.new(server_params)
    @server.moderator_id = current_user.id
    # debugger
    if @server.save
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

  private 
  
  def server_params
    # debugger
    params.require(:server).permit(:server_name, :moderator_id, :img_url)
  end
end
