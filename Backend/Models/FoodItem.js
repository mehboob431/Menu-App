import mongoose from 'mongoose';

export const FoodItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    ingredient: {
      type: [String],
    },
    price: {
      type: Number,
    },
    category: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model('FoodItem', FoodItemSchema);
