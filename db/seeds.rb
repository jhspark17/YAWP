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
    user1 = User.create!(first_name: "Hong", last_name: "Yang", email: "hong@email.com", password: "password123", zip_code: 111111)
    user2 = User.create!(first_name: "Ivan", last_name: "Kwong", email: "ivan@email.com", password: "password123", zip_code: 111111)
    user3 = User.create!(first_name: "Darren", last_name: "Yong", email: "darren@email.com", password: "password123", zip_code: 111111)
    user4 = User.create!(first_name: "Dean", last_name: "Lacap", email: "dean@email.com", password: "password123", zip_code: 111111)
    user5 = User.create!(first_name: "Aram", last_name: "Sargsyan", email: "aram@email.com", password: "password123", zip_code: 111111)
  
  #CATEGORIES
    restaurant = Category.create!(name: "Restaurant")
    boba = Category.create!(name: "Boba")
    cafe = Category.create!(name: "Cafe")
  
  #BUSINESS
    #restaurants
    yoyo = Business.create!(business_name: "Yoyo", address_1: "318 Pacific Ave", city: "San Francisco", state: "CA", zip_code: "94111", latitude: 37.797729, longitude: -122.401237, rating: 4, business_info: "Delicious and Cheap", phone_number: "4152968273", category_id: restaurant.id)
    noodle_time = Business.create!(business_name: "Noodle Time", address_1: "605 Battery Street", city: "San Francisco", state: "CA", zip_code: "94111", latitude: 37.797729, longitude: -122.401237, rating: 4, business_info: "Delicious and Cheap", phone_number: "4152918866", category_id: restaurant.id)
    daniels_test_kitchen = Business.create!(business_name: "Daniel's Test Kitchen", address_1: "133 2nd Street", city: "San Francisco", state: "CA", zip_code: "94105", latitude: 37.787680, longitude: -122.398980, rating: 4, business_info: "New Spot", phone_number: "4156380928", category_id: restaurant.id)
    #boba
    e_tea = Business.create!(business_name: "ETea", address_1: "839 Kearny Street", city: "San Francisco", state: "CA", zip_code: "94108", latitude: 37.795830, longitude: -122.405243, rating: 3, business_info: "Colorful Boba", phone_number: "4159561868", category_id: boba.id)
    boba_butt_tea_house = Business.create!(business_name: "Boba Butt Tea House", address_1: "714 Kearny Street", city: "San Francisco", state: "CA", zip_code: "94111", latitude: 37.794640, longitude: -122.404727, rating: 4, business_info: "MMMMMMM", phone_number: "N/A", category_id: boba.id)
    boba_guys = Business.create!(business_name: "Boba Guys", address_1: "429 Stockton Street", city: "San Francisco", state: "CA", zip_code: "94108", latitude: 37.794640, longitude: -122.404727, rating: 4, business_info: "The Best in Town", phone_number: "4159672622", category_id: boba.id)
    #cafe
    jackson_place_cafe = Business.create!(business_name: "Jackson Place Cafe", address_1: "633 Battery Street", city: "San Francisco", state: "CA", zip_code: "94111", latitude: 37.797230, longitude: -122.401062, rating: 4, business_info: "Your one stop coffee shop", phone_number: "N/A", category_id: cafe.id)
    the_coffee_movement = Business.create!(business_name: "The Coffee Movement", address_1: "1030 Washington Street", city: "San Francisco", state: "CA", zip_code: "94108", latitude: 37.794745, longitude: -122.410298, rating: 4, business_info: "This is where it begins", phone_number: "N/A", category_id: cafe.id)
    reveille_coffee_co = Business.create!(business_name: "Reveille Coffee Co", address_1: "200 Columbus Avenue", city: "San Francisco", state: "CA", zip_code: "94133", latitude: 37.797246, longitude: -122.405534, rating: 4, business_info: "Cool cafe, with a very artsy feel", phone_number: "4157896258", category_id: cafe.id)

  #REVIEWS
    review1 = Review.create!(body: "Boba Life", user_id: user1.id, business_id: e_tea.id, rating: 4)
    review2 = Review.create!(body: "It's open late", user_id: user2.id, business_id: noodle_time.id, rating: 3)
    review3 = Review.create!(body: "Not enough food", user_id: user3.id, business_id: jackson_place_cafe.id, rating: 2)
    review4 = Review.create!(body: "Trader Joes has better salad", user_id: user4.id, business_id: daniels_test_kitchen.id, rating: 2)
    review5 = Review.create!(body: "This place is awesome yeah, but its too expensive yeah but a lot of food yeah", user_id: user5.id, business_id: yoyo.id, rating: 4)
    review6 = Review.create!(body: "My son likes this place", user_id: user4.id, business_id: noodle_time.id, rating: 4)
    review7 = Review.create!(body: "BOBA FOR LIFE", user_id: user1.id, business_id: boba_guys.id, rating: 4)
    review8 = Review.create!(body: "This ain't no Vietnamese Coffee", user_id: user3.id, business_id: reveille_coffee_co.id, rating: 4)
    review9 = Review.create!(body: "They are not on postmates", user_id: user2.id, business_id: the_coffee_movement.id, rating: 2)
    review10 = Review.create!(body: "Yeah Yeah Yeah", user_id: user5.id, business_id: boba_butt_tea_house.id, rating: 5)
    

  #BUSINESS_PICTURES
    noodle_time.photos.attach(io: File.open('./app/assets/images/business/restaurants/Noodle-Time/Noodle-Time-1.jpg'), filename: 'noodle-time-1.jpg')
    yoyo.photos.attach(io: File.open('./app/assets/images/business/restaurants/Yoyo/Yoyo-1.jpg'), filename: 'yoyo-1.jpg')
    daniels_test_kitchen.photos.attach(io: File.open('./app/assets/images/business/restaurants/Daniels-Test-Kitchen/Daniels-Test-Kitchen-1.jpg'), filename: 'daniels-test-kitchen-1.jpg')
    e_tea.photos.attach(io: File.open('./app/assets/images/business/boba/e-tea/e-tea-1.jpg'), filename: 'e-tea-1.jpg')
    boba_butt_tea_house.photos.attach(io: File.open('./app/assets/images/business/boba/boba-butt-tea-house/boba-butt-tea-house-1.jpg'), filename: 'boba-butt-tea-house-1.jpg')
    boba_guys.photos.attach(io: File.open('./app/assets/images/business/boba/boba-guys/boba-guys-1.jpg'), filename: 'boba-guys-1.jpg')
    jackson_place_cafe.photos.attach(io: File.open('./app/assets/images/business/cafe/jackson-place-cafe/jackson-place-cafe-1.jpg'), filename: 'jackson-place-cafe-1.jpg')
    the_coffee_movement.photos.attach(io: File.open('./app/assets/images/business/cafe/the-coffee-movement/the-coffee-movement-1.jpg'), filename: 'the-coffee-movement-1.jpg')
    reveille_coffee_co.photos.attach(io: File.open('./app/assets/images/business/cafe/reveille-coffee-co/reveille-coffee-co-1.jpg'), filename: 'reveille-coffee-co-1.jpg')
end
