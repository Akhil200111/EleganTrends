import React, { useContext, useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/Logo.png";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { FaCartShopping, FaRegUser  } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import {motion,AnimatePresence} from 'framer-motion'
import { ThemeContext } from "../../Context/ThemeContext";
import { MdOutlineDarkMode , MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  // console.log("Dropdown==",dropDown);
  const [showSidebar, setSidebar] = useState(false)
  const {theme, toggleTheme} = useContext(ThemeContext)
  // console.log("Theme == ", theme);

  const toggleBar = () =>{
    setSidebar(!showSidebar)
  }

  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="" style={{ width: "80px" }} />
      </div>
      <div className="navlinks">
      <Link to='/' className="link"><span>Home</span></Link>
       <Link to='/about' className="link"><span>About Us</span></Link> 
        <div className="dropdown" 
         onMouseEnter={() => setDropDown(true)}
         onMouseLeave={() => setDropDown(false)}
        >
          <span>
          Products <sub><IoIosArrowDown /></sub>
        </span>
        <AnimatePresence>
          {dropDown && (
          <motion.div className="dropdown-menu"
            initial={{opacity:0, y:-100}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:-100}}
            transition={{duration:0.5}}
          >
            <span>Electronics</span>
            <span>Clothing</span>
            <span>Accessories</span>
            <span>Groceries</span>
          </motion.div>
        )}
        </AnimatePresence>
        </div>
        <span>Contact Us</span>
      </div>

      <div className="auth">
        <IoIosSearch className="search-icon"/>
        <p><FaRegUser  className="user-icon"/>Account</p>
       <Link to='/cart' className="link"> <FaCartShopping  className="cartItems"/></Link> 
        <span onClick={toggleTheme}>{theme == 'light'?<MdOutlineDarkMode className="icon"/>:<MdLightMode className="icon"/>}</span>
      </div>
      

      <div className="hamburger" onClick={toggleBar}>
         <FaBars className="bar-icon"/>
         
      </div>
       {showSidebar && <motion.div className="toggleNav"
       initial={{opacity:0, x:100}}
       animate={{opacity:1, x:0}}
       exit={{opacity:0, x:100}}
       transition={{duration:.4,}}
       >

        <span>Home</span>
        <span>About Us</span>
        <div className="dropdown" 
         onMouseEnter={() => setDropDown(true)}
         onMouseLeave={() => setDropDown(false)}
        >
          <span>
          Products <sub><IoIosArrowDown /></sub>
        </span>
        
          {dropDown && (
          <div className="toggle-dropdown-menu"
           
          >
            <span>Electronics</span>
            <span>Clothing</span>
            <span>Accessories</span>
            <span>Groceries</span>
          </div>
        )}
        
        </div>
        <span>Contact Us</span>
        
        <p><IoIosSearch className="search-icon"/>Search</p>
        
        <p><FaRegUser className="user-icon"/>Account</p>
         
         

       </motion.div>

       }
    </div>
  );
};

export default Navbar;
