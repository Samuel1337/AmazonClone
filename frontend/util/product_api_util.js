export const fetchAllProducts = () => (
    $.ajax({
        url: '/api/products'
    })
)

export const fetchSearchProducts = (searchTerm, category) => (
    $.ajax({
        url: `/api/products?search=${searchTerm}&category=${category}`
    })
)

export const fetchCategoryProducts = category => (
    $.ajax({
        url: `/api/categories/${category}`
    })
)

export const fetchProduct = productId => (
    $.ajax({
        url: `/api/products/${productId}`
    })
)