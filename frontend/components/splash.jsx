import React from "react";
import { Link } from "react-router-dom";

class Splash extends React.Component  {
    constructor(props) {
        super(props);

        this.redirect = this.redirect.bind(this);
    }

    redirect(i) {
        this.props.history.push(`/products/${i}`)
    }

    render() {
        return (
            <div className="splash-container">
                
                <div className="splash-row">
                    <div className="box" id="box-1">
                        <h1>The future is now</h1>
                        <img className="splash-img" onClick={()=>this.redirect(9)} id="9" src={window.smart_home} alt="" />
                        <p>See more at <Link to="/categories/smart-home"><span className="free-returns-text">Smart Home </span></Link></p>
                    </div>
                    <div className="box" id="box-2">
                        <h1>All your electronics in one place</h1>
                        <img className="splash-img" onClick={()=>this.redirect(1)} id="1" src={window.electronics} alt="" />
                        <p>See more at <Link to="/categories/electronics"><span className="free-returns-text">Electronics </span></Link></p>
                    </div>
                    
                    <div className="box" id="box-3">
                        <h1>Get ready to get dirty</h1>
                        <img className="splash-img" onClick={()=>this.redirect(15)} id="15" src={window.home_garden_tools} alt="" />
                        <p>See more at <Link to="/categories/home-garden-tools"><span className="free-returns-text">Home, Garden &#38; Tools </span></Link></p>
                    </div>
                    <div className="box" id="box-4">
                        <h1>Give your best friend a treat</h1>
                        <img className="splash-img" onClick={()=>this.redirect(18)} id="18" src={window.pet_supplies} alt="" />
                        <p>See more at <Link to="/categories/pet-supplies"><span className="free-returns-text">Pet Supplies </span></Link></p>
                    </div>
                </div>

                <div className="splash-row" id="row-2">
                    <div className="box" id="box-5">
                        <h1>Family deals</h1>
                        <img className="splash-img" onClick={()=>this.redirect(30)} id="30" src={window.toys_kids_baby} alt="" />
                        <p>See more at <Link to="/categories/toys-kids-baby"><span className="free-returns-text">Toys, Kids &#38; Baby </span></Link></p>
                    </div>
                    <div className="box" id="box-6">
                        <h1>Decorate your front yard</h1>
                        <img className="splash-img" onClick={()=>this.redirect(42)} id="42" src={window.outdoors} alt="" />
                        <p>See more at <Link to="/categories/outdoors"><span className="free-returns-text">Outdoors </span></Link></p>
                    </div>
                    <div className="box" id="box-7">
                        <h1>In case you're hungry</h1>
                        <img className="splash-img" onClick={()=>this.redirect(22)} id="22" src={window.food_groceries} alt="" />
                        <p>See more at <Link to="/categories/food-grocery"><span className="free-returns-text">Food &#38; Groceries </span></Link></p>
                    </div>
                    <div className="box" id="box-8">
                        <h1>Save up on cleaning products</h1>
                        <img className="splash-img" onClick={()=>this.redirect(25)} id="25" src={window.beauty_health} alt="" />
                        <p>See more at <Link to="/categories/beauty-health"><span className="free-returns-text">Beauty &#38; Health </span></Link></p>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Splash;