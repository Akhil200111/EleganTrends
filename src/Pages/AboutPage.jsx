import React from 'react';
import { ThemeProvider } from '../Context/ThemeContext.jsx';
import Navbar from '../Components/Navbar/Navbar.jsx';
import Footer from '../Components/Footer/Footer.jsx';

const AboutPage = () => {
  return (
    <ThemeProvider>
        <Navbar/>
      About Page
       <Footer/>
    </ThemeProvider>
  );
}

export default AboutPage;
