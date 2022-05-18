class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string    :title,       null: false, unique: true
      t.float     :price,       null: false
      t.text      :description, array: true, default: []
      t.integer   :rating,      null: false, default: 0
      t.string    :filename,    null: false
      t.string    :specialty,   null: false, default: "none"
      t.integer   :category_id, null: false
      t.timestamps
    end
    add_index :products, :title, unique: true
    add_index :products, :category_id
  end
end
