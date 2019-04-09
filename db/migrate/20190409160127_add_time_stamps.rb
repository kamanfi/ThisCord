class AddTimeStamps < ActiveRecord::Migration[5.2]
  def change
      add_timestamps :messages, null: false
      add_timestamps :text_channels, null: false
      add_timestamps :users_servers, null: false
  end
end
