import FoodItem from '../../Models/FoodItem.js';
import uploadImage from '../../Utils/cloudinaryUpload.js';

const createFoodItem = async (req, res) => {
  // console.log('res.files', res.files, req.file)
  try {
    const result = await uploadImage(req.file.path, `menu/${req.body.category.toLowerCase()}`)
    // console.log('result', result)
    const newItem = new FoodItem({ ...req.body, imageUrl: result.secure_url });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default createFoodItem;