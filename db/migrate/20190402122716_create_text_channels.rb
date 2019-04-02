class CreateTextChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :text_channels do |t|
      t.string :name, null: false
      t.integer :server_id , null: false
    end
    add_index :text_channels, :server_id
  end
end

