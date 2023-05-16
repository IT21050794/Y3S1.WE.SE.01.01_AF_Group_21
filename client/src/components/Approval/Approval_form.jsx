import React, { useState } from "react";
import "./approval_form.css";

function ApprovalForm() {
  const [formData, setFormData] = useState({
    approvalType: "",
    document: null,
    citizenEmail: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const approvalData = JSON.parse(localStorage.getItem("approvalFormData")) || [];
    approvalData.push(formData);
    localStorage.setItem("approvalFormData", JSON.stringify(approvalData));
    setFormData({
      approvalType: "",
      document: null,
      citizenEmail: "",
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = name === "document" ? event.target.files[0] : event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section id="services" className="py-24">
      <div className="container px-4">
        <div className="text-center">
          <h2 className="mb-12">
            <div className="mainscreen">
              <h2 className="text-slate-500 text-3xl mt-11">
                APPROVAL REQUEST FORM
              </h2>
              <div className="card">
                <div className="leftside bg-gray-800">
                  <img
                    src="https://www.onlanka.com/wp-content/uploads/2019/06/sri-lanka-government-state-logo.jpg"
                    className="product"
                    alt="Shoes"
                  />
                </div>
                <div className="rightside">
                  <form onSubmit={handleSubmit}>
                    <p className="text-gray-950 text-lg">Approval Type</p>
                    <input
                      type="text"
                      className="inputbox"
                      name="approvalType"
                      value={formData.approvalType}
                      onChange={handleChange}
                      required=""
                    />
                    <p className="text-gray-950 text-lg">Document</p>
                    <input
                      type="file"
                      className="inputbox"
                      name="document"
                      onChange={handleChange}
                      required=""
                    />
                    <p className="text-gray-950 text-lg">Citizen Email</p>
                    <input
                      type="email"
                      className="inputbox"
                      name="citizenEmail"
                      value={formData.citizenEmail}
                      onChange={handleChange}
                      required=""
                    />
                    <p></p>
                    <button type="submit" className="button">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default ApprovalForm;
