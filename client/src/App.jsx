import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage"
import Paymentpage from "./pages/Paymentpage"
import Paymentviewpage from './pages/Paymentviewpage';
import Approval from "./pages/Approval"
import Approvaldash from "./pages/Approvaldash"
import Paymentdash from "./pages/Paymentdash"
import AddComplaint from "./pages/AddComplaint/index";
import CitizenDash from "./pages/CitizenDash";
import UpdateComplaint from "./pages/UpdateComplaint/index";
import AddProposal from "./pages/AddProposal/index";
import CitizenHome from "./pages/citizenHome/CitizenHome";
import RecordViewAllComplaints  from "./pages/EmployeeView/EmpComplaintView";
import RecordViewAllProposals from "./pages/EmployeeView/EmpProposalView";
import "./App.css";


function App() {
  return (
    <>      
      <BrowserRouter>
        <Routes>
          <Route path="/paymentdash" element={<Paymentdash />} /> 
          <Route path="/approval" element={<Approval />} />
          <Route path="/approvaldash" element={<Approvaldash />} />
          <Route path="/payment" element={<Paymentpage />} />
          <Route path="/paymentview" element={<Paymentviewpage />} />
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
