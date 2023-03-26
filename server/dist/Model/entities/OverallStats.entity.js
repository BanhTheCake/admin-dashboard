"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverallStatsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.OverallStatsSchema = new mongoose_1.default.Schema({
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
}, {
    timestamps: true,
});
//# sourceMappingURL=OverallStats.entity.js.map