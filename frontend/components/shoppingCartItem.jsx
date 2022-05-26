import React from "react";
import { Link } from "react-router-dom";

class ShoppingCartItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            quantity: this.props.product.quantity
        }
        
        this.deleteItem = this.deleteItem.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.dynamicId = this.dynamicId.bind(this);
        this.handleDropdown = this.handleDropdown.bind(this);
    }

    deleteItem() {
        this.props.deleteCartItem(this.props.cartItem.id);
    }

    handleQuantity() {
        const dropdown = document.getElementById(`quantity-${this.props.i}`);
        this.setState({id: this.props.cartItem.id, quantity: dropdown.value}, ()=>this.props.editCartItem(this.state));
    }

    dynamicId() {
        return `quantity-${this.props.i}`;
    }

    handleDropdown() {
        if (this.props.cartItem.quantity < 10) {
            return this.props.cartItem.quantity;
        } else {
            return 10;
        }
    }

    render() {
        const { product } = this.props;
        
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
                    <select name="quantity" id={this.dynamicId()} value={this.handleDropdown()} onChange={this.handleQuantity} className="quantity-dropdown">               
                        <option value="1">Qty: 1</option>
                        <option value="2">Qty: 2</option>
                        <option value="3">Qty: 3</option>
                        <option value="4">Qty: 4</option>
                        <option value="5">Qty: 5</option>
                        <option value="6">Qty: 6</option>
                        <option value="7">Qty: 7</option>
                        <option value="8">Qty: 8</option>
                        <option value="9">Qty: 9</option>
                        <option value="10">Qty: 10+</option>
                    </select>
                        <div className="cart-item-quantity-divider">|</div>
                        <a onClick={this.deleteItem} className="cart-item-quantity-delete">Delete</a>
                    </div>
                </div>
            </li>
        )
    }
    
}

export default ShoppingCartItem;