import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
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
                    <br/>
                    <br/>
                <div className="dev-info">
                            <div className="dev-info-name">Sam Martins</div>
                            <a href="https://github.com/Samuel1337" className="dev-links"><FaGithubSquare/></a>
                            <a href="https://www.linkedin.com/in/samuel-m-b3b9baa2/" className="dev-links"><FaLinkedin/></a>
                        </div>
                </nav>
                <nav id="black-footer">
                    <p>Euphrates is an Amazon.com clone project created by Sam Martins</p>
                </nav>
            </footer>
        )
    }
}

export default Footer;