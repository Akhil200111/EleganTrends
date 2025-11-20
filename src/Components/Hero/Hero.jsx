import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiFramer, SiLinear, SiFigma, SiSailfishos } from "react-icons/si";
import "./Hero.scss";

import bg1 from "../../assets/Herowallpaper1-min.jpg";
import bg2 from "../../assets/Herowallpaper2-min.jpg";
import bg3 from "../../assets/Herowallpaper3-min.jpg";
import bg4 from "../../assets/Herowallpaper4-min.jpg";


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bg = [bg1, bg2, bg3, bg4];
  const heading = [
    "Level Up Your Styles",
    "Upgrade Your Vibe",
    "Elevate Everyday Elegance",
    "Discover Refined Style",
  ];
  const brands = [
    <>
      <SiFramer />
      <span>Framer</span>
    </>,
    <>
      <SiLinear />
      <span>Linear</span>
    </>,
    <>
      <SiFigma />
      <span>Figma</span>
    </>,
    <>
      <SiSailfishos />
      <span>Sailfishos</span>
    </>,
  ];
  // const brand = [Amiparis,Gucci, Dior, Lv];

  useEffect(() => {
    const intervel = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bg.length);
    }, 2000);
    return () => clearInterval(intervel);
  }, []);

  // console.log("Current Slide", currentSlide);
  return (
    <div
      className="Hero"
      style={{ backgroundImage:`linear-gradient(rgba(200, 200, 9, 0.258), rgba(0, 128, 0, 0.13),rgba(45, 40, 40, 0.11)),url(${bg[currentSlide]})`,
               backgroundSize:'cover',
               backgroundRepeat:'no-repeat',
               backgroundPosition:'center',
    }}
    >
      <div className="first">
        <h3>Summer Collections</h3>
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentSlide}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.75, ease: "linear" }}
          >
            {heading[currentSlide]}
          </motion.h1>
        </AnimatePresence>
      </div>

      <div className="second">
        <div className="brand">
          {brands.map((item, index) => (
            <motion.div
              animate={{
                scale: currentSlide == index ? 1.15 : 1,
                y: currentSlide == index ? -10 : 0,
                // backgroundColor:"#837D7D"
              }}
              transition={{
                duration: 0.25,
                stiffness: 300,
              }}
              key={index}
            >
              {item}
            </motion.div>
          ))}
        </div>
        <p>We ensure our customers have the best shopping experience</p>
        <div className="indicators">
          {bg.map((item, index) => (
            <button key={index}
              className={`${currentSlide == index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
