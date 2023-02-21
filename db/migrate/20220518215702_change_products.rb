class ChangeProducts < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :category_id, :integer
    add_column :products, :category, :string
    add_index :products, :category
  end
end
