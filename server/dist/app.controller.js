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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const index_1 = require("./data/index");
const exceptions_1 = require("@nestjs/common/exceptions");
let AppController = class AppController {
    constructor(OverallStatModel, ProductStatModel, ProductModel, UserModel, TransactionModel, AffiliateStatModel) {
        this.OverallStatModel = OverallStatModel;
        this.ProductStatModel = ProductStatModel;
        this.ProductModel = ProductModel;
        this.UserModel = UserModel;
        this.TransactionModel = TransactionModel;
        this.AffiliateStatModel = AffiliateStatModel;
    }
    insertAllData() {
        this.AffiliateStatModel.insertMany(index_1.dataAffiliateStat);
        this.OverallStatModel.insertMany(index_1.dataOverallStat);
        this.ProductModel.insertMany(index_1.dataProduct);
        this.ProductStatModel.insertMany(index_1.dataProductStat);
        this.TransactionModel.insertMany(index_1.dataTransaction);
        this.UserModel.insertMany(index_1.dataUser);
    }
    throwError() {
        throw new exceptions_1.InternalServerErrorException('Something wrong with server !');
    }
};
__decorate([
    (0, common_1.Get)('insert'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "insertAllData", null);
__decorate([
    (0, common_1.Get)('error'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "throwError", null);
AppController = __decorate([
    (0, common_1.Controller)(''),
    __param(0, (0, common_1.Inject)('OVERALL_STATS')),
    __param(1, (0, common_1.Inject)('PRODUCT_STATS')),
    __param(2, (0, common_1.Inject)('PRODUCTS')),
    __param(3, (0, common_1.Inject)('USERS')),
    __param(4, (0, common_1.Inject)('TRANSACTIONS')),
    __param(5, (0, common_1.Inject)('AFFILIATE_STATS')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map