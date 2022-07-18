import express from "express";
import mongoose from "mongoose";
const dotenv = require("dotenv");

const app = express();

import { authRouter } from "./routes/auth";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => console.log("connected to database"))
  .catch((err: Error) => {
    console.log(err);
  });

app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("listening to port 5000");
});
