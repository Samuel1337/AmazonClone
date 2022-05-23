export const postReview = review => (
    $.ajax({
    url: '/api/reviews',
    method: 'POST',
    data: { review }
}))

export const updateReview = review => (
    $.ajax({
    url: `/api/reviews/${review.id}`,
    method: 'PATCH',
    data: { review }
}))

export const destroyReview = reviewId => (
    $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: 'DELETE'
}))