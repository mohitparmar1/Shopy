import React from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/paymentsuccess");
  };

  return (
    <div className="gradient p-6 rounded-lg shadow-lg w-full lg:w-1/3 text-white">
      <h2 className="text-5xl heading-font font-semibold mb-6">Payment Info.</h2>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Payment Method</label>
        <div className="flex">
          <button className="flex-1 bg-blue-700 p-2 rounded mr-2">
            Credit Card
          </button>
          <button className="flex-1 bg-blue-700 p-2 rounded">
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
      <button className="w-full bg-blue-700 p-2 rounded text-white font-semibold" onClick={handleCheckout}>
        Check Out
      </button>
    </div>
  );
};

export default Payment;
