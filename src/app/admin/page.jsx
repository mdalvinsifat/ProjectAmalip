"use client"
import axios from 'axios';
import React, {  useState } from 'react';
import './Admin.css'
import LayOut from '../(Layout)/LayOut';
import { useRouter } from 'next/navigation';
import {Cookies} from 'js-cookie'

const page = () => {
  const router = useRouter()
  
const [email , setEmail] = useState("")
const [password , setPassword] = useState("")
    const Admin = async(e)=>{
        e.preventDefault()
        Cookies.set("loggin", true)
          router.push("/admin/detelis")
        try {
            await axios.post('http://localhost:3000/api/auth/signin',{
                email,
                password
            })

          
         
          
           
        } catch (error) {
            console.log(error)
           alert("Please fileUp Email and password")
           router.push("/admin")
        }
    }
  
   
    return (
 <LayOut>
   <form onSubmit={Admin}>
 <div className="w-25 login mt-5 mb-5">
 <div className="mb-3">
    <input type="email" 
    className="form-control" 
    id="exampleInputEmail1" 
    placeholder='Enter Your Email'
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    
    <input type="password" 
    className="form-control" 
    placeholder='Password'
    value={password}
    onChange={(e) =>setPassword(e.target.value)}
    id="exampleInputPassword1" />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
 </div>
</form>
 </LayOut>

    );
};

export default page;
