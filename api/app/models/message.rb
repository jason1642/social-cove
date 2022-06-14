class Message < ApplicationRecord
  # belongs_to :user, foreign_key: :sender, class_name: 'User'
  has_one :user, foreign_key: :recipient
  # belongs_to :private_chat, optional: true
  # belongs_to :group_chat, optional: true
  

  validates_presence_of :content, :sender_id, :recipient_id
end
