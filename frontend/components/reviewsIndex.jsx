import React from "react";
import { Link } from "react-router-dom";
import { ReviewItem } from "./reviewItem";

class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {  product, reviews, currentUser, createReview, editReview, deleteReview } = this.props;
        return (
        <div className="reviews-index">
                <div className="reviews-container">
                    <div className="reviews-left-col">
                        <Link to={`/${product.id}/review`}><button className="write-review">Write a customer review</button></Link>
                    </div>
                    <div className="reviews-center-col">
                        <ul>
                            {
                                Object.values(reviews).map(review => (
                                    <li>
                                        <ReviewItem
                                            currentUser={currentUser}
                                            review={review} 
                                            editReview={editReview}
                                            deleteReview={deleteReview}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewsIndex;