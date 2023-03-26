import { Document } from 'mongoose';

export interface OverallStats extends Document {
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
  years: number;
  monthlyData: { month: string; totalSales: number; totalUnits: number }[];
  dailyData: { date: string; totalSales: number; totalUnits: number }[];
  totalCustomers: number;
  salesByCategory: {
    [key: string]: number;
  };
}
