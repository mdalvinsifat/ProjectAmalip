"use client"
import React, { useEffect, useState } from 'react';
import LayOut from '../Layout/LayOut';
import Link from 'next/link';


const Page = () => {

    const [data, setData] = useState([])
  
const Product = async()=>{
 try {
  const response = await fetch("http://localhost:3000/api/user")
  const res = await response.json()
  setData(res.product)
 } catch (error) {
  console.log(error)
 }
}
useEffect( () => {
 Product()
}, [])

    return (
        <LayOut>
               <div className="container m-5">
                   <div className="row">
          {
            data.map((item) =>(
                <div className="col-md-4 mt-5">
                <div className="card" style={{width: '18rem'}}>
  <img src={item.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <Link href={`/course/${item._id}`}>
                  <button className='btn btn-dark mt-3'>Detelis </button>
                  </Link>
  </div>
</div>
                </div>

))
}
</div>
          </div>
        </LayOut>
    );
};

export default Page;