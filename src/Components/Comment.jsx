import React, { useState } from "react";

const CommentBox = ({ onCommentSubmit, onRatingSubmit, onImageUpload }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
    onRatingSubmit(value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    onImageUpload(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      onCommentSubmit(comment);
      setComment("");
    }
  };

return (
    <div className="flex flex-col space-y-4">
        <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your comment..."
            rows="4"
            className="border p-2 resize-none"
        ></textarea>
        <div className="flex items-center">
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="image-upload"
            />
            <label htmlFor="image-upload" className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Upload Image
            </label>
        </div>
        <div className="flex items-center">
            <p className="mr-4">Rate this product:</p>
            <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                    <button
                        key={index}
                        className={`${
                            rating >= index + 1 ? "text-yellow-500" : "text-gray-300"
                        }`}
                        onClick={() => handleRatingChange(index + 1)}
                    >
                        &#9733;
                    </button>
                ))}
            </div>
        </div>
        <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
            Submit
        </button>
    </div>
);
};

export default CommentBox;
