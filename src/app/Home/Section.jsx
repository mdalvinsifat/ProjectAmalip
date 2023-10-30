import React from 'react';
import Image from 'next/image'
import imag2 from '../Images/Fast-Banner-image.png'
import img from '../Images/plan.png'
import img1 from '../Images/world.png'
import img2 from '../Images/cup.png'

const Section = () => {
    return (
        <div>
             <div className='bg-image p-5'>

<div className="container">
<div className="row">
    <div className="col-md-5 mt-5">
<h3 className='mt-5'>Created For Education Business</h3>

<p className='mt-5'>
At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
</p>
<div className="d-flex mt-4">
<Image src={img} alt="" srcset="" className='me-4'/>
<Image src={img1} alt="" srcset=""  className='me-4' />
<Image src={img2} alt="" srcset=""   className='me-4'/>
</div>
    </div>

    <div className="col-md-6 ms-3 ">
        <Image src={imag2} alt="" srcset="" className='img-fluid' />
    </div>
</div>
</div>
        </div>
        </div>
    );
};

export default Section;