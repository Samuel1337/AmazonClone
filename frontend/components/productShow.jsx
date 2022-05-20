import React from "react";

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.date = this.date.bind(this);
        this.hours = this.hours.bind(this);
        this.quantity = this.quantity.bind(this);
    }

    componentDidMount() {
        this.props.getProduct(this.props.productId);
    }

    date(days) {
        let date = new Date();
        date.setDate(date.getDate() + days);
        return date.toLocaleDateString('en-us', {weekday: 'long', month: 'short', day: 'numeric'})
    }

    hours() {
        let hours = new Date();
        let minutes = new Date();
        hours.getHours();
        minutes.getMinutes();
        
        return (24-hours) + " hrs and " + (60-minutes) + " mins."
    }

    quantity() {
        let options = [];
        let quantity = Math.random() * 12;
        for (let i = 1 ; i < quantity; i++) {
            options.push(i+"")            
        }
        return (
            <select name="quantity" id="quantity" className="quantity-dropdown">               
                {
                    options.forEach(i => {
                        <option value={i}>Qty: {i}</option>
                    })
                }
            </select>
        )
    }

    render() {
        if (this.props.product === undefined) {return null};
        
        const { product } = this.props

        return (
            <div className="show-page">
                <div className="show-container">
                    <div className="show-left-col">
                    </div>
                    <div className="show-right-col">
                        
                        <nav className="buybox">
                            <div className="buybox-price">
                                <span>$</span><span>{Math.floor(product.price)}</span>
                            </div>
                            <h5>&#38; Free Returns</h5>
                            <div className="free-delivery">
                                <span id="free-delivery">FREE delivery</span>
                                <span id="date">{this.date(5)}</span>
                            </div>
                            <div className="fast-delivery">
                                <span id="fast-delivery">Or fastest delivery</span>
                                <span id="date">{this.date(5)}</span>
                                ". Order within "
                                <span id="hours">{this.hours()}</span>
                                <p id="in-stock">In Stock</p>
                                <div className="buybox-quantity">
                                    {this.quantity()}
                                </div>
                            </div>
                            <div className="buybox-cart">
                                <button id="add-to-cart">Add to Cart</button>
                                <button id="buy-now">Buy Now</button>
                            </div>
                        </nav>

                    </div>
                    <div className="show-center-col">
                        <img src={product.photoUrl} alt="" />
                        <h1>{product.title}</h1>
                        <p>{product.price}</p>
                        <p>{product.rating}</p>
                        <p>{product.description}</p>
                        <p>{product.specialty}</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default ProductShow;