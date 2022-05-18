import React from "react";
import { Link } from "react-router-dom";

class Categories extends React.Component {

    render() {
        return (
            <nav id="header-blue">
                <ul>
                    <li><Link to="/all">All Products</Link></li>
                    <li><Link to="/electronics">Electronics</Link></li>
                    <li><Link to="/computers">Computers</Link></li>
                    <li><Link to="/smart-home">Smart Home</Link></li>
                    <li><Link to="/home-garden-tools">Home, Garden &#38; Tools</Link></li>
                    <li><Link to="/pet-supplies">Pet Supplies</Link></li>
                    <li><Link to="/food-grocery">Food &#38; Grocery</Link></li>
                    <li><Link to="/beauty-health">Beauty &#38; Health</Link></li>
                    <li><Link to="/toys-kids-baby">Toys, Kids &#38; Baby</Link></li>
                    <li><Link to="/handmade">Handmade</Link></li>
                    <li><Link to="/sports">Sports</Link></li>
                    <li><Link to="/outdoors">Outdoors</Link></li>
                    <li><Link to="/automotive-industrial">Automotive &#38; Industrial</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Categories;