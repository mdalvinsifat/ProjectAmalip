"use client"
import React  from 'react';
import LayOut from '../Layout/LayOut';
import { useState, useEffect } from 'react'
import Link from 'next/link';
const Page = () => {
    const [data, setData] = useState([])
  
    const Product = ()=>{
        fetch('api/user',{
            method:"Get"
          })
            .then((res) => res.json())
            .then((data) => {
              setData(data.product)
              console.log(data.product)
            })
    }
    useEffect( () => {
     Product()
    }, [])

    if (!data) return <p></p>
    return(
        <LayOut>
<div>
           
          <div className="container m-5">
          {
            data.map((item) =>(
                <div>
                   <div className="row m-5">
                    <div className="col-md-4">
                      <img src={item.img} alt="" srcset="" className='w-75' />
                    </div>

                    <div className="col-md-5">
                      <h3>{item.name}</h3>
                     <small>
                     <p>{item.title}</p>
                     </small>
                    <div className="d-flex">
                  <Link href={`/course/${item._id}`}>
                  <button className='btn btn-dark mt-3'>Detelis </button>
                  </Link>
                  
                    </div>
                   
                    </div>
                   </div>
                    </div>
            ))
          }
          </div>

        </div>
       
        </LayOut>
    )
 
};

export default Page;