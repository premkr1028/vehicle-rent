import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/db.js";
import authRoute from "./routes/auth.js";
import carRoute from "./routes/car.js";
dotenv.config()
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
connectDB()
app.get("/", (req,res)=>{
    res.send("ok")
})
app.use("/auth", authRoute)
app.use("/car", carRoute)
app.listen(process.env.PORT,()=>{
    console.log("running")
})