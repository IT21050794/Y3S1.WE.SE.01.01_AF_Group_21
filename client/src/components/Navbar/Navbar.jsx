import React from 'react';
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className='mainnav'>
    <div className="nav-wrapper">
  <div className="logo-container">
    <img className="logo" src="../../../assets/img/mylogo/logo.png" alt="Logo" />
  </div>
  <nav>
    <input className="hidden" type="checkbox" id="menuToggle" />
    <label className="menu-btn" htmlFor="menuToggle">
      <div className="menu" />
      <div className="menu" />
      <div className="menu" />
    </label>
    <div className="nav-container">
      <ul className="nav-tabs">
        <li className="nav-tab" href="./">Home</li>
        <li className="nav-tab"><a href="./payment">Payment</a></li>
        <li className="nav-tab" href="./">Tender</li>
        <li className="nav-tab" href="./">Complaints</li>
        <li className="nav-tab" href="./">Approval</li>
        <li className="nav-tab" href="./">About us</li>
        <li className="nav-tab" href="./">Contact us</li>
      </ul>
    </div>
  </nav>
</div>
    </div>


</>
  );
};

export default Navbar;
