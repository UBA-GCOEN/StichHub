import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import sendWelcomeMail from "../services/mail.js";
import OrderList from "../models/order.js";
import userTailorModel from "../models/userTailor.js";
import emailValidator from "email-validator";
import userCustomer from "../models/userCustomer.js";
dotenv.config();

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
    console.error(error);
  }
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if(!email){
    return res.status(400).json({ error: 'Invalid email' });
}

  try {
    const oldUserTailor = await userTailorModel.findOne({ email });
    const oldUserCustomer = await userCustomer.findOne({ email });


    if (oldUserTailor) return res.status(404).json({ message: "User already exist" });
    if (oldUserCustomer) return res.status(404).json({ message: "A customer account exist with same email. Please use another Email." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await userTailorModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, SECRET, {
      expiresIn: "1h",
    });

    let userName = name.split(' ')[0];
    await sendWelcomeMail(userName, email);

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.error(error);
  }
};

export const deleteAccount = async (req, res)=>{
  const {email} = req.body;
  if(!emailValidator.validate(email)){
    return res.status(400).json({ error: 'Invalid email' });
}
  try{
    const user = await userTailorModel.findOne({email});
    await userTailorModel.deleteOne({email});
    await OrderList.deleteOne({tailorId: user._id.toString()})
    res.status(200).json({result: true})
  }catch(error){
    console.log(error);
    res.status(500).json({message: "Something went wrong"})
  }
}
