import express from 'express';
import createOrder from '../Controllers/Order/Add.js'
import getAllOrders from '../Controllers/Order/getAll.js'
import getOrderById from '../Controllers/Order/getById.js'
import updateOrder from '../Controllers/Order/update.js'
import deleteOrder from '../Controllers/Order/delete.js'

const router = express.Router();

// Create a new order
router.post('/', createOrder);

// Get all orders
router.get('/', getAllOrders);

// Get an order by ID
router.get('/:id', getOrderById);

// Update an order
router.put('/:id', updateOrder);

// Delete an order
router.delete('/:id', deleteOrder);

export default router;
