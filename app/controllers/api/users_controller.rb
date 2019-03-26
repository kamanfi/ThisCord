class Api::UsersController < ApplicationController

  def new
    
  end

  def create
    @user = User.new(user_params)
    @user.discord_id = generate_discord_id(@user.user_name)
    if @user.save!
      log_in(@user)
    else
      flash[errors] = @user.errors.full_messages
    end
  end


  private

  def user_params
    params.require(:user).permit(:user_name,:email,:password)
  end

  def generate_discord_id(user_name)
    random_num = Random.new(1000)
    user_name ="#{user_name}#{random_num}"
    while (User.find_by(user_name: user_name))
          user_name ="#{user_name}#{random_num}"
    end
    user_name
  end

end