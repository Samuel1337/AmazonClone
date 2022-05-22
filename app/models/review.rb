class Review < ApplicationRecord

    belongs_to :author,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :product,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Product

end
