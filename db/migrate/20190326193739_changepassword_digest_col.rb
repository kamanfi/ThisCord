class ChangepasswordDigestCol < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :password_disgest, :password_digest
  end
end
