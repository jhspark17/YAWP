class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :business, null: false
      t.string :address_1, null: false
      t.string :address_2
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip_code, null: false
      t.float :latitude, null: false
      t.float :longtitude, null: false
      t.integer :rating, null: false
      t.text :business_info, null: false
      t.integer :phone_number
      t.string :website
      t.string :hours, array: true
      t.timestamps 
    end
    add_index :businesses, :business
  end
end
