import mongoose from 'mongoose';
import { FoodItemSchema } from './FoodItem.js';

const orderItemSchema = new mongoose.Schema({
    ...FoodItemSchema.obj, // Spread the fields from the FoodItem schema
    quantity: {
        type: Number,
    }
});

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    total: {
        type: Number,
    },
     paymentMethod: {
        type: String,
    },
    orderDescription: {
        type: String,
    },
    timeTake: {
        type: Number,
        default:30,
    },
    TableNumber: {
        type: Number,
    },
    feedback: {
        stars: Number,
        text: String,
    },
    status: {
        type: String,
        default: "pending",
    },
    items: [orderItemSchema],
    
},
    {
        timestamps: true,
    });

export default mongoose.model('Order', orderSchema);
