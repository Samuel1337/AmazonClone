import React from "react";

class CartIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cart-page">
                <div className="cart-container">
                    <div className="cart-center-col">
                        <div className="cart-headline">
                            <h1>Shopping Cart</h1>   
                        </div>
                        <div className="cart-main">
                            <ul className="cart-list">

                            </ul>
                            <div className="cart-subtotal">

                            </div>
                        </div>
                    </div>
                    <div className="cart-right-col">
                        <div className="cart-subtotal-card">
                            <div className="cart-subtotal-headline">
                                <h1></h1>
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