export const fetchAllProducts = () => (
    $.ajax({
        url: '/api/products'
    })
)

export const fetchCategoryProducts = categoryId => (
    $.ajax({
        url: `/api/categories/${categoryId}products`
    })
)

export const fetchProduct = productId => (
    $.ajax({
        url: `/api/products/${productId}`
    })
)