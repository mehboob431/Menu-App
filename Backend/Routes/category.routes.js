import express from 'express';
import createCategory from '../Controllers/Category/Add.js';
import getCategories from '../Controllers/Category/getAll.js';
import getCategoryById from '../Controllers/Category/getById.js';
import updateCategory from '../Controllers/Category/update.js';
import deleteCategory from '../Controllers/Category/delete.js'; 

const router = express.Router();

// Route to create a new category
router.post('/', createCategory);

// Route to get all categories
router.get('/', getCategories);

// Route to get a category by ID
router.get('/:id', getCategoryById);

// Route to update a category by ID
router.put('/:id', updateCategory);

// Route to delete a category by ID
router.delete('/:id', deleteCategory);

export default router;
