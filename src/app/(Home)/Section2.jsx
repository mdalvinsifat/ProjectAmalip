import Image from 'next/image';
import React from 'react';
import img from '../Images/card-image.jpg'
import img1 from '../Images/card-image3.jpg'
import img2 from '../Images/card-image2.jpg'
import img3 from '../Images/card-image1.jpg'
const Section2 = () => {
    return (
        <div>

        <h1 className='text-center m-5 fontweight'>Our Professional Team</h1>
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-md-3">
<div className="card" style={{width: '18rem'}}>
<Image src={img} className="card-img-top" alt="..." />
<div className="card-body">
<p>John Doe</p>
<small> <p>PROFESSOR OF ECONOMICS</p></small>
<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
</div>
</div>

                </div>

                <div className="col-md-3">
                <div className="card" style={{width: '18rem'}}>
                <Image src={img2} className="card-img-top" alt="..." />
<div className="card-body">
<p>LECTURER - ECONOMICS</p>
<small> <p>PROFESSOR OF ECONOMICS</p></small>
<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
</div>
</div>
                </div>

                <div className="col-md-3">

                <div className="card image" style={{width: '18rem'}}>
<Image src={img1} className="card-img-top" alt="..." />
<div className="card-body">
<p>Danny Awesome</p>
<small> <p>GUEST LECTURER - DESIGN
</p></small>
<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
</div>
</div>

                </div>

                <div className="col-md-3">
                <div className="card" style={{width: '18rem'}}>
                <Image src={img3} className="card-img-top" alt="..." />
<div className="card-body">
<p>Jacky Michaels</p>
<small> <p>SENIOR LECTURER - MARKETING</p></small>
<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
</div>
</div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Section2;