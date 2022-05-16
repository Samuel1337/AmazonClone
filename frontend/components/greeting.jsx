import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {currentUser, logout} = this.props;
        if (currentUser) {
            return (
                <div>
                    <p>Hello, {currentUser.username}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/signup">Sign Up </Link>
                    <Link to="/login"> Log In</Link>
                </div>
            )
        }
    }
}

export default Greeting;