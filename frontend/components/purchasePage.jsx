import React from "react";
import { FaCheck } from "react-icons/fa"
import { Link } from "react-router-dom"

const PurchasePage = () => {
    window.scrollTo(0,0);
    return (
        <div className="purchase-page">
            <div className="purchase-placeholder">
                <div className="purchase-box">
                    <h1>
                        <span className="purchase-check">
                            <FaCheck/>
                        </span>
                        Thank you, your order has been placed
                    </h1>
                    <p>Click here to return to the <Link to="/"><span className="link-to-home-page">Home Page</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default PurchasePage;