import React from "react";
import { Link } from "react-router-dom";

class UnderConstruction extends React.Component {
    
    render() {
        return (
            <div id="error-page">
                <Link to="/"><img src={window.error_page} alt="404" /></Link>
            </div>
        )
    }
}

export default UnderConstruction;