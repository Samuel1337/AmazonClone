json.cartItems do
    @cart_items.each do |cart_item| 
        json.set! cart_item.id do
            json.partial! 'api/cart_items/cart_item', cart_item: cart_item
        end
    end
end

json.products do
    @products.each do |product|
        json.set! product.id do
            json.partial! 'api/products/product', product: product
        end
    end
end