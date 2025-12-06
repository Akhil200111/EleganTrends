import React from 'react';
import { LuMessageCircleMore } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { IoArrowRedo } from "react-icons/io5";
import { TiPlus } from "react-icons/ti";
import { FaUser, FaRegDotCircle } from "react-icons/fa";
import { LiaHeadsetSolid } from "react-icons/lia";
import { LuAlarmClockCheck } from "react-icons/lu";

import './Comfort.scss'
import trending from '../../assets/Comfort/Trending.png'
import user1 from '../../assets/Comfort/user1.jpg'
import user2 from '../../assets/Comfort/user2.jpg'
import user3 from '../../assets/Comfort/user3.jpg'

const Comfort = () => {
  return (
    <div className='container2'>
      <h3>WHY CHOOSE NOSTRA</h3>

      <h1>Embrace <span>Comfort</span> & style</h1>

      <div className="grid-container">
        <div className="box box-1" style={{gridArea: "box-1"}}>
          <div className="icons">
            <div className="rounded1"><FiShoppingBag /></div>
          <div className="rounded2"><LuMessageCircleMore /></div>
          </div>
          <div className="content">
            <h4>100-Days Offer</h4>
            <p>Enjoy hassle-free returns within 30 days on all purchases.</p>
          </div>
        </div>
        <div className="box box-2" style={{gridArea: "box-2"}}>
          <div>
            <h5>Explore Now</h5>
            <div className="icon">
              <IoArrowRedo style={{color:"#6E6D6D", fontSize:"20"}}/>
            </div>
         </div>
        </div>
        <div className="box box-3" style={{gridArea: "box-3"}}>
           <h5>Trendy <br /> Collection</h5> 
           <div><button>Add To Cart <TiPlus /></button><img src={trending} alt="" /> </div>
           
        </div>
        <div className="box box-4" style={{gridArea: "box-4"}}>
          <div className="content">
            <h5>Active Users</h5>
            <h4>120K</h4>
          </div>
          <div className="users">
            <div className="rounded round1"><img src={user1} alt="" /></div>
            <div className="rounded round2"><img src={user2} alt="" /></div>
            <div className="rounded round3"><img src={user3} alt="" /></div>
            <div className="rounded round4"><FaUser style={{fontSize:"20", color:"#EFC3CA"}}/></div>
          </div>
        </div>
        <div className="box box-5" style={{gridArea: "box-5"}}>
          <div className="contents">
            <h4>24/7 Customer <br /> Service</h4>
            <p>Our team is here around the clock to assist you anytime, anywhere</p>
          </div>
          <div className="icons">
            <div className="rounded1"><img src={user2} alt="" /></div>
            <div className="rounded2"><LiaHeadsetSolid style={{color:"black", fontSize:"25"}}/></div>
            <div className="rounded3"><LuAlarmClockCheck  style={{fontSize:"15"}}/></div>
          </div>
        </div>
        <div className="box box-6" style={{gridArea: "box-6"}}>
          <div className="icon">
            <FaRegDotCircle style={{color:"#7FD9DC", fontSize: "55"}}/>
          </div>
          <div className="content">
            <h5>Lifetime Warranty</h5>
            <p>Shop confidently with our life time product warranty</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comfort;
