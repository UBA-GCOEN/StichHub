import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import sendWelcomeMail from "../services/mail.js";
import CartList from "../models/cart.js";
import userCustomerModel from "../models/userCustomer.js";
dotenv.config();

const SECRET = process.env.CUSTOMER_USER;

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const oldUser = await userCustomerModel.findOne({ email });

        if (!oldUser)
            return res.status(404).json({ message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(
            password,
            oldUser.password
        );

        if (!isPasswordCorrect)
            return res.status(404).json({ message: "Invalid Credentials" });

        const token = jwt.sign(
            { email: oldUser.email, id: oldUser._id },
            SECRET,
            {
                expiresIn: "1h",
            }
        );

        res.status(200).json({ result: oldUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
};

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const oldUser = await userCustomerModel.findOne({ email });

        if (oldUser)
            return res.status(404).json({ message: "User already exist" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await userCustomerModel.create({
            name,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign(
            { email: result.email, id: result._id },
            SECRET,
            { expiresIn: "1h" }
        );
        
        let userName = name.split(' ')[0];
        await sendWelcomeMail(userName, email);

        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
};

export const deleteAccount = async (req, res)=>{
    try{
      const user = await userCustomerModel.findOne({email: req.body.email});
      console.log(user._id.toString())
      await userCustomerModel.deleteOne({email: req.body.email});
      await CartList.deleteOne({customerId: user._id.toString()});
      res.status(200).json({result: true})
    }catch(error){
      console.log(error);
      res.status(500).json({message: "Something went wrong"})
    }
  }
