import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
console.log(process.env.URI)
const connectDB = async () => {
  try {
   await mongoose.connect(process.env.URI).then(()=>{

       console.log('MongoDB connected successfully!');
   })
   
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB
