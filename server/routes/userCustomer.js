import express from 'express';
import { signin, register, deleteAccount } from '../controllers/userCustomer.js'
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  });

const router = express.Router();

router.post("/signin",limiter, signin);
router.post("/register",limiter, register);
router.post("/delete",limiter,  deleteAccount)

export default router;
