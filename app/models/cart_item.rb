class CartItem < ApplicationRecord

    has_many :products,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Product

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

end
