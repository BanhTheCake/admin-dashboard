import mongoose from 'mongoose';
export declare const ProductStatsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
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
        Date?: string;
        totalSales?: number;
        totalUnits?: number;
    }[];
    yearlySalesTotal?: number;
    yearlyTotalSoldUnits?: number;
    productId?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    };
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
        Date?: string;
        totalSales?: number;
        totalUnits?: number;
    }[];
    yearlySalesTotal?: number;
    yearlyTotalSoldUnits?: number;
    productId?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    };
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
        Date?: string;
        totalSales?: number;
        totalUnits?: number;
    }[];
    yearlySalesTotal?: number;
    yearlyTotalSoldUnits?: number;
    productId?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    };
    year?: number;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
