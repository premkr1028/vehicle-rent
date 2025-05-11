import { Router } from "express";
import express from "express";
import authArr from "../controllers/auth.js";
import { createCar, deleteCar, getAllCars, getCarById, updateCar } from "../controllers/car.js";
const carRoute = express.Router();
carRoute.post("/add", createCar)
carRoute.get("/get", getAllCars)
carRoute.get("/delete", getCarById)
carRoute.put("/update", updateCar)
carRoute.delete("/delete", deleteCar)
export default carRoute;