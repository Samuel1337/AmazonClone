import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReviewsIndexContainer from "./reviewsIndexContainer";

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.date = this.date.bind(this);
        this.hours = this.hours.bind(this);
        this.stars = this.stars.bind(this);
        this.description = this.description.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.updateSelect = this.updateSelect.bind(this);
        this.cartItemExists = this.cartItemExists.bind(this);
        this.state = {
            newQuantity: 1
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.props.getProduct(this.props.productId);
    }

    date(days) {
        let date = new Date();
        date.setDate(date.getDate() + days);
        return date.toLocaleDateString('en-us', {weekday: 'long', month: 'short', day: 'numeric'})
    }

    hours() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        
        return (24-hours) + " hrs and " + (60-minutes) + " mins."
    }

    price(field) {
        const { product } = this.props;
        let dollars = Math.floor(product.price);
        let cents = product.price - dollars;
        
        if (dollars > 1000) {
            let temp = dollars + "";
            dollars = temp.slice(0,1) + "," + temp.slice(1)
        }

        cents = Math.round(cents*100);


        if (cents < 1) {
            cents = "00";
        } else if (cents < 10) {
            let temp = cents;
            cents = "0" + temp;
        }

        if (field === "dollars") {
            return dollars;
        } else {
            return cents;
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
                                size={20}
                                color={ratingValue <= this.props.product.rating ? "#ffc107" : "#e4e5e9" }
                            />
                        </label>
                    )
                })}
            </div>
        )
    }

    description() {
        const { product } = this.props
        
        if (product.description !== undefined) {

            return (
                <ul className="about-list">
                    {
                    product.description.map((bullet, i) => {
                        return (
                            <li key={i}><span>{bullet}</span></li>
                            )
                        })
                    }
                </ul>
            )
        } else {
            setTimeout(() => {
                this.description();
            }, 1000);
        }
    }

    addToCart() {
        if (this.props.currentUser !== undefined) {
            const dummy = {
                user_id: this.props.currentUser.id,
                product_id: this.props.product.id,
                quantity: 1
            }
            
            let oldQuantity;
            let result = false;

            Object.values(this.props.cart).forEach(element => {
                if (element.productId === dummy.product_id) {
                    oldQuantity = element.quantity;
                    dummy.id = element.id;
                    result = true;
                }
            });
            
            if (result) {
                dummy.quantity = oldQuantity + this.state.newQuantity;
                this.props.editCartItem(dummy)
                .then(()=>this.props.getCartItemsById(this.props.currentUser.id))
                .then(()=>this.props.history.push("/cart"));
            
            } else {
                dummy.quantity = this.state.newQuantity;
                this.props.createCartItem(dummy)
                    .then(()=>this.props.getCartItemsById(this.props.currentUser.id))
                    .then(()=>this.props.history.push("/cart"));
            }
        } else {
            this.props.history.push("/login")
        }
    }

    updateSelect() {
        const dropdownValue = parseInt(document.getElementById("quantity").value);
        this.setState({newQuantity: dropdownValue});
    }

    cartItemExists(cartItem) {
        let that = this;
        let result = false;
        Object.values(this.props.cart).forEach(element => {
            if (element.productId === cartItem.product_id) {
                that.setState({id: element.id, oldQuantity: element.quantity});
                result = true;
            }
        });
        return result;
    }

    render() {
        if (this.props.product === undefined) {return null};
        
        const { product } = this.props

        return (
            <>
            <div className="show-page">
                <div className="show-container">
                    {/* left column */}
                    <div className="show-left-col">
                        <img src={product.photoUrl} alt="" />
                    </div>
                    {/* center column */}
                    <div className="show-center-col">
                        <div className="show-info">
                            <h1>{product.title}</h1>
                            <div className="show-rating">
                                {this.stars()}
                                {/* <p>{this.props.product.reviews.length} ratings</p> */}
                            </div>
                            <div className="show-price">
                                <div className="show-money">
                                    <span className="show-dollar-sign">$</span>
                                    <span className="show-dollars">{this.price("dollars")}</span>
                                    <span className="show-cents">{this.price("cents")}</span>
                                </div>
                                <br />
                                <span className="free-returns-symbol"> &#38; <span className="free-returns-text">FREE Returns</span></span>
                            </div>
                            <div className="about-heading">
                                <b>About this item</b>
                            </div>
                            {this.description()}
                        </div>
                    </div>
                    {/* right column */}
                    <div className="show-right-col">

                        <nav className="buybox">
                            <div className="buybox-price">
                                <div className="show-money">
                                    <span className="show-dollar-sign">$</span>
                                    <span className="show-dollars">{this.price("dollars")}</span>
                                    <span className="show-cents">{this.price("cents")}</span>
                                </div>
                            </div>
                            <h5>&#38; <span>FREE Returns</span></h5>
                            <div className="free-delivery">
                                <span id="free-delivery">FREE delivery</span>
                                <span id="date">{this.date(5)}</span>
                            </div>
                            <div className="fast-delivery">
                                <span id="fast-delivery">Or fastest delivery</span>
                                <span id="date">{this.date(2)}</span>
                                . Order within 
                                <span id="hours"> {this.hours()}</span>
                                <p id="in-stock">In Stock</p>
                                <div className="buybox-quantity">
                                <select name="quantity" id="quantity" onChange={this.updateSelect} className="quantity-dropdown">               
                                        <option value="1">Qty: 1</option>
                                        <option value="2">Qty: 2</option>
                                        <option value="3">Qty: 3</option>
                                        <option value="4">Qty: 4</option>
                                        <option value="5">Qty: 5</option>
                                        <option value="6">Qty: 6</option>
                                </select>
                                    {/* {this.quantity()} */}
                                </div>
                            </div>
                            <div className="buybox-cart">
                                <button onClick={this.addToCart} id="add-to-cart">Add to Cart</button>
                                <Link to="/payment"><button id="buy-now">Buy Now</button></Link>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
            <ReviewsIndexContainer product={this.props.product}/>
            </>
        )
    }
}

export default ProductShow;