import express from 'express';
import { addTailor, getTailorList } from '../controllers/tailorDetails.js'

const router = express.Router();
import authTailor from "../middlewares/authTailor.js"

router.get('/list', getTailorList);
router.post('/list', authTailor, addTailor);


export default router;