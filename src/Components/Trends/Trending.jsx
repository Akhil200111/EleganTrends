import React, { useState } from "react";
import "./Trending.scss";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../ProductCard/ProductCart.jsx";
// import Tshirt from '../../assets/Products/Tshirt.png'
import Products from "../../Data/Products.js";
import { useSelector } from "react-redux";


const Trending = () => {
  

  const { cartItem, cartCount } = useSelector((state) => state.Cart);
  // console.log("MY Cart Items ==", cartItem);

  const [selectedCategory, setSelectedCategory] = useState("New arrivals");
  const Categories = [
    "New arrivals",
    "Best seller",
    "Summer collections",
    "Accessories",
    "Essentials",
  ];

  const filteredProducts = Products.filter(
    (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <div className="container">
      <h3>Trending Collections</h3>
      <h1>
        Our <span>Trending</span> Models
      </h1>
      {/* Category Tabs */}
      <div className="options">
        {Categories.map((category, index) => (
          
            <span
              key={index}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </span>
        ))}

        {/* <span className="active">New Arivals</span>
        <span>Best Seller</span>
        <span>Summer Collections</span>
        <span>Accessories</span>
        <span>Essentials</span> */}
      </div>

      <div className="products">
        <AnimatePresence mode="wait">
            <motion.div
            key={selectedCategory} 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="product-grid"
          >
        {filteredProducts.map((item, index) => (
          <motion.div
                
            
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
          <ProductCard
            // key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            actualPrice={item.price}
            offerPrice={item.offerPrice}
          />
          </motion.div >
        ))}
        </motion.div>
        </AnimatePresence>
      </div>
      
      {/* <div className="products">
        <ProductCard name="Tshirt" image={Tshirt} actualPrice={799} offerPrice={699}/>
        <ProductCard name="Cap" image={Tshirt} actualPrice={599} offerPrice={549}/>
        <ProductCard name="Goggle" image={Tshirt} actualPrice={999} offerPrice={799}/>
      </div> */}
      
    </div>
  );
};

export default Trending;
