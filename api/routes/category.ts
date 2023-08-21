import express, { Request, Response } from "express";
import { Category } from "../models/Category";

const router = express.Router();

// get all
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

export { router as categoryRouter };
