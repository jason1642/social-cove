# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)



Comment.destroy_all
Post.destroy_all
User.destroy_all


User.create(username: 'anon1', email: 'anon1@gmail.com', password: 'testpass1', bio: 'This is my bio 1')
User.create(username: 'anon2', email: 'anon2@gmail.com', password: 'testpass1', bio: 'This is my bio 2')
User.create(username: 'anon3', email: 'anon3@gmail.com', password: 'testpass1', bio: 'This is my bio 3')
User.create(username: 'anon4', email: 'anon4@gmail.com', password: 'testpass1', bio: 'This is my bio 4')
User.create(username: 'anon5', email: 'anon5@gmail.com', password: 'testpass1', bio: 'This is my bio 5')



Post.create(title: 'First Post', content: 'This is the content for my post 1.', user_id: 1)
Post.create(title: 'Second Post', content: 'This is the content for my post 2.', user_id: 2)
Post.create(title: 'Third Post', content: 'This is the content for my post 3.', user_id: 3)
Post.create(title: 'Fourth Post', content: 'This is the content for my post 4.', user_id: 4)
Post.create(title: 'Fith Post', content: 'This is the content for my post 5.', user_id: 5)
Post.create(title: 'Sixth Post', content: 'This is the content for my post 6.', user_id: 1)

p "#{User.count} users created"
p "#{Post.count} posts created"