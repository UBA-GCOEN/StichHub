import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import userTailorModel from "../models/userTailor.js";
dotenv.config();

const SECRET = process.env.TAILOR_USER;

const authTailor = async (req, res, next) => {
  // Implementation Athorization using Bearer Token
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, SECRET);

      req.userId = await userTailorModel
        .findById(decoded.id)
        .select("-password");

      next();
    } catch (error) {
      res.status(401).json({
        success: false,
        message: "Not Authorize please Sign In",
      });
      // throw new Error("Not authorized, token failed");
    }
  }
};

export default authTailor;
