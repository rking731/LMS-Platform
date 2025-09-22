import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const CourseRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <span>
      <Rating 
        onClick={handleRating}
        initialValue={rating}
        size={25}
        transition
        allowFraction
      />
    </span>
  );
};

export default CourseRating;