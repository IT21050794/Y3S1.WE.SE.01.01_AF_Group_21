/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import "./addProposal.css";
//import { registerImage } from "../../asserts";

export default function AddProposal() {

  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState("");
  const [scope, setScope] = useState("");
  const [advantages, setAdvantages] = useState("");
  const [description, setDescription] = useState("");
  const [pdf, setPdf] = useState("");
  const [email, setEmail] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    const data = {
      title: title,
      goal: goal,
      scope: scope,
      advantages: advantages,
      description: description,
      pdf: pdf,
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
              <img src="https://media.istockphoto.com/id/480599167/vector/ballot-box.jpg?s=170667a&w=0&k=20&c=s55MHW5qE1iSW0ER1m_JOfjZHzUFoP3jbdI5pyf450s=" className="w-full" alt="Sample image" />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <h2 class="text-5xl font-normal leading-normal mt-0 mb-2 text-blue-800 mb-5">
                Add Proposal (Suggestions)
              </h2>

              <form onSubmit={onSubmit} autoComplete="off">
                <div className="mb-6">
                  <label
                    for="formFile"
                    class="form-label inline-block mb-2 text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Title"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    // required
                  />
                </div>

                <div className="mb-6">
                  <label
                    for="formFile"
                    class="form-label inline-block mb-2 text-gray-700"
                  >
                    Goal
                  </label>
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Goal"
                    onChange={(e) => {
                      setGoal(e.target.value);
                    }}
                    // required
                  />
                </div>

                <div className="mb-6">
                  <label
                    for="formFile"
                    class="form-label inline-block mb-2 text-gray-700"
                  >
                    Scope
                  </label>
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Scope"
                    onChange={(e) => {
                      setScope(e.target.value);
                    }}
                    // required
                  />
                </div>

                <div className="mb-6">
                  <label
                    for="formFile"
                    class="form-label inline-block mb-2 text-gray-700"
                  >
                    Advantages
                  </label>
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Advantages"
                    onChange={(e) => {
                      setAdvantages(e.target.value);
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
                    Upload Pdf
                  </label>
                  <input
                    type="file"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Upload Pdf"
                    onChange={(e) => {
                      setPdf(e.target.value);
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
