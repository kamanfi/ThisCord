class CreaateMessages < ActiveRecord::Migration[5.2]
  def change
     create_table :messages do |t|
      t.string :channel_type, null: false 
      t.integer :author_id, null: false
      t.integer :body, null: false
    end
    add_index :messages, :author_id
  end
end
