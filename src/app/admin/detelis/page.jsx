"use client"
import React from 'react';
import AdminNav from '../AdminNav';
import { useRouter } from 'next/navigation';
import {Cookies} from 'js-cookie'
const page = () => {
const router = useRouter()
    const LogOut = () =>{
        Cookies.remove("loggin")
       router.push("/admin")
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <AdminNav></AdminNav>
                    </div>

                    <div className="col-md-8 text-center mt-5 text-primary">
                        <h1> Well Come To Admin Panel </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;