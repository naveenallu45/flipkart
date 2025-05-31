import express from "express";
import User from "./schema/loginschema.js"; 

const logroute = express.Router();

logroute.post("/login", async (req, res) => {
  const { mobile, password } = req.body;

  
  if (!mobile || !password) {
    return res.status(400).json({ message: "Mobile and password are required." });
  }

  try {

    let user = await User.findOne({ mobile }); 

   
    if (!user) {
      user = new User({ mobile, password }); 
      await user.save();
      
      return res.status(201).json({ message: "User created and logged in successfully", user });
    }

    if (user.password === password) {
      return res.status(200).json({ message: "Login successful", user });
    } else {
      return res.status(401).json({ message: "Incorrect password" });
    }

  } catch (err) {
    console.error("Login error:", err); 
    if (err.code === 11000) { 
        return res.status(409).json({ message: "A user with this mobile number already exists." });
    }
    return res.status(500).json({ message: "Internal server error", error: err.message });
  }
});

export default logroute;