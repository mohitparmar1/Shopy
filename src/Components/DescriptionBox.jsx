import React, { useState } from "react";
import CommentBox from "./Comment";
import StarRating from "./StarRating";

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  const handleRatingSubmit = (value) => {
    setRating(value);
  };

  const handleImageUpload = (file) => {
    setUploadedImage(file);
  };

  return (
    <div className="flex flex-col items-center w-3/4 m-auto mt-10 mb-10">
      <div className="flex flex-row justify-left w-full my-3 ">
        <div
          className={`border-2 p-3 cursor-pointer ${
            activeTab === "description" ? "bg-gray-300" : ""
          }`}
          onClick={() => handleTabClick("description")}
        >
          Description
        </div>
        <div
          className={`border-2 p-3 cursor-pointer ${
            activeTab === "reviews" ? "bg-gray-300" : ""
          }`}
          onClick={() => handleTabClick("reviews")}
        >
          Reviews ({comments.length})
        </div>
      </div>
      {activeTab === "description" && (
        <div className="flex flex-row justify-left w-full mt-3 ">
          <p className="border-2 p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl eu molestie viverra, eros nunc faucibus dolor,
            vel aliquam nunc quam id nunc. Nullam auctor, elit vitae aliquet
            aliquet, lorem elit tincidunt nisi, eget tincidunt urna nunc a
            neque. Donec eget nisl non nisl ultricies aliquam. Donec nec diam
            euismod, aliquet nisi vitae, lacinia quam. Nulla facilisi. Praesent
            sed erat tincidunt, aliquam lectus vitae, consequat risus. Nulla
            facilisi. Donec auctor, sem vitae aliquet aliquet, lorem elit
            tincidunt nisi, eget tincidunt urna nunc a neque. Donec eget nisl
            non nisl ultricies aliquam. Donec nec diam euismod, aliquet nisi
            vitae, lacinia quam. Nulla facilisi. Praesent sed erat tincidunt,
            aliquam lectus vitae, consequat risus. Nulla facilisi.
          </p>
        </div>
      )}
      {activeTab === "reviews" && (
        <div className="flex flex-col w-full h-auto mt-3">
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <CommentBox
              onCommentSubmit={handleCommentSubmit}
              onRatingSubmit={handleRatingSubmit}
              onImageUpload={handleImageUpload}
            />
          </div>
          <div className=" bg-grey-500 p-4 rounded-md">
            <StarRating rating={rating }/>
            <div>
              <h3>Comments:</h3>
              <ul>
                {comments.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            </div>
            {uploadedImage && (
              <div>
                <h3>Uploaded Image:</h3>
                <img src={URL.createObjectURL(uploadedImage)} alt="Uploaded" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DescriptionBox;
