import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,  // Trims whitespace from the input
    },
    description: {
      type: String,
      required: true,
      trim: true,  // Trims whitespace from the input
    },
  },
  { timestamps: true }  // Automatically adds createdAt and updatedAt fields
);

export default mongoose.model('Category', CategorySchema);
