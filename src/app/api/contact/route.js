import { NextResponse } from "next/server"
import Contact from "./model/model"



export const GET = async(requst) =>{
    const contact = await Contact.find()
    return NextResponse.json({contact})
}

export const POST = async (requst)=>{
    const {name ,msg,email, phone, address} = await requst.json()
    const contact = await Contact.create({name ,msg,email, phone, address})
    return NextResponse.json({contact}, {message:"create successfully"})
}