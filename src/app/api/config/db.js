import mongoose  from "mongoose"


export const Connction = async()=>{
   try {
    await mongoose.connect(process.env.MONGOURL)
    console.log("Mongoose Connected")
} catch (error) {
    console.log("not connection", error)
}
}