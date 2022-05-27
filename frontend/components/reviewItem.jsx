import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

class ReviewItem extends React.Component {
    constructor(props) {
        super(props);

        this.stars = this.stars.bind(this);
        this.formatDate = this.formatDate.bind(this);
        this.handleButtonDisplay = this.handleButtonDisplay.bind(this);
    }

    handleButtonDisplay() {
        if (this.props.currentUser) {

            if (this.props.currentUser.id === this.props.review.userId) {
                return (
                    <div className="review-buttons">
                        <Link to={`/products/${this.props.review.productId}/review/${this.props.review.id}/edit`}><button className="edit-review">Edit Review</button></Link>
                        <button className="edit-review" onClick={()=>this.props.deleteReview(this.props.review.id)}>Delete Review</button>
                    </div>
                )
            }
        }
    }

    formatDate(date) {

        if (date) {

            const year = date.slice(0,4);
            let month = date.slice(5,7);
            let day = date.slice(8,10);

            if (day < 10) {
                let temp = day.slice(1);
                day = temp;
            }
            
            if (month === '01') month = 'January';
            if (month === '02') month = 'February';
            if (month === '03') month = 'March';
            if (month === '04') month = 'April';
            if (month === '05') month = 'May';
            if (month === '06') month = 'June';
            if (month === '07') month = 'July';
            if (month === '08') month = 'August';
            if (month === '09') month = 'September';
            if (month === '10') month = 'October';
            if (month === '11') month = 'November';
            if (month === '12') month = 'December';
            
            return `Reviewed in the United States on ${month} ${day}, ${year}`
        } else {
            setTimeout(() => {
                this.formatDate(date);
            }, 1000);
        }
    }

    stars() {
        return (
            <div className="five-stars-small">
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i+1;
                    return (
                        <label key={i+1200} name="rating">
                            <input
                                key={(i+1)*1356}
                                type="radio"
                                className="star-radio"
                                name="rating"
                                value={ratingValue}
                            />
                            <FaStar
                                key={i*63}
                                className="star-small"
                                size={15}
                                color={ratingValue <= this.props.review.rating ? "#ffc107" : "#e4e5e9" }
                            />
                        </label>
                    )
                })}
            </div>
        )
    }

    render() {
        const { review, editReview, deleteReview } = this.props

        return (
            <div className="review-container">
                <div className="review-author">
                    <img src={window.profile_picture} alt="" />
                    <h1>{ review.author }</h1>
                </div>
                <div className="review-headline">
                    <div className="review-stars">
                        { this.stars() }
                    </div>
                    <div className="review-item-title">
                        { review.title }
                    </div>
                </div>
                <div className="review-created-at">
                    { this.formatDate(review.created_at) }
                </div>
                <div className="verified-purchase">
                    Verified Purchase
                </div>
                <div className="review-text">
                    { review.body }
                </div>
                    {this.handleButtonDisplay()}
            </div>
        )
    }
}

export default ReviewItem;