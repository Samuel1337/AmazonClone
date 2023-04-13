json.key_format! camelize: :lower
json.extract! product, :id, :title, :price, :description, :rating, :filename, :specialty
if product.photo.attached?
    json.photoUrl url_for(product.photo) 
else
    json.photoUrl ""
end