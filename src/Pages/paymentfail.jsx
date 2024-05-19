import React from 'react';
import { FaSadTear } from 'react-icons/fa'; 

const PaymentFail = () => {

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <FaSadTear size="5em" color="#ff6347" />
      <h1>Payment Failed</h1>
      <p>We encountered an issue processing your payment. Please try again.</p>
      <button onClick={() => window.location.href = '/'} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#ff6347', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Retry Payment
      </button>
    </div>
  );
};

export default PaymentFail;