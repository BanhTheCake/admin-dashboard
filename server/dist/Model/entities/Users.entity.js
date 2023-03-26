"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UsersSchema = new mongoose_1.default.Schema({
    email: String,
    name: String,
    password: String,
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    role: {
        type: String,
        enum: ['admin', 'user', 'superAdmin'],
        default: 'admin',
    },
    transactions: { type: [mongoose_1.default.Types.ObjectId], ref: 'transactions' },
}, {
    timestamps: true,
});
//# sourceMappingURL=Users.entity.js.map