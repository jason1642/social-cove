class User < ApplicationRecord
 
  has_secure_password
  # has_secure_password :recovery_password, validations: false

  has_one_attached :profile_picture

  has_many :posts, dependent: :destroy
  has_many :comments, through: :posts






# Will return an array of follows for the given user instance
has_many :received_follows, foreign_key: :followed_id, class_name: "Follow"

# Will return an array of users who follow the user instance
has_many :followers, through: :received_follows, source: :follower

  # returns an array of follows a user gave to someone else
  has_many :given_follows, foreign_key: :follower_id, class_name: "Follow"
  # returns an array of other users who the user has followed
  has_many :following, through: :given_follows, source: :followed_user







  # attribute :bio, :string, default: ''
  validates :username, allow_nil: false, presence: true, uniqueness: true
  validates :password, allow_nil: false, length: { minimum: 6}
  validates :email, allow_nil: false, format: { with: URI::MailTo::EMAIL_REGEXP }



  def profile_picture_url
    Rails.application.routes.url_helpers.url_for(profile_picture) if profile_picture.attached?
  end

end
