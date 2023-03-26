"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProductsSchema = new mongoose_1.default.Schema({
    name: String,
    price: String,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
}, {
    timestamps: true,
});
//# sourceMappingURL=Products.entity.js.map