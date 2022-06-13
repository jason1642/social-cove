class Message < ApplicationRecord
  belongs_to :user
  belongs_to :private_chat, optional: true
  belongs_to :group_chat, optional: true
  

  validates_presence_of :content, :private_chat_id || :group_chat_id, :user_id
end
