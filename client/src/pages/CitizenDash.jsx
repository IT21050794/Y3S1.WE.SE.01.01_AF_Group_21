import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import "./citizenDash.css"

import { RecordAllComplaints } from "../components/recordAllComplaints.jsx";
import { RecordAllProposals } from "../components/recordAllProposals.jsx";


export default function CitizenDash() {
  
  const [records, setRecords] = useState([]);
  

  //const navigate = useNavigate();
  //const params = useParams();
  async function getRecords() {
    const response = await fetch(``, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    //body: JSON.stringify(data)
  }).catch((err) => {
    console.log(err);
  });

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }
    const records = await response.json();
    setRecords(records);
  }

  useEffect(() => {
   
    getRecords();

    return;
  }, [records.length]);

  function recordList() {
    return records.map((record) => {
      return (
        <>
        <RecordAllComplaints
          record={record}
          
          deleteRecord={() => deleteRecord(record.id)}

          key={record.id}
        />

        
        </>
      );
    });
  }

  async function deleteRecord(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ',
        cancelButton: 'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this! You will the Delete the This Employee Profile!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5007/api/Employee/${id}`, {
          method: "DELETE"
        }).then((d)=>{
           
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'This Citizen complaint has been deleted.',
          'success'
          
        )
          getRecords();
        });

       
        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'This Employee is Not Deleted:)',
          'info'
        )
      }
    })
  }
  

  
  return (
    <>
      <div className="DashContainer">
        <div className="innerContainer rounded">
          <div className="p-4 mb-4 text-xl text-blue-700 bg-blue-100 rounded-lg dark:bg-gray-400 dark:text-blue-900" role="alert">
            <span className="font-medium">{AllEmp}</span>
          </div>

          <div className="emplist">
            {recordList()}
          </div>
        </div>

      </div>
    </>
  )
}