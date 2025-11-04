import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect.js";
import productRoutes from "./routes/products.js";

const app = express();

dotenv.config({ path: "backend/config/config.env" });

// Parse JSON bodies
app.use(express.json());

// Connect Database
connectDatabase();

// Routes
app.use("/api/v1", productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is started successfully on ${PORT} in ${process.env.NODE_ENV || "development"} mode`);
});