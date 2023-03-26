"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let TransactionsService = class TransactionsService {
    constructor(TransactionModel) {
        this.TransactionModel = TransactionModel;
    }
    async getAllTransactions({ page, pageSize, field, sort, search = '', }) {
        try {
            const generateSort = (field, sort) => {
                const fieldInput = field !== null && field !== void 0 ? field : 'createdAt';
                const sortInput = sort !== null && sort !== void 0 ? sort : 'desc';
                return { [fieldInput]: sortInput };
            };
            const transactions = await this.TransactionModel.find({
                $or: [
                    { cost: { $regex: new RegExp(search, 'i') } },
                    { userId: { $regex: new RegExp(search, 'i') } },
                ],
            })
                .skip((page - 1) * pageSize)
                .limit(pageSize)
                .sort(generateSort(field, sort))
                .exec();
            const total = await this.TransactionModel.count({
                $or: [
                    { cost: { $regex: new RegExp(search, 'i') } },
                    { userId: { $regex: new RegExp(search, 'i') } },
                ],
            }).exec();
            return {
                data: {
                    transactions,
                    total,
                },
            };
        }
        catch (error) {
            console.log(error);
            if (error.response) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Something wrong with server !');
        }
    }
};
TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TRANSACTIONS')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TransactionsService);
exports.TransactionsService = TransactionsService;
//# sourceMappingURL=transactions.service.js.map