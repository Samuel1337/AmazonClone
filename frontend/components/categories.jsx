import React from "react";

class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.checkAutomotive = this.checkAutomotive.bind(this);
        this.checkOutdoors = this.checkOutdoors.bind(this);
        this.goTo = this.goTo.bind(this);
    }

    checkAutomotive() {
        if (window.innerWidth > 1550) {
            return (<li><a onClick={()=>this.goTo('automotive-industrial')}>Automotive &#38; Industrial</a></li>);
        }
    }   

    checkOutdoors() {
        if (window.innerWidth > 1420) {
            return (<li><a onClick={()=>this.goTo('outdoors')}>Outdoors</a></li>);
        }
    }

    goTo(category) {
        if (category === "all") {
            this.props.getAllProducts()
            .then(() => {
                if (!this.props.location.pathname.includes(category)) {
                    this.props.history.push(`/categories/${category}`)
                }
            })
        } else {
            this.props.getCategoryProducts(category)
            .then(() => {
                if (!this.props.location.pathname.includes(category)) {
                    this.props.history.push(`/categories/${category}`)
                }
            })
        }
    }

    render() {
        return (
            <nav id="header-blue">
                <ul>
                    <li><a onClick={()=>this.goTo('all')}>All Products</a></li>
                    <li><a onClick={()=>this.goTo('electronics')}>Electronics</a></li>
                    <li><a onClick={()=>this.goTo('computers')}>Computers</a></li>
                    <li><a onClick={()=>this.goTo('smart-home')}>Smart Home</a></li>
                    <li><a onClick={()=>this.goTo('home-garden-tools')}>Home, Garden &#38; Tools</a></li>
                    <li><a onClick={()=>this.goTo('pet-supplies')}>Pet Supplies</a></li>
                    <li><a onClick={()=>this.goTo('food-grocery')}>Food &#38; Grocery</a></li>
                    <li><a onClick={()=>this.goTo('beauty-health')}>Beauty &#38; Health</a></li>
                    <li><a onClick={()=>this.goTo('toys-kids-baby')}>Toys, Kids &#38; Baby</a></li>
                    <li><a onClick={()=>this.goTo('handmade')}>Handmade</a></li>
                    <li><a onClick={()=>this.goTo('sports')}>Sports</a></li>
                    {this.checkOutdoors()}
                    {this.checkAutomotive()}
                </ul>
            </nav>
        )
    }
}

export default Categories;