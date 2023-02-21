@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :title, :price, :rating, :specialty, :category
        json.photoUrl url_for(product.photo)
    end
end