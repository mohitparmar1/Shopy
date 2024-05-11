import React, { useContext } from "react";
import starIcon from "../assets/star_icon.png";
import starDullIcon from "../assets/star_dull_icon.png";
import { ShopContext } from "../Context/ShopContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDisplay = (props) => {
  const { product } = props.data;
  const { AddToCart } = useContext(ShopContext);
  return (
    <div className="flex items-center  h-screen justify-center ml-10 ">
      <div className="flex justify-center items-center gap-10">
        <div className="flex flex-col gap-4 max-h-46">
          <img src={product.image} alt="" className="w-40 h-46" />
          <img src={product.image} alt="" className="w-40 h-46" />
          <img src={product.image} alt="" className="w-40 h-46" />
        </div>
        <div className="">
          <img src={product.image} alt="" className="w-96 h-[600px]" />
        </div>
      </div>
      <div className="flex flex-col flex-1 ml-10 w-1/2">
        <h1 className="text-2xl font-bold mb-4 mt-5">{product.name}</h1>
        <div className="flex flex-row items-center">
          <img src={starIcon} alt="" className="w-4 h-4" />
          <img src={starIcon} alt="" className="w-4 h-4" />
          <img src={starIcon} alt="" className="w-4 h-4" />
          <img src={starIcon} alt="" className="w-4 h-4" />
          <img src={starDullIcon} alt="" className="w-4 h-4" />
          <p className="text-gray-600 ml-2">(4.0)</p>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="mb-4">
          <div className="flex items-center gap-3">
            <p className="text-lg font-regular line-through">
              Price: ${product.old_price}
            </p>
            <p className="text-lg  text-orange-500 font-Poppins font-bold">
              Price: ${product.new_price}
            </p>
          </div>
          <p className="text-gray-700">Category: {product.category}</p>
          <p className="text-gray-700">Brand: {product.brand}</p>
        </div>
        <div className="flex flex-row gap-4 w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="flex flex-col gap-4 w-3/4  my-5">
          <h1 className="text-lg font-bold">Select Size:</h1>
          <div className="flex flex-row gap-4">
            <button
              className="bg-gray-400 active:bg-gray-800 text-white px-4 py-2 rounded"
              onClick={() => {
                product.size = "S";
              }}
            >
              S
            </button>
            <button
              className="bg-gray-400 active:bg-gray-800 text-white px-4 py-2 rounded"
              onClick={() => {
                product.size = "M";
              }}
            >
              M
            </button>
            <button
              className="bg-gray-400 active:bg-gray-800 text-white px-4 py-2 rounded"
              onClick={() => {
                product.size = "L";
              }}
            >
              L
            </button>
            <button
              className="bg-gray-400 active:bg-gray-800 text-white px-4 py-2 rounded"
              onClick={() => {
                product.size = "XL";
              }}
            >
              XL
            </button>
          </div>
        </div>
        <div className="flex items-center mb-2  justify-start ">
          <button
            onClick={() => {
              if (product.size === "") {
                toast.error("Please select size");
                return;
              }
              AddToCart(product.id);
              toast.success("Added to Cart");
            }}
            className="bg-orange-400 w-40  text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
          <ToastContainer />
        </div>
        <div className="flex flex-col my-2">
          <p>
            <span className="font-bold">Category :</span> T-shirt,Shirt
          </p>
          <p>
            <span className="font-bold">Tags :</span>Modern , latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
