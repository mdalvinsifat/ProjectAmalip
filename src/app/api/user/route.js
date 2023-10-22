const { NextResponse } = require("next/server")

import { Connction } from '../config/db'
import Product from '../user/model/model'

Connction()
export const GET = async()=>{
  const product = await Product.find()
  return NextResponse.json({product})
}

export const POST = async (requst)=>{
  const {name , img, detelis ,detelis1, title}= await requst.json()
  const product = await Product.create({
    name , img, detelis ,detelis1, title
  })

  return NextResponse.json({product}, {message :"Product Create successfully !"})
}