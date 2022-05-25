class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :string
      t.string :content
      t.string :text

      t.timestamps
    end
  end
end
