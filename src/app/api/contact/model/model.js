import mongoose,{Schema} from "mongoose";


const ContactSchema = new mongoose.Schema({
    name:String,
    msg:String,
    email:String,
    phone:String,
    address:String
})


const Contact = mongoose.models.contact || mongoose.model("contact", ContactSchema)

export default Contact;