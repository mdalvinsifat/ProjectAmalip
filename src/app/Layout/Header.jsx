import React from 'react';
import './model.css'
import Link from 'next/link';
import img from '../Images/logo.png'
import Image from 'next/image';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light Background-Header-Color p-4">
        <div className="container-fluid">
          <Link href='/' className="navbar-brand" >
            
            <Image src={img} alt="" srcset="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"> 
                <Link href='/' className="nav-link active  ms-5 border-left" aria-current="page">
                    <span className=' fs-6 text-light '>Home</span>
                    <br></br>
                    All Varition 
                </Link>
              </li>
    
              <li className="nav-item"> 
                <Link href='/page' className="nav-link active  ms-5 border-left" aria-current="page">
                    <span className=' fs-6 text-light '>Pages</span>
                    <br></br>
                  total pages
                </Link>
              </li>
    
    
    
    
              <li className="nav-item"> 
                <Link href='/course' className="nav-link active  ms-5 border-left" aria-current="page">
                    <span className=' fs-6 text-light '>Courses</span>
                    <br></br>
                    Research & Study
                </Link>
              </li>
    
              <li className="nav-item"> 
                <Link href='/contact ' className="nav-link active  ms-5 border-left" aria-current="page">
                    <span className=' fs-6 text-light '>Contact</span>
                    <br></br>
                    Contact Now
                </Link>
              </li>
             
             
            </ul>
         
          </div>
        </div>
      </nav>
    );
};

export default Header;
