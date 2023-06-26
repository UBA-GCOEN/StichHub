import express from 'express';
import { signin, register, deleteAccount } from '../controllers/userTailor.js'

const router = express.Router();

router.post('/signin', signin);
router.post('/register', register);
router.post("/delete", deleteAccount)

export default router;
