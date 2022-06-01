class UserSerializer
  include JSONAPI::Serializer
    # has_many :posts
  attributes :id, :username, :bio, :email, :created_at, :updated_at, :profile_picture, :followers, :following , :posts

  def posts
    PostSerializer.new(object).serializable_hash[:data][:attributes]
  end
end
