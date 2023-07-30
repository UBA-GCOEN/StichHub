import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const SECRET = process.env.CUSTOMER_USER;


const authCustomer = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, SECRET);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Not a Authorize User. Please Sign In",
      type:"JWT Error"
    });
    console.error(error);
  }
};

export default authCustomer;
