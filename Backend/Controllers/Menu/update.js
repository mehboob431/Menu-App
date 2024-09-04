import FoodItem from '../../Models/FoodItem.js';

const updateFoodItem = async (req, res) => {
    try {
      const updatedItem = await FoodItem.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedItem) {
        return res.status(404).json({ message: 'Food item not found' });
      }
      res.status(200).json(updatedItem);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

export default updateFoodItem;