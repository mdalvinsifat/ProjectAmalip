
import jwt from 'jsonwebtoken'



export const jwtsingInhelper  = async(request)=>{
    try {
        const token = request.cookies.get("token")?.value || ""
        const jwthelper = jwt.verify(token, process.env.JWT_SECRETKEY)
        return jwthelper.id
    } catch (error) {
        console.log(error)
    }
}