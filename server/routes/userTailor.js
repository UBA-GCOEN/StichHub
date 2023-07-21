
import express from "express";
import rateLimit from "express-rate-limit";
import {
  signin,
  register,
  resendVerificationLink,
  verifyEmail,
  getMySelf,
  deleteAccount,
} from "../controllers/userTailor.js";
import authTailor from "../middlewares/authTailor.js";
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  });

const router = express.Router();

router.post("/signin", limiter,signin);
router.post("/register", limiter,register);
router.put("/verify",limiter, verifyEmail);
router.post("/resend/verificationlink", limiter,resendVerificationLink);
router.get("/getmyself",limiter, authTailor, getMySelf);
router.post("/delete", limiter ,deleteAccount)


export default router;
