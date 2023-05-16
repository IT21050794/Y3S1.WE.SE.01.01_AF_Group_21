import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Approval_employee from "../components/Approval/Approval_employee"



function Approvaldash() {
    return(
        <div>
        <Navbar/>
        <Header/>
        <Approval_employee/>
        <Footer/>
        </div>
    );
}

export default Approvaldash