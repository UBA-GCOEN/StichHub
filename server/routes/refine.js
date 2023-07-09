import express from 'express';
import improveOrder from '../controllers/refine.js';

const router = express.Router();
import authCustomer from '../middlewares/authCustomer.js';

router.post('/request', authCustomer, improveOrder);

export default router;


