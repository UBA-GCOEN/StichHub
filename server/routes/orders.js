import express from 'express';
import { addOrder, getOrders, updateStatus } from '../controllers/order.js';

const router = express.Router();
import authCustomer from '../middlewares/authCustomer.js';
import authTailor from '../middlewares/authTailor.js';

router.post('/request', authCustomer, addOrder);
router.get('/request/tailor', authTailor, getOrders);
router.put('/:orderId/request/:requestId/status', authTailor, updateStatus);


export default router;