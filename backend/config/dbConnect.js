import mongoose from 'mongoose';

export const connectDatabase = ()=>{
    let DB_URI = ""

    if(process.env.NODE_ENV === "DEVELOPMENT") DB_URI = process.env.DB_LOCAL_URI;
    if(process.env.NODE_ENV === "PRODUCTION") DB_URI = process.env.DB_URI;

    if (!DB_URI) {
        console.warn("No database URI configured; skipping MongoDB connection.");
        return;
    }

    mongoose.connect(DB_URI)
    .then((con)=>{
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err.message);
        process.exit(1);
    });
}