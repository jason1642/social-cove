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

# downloaded_image = URI.parse('https://www.timeforkids.com/wp-content/uploads/2021/10/K1-habitat-back.jpg?w=1024').open
User.create(username: 'admin', email: 'admin@gmail.com', password: 'password', bio: '35 Years old, working as a full stack developer', profile_picture:{io:  FFaker::Image.file, filename: 'profileimage'})

User.create(username: FFaker::Name.unique.name , email: 'anon1@gmail.com', password: 'testpass1', bio: 'This is my bio 1', profile_picture:{io:  FFaker::Image.file, filename: 'profileimage'}
#     ,:profile_picture  => {
#     # :uri => 'https://www.timeforkids.com/wp-content/uploads/2021/10/K1-habitat-back.jpg?w=1024',
#     :io => downloaded_image,
#     :filename => 'profileimage1.jpg'
#     # content_type: 'jpg'
#   }
)

User.create(username: FFaker::Name.unique.name , email: 'anon2@gmail.com', password: 'testpass1', bio: 'This is my bio 2'
    # , profile_picture: 'https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHw%3D&w=1000&q=80'
)
User.create(username: FFaker::Name.unique.name , email: 'anon3@gmail.com', password: 'testpass1', bio: 'This is my bio 3'
    # , profile_picture: 'https://www.ndow.org/wp-content/uploads/2021/10/spec-info.jpeg'
)
User.create(username: FFaker::Name.unique.name , email: 'anon4@gmail.com', password: 'testpass1', bio: 'This is my bio 4'
    # , profile_picture: 'https://avatars.githubusercontent.com/u/92739107?v=4'
)
User.create(username: FFaker::Name.unique.name , email: 'anon5@gmail.com', password: 'testpass1', bio: 'This is my bio 5'
    # , profile_picture: 'https://www.animalhumanesociety.org/sites/default/files/styles/crop_16_9_960x540/public/media/image/2018-05/AdobeStock_117975584_web.jpg?h=b3660f0d&itok=KeJCkEAE'
)



Post.create(title: 'First Post', content: 'This is the content for my post 1.', user_id: 1)
Post.create(title: 'Second Post', content: 'This is the content for my post 2.', user_id: 2)
Post.create(title: 'Third Post', content: 'This is the content for my post 3.', user_id: 3)
Post.create(title: 'Fourth Post', content: 'This is the content for my post 4.', user_id: 4)
Post.create(title: 'Fith Post', content: 'This is the content for my post 5.', user_id: 5)
Post.create(title: 'Sixth Post', content: 'This is the content for my post 6.', user_id: 1)

p "#{User.count} users created"
p "#{Post.count} posts created"