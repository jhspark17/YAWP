class ChangePhoneNumber < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :phone_number
    add_column :businesses, :phone_number, :string
  end
end
