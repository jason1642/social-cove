class ChangeColumnInTable < ActiveRecord::Migration[7.0]
  def change
    change_column :posts, :content, :text
    change_column :follow, :followed, :following
  end
end
