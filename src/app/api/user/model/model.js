import mongoose ,{Schema} from "mongoose";

const ProductSchema = new mongoose.Schema({
     name:String,
     title:String,
     detelis1:String,
     detelis:String,
     img:String
})


const Product = mongoose.models.schema || mongoose.model("schema", ProductSchema)

export default Product;