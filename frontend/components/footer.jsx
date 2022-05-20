import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {

    topOfPage() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <footer>
                <nav id="back-to-top-footer" onClick={this.topOfPage}>
                    <p>Back to top</p>
                </nav>
                <nav id="blue-footer">
                    <Link to="/" onClick={this.topOfPage}><img src={window.logo_blue} alt="" /></Link>
                </nav>
                <nav id="black-footer">
                    <p>Euphrates.com is an Amazon.com clone project created by Sam Martins in May, 2022.</p>
                </nav>
            </footer>
        )
    }
}

export default Footer;