class PrivateChat < ApplicationRecord
  # belongs_to :user, foreign_key: :sender_id, class_name: 'User'
  # belongs_to :user, foreign_key: :recipient_id, class_name: 'User'
  has_many :messages

 
  def current_users_chats(array_of_messages)

    # array_of_conversations = []

    return array_of_messages.group_by do |message|
        message.recipient_id
       end

  end

end
