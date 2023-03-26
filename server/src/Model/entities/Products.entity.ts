import mongoose from 'mongoose';

export const ProductsSchema = new mongoose.Schema(
  {
    name: String,
    price: String,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  {
    timestamps: true,
  },
);
