import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = props => {

    const [rating, setRating] = useState(3);
    const [hover, setHover] = useState(null);
    
    props.getRating(rating);

    return (
        <div className="five-stars">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i+1;
                return (
                    <label key={i+1} name="rating">
                        <input
                            key={(i+1)*1000}
                            type="radio"
                            className="star-radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => (setRating(ratingValue))}
                        />
                        <FaStar
                            key={i*50}
                            className="star"
                            size={50}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9" }
                        />
                    </label>
                )
            })}
        </div>
    )
}

export default StarRating;