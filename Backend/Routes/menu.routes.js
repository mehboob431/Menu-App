import express from 'express';
import  createFoodItem from '../Controllers/Menu/add.js';
import  getFoodItems from '../Controllers/Menu/getAll.js';
import  getFoodItemById from '../Controllers/Menu/getById.js';
import  updateFoodItem from '../Controllers/Menu/update.js';
import  deleteFoodItem from '../Controllers/Menu/delete.js';
import upload from '../Utils/Multer.js';

const router = express.Router();

// POST - Create a new food item
router.post('/',upload.single('imageUrl'), createFoodItem);

// GET - Retrieve all food items
router.get('/', getFoodItems);

// GET - Retrieve a specific food item by ID
router.get('/:id', getFoodItemById);

// PUT - Update a specific food item by ID
router.put('/:id', updateFoodItem);

// DELETE - Delete a specific food item by ID
router.delete('/:id', deleteFoodItem);

export default router;
