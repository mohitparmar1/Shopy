import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const [cardDetails, setCardDetails] = useState({
        name: '',
        number: '',
        expiry: '',
        cvv: '',
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        setCardDetails({
            ...cardDetails,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Payment Details:', cardDetails);
        navigate('/user/paymentsuccess');
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="p-6 rounded-lg shadow-lg bg-white w-full max-w-md">
                <h2 className="text-3xl font-semibold mb-6">Payment Info</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block font-semibold mb-1">Name on Card</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={cardDetails.name} 
                            onChange={handleChange} 
                            className="w-full p-2 border rounded" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-1">Card Number</label>
                        <input 
                            type="text" 
                            name="number" 
                            value={cardDetails.number} 
                            onChange={handleChange} 
                            className="w-full p-2 border rounded" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-1">Expiration Date</label>
                        <input 
                            type="text" 
                            name="expiry" 
                            value={cardDetails.expiry} 
                            onChange={handleChange} 
                            className="w-full p-2 border rounded" 
                            placeholder="MM/YY" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-1">CVV</label>
                        <input 
                            type="text" 
                            name="cvv" 
                            value={cardDetails.cvv} 
                            onChange={handleChange} 
                            className="w-full p-2 border rounded" 
                            required 
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded font-semibold">
                        Submit Payment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Payment;
