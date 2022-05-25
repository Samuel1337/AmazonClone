import React from "react";

class CartIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCartItemsById(this.props.currentUser)
    }

    cartItemList() {

        const { cartItems } = this.props;

        return (
            <ul className="cart-list">
                {
                    cartItems.map(cartItem)
                }
                <li className="cart-item">
                    <img className="cart-item-img" src={cartItem.photoUrl} alt="" />
                    <div className="cart-item-info">
                        <div className="cart-item-name">{cartItem.title}</div>
                        <div className="cart-item-price">${cartItem.price}</div>
                        <div className="cart-item-in-stock">In Stock</div>
                        <div className="cart-item-shipping"></div>
                        <div className="cart-item-category">{cartItem.category}</div>
                        <div className="cart-item-quantity-container">
                        <select name="quantity" id="quantity" className="quantity-dropdown">               
                            <option value="1">Qty: 1</option>
                            <option value="2">Qty: 2</option>
                            <option value="3">Qty: 3</option>
                            <option value="4">Qty: 4</option>
                            <option value="5">Qty: 5</option>
                            <option value="6">Qty: 6</option>
                        </select>
                            <div className="cart-item-quantity-divider">|</div>
                            <div className="cart-item-quantity-delete">Delete</div>
                        </div>
                    </div>
                </li>
            </ul>
        )
    }


    render() {
        if (this.props.cartItems === undefined) {return null}

        const { cartItems } = this.props;

        return (
            <div className="cart-page">
                <div className="cart-container">
                    <div className="cart-center-col">
                        <div className="cart-headline">
                            <h1>Shopping Cart</h1>   
                        </div>
                        <div className="cart-main">
                            <ul className="cart-list">
                                <li className="cart-item">
                                    <img className="cart-item-img" src="" alt="" />
                                    <div className="cart-item-info">
                                        <div className="cart-item-name"></div>
                                        <div className="cart-item-price"></div>
                                        <div className="cart-item-in-stock">In Stock</div>
                                        <div className="cart-item-shipping"></div>
                                        <div className="cart-item-category"></div>
                                        <div className="cart-item-quantity-container">
                                        <select name="quantity" id="quantity" className="quantity-dropdown">               
                                            <option value="1">Qty: 1</option>
                                            <option value="2">Qty: 2</option>
                                            <option value="3">Qty: 3</option>
                                            <option value="4">Qty: 4</option>
                                            <option value="5">Qty: 5</option>
                                            <option value="6">Qty: 6</option>
                                        </select>
                                            <div className="cart-item-quantity-divider">|</div>
                                            <div className="cart-item-quantity-delete">Delete</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="cart-subtotal">
                                Subtotal:
                            </div>
                        </div>
                    </div>
                    <div className="cart-right-col">
                        <div className="cart-subtotal-card">
                            <div className="cart-subtotal-headline">
                                <h1>Subtotal:</h1>
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