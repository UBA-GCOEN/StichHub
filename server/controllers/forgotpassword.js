import * as dotenv from "dotenv";
dotenv.config();

import userCustomerModel from "../models/userCustomer.js";
import userTailorModel from "../models/userTailor.js";


export const forgotpassword = async (req, res) => {
    const { email, model } = req.body;

    try {
        const oldUser = (model==="customer")?await userCustomerModel.findOne({ email }):await userTailorModel.findOne({ email });

        if (!oldUser)
            return res.status(404).json({ message: "User doesn't exist" });

        res.status(200).json({ result: oldUser});
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
};
