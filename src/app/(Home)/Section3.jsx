import Image from 'next/image';
import React from 'react';
import img from '../Images/sub.png'
import img1 from '../Images/sub1.png'
import img2 from '../Images/sub2.png'
import img3 from '../Images/sub3.png'
const Section3 = () => {
    return (
        <div className='bg-image-1 p-5'>
<h3 className='fontweight text-center mt-5 mb-4'> Our Partners</h3>
            <h1></h1>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-3">
                    <Image src={img} alt="" srcset="" className='img-fluid'/>
                    </div>

                    <div className="col-md-3">
                    <Image src={img1} alt="" srcset="" className='img-fluid'/>
                    </div>

                    <div className="col-md-3">
                    <Image src={img2} alt="" srcset="" className='img-fluid'/>
                    </div>

                    <div className="col-md-3">
                    <Image src={img3} alt="" srcset="" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;