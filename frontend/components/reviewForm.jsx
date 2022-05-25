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
            user_id: this.props.review ? this.props.review.user_id : "",
            product_id: this.props.review ? this.props.review.product_id : ""
        }
        
        this.getRating = this.getRating.bind(this);
        this.renderError = this.renderError.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.username = this.username.bind(this);
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
        if (value !== this.state.rating) {
            this.setState({["rating"]: value});
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.renderError();
        
        if (this.state.title !== "" || this.state.body !== "") {
            console.log(this.props)
            this.props.action(this.state)
                .then(this.props.history.push(`/products/${this.props.match.params.productId}`))
        }
    }

    update(field) {
        return e => {
            if (this.props.match.params.reviewId !== this.state.id) {
                this.setState({["id"]: this.props.match.params.reviewId})
            }
            if (this.state.user_id === "") {
                this.setState({["user_id"]: this.props.currentUser.id});
                this.setState({["product_id"]: this.props.product.id});
            }
            this.getRating();
            this.setState({[field]: e.currentTarget.value});
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
            this.props.history.push(`/products/${this.state.product_id}`);
        };

        const { product, currentUser, formType } = this.props    

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
                            <StarRating getRating={this.getRating} />
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