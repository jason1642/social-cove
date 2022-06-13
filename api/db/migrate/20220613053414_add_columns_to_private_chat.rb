class AddColumnsToPrivateChat < ActiveRecord::Migration[7.0]
  def change
    # add_reference :private_chats, :sender_id, foreign_key: true, class_name: 'User'
    remove_column :private_chats, :recipient_id_id
    remove_column :private_chats, :sender_id_id
  end
end
