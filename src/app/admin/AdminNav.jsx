import Link from 'next/link';
import React from 'react';

const AdminNav = () => {
    return (
        <div className="list-group mt-5 ms-5" >
<Link href="/admin/create" className='mt-5 bg-dark px-5 py-3 text-decoration-none text-light'>
    Create Page
</Link>
<br/>
<Link href="/admin/view" className='mt-5 bg-dark px-5 py-3 text-decoration-none text-light'>
   View
</Link>
<Link href="/admin/contact" className='mt-5 bg-dark px-5 py-3 text-decoration-none text-light'>
  Contact View
</Link>

        </div>
    );
};

export default AdminNav;