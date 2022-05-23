class RemoveIndexOnReviewsTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, name: "index_reviews_on_product_id"
    remove_index :reviews, name: "index_reviews_on_user_id"
  end
end
