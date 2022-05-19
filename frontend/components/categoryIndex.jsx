import React from "react";
import GridItem from "./gridItem";

class CategoryIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCategoryProducts(this.props.category);
    }

    componentDidUpdate(prevProps) {
        console.log("hi")
        if (prevProps.category !== this.props.category) {
            this.props.getCategoryProducts(this.props.category);
        }
        if (!prevProps) {
            this.props.getCategoryProducts(this.props.category);
        }
    }
    
    render() {
        if (!this.props.products) return null;
        if (this.props.products[0] === undefined) return null;

        return (
            <div className="category-page">
            <div className="category-bar">
                {this.props.products.length} items
            </div>
                <div className="grid">
                    { this.props.products.map(product => (
                        <GridItem
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                        specialty={product.specialty}
                        photoUrl={product.photoUrl}
                        key={product.id}
                        />
                        ))
                    }    
                </div>
            </div>
        )

    }
}

export default CategoryIndex;