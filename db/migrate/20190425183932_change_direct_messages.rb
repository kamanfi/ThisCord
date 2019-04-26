class ChangeDirectMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :direct_messages, :sender_name, :string
    add_column :direct_messages, :receiver_name, :string
  end
end
