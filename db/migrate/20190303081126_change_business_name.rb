class ChangeBusinessName < ActiveRecord::Migration[5.2]
  def change
      remove_column :businesses, :business
      add_column :businesses, :business_name, :string, null: false
  end
end
