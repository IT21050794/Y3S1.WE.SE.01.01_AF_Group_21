import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import AddComplaint from "./pages/AddComplaint/index";
import CitizenDash from "./pages/CitizenDash";
import UpdateComplaint from "./pages/UpdateComplaint/index";
import AddProposal from "./pages/AddProposal/index";
import CitizenHome from "./pages/citizenHome/CitizenHome";
import RecordViewAllComplaints  from "./pages/EmployeeView/EmpComplaintView";
import RecordViewAllProposals from "./pages/EmployeeView/EmpProposalView";



function App() {
  return (
    <>      
      <BrowserRouter>
        <Routes>
          <Route path="/addComplaint" element={<AddComplaint />} />
          <Route path="/citizenDash" element={<CitizenDash />} />
          <Route path="/updateComplaint/:id" element={<UpdateComplaint />} />
          <Route path="/addProposal" element={<AddProposal />} />
          <Route path="/citizenHome" element={<CitizenHome />} />
          <Route path="/empComplaintView" element={<RecordViewAllComplaints />} />
          <Route path="/empProposalView" element={<RecordViewAllProposals />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
