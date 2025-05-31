import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  ram: {
    type: String,
    required: true,
    trim: true
  },
  camera: {
    type: String,
    required: true,
    trim: true
  },
  battery: {
    type: String,
    required: true,
    trim: true
  },
  warranty: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: String,  // Keeping as String because your example uses ₹ symbol
    required: true,
    trim: true
  },
  discount: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  }
});



const Productss = mongoose.model('Productss', productSchema);
export  default Productss;



