import jwt from "jsonwebtoken";
import base64url from "base64url";
import * as dotenv from "dotenv";
dotenv.config();

// for reuseability made this function in seperate file
const generateToken = (result, SECRET, tokenValidity = "1h") => {
  return jwt.sign({ email: result.email, id: result._id }, SECRET, {
    expiresIn: tokenValidity,
  });
};

export default generateToken;
