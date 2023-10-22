import { NextResponse } from "next/server"
import Product from "../model/model"




export const GET = async(requst, {params})=>{

    const {id } = params
    const product = await Product.findById({_id:id})
    return NextResponse.json({
        product
    })
}


export const DELETE = async(requst , {params})=>{
    const {id} = params 
    const product = await Product.findByIdAndDelete({_id:id})
    return NextResponse.json({
        product
    })
}

export const PUT = async(requst,{params})=>{
    const {id} = params ;
    const {name,title, img , detelis, detelis1} = await requst.json()
    const product = await Product.findByIdAndUpdate(id, {name,title, img , detelis, detelis1})
    return NextResponse.json({
        product
    })
}

