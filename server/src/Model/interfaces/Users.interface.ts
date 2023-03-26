import { Document } from 'mongoose';

export interface Users extends Document {
  email: string;
  name: string;
  password: string;
  city: string;
  state: string;
  country: string;
  occupation: string;
  phoneNumber: string;
  role: 'admin' | 'user' | 'superAdmin';
  transactions: string[];
}
