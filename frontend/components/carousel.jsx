import React from "react";
import { FaTemperatureHigh } from "react-icons/fa";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.start = this.start.bind(this);
        this.loop = this.loop.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.clearEventListeners = this.clearEventListeners.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.refresh = this.refresh.bind(this);
        this.track = null;
    }

    componentDidMount() {
        this.track = document.querySelector('.carousel__track');
        if (this.track !== null) {
            this.refresh();
            this.start();
            this.loop();
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize, true);
    }

    handlePrevClick(e) {
        e.preventDefault();
        clearInterval(this.timer);
        this.loop();

        const currentSlide = this.track.querySelector('.current-slide');
        let prevSlide = currentSlide.previousElementSibling;
        
        if (prevSlide === null) {
            prevSlide = this.track.querySelector('.carousel__slide:last-child')
        }
        
        this.moveToSlide(currentSlide, prevSlide);
    }
    
    handleNextClick(e) {
        e.preventDefault();
        clearInterval(this.timer);
        this.loop();

        const currentSlide = this.track.querySelector('.current-slide');
        let nextSlide = currentSlide.nextElementSibling;
        
        if (nextSlide === null) {
            nextSlide = this.track.querySelector('.carousel__slide:first-child')
        }

        this.moveToSlide(currentSlide, nextSlide);
    }

    start() {
        // select elements
        if (this.track !== null) {
            this.track = document.querySelector('.carousel__track');
            this.slides = [...document.querySelectorAll(".carousel__slide")];
            this.container = document.querySelector('.carousel__track-container');
            this.nextButton = document.querySelector('.carousel__button.right');
            this.prevButton = document.querySelector('.carousel__button.left');
        } else {
            return null;
        }
        
        // sets width and position
        this.setSlidePosition = (slide, index) => {
            this.slideWidth = this.slides[0].getBoundingClientRect().width;
            slide.style.left = this.slideWidth * index + 'px';
        }
        
        this.slides.forEach(this.setSlidePosition);
        
        // moves slides
        this.moveToSlide = (currentSlide, targetSlide) => {
            this.slides.forEach(this.setSlidePosition);
            this.track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        }

        // left button event
        this.prevButton.addEventListener("click", this.handlePrevClick, true);
        
        // right button event
        this.nextButton.addEventListener("click", this.handleNextClick, true);
    }

    loop() {
        this.timer = setInterval(() => {
            if (this.track !== null) {

                const currentSlide = this.track.querySelector('.current-slide');
                
                let nextSlide = currentSlide.nextElementSibling;
                
                if (nextSlide === null) {
                    nextSlide = this.track.querySelector('.carousel__slide:first-child')
                }
                
                this.moveToSlide(currentSlide, nextSlide);
            }
        }, 5000);
    }

    clearEventListeners() {
        if (this.prevButton) this.prevButton.removeEventListener("click", this.handlePrevClick, true);
        if (this.nextButton) this.nextButton.removeEventListener("click", this.handleNextClick, true);
    }

    handleResize() {
        this.clearEventListeners();
        clearInterval(this.timer);
        this.track = document.querySelector('.carousel__track');
        if (this.track !== null) {
            this.start();
            this.loop();
        } else {
            window.removeEventListener("resize", this.handleResize, true);
        }
    }

    refresh() {
        this.track = document.querySelector('.carousel__track');
        if (this.track !== null) window.addEventListener("resize", this.handleResize, true);
    }

    render() {
        return (
            <div className="carousel">
                <button className="carousel__button left">
                    <img src={window.left} alt="" />
                </button>
                <div className="carousel__track-container">
                    <ul className="carousel__track">
                        <li className="carousel__slide current-slide">
                            <img className="carousel__image" src={window.panel1} alt="1" />
                        </li>
                        <li className="carousel__slide">
                            <img className="carousel__image" src={window.panel2} alt="2" />
                        </li>
                        <li className="carousel__slide">
                            <img className="carousel__image" src={window.panel3} alt="3" />
                        </li>
                        <li className="carousel__slide">
                            <img className="carousel__image" src={window.panel4} alt="4" />
                        </li>
                    </ul>
                </div>
                <button className="carousel__button right">
                    <img src={window.right} alt="" />
                </button>
                <div className="white__fog"></div>
            </div>
        )
    }
}
export default Carousel;