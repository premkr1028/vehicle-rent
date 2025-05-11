import express from "express";
import User from "../models/user.js";
const handleSignUp = async (req, res) => {

    let { name, email, password, role } = req.body;
    let user = await User.find({ email })
    if (user.length != 0) {
        console.log("again")
      return res.send("Email already exist")
    }
   
    let userData = await user_schema.create({
        name,
        email,
        password,
        role
    })
    console.log(userData);
   return res.send("success")

}
const handleLogIn = async (req, res) => {
    let { email, password } = req.body;
    let user = await User.findOne({ email })
    if (!user) {
        return res.send("user not exist")
    }

   res.send("success")
}
let authArr = [handleSignUp, handleLogIn]
export default authArr