import React from 'react';

const PaymentSuccess = () => {
  const successPageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    color: '#4BB543',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={successPageStyle}>
      <h1>Payment Successful!</h1>
      <p>Your order has been placed and is on its way to being processed.</p>
      <button style={buttonStyle} onClick={() => window.location.href = '/'}>Continue Shopping</button>
    </div>
  );
}

export default PaymentSuccess;