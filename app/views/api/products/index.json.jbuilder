json.array! @products do |product|
json.partial! 'api/products/product', product: product
json.photoUrl url_for(product.photo)
end