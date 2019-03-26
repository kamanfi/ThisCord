class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :user_name, null: false
      t.string :password_disgest, null: false
      t.string :session_token, null: false, unique: true
      t.string :discord_id, null: false, unique: true
      t.string :email, null: false, unique:true
      t.string :img_url
      t.timestamps
    end
  end
end
