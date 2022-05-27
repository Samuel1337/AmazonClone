import React from "react";
import { Link } from "react-router-dom";

class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.checkWidth = this.checkWidth.bind(this);
    }

    checkWidth() {
        if (window.innerWidth > 1550) {
            return (<li><Link to="/categories/automotive-industrial">Automotive &#38; Industrial</Link></li>);
        }
    }

    render() {
        return (
            <nav id="header-blue">
                <ul>
                    <li><Link to="/categories/all">All Products</Link></li>
                    <li><Link to="/categories/electronics">Electronics</Link></li>
                    <li><Link to="/categories/computers">Computers</Link></li>
                    <li><Link to="/categories/smart-home">Smart Home</Link></li>
                    <li><Link to="/categories/home-garden-tools">Home, Garden &#38; Tools</Link></li>
                    <li><Link to="/categories/pet-supplies">Pet Supplies</Link></li>
                    <li><Link to="/categories/food-grocery">Food &#38; Grocery</Link></li>
                    <li><Link to="/categories/beauty-health">Beauty &#38; Health</Link></li>
                    <li><Link to="/categories/toys-kids-baby">Toys, Kids &#38; Baby</Link></li>
                    <li><Link to="/categories/handmade">Handmade</Link></li>
                    <li><Link to="/categories/sports">Sports</Link></li>
                    <li><Link to="/categories/outdoors">Outdoors</Link></li>
                    {this.checkWidth()}
                </ul>
            </nav>
        )
    }
}

export default Categories;