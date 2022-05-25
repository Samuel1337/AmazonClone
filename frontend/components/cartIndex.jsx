import React from "react";

class CartIndex extends React.Component {
    constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount() {
        if (this.props.currentUser) {
            this.props.getCartItemsById(this.props.currentUser.id);
        } else {
            this.props.history.push("/login");
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.cartItems !== this.props.cartItems) {
            if (this.props.currentUser) {
                this.props.getCartItemsById(this.props.currentUser.id);
            } else {
                this.props.history.push("/login");
            }
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

    cartItemList() {

        const { products } = this.props;

        return (
            <ul className="cart-list">
            {
                products.map(product => (
                    
                        <li className="cart-item">
                    <img className="cart-item-img" src={product.photoUrl} alt="" />
                    <div className="cart-item-info">
                        <div className="cart-item-name">{product.title}</div>
                        <div className="cart-item-price">${product.price}</div>
                        <div className="cart-item-in-stock">In Stock</div>
                        <div className="cart-item-shipping"></div>
                        <div className="cart-item-category">{product.category}</div>
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
                            <a onClick={()=>this.deleteItem(product.id)} className="cart-item-quantity-delete">Delete</a>
                        </div>
                    </div>
                </li>
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