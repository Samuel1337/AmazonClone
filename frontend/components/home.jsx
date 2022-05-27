import React from "react";
import Carousel from "./carousel";
import Splash from "./splash";

class Home extends React.Component {

    render() {
        return (
            <>
                <Carousel />
                <Splash />
            </>
        )
    }
}

export default Home;