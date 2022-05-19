import React from "react";

class GridItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProduct(this.props.productId)
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default GridItem;