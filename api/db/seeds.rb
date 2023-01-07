# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# require 'open-uri'
require 'ffaker'

#  ActiveStorage_blobs.destroy
#  active_storage_blobs.destroy
#  active_storage_variant_records.destroy
# ActiveStorage.destroy

Comment.delete_all
Post.delete_all
User.delete_all

User.create(
    username: 'admin', 
    email: 'admin@email.com', 
    password: 'password', 
    bio: '35 Years old, working as a full stack developer', 
    profile_picture:{io:  FFaker::Image.file, filename: 'profileimage'}
)

User.create(
    username: FFaker::Name.unique.name, 
    email: FFaker::Internet.unique.safe_email, 
    password: 'testpass1', 
    bio: FFaker::Tweet.tweet,
    profile_picture:{io:  FFaker::Image.file, filename: 'profileimage'}
)

User.create(
    username: FFaker::Name.unique.name, 
    email: FFaker::Internet.unique.safe_email, 
    password: 'testpass1', 
    bio: FFaker::Tweet.tweet,
    profile_picture:{io:  FFaker::Image.file, filename: 'profileimage'}
)
User.create(
    username: FFaker::Name.unique.name, 
    email: FFaker::Internet.unique.safe_email, 
    password: 'testpass1', 
    bio: FFaker::Tweet.tweet,
    profile_picture:{io:  FFaker::Image.file, filename: 'profileimage'}
)
User.create(
    username: FFaker::Name.unique.name, 
    email: FFaker::Internet.unique.safe_email, 
    password: 'testpass1',
    bio: FFaker::Tweet.tweet,
    profile_picture:{io:  FFaker::Image.file, filename: 'profileimage'}
)
User.create(
    username: FFaker::Name.unique.name,
    email: FFaker::Internet.unique.safe_email, 
    password: 'testpass1', 
    bio: FFaker::Tweet.tweet,
    profile_picture:{io:  FFaker::Image.file, filename: 'profileimage'}

)



Post.create(
    title: FFaker::Book.title,
    content: FFaker::Tweet.tweet,
    user_id: 1,
    image:{io:  FFaker::Image.file, filename: 'postimage'}
)

Post.create(
    title: FFaker::Book.title,
    content: FFaker::Tweet.tweet,
    user_id: 2,
    image:{io:  FFaker::Image.file, filename: 'postimage'}
)
Post.create(
    title: FFaker::Book.title,
    content: FFaker::Tweet.tweet,
    user_id: 3,
    image:{io:  FFaker::Image.file, filename: 'postimage'}
    )
Post.create(
    title: FFaker::Book.title,
    content: FFaker::Tweet.tweet,
    user_id: 4,
    image:{io:  FFaker::Image.file, filename: 'postimage'}
)
Post.create(
    title: FFaker::Book.title,
    content: FFaker::Tweet.tweet,
    user_id: 5,
    image:{io:  FFaker::Image.file, filename: 'postimage'}
)
Post.create(
    title: FFaker::Book.title,
    content: FFaker::Tweet.tweet,
    user_id: 6,
    image:{io:  FFaker::Image.file, filename: 'postimage'}
)

p "#{User.count} users created"
p "#{Post.count} posts created"