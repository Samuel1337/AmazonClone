import React from "react";
import GridItem from "./gridItem";
import LoadingPage from "./loadingPage";

class CategoryIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.makeGetRequest();
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.category !== this.props.category) {
            this.makeGetRequest();
        }
        if (!prevProps) {
            this.makeGetRequest();
        }
    }
    
    makeGetRequest() {
        this.props.clearProducts();
        if (this.props.category === "all") {
            this.props.getAllProducts();
        } else {
            this.props.getCategoryProducts(this.props.category);
        }
    }
    
    sortBy(qualifier) {
        return this.props.products.mergeSort(function(a, b) {
            const valueA = a[qualifier];
            const valueB = b[qualifier];
            if (valueA > valueB) {
                return -1;
              }
              if (valueA < valueB) {
                return 1;
              }
              return 0;
        })
    }

    render() {
        const { products } = this.props
        const array = [0,1,2,3,4,5,6,7]
        
        if (!products || products[0] === undefined) {
            return (
                <div className="blank">
                <div className="category-bar">
                    Loading items
                </div>
                    <div className="grid-container">
                        <div className="grid">
                            {array.map(num => (
                                <div className="grid-item">
                                    <div className="grid-image-container"></div>
                                    <div className="grid-rating"></div>
                                </div>
                                ))
                            }    
                        </div>
                    </div>
                </div>
            )
        };

        let gridItems = this.sortBy('price');

        return (
            <div className="category-page">
            <div className="category-bar">
                {gridItems.length} items
            </div>
                <div className="grid-container">
                    <div className="grid">
                        { gridItems.map(product => (
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

export default CategoryIndex;

Array.prototype.mergeSort = function(callback) {
    let array = this.slice(0);
    let comparator = callback || function(left, right) {
        if (left < right) {return -1}
        else if (left > right) {return 1}
        else {return 0}
    }
    
    if (array.length <= 1) {
        return array;
    } 

    let mid = Math.floor(array.length/2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    
    let sortedLeft = left.mergeSort(comparator);
    let sortedRight = right.mergeSort(comparator);

    return merge(sortedLeft, sortedRight, comparator);
}

function merge(left, right, comparator) {
    let result = [];

    while (left.length > 0 && right.length > 0) {
        let cb = comparator(left[0], right[0]);
        if (cb === -1) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}