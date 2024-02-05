import React from 'react'
import { FaRegEdit } from "react-icons/fa";


const Productcontainer = ({ data }) => {
  return (
    <div>
        <section>
        <div className='section-items'>
        <h3>Products</h3>
        </div>
        <div className='container'>
        {data.map((items,index)=>{
            return(
            <div className='productlist' key={index}>
            <img className="product-img" src={items.img}/>
            <div className="productdetails">
            <div className="edit-wrap">
            <h3>{items.ProductName}</h3> <FaRegEdit className='edit-btn' />
            </div>
            <p style={{marginTop:"5px"}}>Price: {items.Price}</p>
            <div className="view-wrap">
            <p>Stock {items.Stock}</p>
            <button className="view-btn">View</button>
            </div>
            </div>
            </div>
            )
        })}
        </div>
        </section>
      
    </div>
  )
}

export default Productcontainer;
