import { Document } from 'mongoose';
export interface Products extends Document {
    name: string;
    price: string;
    description: string;
    category: string;
    rating: number;
    supply: number;
}
