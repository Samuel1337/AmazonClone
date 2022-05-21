json.partial! 'api/products/product', product: @product

@product.reviews.each do |review|
    review.author
    review.title
    review.body
    review.rating
    review.created_at
end