"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateStatsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AffiliateStatsSchema = new mongoose_1.default.Schema({
    userId: { type: mongoose_1.default.Types.ObjectId, ref: 'users' },
    affiliateSales: { type: [mongoose_1.default.Types.ObjectId], ref: 'transactions' },
}, {
    timestamps: true,
});
//# sourceMappingURL=AffiliateStats.entity.js.map