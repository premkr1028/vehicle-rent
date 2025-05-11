import mongoose from "mongoose";
const carSchema = new mongoose.Schema({
  carname: {
    type: String,
    required: true,
    trim: true
  },
  model: {
    type: String,
    required: true,
    trim: true
  },
  rentalPricePerHour: {
    type: Number,
    required: true,
    min: 0
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  location: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String, // URL to image
    default: ''
  },
  mileage: {
    type: Number,
    required: true
  },
  fuelType: {
    type: String,
    enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid'],
    required: true
  },
  type: {
    type: String,
    enum: ['Automatic', 'Manual'],
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const Car = mongoose.model("Car", carSchema)
export default Car;
