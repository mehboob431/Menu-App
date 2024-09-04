import FoodItem from '../../Models/FoodItem.js';

const getFoodItemById = async (req, res) => {
    try {
        const item = await FoodItem.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export default getFoodItemById