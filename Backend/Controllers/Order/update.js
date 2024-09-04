import Order from "../../Models/Order.js";

const updateOrder = async (req, res) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedOrder) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.status(200).json(updatedOrder);
    } catch (error) {
      res.status(500).json({ message: 'Error updating order', error });
    }
  };

export default updateOrder;