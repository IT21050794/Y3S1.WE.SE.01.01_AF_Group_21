import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Animation from "../components/header/Animation";
import Card from "../components/card/card";
import Imageslider from "../components/header/imageslider";


function Home() {
    return(
        <div>
        <Navbar/>
        <Animation/>
        <Card/>        
        <Footer/>
        </div>
    );
}

export default Home;