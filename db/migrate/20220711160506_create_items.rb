class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.text :description
      t.string :image_url
      t.integer :starting_bid
      t.datetime :starting_time
      t.datetime :closing_time
      t.string :category

      t.timestamps
    end
  end
end
