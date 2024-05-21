import React from "react";

const StarRating = ({ rating }) => {
  const starWidth = rating * 20;

  return (
    <div className="flex items-center">
      <p className="mr-4">Rating:</p>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`${
              rating >= index + 1 ? "text-yellow-500" : "text-gray-300"
            }`}
            style={{ width: `${starWidth}%`, marginRight: "2px" }}
          >
            &#9733;
          </span>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
