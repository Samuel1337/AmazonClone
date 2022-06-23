import React from "react";
import { FaSearch } from "react-icons/fa";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: "all",
            search: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.displayUpcomingFeature = this.displayUpcomingFeature.bind(this);
        this.removeUpcomingFeature = this.removeUpcomingFeature.bind(this);
    }
    
    handleSubmit() {
        // const dropdown = document.querySelector('.search-dropdown').value;
        // const category = dropdown.options[dropdown.selectedIndex].value;
        // const input = document.getElementById('search-input').value;
        
        // this.setState({
        //     ["search"]: input,
        // })
    }

    displayUpcomingFeature(e) {
        e.currentTarget.value = "Search feature coming soon!";
        e.currentTarget.style = "transition: 100ms; background-color: lightyellow; color: orange";
        e.currentTarget.disabled = true;
    }

    removeUpcomingFeature(e) {
        e.currentTarget.value = "";
        e.currentTarget.style = "transition: 500ms; background-color: white; color: black";
        e.currentTarget.disabled = false;
    }


    handleChange(field) {
        return e => this.setState({[field]: e.currentTarget.selectedIndex})
    }

    render() {

        return (
            <div className="search-container">
                <div className="search-bar">
                    <select
                        type="dropdown"
                        className="search-dropdown"
                        onChange={()=>this.handleChange("category")}
                    >
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
                    <input
                        type="text"
                        id="search-input"
                        className="search-input"
                        placeholder="Search for a specific item"
                        onMouseEnter={this.displayUpcomingFeature}
                        onMouseLeave={this.removeUpcomingFeature}
                    />
                    <button onClick={this.handleSubmit} className="search-button">
                        <FaSearch />
                    </button>
                </div>
            </div>
        )
    }
}


export default SearchBar;