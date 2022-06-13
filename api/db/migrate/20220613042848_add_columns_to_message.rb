class AddColumnsToMessage < ActiveRecord::Migration[7.0]
  def change
    add_reference :messages, :user, foreign_key: true
    add_column :messages, :content, :string
    add_column :messages, :is_private, :boolean



  end
end
