import Image from 'next/image';
import React from 'react';
import img from '../Images/icon1.png'
import img1 from '../Images/icon-2.png'
import img2 from '../Images/icon-3.png'
import img3 from '../Images/icon-4.png'
const Section1 = () => {
    return (
        <div className='container mt-5'>
      <div className="total mt-5">
      <div className="row mt-5">
       
            <div className="col-md-3">
            <Image src={img} alt="" srcset="" />
                <h3 className='mt-3 '>
                Be At The Top
                </h3>
                <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                </p>
            </div>
            <div className="col-md-3">
            <Image src={img1} alt="" srcset="" />
            <h3 className='mt-3 '>
            Powerful Features
                </h3>
                <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet voluptates
                </p>
            </div>
            <div className="col-md-3">
            <Image src={img2} alt="" srcset="" />
            <h3 className='mt-3 '>
            Event And Course
                </h3>
                <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                </p>
            </div>
            <div className="col-md-3">
            <Image src={img3} alt="" srcset="" />
            <h3 className='mt-3 '>
            Responsive Design
                </h3>
                <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                </p>
            </div>
         </div>
      </div>
        </div>
    );
};

export default Section1;