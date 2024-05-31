import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import removeIcon from "../assets/cart_cross_icon.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";

const CartItems = () => {
  // Initialize the useNavigate hook
  const navigate = useNavigate();
  
  const {
    getCartTotalAmount,
    all_products,
    cartItem,
    RemoveFromCart,
    AddToCart,
  } = useContext(ShopContext);

  // Function to handle navigation to the payment page
  const handleProceedToPayment = () => {
    navigate('/payment');
  };

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
      const errorText = await response.text();
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

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row w-full lg:w-3/4">
        <div className="p-6 rounded-lg w-full lg:w-2/3 lg:mr-4 mb-4 lg:mb-0">
          <h2 className="text-5xl font-semibold mb-6 heading-font">
            Shopping Cart.
          </h2>
          <div className="mb-4">
            <div className="flex justify-between mb-4 ml-25">
              <span className="font-semibold">Product</span>
              <span className="font-semibold hidden md:inline">Size</span>
              <span className="font-semibold">Quantity</span>
              <span className="font-semibold">Total Price</span>
            </div>
            {all_products &&
              all_products.map((item) => {
                if (cartItem[item.id] > 0) {
                  return (
                    <div className="flex justify-between items-center border-b py-2" key={item.id}>
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
                      <select className="border rounded p-1 -ml-28 hidden md:inline">
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
              <button className="text-blue-500">&larr; Continue Shopping</button>
            </Link>
            <div className="text-right">
              <p className="font-semibold">Subtotal: ${getCartTotalAmount()}</p>
              <p className="font-semibold">Shipping: $0</p>
              <p className="font-bold text-xl">Total: ${getCartTotalAmount()}</p>
              <button
                className="bg-blue-500 text-white p-2 rounded mt-4 ml-100"
                onClick={handleProceedToPayment}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
