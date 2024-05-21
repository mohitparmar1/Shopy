import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import removeIcon from "../assets/cart_cross_icon.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {loadStripe} from '@stripe/stripe-js';
import img from "../assets/emptycart_img.png"

const CartItems = () => {
  const {
    getCartTotalAmount,
    all_products,
    cartItem,
    RemoveFromCart,
    AddToCart,
  } = useContext(ShopContext);

  const isEmptyCart =  getCartTotalAmount()=== 0;

  //payment gateway
  const makePayment = async()=>{
    const stripe = await loadStripe("Enter Your Stripe Public Key Here");

    const filteredProducts = all_products.filter(product => cartItem[product.id] >0);
     console.log(filteredProducts)
    const body = {
        products:filteredProducts,
        cartItem:cartItem
    }

    const headers = {
        "Content-Type":"application/json"
    }
    const response = await fetch("http://localhost:7000/api/create-checkout-session",{
        method:"POST",
        headers:headers,
        body:JSON.stringify(body)
    });
    if (!response.ok) {
      const errorText = await response.text(); // or response.json() if the server returns JSON
      console.error('Error response:', errorText);
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const session = await response.json();

    const result =  await stripe.redirectToCheckout({
        sessionId:session.id
    });
    
    if(result.error){
        console.log(result.error);
    }
}
console.log(all_products);
console.log(cartItem)
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
         
      { isEmptyCart&&(
        <div>
              <img
                    src={img}
                    className="m-auto flex-initial"
                  />
              </div>
      )}

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

                <p className="w-13">
                  <RemoveIcon onClick={() => RemoveFromCart(item.id)} />
                  <span className="bg-gray-300 rounded-md text-lg text-center p-1 pr-2 m-2"> {cartItem[item.id]}</span>
                  <AddIcon onClick={() => AddToCart(item.id)} />
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
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"  onClick={makePayment}>
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
