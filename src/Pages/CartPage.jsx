import React from 'react';
import { ThemeProvider } from '../Context/ThemeContext.jsx';
import Navbar from '../Components/Navbar/Navbar.jsx';
import MyCart from '../Components/MyCart/MyCart.jsx';
import { Toaster } from 'react-hot-toast'
import Footer from '../Components/Footer/Footer.jsx';

const CartPage = () => {
  return (
    <ThemeProvider>
      <Toaster position='top-center'/>
        <Navbar />
        <MyCart />
        <Footer/>
    </ThemeProvider>
  );
}

export default CartPage;
