puts "📃 Seeding data..."

start_time = DateTime.now
close_time = Faker::Time.forward(days: 4, period: :day, format: :long)

u1 = User.create(username: Faker::Internet.username, email: Faker::Internet.email, password_digest: Faker::Internet.password, avatar_url: Faker::Avatar.image, full_name: Faker::Name.name, address: Faker::Address.full_address)
u2 = User.create(username: Faker::Internet.username, email: Faker::Internet.email, password_digest: Faker::Internet.password, avatar_url: Faker::Avatar.image, full_name: Faker::Name.name, address: Faker::Address.full_address)
u3 = User.create(username: Faker::Internet.username, email: Faker::Internet.email, password_digest: Faker::Internet.password, avatar_url: Faker::Avatar.image, full_name: Faker::Name.name, address: Faker::Address.full_address)
u4 = User.create(username: Faker::Internet.username, email: Faker::Internet.email, password_digest: Faker::Internet.password, avatar_url: Faker::Avatar.image, full_name: Faker::Name.name, address: Faker::Address.full_address)

i1 = Item.create(user_id: u3.id , name: "Dueling Horses", description: "Oil painting showing two horses fighting", image_url: "https://i.imgur.com/W6eujuN.jpg", starting_bid: 300, starting_time: start_time, closing_time: close_time )
i2 = Item.create(user_id: u4.id, name: "Kitten Sketch", description: "Sketch of Mittens the Kitten", image_url: "https://i.imgur.com/LrDnym3.jpg", starting_bid: 50, starting_time: start_time, closing_time: close_time )
i3 = Item.create(user_id: u2.id, name: "Wooden Motorcycle", description: "Wooden motorcycle figurine. Approximately 6in tall and 14in long", image_url: "https://i.imgur.com/lMig7ur.jpg", starting_bid: 250, starting_time: start_time, closing_time: close_time )
i4 = Item.create(user_id: u4.id, name: "Sphinx Sculpture", description: "Sculpture of Sphinx with reading Dementor on back", image_url: "https://i.imgur.com/0Am1lZx.jpg", starting_bid: 10000, starting_time: start_time, closing_time: close_time )
i5 = Item.create(user_id: u1.id, name: "Golden Dragon", description: "Golden Dragon digital art", image_url: "https://i.imgur.com/0awJkoM.jpg", starting_bid: 150, starting_time: start_time, closing_time: close_time )
i6 = Item.create(user_id: u3.id, name: "Florence In the Spring", description: "Photograph of Florence, Italy in the Springtime circa 2001", image_url: "https://i.imgur.com/LHBGAas.jpg", starting_bid: 180, starting_time: start_time, closing_time: close_time )
i7 = Item.create(user_id: u1.id, name: "Buddhist Copper Sculpture", description: "Buddhist Copper Sculpture approx: 4in tall", image_url: "https://i.imgur.com/wI9RZPJ.jpg", starting_bid: 550, starting_time: start_time, closing_time: close_time )
i8 = Item.create(user_id: u2.id, name: "Painting to Rover", description: "Oil painting of Rover the Labrador", image_url: "https://i.imgur.com/zgqTF64.jpg", starting_bid: 300, starting_time: start_time, closing_time: close_time )
i9 = Item.create(user_id: u4.id, name: "Thinking Angel Sculpture", description: "Stone Sculpture of small angel approx: 5in tall", image_url: "https://i.imgur.com/wc1NK7p.jpg", starting_bid: 200, starting_time: start_time, closing_time: close_time )
i10 = Item.create(user_id: u1.id, name: "Field of Flowers Photograph", description: "Photograph of multi-colored field of flowers", image_url: "https://i.imgur.com/KgJwoSX.jpg", starting_bid: 90, starting_time: start_time, closing_time: close_time )

b1 = Bid.create(item_id: i1.id, user_id: u1.id, amount: 350)
b2 = Bid.create(item_id: i1.id, user_id: u2.id, amount: 355)
b3 = Bid.create(item_id: i2.id, user_id: u1.id, amount: 62)
b4 = Bid.create(item_id: i3.id, user_id: u1.id, amount: 271)
b5 = Bid.create(item_id: i4.id, user_id: u2.id, amount: 1299)
b6 = Bid.create(item_id: i4.id, user_id: u3.id, amount: 1150)
b7 = Bid.create(item_id: i4.id, user_id: u1.id, amount: 1300)
b8 = Bid.create(item_id: i5.id, user_id: u2.id, amount: 167)
b9 = Bid.create(item_id: i6.id, user_id: u4.id, amount: 195)
b10 = Bid.create(item_id: i6.id, user_id: u2.id, amount: 188)
b11 = Bid.create(item_id: i8.id, user_id: u1.id, amount: 318)
b12 = Bid.create(item_id: i10.id, user_id: u2.id, amount: 98)

puts "✅ Done seeding"
