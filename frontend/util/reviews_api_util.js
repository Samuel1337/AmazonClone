export const postReview = review => ({
    url: '/api/reviews',
    method: 'POST',
    data: review
})

export const updateReview = review => ({
    url: `/api/reviews/${review.id}`,
    method: 'PATCH',
    data: review
})

export const destroyReview = reviewId => ({
    url: `/api/reviews/${reviewId}`,
    method: 'DELETE'
})