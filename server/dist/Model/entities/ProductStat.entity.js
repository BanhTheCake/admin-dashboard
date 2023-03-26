"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStatsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProductStatsSchema = new mongoose_1.default.Schema({
    productId: { type: mongoose_1.default.Types.ObjectId, ref: 'products' },
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [{ month: String, totalSales: Number, totalUnits: Number }],
    dailyData: [{ Date: String, totalSales: Number, totalUnits: Number }],
}, {
    timestamps: true,
});
//# sourceMappingURL=ProductStat.entity.js.map