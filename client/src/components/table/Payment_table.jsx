import React, { useState } from "react";
import "./payment_table.css";

function Payment_table() {
  const [paymentData, setPaymentData] = useState(
    JSON.parse(localStorage.getItem("paymentFormData")) || []
  );
  const [selectedRow, setSelectedRow] = useState(-1);

  const handleDelete = (index) => {
    const newData = [...paymentData];
    newData.splice(index, 1);
    setPaymentData(newData);
    localStorage.setItem("paymentFormData", JSON.stringify(newData));
    setSelectedRow(-1); // reset the selected row
  };

  const handleSelect = (index) => {
    setSelectedRow(index);
  };

  return (
    <section id="services" className="py-24">
      <div className="container px-4">
        <div className="text-center">
          <h2 className="mb-12">
            <div className="">
              <h2 className="text-slate-500 text-3xl mt-11">
                PAYMENT DETAILS
              </h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Cardholder Name</th>
                    <th>Card Number</th>
                    <th>Card Type</th>
                    <th>Expiry Date</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {paymentData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.cardNumber}</td>
                      <td>{data.cardType}</td>
                      <td>{data.expDate}</td>
                      <td>
                        <button onClick={() => handleDelete(index)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Payment_table;
