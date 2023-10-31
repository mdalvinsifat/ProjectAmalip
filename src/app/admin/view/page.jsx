"use client"

import React, { useEffect, useState } from 'react';
import AdminNav from '../AdminNav';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
const Page = () => {

const [ data , setData] = useState([])

const Product = async() =>{

    fetch("http://localhost:3000/api/user",{
        method:"GET"
    })
.then( res => res.json())
.then (data => setData(data.product))
}


useEffect(()=>{
    Product()
},[])



const DeleteProduct = async(id) =>{
    try {
      const res = await axios.delete(`api/user/${id}`)
      Product()
    } catch (error) {
      console.log(error)
    }
  
  }
  
return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <AdminNav></AdminNav>
                </div>

                <div className="col-md-8">
                <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">img</th>
  
    <th scope="col">Progress</th>
    </tr>
  </thead>

  <tbody>
    {
        data.map(item =>{
            return (
                <tr>
      <td>{item.name}</td>
      <td>

      <img src={item.img} alt="logo" width="64" height="64" />

      </td>
      <td>
      <Link href={`/admin/edit/${item._id}`} >
      <button type="button" class="btn btn-primary " >Edit</button>
      </Link>

      <button className='btn btn-danger ms-3' onClick={() => DeleteProduct(item._id)}>Delete</button>
      </td>
    </tr>
            )
        })
    }
    
  </tbody>
</table>
        </div>

                </div>
            </div>
        </div>
    );
};

export default Page;