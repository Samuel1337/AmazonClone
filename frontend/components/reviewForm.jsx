import React, { useState } from "react";
import { Link } from "react-router-dom";
import StarRating from "./starRating";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            rating: 3,
            title: this.props.review ? this.props.review.title : "",
            body: this.props.review ? this.props.review.body : "",
            userId: this.props.review ? this.props.review.userId : "",
            productId: this.props.review ? this.props.review.productId : "",
            modified: false
        }
        
        this.getRating = this.getRating.bind(this);
        this.renderError = this.renderError.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.username = this.username.bind(this);
        this.originalRating = this.originalRating.bind(this);
    }

    componentDidMount() {
        if (this.props.currentUser === undefined) {
            this.props.history.push(`/products/${this.props.match.params.productId}`);
        }
        this.props.getProduct(this.props.match.params.productId);
        window.scrollTo(0,0);
    }

    componentDidUpdate() {
        if (this.props.currentUser === undefined) {
            this.props.history.push(`/products/${this.props.match.params.productId}`);
        }
    }
    
    renderError() {
        let arrayOfErrors = document.getElementsByClassName('error-message');
        
        if (this.state.title === "") {
            arrayOfErrors[0].classList.add('error-visible');
        } else {
            arrayOfErrors[0].classList.remove('error-visible');
        }
        if (this.state.body === "") {
            arrayOfErrors[1].classList.add('error-visible');
        } else {
            arrayOfErrors[1].classList.remove('error-visible');
        }
    }

    getRating(value) {
        if (this.props.match.params.reviewId !== this.state.id) {
            this.setState({["id"]: this.props.match.params.reviewId})
        }
        if (value !== this.state.rating) {
            this.setState({["rating"]: value, modified: true});
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.renderError();

        let payload = {
            rating: this.state.rating,
            title: this.state.title,
            body: this.state.body,
            user_id: this.state.userId,
            product_id: this.state.productId
        };

        if (!!this.state.rating) {
            payload["id"] = this.state.id;
        }

        if (!this.state.modified && this.state.title !== "" && this.state.body !== "" && this.state.rating === this.props.review.rating) {
            this.props.history.push(`/products/${this.props.match.params.productId}`);
            return null;
        }

        if (this.state.title !== "" && this.state.body !== "") {
            this.props.action(payload)
                .then(()=>this.props.history.push(`/products/${this.props.match.params.productId}`));
        }
    }

    originalRating() {
        if (this.props.review) {
            return this.props.review.rating;
        } else {
            return 3;
        }
    }

    update(field) {
        return e => {
            if (this.props.match.params.reviewId !== this.state.id) {
                this.setState({["id"]: this.props.match.params.reviewId})
            }
            if (this.state.userId === "") {
                this.setState({["userId"]: this.props.currentUser.id, modified: true});
                this.setState({["productId"]: this.props.product.id, modified: true});
            }
            this.setState({[field]: e.currentTarget.value, modified: true});
        }
    }

    username() {
        if (this.props.currentUser !== undefined) {
            return this.props.currentUser.username;
        }
    }

    render() {
        if (this.props.product === undefined) {return null};
        if (this.props.currentUser === undefined) {
            this.props.history.push(`/products/${this.state.productId}`);
        };

        const { product, formType } = this.props    

        return (
            <div className="review-page">
                <div className="user-bar">
                    <div className="user">
                        <img src={window.profile_picture} alt="" />
                        <p>{this.username()}</p>
                    </div>
                </div>
                <div className="create-review-container">
                    <h1>{ formType }</h1>
                    <Link to={`/products/${product.id}`}><div className="review-product">
                        <img src={product.photoUrl} alt="" />
                        <h1>{ product.title }</h1>
                    </div></Link>
                    <div className="review-rating">
                        <h2>Overall rating</h2>
                        <div className="stars">
                            <StarRating originalRating={this.originalRating()} getRating={this.getRating} />
                        </div>
                    </div>
                    <div className="review-title">
                        <h2>Add a headline</h2>
                        <input
                            type="text"
                            id="review-title"
                            placeholder="What's most important to know?"
                            value={this.state.title}
                            onChange={this.update('title')}
                        />
                        <div className="error-message">Headline can't be blank.</div>
                    </div>
                    <div className="review-body">
                        <h2>Add a written review</h2>
                        <textarea
                            id="review-body"
                            placeholder="What did you like or dislike?
                            What did you use this product for?"   
                            value={this.state.body}
                            onChange={this.update('body')}
                        />
                        <div className="error-message">Body can't be blank.</div>
                    </div>
                    <div className="review-submit">
                        <button onClick={this.handleSubmit} id="review-submit">Submit</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default ReviewForm;