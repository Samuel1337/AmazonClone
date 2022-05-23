import React from "react";
import { FontAwesomeIcon } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

class SearchBar extends React.Component {
    
    render() {

        return (
            <div className="search-container">
                <div className="search-bar">
                    <select type="dropdown" className="search-dropdown">
                        <option value="All">All</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Computers">Computers</option>
                        <option value="Smart Home">Smart Home</option>
                        <option value="Home, Garden &#38; Tools">Home, Garden &#38; Tools</option>
                        <option value="Pet Supplies">Pet Supplies</option>
                        <option value="Food &#38; Grocery">Food &#38; Grocery</option>
                        <option value="Beauty &#38; Health">Beauty &#38; Health</option>
                        <option value="Toys, Kids &#38; Baby">Toys, Kids &#38; Baby</option>
                        <option value="Handmade">Handmade</option>
                        <option value="Sports">Sports</option>
                        <option value="Outdoors">Outdoors</option>
                        <option value="Automotive &#38; Industrial">Automotive &#38; Industrial</option>
                    </select>
                    <input type="text" className="search-input" />
                    <button className="search-button">
                        <FaSearch />
                    </button>
                </div>
            </div>
        )
    }
}
{/* <FontAwesomeIcon icon="fa-solid fa-caret-down" /> */}


export default SearchBar;