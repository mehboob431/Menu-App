import FoodItem from '../../Models/FoodItem.js';

const getFoodItems = async (req, res) => {
    try {
      const items = await FoodItem.find();
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  

export default getFoodItems;