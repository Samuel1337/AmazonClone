import React from "react";

class CategoryIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCategoryProducts(this.props.category);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.category !== this.props.match.params.category) {
            this.props.getCategoryProducts(this.props.category);
        }
        if (!prevProps) {
            this.props.getCategoryProducts(this.props.category);
        }
    }

    render() {
        
        if (!this.props.products) return null;
        
        return (
            <div>
                { this.props.products.map(product => (
                        <>
                            <h1>{product.title}</h1>
                            <img src={product.photoUrl} alt="" />
                        </>
                    ))
                }    
            </div>
        )

    }
}

export default CategoryIndex;