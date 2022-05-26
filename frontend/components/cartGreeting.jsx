import React from "react";
import { Link } from "react-router-dom";

class CartGreeting extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCartItemsById(this.props.currentUserId);
    }

    render() {
        const {currentUserId} = this.props;
        if (currentUserId === undefined) { return null }
        return (
            <Link to="/cart">
                <div className="cart-greeting">
                    <div className="cart-counter">
                        <p>{this.props.cartItems.length}</p>
                        <img src={window.cart} alt="" />
                    </div>
                    <p>Cart</p>
                </div>
            </Link>
        )
    }
}

export default CartGreeting;