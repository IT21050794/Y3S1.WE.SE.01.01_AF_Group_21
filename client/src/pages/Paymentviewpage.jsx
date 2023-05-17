import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Payment_form from "../components/Payment/payment_form/Payment_form";
import Payment_table from "../components/table/Payment_table"



function Paymentviewpage() {
    return(
        <div>
        <Navbar/>
        <Header/>
        <Payment_form/>
        <Payment_table/>
        <Footer/>
        </div>
    );
}

export default Paymentviewpage