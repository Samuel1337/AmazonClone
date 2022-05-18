class Product < ApplicationRecord

    validates :title, presence: true, uniqueness: true
    validates :price, :rating, :filename, :specialty, :category_id, presence: true

    has_one_attached :photo

end
