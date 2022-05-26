import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartItem from "./shoppingCartItem";

class CartIndex extends React.Component {
    constructor(props) {
        super(props);

        this.calculateSubtotal = this.calculateSubtotal.bind(this);
        this.numberOfItems = this.numberOfItems.bind(this);
    }

    componentDidMount() {
        if (this.props.currentUser) {
            this.props.getCartItemsById(this.props.currentUser.id);
        } else {
            this.props.history.push("/login");
        }
    }

    calculateSubtotal() {
        const { products, cartItems } = this.props;

        let sum = 0;

        products.forEach(product => {
            cartItems.forEach(cartItem => {
                if (cartItem.productId === product.id) {
                    sum += product.price * cartItem.quantity;
                }
            })
        })

        return (`$${(Math.round(sum * 100) / 100).toFixed(2)}`);
    }


    cartItemList() {

        const { products, cartItems, editCartItem, deleteCartItem } = this.props;

        return (
            <ul className="cart-list">
                {
                    products.map((product, i) => {
                        
                        let currentCartItem;

                        cartItems.forEach(cartItem => {
                            if (cartItem.productId === product.id) {
                                currentCartItem = cartItem;
                            }
                        })
                        if (currentCartItem) {

                            return (
                                <ShoppingCartItem 
                                    i={i}
                                    key={i}
                                    product={product}
                                    cartItem={currentCartItem}
                                    editCartItem={editCartItem}
                                    deleteCartItem={deleteCartItem}
                                />
                            )
                        }
                    })
                }
            </ul>
        )
    }

    numberOfItems() {
        const num = this.props.products.length;
        return `(${num} items)`;
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
                                <h1>Subtotal {this.numberOfItems()}: {this.calculateSubtotal()}</h1>
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