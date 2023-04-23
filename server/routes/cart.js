import express from 'express';
import { addOrder, getCartList } from '../controllers/cart.js';

const router = express.Router();
import authCustomer from '../middlewares/authCustomer.js';

router.post('/:orderId/:tailorId', authCustomer, addOrder);
router.get('/list', authCustomer, getCartList);


export default router;