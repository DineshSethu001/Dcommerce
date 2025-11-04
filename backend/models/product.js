import mongoose from "mongoose";



const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Product Name"],
        maxLength:[200, "Product name cannot exceed 200 Character"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter Product Price"],
        maxLength:[5,"Product Price cannot exceed 5 'digits'"]
    },
    description:{
        type:String,
        required:[true,'Please Enter Product Description']
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            }
        }
    ],
    category:{
        type:String,
        required:[true, "Please Enter Product Category"],
        enum:{
            values:["Electronics","Food","Sports","Hardware"],
            message:"Please select the correct Category "
        }
    },
    seller:{
        type:String,
        required:[true,"Please Enter Product Seller"]
    },
    stock:{
        type:Number,
        required:[true, "Please Enter Product Stock"]
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true   
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }

        
}],
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:false
}
},{timestamps:true})


export default mongoose.model("Product",productSchema)




// sample data
// [
//   {
//     "name": "Wireless Bluetooth Headphones",
//     "price": 5999,
//     "description": "High-quality wireless headphones with deep bass and 20 hours of playback time.",
//     "rating": 4.5,
//     "images": [
//       {
//         "public_id": "products/headphones_01",
//         "url": "https://example.com/images/headphones_01.jpg"
//       },
//       {
//         "public_id": "products/headphones_02",
//         "url": "https://example.com/images/headphones_02.jpg"
//       }
//     ],
//     "category": "Electronics",
//     "seller": "Sony Official Store",
//     "stock": 25,
//     "numOfReviews": 2,
//     "reviews": [
//       {
//         "user": "6730f39a1a5efb8d91c8a100",
//         "rating": 5,
//         "comment": "Amazing sound quality and noise cancellation!"
//       },
//       {
//         "user": "6730f39a1a5efb8d91c8a100",
//         "rating": 4,
//         "comment": "Very comfortable but could be louder."
//       }
//     ],
//     "user": "6730f39a1a5efb8d91c8a100"
//   },
//   {
//     "name": "Professional Football",
//     "price": 899,
//     "description": "Durable football made from high-quality synthetic leather. Ideal for training and matches.",
//     "rating": 4.2,
//     "images": [
//       {
//         "public_id": "products/football_01",
//         "url": "https://example.com/images/football_01.jpg"
//       }
//     ],
//     "category": "Sports",
//     "seller": "Adidas Sports",
//     "stock": 50,
//     "numOfReviews": 1,
//     "reviews": [
//       {
//         "user": "6730f39a1a5efb8d91c8a100",
//         "rating": 4,
//         "comment": "Good quality and grip."
//       }
//     ],
//     "user": "6730f39a1a5efb8d91c8a100"
//   },
//   {
//     "name": "Cordless Power Drill",
//     "price": 4599,
//     "description": "Powerful cordless drill with variable speed control and rechargeable battery.",
//     "rating": 4.7,
//     "images": [
//       {
//         "public_id": "products/powerdrill_01",
//         "url": "https://example.com/images/powerdrill_01.jpg"
//       }
//     ],
//     "category": "Hardware",
//     "seller": "Bosch Tools",
//     "stock": 18,
//     "numOfReviews": 3,
//     "reviews": [
//       {
//         "user": "6730f39a1a5efb8d91c8a100",
//         "rating": 5,
//         "comment": "Excellent build quality. Battery lasts long!"
//       },
//       {
//         "user": "6730f39a1a5efb8d91c8a100",
//         "rating": 4,
//         "comment": "Good for home use, compact and efficient."
//       }
//     ],
//     "user": "6730f39a1a5efb8d91c8a100"
//   }
// ]
