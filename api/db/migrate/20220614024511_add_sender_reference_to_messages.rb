class AddSenderReferenceToMessages < ActiveRecord::Migration[7.0]
  def change
    remove_reference :messages, :user, foreign_key: :sender_id, class_name: 'User'
    add_reference :messages, :user, foreign_key: :recipient_id, class_name: 'User'
  end
end
