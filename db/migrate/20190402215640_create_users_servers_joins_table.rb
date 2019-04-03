class CreateUsersServersJoinsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :users_servers do |t|
      t.integer :user_id, null: false
      t.integer :server_id, null: false
    end
    add_index :users_servers, [:user_id ,:server_id ]
  end
end
