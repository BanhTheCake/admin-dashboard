import { Schema, Prop } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Users } from '../interfaces/Users.interface';

export const AffiliateStatsSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: 'users' },
    affiliateSales: { type: [mongoose.Types.ObjectId], ref: 'transactions' },
  },
  {
    timestamps: true,
  },
);
