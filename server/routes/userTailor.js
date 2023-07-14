import express from "express";
import {
  signin,
  register,
  resendVerificationLink,
  verifyEmail,
  getMySelf,
} from "../controllers/userTailor.js";
import authTailor from "../middlewares/authTailor.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/register", register);
router.put("/verify", verifyEmail);
router.post("/resend/verificationlink", resendVerificationLink);
router.get("/getmyself", authTailor, getMySelf);

export default router;
