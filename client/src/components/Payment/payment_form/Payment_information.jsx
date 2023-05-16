  import "./payment_form.css"
  import React, { useState } from "react";

  function Payment_information() {
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
    
      return(
          <section id="services" className="py-24">
          <div className="container px-4">
            <div className="text-center">
              <h2 className="mb-12">
              <div className="mainscreen">
              <h2 className="text-slate-500 text-3xl mt-11">PAYMENT INFORMATION</h2>
          <div className="card ">
            <div className="leftside bg-gray-800">
              <img
                src="https://www.onlanka.com/wp-content/uploads/2019/06/sri-lanka-government-state-logo.jpg"
                className="product"
                alt="Shoes"
              />
            </div>
            <div className="rightside">
              <form action="">
      
                <p className="text-gray-950 text-lg">Payment Reason</p>
                <select name="payment_reason" class="inputbox" required>
          <option value="">Select a reason</option>
          <option value="taxes">Taxes</option>
          <option value="licenses">Licenses</option>
          <option value="permits">Permits</option>
        </select>
                <p className="text-gray-950 text-lg">Payment Amount</p>
                <input
                  type="number"
                  className="inputbox"
                  name="card_number"
                  id="card_number"
                  required=""
                />
                <p className="text-gray-950 text-lg">Scanned Photo Of The Document</p>
                <input type="file"/>
                <div className="expcvv">
                  <p className="expcvv_text">Date</p>
                  <input
                    type="date"
                    className="inputbox"
                    name="exp_date"
                    id="exp_date"
                    required=""
                  />
                </div>
                <p />
                <p />
              </form>
            </div> 
          </div>
          <h2 className="text-slate-500 text-3xl mt-11">
                  PAYMENT METHODS
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
          <input
            type="checkbox"
            onChange={() => handleSelect(index)}
            checked={selectedRow === index}
          />
        </td>
        <td>
          <button onClick={() => handleDelete(index)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >Delete</button>
        </td>
      </tr>
    ))}
    <tr>
      <td colSpan="6" className="">
        <button type="submit" className=" bg-blue-300 text-blue font-bold py-2 px-4 rounded-full content-center">
          Submit
        </button>
      </td>
    </tr>
  </tbody>
                </table>
        </div>
              </h2>
            </div>
            <div className="flex flex-wrap">{/* Services item */}</div>
          </div>
        </section>
      );
  }

  export default Payment_information