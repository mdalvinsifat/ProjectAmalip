"use client"

import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

import { useState } from 'react';
import LayOut from '../../Layout/LayOut';
 
const Page = () => {

    const {id} = useParams()
    const [data , setdata]   = useState("")

    useEffect(()=>{
DetelisProduct()
    },[])
    const DetelisProduct = async()=>{
        const respose = await fetch(`api/user/${id}`)
        const res = await respose.json()
        setdata(res.product)
    }
   
    return (
        <LayOut>
<div className="container m-5">
    <div className="row m-5">
        <div className="col-md-5 m-5">
            <img src={data.img} alt="" srcset="" className='w-75' />
            <small><p className='w-75 mt-3'>{data.title}</p></small>
            <small><p className='w-75 mt-3'>{data.detelis1}</p></small>
        </div>


        <div className="col-md-5 ms-2 mt-5">
           <small> <p>{data.detelis}</p></small>
        </div>
    </div>
</div>
      
        </LayOut>
    );
};

export default Page;