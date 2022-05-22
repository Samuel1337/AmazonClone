import React from "react";

export const ReviewItem = props => {
    const { review, editReview, deleteReview } = props
    return (

        <div className="review-container">
            <div className="review-author">
                <img src="" alt="" />
                <h1>{ review.author }</h1>
            </div>
            <div className="review-body">
                <div className="review-title">
                    { review.title }
                </div>
                <div className="review-created-at">
                    { review.created_at }
                </div>
                <div className="review-text">
                    { review.body }
                </div>
            </div>
        </div>
    )
}