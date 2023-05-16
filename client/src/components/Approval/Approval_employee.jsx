import React, { useEffect, useState } from "react";

function Approval_employee() {
const [approvalData, setApprovalData] = useState([]);

useEffect(() => {
const data = JSON.parse(localStorage.getItem("approvalFormData")) || [];
setApprovalData(data);
}, []);

const handleAccept = (index) => {
const updatedData = [...approvalData];
updatedData[index].status = "Accepted";
setApprovalData(updatedData);
localStorage.setItem("approvalFormData", JSON.stringify(updatedData));
};

const handleDeny = (index) => {
const updatedData = [...approvalData];
updatedData[index].status = "Denied";
setApprovalData(updatedData);
localStorage.setItem("approvalFormData", JSON.stringify(updatedData));
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
<th>Action</th>
<th>Approved Doc</th>
</tr>
</thead>
<tbody>
{approvalData.map((data, index) => (
<tr key={index}>
<td>{index + 1}</td>
<td>{data.approvalType}</td>
<td>{data.documentName}</td>
<td>{data.citizenEmail}</td>
<td>
{data.status ? (
data.status
) : (
<>
<button
className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
onClick={() => handleAccept(index)}
>
Accept
</button>
<button
className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
onClick={() => handleDeny(index)}
>
Deny
</button>
</>
)}
</td>
<td>
<input
                      type="file"
                      className="inputbox"
                      name="document"
                      required=""
                    />
</td>
</tr>
))}
</tbody>
</table>
</div>
);
}

export default Approval_employee;