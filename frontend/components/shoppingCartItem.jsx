import React from "react";
import { Link } from "react-router-dom";

class ShoppingCartItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            quantity: this.props.product.quantity
        }
        
        this.handleQuantity = this.handleQuantity.bind(this);
    }

    // componentDidMount() {
    //     const dropdown = document.getElementById("quantity");
    //     this.props.cartItems.forEach(cartItem => {
    //         if (cartItem.productId === product.id) {
    //             dropdown.value = cartItem.quantity;
    //         }
    //     })
    // }

    handleQuantity() {
        const dropdown = document.getElementById("quantity");

        let currentId;

        this.props.cartItems.forEach(cartItem => {
            if (cartItem.productId === this.props.product.id) {
                currentId = cartItem.id;
            }
        })
        this.setState({id: currentId, quantity: dropdown.value}, ()=>this.props.editCartItem(this.state));
    }

    render() {
        const { product } = this.props;
        let currentCartItem = "";

        this.props.cartItems.forEach(cartItem => {
            if (cartItem.productId === product.id) {
                currentCartItem = cartItem;
            }
        })
        
        return (
            <li className="cart-item">
                <Link to={`/products/${product.id}`}><img className="cart-item-img" src={product.photoUrl} alt="" /></Link>
                <div className="cart-item-info">
                    <div className="cart-item-name">{product.title}</div>
                    <div className="cart-item-price">${product.price}</div>
                    <div className="cart-item-in-stock">In Stock</div>
                    <div className="cart-item-shipping"></div>
                    <div className="cart-item-category">{product.category}</div>
                    <div className="cart-item-quantity-container">
                    <select name="quantity" id="quantity" value={currentCartItem.quantity} onChange={this.handleQuantity} className="quantity-dropdown">               
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
        )
    }
    
}

export default ShoppingCartItem;