const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const auth = require ('../middleware/auth');

// /api/orders
router.get('/',  orderController.getAllOrders);
router.get('/myOrders', auth, orderController.getOrdersById);
router.post('/', auth, orderController.createOrder);
router.put('/:id', auth, orderController.updateOrder);
router.delete('/:id', auth, orderController.deleteOrder);

module.exports = router;
