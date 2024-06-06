import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import removeIcon from "../assets/cart_cross_icon.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";
import img from '../assets/Empty_Cart_img.png'

const CartItems = () => {
  const {
    getCartTotalAmount,
    all_products,
    cartItem,
    RemoveFromCart,
    AddToCart,
  } = useContext(ShopContext);


  const isEmptyCart=Object.keys(cartItem).length

  //payment gateway
  const makePayment = async () => {
    const stripe = await loadStripe("Enter Your Stripe Public Key Here");

    const filteredProducts = all_products.filter(
      (product) => cartItem[product.id] > 0
    );
    console.log(filteredProducts);
    const body = {
      products: filteredProducts,
      cartItem: cartItem,
    };

    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:7000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    if (!response.ok) {
      const errorText = await response.text(); // or response.json() if the server returns JSON
      console.error("Error response:", errorText);
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };
  console.log(all_products);
  console.log(cartItem);
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row w-full lg:w-3/4">
        {/* Shopping Cart */}
        <div className=" p-6 rounded-lg w-full lg:w-2/3 lg:mr-4 mb-4 lg:mb-0">
          <h2 className="text-5xl font-semibold mb-6 heading-font">
            Shopping Cart.
          </h2>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Product</span>
              <span className="font-semibold hidden md:inline">Size</span>
              <span className="font-semibold">Quantity</span>
              <span className="font-semibold">Total Price</span>
            </div>

            {isEmptyCart && (<img src={img} alt="image" />)}

            {all_products &&
              all_products.map((item) => {
                if (cartItem[item.id] > 0) {
                  return (
                    <div className="flex justify-between items-center border-b py-2">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded mr-2"
                        />

                        <div>
                          <p className="font-semibold max-w-44">{item.name}</p>
                          <p className="text-gray-500 text-sm">Black</p>
                        </div>
                      </div>
                      <select className="border rounded p-1 -ml-48 hidden md:inline">
                        <option>{item.size}</option>
                      </select>
                      <div className="flex items-center">
                        <button className="p-1">-</button>
                        <span className="mx-2">2</span>
                        <button className="p-1">+</button>
                      </div>
                      <span>${item.new_price * cartItem[item.id]}</span>
                    </div>
                  );
                }
              })}
          </div>
          <div className="flex justify-between mt-6">
            <Link to={"/"}>
              <button className="text-blue-500">
                &larr; Continue Shopping
              </button>
            </Link>
            <div className="text-right">
              <p className="font-semibold">Subtotal: ${getCartTotalAmount()}</p>
              <p className="font-semibold">Shipping: $0</p>
              <p className="font-bold text-xl">
                Total: ${getCartTotalAmount()}
              </p>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="gradient p-6 rounded-lg shadow-lg w-full lg:w-1/3 text-white">
          <h2 className="text-5xl heading-font font-semibold mb-6">
            Payment Info.
          </h2>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Payment Method</label>
            <div className="flex">
              <button className="flex-1 bg-blue-700 p-2 rounded mr-2">
                Credit Card
              </button>
              <button
                className="flex-1 bg-blue-700 p-2 rounded"
                onClick={makePayment}
              >
                Stripe
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Name on Card</label>
            <input type="text" className="w-full p-2 rounded text-gray-900" />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Card Number</label>
            <input
              type="text"
              className="w-full p-2 rounded text-gray-900"
              placeholder="**** **** **** 3271"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Expiration Date</label>
            <div className="flex">
              <input
                type="text"
                className="w-1/2 p-2 rounded mr-2 text-gray-900"
                placeholder="MM"
              />
              <input
                type="text"
                className="w-1/2 p-2 rounded text-gray-900"
                placeholder="YYYY"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">CVV</label>
            <input type="text" className="w-full p-2 rounded text-gray-900" />
          </div>
          <button className="w-full bg-blue-700 p-2 rounded text-white font-semibold">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
