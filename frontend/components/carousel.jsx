import React from "react";

class Carousel extends React.Component {
    render() {
        return (
            <div class="carousel">
                <button class="carousel__button left">
                    <img src={window.left} alt="" />
                </button>
                <div class="carousel__track-container">
                    <ul class="carousel__track">
                        <li class="carousel__slide">
                            <img class="carousel__image" src={window.panel1} alt="" />
                        </li>
                        <li class="carousel__slide">
                            <img class="carousel__image" src={window.panel2} alt="" />
                        </li>
                        <li class="carousel__slide">
                            <img class="carousel__image" src={window.panel3} alt="" />
                        </li>
                        <li class="carousel__slide">
                            <img class="carousel__image" src={window.panel4} alt="" />
                        </li>
                    </ul>
                </div>
                <button class="carousel__button right">
                    <img src={window.right} alt="" />
                </button>
                <div class="white__fog"></div>
            </div>
        )
    }
}
export default Carousel;