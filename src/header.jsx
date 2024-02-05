import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div>
      <header style={{marginLeft:"40px"}}>
        <div className="searchbox">
         
         <div className="search-icon" > <CiSearch /> </div>
         <input className='searchinput'  type="text" placeholder="Search"  />
         </div>
         <div className='rightalign-item'>
        <div className='notification-container'>
         <IoIosNotificationsOutline className='notification' />
         </div>
         <div className='profile'>
         <img className='profileimg' src="profile.jpg" />
         <div>
         <p style={{fontWeight:700}}>Asry</p>
         <p style={{fontSize:"12px"}}>Profile</p>
         </div>
         <IoIosArrowDown />
         </div>
         </div>
        </header>
    </div>
  )
}

export default Header;
