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
    user8 = User.create!(first_name: "Jason", last_name: "Fu", email: "jason@email.com", password: "password123", zip_code: 111111)
    
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
    e_tea = Business.create!(business_name: "E-Tea", address_1: "839 Kearny Street", city: "San Francisco", state: "CA", zip_code: "94108", latitude: 37.795830, longitude: -122.405243, rating: 3, business_info: "Colorful Boba", phone_number: "4159561868", category_id: boba.id)
    boba_butt_tea_house = Business.create!(business_name: "Boba Butt Tea House", address_1: "714 Kearny Street", city: "San Francisco", state: "CA", zip_code: "94111", latitude: 37.794640, longitude: -122.404727, rating: 4, business_info: "MMMMMMM", phone_number: "N/A", category_id: boba.id)
    boba_guys = Business.create!(business_name: "Boba Guys", address_1: "429 Stockton Street", city: "San Francisco", state: "CA", zip_code: "94108", latitude: 37.794640, longitude: -122.404727, rating: 4, business_info: "The Best in Town", phone_number: "4159672622", category_id: boba.id)
    #cafe
    jackson_place_cafe = Business.create!(business_name: "Jackson Place Cafe", address_1: "633 Battery Street", city: "San Francisco", state: "CA", zip_code: "94111", latitude: 37.797230, longitude: -122.401062, rating: 4, business_info: "Your one stop coffee shop", phone_number: "N/A", category_id: cafe.id)
    the_coffee_movement = Business.create!(business_name: "The Coffee Movement", address_1: "1030 Washington Street", city: "San Francisco", state: "CA", zip_code: "94108", latitude: 37.794745, longitude: -122.410298, rating: 4, business_info: "This is where it begins", phone_number: "N/A", category_id: cafe.id)
    reveille_coffee_co = Business.create!(business_name: "Reveille Coffee Co", address_1: "200 Columbus Avenue", city: "San Francisco", state: "CA", zip_code: "94133", latitude: 37.797246, longitude: -122.405534, rating: 4, business_info: "Cool cafe, with a very artsy feel", phone_number: "4157896258", category_id: cafe.id)

  #REVIEWS
    
    #E-Tea
    review0 = Review.create!(body: "Conveniently location next to and almost inside the Super Pan establishment, this place proves to be an easy option for a party concert sweet treat.",
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

    #Noodle Time
    review2 = Review.create!(body: "5 spice chicken bahn mi sammich Got a great discount using my Ritual App, Went after the main lunch rush and got a yummy well made sandwich. Rest of their menu looks worth a try as well. Will check out again", 
    user_id: user2.id, business_id: noodle_time.id, rating: 3)
    review19 = Review.create!(body: "I work not too far from here, and saw the reviews so I figured I'd check it out. Being Vietnamese myself, and seeing that it was a family run place - I kind of had high expectations for this place. 
    I got the Shrimp Vermicelli Bowl, and I have to say - I was IMPRESSSED!! They give you a good amount of sauce which I love because I usually ask for 2 sauces at most places, but here it is not needed. The egg rolls were nice and crunchy, and the carrots were a nice size thickness with lots of flavor. 
    I'm very excited to come back and try other things. My only complaint would be some of their prices. I wanted to order the spring rolls, but they were $7!! So I opted not to.", 
    user_id: user3.id, business_id: noodle_time.id, rating: 4)
    review20 = Review.create!(body: "Very close to work. Definitely an upgrade from the previous vender. Feeling very hungry and in need of something spicy. Got garlic noodles with BBQ beef to go. 
    5 min wait time. Not too busy at 11:35am on a Thursday. Garlic definitely came though in the noodles but were a bit dry. Curious to know how the beef is considered 'BBQ'? Beef was good though. 
    Nice refreshing side salad. Didn't quite fill me up but I admit my appetite is not average. Price a little high for what it is in the FiDi area. Total: $14.50 including 15% tip at the register (
    not fond of tips before service -- like wth?). Feel it should be closer to $12 total. Will come again to try soups/sandwiches. Maybe would give 3.5 if I could but unwilling to round up.", 
    user_id: user4.id, business_id: noodle_time.id, rating: 3)
    review21 = Review.create!(body: "Rating based off of a mealpal meal that I got, which was their mongolian beef, and a thai iced tea I received for doing a yelp check in deal. 
    The portion was medium-sized for a meal pal, so it wasnt that great, but the flavor was really good. It came with white rice on the side as well. 
    I am sure their normal priced meals are better-portioned. The thai iced tea itself makes this place a 3.5 star place. It really wasnt very good. I didnt think it was possible to have anything less than praise for thai tea, but this place changed my mind. It was just okay. 
    Overall the mongolian beef was solid!", user_id: user7.id, business_id: noodle_time.id, rating: 5)
    review22 = Review.create!(body: "Mmmm I came here with my coworker today because it looked like it was going to rain! Ah, SF weather... 
    I got the Seafood bowl (egg noodles, fish cake(2), fish balls (3), halibut pieces (2), imitation crab (2), shrimp (3) and fried fish cake (2). 
    This tasted pretty good. Good amount of saltiness, hot, decent amount of seafood and noodles. Check in and get a free (slightly diluted) thai iced tea! 
    Would go again.", user_id: user6.id, business_id: noodle_time.id, rating: 4)
    review23 = Review.create!(body: "Terrible food, over priced for the neighborhood, employees are rude and portions are really small. I paid over $5 for a 'large coffee and was served a large cup less then half full that already had milk and someothertype of creamer in it. I asked why the cup was so empty when I paid so much and the cashier told me that's what the machine put out so it must be right in a very cocky tone, apparently he didn't want to put his phone down long enough to help me.
    This is the second and last time I will ever use this establishment, and I urge others to take their business elsewhere.", user_id: user1.id, business_id: noodle_time.id, rating: 1)
    review24 = Review.create!(body: "I went in here for the first time and the first thing the cashier tries to do is overcharge me. I honestly think she was prejudice because I am African American. 
    They gave me the wrong order then charged me two extra dollars for my correct order. Also, I got a very weird vibe from all the staff inside the restaurant. Don't know if I'll be going there again.", 
    user_id: user8.id, business_id: noodle_time.id, rating: 2)

    #Jackson Place Cafe
    review3 = Review.create!(body: "Great cup of coffee no matter who makes it- love the consistency. And the mocha is amazing.", user_id: user3.id, business_id: jackson_place_cafe.id, rating: 5)
    review25 = Review.create!(body: "Chocolate chip scone with lemon was nice. The scone was buttery and really tasty.  The speck, egg, avocado panini was just ok. The bread had a great texture, but the sandwich itself was pretty bland and almost tasted like smoked salmon. 
    It was a bit meh for San Francisco. Great little area that wouldn't be so great if it was rainy and super cold. Very nice service.", user_id: user2.id, business_id: jackson_place_cafe.id, rating: 4)
    review26 = Review.create!(body: "I was visiting SF and went here, which was near my hotel, for a double-expresso midday caffeine joint and wasn't disappointed. The espresso was rich and flavorful and to make things better it only cost a little over $3. 
    Glad I passed the local Starbucks on my way to this little gem.", user_id: user1.id, business_id: jackson_place_cafe.id, rating: 4)
    review27 = Review.create!(body: "This is actually one of my favorite spots in the city.  It truly feels like a hidden gem, as it's not visible from the sidewalk.  You have to walk down a little brick alleyway to find the adorable stand and outdoor seating area.
    There's plenty of seating, lots of greenery and brick walls, quiet, peaceful and amazing coffee!  They serve sightglass (yum) and make a mean latte.  I have also tried their orange chocolate scone, and it's fantastic.  Would even go out of my way to come here and order the scone and a coffee!
    Baristas are super friendly and quite chatty.  They clearly have a following of loyal regulars (a good sign).  Prices are standard, nothing out of the ordinary.
    A review really does not do this place justice, you have to go and try it for yourself!", user_id: user4.id, business_id: jackson_place_cafe.id, rating: 4)
    review28 = Review.create!(body: "Nice spot for coffee in Jackson Square. There are several coffee shops in the area, but none have the ambiance of this cafe, which is essentially a coffee kiosk with outdoor seating nestled in an brick building alley way. They use Sightclass coffee serve a great cafe au lait and mocha,
     which is made with Guittard chocolate so it's a real treat. If you work in the area, retreat to Jackson Place Cafe if you want to have some coffee in a chill atmosphere.", user_id: user5.id, business_id: jackson_place_cafe.id, rating: 4)
    review29 = Review.create!(body: "Hidden gem! You walk by it every day, drop by. The courtyard itself is magic. All cities need more places like this.", user_id: user7.id, business_id: jackson_place_cafe.id, rating: 4)
    review30 = Review.create!(body: "I decided to stop by here, and get some work done before my next onsite meeting. The place itself looks really cool, but it's entirely outdoors (in an alley), so it gets really cold.  I ordered the house special Blueboon Drip Coffee.  It was cool, no complaints, but nothing I'm dying to get again.  
    But this place does not have wifi! What coffee shop doesn't have wifi nowadays?  Get with the times!  Needless to say, this hinders people from being able to hang out longer, do work, and order more drinks/food.", 
      user_id: user8.id, business_id: jackson_place_cafe.id, rating: 5)

    #Daniel Test Kitchen
    review35 = Review.create!(body: "21 and over only! Do not try to bring kids here because it's inside a bar, and they will kick you out.", user_id: user8.id, business_id: daniels_test_kitchen.id, rating: 3)
    review4 = Review.create!(body: "Such a great find! Went here on a Sunday and walked right in which during brunch time is hard to find. The food did not disappoint and every dish had a unique taste to it. Daniel stopped by to say hi to every table and he informed us that the menu changes weekly! I recommend the fried chicken if they have it!
    All in all I definitely recommend this place for a great brunch spot that has amazing food and is very well priced!", user_id: user4.id, business_id: daniels_test_kitchen.id, rating: 2)
    review31 = Review.create!(body: "Wonderful spot! Got all three mains including the Nashville Fried Chicken (hot). I actually just came back from Nashville two weeks ago and I can tell you that this chicken could hold its own in Tennessee.
    Even got to chat with the chef himself. Huge fan of the venue and the chef. Will be back soon", user_id: user5.id, business_id: daniels_test_kitchen.id, rating: 4)
    review32 = Review.create!(body: "Cute little spot. Didn't have the waffles this weekend so will have to still hunt for more. Also tried these new Matcha Donuts! Couldn't wait so you get a photo with one bite missing. 
    3 mini biscuit-like donuts with a Matcha glaze. Not your traditional cake style or old fashioned style donut. More of a biscuit-like texture with a little crunch that would go great with a cup of coffee.", user_id: user6.id, business_id: daniels_test_kitchen.id, rating: 3)
    review33 = Review.create!(body: "This place was so good. The menu apparently changes up, but I had the chicken and waffles, and my boyfriend had the brunch pizza with sausage. Both were extremely tasty. The chicken was really crispy and flavorful, 
    and the brunch pizza had a great honey Sriracha drizzle topped with sunny side eggs. Daniel himself seemed really nice. Highly recommend checking this place out for proper brunch.", user_id: user2.id, business_id: daniels_test_kitchen.id, rating: 5)
    review34 = Review.create!(body: "Really really bad luck to have found this horrible place when we were traveling in San Francisco.  Trusted yelp for the 4 stars.  But it's far below average and overpriced.  I read in other review that the pizza was bad so we ordered chicken.  
    We knew it's fried but thinking it should be somehow different for being breakfast. Well, it's really just, fried chicken, with fries, like what you can get in KFC for half the price. And unbelievably, it's even worse than KFC!!!", user_id: user3.id, business_id: daniels_test_kitchen.id, rating: 1)
    review36 = Review.create!(body: "Very good! Takes modern bar fare and adds style and unconventional ingredients to make it exceedingly more interesting. Will definitely come back to this spot!", user_id: user1.id, business_id: daniels_test_kitchen.id, rating: 4)
    review37 = Review.create!(body: "Don't let the pics fool you. This is a bar that decided to open for brunch and have only 3 menu items. When I asked if they had lattes the waitress laughed in my face. Unless you enjoy brunching in dive that smells like old beer, don't come here.", user_id: user7.id, business_id: daniels_test_kitchen.id, rating: 1)
    
    #Yo-Yo
    review5 = Review.create!(body: "Great place to have cheap lunch!! Lots of vegetarian options but my favorite is veggie udon with veggie dumplings.. slurppp yumm! Cash only", user_id: user5.id, business_id: yoyo.id, rating: 5)
    review38 = Review.create!(body: "Affordable, simple, and tasty spot for lunch in Jackson Square. Sushi, dumplings, soba, and more can be had for just a few dollars. I like the seaweed salad and sushi rolls for a quick snack. 
    The chicken teriyaki is not sit down restaurant quality, but will fill you up. They recently increased the prices for the dish by 50 cents. It's still a good deal though. For $6 you can get a half order of chicken teriyaki and a side of dumplings. The soba noodles in a half serving are filling as well, though the soup has a sweeter note to it. Plan to take out your food since there's only one table inside.
    ", user_id: user1.id, business_id: yoyo.id, rating: 4)
    review39 = Review.create!(body: "5 stars for the price (considering the pricey FiDi/Embarcadero area). It's a to go only shop with no seats, great for worker lunch pickup. It's tasty, clean, cheap, with great quality and service (mom and pop shop). The chicken teriyaki is $7.50 for a huge portion or you can get a half size (still plenty to eat) for $4. Mon and Tues has chicken curry special which is really tasty. 
    The udon is also solid, but not amazing. The smoked salmon sushi (and all 6 roll sushis) are $2.75 which is a steal.", user_id: user3.id, business_id: yoyo.id, rating: 5)
    review40 = Review.create!(body: "This is my go-to spot for friendly, CHEAP and great Japanese food! Mom and Pop shop that has been there for a very long time with the owners working every weekday and do their best to make you feel at home. 
    Don't forget Cash!", user_id: user2.id, business_id: yoyo.id, rating: 5)
    review41 = Review.create!(body: "So delicious and cheap! I'm a vegetarian so finding veggie sushi can be a Mission sometimes but not at yoyo's! I got the Cucumber roll and half order udon for 5.75 which is a total steal. 
    Considering coming here for lunch every day from here on out. Also FYI it's cash only!", user_id: user4.id, business_id: yoyo.id, rating: 5)
    review42 = Review.create!(body: "I don't understand the lines and good reviews for this place. They microwave the chicken teriyaki. It was the most disgusting thing I've eaten in years. 
    I'm sorry I usually hate leaving bad reviews but it was really gross.", user_id: user6.id, business_id: yoyo.id, rating: 1)
    review43 = Review.create!(body: "I had the half order of chicken teriyaki and it made me turn into a pescatarian.  It was just so depressing.  The service is cold and I'm sure their other dishes are great and they're working at that pace for efficiency purposes, 
    but I don't think I would go back.", user_id: user7.id, business_id: yoyo.id, rating: 2)
    
    #Boba Guys
    review44 = Review.create!(body: "Boba guys is pretty good, I really like the fruit Fresca raspberry pineapple is my favorite. Great tapioca never too hard or too soggy.
     I wouldn't go out my way to come here but if your in the area try it", user_id: user1.id, business_id: boba_guys.id, rating: 4)
    review45 = Review.create!(body: "always a great time here as the boba is so tasty!! so much customization and a go to for boba in SF. i recommend hong kong style as my favorite. 
    the matchata was alright. service is nice and friendly & interior is clean and small.", user_id: user8.id, business_id: boba_guys.id, rating: 5)
    review46 = Review.create!(body: "There's a lot of Boba Guys in SF, so it's really just a matter of where you happen to be when you crave Boba. It's a small shop here but they're efficient so you won't have to wait too long to order or get your drink.
    Get milk tea, or not, you'll enjoy it either way. The quality will almost never disappoint, and if it does, they accommodate you well and will make a new drink for you. For the slightly higher costs you're paying,
     you're getting a much better drink than most other tea shops have to offer.", user_id: user2.id, business_id: boba_guys.id, rating: 4)
    review47 = Review.create!(body: "So...I liked my Indian Chai well enough...and this place had TONS of fun options...but most if those I wanted to try were iced on a rainy day in SF. Also...I do not love boba balls...but even the two iced drinks of my family members tasted just ok. So...I will likely go back on a warmer day and see what the huge wait is abput on one of the other iced drinks. Clean. 
    Friendly service and super patient in spite if line behind me...fun decor and logo. Oh yes...gotta have straws with these balls at the bottom of yhe drink.", user_id: user4.id, business_id: boba_guys.id, rating: 3)
    review48 = Review.create!(body: "This place seems always busy! so we gave it a shot to see what it's all about. My husband and i came by this place around 9pm at night on a saturday and it was still packed we waiting about 30 minuted to order and about another 10-15 wait to receive our bubble tea.  It's true the ingredients taste really fresh and the bubbles are chewy all the way through, it's also super flavourful.  I had the horchata and my husband had some seasonal drink. 
    Honestly the bubble tea overall was just OK. i wouldn't wait in line again, but as i was in town on vacation i didn't want to leave regretting not trying it.", user_id: user6.id, business_id: boba_guys.id, rating: 3)
    review49 = Review.create!(body: "Long lines. I am amazed every boba spot is always busy. Matcha caramel latte: did less caramel to decrease the sweetness and it was perfect so thx to the girl behind the counter for helping me figure that out.
    Def not cheap, spent 15 bucks on 2 drinks, but good quality boba", user_id: user3.id, business_id: boba_guys.id, rating: 4)
    review50 = Review.create!(body: "I love boba. I have it way too often, but it's so good I can't stop myself. Boba guys is definitely one of my favorite places to grab a cup when i'm in SF. The hong kong milk tea is my go-to, which features black tea with condensed milk, so it's very creamy and very good. 
    The mission location is nice and tiny, it's not really somewhere to stick around, I would suggest taking it and walking 5 minutes to dolores, where you can relax with your boba and people watch. My only tip is avoid the horchata milk tea, I tried it before and it really wasn't good. 
    However, the jasmine milk tea is a solid choice as well! Be prepared for a wait, you never really know how long the line can get around here, it's not as bad here though compared to the hayes valley or union square location!", 
    user_id: user7.id, business_id: boba_guys.id, rating: 5)

    #Reveille Coffee Company
    review51 = Review.create!(body: "A nice compact coffee shop at Castro area. Quality of sandwich is great, coffee is average although. Good for short lunch/coffee break.", 
    user_id: user3.id, business_id: reveille_coffee_co.id, rating: 4)
    review52 = Review.create!(body: "A spot that seemed to be dominated by people working, Reveille didn't have the same warmth that other cafes in SF have, but they still serve up a nice latte. Literally every table inside was occupied by one person on a computer or a phone, all in a line facing the counter. It felt like a satire.
    That being said, the area in the front seems better for gathering with a friend and feels a bit organic.  
    My latte was solid, though there seemed to be something missing from my friend's dirty chai, maybe a little less chai than expected, 
    as it was missing some of the earthy and spiciness we usually associate with dirty chais. Can't win them all, but still a fine choice", 
    user_id: user1.id, business_id: reveille_coffee_co.id, rating: 3)
    review53 = Review.create!(body: "I was here the first time today and my first impression is so great. My first impression might have been impacted by my 1 min visit to next door Starbucks though. 
    The vibe is so great here, especially compared to next door Starbucks. They have a patio-like outdoor area as well which worked just great for me today. I enjoyed fresh air outside a bit, 
    read some article and keeps moving to my next destination. Next time I'll spend more time here.", 
    user_id: user5.id, business_id: reveille_coffee_co.id, rating: 5)
    review54 = Review.create!(body: " have been a Réveille customer since they opened their doors. This morning I went in to have breakfast. As I place my order at the register I was informed that I was 4 minutes late for the breakfast menu... REALLY? 
    If they are that anal about timing...TAKE THE DAMNED MENU OFF THE COUNTER SO YOUR CLIENTELE IS NOT DISAPPOINTED and SHOW SOME FLEXIBILITY. What ? Do the eggs disappear when the clock strikes 10:30? Never to return. Le Marais is a much friendlier place. 
    today, a few weeks later, I thought I'd give the place another shot. THE SERVICE STILL SUCKS. The guy, barista?, was so busy chatting and dancing around that it took him 15 minutes to prepare an americano. He then left it on the counter without announcing 
    it and went over to the register to take care of someone else. Im really DONE NOW. (Should you need to know who he is ... he's the 'English major' he announced that several times. His attitude sucks too.", 
    user_id: user2.id, business_id: reveille_coffee_co.id, rating: 1)
    review55 = Review.create!(body: "Cozy, friendly spot for coffee and food. Great little front patio area for sunny days, and good WiFi. Their food is simple but good - 
    their shakshuka is great, and salads are big and tasty.", 
    user_id: user8.id, business_id: reveille_coffee_co.id, rating: 4)
    review56 = Review.create!(body: "The coffee was phenomenal.  Though, I ordered to-go and they had me in a cup to stay.  So, I stayed.  I enjoyed.  It was nice, busy.... but nice.
    The food looked amazing, but maybe well try that next time around.  The neighborhood is lovely, so you can also grab a to go latte and enjoy a walk around.  Again, coffee was delicious.", 
    user_id: user7.id, business_id: reveille_coffee_co.id, rating: 4)
    review57 = Review.create!(body: "A nice compact coffee shop at Castro area. Quality of sandwich is great, coffee is average although. Good for short lunch/coffee break.", 
    user_id: user6.id, business_id: reveille_coffee_co.id, rating: 5)
    
    #The Coffee Movement
    review58 = Review.create!(body: "Their cappuccino is really fantastic
    I was planning to do some reading here but unfortunately they don't have chairs...", 
      user_id: user2.id, business_id: the_coffee_movement.id, rating: 5)
    review59 = Review.create!(body: "My new favorite spot for coffee! If you are a coffee connoisseur, you will love The Coffee Movement for its selection of beans and for each and every cup they brew. I've had their drip and their pour over and they did not disappoint. They also have a flight option, which is pretty dope. 
    If you're looking for a cafe to study at, this isn't it, but it's a great place to chill with a friend while enjoying delicious coffee.", 
      user_id: user1.id, business_id: the_coffee_movement.id, rating: 5)
    review60 = Review.create!(body: "Hands down the best coffee place in town now. I have a friend who has specific coffee requirements came to town recently 
    and I told him to give this new establishment a try, even though I haven't tried it myself. This is the only place during his trip to Seattle & SF where he had piccolo
    with double-ristretto (and he has visited many cafes around the world, trust me) and made friend with Brian. So last weekend I came here with my spouse and sipped an amazing Ethiopia Reko 'spro from Madcap while she had piccolo latte.
    I am glad that I went here on their first few weeks; because I believe they will be flooded by customers soon when people finally realize this cozy and unpretentious spot is the home base of US Barista Champion 2018. Thank you for the delicious Ethiopia, Reef!", 
    user_id: user3.id, business_id: the_coffee_movement.id, rating: 5)
    review61 = Review.create!(body: "My friends and I visited on a weekend during its first month of opening. Coffee Movement has the friendliest baristas and is a lovely, hipster coffee shop on the outskirts of Chinatown. The space is small but very inviting. 
    You can enjoy your drink at one of the two counters, on the sidewalk stools, or standing at the vintage truck parked in front of the shop while watching the cable cars pass by.",
    user_id: user4.id, business_id: the_coffee_movement.id, rating: 5)
    review62 = Review.create!(body: "The service from the folks behind the bar was impeccable in every way. They even offered for me to park my child's stroller inside...My cappuccino was delicious. 
    Was disappointed that they had ran out of croissants and was treated to a cookie instead. These guys are magicians, and in a sea of pretentious java I'll sail with The Coffee Movement.", 
    user_id: user5.id, business_id: the_coffee_movement.id, rating: 5)
    review63 = Review.create!(body: "Gorgeous, super chic little coffee shop. Got the vanilla latte and cocoa cappuccino - both were amazing. 
    Friendly and super knowledgeable baristas. Excellent customer service. Best coffee in town!", 
    user_id: user6.id, business_id: the_coffee_movement.id, rating: 5)
    review64 = Review.create!(body: "I adore places like this - coffee shops that actually specializes in coffee. We ordered the vanilla latte and the coca cappuccino and they are both were so delicious! 
    The staff is so friendly and helpful, answered every question. The best part- it's a dog friendly place so grab your pup and stop by for a really good cup of coffee.
    We are definitely coming back here.", 
    user_id: user7.id, business_id: the_coffee_movement.id, rating: 5)

    #Boba Butt Tea House
    review65 = Review.create!(body: "Best Boba Tea I had visiting San Fran! Great service super quick  it was right next to my Hilton hotel so super convenient. 
    Had the Matcha with strawberry and tapioca.", user_id: user5.id, business_id: boba_butt_tea_house.id, rating: 5)
    review66 = Review.create!(body: "Came here for the super cute logo/shop name and the Instagram photos! This shop is pretty small, tucked away in SF Chinatown. 
    I got the smaller size of matcha strawberry latte with boba, which surprisingly costed $6 considering the size of the drink. The drink was okay - the strawberry sauce/puree/flavoring didn't really blend into the rest of the drink, and curdled after a while which I thought was a bit strange. 
    The other drinks looked pretty interesting, but considering how expensive it is, I'm not sure if I'll be back :/", user_id: user3.id, business_id: boba_butt_tea_house.id, rating: 3)
    review67 = Review.create!(body: "And the cutest logo award goes to...! You have to admit, Boba Butt is absolutely adorable. Although their drinks are on the expensive side with toppings, etc, they're very aesthetic and the drinks I tried were pretty good! I really enjoyed the cheesecake crema topping with the logo stamped on top. Yes it's unnecessary food coloring, but it's super cute. Also, I love the shape of the cups with the rounded bottom! It's only 50¢ to upgrade the size to a large, so might as well. 
    As for the drinks, I personally thought the strawberry matcha was extremely sweet, even with the sweetness level adjusted down, but it was still a good drink. The Okinawa milk tea is a classic, and the passion fruit green tea had a very strong and delicious tea flavor. The texture of the boba was perfect and the strawberry hearts were a fun topping too, although they kept getting stuck in the straw.
    All in all, Boba Butt is worth a visit! Don't expect to hang out there, though, since it's a very small space with only about 6 stools inside. However, it's definitely a welcomed addition to SF's saturated boba scene!", user_id: user1.id, business_id: boba_butt_tea_house.id, rating: 4)
    review68 = Review.create!(body: "Best Boba Tea I had visiting San Fran! Great service super quick  it was right next to my Hilton hotel so super convenient. 
    Had the Matcha with strawberry and tapioca.", user_id: user2.id, business_id: boba_butt_tea_house.id, rating: 5)
    review69 = Review.create!(body: "Finally checked out Boba Butt last Saturday evening. I've always wanted to try it when I am in the area but the store closes fairly early for a boba shop. 
    It is located right by a Chinese restaurant, not very noticeable unless you are looking for the shop. The store is on the smaller side, very limited seating, and finding free parking can be difficult around the area. 
    It is right across from a parking structure though. The design of the store and the cups are super cute! I got an oolong milk tea with boba, the drink was okay, but the boba was a little too chewy for me. Unfortunately they do not have any milk alternatives, but the staff informed me that all of their milk area dairy free! So all my lactose intolerant friends, you will be fine ordering their milk tea!
    ", user_id: user8.id, business_id: boba_butt_tea_house.id, rating: 4)
    review70 = Review.create!(body: "Over-brewed tea and undercooked boba. The oolong milk tea with boba was not good, especially considering the price tag. Cute name and logo though!",
     user_id: user4.id, business_id: boba_butt_tea_house.id, rating: 3)
    review71 = Review.create!(body: "For those Instagram photos, I honestly fell into a trap. Completely tricked into thinking the quality of the drinks were good. However, shamelessly the drinks were just not that great. The only good thing about the place was its cute logo on the cups, drink topping and the cute business name 'boba butt' 
    but anything else just fell flat. Come in with low expectations and you'll be fine. The parking is horrible. You're going to have to park at the parking garage across the street if it's busy, since it's located between Chinatown and FiDi. For the price value, I wouldn't want to spend my money on the drinks. Plus there's limited seating. You basically walk-in and grab your drink and go. No place to hang out and enjoy your drink, but there's nothing great about it to begin with anyways.
    Worth it? No. Hard pass!", user_id: user6.id, business_id: boba_butt_tea_house.id, rating: 2)

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
    user8.profile_pic.attach(io: File.open('./app/assets/images/user/user-8.jpg'), filename: 'user-8.jpg')
    
end
