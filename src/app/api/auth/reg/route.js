import { NextResponse } from "next/server"
import { Auth } from "../authModel/model"
import bcryptjs from 'bcryptjs'
import { Connction } from "../../config/db"


Connction()
export const POST  = async (request)=>{
    try {
        const body = await request.json()
        const {email ,password} = body
        

        const user = await Auth.findOne({email})
        if(user){
            return NextResponse.json({
                success:false,
                message:"user exit"
            })
        }


        const salt = await bcryptjs.genSalt(12)
        const hashpassword = await bcryptjs.hash(password, salt )

        const newUser = new Auth({
            email,
            password:hashpassword
        })
        
const response = await newUser.save()

return NextResponse.json({
    success:true,
    message:"user Reg Successfully",
    response
})


    } catch (error) {
        console.log(error)
    }
}