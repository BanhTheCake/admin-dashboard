import mongoose from 'mongoose';

export const OverallStatsSchema = new mongoose.Schema(
  {
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [{ month: String, totalSales: Number, totalUnits: Number }],
    dailyData: [{ date: String, totalSales: Number, totalUnits: Number }],
    totalCustomers: Number,
    salesByCategory: {
      type: Map,
      of: Number,
    },
  },
  {
    timestamps: true,
  },
);
