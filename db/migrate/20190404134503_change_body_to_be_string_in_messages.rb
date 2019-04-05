class ChangeBodyToBeStringInMessages < ActiveRecord::Migration[5.2]
  def change
    change_column :messages, :body, :string
  end
end
