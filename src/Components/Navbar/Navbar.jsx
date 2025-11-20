import React from 'react';
import './Navbar.scss'
import logo from '../../assets/Elegantrends_log0.png'
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navlinks">
        <span>Home</span>
        <span>About Us</span>
        <span>Products<sub><IoIosArrowDown /></sub></span>
        <span>Contact Us</span>
      </div>
      <div className="auth">
        <IoIosSearch />
        <FiUser />

      </div>
    </div>
  );
}

export default Navbar;
