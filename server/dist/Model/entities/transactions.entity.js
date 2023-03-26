"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TransactionsSchema = new mongoose_1.default.Schema({
    affiliateId: { type: mongoose_1.default.Types.ObjectId, ref: 'affiliateStats' },
    cost: String,
    products: { type: [mongoose_1.default.Types.ObjectId], ref: 'products' },
    userId: String,
}, {
    timestamps: true,
});
//# sourceMappingURL=transactions.entity.js.map