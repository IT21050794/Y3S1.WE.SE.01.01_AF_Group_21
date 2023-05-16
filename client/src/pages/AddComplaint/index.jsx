/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import "./addComplaint.css";
//import { registerImage } from "../../asserts";

export default function AddComplaint() {
  const [issueLocation, setIssueLocation] = useState("");
  const [natureOfComplain, setNatureOfComplain] = useState("");
  const [severity, setSeverity] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    const data = {
      issueLocation: issueLocation,
      natureOfComplain: natureOfComplain,
      severity: severity,
      image: image,
      description: description,
      email: email,
    };

    const response = await fetch(`http://localhost:5007/api/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch((err) => {
      console.log(err);
    });

    const content = await response.json();
    console.log(content);

    Swal.fire({
      icon: "success",
      title: "Successful...",
      text: "Added Successfully !!",
      footer: '<a href="/citizenDash">Go to Citizen Dashboard</a>',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/citizenDash";
      }
    });
  }

  return (
    <>
      <section className="h-screen w-4/5">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img src="https://assets.markallengroup.com//article-images/223746/Complaint-AS_popup.jpg" className="w-full" alt="Sample image" />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <h2 class="text-5xl font-normal leading-normal mt-0 mb-2 text-blue-800 mb-5">
                Add Complaint
              </h2>

              <form onSubmit={onSubmit} autoComplete="off">
                <div className="mb-6">
                  <label
                    for="formFile"
                    class="form-label inline-block mb-2 text-gray-700"
                  >
                    Issue Location
                  </label>
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Issue Location"
                    onChange={(e) => {
                      setIssueLocation(e.target.value);
                    }}
                    // required
                  />
                </div>

                <div className="mb-6">
                  <label
                    for="formFile"
                    class="form-label inline-block mb-2 text-gray-700"
                  >
                    Nature Of Complain
                  </label>
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Nature Of Complain"
                    onChange={(e) => {
                      setNatureOfComplain(e.target.value);
                    }}
                    // required
                  />
                </div>

                <div className="mb-6">
                  <label
                    for="formFile"
                    class="form-label inline-block mb-2 text-gray-700"
                  >
                    Severity
                  </label>
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Severity"
                    onChange={(e) => {
                      setSeverity(e.target.value);
                    }}
                    // required
                  />
                </div>

                <div className="mb-6">
                  <label
                    for="formFile"
                    class="form-label inline-block mb-2 text-gray-700"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Image"
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                    // required
                  />
                </div>

                <div className="mb-6">
                  <label
                    for="formFile"
                    class="form-label inline-block mb-2 text-gray-700"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Description"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    // required
                  />
                </div>

                <div className="mb-6">
                  <label
                    for="formFile"
                    class="form-label inline-block mb-2 text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    // required
                  />
                </div>

                {/* <div className="mb-6">
                  <label for="formFile" class="form-label inline-block mb-2 text-gray-700">Status</label>
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Status"
                    onChange={(e) => { setStatus(e.target.value) }}
                    required

                  />
                </div> */}

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    ADD
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-10"></div>
    </>
  );
}
