
class Api::SessionsController < ApplicationController

    def create
          user = User.find_by_credentials(params[:user][:discord_id], params[:user][:password])
          if user 
            log_in(user)
          else
            render json: ['invalid password/username'], status: 422
          end
    end

    def destroy
        log_out
    end
    
end