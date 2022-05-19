@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :title, :category
        json.photoUrl url_for(product.photo)
        # json.photoUrl do
        #     product.photo
        # end
    end
end