import express, { Request, Response } from "express";
const router = express.Router();
import { User } from "./../models/User";
import CryptoJs from "crypto-js";

//register
router.post("/register", async (req: Request, res: Response) => {
  const { username, email, isAdmin } = req.body;
  const password = CryptoJs.AES.encrypt(
    req.body.password,
    process.env.PASS_SEC!
  ).toString();

  const newUser = User.build({
    username,
    email,
    password,
    isAdmin,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

export { router as authRouter };
