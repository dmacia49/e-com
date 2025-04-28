const Order = require('../models/Order');

// GET /api/orders - Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};


exports.getOrdersById = async (req, res) => {
  try {
    const userId = req.user.userId; // assuming authMiddleware sets req.user
    //console.log(req.user.userId);
    //TODO get only orders from the user 

    if (!userId) {
      return res.status(400).json({ message: "User ID is missing or invalid." });
    }

    const orders = await Order.find({ user: userId });

    if (!orders.length) {
      return res.status(200).json({ message: "No orders found", orders: [] });
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching user orders:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// POST /api/orders - Create order
// exports.createOrder = async (req, res) => {
//   try {
//     const newOrder = new Order(req.body);
//     const saved = await newOrder.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(400).json({ message: 'Failed to create order', error: err.message });
//   }
// };
exports.createOrder = async (req, res) => {
  try {
    const { items, totalAmount } = req.body;

    const newOrder = new Order({
      user: req.user.userId, // assuming you're using JWT and `protect` middleware
      items,
      totalAmount
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order created', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create order', error: error.message });
  }
};

// PUT /api/orders/:id - Update order
exports.updateOrder = async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Order not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update order', error: err.message });
  }
};

// DELETE /api/orders/:id - Delete order
exports.deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Order not found' });
    res.json({ message: 'Order deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete order' });
  }
};
