import React from "react";

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.date = this.date.bind(this);
        this.hours = this.hours.bind(this);
        this.quantity = this.quantity.bind(this);
        this.description = this.description.bind(this);
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
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        
        return (24-hours) + " hrs and " + (60-minutes) + " mins."
    }

    price(field) {
        const { product } = this.props;
        let dollars = Math.floor(product.price);
        let cents = product.price - dollars;
        
        if (dollars > 1000) {
            let temp = dollars + "";
            dollars = temp.slice(0,1) + "," + temp.slice(1)
        }

        if (cents < 1) {
            cents = "00";
        } else if (cents < 10) {
            let temp = cents;
            cents = "0" + temp;
        }

        if (field === "dollars") {
            return dollars;
        } else {
            return cents;
        }
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

    description() {
        const { product } = this.props
        
        if (product.description !== undefined) {

            return (
                <ul className="about-list">
                    {
                    product.description.map((bullet, i) => {
                        return (
                            <li key={i}><span>{bullet}</span></li>
                            )
                        })
                    }
                </ul>
            )
        } else {
            setTimeout(() => {
                this.description();
            }, 1000);
        }
    }

    render() {
        if (this.props.product === undefined) {return null};
        
        const { product } = this.props

        return (
            <div className="show-page">
                <div className="show-container">
                    {/* left column */}
                    <div className="show-left-col">
                        <img src={product.photoUrl} alt="" />
                    </div>
                    {/* center column */}
                    <div className="show-center-col">
                        <div className="show-info">
                            <h1>{product.title}</h1>
                            <div className="show-rating">
                                <p>{product.rating}</p>
                                {/* <div className="show-stars">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="star" color="#ffa41b" height="15" width="15" xmlns="http://www.w3.org/2000/svg" style="color: rgb(255, 164, 27);"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="star" color="#ffa41b" height="15" width="15" xmlns="http://www.w3.org/2000/svg" style="color: rgb(255, 164, 27);"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="star" color="#c9c9c9" height="15" width="15" xmlns="http://www.w3.org/2000/svg" style="color: rgb(201, 201, 201);"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="star" color="#c9c9c9" height="15" width="15" xmlns="http://www.w3.org/2000/svg" style="color: rgb(201, 201, 201);"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="star" color="#c9c9c9" height="15" width="15" xmlns="http://www.w3.org/2000/svg" style="color: rgb(201, 201, 201);"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                </div>
                                <div className="show-num-ratings">
                                    x ratings.
                                </div> */}
                            </div>
                            <div className="show-price">
                                <span className="show-dollar-sign">$</span>
                                <span className="show-dollars">{this.price("dollars")}</span>
                                <span className="show-cents">{this.price("cents")}</span>
                                <span className="free-returns-label"> &#38; <span className="free-returns-link">FREE Returns</span></span>
                            </div>
                            <div className="about-heading">
                                <b>About this item</b>
                            </div>
                            {this.description()}
                        </div>
                    </div>
                    {/* right column */}
                    <div className="show-right-col">

                        <nav className="buybox">
                            <div className="buybox-price">
                                <span className="show-dollar-sign">$</span>
                                <span className="show-dollars">{this.price("dollars")}</span>
                                <span className="show-cents">{this.price("cents")}</span>
                                {/* <span>$</span><span>{Math.floor(product.price)}</span> */}
                            </div>
                            <h5>&#38; <span>FREE Returns</span></h5>
                            <div className="free-delivery">
                                <span id="free-delivery">FREE delivery</span>
                                <span id="date">{this.date(5)}</span>
                            </div>
                            <div className="fast-delivery">
                                <span id="fast-delivery">Or fastest delivery</span>
                                <span id="date">{this.date(2)}</span>
                                . Order within 
                                <span id="hours"> {this.hours()}</span>
                                <p id="in-stock">In Stock</p>
                                <div className="buybox-quantity">
                                <select name="quantity" id="quantity" className="quantity-dropdown">               
                                        <option value="1">Qty: 1</option>
                                        <option value="2">Qty: 2</option>
                                        <option value="3">Qty: 3</option>
                                        <option value="4">Qty: 4</option>
                                        <option value="5">Qty: 5</option>
                                        <option value="6">Qty: 6</option>
                                </select>
                                    {/* {this.quantity()} */}
                                </div>
                            </div>
                            <div className="buybox-cart">
                                <button id="add-to-cart">Add to Cart</button>
                                <button id="buy-now">Buy Now</button>
                            </div>
                        </nav>

                    </div>

                </div>
            </div>
        )
    }
}

export default ProductShow;