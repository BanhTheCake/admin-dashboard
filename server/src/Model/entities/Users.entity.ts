import mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    password: String,
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    role: {
      type: String,
      enum: ['admin', 'user', 'superAdmin'],
      default: 'admin',
    },
    transactions: { type: [mongoose.Types.ObjectId], ref: 'transactions' },
  },
  {
    timestamps: true,
  },
);
