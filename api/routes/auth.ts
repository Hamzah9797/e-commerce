import express, { Request, Response } from "express";
const router = express.Router();
import { User } from "./../models/User";
import CryptoJs from "crypto-js";
import * as jwt from "jsonwebtoken";

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

// login
router.post("/login", async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(401).json("no user found");
    }

    const hashPassword = CryptoJs.AES.decrypt(
      user?.password,
      process.env.PASS_SEC!
    );

    const OriginalPassword = hashPassword.toString(CryptoJs.enc.Utf8);

    if (!OriginalPassword) {
      return res.status(401).json("wrong credentials");
    }

    const accessToken = jwt.sign(
      {
        id: user?._id,
        isAdmin: user?.isAdmin,
      },
      process.env.JWT_SECRET_KEY!
    );

    return res.status(200).json({ user, accessToken });
    //---------------------
  } catch (err) {
    return res.status(500).json(err);
  }
});

export { router as authRouter };
