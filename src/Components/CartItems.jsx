import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import removeIcon from "../assets/cart_cross_icon.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import img from '../assets/Empty_Cart_img.png';

const CartItems = () => {
  const navigate = useNavigate();
  const {
    getCartTotalAmount,
    all_products,
    cartItem,
    RemoveFromCart,
    AddToCart,
  } = useContext(ShopContext);

  const isEmptyCart = Object.keys(cartItem).length === 0;

  const handleProceedToPayment = () => {
    navigate('/payment');
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
            {isEmptyCart ? (
              <img src={img} alt="Empty Cart" />
            ) : (
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
                return null;
              })
            )}
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
