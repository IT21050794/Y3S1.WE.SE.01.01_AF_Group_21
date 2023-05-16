import React from "react";

function Payment_employee({ paymentData }) {
  const generatePaymentId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  return (
    <div>
      <h2>Payment Data</h2>
      <table>
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Cardholder Name</th>
            <th>Card Number</th>
            <th>Card Type</th>
            <th>Expiry Date</th>
            <th>Payment Reason</th>
            <th>Payment Amount</th>
            <th>Scanned Photo</th>
          </tr>
        </thead>
        <tbody>
          {paymentData.map((data, index) => (
            <tr key={index}>
              <td>{generatePaymentId()}</td>
              <td>{data.name}</td>
              <td>{data.cardNumber}</td>
              <td>{data.cardType}</td>
              <td>{data.expDate}</td>
              <td>{data.paymentReason}</td>
              <td>{data.paymentAmount}</td>
              <td>{data.scannedPhoto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Payment_employee;
