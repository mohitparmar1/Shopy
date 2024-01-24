import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import removeIcon from "../assets/cart_cross_icon.png";
const CartItems = (props) => {
  const { all_products, CartItems, RemoveFromCart } = useContext(ShopContext);
  return (
    <div className="w-full h-screen">
      <div className="">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        <img src="" alt="" />
        <p>Product Title</p>
        <p>Price</p>
        <button>Quantity</button>
        <p>Total</p>
        <img
          src={removeIcon}
          onClick={() => {
            RemoveFromCart();
          }}
          alt=""
        />
      </div>
      <hr />
    </div>
  );
};

export default CartItems;
