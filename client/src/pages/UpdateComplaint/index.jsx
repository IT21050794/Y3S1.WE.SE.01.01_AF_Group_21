/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

// import { registerImage } from "../../asserts";

export default function UpdateComplaint() {
  const [id, setId] = useState("");
  const [issueLocation, setIssueLocation] = useState("");
  const [natureOfComplain, setNatureOfComplain] = useState("");
  const [severity, setSeverity] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const [form, setForm] = useState({
    id: "",
    issueLocation: "",
    natureOfComplain: "",
    severity: "",
    image: "",
    description: "",
    email: "",
    status: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5007/api/Employee/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        //navigate("/");
        return;
      }

      console.log(record, "data");

      setId(record.id);
      setIssueLocation(record.issueLocation);
      setNatureOfComplain(record.natureOfComplain);
      setSeverity(record.severity);
      setImage(record.image);
      setDescription(record.description);
      setEmail(record.email);
      setStatus(record.status);

      setForm(record);
    }
    fetchData();

    return;
  }, [params.id, navigate]);

  async function onSubmit(e) {
    e.preventDefault();

    const data = {
      id: id,
      issueLocation: issueLocation,
      natureOfComplain: natureOfComplain,
      severity: severity,
      image: image,
      description: description,
      email: email,
      status:status,
    };

    console.log(data);

    axios
      .put(`http://localhost:5007/api/Employee/${params.id}`, data)
      .then(function (response) {
        console.log("Complaint details updated successfully:", response.data);
      })
      .catch(function (error) {
        console.log("Failed to update Complaint details:", error);
      });

    Swal.fire({
      icon: "success",
      title: "Successful...",
      text: "Updated Successfully !!",
      footer: '<a href="/dash">Go to Employee Dashboard</a>',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/dash";
      }
    });
  }

  return (
    <>
      <section className="h-screen w-4/5">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img src={registerImage} className="w-full" alt="Sample image" />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <h2 class="text-5xl font-normal leading-normal mt-0 mb-2 text-blue-800 mb-5">
                Update Complaint
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
                    defaultValue={form.issueLocation}
                    onChange={(e) => {
                      setIssueLocation(e.target.value);
                    }}
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
                    defaultValue={form.natureOfComplain}
                    onChange={(e) => {
                      setNatureOfComplain(e.target.value);
                    }}
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
                    defaultValue={form.severity}
                    onChange={(e) => {
                      setSeverity(e.target.value);
                    }}
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
                    type="image"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Image"
                    defaultValue={form.image}
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
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
                    defaultValue={form.description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
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
                    defaultValue={form.email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-6">
                  <label
                    for="formFile"
                    class="form-label inline-block mb-2 text-gray-700"
                  >
                    Status
                  </label>
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Status"
                    defaultValue={form.status}
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  />
                </div>

                <div className="text-center lg:text-left">
                  <button
                    onClick={onSubmit}
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Update
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
