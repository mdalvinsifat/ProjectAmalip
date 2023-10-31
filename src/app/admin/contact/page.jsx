"use client"
import React, { useEffect, useState } from 'react';
import AdminNav from '../AdminNav';

const Page = () => {

    const [ data , setData] = useState([])

    const Product = async()=>{
        try {
            const response = await fetch("api/contact")
            const res = await response.json()
            setData(res.contact)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
       Product() 
    },[])
    return (
        <div className='container-fluid'>
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
      <th scope="col">email</th>
      <th scope="col">address</th>
      <th scope="col">phone</th>
    </tr>
  </thead>

  <tbody>
    {
        data.map(item =>{
            return (
                <tr>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>
        {item.address}
      </td>
      <td>
        {item.phone}
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