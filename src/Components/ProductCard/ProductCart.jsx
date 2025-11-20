import React from 'react';
import  './ProductCart.scss'
import { addToCart } from '../../Redux/cartReducer.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { FaStar, FaStarHalfAlt} from "react-icons/fa";

const ProductCard = ({id, name, image, offerPrice, actualPrice, key}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItem } = useSelector((state) => state.Cart)
  const isInCart = cartItem.find(item => item.id === id)

  const onAddToCart = () => {
    try {
      dispatch(addToCart({"id": id, "name": name,"count": 1}))
      toast.success("Successfully Added To Cart.")
    } catch (error) {
      toast.error("Failed to Add Cart...! Please Try Again")
    }
  }
  return (
    <div className='product' id='products'>
      <div className="imgbox" 
         onClick={() => navigate(`/products/${name}`)}
      >
        <img src={image[0]} alt="" />
      </div>
      <div className="info">
        <p>{name}</p>
        <span>
            <p>₹{offerPrice}</p>
            <p>₹{actualPrice}</p>
        </span>
      </div>
      <div className="rating">
        <FaStar style={{color:'#ff890bff'}}/>
        <FaStar style={{color:'#ff890bff'}}/>
        <FaStar style={{color:'#ff890bff'}}/>
        <FaStar style={{color:'#ff890bff'}}/>
        <FaStarHalfAlt style={{color:'#ff890bff'}}/>
      </div>
      <div className='btns'>
        <button className= {isInCart ? "disabled" : ""}
        /* onClick={() =>{
          dispatch(addToCart({"id": id, "name": name,"count": 1}))
        }} */
        onClick={onAddToCart}
        
        >AddToCart</button>
        <button>BuyNow</button>
      </div>
    </div>
  );
}

export default ProductCard;
