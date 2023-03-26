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
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const getCountryISO3 = require("country-iso-2-to-3");
let CustomersService = class CustomersService {
    constructor(UserModel, AffiliateStatModel, TransactionModel, OverallStatModel) {
        this.UserModel = UserModel;
        this.AffiliateStatModel = AffiliateStatModel;
        this.TransactionModel = TransactionModel;
        this.OverallStatModel = OverallStatModel;
    }
    async getAllCustomers({ page, pageSize, field, sort }) {
        try {
            const generateSort = (field, sort) => {
                const fieldInput = field !== null && field !== void 0 ? field : 'createdAt';
                const sortInput = sort !== null && sort !== void 0 ? sort : 'desc';
                return { [fieldInput]: sortInput };
            };
            const users = await this.UserModel.find({ role: 'user' })
                .select('-password')
                .skip((page - 1) * pageSize)
                .limit(pageSize)
                .sort(generateSort(field, sort))
                .exec();
            const totalUsers = await this.UserModel.count({ role: 'user' }).exec();
            return {
                data: {
                    users,
                    total: totalUsers,
                },
            };
        }
        catch (error) {
            if (error.response) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Something wrong with server !');
        }
    }
    async getGeography() {
        try {
            const users = await this.UserModel.find().sort({ country: 'asc' }).exec();
            const formatData = users.reduce((result, user) => {
                const twoToThreeCharacter = getCountryISO3(user.country);
                if (result[twoToThreeCharacter]) {
                    const cnt = result[twoToThreeCharacter] + 1;
                    return Object.assign(Object.assign({}, result), { [twoToThreeCharacter]: cnt });
                }
                return Object.assign(Object.assign({}, result), { [twoToThreeCharacter]: 1 });
            }, {});
            const geography = Object.entries(formatData).reduce((result, [key, value]) => {
                return [...result, { id: key, value }];
            }, []);
            return {
                data: {
                    geography,
                },
            };
        }
        catch (error) {
            console.log(error);
            if (error.response)
                throw error;
            throw new common_1.InternalServerErrorException('Something wrong with server !');
        }
    }
    async getAllAdmins() {
        try {
            const admins = await this.UserModel.find({ role: 'admin' }).exec();
            return {
                data: admins,
            };
        }
        catch (error) {
            if (error.response)
                throw error;
            throw new common_1.InternalServerErrorException('Something wrong with server !');
        }
    }
    async getAllUserPerformance(id) {
        try {
            const users = await this.UserModel.aggregate([
                { $match: { _id: new mongoose_1.default.Types.ObjectId(id) } },
                {
                    $lookup: {
                        from: 'affiliatestats',
                        as: 'affiliatestats',
                        localField: '_id',
                        foreignField: 'userId',
                    },
                },
                { $unwind: '$affiliatestats' },
                {
                    $lookup: {
                        from: 'transactions',
                        as: 'transaction',
                        localField: 'affiliatestats.affiliateSales',
                        foreignField: '_id',
                    },
                },
                { $unwind: '$transaction' },
                { $project: { transaction: 1 } },
            ]).exec();
            return {
                data: users,
            };
        }
        catch (error) {
            console.log(error);
            if (error.response)
                throw error;
            throw new common_1.InternalServerErrorException('Something wrong with server !');
        }
    }
    async getDashboard() {
        try {
            const currentMonth = 'November';
            const currentYear = 2021;
            const currentDay = '2021-11-15';
            const transactions = await this.TransactionModel.find()
                .limit(50)
                .sort({ createdOn: -1 })
                .exec();
            const overallStat = await this.OverallStatModel.find({
                year: currentYear,
            }).exec();
            const { totalCustomers, yearlyTotalSoldUnits, yearlySalesTotal, monthlyData, salesByCategory, } = overallStat[0];
            const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
                return month === currentMonth;
            });
            const todayStats = overallStat[0].dailyData.find(({ date }) => {
                return date === currentDay;
            });
            return {
                data: {
                    totalCustomers,
                    yearlyTotalSoldUnits,
                    yearlySalesTotal,
                    monthlyData,
                    salesByCategory,
                    thisMonthStats,
                    todayStats,
                    transactions,
                },
            };
        }
        catch (error) {
            console.log(error);
            if (error.response)
                throw error;
            throw new common_1.InternalServerErrorException('Something wrong with server !');
        }
    }
};
CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USERS')),
    __param(1, (0, common_1.Inject)('AFFILIATE_STATS')),
    __param(2, (0, common_1.Inject)('TRANSACTIONS')),
    __param(3, (0, common_1.Inject)('OVERALL_STATS')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model])
], CustomersService);
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map