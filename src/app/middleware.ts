
import { NextRequest, NextResponse } from "next/server";

export default function middleware(req :NextRequest) {
const token = req.cookies.get('token')?.value
const user =  new URL("/", req.url)
const user1 =  new URL("/admin/create", req.url)


if(!token){
    if(req.nextUrl.pathname==="/"){
        return NextResponse.next()
    }
    return NextResponse.redirect(user)
}

if(req.nextUrl.pathname=="/"){
    return NextResponse.redirect(user1)
}


  }     


export const config = { matcher: ["/admin-create", "/admin-view"] };