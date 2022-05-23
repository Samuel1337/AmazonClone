import React from "react";
import { FontAwesomeIcon } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import productShowContainer from "./productShowContainer";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: "All",
            searchTerm: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const dropdown = document.querySelector('.search-dropdown');
        const category = dropdown.options[dropdown.selectedIndex].value;

        if (category === 'all') {
            this.props.getAllProducts();
        } else {
            this.props.getCategoryProducts(category);
        }

        this.props.products.forEach(product => {
            if (product.title.toLowerCase().includes(this.state.searchTerm)) {
                
            }
        });
        
    }

    render() {

        return (
            <div className="search-container">
                <div className="search-bar">
                    <select type="dropdown" className="search-dropdown">
                        <option value="all">All</option>
                        <option value="electronics">Electronics</option>
                        <option value="computers">Computers</option>
                        <option value="smart-Home">Smart Home</option>
                        <option value="home-garden-tools">Home, Garden &#38; Tools</option>
                        <option value="pet-supplies">Pet Supplies</option>
                        <option value="food-grocery">Food &#38; Grocery</option>
                        <option value="beauty-health">Beauty &#38; Health</option>
                        <option value="toys-kids-baby">Toys, Kids &#38; Baby</option>
                        <option value="handmade">Handmade</option>
                        <option value="sports">Sports</option>
                        <option value="outdoors">Outdoors</option>
                        <option value="automotive-industrial">Automotive &#38; Industrial</option>
                    </select>

                    {/* Search Bar */}
                    <input type="text" className="search-input" />
                    <button onClick={this.handleSubmit} className="search-button">
                        <FaSearch />
                    </button>
                </div>
            </div>
        )
    }
}


export default SearchBar;