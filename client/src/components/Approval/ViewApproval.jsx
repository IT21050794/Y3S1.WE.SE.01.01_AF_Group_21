import React, { useEffect, useState } from "react";

function ViewApproval() {
  const [approvalData, setApprovalData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("approvalFormData")) || [];
    setApprovalData(data);
  }, []);

  const handleAccept = (index) => {
    const updatedData = [...approvalData];
    updatedData[index].status = "Accepted";
    localStorage.setItem("approvalFormData", JSON.stringify(updatedData));
    setApprovalData(updatedData);
  };

  const handleDeny = (index) => {
    const updatedData = [...approvalData];
    updatedData[index].status = "Deny";
    localStorage.setItem("approvalFormData", JSON.stringify(updatedData));
    setApprovalData(updatedData);
  };

  return (
    <div>
      <h2 className="text-slate-500 text-3xl mt-11 text-center">
        APPROVAL REQUEST DETAILS
      </h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No.</th>
            <th>Approval Type</th>
            <th>Document</th>
            <th>Citizen Email</th>
            <th>Status</th>
            <th>Approval Document</th>
          </tr>
        </thead>
        <tbody>
          {approvalData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.approvalType}</td>
              <td>{data.documentName}</td>
              <td>{data.citizenEmail}</td>
              <td>{data.status}</td>
              <td>{data.approvalDocument}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewApproval;
