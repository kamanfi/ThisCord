class Api::TextChannelsController < ApplicationController

  def index
    # debugger
    @text_channels = Server.find(params[:server_id]).text_channels
  end

  def create
    @text_channel = TextChannel.new(text_channel_params)
    # debugger
    if @text_channel.save!
      render "api/text_channels/show"
    else
      render json: @text_channel.errors.full_messages, status: 422
    end
  end
  
  def show
    @text_channel = TextChannel.find(params[:id])
  end

  def destroy
    TextChannel.find(params[:id]).destroy
    render json: params[:id]
  end

  private 
  
  def text_channel_params
    # debugger
    params.require(:text_channel).permit(:name, :server_id)
  end
end
