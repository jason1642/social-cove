class PostSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :content, :image, :created_at, :updated_at, :image_url
end
