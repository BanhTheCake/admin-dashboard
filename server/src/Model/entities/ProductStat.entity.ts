import mongoose from 'mongoose';

export const ProductStatsSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Types.ObjectId, ref: 'products' },
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [{ month: String, totalSales: Number, totalUnits: Number }],
    dailyData: [{ Date: String, totalSales: Number, totalUnits: Number }],
  },
  {
    timestamps: true,
  },
);
