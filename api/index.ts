import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const dotenv = require("dotenv");

const app = express();

app.use(cors());
import { authRouter } from "./routes/auth";
import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";
import { orderRouter } from "./routes/order";
import { cartRouter } from "./routes/cart";
import { stripeRouter } from "./routes/stripe";
import { categoryRouter } from "./routes/category";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => console.log("connected to database"))
  .catch((err: Error) => {
    console.log(err);
  });

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/checkout", stripeRouter);
app.use("/api/categories", categoryRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("listening to port 5000");
});
