import React from "react";
import { FaStar } from "react-icons/fa";

class ReviewItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            edit: false,
            formType: "Edit Review"
        }

        this.stars = this.stars.bind(this);
        this.handleButtonDisplay = this.handleButtonDisplay.bind(this);
        this.handleFieldDisplay = this.handleFieldDisplay.bind(this);
    }
    
    switchMode() {
        if (this.state.edit) {
            this.setState({
                [edit]: false,
                [formType]: "Edit Review"
            });
        } else {
            this.setState({
                [edit]: true,
                [formType]: "Save Review"
            });
        }
    }

    handleButtonDisplay() {
        debugger
        if (this.props.currentUser.id === this.props.review.author.id) {
            return (
                <div>
                    <button onClick={switchMode}>{ formType }</button>
                    <button>Delete Review</button>
                </div>
            )
        }
    }

    handleFieldDisplay(field) {
        
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
                <div className="review-buttons">
                    {this.handleButtonDisplay()}
                </div>
            </div>
        )
    }
}

export default ReviewItem;