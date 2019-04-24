class CreateCorrectDirectMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :direct_messages do |t|
      t.integer :sender_id, null: false
      t.integer :receiver_id, null: false
      t.integer :text_channel_id, null: false
      t.timestamps
    end
  end
end
