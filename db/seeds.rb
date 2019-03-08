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
    user6 = User.create!(first_name: "Vanessa", last_name: "Chen", email: "vanessa@email.com", password: "password123", zip_code: 111111)
    user7 = User.create!(first_name: "Brent", last_name: "Buneman", email: "brent@email.com", password: "password123", zip_code: 111111)
    #CATEGORIES
    restaurant = Category.create!(name: "Restaurant")
    boba = Category.create!(name: "Boba")
    cafe = Category.create!(name: "Cafe")
  
  #BUSINESS
    #restaurants
    yoyo = Business.create!(business_name: "Yo Yo's", address_1: "318 Pacific Ave", city: "San Francisco", state: "CA", zip_code: "94111", latitude: 37.797729, longitude: -122.401237, rating: 4, business_info: "Delicious and Cheap", phone_number: "4152968273", category_id: restaurant.id)
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
    review2 = Review.create!(body: "It's open late", user_id: user2.id, business_id: noodle_time.id, rating: 3)
    review3 = Review.create!(body: "Not enough food", user_id: user3.id, business_id: jackson_place_cafe.id, rating: 2)
    review4 = Review.create!(body: "Trader Joes has better salad", user_id: user4.id, business_id: daniels_test_kitchen.id, rating: 2)
    review5 = Review.create!(body: "This place is awesome yeah, but its too expensive yeah but a lot of food yeah", user_id: user5.id, business_id: yoyo.id, rating: 4)
    review6 = Review.create!(body: "My son likes this place", user_id: user4.id, business_id: noodle_time.id, rating: 4)
    review7 = Review.create!(body: "BOBA FOR LIFE", user_id: user1.id, business_id: boba_guys.id, rating: 4)
    review8 = Review.create!(body: "This ain't no Vietnamese Coffee", user_id: user3.id, business_id: reveille_coffee_co.id, rating: 4)
    review9 = Review.create!(body: "They are not on postmates", user_id: user2.id, business_id: the_coffee_movement.id, rating: 2)
    review10 = Review.create!(body: "Yeah Yeah Yeah", user_id: user5.id, business_id: boba_butt_tea_house.id, rating: 5)
    review11 = Review.create!(body: "I'd rather go to McDonalds", user_id: user1.id, business_id: noodle_time.id, rating: 1)
    
    review1 = Review.create!(body: "These days, there is no shortage of new drink places, specifically boba and tea shops.  Guess it makes sense since global warming has set in as weather is craaazy everywhere. Walking by, there is often lines emanating 
    from this small shop in the middle of this block.  Conveniently located a half block from the Financial District Hilton Hotel, my friend and I were fortunate to walk by when the shop was empty.  Being parched, I looked for something icy so the Winnie the Pooh (yelp.com/user_local_phot…) on the menu caught my eye.  After asking about size, sweetness level, and the amount of ice, my drink was ready about five minutes later.  Being conservative on the ice level, I found the drink just temperature cool and made a note to increase the ice level next visit.  It was tasty and not overly sweet.  
    The cashier was efficient and cordial though a bit on the cold side.  No complaints here and now I understand the reason for the lines given the location.  The flavors seems to be more tropical and have less of an emphasis on the milk tea drinks.",
    user_id: user1.id, business_id: e_tea.id, rating: 4)
    review12 = Review.create!(body: "A pretty standard bubble tea spot. I'm pretty sure this is owned by enjoy veggie next door since the only thing separately them is a thin wall that is detachable. Also when we paid with card, it was charged to enjoy veggie. 
    I was drawn to this place from their cute reusable cups but we ended up just getting the plain cups since we probably wouldn't keep the reusable cups. My boyfriend and I got the regular fruit teas. Drinks were okay, standard, not bad and not great. ", 
    user_id: demo.id, business_id: e_tea.id, rating: 4)
    review13 = Review.create!(body: "Tiny hole in the wall spot with various combination flavors. Looks like they're popular for their concoctions of different teas with different jelly. I ordered the M&M (mango + matcha) with clear boba. The drink itself was good but the boba was different. It wasnt in a full ball form and it was stuck together which makes me believe it wasn't fresh. 
    Not the best place I've tried but definitely glad I did. If I happen to come again, I'd order the winnie the pooh since that seems to be a popular choice.", 
    user_id: user2.id, business_id: e_tea.id, rating: 4)
    review14 = Review.create!(body: "Just okay. First time trying this spot and I'm a little underwhelmed. Maybe I didn't order the right drink? 
    I got the caramel ice milk tea at 75% sweetness with regular ice. This drink was sweet. Even at 75%, it tasted like 110%. And, the drink barely had any ice in it. That could've been why it didn't taste as refreshing. 
    Maybe, I'll give it a try again but only if I see it. Not a place I seek nor dislike. It's average.", 
    user_id: user3.id, business_id: e_tea.id, rating: 4)
    review15 = Review.create!(body: "Small but cute and compact. The cow logo was what caught my attention at first, but they have a surprisingly large selection of drinks. I hesitated between the Winnie the Pooh and just a regular, so I went with the House boba to be safe. Their cups are pretty big, and it's only $3.99! I'd say pricing was very fair, and the tea was very good! My one complaint is that the server wasn't the friendliest and she sounded sick so I'm not sure about the hygiene of this place..... boba was also very bland and not sweet enough.",
    user_id: user4.id, business_id: e_tea.id, rating: 4)
    review16 = Review.create!(body: "Went to this place for the first time and tried the Winnie the Pooh because the name was just too cute. It also sounds and is delicious: mango milk with lychee jelly on bottom, topped with strawberry green tea. I added boba. It was really good!  Nice and refreshing. I got 75% sugar and it was still pretty sweet (and I have a sweet tooth).
    They asked me what kind of cup I want- the normal plastic cup or the reusable one (which costs extra).  When I saw that the normal cup held more ounces than the reusable, the choice was a no-brainer!  The cow on the cup is super cute.  The size of the drinks is the typical large size at other boba places, but doesn't cost more than other places- love that the price is reasonable!",
    user_id: user5.id, business_id: e_tea.id, rating: 4)
    review17 = Review.create!(body: "Boba tea is boba tea! I do like that their drink prices include boba....so you don't have to do a silly add on for the one ingredient that makes it boba tea.....and they have some interesting flavors....but it takes so long to actually get your order that it is not worth it! When you go there you see a line outside the door, so you are subconsciously 
    thinking that it is a happening place. Um... no, those are people who have already ordered and are waiting the 10-15 minutes that it takes to get your drink. No lie, I ordered a house green tea with NO boba, NO milk, NO ice and NO sugar (don't ask me why), and it still took 15 minutes for my order! They need more than just 2 people making the drinks, because it is suppose to be faster paced. I've been there before and it was like that the first time, but I was so busy talking to friends that I didn't really mind. This time I did!", 
    user_id: user6.id, business_id: e_tea.id, rating: 4)
    review18 = Review.create!(body: "Oh my goodness, thank you my dear coworker for taking me here! The first drink I tried was Winnie The Pooh, which was my favorite drink until I decided that Melinda needed a smoothie instead. 
    Their passion fruit smoothie is amazing! D: (It's so good, I'm sad) This is the best passion fruit smoothie I've ever had. I think the only difference is that they're adding milk? But whatever it is, gahhh deliciousness overload! 
    Great service! Tiny spot, so it can get really crowded. Will definitely stop by again whenever I'm in the area.", 
    user_id: user7.id, business_id: e_tea.id, rating: 4)
   

  #BUSINESS_PICTURES
    noodle_time.photos.attach(io: File.open('./app/assets/images/business/restaurants/Noodle-Time/Noodle-Time-1.jpg'), filename: 'noodle-time-1.jpg')
    noodle_time.photos.attach(io: File.open('./app/assets/images/business/restaurants/Noodle-Time/Noodle-Time-2.jpg'), filename: 'noodle-time-2.jpg')
    noodle_time.photos.attach(io: File.open('./app/assets/images/business/restaurants/Noodle-Time/Noodle-Time-3.jpg'), filename: 'noodle-time-3.jpg')
    yoyo.photos.attach(io: File.open('./app/assets/images/business/restaurants/Yoyo/Yoyo-1.jpg'), filename: 'yoyo-1.jpg')
    yoyo.photos.attach(io: File.open('./app/assets/images/business/restaurants/Yoyo/Yoyo-2.jpg'), filename: 'yoyo-2.jpg')
    yoyo.photos.attach(io: File.open('./app/assets/images/business/restaurants/Yoyo/Yoyo-3.jpg'), filename: 'yoyo-3.jpg')
    daniels_test_kitchen.photos.attach(io: File.open('./app/assets/images/business/restaurants/Daniels-Test-Kitchen/Daniels-Test-Kitchen-1.jpg'), filename: 'daniels-test-kitchen-1.jpg')
    daniels_test_kitchen.photos.attach(io: File.open('./app/assets/images/business/restaurants/Daniels-Test-Kitchen/Daniels-Test-Kitchen-2.jpg'), filename: 'daniels-test-kitchen-2.jpg')
    daniels_test_kitchen.photos.attach(io: File.open('./app/assets/images/business/restaurants/Daniels-Test-Kitchen/Daniels-Test-Kitchen-3.jpg'), filename: 'daniels-test-kitchen-3.jpg')
    e_tea.photos.attach(io: File.open('./app/assets/images/business/boba/e-tea/e-tea-1.jpg'), filename: 'e-tea-1.jpg')
    e_tea.photos.attach(io: File.open('./app/assets/images/business/boba/e-tea/e-tea-2.jpg'), filename: 'e-tea-2.jpg')
    e_tea.photos.attach(io: File.open('./app/assets/images/business/boba/e-tea/e-tea-3.jpg'), filename: 'e-tea-3.jpg')
    boba_butt_tea_house.photos.attach(io: File.open('./app/assets/images/business/boba/boba-butt-tea-house/boba-butt-tea-house-1.jpg'), filename: 'boba-butt-tea-house-1.jpg')
    boba_butt_tea_house.photos.attach(io: File.open('./app/assets/images/business/boba/boba-butt-tea-house/boba-butt-tea-house-2.jpg'), filename: 'boba-butt-tea-house-2.jpg')
    boba_butt_tea_house.photos.attach(io: File.open('./app/assets/images/business/boba/boba-butt-tea-house/boba-butt-tea-house-3.jpg'), filename: 'boba-butt-tea-house-3.jpg')
    boba_guys.photos.attach(io: File.open('./app/assets/images/business/boba/boba-guys/boba-guys-1.jpg'), filename: 'boba-guys-1.jpg')
    boba_guys.photos.attach(io: File.open('./app/assets/images/business/boba/boba-guys/boba-guys-2.jpg'), filename: 'boba-guys-2.jpg')
    boba_guys.photos.attach(io: File.open('./app/assets/images/business/boba/boba-guys/boba-guys-3.jpg'), filename: 'boba-guys-3.jpg')
    jackson_place_cafe.photos.attach(io: File.open('./app/assets/images/business/cafe/jackson-place-cafe/jackson-place-cafe-1.jpg'), filename: 'jackson-place-cafe-1.jpg')
    jackson_place_cafe.photos.attach(io: File.open('./app/assets/images/business/cafe/jackson-place-cafe/jackson-place-cafe-2.jpg'), filename: 'jackson-place-cafe-2.jpg')
    jackson_place_cafe.photos.attach(io: File.open('./app/assets/images/business/cafe/jackson-place-cafe/jackson-place-cafe-3.jpg'), filename: 'jackson-place-cafe-3.jpg')
    the_coffee_movement.photos.attach(io: File.open('./app/assets/images/business/cafe/the-coffee-movement/the-coffee-movement-1.jpg'), filename: 'the-coffee-movement-1.jpg')
    the_coffee_movement.photos.attach(io: File.open('./app/assets/images/business/cafe/the-coffee-movement/the-coffee-movement-2.jpg'), filename: 'the-coffee-movement-2.jpg')
    the_coffee_movement.photos.attach(io: File.open('./app/assets/images/business/cafe/the-coffee-movement/the-coffee-movement-3.jpg'), filename: 'the-coffee-movement-3.jpg')
    reveille_coffee_co.photos.attach(io: File.open('./app/assets/images/business/cafe/reveille-coffee-co/reveille-coffee-co-1.jpg'), filename: 'reveille-coffee-co-1.jpg')
    reveille_coffee_co.photos.attach(io: File.open('./app/assets/images/business/cafe/reveille-coffee-co/reveille-coffee-co-2.jpg'), filename: 'reveille-coffee-co-2.jpg')
    reveille_coffee_co.photos.attach(io: File.open('./app/assets/images/business/cafe/reveille-coffee-co/reveille-coffee-co-3.jpg'), filename: 'reveille-coffee-co-3.jpg')

    #PROFILE_PICS
    demo.profile_pic.attach(io: File.open('./app/assets/images/user/demo.jpg'), filename: 'demo.jpg')
    user1.profile_pic.attach(io: File.open('./app/assets/images/user/user-1.jpg'), filename: 'user-1.jpg')
    user2.profile_pic.attach(io: File.open('./app/assets/images/user/user-2.jpg'), filename: 'user-2.jpg')
    user3.profile_pic.attach(io: File.open('./app/assets/images/user/user-3.jpg'), filename: 'user-3.jpg')
    user4.profile_pic.attach(io: File.open('./app/assets/images/user/user-4.jpg'), filename: 'user-4.jpg')
    user5.profile_pic.attach(io: File.open('./app/assets/images/user/user-5.jpg'), filename: 'user-5.jpg')
    user6.profile_pic.attach(io: File.open('./app/assets/images/user/user-6.jpg'), filename: 'user-6.jpg')
    user7.profile_pic.attach(io: File.open('./app/assets/images/user/user-7.jpg'), filename: 'user-7.jpg')
    
end
