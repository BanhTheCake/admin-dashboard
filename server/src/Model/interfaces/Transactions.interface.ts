import { Document } from 'mongoose';

export interface Transactions extends Document {
  affiliateId: string;
  cost: string;
  products: string[];
  userId: string;
}
