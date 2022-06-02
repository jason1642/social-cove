class UserSerializer < ActiveModel::Serializer
  include JSONAPI::Serializer

 
  has_many :posts
  attributes :id,
   :username,
    :bio,
     :email,
      :created_at,
       :updated_at,
        :profile_picture,
         :followers,
          :following,
          :posts,

end
