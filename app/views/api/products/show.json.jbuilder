json.partial! 'api/products/product', product: @product
@product.reviews.each do |review|
    json.set! review.id do
        json.author review.author
        json.product review.product
        json.title review.title
        json.body review.body
        json.rating review.rating
        json.created_at review.created_at
    end
end