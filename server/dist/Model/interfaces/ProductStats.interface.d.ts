import { Document } from 'mongoose';
export interface ProductsStats extends Document {
    productId: string;
    yearlySalesTotal: number;
    yearlyTotalSoldUnits: number;
    year: number;
    monthlyData: {
        month: string;
        totalSales: number;
        totalUnits: number;
    }[];
    dailyData: {
        Date: string;
        totalSales: number;
        totalUnits: number;
    }[];
}
