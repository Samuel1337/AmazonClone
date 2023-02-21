import React from "react";
import Carousel from "./carousel";
import Splash from "./splash";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="home-page">
                <Carousel />
                <Splash
                    history={this.props.history}
                />
            </div>
        )
    }
}

export default Home;