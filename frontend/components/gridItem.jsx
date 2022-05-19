import React from "react";

class GridItem extends React.Component {
    constructor(props) {
        super(props);

        this.price = this.price.bind(this);
        this.date = this.date.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    price(field) {
        const { price } = this.props;
        let dollars = Math.floor(price);
        let cents = price - dollars;
        
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
        date.setDate(date.getDate() + 2);
        return date.toLocaleDateString('en-us', {weekday: 'short', month: 'short', day: 'numeric'})
    }

    handleClick(e) {
        return 
    }

    render() {
        const { title, price, rating, specialty, photoUrl } = this.props

        return (
            <div className="grid-item">
                <div className="grid-image-container">
                    <img src={photoUrl} alt={title} />
                </div>
                <h2>{title}</h2>
                <div className="grid-rating">{rating}</div>
                <div className="grid-price">
                    <span className="grid-dollar-sign">$</span>
                    <span className="grid-dollars">{this.price("dollars")}</span>
                    <span className="grid-cents">{this.price("cents")}</span>
                </div>
                <div className="grid-shipping">
                    Get it as soon as <b>{this.date()}</b><br />
                    FREE Shipping by Euphrates
                </div>
            </div>
        )
    }
}

export default GridItem;