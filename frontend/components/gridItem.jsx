import React from "react";
import { Link } from "react-router-dom";

class GridItem extends React.Component {
    constructor(props) {
        super(props);

        this.price = this.price.bind(this);
        this.date = this.date.bind(this);
        this.topOfPage = this.topOfPage.bind(this);
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

    date() {
        let date = new Date();
        let days = Math.random() * 5 + 2;
        date.setDate(date.getDate() + days);
        return date.toLocaleDateString('en-us', {weekday: 'short', month: 'short', day: 'numeric'})
    }

    topOfPage() {
        window.scrollTo(0,0);
    }

    render() {
        const { product } = this.props

        return (
            <div className="grid-item">
                <div className="grid-image-container">
                    <Link to={`/products/${product.id}`} onClick={this.topOfPage}><img src={product.photoUrl} alt={product.title} /></Link>
                </div>
                <Link to={`/products/${product.id}`} onClick={this.topOfPage}><h2>{product.title}</h2></Link>
                <div className="grid-rating">{product.rating}</div>
                <Link to={`/products/${product.id}`} onClick={this.topOfPage}><div className="grid-price">
                    <span className="grid-dollar-sign">$</span>
                    <span className="grid-dollars">{this.price("dollars")}</span>
                    <span className="grid-cents">{this.price("cents")}</span>
                </div></Link>
                <div className="grid-shipping">
                    Get it as soon as <b>{this.date()}</b><br />
                    FREE Shipping by Euphrates
                </div>
            </div>
        )
    }
}

export default GridItem;