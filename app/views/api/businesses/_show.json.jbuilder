business ||= @business

json.extract! business, :id, :business_name, :address_1, :address_2, :city, :state, :zip_code, :latitude, :longitude, :rating, :business_info, :phone_number, :website
json.photos   business.photos.map {|photo| url_for(photo)}


