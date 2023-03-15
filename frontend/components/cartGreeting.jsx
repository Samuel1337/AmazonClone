import React from "react";
import { Link } from "react-router-dom";

class CartGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.cartQuantity = this.cartQuantity.bind(this);
    }

    componentDidMount() {
        if (this.props.currentUserId) {
            this.props.getCartItemsById(this.props.currentUserId);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentUserId && prevProps.currentUserId !== this.props.currentUserId) {
            this.props.getCartItemsById(this.props.currentUserId);
        }
    }

    cartQuantity() {
        const { cartItems } = this.props;

        let sum = 0;

        cartItems.forEach(cartItem => {
            sum += cartItem.quantity;
        });

        return sum;
    }

    render() {
        const {currentUserId} = this.props;
        if (currentUserId === undefined) { return null }
        return (
            <Link to="/cart">
                <div className="cart-greeting">
                    <div className="cart-counter">
                        <p>{this.cartQuantity()}</p>
                        <img src={window.cart} alt="" />
                    </div>
                    <p>Cart</p>
                </div>
            </Link>
        )
    }
}

export default CartGreeting;