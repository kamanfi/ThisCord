class CreateDirectMessages < ActiveRecord::Migration[5.2]
  def change
    drop_table :direct_messages do |t|
      t.integer :sender_id, null: false
      t.integer :receiver_id, null: false
      t.integer :text_channel_id, null: false
      t.timestamps
    end
    add_index :direct_messages, [:sender_id, :receiver_id, text_channel_id]
  end
end
