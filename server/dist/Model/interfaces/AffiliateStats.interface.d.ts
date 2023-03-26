import { Document } from 'mongoose';
export interface AffiliateStats extends Document {
    userId: string;
    affiliateSales: string[];
}
