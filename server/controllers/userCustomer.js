import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import sendWelcomeMail from "../services/mail.js";
dotenv.config();

import userCustomerModel from "../models/userCustomer.js";
import userTailor from "../models/userTailor.js";

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
        console.error(error);
    }
};

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const oldUserCustomer = await userCustomerModel.findOne({ email });
        const oldUserTailor = await userTailor.findOne({email});

        if (oldUserCustomer)
            return res.status(404).json({ message: "User already exist" });

        if (oldUserTailor)
            return res.status(404).json({ message: "A tailor account exist with same email. Please use another Email." });

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
        console.error(error);
    }
};
