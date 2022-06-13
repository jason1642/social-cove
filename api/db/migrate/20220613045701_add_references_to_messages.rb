class AddReferencesToMessages < ActiveRecord::Migration[7.0]
  def change
    add_reference :messages, :private_chat, foreign_key: true
    add_reference :messages, :group_chat, foreign_key: true
  end
end
