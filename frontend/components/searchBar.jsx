import React from "react";
import { FaSearch } from "react-icons/fa";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: "all",
            query: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.pressEnter = this.pressEnter.bind(this);
        this.disableEnter = this.disableEnter.bind(this);
        this.logKey = this.logKey.bind(this);
        this.reset = this.reset.bind(this);
        this.pressEnter();
    }

    handleSubmit() {

        if (this.state.category === "all" && this.state.query === "") {
            this.props.history.push("/");
            return null;
        } 

        const query = `${this.state.query}&category=${this.state.category}`;
        this.props.clearProducts();
        this.props.clearSearchErrors();
        this.props.searchProduct(query);
        if (!this.props.location.pathname.includes("search")) {
            this.props.history.push("/search");
        }
        this.reset();
    }

    reset() {
        const select = document.getElementById("dropdown");
        const input =  document.getElementById("search-input");
        select.selectedIndex = 0;
        input.value = "";
        this.setState({
            category: "all",
            query: ""
        })
    }

    handleChange(field) {
        if (field === "category") {
            const select = document.getElementById("dropdown");
            const value = select.options[select.selectedIndex].value;
            this.setState({[field]: value});
        } else {
            return e => this.setState({[field]: e.currentTarget.value});
        }
    }

    pressEnter() {
        document.addEventListener("keydown", this.logKey);
    }
    
    disableEnter() {
        document.removeEventListener("keydown", this.logKey);
    }
    
    logKey(e) {
        const input = document.getElementById("search-input");
        if (e.code === "Enter" && input.value !== "") {
            this.handleSubmit();
        }
    }

    render() {

        return (
            <div className="search-container">
                <div className="search-bar">
                    <select
                        type="dropdown"
                        id="dropdown"
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
                        autoComplete="off"
                        onChange={this.handleChange("query")}
                        onFocus={this.pressEnter}
                        onBlur={this.disableEnter}
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