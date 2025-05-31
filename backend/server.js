// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connection from "./db.js";
import logroute from "./login.js";
import upload from "./uploadproduct.js";







dotenv.config();

const app = express();
const PORT = 4000;

// Connect to MongoDB
connection();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());



app.use('/api', logroute);
app.use('/api', upload);







// Root route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
