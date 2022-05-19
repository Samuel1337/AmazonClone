@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :title, :category
        json.imageUrl do
            product.photo
        end
    end
end