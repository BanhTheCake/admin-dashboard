import mongoose from 'mongoose';
export declare const OverallStatsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    monthlyData: {
        month?: string;
        totalSales?: number;
        totalUnits?: number;
    }[];
    dailyData: {
        date?: string;
        totalSales?: number;
        totalUnits?: number;
    }[];
    yearlySalesTotal?: number;
    yearlyTotalSoldUnits?: number;
    totalCustomers?: number;
    salesByCategory?: Map<string, number>;
    year?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    monthlyData: {
        month?: string;
        totalSales?: number;
        totalUnits?: number;
    }[];
    dailyData: {
        date?: string;
        totalSales?: number;
        totalUnits?: number;
    }[];
    yearlySalesTotal?: number;
    yearlyTotalSoldUnits?: number;
    totalCustomers?: number;
    salesByCategory?: Map<string, number>;
    year?: number;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    monthlyData: {
        month?: string;
        totalSales?: number;
        totalUnits?: number;
    }[];
    dailyData: {
        date?: string;
        totalSales?: number;
        totalUnits?: number;
    }[];
    yearlySalesTotal?: number;
    yearlyTotalSoldUnits?: number;
    totalCustomers?: number;
    salesByCategory?: Map<string, number>;
    year?: number;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
