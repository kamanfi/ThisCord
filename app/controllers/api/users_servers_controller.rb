class Api::UsersServersController < ApplicationController

  def index
    @servers = current_user.servers
  end

  def create
    
    @users_server = UsersServer.new(user_server_params)
    if @users_server.save
       console.log('pleaseWork')
    else
      render json: @users_server.errors.full_messages, status: 422
    end
  end
  

  def destroy
    UsersServer.find(params[:id]).destroy
    render json: params[:id]
  end

  private 
  
  def user_server_params
    # debugger
    params.require(:users_server).permit(:server_id, :user_id)
  end
end
