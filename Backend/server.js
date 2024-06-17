import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoutes.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { placeOrder } from './controllers/orderController.js';

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.post('/api/order/place', placeOrder);

app.get("/", (req, res) => {
   res.send("API WORKING");
});


app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
