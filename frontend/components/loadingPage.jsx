import React from "react";

class LoadingPage extends React.Component {

    render() {
        const array = [0,1,2,3,4,5,6,7]

        return (
            <div className="category-page" style="height: 100vh; background-color: green">
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
    }
}

export default LoadingPage;