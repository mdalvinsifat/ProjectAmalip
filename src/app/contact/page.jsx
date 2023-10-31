"use client"
import React, { useState } from 'react';
import LayOut from '../Layout/LayOut';
import './course.css'
import axios from 'axios';
const Page = () => {

  const [name, setName] = useState("")
  const [msg, setMsg] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")

  const Product = async (e) =>{
    e.preventDefault()
    try {
      const res = await axios.post("api/contact", {
        name ,
        msg,
        address,
        email,
        phone
      })
      alert("Successfully create")

    } catch (error) {
      console.log(error)
    }
  }


    return (
        <LayOut>
            <div className="m-5 ">
<div className="box-shadow">

   <form className='w-25 margin-center' onSubmit={Product}>

  <div className="mb-3">
    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <input type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputPassword1" />
  </div>

  <div className="mb-3">
    <input type="text" placeholder='Enter Your Phone' value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputPassword1" />
  </div>

  <div className="mb-3">
    <input type="text" placeholder='Enter Your Address' value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputPassword1" />
  </div>

  <div className="mb-3 w-25">
  <textarea id="w3review" name="w3review" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder='Message Now' rows="4" cols="30">

 </textarea>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>


            </div>
        </LayOut>
    );
};

export default Page;