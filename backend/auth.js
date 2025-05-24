
import express from "express";
import User from "./userSchema.js";

const router = express.Router();

router.post("/auth", async (req, res) => {
  const { mobile, password } = req.body;

  try {
    let user = await User.findOne({ mobile });

    if (!user) {
    
      user = new User({ mobile, password });
      await user.save();
      return res.status(201).json({ message: "User created and logged inn", user });
    }

  
    if (user.password === password) {
      return res.status(200).json({ message: "Login successful", user });
    } else {
      return res.status(401).json({ message: "Incorrect password" });
    }

  } catch (err) {
    return res.status(500).json({ message: "Enter login detils", error: err.message });
  }
});

export default router;
