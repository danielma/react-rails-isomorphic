class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :slug
      t.string :source
      t.string :html
      t.belongs_to :author, index: true
      t.datetime :published_at

      t.timestamps null: false
    end
    add_foreign_key :posts, :authors
  end
end
