import React, { useEffect, useState } from 'react';
import "./PopularCollection.scss"
import Products from '../../Data/Products.js';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { motion, scale } from 'framer-motion';

const PopularCollection = () => {
  const [selectedCategory, setSelectedCategory] = useState("New arrivals");

    const Categories = [
    "New arrivals",
    "Best seller",
    "Summer collections",
    "Accessories",
    "Essentials",
  ];

  const filteredProducts = Products.filter(
    (item) => item.category.toLowerCase() === selectedCategory.toLocaleLowerCase()
  );

  console.log("FilteredProducts==",filteredProducts);

  const [currentIndex, setCurrentIndex] = useState(0); //Index of the product currently shown

 //change product every 4s
  useEffect(() => {
    if(filteredProducts.length === 0) return;

    const interval = setInterval(() => {
        setCurrentIndex((prev) => prev+1 < filteredProducts.length ? prev+1 : 0
    );
    }, 4000);

    return () => clearInterval(interval);
  },[filteredProducts]);

  const product = filteredProducts[currentIndex];
 

  return (
    <div className='popularCollections'>

        <div className='heading'>
            <h1>Explore Our Most Popular <br /> And Loved <span>Collections</span></h1>
            <button>Shop Now <BsArrowUpRightCircleFill style={{fontSize:24}}/></button>
        </div>

        <div className="populardetails">
            <div className="popularinfo">

                 <div className='indicators'>                        
                     {
                         Categories.map((category, index) => (
                             <button key={index}
                               className={selectedCategory === category ? "active" : ""}
                             ></button>
                         ))
                     }
                </div>

                <div className="content">
                    {Categories.map((category, index) => (
                    <span 
                    key={index}
                    className={selectedCategory === category ? "active" : ""}
                    onClick={() => setSelectedCategory(category)}
                    >
                        {category} <span>({category.length})</span>
                    </span>
                ))}
                </div>
               
            </div>
            <div className="popularimage">
             
                {product && (
                    <div className="mainImg">
                        <motion.img src={product.image[0]} alt="" whileHover={{scale:1.1}} transition={{duration:0.8}}/>

                        <div className="img">
                            <div className="img1"><motion.img src={product.image[1]} alt="" whileHover={{scale:1.2}} transition={{duration:.6}}/></div>
                            <div className="img2"><motion.img src={product.image[2]} alt="" whileHover={{scale:1.2}} transition={{duration:.6}}/></div>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
      
    </div>
  );
}

export default PopularCollection;
