"use client"
import React  from 'react';
import FileBase from 'react-filebase64';
import AdminNav from '../AdminNav';
import { useState } from 'react';

const Create = () => {
 
const [name , setName]   = useState("")
const [title , setTitle]   = useState("")
const [img , setImg]   = useState("")
const [detelis , setDetelis]   = useState("")
const [detelis1 , setDetelis1]   = useState("")

const Product = async(e)=>{
    
e.preventDefault()

let data = await fetch("https://project-amalip-git-main-alvin-sifats-projects.vercel.app/api/user",{
    method:"Post",
    body:JSON.stringify({name , detelis,detelis1, img, title})
})

data = await data.json()
if(data.success){
    alert("user create Successfully")
}
console.log(data)
}
    return (
        <div >
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-3">
<AdminNav></AdminNav>
      </div>

      <div className="col-md-8">
      <form className='w-100 create mt-5' onSubmit={Product}>
  <div className="mb-3">
    <input type="text" 
    name="name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder='Name'
    required
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <input type="text" 
      placeholder='Title'
      name="title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      required
      className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <input type="text" 
      placeholder='Detelis'
      name="detelis"
      value={detelis}
      required
      onChange={(e) => setDetelis(e.target.value)}
      className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <input type="text" 
    name="rating"
    value={detelis1}
    required
    onChange={(e) => setDetelis1(e.target.value)}
    placeholder='rating'
    className="form-control" id="exampleInputPassword1" />
  </div>
  <FileBase type="file" 
    required
multiple={false}  onDone={({base64}) => setImg(base64)}/>

  <button type="submit" className="btn btn-primary mt-5">Submit</button>
</form>
      </div>
    </div>
  </div>

        </div>
    );
};

export default Create;
