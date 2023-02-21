import React from "react";
import { Link } from "react-router-dom";
import GridItem from "./gridItem";
import LoadingPage from "./loadingPage";

class SearchPage extends React.Component {

    render() {
        const { products, error } = this.props;
        
        if (error.error) return (
            <div className="search-page">
                <Link to="/"><img className="empty-search" src={window.empty_search} /></Link>
            </div>
        )
        
        if (!products || products[0] === undefined) return LoadingPage;
        
        return (
            <div className="category-page">
            <div className="category-bar">
                {products.length} items
            </div>
                <div className="grid-container">
                    <div className="grid">
                        { products.map(product => (
                            <GridItem
                                product={product}
                                key={product.id}
                            />
                            ))
                        }    
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage;