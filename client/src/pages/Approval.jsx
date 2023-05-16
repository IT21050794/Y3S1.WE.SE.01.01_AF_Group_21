import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Approval_form from "../components/Approval/Approval_form"
import ViewApproval from "../components/Approval/ViewApproval"


function Approval() {
    return(
        <div>
        <Navbar/>
        <Header/>
        <Approval_form/>
        <ViewApproval/>
        <Footer/>
        </div>
    );
}

export default Approval