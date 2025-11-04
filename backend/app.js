import express from "express"
import dotenv from 'dotenv'
import { connectDatabase } from "./config/dbConnect";
import productRoutes from "./routes/products.js";
const app = express();


dotenv.config({path:"backend/config/config.env"})
const PORT = process.env.PORT || 3000
// connecting Database
connectDatabase()
// import all routes


app.use("/api/v1", productRoutes)


app.listen(PORT,()=>{
    console.log(`server is started successfully on ${PORT} in ${NODE_ENV} mode`)
}

)