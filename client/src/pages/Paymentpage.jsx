import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Payment_information from "../components/Payment/payment_form/Payment_information";
import Payment_table from "../components/table/Payment_table"


function Paymentpage() {
    return(
        <div>
        <Navbar/>
        <Header/>
        <Payment_information/>
        <Footer/>
        </div>
    );
}

export default Paymentpage