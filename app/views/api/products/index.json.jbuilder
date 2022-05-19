json.array! @products.each do |product|
        json.partial! 'api/products/product', product: product
        json.photoUrl url_for(product.photo)
end