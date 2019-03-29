class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :server_name, null: false
      t.integer :moderator_id, null: false
      t.string :img_url,
      t.timestamps
    end
    add_index :servers, :moderator_id
  end
end
