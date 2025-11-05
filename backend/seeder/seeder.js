import mongoose from "mongoose"
import product from "../models/product.js"
import products from './data.js'
const seedProducts = async()=>{
    try{
        await mongoose.connect(
                    "mongodb://localhost:27017/dcom"
        )
        await product.deleteMany();
        console.log("Products are deleted")

        await product.insertMany(products)
        console.log("producrs are added")
    }
    catch(error){
        console.log(err.message)
        process.exit()
    }
}