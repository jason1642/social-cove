class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :username, :bio, :email, :created_at, :updated_at, :profile_picture, :followers, :following
  has_many :posts
end
