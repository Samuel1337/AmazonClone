import React from "react";

class ReviewItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleButtonDisplay = this.handleButtonDisplay.bind(this);
        this.handleBodyDisplay = this.handleBodyDisplay.bind(this);
    }
    
    handleButtonDisplay() {
        
    }

    handleBodyDisplay() {
        
    }

    render() {
        const { review, editReview, deleteReview } = props
        
        return (

            <div className="review-container">
                <div className="review-author">
                    <img src="" alt="" />
                    <h1>{ review.author }</h1>
                </div>
                <div className="review-headline">
                    <div className="review-stars">

                    </div>
                    <div className="review-title">
                        { review.title }
                    </div>
                </div>
                <div className="review-created-at">
                    { review.created_at }
                </div>
                <div className="verified-purchase">
                    Verified Purchase
                </div>
                <div className="review-text">
                    { review.body }
                </div>
            </div>
        )
    }
}

export default ReviewItem;