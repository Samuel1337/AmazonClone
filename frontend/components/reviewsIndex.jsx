import React from "react";
import { Link } from "react-router-dom";
import  ReviewItem  from "./reviewItem";

class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.redirect = this.redirect.bind(this);
    }

    redirect() {
        if (this.props.currentUser) {
            return `/products/${this.props.product.id}/review`;
        } else {
            return '/signup';
        }
    }

    render() {
        const {  product, reviews, currentUser, createReview, editReview, deleteReview } = this.props;
        return (
        <div className="reviews-index">
                <div className="reviews-container">
                    <div className="reviews-left-col">
                        <h1>Review this product</h1>
                        <p>Share your thoughts with other customers</p>
                        <Link to={this.redirect()}><button onClick={()=>window.scrollTo(0,0)} className="write-review">Write a customer review</button></Link>
                    </div>
                    <div className="reviews-center-col">
                        <h1>Customer reviews</h1>
                        <ul>
                            {
                                reviews.map((review,i) => (
                                    <li key={(i+1)*(-500)}>
                                        <ReviewItem
                                            key={-1-i}
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