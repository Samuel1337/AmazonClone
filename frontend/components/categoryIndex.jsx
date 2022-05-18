import React from "react";

class CategoryIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCategoryProducts(this.props.categoryId);
    }

    render() {

        return (
            <div>
                <script type="text/javascript">
                    
                </script>
            </div>
        )

    }
}

export default CategoryIndex;