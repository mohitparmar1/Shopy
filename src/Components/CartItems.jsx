import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import removeIcon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { getCartTotalAmount, all_products, cartItem, RemoveFromCart } =
    useContext(ShopContext);
  return (
    <div className="w-full h-screen my-5">
      <div className="grid grid-cols-7 gap-5 items-center ml-14">
        <p className=" font-bold">Products</p>
        <p className="font-bold">Title</p>
        <p className="font-bold">Price</p>
        <p className="font-bold">Size</p>
        <p className="font-bold">Quantity</p>
        <p className="font-bold">Total</p>
        <p className="font-bold">Remove</p>
      </div>
      <hr />

      {all_products &&
        all_products.map((item) => {
          if (cartItem[item.id] > 0) {
            return (
              <div
                className="grid grid-cols-7 gap-5 items-center ml-14 my-10"
                key={item.id}
              >
                <div className="flex flex-row">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[100px] h-[100px] "
                  />
                </div>
                <p className=" max-w-[200px]">{item.name}</p>
                <p>${item.new_price}</p>
                <p>{item.size}</p>
                <p className="text-lg bg-gray-300 text-center w-10 rounded-md">
                  {cartItem[item.id]}
                </p>
                <p>${item.new_price * cartItem[item.id]}</p>
                <img
                  src={removeIcon}
                  alt="Remove"
                  className="w-4 h-4 cursor-pointer "
                  onClick={() => RemoveFromCart(item.id)}
                />
              </div>
            );
          }
          return null; // Skip rendering if quantity is 0
        })}
      <div className="flex items-center justify-between w-full flex-1">
        <div className="flex flex-col bg-white p-4 rounded-md shadow-md">
          <h1 className="text-2xl font-bold text-center mb-4">Cart Totals</h1>
          <hr className="mb-4" />
          <div className="flex justify-between mb-2">
            <h3 className="text-lg font-bold">Subtotal</h3>
            <h3 className="text-lg font-bold">${getCartTotalAmount()}</h3>
          </div>
          <div className="flex justify-between mb-2">
            <h3 className="text-lg font-bold">Shipping</h3>
            <h3 className="text-lg font-bold">Free</h3>
          </div>
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-bold">Total</h3>
            <h3 className="text-lg font-bold">${getCartTotalAmount()}</h3>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
            Proceed to Checkout
          </button>
        </div>

        <div className="flex flex-1 ml-4">
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md"
            placeholder="Enter promo code"
          />
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md ml-2 hover:bg-gray-900 focus:outline-none">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
