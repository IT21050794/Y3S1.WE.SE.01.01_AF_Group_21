  import React from "react";
  import "./payment_form.css"

  function Payment_form() {
      return(
    <section id="services" className="py-24">
    <div className="container px-4">
      <div className="text-center">
        <h2 className="mb-12">
        <div className="mainscreen">
        <h2 className="text-slate-500 text-3xl mt-11">PAYMENT PROCESS</h2>
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
          <p className="text-gray-950 text-lg">Cardholder Name</p>
          <input type="text" className="inputbox" name="name" required="" />
          <p className="text-gray-950 text-lg">Card Number</p>
          <input
            type="number"
            className="inputbox"
            name="card_number"
            id="card_number"
            required=""
          />
          <p className="text-gray-950 text-lg">Card Type</p>
          <select
            className="inputbox"
            name="card_type"
            id="card_type"
            required=""
          >
            <option value="">--Select a Card Type--</option>
            <option value="Visa">Visa</option>
            <option value="RuPay">RuPay</option>
            <option value="MasterCard">MasterCard</option>
          </select>
          <div className="expcvv">
            <p className="expcvv_text text-gray-950 text-lg">Expiry</p>
            <input
              type="date"
              className="inputbox"
              name="exp_date"
              id="exp_date"
              required=""
            />
            <p className="expcvv_text2 text-gray-950 text-lg">CVV</p>
            <input
              type="password"
              className="inputbox"
              name="cvv"
              id="cvv"
              required=""
            />
          </div>
          <p />
          <button type="submit" className="button">
            CheckOut
          </button>
        </form>
      </div>
    </div>
  </div>
        </h2>
      </div>
      <div className="flex flex-wrap">{/* Services item */}</div>
    </div>
  </section>
      );
  }

  export default Payment_form