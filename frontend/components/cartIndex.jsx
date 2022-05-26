import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartItem from "./shoppingCartItem";

class CartIndex extends React.Component {
    constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
        this.calculateSubtotal = this.calculateSubtotal.bind(this);
    }

    componentDidMount() {
        if (this.props.currentUser) {
            this.props.getCartItemsById(this.props.currentUser.id);
        } else {
            this.props.history.push("/login");
        }
    }

    deleteItem(productId) {
        const { cartItems } = this.props;
        
        let res = [];
        
        Object.values(cartItems).forEach(cartItem => {
            if (cartItem.productId === productId) {
                res.push(cartItem.id);
            }
        });

        res.forEach(cartItemId => {
            this.props.deleteCartItem(cartItemId);
        })
    }

    calculateSubtotal() {
        const { products } = this.props;

        let sum = 0;

        products.forEach(product => {
            sum += product.price;
        })

        return (`$${(Math.round(sum * 100) / 100).toFixed(2)}`);
    }


    cartItemList() {

        const { products, cartItems, editCartItem } = this.props;

        return (
            <ul className="cart-list">
                {
                    products.map((product, i) => (
                        <ShoppingCartItem 
                            key={i}
                            product={product}
                            cartItems={cartItems}
                            editCartItem={editCartItem}
                        />
                    ))
                }
            </ul>
        )
    }


    render() {
        if (this.props.products === undefined) {return null}

        const { cartItems } = this.props;

        return (
            <div className="cart-page">
                <div className="cart-container">
                    <div className="cart-center-col">
                        <div className="cart-headline">
                            <h1>Shopping Cart</h1>   
                        </div>
                        <div className="cart-main">
                            {this.cartItemList()}
                            <div className="cart-subtotal">
                                <div>
                                    Subtotal: {this.calculateSubtotal()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-right-col">
                        <div className="cart-subtotal-card">
                            <div className="cart-subtotal-headline">
                                <h1>Subtotal: {this.calculateSubtotal()}</h1>
                            </div>
                                <button className="checkout">Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartIndex;