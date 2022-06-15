class Message < ApplicationRecord
  # belongs_to :user, foreign_key: :sender, class_name: 'User'
  belongs_to :recipient, class_name: 'User', foreign_key: :recipient_id
  belongs_to :sender, class_name: 'User', foreign_key: :sender_id
  # belongs_to :private_chat, optional: true
  # belongs_to :group_chat, optional: true
  

  validates_presence_of :content, :sender_id, :recipient_id
end
