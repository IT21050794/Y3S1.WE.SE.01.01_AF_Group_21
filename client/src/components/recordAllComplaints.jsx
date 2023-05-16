/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

function RecordAllComplaints(props){


    return (
    <div
        className="max-w-sm bg-white rounded-lg w-80 border border-gray-200 shadow-md dark:bg-gray-400 dark:border-gray-400 cuscardlist empcard">
        
        <div className="p-5">
                       
            <p className="mb-3 font-normal text-gray-400 dark:text-gray-700">
                Issue Location : {props.record.issueLocation}<br />
                Nature Of Complain : {props.record.natureOfComplain}<br />
                Severity : {props.record.severity}<br />
                Image : {props.record.image}<br />
                Description : {props.record.description}<br />
                Email : {props.record.email}<br />
                Status : {props.record.status}<br />

            </p>
            <a href = {`/update/${props.record.id}`}>
            <button
                class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Edit
            </button>
            </a>

            <button onClick={() => {
                props.deleteRecord(props.record.id);
            }}
                class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Delete
            </button>
        </div>
    </div>
    )
};
   

export {RecordAllComplaints};