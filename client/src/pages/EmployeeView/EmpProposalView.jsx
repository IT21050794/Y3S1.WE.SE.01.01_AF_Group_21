/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./index.css";

export default function RecordViewAllProposals(props) {
  return (
    <>
      <div className="DashContainer">
        <div className="innerContainer rounded">
          <div
            className="p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-gray-400 dark:text-blue-900"
            role="alert"
          >
            <span className="font-medium">All submitted proposals by Citizens</span>
          </div>

          <div className="emplist">
            <div className="max-w-sm bg-white rounded-lg w-80 border border-gray-200 shadow-md dark:bg-gray-400 dark:border-gray-400 cuscardlist empcard">
              <div className="p-5">
                <p className="mb-3 font-normal text-gray-400 dark:text-gray-700">
                  Title : New Park Proposal
                  <br />
                  Goal : To create a new park for the community
                  <br />
                  Scope : Within the city limits
                  <br />
                  Advantages : Provides more green space and recreational opportunities for the community
                  <br />
                  Description : The park will have a playground, picnic areas, and a walking trail.
                  <br />
                  Pdf : 
                  <br />
                  Email : jane@gmail.com
                  <br />
                  Status : pending
                  <br />
                </p>
                <a href={``}>
                  <button class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Update Status
                  </button>
                </a>

                {/* <button
                  // onClick={() => {
                  //   props.deleteRecord(props.record.id);
                  // }}
                  class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Delete
                </button> */}
              </div>
            </div>

            <div className="max-w-sm bg-white rounded-lg w-80 border border-gray-200 shadow-md dark:bg-gray-400 dark:border-gray-400 cuscardlist empcard">
              <div className="p-5">
                <p className="mb-3 font-normal text-gray-400 dark:text-gray-700">
                  Title : Trivia question tournament for students
                  <br />
                  Goal : To improve the knowledge of students
                  <br />
                  Scope : Within the city
                  <br />
                  Advantages : Students will be able to learn new things
                  <br />
                  Description : The tournament will be held at the city hall
                  <br />
                  Pdf : 
                  <br />
                  Email : supun22@gmail.com
                  <br />
                  Status : pending
                  <br />
                </p>
                <a href={``}>
                  <button class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Update Status
                  </button>
                </a>

                {/* <button
                  // onClick={() => {
                  //   props.deleteRecord(props.record.id);
                  // }}
                  class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Delete
                </button> */}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
}
