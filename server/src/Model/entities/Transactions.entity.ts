import mongoose from 'mongoose';

export const TransactionsSchema = new mongoose.Schema(
  {
    affiliateId: { type: mongoose.Types.ObjectId, ref: 'affiliateStats' },
    cost: String,
    products: { type: [mongoose.Types.ObjectId], ref: 'products' },
    userId: String,
  },
  {
    timestamps: true,
  },
);
