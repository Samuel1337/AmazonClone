json.partial! 'api/products/product', product: @product
@product.reviews.each do |review|
    json.reviews do
        json.set! review.id do
            json.id review.id
            json.author review.author.username
            json.product_id review.product_id
            json.user_id review.user_id
            json.title review.title
            json.body review.body
            json.rating review.rating
            json.created_at review.created_at
        end
    end
end