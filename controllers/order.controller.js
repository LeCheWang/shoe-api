const orderModel = require('../models/order.model');

module.exports = {
  getOrder: async (req, res) => {
    const account_id = req.query.account_id;

    const bodyQuery = {};
    if (account_id) {
      bodyQuery.account = account_id;
    }
    const orders = await orderModel.find(bodyQuery).populate({
      path: 'cart',
      populate: {
        path: 'items.shoe',
      },
    });

    return res.status(200).json(orders);
  },
  createOrder: async (req, res) => {
    const body = req.body;
    const order = await orderModel.create(body);
    return res.status(201).json(order);
  },
  updateOrder: async (req, res) => {
    const order_id = req.params.order_id;
    const body = req.body;
    const updatedOrder = await orderModel.findByIdAndUpdate(order_id, body, {
      new: true,
    });
    return res.status(200).json(updatedOrder);
  },
  deleteOrder: async (req, res) => {
    const order_id = req.params.order_id;
    const deletedOrder = await orderModel.findByIdAndDelete(order_id);
    return res.status(200).json(deletedOrder);
  },
};
