import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

import userTailorModel from "../models/userTailor.js";

const SECRET = process.env.TAILOR_USER;

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await userTailorModel.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(404).json({ message: "Invalid Credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ result: oldUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

export const register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$%#^&*])(?=.*[0-9]).{8,}$/;

  if(name.length < 6){
    return res.status(404).json({message: "Name must be atleast 6 characters long."})
    }
  
    if(!passwordRegex.test(password)){
      return res.status(404).json({message: "Password must be at least 8 characters long and include at least 1 uppercase letter, 1 lowercase letter, 1 symbol (@$%#^&*), and 1 number (0-9)"})
    }

  try {
    const oldUser = await userTailorModel.findOne({ email });

    if (oldUser) return res.status(404).json({ message: "User already exist" });

    if (password !== confirmPassword)
      return res.status(404).json({ message: "Password doesn't Match" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await userTailorModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};
