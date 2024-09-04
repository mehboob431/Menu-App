import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from 'cloudinary'

//Routes
import authRoute from "./Routes/auth.routes.js";
import categoryRoutes from './routes/category.routes.js';
import foodItemRoutes from './Routes/menu.routes.js';
import orderRoutes from './Routes/order.routes.js';

const app = express();

dotenv.config();



// Return "https" URLs by setting secure: true
// cloudinary.config({
//   secure: true
// });
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET,
  secure: true

});

// Log the configuration
console.log(cloudinary.config());

//middlewares
// "http://127.0.0.1:5173", "http://localhost:5173", 

// {
//     origin: ["http://localhost:5173", "https://dmc-listings-rinor.vercel.app","https://dmc-listings-rinor-beta.vercel.app"],
//     // methods: ["POST", "GET", "DELETE", "PUT"],
//     credentials: true
//   }

app.use(cors());

app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));

app.use("/api/auth", authRoute);
app.use('/api/categories', categoryRoutes);
app.use('/api/foodItems', foodItemRoutes);
app.use('/api/orders', orderRoutes);

// app.use("/api/property", propertyRoute);
// app.use("/api/driver", driverRoute);
// app.use("/api/vehicle", vehicleRoute);


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to mongoDB.");
  } catch {
    console.log("Connection Error");
  }
};

mongoose.connection.on("disconnected", () => {
  // res.send("MongoDB Disconnected!")
  console.log("MongoDB Disconnected!");
});

app.get("/", (req, res) => {
  res.send("Hello From Backend");
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  connect();
  console.log(`Server Listen on port ${port}`);
  console.log("Connected to backend.");
});
