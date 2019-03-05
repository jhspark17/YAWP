# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do

  User.destroy_all
  Business.destroy_all
  Category.destroy_all

  #USERS
  demo = User.create!(first_name: "Demo", last_name: "User", email: "demo@email.com", password: "password123", zip_code: 11111)
  #CATEGORIES
  asian = Category.create!(name: "Asian")
  #BUSINESS
  yoyo = Business.create!(business_name: "Yoyo", address_1: "318 Pacific Ave", city: "San Francisco", state: "CA", zip_code: "94111", latitude: 37.797729, longitude: -122.401237, rating: 4, business_info: "Delicious and Cheap", phone_number: "4152968273", category_id: asian.id)
  noodle_time = Business.create!(business_name: "Noodle Time", address_1: "605 Battery Street", city: "San Francisco", state: "CA", zip_code: "94111", latitude: 37.797729, longitude: -122.401237, rating: 4, business_info: "Delicious and Cheap", phone_number: "4152918866", category_id: asian.id)
  daniels_test_kitchen = Business.create!(business_name: "Daniel's Test Kitchen", address_1: "133 2nd Street", city: "San Francisco", state: "CA", zip_code: "94105", latitude: 37.787680, longitude: -122.398980, rating: 4, business_info: "New Spot", phone_number: "4156380928", category_id: asian.id)
  #BUSINESS_PICTURES
  noodle_time.photos.attach(io: File.open('./app/assets/images/business/Noodle-Time/Noodle-Time-1.jpg'), filename: 'noodle-time-1.jpg')
  yoyo.photos.attach(io: File.open('./app/assets/images/business/Yoyo/Yoyo-1.jpg'), filename: 'yoyo-1.jpg')
  daniels_test_kitchen.photos.attach(io: File.open('./app/assets/images/business/Daniels-Test-Kitchen/Daniels-Test-Kitchen-1.jpg'), filename: 'daniels-test-kitchen-1.jpg')
end
