class User < ApplicationRecord
 
  has_secure_password
  # has_secure_password :recovery_password, validations: false
  has_many :posts, dependent: :destroy
  has_many :comments, through: :posts

  validates :username, allow_nil: false, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: false }
  validates :email, allow_nil: false, format: { with: URI::MailTo::EMAIL_REGEXP }

end
