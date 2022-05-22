import React from "react";
import { Link } from "react-router-dom";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render() {
        const { product, currentUser, createReview, editReview, deleteReview } = this.props

        return (
            <div className="review-page">
                <div className="user-bar">
                    <div className="user">
                        <img src={window.profile_picture} alt="" />
                        <p>{currentUser.username}</p>
                    </div>
                </div>
                <div className="create-review-container">
                    <h1>Create Review</h1>
                    <div className="review-product">
                        <div className="review-product-image">
                            <img src="" alt="" />
                        </div>
                        <div className="review-product-info">
                            <h1>{ product.title }</h1>
                        </div>
                    </div>
                    <div className="review-rating">
                        <h2>Overall rating</h2>
                        <div className="stars">

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
                    </div>
                    <div className="review-submit">
                        <Link to=""><button onClick={()=>createReview()} id="review-submit">Submit</button></Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default ReviewForm;