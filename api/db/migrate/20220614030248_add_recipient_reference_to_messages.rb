class AddRecipientReferenceToMessages < ActiveRecord::Migration[7.0]
  def change
    # add_reference :messages, :recipient, reference: :user, foreign_key: true
    remove_column :messages, :user_id
  end
end
