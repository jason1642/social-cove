class PrivateChat < ApplicationRecord
  # belongs_to :user, foreign_key: :sender_id, class_name: 'User'
  # belongs_to :user, foreign_key: :recipient_id, class_name: 'User'
  has_many :messages, dependent: :delete_all

 
  def current_users_chats(array_of_messages)

    # array_of_conversations = []
    # array_of_messages.sort_by!(&:created_at)
    return array_of_messages.sort_by(&:created_at).group_by do |message|
        message.recipient_id
       end

  end

end
