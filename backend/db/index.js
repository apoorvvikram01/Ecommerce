import mongoose from "mongoose";
import colors from "colors";

const connectDB = async ()=>{
    try {
    const connectionInstance =  await mongoose.connect(`${process.env.MONGO_DB_URI}`); 
    console.log(` Connected to mongoDB !! DB Host : ${connectionInstance.connection.host}`.bgMagenta.white); 
    } catch (error) {
        console.log("MongoDB connnection error:", error);
        process.exit(1);
    }
}

export default connectDB;