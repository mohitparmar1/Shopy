import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black dark:bg-black dark:text-white">
      <h1 className="text-5xl font-semibold mb-4">Payment Successful!</h1>
      <p className="text-xl mb-8">Thank you for your purchase.</p>
      <Link to="/">
        <button className="bg-blue-500 text-white p-3 rounded">Go to Home</button>
      </Link>
    </div>
  );
};

export default PaymentSuccess;
