class AddInvteCode < ActiveRecord::Migration[5.2]
  def change   
    add_column :servers, :invite_code, :string
  end
end
 