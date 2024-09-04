import FoodItem from '../../Models/FoodItem.js';

const deleteFoodItem = async (req, res) => {
  try {
    const deletedItem = await FoodItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Food item not found' });
    }
    res.status(200).json({ message: 'Food item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default deleteFoodItem