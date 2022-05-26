import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartItem from "./shoppingCartItem";

class CartIndex extends React.Component {
    constructor(props) {
        super(props);

        this.calculateSubtotal = this.calculateSubtotal.bind(this);
        this.numberOfItems = this.numberOfItems.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
        this.formType = this.formType.bind(this);
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
        let result = (Math.round(sum * 100) / 100).toFixed(2);
        let array = (result + "").split(".");
        let element = array[0];
        let string;

        if (element.length > 3) {
            string = element.slice(0, element.length-3) + "," + element.slice(element.length-3)
            array[0] = string;
        }

        
        return (`$${array.join('.')}`);
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

    handleSubmit() {

        if (this.props.products.length < 1) {return null}

        let that = this;
        this.props.cartItems.forEach(cartItem => (
                that.props.deleteCartItem(cartItem.id)
        ))
        this.props.history.push("/payment");
    }

    handleDisplay() {
        if (this.props.products.length > 0) {
            return (
                <div className="cart-main">
                    {this.cartItemList()}
                    <div className="cart-subtotal">
                        <div>
                            Subtotal: {this.calculateSubtotal()}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="cart-main">
                    <img className="empty-cart-page" src={window.empty_cart} alt="" />
                </div>
            )
        }
    }

    formType() {
        if (this.props.products.length < 1) {
            return "Your Shopping Cart is Empty"
        } else {
            return "Shopping Cart"
        }
    }

    render() {
        if (this.props.products === undefined) {return null}

        return (
            <div className="cart-page">
                <div className="cart-container">
                    <div className="cart-center-col">
                        <div className="cart-headline">
                            <h1>{this.formType()}</h1>   
                        </div>
                        {this.handleDisplay()}
                    </div>
                    <div className="cart-right-col">
                        <div className="cart-subtotal-card">
                            <div className="cart-subtotal-headline">
                                <h1>Subtotal {this.numberOfItems()}: {this.calculateSubtotal()}</h1>
                            </div>
                                <button onClick={this.handleSubmit} className="checkout">Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartIndex;