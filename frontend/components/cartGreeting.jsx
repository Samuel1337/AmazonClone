import React from "react";
import { Link } from "react-router-dom";

class CartGreeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {currentUser} = this.props;
        if (currentUser) {
            return (
                <div id="cart-greeting">
                    <p>Hello, {currentUser.username}</p>
                    <a id="header-link" onClick={logout}>Logout</a>
                </div>
            )
        }
    }
}

export default CartGreeting;