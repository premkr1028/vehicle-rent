import { Router } from "express";
import express from "express";
import authArr from "../controllers/auth.js";
const authRoute = express.Router();
authRoute.post("/signUp", authArr[0])
authRoute.post("/signIn", authArr[1])
export default authRoute;