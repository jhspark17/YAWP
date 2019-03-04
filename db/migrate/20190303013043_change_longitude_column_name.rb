class ChangeLongitudeColumnName < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :longtitude
    add_column :businesses, :longitude, :float, null: false
  end
end
 