import React from 'react';
import { ThemeProvider } from '../Context/ThemeContext.jsx';
import Navbar from '../Components/Navbar/Navbar.jsx';
import Productinfo from '../Components/ProductInfo/ProductInfo.jsx';
import Footer from '../Components/Footer/Footer.jsx';

const DynamicProduct = () => {
  return (
    <ThemeProvider>
        
        <Navbar />
        <Productinfo />
        <Footer/>
    </ThemeProvider>
  );
}

export default DynamicProduct;
