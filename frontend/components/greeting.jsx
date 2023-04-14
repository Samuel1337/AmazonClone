import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind();
    }
    logout() {
        this.props.history.push("/");
        this.props.logout();
    }
    
    render() {
        const {currentUser, logout} = this.props;
        if (currentUser) {
            return (
                <div id="greeting">
                    <p>Hello, {currentUser.username}</p>
                    <a id="header-link" onClick={this.logout}>Logout</a>
                </div>
            )
        } else {
            return (
                <div id="greeting">
                    <p>Hello, Guest</p>
                    <span>
                        <Link to="/signup" id="header-link">Sign Up </Link>
                        or 
                        <Link to="/login" id="header-link"> Sign In</Link>
                    </span>
                </div>
            )
        }
    }
}

export default Greeting;