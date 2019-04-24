class Api::DirectMessagesController < ApplicationController

    def index
        @direct_messages= DirectMessage.all
    end

    def create
        @direct_message=DirectMessage.new(direct_messages_params)
        if @direct_message.save
            
          render "api/servers/show"
        else
          render json: @direct_message.errors.full_messages, status: 422
        end
    end

    def show
        @direct_message = DirectMessage.find(params[:id])
    end

    private

    def direct_messages_params
        params.require(:direct_messages).permit(:user_id,recevier_id,server_id)
    end


end